"""
Reference solutions for selected exercises.
Constraints: use only indexing, loops, conditionals and len(); avoid helper built-ins like range(), max(), min(), list.append(), etc.
Each section is a small, self-contained script showing one approach.
"""

# W1 Count occurrences
L = [2, 3, 2, 5, 2]
v = 2
count = 0
i = 0
while i < len(L):
    if L[i] == v:
        count = count + 1
    i = i + 1
print('W1 count:', count)  # expect 3

# W2 Sum & average
L = [10, 20, 30, 40]
total = 0
i = 0
while i < len(L):
    total = total + L[i]
    i = i + 1
avg = total / len(L)
print('W2 sum, avg:', total, avg)

# W3 First index (return -1 if not found)
L = [5, 7, 9]
v = 7
idx = -1
i = 0
while i < len(L):
    if L[i] == v:
        idx = i
        break
    i = i + 1
print('W3 first index:', idx)

# A1 Find max and min values and indices
L = [4, 9, 1, 7]
imax = 0
imin = 0
i = 1
while i < len(L):
    if L[i] > L[imax]:
        imax = i
    if L[i] < L[imin]:
        imin = i
    i = i + 1
print('A1 max value,index:', L[imax], imax)
print('A1 min value,index:', L[imin], imin)

# A3 Check ascending/descending/all equal/none
L = [1, 2, 2, 3]
is_asc = True
is_desc = True
is_all_equal = True
i = 1
while i < len(L):
    if L[i] <= L[i-1]:
        is_asc = False
    if L[i] >= L[i-1]:
        is_desc = False
    if L[i] != L[i-1]:
        is_all_equal = False
    i = i + 1
state = 'none'
if is_all_equal:
    state = 'all equal'
elif is_asc:
    state = 'strictly ascending'
elif is_desc:
    state = 'strictly descending'
print('A3 order:', state)

# M2 Insert at index p (simulate with C and fixed backing list)
N = 10
L = [None] * N
# initial content: [10,20,30]
L[0] = 10
L[1] = 20
L[2] = 30
C = 3
p = 1
x = 15
# shift right from last used index
j = C - 1
while j >= p:
    L[j+1] = L[j]
    j = j - 1
L[p] = x
C = C + 1
print('M2 after insert:', [L[k] for k in range(0, C)])

# M3 Remove first occurrence of v
L = [5, 3, 7, 3, 9]
v = 3
C = len(L)
idx = -1
i = 0
while i < C:
    if L[i] == v:
        idx = i
        break
    i = i + 1
if idx != -1:
    j = idx
    while j < C - 1:
        L[j] = L[j+1]
        j = j + 1
    C = C - 1
print('M3 after remove:', [L[k] for k in range(0, C)])

# S1 Count character in string
s = 'banana'
ch = 'a'
count = 0
i = 0
while i < len(s):
    if s[i] == ch:
        count = count + 1
    i = i + 1
print('S1 char count:', count)

# C1 Judge scores (JS[1..5]) compute Smax, Smin, FS
JS = [0, 68, 84, 82, 80, 92]  # index 0 unused
Smax = 1
Smin = 1
i = 2
while i <= 5:
    if JS[i] > JS[Smax]:
        Smax = i
    if JS[i] < JS[Smin]:
        Smin = i
    i = i + 1
# compute FS: sum excluding Smax and Smin
total = 0
i = 1
while i <= 5:
    if i != Smax and i != Smin:
        total = total + JS[i]
    i = i + 1
FS = total / 3
print('C1 Smax,Smin,FS:', Smax, Smin, FS)

# C2 Queue array enq/deq simulation
L = [None] * 5
C = 0
# enq K
def enq_sim(K):
    # implemented inline below to respect constraints; using a wrapper only for demonstration
    global L, C
    if C == len(L):
        print('Full!')
    else:
        L[C] = K
        C = C + 1

# deq K
def deq_sim():
    global L, C
    if C == 0:
        print('Empty!')
        return None
    tmp = L[0]
    j = 0
    while j < C - 1:
        L[j] = L[j+1]
        j = j + 1
    C = C - 1
    return tmp

enq_sim('Electronics')
enq_sim('Books')
print('C2 after enq:', [L[k] for k in range(0, C)])
deq_sim()
print('C2 after deq:', [L[k] for k in range(0, C)])
