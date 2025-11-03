# **Linux File Permissions: A Detailed Guide**

Linux file permissions control who can **read (r)**, **write (w)**, and **execute (x)** files and directories. Permissions are assigned to three categories of users:
- **Owner (u)** – The user who owns the file.
- **Group (g)** – Users belonging to the file’s group.
- **Others (o)** – All other users.

Additionally, there are **special permissions** (like `setuid`, `setgid`, and the sticky bit) that provide advanced control.

---

## **1. Understanding File Permissions**
### **Viewing Permissions (`ls -l`)**
Run `ls -l` to see permissions:

```bash
ls -l file.txt
```
**Example Output:**
```
-rw-r--r-- 1 user group 1024 May 16 10:00 file.txt
```
- `-rw-r--r--` → Permission string.
- `user` → Owner.
- `group` → Group assigned.

### **Permission Breakdown**
| Position | Meaning       | Possible Values |
|----------|--------------|----------------|
| 1        | File type    | `-` (file), `d` (directory), `l` (symlink) |
| 2-4      | Owner (u)    | `rwx` (read, write, execute) |
| 5-7      | Group (g)    | `rwx` (read, write, execute) |
| 8-10     | Others (o)   | `rwx` (read, write, execute) |

**Example:**
- `-rwxr-xr--` →  
  - Owner: `rwx` (read, write, execute)  
  - Group: `r-x` (read, execute)  
  - Others: `r--` (read only)

---

## **2. Changing Permissions (`chmod`)**
### **Symbolic Mode (u/g/o/a +/- r/w/x)**
```bash
chmod u+x file.txt       # Add execute for owner
chmod g-w file.txt       # Remove write for group
chmod o=r file.txt       # Set others to read-only
chmod a+rw file.txt      # Give read-write to all (a = all)
```

### **Numeric Mode (Octal Notation)**
Each permission has a numeric value:
- `r` (read) = **4**
- `w` (write) = **2**
- `x` (execute) = **1**

Add them to set permissions:
- `7` = `rwx` (4+2+1)
- `6` = `rw-` (4+2)
- `5` = `r-x` (4+1)
- `0` = `---` (no permissions)

**Example:**
```bash
chmod 755 file.txt    # Owner: rwx (7), Group: r-x (5), Others: r-x (5)
chmod 644 file.txt    # Owner: rw-, Group: r--, Others: r--
```

---

## **3. Changing Ownership (`chown` and `chgrp`)**
### **Change Owner (`chown`)**
```bash
sudo chown newuser file.txt          # Change owner
sudo chown newuser:newgroup file.txt # Change owner & group
```

### **Change Group (`chgrp`)**
```bash
sudo chgrp newgroup file.txt
```

---

## **4. Special Permissions**
| Permission | Symbol | Numeric | Effect |
|------------|--------|---------|--------|
| **SetUID** | `s` (user) | `4000` | Runs as owner (e.g., `/usr/bin/passwd`) |
| **SetGID** | `s` (group) | `2000` | Runs with group permissions (useful for directories) |
| **Sticky Bit** | `t` | `1000` | Only owner can delete files (e.g., `/tmp`) |

**Examples:**
```bash
chmod u+s /usr/bin/myprogram   # SetUID (rwsr-xr-x)
chmod g+s /shared_folder      # SetGID (rwxr-sr-x)
chmod +t /tmp                 # Sticky Bit (rwxrwxrwt)
```

**Numeric Example:**
```bash
chmod 4755 /usr/bin/myprogram  # SetUID (4) + rwxr-xr-x (755)
```

---

## **5. Managing Permissions via GUI (File Manager)**
In Linux GUI (e.g., **Nautilus, Dolphin, Thunar**):
1. **Right-click** the file → **Properties**.
2. Go to the **Permissions** tab.
3. Modify:
   - **Owner, Group, Others** permissions (read/write/execute).
   - **Advanced Permissions** (SetUID, SetGID, Sticky Bit).
4. Click **Apply**.

![Linux GUI Permissions Example](https://www.linux.com/images/stories/41373/nautilus-permissions.png)  
*(Example: Nautilus File Permissions in GNOME)*

---

## **6. Common Permission Examples**
| Scenario | Command |
|----------|---------|
| Make a script executable | `chmod +x script.sh` |
| Restrict a file to owner only | `chmod 700 file.txt` |
| Allow group read-write, others read-only | `chmod 664 file.txt` |
| Allow everyone full access | `chmod 777 file.txt` (⚠️ **Insecure!**) |
| Set a directory to inherit group ownership (SetGID) | `chmod g+s /shared` |

---

## **7. Checking Default Permissions (`umask`)**
The `umask` value defines default permissions for new files/directories.
```bash
umask           # View current umask (e.g., 0022)
umask 0002      # Set umask (new files: 664, dirs: 775)
```
- **Calculation:** `666` (files) or `777` (dirs) **minus** umask.
- Example: `umask 0022` → Files: `644`, Directories: `755`.

---

## **Summary Table**
| Command | Usage |
|---------|-------|
| `ls -l` | View permissions |
| `chmod` | Change permissions |
| `chown` | Change owner |
| `chgrp` | Change group |
| `umask` | Set default permissions |

---

## **Conclusion**
- **Permissions** control access (`r`, `w`, `x`) for **owner**, **group**, and **others**.
- **`chmod`** modifies permissions (symbolic or numeric).
- **`chown` & `chgrp`** change ownership.
- **Special permissions** (`setuid`, `setgid`, sticky bit) add security features.
- **GUI file managers** provide a visual way to modify permissions.

Would you like a deeper explanation of any specific part? 🚀