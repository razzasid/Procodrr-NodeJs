# Publishing and updating a npm cli package on npm

Here's a step-by-step guide to publish your CLI app to npm and make it available via `npx` and global installation.

## Step 1: Prepare Your Package

1. **Ensure proper project structure**:

   ```
   word-counter-cli/
   ├── index.js  # CLI entry point
   ├── package.json
   ├── README.md
   └── .gitignore
   ```

2. **Set up the CLI entry point** (`bin/index.js`):

   ```javascript
   #!/usr/bin/env node
   const counter = require("../lib/counter");

   // Process command line arguments
   const args = process.argv.slice(2);

   if (args.length === 0 || args.includes("--help")) {
     console.log("Usage: hk-words-counter <file> [options]");
     console.log("Options:");
     console.log("  --help     Show help");
     return;
   }

   const result = counter.countWords(args[0]);
   console.log(`Word count: ${result}`);
   ```

## Step 2: Configure package.json

#### npm published package `package.json file`

1. **Essential fields**:

```json
{
  "name": "hk-words-counter",
  "version": "1.0.2",
  "description": "A command-line tool that analyzes text files to count word occurrences. Provides total word counts and allows searching for specific word frequencies.",
  "bin": "index.js",
  "type": "module",
  "scripts": {
    "build": "pkg -t node16-win-x64 ."
  },
  "keywords": ["cli", "word", "counter", "text"],
  "author": "Hameed Khan",
  "license": "MIT",
  "dependencies": {}
}
```

2. **Important notes**:
   - Choose a unique name (check npmjs.com)
   - The `bin` field makes it executable
   - Start with version 1.0.0

## Step 3: Test Locally

1. **Test with npx**:

   ```bash
   npx /path/to/your/hk-words-counter test.txt
   ```

2. **Test global installation**:
   ```bash
   npm link  # Creates a global symlink to your package
   hk-words-counter test.txt
   ```

## Step 4: Publish to npm

1. **Create an npm account** (if you don't have one):

   ```bash
   npm adduser
   ```

2. **Login**:

   ```bash
   npm login
   ```

3. **Publish**:
   ```bash
   npm publish --access public
   ```

## Step 5: Verify Installation

1. **Install globally from npm**:

   ```bash
   npm install -g hk-words-counter
   hk-words-counter test.txt
   ```

2. **Test with npx**:
   ```bash
   npx hk-words-counter test.txt
   ```

## Step 6: Update Your Package

When you make changes:

1. Update version in package.json (following semver)

   - Patch: `npm version patch` (1.0.0 → 1.0.1)
   - Minor: `npm version minor` (1.0.0 → 1.1.0)
   - Major: `npm version major` (1.0.0 → 2.0.0)

2. Publish again:
   ```bash
   npm publish
   ```

## Best Practices

1. Add a comprehensive README.md with:

   - Installation instructions
   - Usage examples
   - Screenshots if helpful

2. Consider adding:

   - Tests (Jest, Mocha)
   - CI/CD (GitHub Actions)
   - Linting (ESLint)

3. Handle errors gracefully in your CLI:
   ```javascript
   try {
     const result = counter.countWords(args[0]);
     console.log(`Word count: ${result}`);
   } catch (error) {
     console.error("Error:", error.message);
     process.exit(1);
   }
   ```

Now your CLI tool is available for anyone to use with either:

- `npx hk-words-counter file.txt` OR
- `npm install -g hk-words-counter` then `hk-words-counter file.txt`
