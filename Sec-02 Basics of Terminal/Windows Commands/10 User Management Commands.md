In Windows, **User Management** involves creating, modifying, and managing user accounts and groups. This can be done using **Command Prompt (CMD)** or **PowerShell**. Below is a detailed explanation of the most commonly used commands for user management, along with examples:

---

### **1. Creating and Managing User Accounts**

#### **`net user` Command**

The `net user` command is used to create, modify, and manage user accounts.

##### **Syntax**

```
net user [username] [password] [options]
```

##### **Examples**

1. **Create a New User Account**:

   ```
   net user JohnDoe P@ssw0rd /add
   ```

2. **Delete a User Account**:

   ```
   net user JohnDoe /delete
   ```

3. **Set a Password for a User Account**:

   ```
   net user JohnDoe NewP@ssw0rd
   ```

4. **Display Information About a User Account**:

   ```
   net user JohnDoe
   ```

5. **List All User Accounts**:

   ```
   net user
   ```

6. **Set User Account Expiry Date**:

   ```
   net user JohnDoe /expires:2023-12-31
   ```

7. **Set User Account Comment**:
   ```
   net user JohnDoe /comment:"Temporary Account"
   ```

---

### **2. Managing User Groups**

#### **`net localgroup` Command**

The `net localgroup` command is used to manage local groups and their members.

##### **Syntax**

```
net localgroup [groupname] [username] [options]
```

##### **Examples**

1. **Create a New Local Group**:

   ```
   net localgroup TestGroup /add
   ```

2. **Delete a Local Group**:

   ```
   net localgroup TestGroup /delete
   ```

3. **Add a User to a Local Group**:

   ```
   net localgroup Administrators JohnDoe /add
   ```

4. **Remove a User from a Local Group**:

   ```
   net localgroup Administrators JohnDoe /delete
   ```

5. **List All Local Groups**:

   ```
   net localgroup
   ```

6. **Display Members of a Local Group**:
   ```
   net localgroup Administrators
   ```

---

### **3. Managing User Profiles**

#### **`wmic` Command**

The `wmic` (Windows Management Instrumentation Command-line) command is used to manage user profiles.

##### **Syntax**

```
wmic useraccount [options]
```

##### **Examples**

1. **List All User Accounts**:

   ```
   wmic useraccount get name
   ```

2. **Display Detailed Information About a User Account**:

   ```
   wmic useraccount where name='JohnDoe' get *
   ```

3. **Disable a User Account**:

   ```
   wmic useraccount where name='JohnDoe' set disabled=true
   ```

4. **Enable a User Account**:
   ```
   wmic useraccount where name='JohnDoe' set disabled=false
   ```

---

### **4. Managing User Sessions**

#### **`query user` Command**

The `query user` command is used to display information about user sessions on the system.

##### **Syntax**

```
query user
```

##### **Examples**

1. **Display User Sessions**:
   ```
   query user
   ```
   Output:
   ```
   USERNAME              SESSIONNAME        ID  STATE   IDLE TIME  LOGON TIME
   JohnDoe               console             1  Active          .  10/1/2023 10:00 AM
   ```

---

### **5. Managing User Permissions**

#### **`icacls` Command**

The `icacls` command is used to display or modify Access Control Lists (ACLs) for files and directories.

##### **Syntax**

```
icacls [filename_or_directory] [options]
```

##### **Examples**

1. **Display Permissions for a File**:

   ```
   icacls C:\Path\To\File.txt
   ```

2. **Grant Full Control to a User**:

   ```
   icacls C:\Path\To\File.txt /grant JohnDoe:(F)
   ```

3. **Remove Permissions for a User**:

   ```
   icacls C:\Path\To\File.txt /remove JohnDoe
   ```

4. **Reset Permissions**:
   ```
   icacls C:\Path\To\File.txt /reset
   ```

---

### **6. Managing User Policies**

#### **`gpupdate` Command**

The `gpupdate` command is used to update Group Policy settings.

##### **Syntax**

```
gpupdate [options]
```

##### **Examples**

1. **Force Update Group Policy**:

   ```
   gpupdate /force
   ```

2. **Update Only Computer Policy**:

   ```
   gpupdate /target:computer
   ```

3. **Update Only User Policy**:
   ```
   gpupdate /target:user
   ```

---

### **Summary Table of User Management Commands**

| Command                                                   | Description                                         |
| --------------------------------------------------------- | --------------------------------------------------- |
| `net user JohnDoe P@ssw0rd /add`                          | Creates a new user account.                         |
| `net user JohnDoe /delete`                                | Deletes a user account.                             |
| `net user JohnDoe NewP@ssw0rd`                            | Sets a password for a user account.                 |
| `net user JohnDoe`                                        | Displays information about a user account.          |
| `net user`                                                | Lists all user accounts.                            |
| `net localgroup TestGroup /add`                           | Creates a new local group.                          |
| `net localgroup TestGroup /delete`                        | Deletes a local group.                              |
| `net localgroup Administrators JohnDoe /add`              | Adds a user to a local group.                       |
| `net localgroup Administrators JohnDoe /delete`           | Removes a user from a local group.                  |
| `net localgroup`                                          | Lists all local groups.                             |
| `wmic useraccount get name`                               | Lists all user accounts.                            |
| `wmic useraccount where name='JohnDoe' get *`             | Displays detailed information about a user account. |
| `wmic useraccount where name='JohnDoe' set disabled=true` | Disables a user account.                            |
| `query user`                                              | Displays user sessions.                             |
| `icacls C:\Path\To\File.txt`                              | Displays permissions for a file.                    |
| `icacls C:\Path\To\File.txt /grant JohnDoe:(F)`           | Grants full control to a user.                      |
| `gpupdate /force`                                         | Forces an update of Group Policy settings.          |

---

These commands are essential for managing user accounts and groups in Windows. Let me know if you need further clarification! 😊
