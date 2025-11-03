In Windows, you can rename files and directories using the **`ren`** (or **`rename`**) command in the Command Prompt (CMD). Below is a detailed explanation of the `ren` command with examples:

---

### **1. Rename a File**

The `ren` command is used to rename a file.

#### **Syntax**

```
ren [old_filename] [new_filename]
```

---

#### **Examples of Renaming Files**

1. **Rename a File in the Current Directory**:

   - Rename a file from `oldFile.txt` to `newFile.txt`:
     ```
     ren oldFile.txt newFile.txt
     ```

2. **Rename a File with Spaces in the Name**:

   - Rename a file from `old file.txt` to `new file.txt`:
     ```
     ren "old file.txt" "new file.txt"
     ```

3. **Rename a File in a Different Directory**:

   - Rename a file from `C:\Users\YourUsername\Documents\oldFile.txt` to `newFile.txt`:
     ```
     ren C:\Users\YourUsername\Documents\oldFile.txt newFile.txt
     ```

4. **Rename a File with a Different Extension**:
   - Rename a file from `document.txt` to `document.doc`:
     ```
     ren document.txt document.doc
     ```

---

### **2. Rename a Directory**

The `ren` command can also be used to rename directories.

#### **Syntax**

```
ren [old_directory_name] [new_directory_name]
```

---

#### **Examples of Renaming Directories**

1. **Rename a Directory in the Current Location**:

   - Rename a directory from `OldFolder` to `NewFolder`:
     ```
     ren OldFolder NewFolder
     ```

2. **Rename a Directory with Spaces in the Name**:

   - Rename a directory from `Old Folder` to `New Folder`:
     ```
     ren "Old Folder" "New Folder"
     ```

3. **Rename a Directory in a Different Location**:
   - Rename a directory from `C:\Users\YourUsername\Documents\OldFolder` to `NewFolder`:
     ```
     ren C:\Users\YourUsername\Documents\OldFolder NewFolder
     ```

---

### **3. Rename Multiple Files Using Wildcards**

You can use wildcards (`*` and `?`) to rename multiple files at once.

#### **Examples of Renaming Multiple Files**

1. **Rename All `.txt` Files to `.doc`**:

   - Rename all `.txt` files in the current directory to `.doc`:
     ```
     ren *.txt *.doc
     ```

2. **Rename Files with a Specific Prefix**:

   - Rename all files starting with `old_` to start with `new_`:
     ```
     ren old_*.* new_*.*
     ```

3. **Rename Files with a Specific Pattern**:
   - Rename all files with the pattern `file?.txt` to `document?.txt`:
     ```
     ren file?.txt document?.txt
     ```

---

### **Common Errors and Solutions**

1. **File or Directory Not Found**:

   - Ensure the old file or directory name and path are correct.
   - Example:
     ```
     ren nonExistentFile.txt newFile.txt
     ```
     Error: `The system cannot find the file specified.`

2. **File or Directory Already Exists**:

   - Ensure the new file or directory name does not already exist.
   - Example:
     ```
     ren oldFile.txt existingFile.txt
     ```
     Error: `A duplicate file name exists, or the file cannot be found.`

3. **Invalid File or Directory Name**:

   - Ensure the new name does not contain invalid characters (`\`, `/`, `:`, `*`, `?`, `"`, `<`, `>`, `|`).
   - Example:
     ```
     ren oldFile.txt invalid/file.txt
     ```
     Error: `The filename, directory name, or volume label syntax is incorrect.`

4. **Permission Denied**:
   - Ensure you have the necessary permissions to rename the file or directory.
   - Example:
     ```
     ren C:\Windows\system32\oldFile.txt newFile.txt
     ```
     Error: `Access is denied.`

---

### **Summary Table of `ren` Command**

| Command                                  | Description                                  |
| ---------------------------------------- | -------------------------------------------- |
| `ren oldFile.txt newFile.txt`            | Renames a file.                              |
| `ren "old file.txt" "new file.txt"`      | Renames a file with spaces in its name.      |
| `ren C:\path\to\oldFile.txt newFile.txt` | Renames a file in a specific path.           |
| `ren oldFolder newFolder`                | Renames a directory.                         |
| `ren "Old Folder" "New Folder"`          | Renames a directory with spaces in its name. |
| `ren C:\path\to\OldFolder NewFolder`     | Renames a directory in a specific path.      |
| `ren *.txt *.doc`                        | Renames all `.txt` files to `.doc`.          |
| `ren old_*.* new_*.*`                    | Renames files with a specific prefix.        |
| `ren file?.txt document?.txt`            | Renames files with a specific pattern.       |

---

These examples demonstrate how to use the `ren` command to rename files and directories in Windows. Let me know if you need further clarification! 😊
