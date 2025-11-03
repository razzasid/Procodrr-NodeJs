# **Application and Service Management Commands in Windows**

Windows provides several Command Line Interface (CLI) commands to manage applications and services. These commands help users install, start, stop, restart, and monitor applications and services efficiently.

---

## **1. Managing Applications**

### **1.1 Task Manager CLI Commands**

Windows Task Manager allows managing running processes through the command line.

#### 🔹 **`tasklist`** – View running processes

**Syntax:**

```cmd
tasklist
```

📌 **Example Output:**

```
Image Name                     PID Session Name        Mem Usage
========================= ======== ================ ============
notepad.exe                  3428 Console            10,432 K
chrome.exe                   4560 Console           500,456 K
```

📝 **Use case:** Identify running applications with their Process ID (PID).

#### 🔹 **`taskkill`** – Terminate a process

**Syntax:**

```cmd
taskkill /IM process_name /F
```

📌 **Example:**

```cmd
taskkill /IM notepad.exe /F
```

💡 Kills all instances of **Notepad**.

**Kill by Process ID (PID):**

```cmd
taskkill /PID 3428 /F
```

#### 🔹 **`start`** – Open an application

**Syntax:**

```cmd
start application_name
```

📌 **Example:**

```cmd
start notepad
```

💡 Opens **Notepad**.

#### 🔹 **`wmic process`** – Manage running applications

**List running processes:**

```cmd
wmic process list brief
```

**Terminate a process:**

```cmd
wmic process where name="notepad.exe" call terminate
```

---

## **2. Managing Windows Services**

Windows services are background processes that run automatically and perform system functions.

#### 🔹 **`sc`** – Manage services

The `sc` (Service Control) command allows you to create, start, stop, and delete services.

🔹 **Check service status:**

```cmd
sc query "ServiceName"
```

📌 **Example:**

```cmd
sc query "wuauserv"
```

💡 Checks the status of **Windows Update Service**.

🔹 **Start a service:**

```cmd
sc start "ServiceName"
```

📌 **Example:**

```cmd
sc start "wuauserv"
```

💡 Starts **Windows Update Service**.

🔹 **Stop a service:**

```cmd
sc stop "ServiceName"
```

📌 **Example:**

```cmd
sc stop "wuauserv"
```

💡 Stops **Windows Update Service**.

🔹 **Delete a service:**

```cmd
sc delete "ServiceName"
```

📌 **Example:**

```cmd
sc delete "MyService"
```

💡 Permanently removes a custom service.

🔹 **Create a new service:**

```cmd
sc create "MyService" binPath= "C:\Program Files\MyApp\service.exe"
```

💡 Creates a new custom service.

---

### **3. Managing Services with `net` Commands**

#### 🔹 **List all running services**

```cmd
net start
```

📌 **Example Output:**

```
These Windows services are started:
   Windows Update
   Print Spooler
   Remote Desktop Services
```

#### 🔹 **Start a service**

```cmd
net start "ServiceName"
```

📌 **Example:**

```cmd
net start "Spooler"
```

💡 Starts the **Print Spooler Service**.

#### 🔹 **Stop a service**

```cmd
net stop "ServiceName"
```

📌 **Example:**

```cmd
net stop "Spooler"
```

💡 Stops the **Print Spooler Service**.

---

## **4. Managing Installed Programs**

🔹 **List installed applications:**

```cmd
wmic product get name
```

📌 **Example Output:**

```
Name
====================================
Google Chrome
Microsoft Office
Notepad++
```

🔹 **Uninstall an application:**

```cmd
wmic product where name="Google Chrome" call uninstall
```

💡 Uninstalls **Google Chrome**.

🔹 **Install an application using `msiexec` (for .msi files)**

```cmd
msiexec /i "C:\path\to\installer.msi"
```

💡 Installs an application.

🔹 **Silent installation (no UI prompt):**

```cmd
msiexec /i "C:\path\to\installer.msi" /quiet
```

💡 Installs the program without user interaction.

---

## **5. Checking System Boot Services**

🔹 **List startup services:**

```cmd
wmic service get name, startmode
```

📌 **Example Output:**

```
Name                      StartMode
====================================
wuauserv                  Auto
Spooler                   Manual
```

📝 **Auto:** Starts automatically at boot.  
📝 **Manual:** Starts only when required.

---

## **6. Scheduled Tasks Management**

Windows allows scheduling tasks to run at specific times.

🔹 **List scheduled tasks:**

```cmd
schtasks /query /fo table
```

🔹 **Create a new scheduled task:**

```cmd
schtasks /create /tn "BackupTask" /tr "C:\backup.bat" /sc daily /st 10:00
```

💡 Runs `backup.bat` daily at **10:00 AM**.

🔹 **Delete a scheduled task:**

```cmd
schtasks /delete /tn "BackupTask" /f
```

💡 Deletes **BackupTask**.

---

### **📌 Summary of Important Commands**

| Command                                        | Description                 |
| ---------------------------------------------- | --------------------------- |
| `tasklist`                                     | Show running processes      |
| `taskkill /IM notepad.exe /F`                  | Terminate a process         |
| `start notepad`                                | Open Notepad                |
| `wmic process list brief`                      | List processes              |
| `sc query "ServiceName"`                       | Check service status        |
| `sc start "ServiceName"`                       | Start a service             |
| `sc stop "ServiceName"`                        | Stop a service              |
| `net start "ServiceName"`                      | Start a service             |
| `net stop "ServiceName"`                       | Stop a service              |
| `wmic product get name`                        | List installed applications |
| `wmic product where name="App" call uninstall` | Uninstall an app            |
| `msiexec /i installer.msi`                     | Install a program           |
| `schtasks /create ...`                         | Schedule a task             |

---

### **💡 Conclusion**

Windows provides **powerful CLI commands** to **manage applications, services, and scheduled tasks** efficiently. Using these commands, you can automate software management, troubleshoot performance issues, and control services without the GUI.

