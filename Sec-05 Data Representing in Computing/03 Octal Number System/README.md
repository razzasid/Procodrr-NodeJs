The **octal number system** is a base-8 numeral system that uses eight distinct digits: **0, 1, 2, 3, 4, 5, 6, and 7**. It is a positional number system, meaning the value of each digit depends on its position in the number. The octal system is less commonly used today but has applications in computing and digital systems.

---

### Key Features of the Octal Number System:

1. **Base-8 System**: Each digit represents a power of 8.
2. **Digits**: Only digits from 0 to 7 are used.
3. **Positional Value**: The value of each digit is determined by its position, starting from the right (least significant digit) to the left (most significant digit).
4. **Conversion**: Octal numbers can be easily converted to binary, decimal, and hexadecimal systems.

---

### How the Octal System Works:

In the octal system, each digit represents a power of 8. The rightmost digit is $8^0$, the next digit to the left is $8^1$, then $8^2$, and so on.

For example:

- The octal number $123\_{8}$ can be expanded as:

$$
1 \times 8^2 + 2 \times 8^1 + 3 \times 8^0
$$

$$
= 1 \times 64 + 2 \times 8 + 3 \times 1
$$

$$
= 64 + 16 + 3 = 83\_{10}
$$

So, $123\_{8}$ in octal is equal to $83\_{10}$ in decimal.

---

### Examples of Octal Numbers:

1. $7\_{8}$

$$
7 \times 8^0 = 7\_{10}
$$

2. $10\_{8}$

$$
1 \times 8^1 + 0 \times 8^0 = 8 + 0 = 8\_{10}
$$

3. $45\_{8}$

$$
4 \times 8^1 + 5 \times 8^0 = 32 + 5 = 37\_{10}
$$

4. $100\_{8}$

$$
1 \times 8^2 + 0 \times 8^1 + 0 \times 8^0 = 64 + 0 + 0 = 64\_{10}
$$

---

### Conversion Between Octal and Other Number Systems:

#### 1. **Octal to Decimal**:

Multiply each digit by its corresponding power of 8 and sum the results.

Example: Convert $157\_{8}$ to decimal.

$$
1 \times 8^2 + 5 \times 8^1 + 7 \times 8^0
$$

$$
= 1 \times 64 + 5 \times 8 + 7 \times 1
$$

$$
= 64 + 40 + 7 = 111\_{10}
$$

#### 2. **Decimal to Octal**:

Divide the decimal number by 8 repeatedly and record the remainders.

Example: Convert $95\_{10}$ to octal.

$$
95 \div 8 = 11 \quad \text{remainder } 7
$$

$$
11 \div 8 = 1 \quad \text{remainder } 3
$$

$$
1 \div 8 = 0 \quad \text{remainder } 1
$$

Read the remainders in reverse order: $137_8$.

#### 3. **Octal to Binary**:

Each octal digit corresponds to exactly 3 binary digits.

Example: Convert $52_8$ to binary.

$$
5_8 = 101_2, \quad 2_8 = 010_2
$$

Combine the binary digits: $101010_2$.

#### 4. **Binary to Octal**:

Group binary digits into sets of 3 (starting from the right) and convert each group to its octal equivalent.

Example: Convert $110101_2$ to octal.

$$
110_2 = 6_8, \quad 101_2 = 5_8
$$

Combine the octal digits: $65_8$.

---

### Applications of the Octal System:

1. **Computing**: Historically used in computing because it simplifies binary representation.
2. **File Permissions**: In Unix-based systems, file permissions are often represented in octal (e.g., 755 for read/write/execute permissions).
3. **Digital Systems**: Used in some low-level programming and hardware design.

---

### Advantages of the Octal System:

1. **Compact Representation**: Easier to read and write than binary.
2. **Simplifies Binary**: Groups of 3 binary digits correspond directly to octal digits.

---

### Summary:

The octal number system is a base-8 system that uses digits 0–7. It is useful for simplifying binary representations and has applications in computing and digital systems. Conversions between octal, binary, and decimal are straightforward due to the relationship between powers of 2 and 8.
