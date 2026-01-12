# 📝 Homework – Data Representation & Multimedia (Answer Key)

---

## 1. Binary & Overflow

**Alice is a digital media student preparing a portfolio of her work.**

**(a) Convert the following decimal numbers into their 8-bit two’s complement representation.**

**(i) 75** (2 marks)
> **Answer:** `01001011`. 

**(ii) -43** (2 marks)
> **Answer:** `11010101`.

**(b) Will the 8-bit addition of the results in (a)(i) and (a)(ii) create an overflow error? Explain briefly.** (2 marks)

> **Answer:** 75-43=32, -128 < 32 < 127. No. 
---

## 2. Digital Imaging & OCR

**(a) Alice scans a physical painting for her digital portfolio. Suggest two properties that may affect the quality of the scanned image.** (2 marks)

> **Answer:** 
> 1. **Resolution (DPI/PPI):** A higher dots-per-inch count captures more detail.
> 2. **Color Depth (Bit Depth):** More bits per pixel allow for a wider range of colors and smoother gradients.

**(b) Alice wants to convert the handwritten descriptions on her paintings into editable text. Suggest a technology she can use and state one advantage of doing so.** (2 marks)

> **Answer:** **OCR (Optical Character Recognition)**.
> **Advantage:** It makes the text searchable and allows Alice to edit the descriptions in a word processor without retyping everything.

**(c) She decides to save the final high-quality version of her painting as a TIFF file instead of a JPG. Suggest one reason why.** (1 mark)

> **Answer:** TIFF is a **lossless** format (or uncompressed), whereas JPG uses **lossy**.

---
<div style="page-break-before:always"></div>

## 3. Storage Capacity & Identification

**(a) The school uses 2 bytes to store a unique Application ID for every student.**

**(i) How many different IDs can the system represent? Show your calculation.** (2 marks)

> **Calculation:** 2 bytes = 16 bits. .
> **Answer:** 65,536 unique IDs.

**(ii) If the school suddenly receives 80,000 applications, will the 2-byte ID system be sufficient? Explain.** (2 marks)

> **Answer:** No. 80000 > 65536.

**(b) Suggest two advantages of using a QR code over a traditional 1D barcode for this purpose.** (2 marks)

> **Answer:** 
> 1. **Higher Data Capacity:** QR codes can store much more information (like student name and date) compared to simple ID numbers in barcodes.
> 2. **Error Correction:** QR codes can still be read if they are partially damaged or smudged.

---

## 4. Video Formats & Calculations

**(a) Compare MP4 and AVI formats. Why is MP4 generally preferred for online streaming?** (2 marks)
> **Answer:** Smaller file size.

**(b) Calculate the uncompressed file size (in GB) of Alice's video: 1280x720, 30 fps, 24-bit, 120 seconds.** (3 marks)

**Calculation:**
Pixels per frame: $1280 \times 720 = 921,600$

Bytes per frame: $921,600 \times (24 \div 8) = 2,764,800$ bytes

Total frames: $30 \text{ fps} \times 120 \text{ seconds} = 3,600$ frames

Total bytes: $2,764,800 \times 3,600 = 9,953,280,000$ bytes

Convert to GB: $9,953,280,000 \div 1024 \div 1024 \div 1024 \approx \mathbf{9.27 \text{ GB}}$

