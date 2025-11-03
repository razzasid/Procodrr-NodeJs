In Windows, **System Shutdown and Restart** can be performed using **Command Prompt (CMD)**, **PowerShell**, or the **Graphical User Interface (GUI)**. Below is a detailed explanation of the most commonly used commands and methods for shutting down and restarting the system, along with examples:

---

### **1. Shutdown and Restart Using Command Prompt (CMD)**

#### **`shutdown` Command**

The `shutdown` command is used to shut down, restart, or log off the computer.

##### **Syntax**

```
shutdown [options]
```

##### **Examples**

1. **Shut Down the Computer**:

   ```
   shutdown /s
   ```

2. **Restart the Computer**:

   ```
   shutdown /r
   ```

3. **Log Off the Current User**:

   ```
   shutdown /l
   ```

4. **Schedule a Shutdown**:

   - Shut down the computer after 60 seconds:
     ```
     shutdown /s /t 60
     ```

5. **Abort a Scheduled Shutdown**:

   - Cancel a scheduled shutdown:
     ```
     shutdown /a
     ```

6. **Force Applications to Close**:

   - Forcefully shut down the computer without prompting to save work:
     ```
     shutdown /s /f
     ```

7. **Display a Custom Message**:
   - Shut down the computer with a custom message:
     ```
     shutdown /s /t 60 /c "System will shut down in 1 minute."
     ```

---

### **2. Shutdown and Restart Using PowerShell**

#### **`Stop-Computer` Command**

The `Stop-Computer` command is used to shut down the computer.

##### **Syntax**

```
Stop-Computer [-Force]
```

##### **Examples**

1. **Shut Down the Computer**:

   ```
   Stop-Computer
   ```

2. **Forcefully Shut Down the Computer**:
   ```
   Stop-Computer -Force
   ```

---

#### **`Restart-Computer` Command**

The `Restart-Computer` command is used to restart the computer.

##### **Syntax**

```
Restart-Computer [-Force]
```

##### **Examples**

1. **Restart the Computer**:

   ```
   Restart-Computer
   ```

2. **Forcefully Restart the Computer**:
   ```
   Restart-Computer -Force
   ```

---

### **3. Shutdown and Restart Using GUI**

#### **Start Menu**

1. **Shut Down**:

   - Click on the `Start` menu, then click on the `Power` button, and select `Shut down`.

2. **Restart**:
   - Click on the `Start` menu, then click on the `Power` button, and select `Restart`.

#### **Alt + F4 Menu**

1. **Shut Down**:

   - Press `Alt + F4` on the desktop, select `Shut down` from the drop-down menu, and click `OK`.

2. **Restart**:
   - Press `Alt + F4` on the desktop, select `Restart` from the drop-down menu, and click `OK`.

---

### **4. Shutdown and Restart Using Run Dialog**

#### **Run Dialog**

1. **Shut Down**:

   - Press `Win + R`, type `shutdown /s`, and press `Enter`.

2. **Restart**:
   - Press `Win + R`, type `shutdown /r`, and press `Enter`.

---

### **5. Shutdown and Restart Using Task Scheduler**

#### **Task Scheduler**

1. **Create a Shutdown Task**:

   - Open `Task Scheduler`, click on `Create Basic Task`, and follow the wizard to create a task that runs `shutdown /s`.

2. **Create a Restart Task**:
   - Open `Task Scheduler`, click on `Create Basic Task`, and follow the wizard to create a task that runs `shutdown /r`.

---

### **6. Shutdown and Restart Using Batch File**

#### **Batch File**

1. **Create a Shutdown Batch File**:

   - Create a text file with the following content and save it as `shutdown.bat`:
     ```
     shutdown /s /t 60
     ```
   - Double-click the batch file to shut down the computer after 60 seconds.

2. **Create a Restart Batch File**:
   - Create a text file with the following content and save it as `restart.bat`:
     ```
     shutdown /r /t 60
     ```
   - Double-click the batch file to restart the computer after 60 seconds.

---

### **Summary Table of Shutdown and Restart Commands**

| Command                          | Description                                          |
| -------------------------------- | ---------------------------------------------------- |
| `shutdown /s`                    | Shuts down the computer.                             |
| `shutdown /r`                    | Restarts the computer.                               |
| `shutdown /l`                    | Logs off the current user.                           |
| `shutdown /s /t 60`              | Shuts down the computer after 60 seconds.            |
| `shutdown /a`                    | Aborts a scheduled shutdown.                         |
| `shutdown /s /f`                 | Forcefully shuts down the computer.                  |
| `shutdown /s /t 60 /c "Message"` | Shuts down the computer with a custom message.       |
| `Stop-Computer`                  | Shuts down the computer using PowerShell.            |
| `Stop-Computer -Force`           | Forcefully shuts down the computer using PowerShell. |
| `Restart-Computer`               | Restarts the computer using PowerShell.              |
| `Restart-Computer -Force`        | Forcefully restarts the computer using PowerShell.   |

---

These commands and methods are essential for shutting down and restarting the system in Windows. Let me know if you need further clarification! 😊
