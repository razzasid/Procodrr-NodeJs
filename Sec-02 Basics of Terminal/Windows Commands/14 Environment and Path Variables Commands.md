In Windows, **Environment Variables** and **Path Variables** are used to store configuration settings and system-wide values that can be accessed by applications and scripts. They are essential for defining system behavior, specifying file paths, and configuring software. Below is a detailed explanation of environment and path variables, along with examples:

---

### **1. Environment Variables**

Environment variables are dynamic values that affect the behavior of processes and applications running on the system. They can be system-wide (global) or user-specific (local).

---

#### **Types of Environment Variables**

1. **System Variables**:

   - Apply to all users and processes on the system.
   - Examples: `PATH`, `TEMP`, `SystemRoot`.

2. **User Variables**:
   - Apply only to the current user.
   - Examples: `USERPROFILE`, `APPDATA`.

---

#### **Viewing Environment Variables**

##### **Using Command Prompt (CMD)**

1. **List All Environment Variables**:

   ```
   set
   ```

2. **Display a Specific Environment Variable**:
   ```
   echo %VARIABLE_NAME%
   ```
   Example:
   ```
   echo %PATH%
   ```

---

##### **Using PowerShell**

1. **List All Environment Variables**:

   ```
   Get-ChildItem Env:
   ```

2. **Display a Specific Environment Variable**:
   ```
   $env:VARIABLE_NAME
   ```
   Example:
   ```
   $env:PATH
   ```

---

#### **Setting Environment Variables**

##### **Using Command Prompt (CMD)**

1. **Set a User Environment Variable**:

   ```
   setx VARIABLE_NAME "value"
   ```

   Example:

   ```
   setx MY_VAR "Hello, World!"
   ```

2. **Set a System Environment Variable**:
   ```
   setx VARIABLE_NAME "value" /m
   ```
   Example:
   ```
   setx MY_VAR "Hello, World!" /m
   ```

---

##### **Using PowerShell**

1. **Set a User Environment Variable**:

   ```
   [Environment]::SetEnvironmentVariable("VARIABLE_NAME", "value", "User")
   ```

   Example:

   ```
   [Environment]::SetEnvironmentVariable("MY_VAR", "Hello, World!", "User")
   ```

2. **Set a System Environment Variable**:
   ```
   [Environment]::SetEnvironmentVariable("VARIABLE_NAME", "value", "Machine")
   ```
   Example:
   ```
   [Environment]::SetEnvironmentVariable("MY_VAR", "Hello, World!", "Machine")
   ```

---

#### **Deleting Environment Variables**

##### **Using Command Prompt (CMD)**

1. **Delete a User Environment Variable**:

   ```
   reg delete HKCU\Environment /v VARIABLE_NAME /f
   ```

   Example:

   ```
   reg delete HKCU\Environment /v MY_VAR /f
   ```

2. **Delete a System Environment Variable**:
   ```
   reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v VARIABLE_NAME /f
   ```
   Example:
   ```
   reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v MY_VAR /f
   ```

---

##### **Using PowerShell**

1. **Delete a User Environment Variable**:

   ```
   [Environment]::SetEnvironmentVariable("VARIABLE_NAME", $null, "User")
   ```

   Example:

   ```
   [Environment]::SetEnvironmentVariable("MY_VAR", $null, "User")
   ```

2. **Delete a System Environment Variable**:
   ```
   [Environment]::SetEnvironmentVariable("VARIABLE_NAME", $null, "Machine")
   ```
   Example:
   ```
   [Environment]::SetEnvironmentVariable("MY_VAR", $null, "Machine")
   ```

---

### **2. Path Variables**

The `PATH` environment variable is a special environment variable that specifies a list of directories where the system looks for executable files. When you type a command in the command prompt, the system searches these directories to find the corresponding executable.

---

#### **Viewing the PATH Variable**

##### **Using Command Prompt (CMD)**

```
echo %PATH%
```

##### **Using PowerShell**

```
$env:PATH
```

---

#### **Adding to the PATH Variable**

##### **Using Command Prompt (CMD)**

1. **Add a Directory to the User PATH**:

   ```
   setx PATH "%PATH%;C:\Path\To\Directory"
   ```

2. **Add a Directory to the System PATH**:
   ```
   setx PATH "%PATH%;C:\Path\To\Directory" /m
   ```

---

##### **Using PowerShell**

1. **Add a Directory to the User PATH**:

   ```
   $env:PATH += ";C:\Path\To\Directory"
   [Environment]::SetEnvironmentVariable("PATH", $env:PATH, "User")
   ```

2. **Add a Directory to the System PATH**:
   ```
   $env:PATH += ";C:\Path\To\Directory"
   [Environment]::SetEnvironmentVariable("PATH", $env:PATH, "Machine")
   ```

---

#### **Removing from the PATH Variable**

##### **Using Command Prompt (CMD)**

1. **Remove a Directory from the User PATH**:

   - Manually edit the PATH variable in the Environment Variables dialog or use a script.

2. **Remove a Directory from the System PATH**:
   - Manually edit the PATH variable in the Environment Variables dialog or use a script.

---

##### **Using PowerShell**

1. **Remove a Directory from the User PATH**:

   ```
   $newPath = ($env:PATH -split ';' | Where-Object { $_ -ne "C:\Path\To\Directory" }) -join ';'
   [Environment]::SetEnvironmentVariable("PATH", $newPath, "User")
   ```

2. **Remove a Directory from the System PATH**:
   ```
   $newPath = ($env:PATH -split ';' | Where-Object { $_ -ne "C:\Path\To\Directory" }) -join ';'
   [Environment]::SetEnvironmentVariable("PATH", $newPath, "Machine")
   ```

---

### **3. Managing Environment Variables via GUI**

1. **Open Environment Variables Dialog**:

   - Press `Win + R`, type `sysdm.cpl`, and press `Enter`.
   - Go to the `Advanced` tab and click on `Environment Variables`.

2. **Add a New Environment Variable**:

   - Click `New` under `User variables` or `System variables`.
   - Enter the variable name and value.

3. **Edit an Existing Environment Variable**:

   - Select the variable and click `Edit`.

4. **Delete an Environment Variable**:
   - Select the variable and click `Delete`.

---

### **Summary Table of Environment and Path Variables Commands**

| Command                                                                                       | Description                                          |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------- |
| `set`                                                                                         | Lists all environment variables.                     |
| `echo %PATH%`                                                                                 | Displays the PATH variable.                          |
| `setx MY_VAR "Hello, World!"`                                                                 | Sets a user environment variable.                    |
| `setx MY_VAR "Hello, World!" /m`                                                              | Sets a system environment variable.                  |
| `reg delete HKCU\Environment /v MY_VAR /f`                                                    | Deletes a user environment variable.                 |
| `reg delete "HKLM\SYSTEM\CurrentControlSet\Control\Session Manager\Environment" /v MY_VAR /f` | Deletes a system environment variable.               |
| `$env:PATH`                                                                                   | Displays the PATH variable in PowerShell.            |
| `[Environment]::SetEnvironmentVariable("MY_VAR", "Hello, World!", "User")`                    | Sets a user environment variable in PowerShell.      |
| `[Environment]::SetEnvironmentVariable("MY_VAR", "Hello, World!", "Machine")`                 | Sets a system environment variable in PowerShell.    |
| `[Environment]::SetEnvironmentVariable("MY_VAR", $null, "User")`                              | Deletes a user environment variable in PowerShell.   |
| `[Environment]::SetEnvironmentVariable("MY_VAR", $null, "Machine")`                           | Deletes a system environment variable in PowerShell. |
| `setx PATH "%PATH%;C:\Path\To\Directory"`                                                     | Adds a directory to the user PATH.                   |
| `setx PATH "%PATH%;C:\Path\To\Directory" /m`                                                  | Adds a directory to the system PATH.                 |
| `$env:PATH += ";C:\Path\To\Directory"`                                                        | Adds a directory to the PATH in PowerShell.          |

---

These commands and methods are essential for managing environment and path variables in Windows. Let me know if you need further clarification! 😊
