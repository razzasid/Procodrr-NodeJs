
## Environment Variables

- do `env` or `printenv` in `bash terminal` to print all the environment variables.
- `env` or `printenv` will not work in windows based terminal

- do `export VARIABLE_NAME=VARIABLE VALUE` - to set a new environment variable, ( **Note:** There should not be any space between them `variableName=variableValue` before or after the equal sign ( `=` ) ).
- This will only set the environment variable for the current process which is bash in this case.

- But to set the environment variable for a particular user that will reflect in our user environment variables we can `setx `command. like `setx VARIABLE_NAME "VARIABLE VALUE"`

- Now to `delete` the the `VARIABLE` from the user environment variables we can use `REG delete HKCU\Environment /F /V VARIABLE_NAME`

- But the above command to delete the VARIABLE from `user` environment variables will not work for `bash terminal` because this is a powershell command, so it will only work in powershell of windows.

- But we can run the `powershell terminal` inside our `bash terminal` like this `powershell -Command "REG delete HKCU\Environment /F /V VARIABLE_NAME"`.

- In fact we can `run` or `use` any terminal inside any other terminal.

- To set the environment variable globally that will reflect in our system's environment variables we can `setx `command. like `setx VARIABLE_NAME "VARIABLE VALUE" /M`

- But this will not work in `bash terminal` because `setx` is a `powershell` command so we will have to set it using `powershell` like below.

- `powershell -Command "setx VARIABLE_NAME 'VARIABLE VALUE' /M"`

- We can also set the environment variable globally that will reflect in our system's environment variables using `node.js` like below.
```js
import {exec} from 'child_process'
exec(`powershell -Command "setx VARIABLE_NAME 'Hameed Khan' /M"`)
```

- To unset an environment variable you can do this: `env -u VARIABLE_NAME1 -u VARIABLE VALUE2 node --inspect app.js`

- If we want to `debug` our `node.js` code in chrome then we can use `--inspect` flag while running our node.js app like this: `node --inspect app.js`

- To make this work properly use `setInterval()` method like below and you will see the `node.js` icon in the chrome besides the `console tab` when you inspect it.

```js
const environmentVariables = process.env;
setInterval(()=>{
  console.log(environmentVariables)
}, 1000)
```

- In `Linux` the paths a separated by colon ( `:` ) while in `Windows` the paths are separated by semicolon ( `;` )

```bash
PATH=/c/Users/hameed/bin:/mingw64/bin:/usr/local/bin:/usr/bin:/bin:/mingw64/bin:/usr/bin:/c/Users/hameed/bin:/c/Program Files/Microsoft/jdk-17.0.13.11-hotspot/bin:/c/Program Files/Common Files/Oracle/Java/javapath:/c/Program Files
```



