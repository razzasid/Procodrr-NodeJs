To make `echo "Running .bashrc"` print from any directory do this step-by-step:

### ✅ Step-by-step:

1. **Go to the correct directory like**:

   ```bash
   cd /d/02-Programming-Language/MERN/node-js
   ```

2. **Check if the file is there**:

   ```bash
   ls -a
   ```

   You should see `.bashrc` in the list, if not create the `.bashrc` file and write the `echo "Running .bashrc"`

3. **Run it explicitly**:

   ```bash
   source ./.bashrc
   ```

4. **You should now see**:

   ```
   Running .bashrc
   ```
