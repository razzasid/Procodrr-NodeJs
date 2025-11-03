Customizing the **Command Prompt (CMD)** in Windows can improve your productivity and make the command-line experience more user-friendly. Below is a detailed explanation of the most commonly used commands and techniques for customizing the Command Prompt, along with examples:

---

### **1. Changing Command Prompt Colors**

#### **`color` Command**

The `color` command is used to change the background and text colors of the Command Prompt window.

##### **Syntax**

```
color [background_color][text_color]
```

- Colors are specified using hexadecimal values (0-9, A-F).

##### **Color Codes**

| Code | Color        |
| ---- | ------------ |
| 0    | Black        |
| 1    | Blue         |
| 2    | Green        |
| 3    | Aqua         |
| 4    | Red          |
| 5    | Purple       |
| 6    | Yellow       |
| 7    | White        |
| 8    | Gray         |
| 9    | Light Blue   |
| A    | Light Green  |
| B    | Light Aqua   |
| C    | Light Red    |
| D    | Light Purple |
| E    | Light Yellow |
| F    | Bright White |

##### **Examples**

1. **Set Background to Blue and Text to Light Gray**:

   ```
   color 17
   ```

2. **Set Background to Black and Text to Green**:

   ```
   color 02
   ```

3. **Reset to Default Colors**:
   ```
   color
   ```

---

### **2. Changing the Command Prompt Title**

#### **`title` Command**

The `title` command is used to change the title of the Command Prompt window.

##### **Syntax**

```
title [new_title]
```

##### **Examples**

1. **Set the Title to "My Command Prompt"**:

   ```
   title My Command Prompt
   ```

2. **Set the Title to Include the Current Directory**:
   ```
   title Command Prompt - %cd%
   ```

---

### **3. Changing the Command Prompt Prompt String**

#### **`prompt` Command**

The `prompt` command is used to customize the command prompt string (the text displayed before the cursor).

##### **Syntax**

```
prompt [new_prompt_string]
```

##### **Special Codes**

| Code | Description             |
| ---- | ----------------------- |
| $P   | Current drive and path  |
| $G   | Greater-than sign (`>`) |
| $L   | Less-than sign (`<`)    |
| $N   | Current drive           |
| $D   | Current date            |
| $T   | Current time            |
| $Q   | Equal sign (`=`)        |
| $S   | Space                   |

##### **Examples**

1. **Set the Prompt to Display the Current Drive and Path**:

   ```
   prompt $P$G
   ```

2. **Set the Prompt to Display the Current Date and Time**:

   ```
   prompt $D $T$G
   ```

3. **Reset to Default Prompt**:
   ```
   prompt $P$G
   ```

---

### **4. Changing the Command Prompt Window Size**

#### **`mode` Command**

The `mode` command is used to change the size of the Command Prompt window.

##### **Syntax**

```
mode con: cols=[width] lines=[height]
```

##### **Examples**

1. **Set the Window Size to 80 Columns by 25 Lines**:

   ```
   mode con: cols=80 lines=25
   ```

2. **Set the Window Size to 120 Columns by 50 Lines**:
   ```
   mode con: cols=120 lines=50
   ```

---

### **5. Enabling/Disabling QuickEdit Mode**

QuickEdit mode allows you to select text in the Command Prompt window with the mouse.

#### **Using the GUI**

1. Right-click on the title bar of the Command Prompt window.
2. Select `Properties`.
3. Go to the `Options` tab.
4. Check or uncheck `QuickEdit Mode`.

#### **Using the Registry**

1. Open the Registry Editor (`regedit`).
2. Navigate to `HKEY_CURRENT_USER\Console`.
3. Modify the `QuickEdit` value:
   - `1` to enable QuickEdit mode.
   - `0` to disable QuickEdit mode.

---

### **6. Changing the Command Prompt Font**

#### **Using the GUI**

1. Right-click on the title bar of the Command Prompt window.
2. Select `Properties`.
3. Go to the `Font` tab.
4. Choose the desired font and size.

---

### **7. Saving Customizations**

To make your customizations persistent across sessions, you can modify the Command Prompt shortcut or use a batch file.

#### **Modifying the Shortcut**

1. Right-click on the Command Prompt shortcut.
2. Select `Properties`.
3. Modify the `Target` field to include your customizations.
   Example:
   ```
   %windir%\system32\cmd.exe /k "color 17 & title My Command Prompt & prompt $P$G"
   ```

#### **Using a Batch File**

1. Create a batch file (`custom_cmd.bat`) with your customizations:
   ```batch
   @echo off
   color 17
   title My Command Prompt
   prompt $P$G
   cmd
   ```
2. Run the batch file to start a customized Command Prompt session.

---

### **Summary Table of Command Prompt Customization Commands**

| Command                                                     | Description                                            |
| ----------------------------------------------------------- | ------------------------------------------------------ |
| `color 17`                                                  | Sets background to blue and text to light gray.        |
| `title My Command Prompt`                                   | Sets the title of the Command Prompt window.           |
| `prompt $P$G`                                               | Sets the prompt to display the current drive and path. |
| `mode con: cols=80 lines=25`                                | Sets the window size to 80 columns by 25 lines.        |
| `mode con: cols=120 lines=50`                               | Sets the window size to 120 columns by 50 lines.       |
| `cmd /k "color 17 & title My Command Prompt & prompt $P$G"` | Starts a customized Command Prompt session.            |

---

These commands and techniques are essential for customizing the Command Prompt in Windows. Let me know if you need further clarification! 😊
