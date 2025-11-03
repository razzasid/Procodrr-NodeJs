In computing, data is measured in various units of size, which follow specific unit systems. The two main systems are:

1. **SI (International System of Units)** – Uses powers of 10 (decimal-based).
2. **IEC (International Electrotechnical Commission)** – Uses powers of 2 (binary-based), commonly used for memory and storage.

## **Units of Size in Computing**

### **Basic Units of Digital Data**  
| Unit       | Size (in Bits) | Size (in Bytes) | Equivalent To          | Example Usage                     |
|------------|----------------|-----------------|------------------------|-----------------------------------|
| **Bit (b)** | 1 bit          | 1/8 byte        | Binary digit (0 or 1)  | Network speed (Mbps), binary data |
| **Nibble**  | 4 bits         | 0.5 byte        | Half a byte            | Rarely used (historical)          |
| **Byte (B)**| 8 bits         | 1 byte          | 2 nibbles              | Single character (e.g., 'A')      |


### **Larger Units (Binary vs. Decimal)**
| Unit (SI) | Value (Decimal) | Unit (IEC) | Value (Binary) | Example Usage |
|-----------|------------------|------------|----------------|---------------|
| Byte (B)  | 1 Byte           | Byte (B)   | 1 Byte         | Single character (e.g., 'A') |
| Kilobyte (KB) | 10³ = 1,000 Bytes | Kibibyte (KiB) | 2¹⁰ = 1,024 Bytes | Small text file (~2 KB) |
| Megabyte (MB) | 10⁶ = 1,000,000 Bytes | Mebibyte (MiB) | 2²⁰ = 1,048,576 Bytes | MP3 song (~3-5 MB) |
| Gigabyte (GB) | 10⁹ = 1,000,000,000 Bytes | Gibibyte (GiB) | 2³⁰ = 1,073,741,824 Bytes | HD movie (~1-2 GB) |
| Terabyte (TB) | 10¹² = 1,000,000,000,000 Bytes | Tebibyte (TiB) | 2⁴⁰ = 1,099,511,627,776 Bytes | Large SSD (~1 TB) |
| Petabyte (PB) | 10¹⁵ = 1,000,000,000,000,000 Bytes | Pebibyte (PiB) | 2⁵⁰ = 1,125,899,906,842,624 Bytes | Big data storage |

### **Key Notes:**
- **1 Byte = 8 Bits** (fundamental computing unit).  
- **1 Nibble = 4 Bits** (rarely used today, but relevant in low-level programming).  
- **Storage vs. Memory:**  
  - **Hard drives & SSDs** (marketed in **SI units**, e.g., 1TB = 1,000GB).  
  - **RAM & OS reporting** (uses **IEC units**, e.g., 1TiB = 1,024GiB).  

### **Key Differences:**
- **SI Units (Decimal):** Used by storage manufacturers (e.g., HDD, SSD) and networking (e.g., Mbps).
- **IEC Units (Binary):** Used by operating systems (e.g., RAM, file sizes in Windows/Linux).

### **Example Conversions:**
- **1 KB (SI) = 1,000 Bytes**  
  **1 KiB (IEC) = 1,024 Bytes**  
- A **500 GB HDD (SI)** = ~465 GiB (IEC) when seen in OS.
- A **1 Gbps (Gigabit per second)** internet connection = **125 MB/s** (since 1 byte = 8 bits).  
- A **4 KiB (Kibibyte)** file = **4,096 bytes**, whereas **4 KB (Kilobyte)** = **4,000 bytes**.  

This distinction helps avoid confusion between advertised storage (SI) and actual usable space (IEC).

