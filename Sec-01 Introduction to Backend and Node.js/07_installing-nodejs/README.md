### **How to Install Node.js on Your System**

Node.js installation is simple and involves a few steps. You can install it on **Windows**, **macOS**, or **Linux**.

---

## **1. Download Node.js**

Visit the official **Node.js** website:  
🔗 [https://nodejs.org](https://nodejs.org)

You’ll see two versions:

- **LTS (Long-Term Support)** – Recommended for stability.
- **Current (Latest Features)** – For developers who need the latest updates.

✅ **Choose LTS for most cases.**

---

## **2. Install Node.js (Windows)**

1. **Download the Windows Installer** (`.msi` file).
2. **Run the Installer** and follow the setup wizard.
   - Accept the license agreement.
   - Choose the installation path.
   - Install necessary components like `npm`.
3. **Verify Installation:** Open **Command Prompt (cmd)** and type:
   ```sh
   node -v
   ```
   ```sh
   npm -v
   ```
   If both return version numbers, Node.js is installed successfully.

---

## **3. Install Node.js (macOS)**

### **Method 1: Using the Installer**

1. Download the **macOS Installer** (`.pkg` file) from [Node.js official site](https://nodejs.org).
2. Open the installer and follow the steps.
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### **Method 2: Using Homebrew (Recommended)**

If you have **Homebrew** installed, run:

```sh
brew install node
```

Verify installation:

```sh
node -v
npm -v
```

---

## **4. Install Node.js (Linux - Ubuntu/Debian)**

### **Method 1: Using Package Manager (APT)**

1. Update package lists:
   ```sh
   sudo apt update
   ```
2. Install Node.js and npm:
   ```sh
   sudo apt install nodejs npm -y
   ```
3. Verify installation:
   ```sh
   node -v
   npm -v
   ```

### **Method 2: Using Node Version Manager (NVM)**

NVM allows you to install and manage multiple Node.js versions.

1. Install NVM:
   ```sh
   curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
   ```
2. Restart the terminal and install Node.js:
   ```sh
   nvm install --lts
   ```
3. Verify:
   ```sh
   node -v
   npm -v
   ```

---

## **5. Check Node.js Installation**

After installation, verify by running:

```sh
node -v   # Check Node.js version
npm -v    # Check npm version
```

If both return version numbers, your installation is successful! 🎉

---

## **6. Running Your First Node.js Script**

Create a file **app.js** and add:

```javascript
console.log("Hello, Node.js!");
```

Run it using:

```sh
node app.js
```

Output:

```
Hello, Node.js!
```

You're now ready to start coding with Node.js! 🚀
