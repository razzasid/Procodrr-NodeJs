In Windows, **Disk Management** involves creating, modifying, and managing disk partitions and volumes. This can be done using **Command Prompt (CMD)**, **PowerShell**, or the **Graphical User Interface (GUI)**. Below is a detailed explanation of the most commonly used commands and tools for disk management, along with examples:

---

### **1. Disk Management Using Command Prompt (CMD)**

#### **`diskpart` Command**

The `diskpart` command is a powerful disk partitioning utility used to manage disks, partitions, and volumes.

##### **Syntax**

```
diskpart
```

##### **Examples**

1. **List All Disks**:

   ```
   diskpart
   list disk
   ```

2. **Select a Disk**:

   ```
   select disk 0
   ```

3. **Create a Partition**:

   ```
   create partition primary
   ```

4. **Format a Partition**:

   ```
   format fs=ntfs quick
   ```

5. **Assign a Drive Letter**:

   ```
   assign letter=D
   ```

6. **Extend a Partition**:

   ```
   extend
   ```

7. **Shrink a Partition**:

   ```
   shrink desired=1024
   ```

8. **Delete a Partition**:
   ```
   delete partition
   ```

---

### **2. Disk Management Using PowerShell**

#### **`Get-Disk` Command**

The `Get-Disk` command is used to list all disks on the system.

##### **Syntax**

```
Get-Disk
```

##### **Examples**

1. **List All Disks**:

   ```
   Get-Disk
   ```

2. **Display Detailed Information About a Disk**:
   ```
   Get-Disk -Number 0 | Format-List *
   ```

---

#### **`New-Partition` Command**

The `New-Partition` command is used to create a new partition.

##### **Syntax**

```
New-Partition -DiskNumber [number] -Size [size] -DriveLetter [letter]
```

##### **Examples**

1. **Create a New Partition**:
   ```
   New-Partition -DiskNumber 0 -Size 10GB -DriveLetter D
   ```

---

#### **`Format-Volume` Command**

The `Format-Volume` command is used to format a volume.

##### **Syntax**

```
Format-Volume -DriveLetter [letter] -FileSystem [filesystem]
```

##### **Examples**

1. **Format a Volume**:
   ```
   Format-Volume -DriveLetter D -FileSystem NTFS
   ```

---

#### **`Resize-Partition` Command**

The `Resize-Partition` command is used to resize a partition.

##### **Syntax**

```
Resize-Partition -DriveLetter [letter] -Size [size]
```

##### **Examples**

1. **Extend a Partition**:

   ```
   Resize-Partition -DriveLetter D -Size 20GB
   ```

2. **Shrink a Partition**:
   ```
   Resize-Partition -DriveLetter D -Size 10GB
   ```

---

#### **`Remove-Partition` Command**

The `Remove-Partition` command is used to delete a partition.

##### **Syntax**

```
Remove-Partition -DriveLetter [letter]
```

##### **Examples**

1. **Delete a Partition**:
   ```
   Remove-Partition -DriveLetter D
   ```

---

### **3. Disk Management Using GUI**

#### **Disk Management Tool**

The Disk Management tool provides a graphical interface for managing disks and partitions.

##### **Steps to Access Disk Management**

1. Press `Win + R`, type `diskmgmt.msc`, and press `Enter`.

##### **Examples**

1. **Create a New Partition**:

   - Right-click on unallocated space and select `New Simple Volume`.

2. **Format a Partition**:

   - Right-click on a partition and select `Format`.

3. **Extend a Partition**:

   - Right-click on a partition and select `Extend Volume`.

4. **Shrink a Partition**:

   - Right-click on a partition and select `Shrink Volume`.

5. **Delete a Partition**:
   - Right-click on a partition and select `Delete Volume`.

---

### **4. Disk Management Using `chkdsk` Command**

The `chkdsk` (Check Disk) command is used to check and repair disk errors.

##### **Syntax**

```
chkdsk [drive:] [options]
```

##### **Examples**

1. **Check a Disk for Errors**:

   ```
   chkdsk C:
   ```

2. **Repair Disk Errors**:

   ```
   chkdsk C: /f
   ```

3. **Check for Bad Sectors**:
   ```
   chkdsk C: /r
   ```

---

### **5. Disk Management Using `defrag` Command**

The `defrag` command is used to defragment a disk.

##### **Syntax**

```
defrag [drive:] [options]
```

##### **Examples**

1. **Defragment a Disk**:

   ```
   defrag C:
   ```

2. **Analyze a Disk**:

   ```
   defrag C: /a
   ```

3. **Defragment and Consolidate Free Space**:
   ```
   defrag C: /x
   ```

---

### **Summary Table of Disk Management Commands**

| Command                                                 | Description                    |
| ------------------------------------------------------- | ------------------------------ |
| `diskpart`                                              | Opens the DiskPart utility.    |
| `list disk`                                             | Lists all disks.               |
| `select disk 0`                                         | Selects a disk.                |
| `create partition primary`                              | Creates a primary partition.   |
| `format fs=ntfs quick`                                  | Formats a partition with NTFS. |
| `assign letter=D`                                       | Assigns a drive letter.        |
| `extend`                                                | Extends a partition.           |
| `shrink desired=1024`                                   | Shrinks a partition.           |
| `delete partition`                                      | Deletes a partition.           |
| `Get-Disk`                                              | Lists all disks.               |
| `New-Partition -DiskNumber 0 -Size 10GB -DriveLetter D` | Creates a new partition.       |
| `Format-Volume -DriveLetter D -FileSystem NTFS`         | Formats a volume.              |
| `Resize-Partition -DriveLetter D -Size 20GB`            | Resizes a partition.           |
| `Remove-Partition -DriveLetter D`                       | Deletes a partition.           |
| `chkdsk C: /f`                                          | Repairs disk errors.           |
| `chkdsk C: /r`                                          | Checks for bad sectors.        |
| `defrag C:`                                             | Defragments a disk.            |

---

These commands and tools are essential for managing disks and partitions in Windows. Let me know if you need further clarification! 😊
