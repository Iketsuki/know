import os
import time
import re
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import Select, WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import TimeoutException, NoSuchElementException

# ================= CONFIGURATION =================
BASE_URL = "https://judge.hkoi.org"
USERNAME = "your_username"  # <-- FILL THIS
PASSWORD = "your_password"  # <-- FILL THIS
# =================================================

def login(driver):
    """Logs into the judge system."""
    print(f"Logging in to {BASE_URL}...")
    driver.get(f"{BASE_URL}/login")
    
    try:
        driver.find_element(By.NAME, "email").send_keys(USERNAME)
        driver.find_element(By.NAME, "password").send_keys(PASSWORD)
        driver.find_element(By.CSS_SELECTOR, "button[type='submit']").click()
    except Exception:
        print("  Auto-fill failed. Please log in manually.")

    # Wait for login completion (dashboard or navbar)
    try:
        WebDriverWait(driver, 120).until(
            EC.presence_of_element_located((By.CLASS_NAME, "navbar-brand"))
        )
        print("Login successful.")
    except TimeoutException:
        print("Login timed out. Exiting.")
        exit()

def ensure_task_exists(driver, task_id, task_title):
    """
    Checks if task exists by visiting its Edit page.
    If not, creates it via the Add page.
    """
    edit_url = f"{BASE_URL}/schooladmin/hosted/{task_id}/edit"
    driver.get(edit_url)
    
    # Check if we landed on the edit page (look for specific element or title)
    # If redirected to dashboard or 404, the task likely doesn't exist.
    try:
        WebDriverWait(driver, 3).until(
            EC.text_to_be_present_in_element((By.TAG_NAME, "title"), "Edit")
        )
        print(f"  Task {task_id} already exists. Updating...")
        return
    except TimeoutException:
        print(f"  Task {task_id} not found. Creating...")

    # Create Task
    create_url = f"{BASE_URL}/schooladmin/hosted/add"
    driver.get(create_url)
    
    try:
        # Fill Display ID
        id_input = WebDriverWait(driver, 10).until(
            EC.visibility_of_element_located((By.ID, "display_id"))
        )
        id_input.clear()
        id_input.send_keys(task_id)

        # Fill Title
        title_input = driver.find_element(By.ID, "name_en")
        title_input.clear()
        title_input.send_keys(task_title)

        # Submit
        driver.find_element(By.CSS_SELECTOR, "button.btn-success").click()
        
        # Wait for redirect to Edit page or success message
        WebDriverWait(driver, 10).until(
            EC.url_contains(task_id)
        )
        print(f"  Task {task_id} created successfully.")
        
    except Exception as e:
        print(f"  Error creating task: {e}")

def upload_components(driver, task_id, statement_content, solution_content):
    """Uploads the Statement and Solution Code."""
    edit_url = f"{BASE_URL}/schooladmin/hosted/{task_id}/edit"
    driver.get(edit_url)

    # 1. Upload Statement
    if statement_content:
        try:
            # Locate statement field (usually name="statement_en")
            # Using JS to set value for reliability with rich text editors
            statement_area = WebDriverWait(driver, 10).until(
                EC.presence_of_element_located((By.NAME, "statement_en"))
            )
            driver.execute_script("arguments[0].value = arguments[1];", statement_area, statement_content)
            print("  Statement content set.")
        except Exception as e:
            print(f"  Could not set statement: {e}")

    # 2. Upload Solution (Validator)
    if solution_content:
        try:
            # Select Language: Python 3
            lang_select = driver.find_element(By.NAME, "validator_lang")
            Select(lang_select).select_by_value("python3")
            
            # Set Code
            code_area = driver.find_element(By.ID, "validator_program")
            driver.execute_script("arguments[0].value = arguments[1];", code_area, solution_content)
            print("  Solution code set.")
        except Exception as e:
            print(f"  Could not set solution: {e}")

    # Save Changes (Only one save button for the whole edit form usually)
    try:
        save_btn = driver.find_element(By.XPATH, "//button[contains(text(), 'Save Changes')]")
        save_btn.click()
        # Wait for reload/confirmation
        time.sleep(2)
        print("  Task settings saved.")
    except Exception as e:
        print(f"  Error clicking Save: {e}")

def upload_test_data(driver, task_id, tests_dir):
    """Uploads .in and .out files to the testdata page."""
    testdata_url = f"{BASE_URL}/schooladmin/hosted/{task_id}/testdata"
    driver.get(testdata_url)
    
    files = [f for f in os.listdir(tests_dir) if f.endswith(('.in', '.out'))]
    if not files:
        return

    full_paths = [os.path.join(tests_dir, f) for f in files]
    print(f"  Found {len(files)} test files.")

    try:
        # Attempt to find a standard file input
        # Note: Some Dropzone implementations hide the input. We make it visible or send keys directly.
        file_input = driver.find_elements(By.CSS_SELECTOR, "input[type='file']")
        
        if file_input:
            # Upload all files at once (if supported) or loop
            # Sending all paths joined by \n is a common Selenium trick for multiple files
            all_paths_str = "\n".join(full_paths)
            file_input[0].send_keys(all_paths_str)
            
            # Wait for upload processing
            # Look for a progress bar or table rows appearing
            print("  Files sent to uploader. Waiting 10s for processing...")
            time.sleep(10)
        else:
            print("  [Error] No file input found on Test Data page.")

    except Exception as e:
        print(f"  Error uploading test data: {e}")

def process_folder(driver, folder_name):
    """Parses a task folder and orchestrates the upload."""
    
    # Extract ID and Title
    # Folder format: HKOI-UA1001-HelloWorld
    match = re.match(r"HKOI-(UA\d+)-(.*)", folder_name)
    if not match:
        return

    task_id, task_title = match.groups()
    task_title = task_title.replace("-", " ")
    print(f"\nProcessing: [{task_id}] {task_title}")

    base_path = os.path.join(os.getcwd(), folder_name)
    
    # Read Statement
    stmt_path = os.path.join(base_path, f"{task_id}-Question.md")
    stmt_content = None
    if os.path.exists(stmt_path):
        with open(stmt_path, 'r', encoding='utf-8') as f:
            stmt_content = f.read()
    else:
        print(f"  Warning: No statement found at {stmt_path}")

    # Read Solution
    sol_path = os.path.join(base_path, f"{task_id}-Solution.py")
    sol_content = None
    if os.path.exists(sol_path):
        with open(sol_path, 'r', encoding='utf-8') as f:
            sol_content = f.read()
    else:
        print(f"  Warning: No solution found at {sol_path}")

    # Execute Steps
    ensure_task_exists(driver, task_id, task_title)
    upload_components(driver, task_id, stmt_content, sol_content)
    
    # Test Data
    tests_dir = os.path.join(base_path, "tests")
    if os.path.exists(tests_dir):
        upload_test_data(driver, task_id, tests_dir)

def main():
    driver = webdriver.Chrome()
    driver.maximize_window()
    
    try:
        login(driver)
        
        # Scan current directory for "HKOI-UA..." folders
        items = sorted(os.listdir(os.getcwd()))
        for item in items:
            if os.path.isdir(item) and item.startswith("HKOI-UA"):
                process_folder(driver, item)
                
    except Exception as e:
        print(f"Critical Error: {e}")
    finally:
        print("\nBatch process finished.")
        # driver.quit()  # Keep open for inspection

if __name__ == "__main__":
    main()