### OS-Related Commands in Linux

Linux provides a variety of commands to interact with and manage the operating system. These commands allow users to monitor system performance, manage processes, configure hardware, and perform administrative tasks. Below is a detailed explanation of the most commonly used OS-related commands in Linux, along with examples.

---

### **1. System Information Commands**

These commands provide information about the system, such as the OS version, hardware details, and uptime.

#### **a. `uname`**

The `uname` command displays system information.

- **Display the kernel name:**

  ```bash
  uname
  ```

- **Display the kernel release:**

  ```bash
  uname -r
  ```

- **Display the kernel version:**

  ```bash
  uname -v
  ```

- **Display the machine hardware name:**

  ```bash
  uname -m
  ```

- **Display all system information:**
  ```bash
  uname -a
  ```

---

#### **b. `hostnamectl`**

The `hostnamectl` command displays and sets the system hostname and related settings.

- **Display hostname and related information:**

  ```bash
  hostnamectl
  ```

- **Set the hostname:**
  ```bash
  sudo hostnamectl set-hostname <new_hostname>
  ```

---

#### **c. `lsb_release`**

The `lsb_release` command displays Linux Standard Base (LSB) information about the distribution.

- **Display distribution information:**
  ```bash
  lsb_release -a
  ```

---

#### **d. `uptime`**

The `uptime` command shows how long the system has been running.

- **Display system uptime:**
  ```bash
  uptime
  ```

---

### **2. Process Management Commands**

These commands are used to monitor and manage running processes.

#### **a. `ps`**

The `ps` command displays information about running processes.

- **Display all running processes:**

  ```bash
  ps aux
  ```

- **Display processes for the current user:**
  ```bash
  ps -u <username>
  ```

---

#### **b. `top`**

The `top` command provides a real-time view of system processes and resource usage.

- **Start `top`:**
  ```bash
  top
  ```

---

#### **c. `htop`**

The `htop` command is an interactive process viewer (requires installation).

- **Start `htop`:**
  ```bash
  htop
  ```

---

#### **d. `kill`**

The `kill` command is used to terminate processes.

- **Terminate a process by PID:**

  ```bash
  kill <PID>
  ```

- **Forcefully terminate a process:**
  ```bash
  kill -9 <PID>
  ```

---

#### **e. `pkill`**

The `pkill` command is used to terminate processes by name.

- **Terminate a process by name:**
  ```bash
  pkill <process_name>
  ```

---

### **3. System Monitoring Commands**

These commands help monitor system performance and resource usage.

#### **a. `free`**

The `free` command displays memory usage.

- **Display memory usage in human-readable format:**
  ```bash
  free -h
  ```

---

#### **b. `vmstat`**

The `vmstat` command reports virtual memory statistics.

- **Display virtual memory statistics:**

  ```bash
  vmstat
  ```

- **Display statistics every 2 seconds:**
  ```bash
  vmstat 2
  ```

---

#### **c. `iostat`**

The `iostat` command reports CPU and I/O statistics.

- **Display CPU and I/O statistics:**
  ```bash
  iostat
  ```

---

#### **d. `netstat`**

The `netstat` command displays network connections, routing tables, and interface statistics.

- **Display all listening ports:**

  ```bash
  netstat -tuln
  ```

- **Display all active connections:**
  ```bash
  netstat -a
  ```

---

### **4. Hardware Information Commands**

These commands provide information about the system's hardware.

#### **a. `lscpu`**

The `lscpu` command displays CPU architecture information.

- **Display CPU information:**
  ```bash
  lscpu
  ```

---

#### **b. `lsblk`**

The `lsblk` command lists block devices.

- **List all block devices:**
  ```bash
  lsblk
  ```

---

#### **c. `lspci`**

The `lspci` command lists PCI devices.

- **List all PCI devices:**
  ```bash
  lspci
  ```

---

#### **d. `lsusb`**

The `lsusb` command lists USB devices.

- **List all USB devices:**
  ```bash
  lsusb
  ```

---

### **5. File System Commands**

These commands are used to manage and monitor the file system.

#### **a. `df`**

The `df` command displays disk space usage.

- **Display disk space usage in human-readable format:**
  ```bash
  df -h
  ```

---

#### **b. `du`**

The `du` command estimates file space usage.

- **Display disk usage of a directory:**
  ```bash
  du -sh /path/to/directory
  ```

---

#### **c. `mount`**

The `mount` command mounts file systems.

- **List all mounted file systems:**

  ```bash
  mount
  ```

- **Mount a file system:**
  ```bash
  sudo mount /dev/sdX1 /mnt
  ```

---

#### **d. `umount`**

The `umount` command unmounts file systems.

- **Unmount a file system:**
  ```bash
  sudo umount /mnt
  ```

---

### **6. User and Group Management Commands**

These commands are used to manage users and groups.

#### **a. `useradd`**

The `useradd` command creates a new user.

- **Create a new user:**
  ```bash
  sudo useradd <username>
  ```

---

#### **b. `usermod`**

The `usermod` command modifies user account properties.

- **Add a user to a group:**
  ```bash
  sudo usermod -aG <groupname> <username>
  ```

---

#### **c. `userdel`**

The `userdel` command deletes a user.

- **Delete a user:**
  ```bash
  sudo userdel <username>
  ```

---

#### **d. `groupadd`**

The `groupadd` command creates a new group.

- **Create a new group:**
  ```bash
  sudo groupadd <groupname>
  ```

---

#### **e. `groupdel`**

The `groupdel` command deletes a group.

- **Delete a group:**
  ```bash
  sudo groupdel <groupname>
  ```

---

### **7. System Shutdown and Reboot Commands**

These commands are used to shut down or reboot the system.

#### **a. `shutdown`**

The `shutdown` command shuts down or reboots the system.

- **Shut down the system:**

  ```bash
  sudo shutdown -h now
  ```

- **Reboot the system:**
  ```bash
  sudo shutdown -r now
  ```

---

#### **b. `reboot`**

The `reboot` command reboots the system.

- **Reboot the system:**
  ```bash
  sudo reboot
  ```

---

#### **c. `poweroff`**

The `poweroff` command shuts down the system.

- **Shut down the system:**
  ```bash
  sudo poweroff
  ```

---

These commands are essential for managing and interacting with the Linux operating system. By mastering them, you can efficiently monitor system performance, manage processes, configure hardware, and perform administrative tasks.
