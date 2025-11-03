**What npx does?**
- Searches for a file and executes it.

---

step 1:
    Searches the `package.json` in current working directory and in `package.json` file it searches for `name` key and then `bin` key. and executes it.

step 2:
    Searches the `node_modules\.bin\file` in current working directory and executes it.

step 3:
    Searches the `package file` in globally installed packages (generally in: `C:\Users\hameed\AppData\Roaming\npm` ) and executes it.

step 4:
    Searches the `package file` in `npm-cache` (generally in: `C:\Users\hameed\AppData\Local\npm-cache\_npx` ) and executes it.

step 5:
    Searches the `package file` in npm registry, then gives prompts to install the package if found and then downloads it and executes it.
    
**NOTE:** For `globally installed packages` we don't need to use `npx` before `package name` like: `npx vite` instead we can do `vite` only.
- But to make `globally installed packages` work properly the path/location of the `globally installed packages` should be set in environment variables.
    