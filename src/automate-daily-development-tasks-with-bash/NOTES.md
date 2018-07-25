# [Automate Daily Development Tasks With Bash](https://egghead.io/courses/automate-daily-development-tasks-with-bash)

* `cat -n package.json`
  * `-n`: number of lines for output
* `less package.json` - read files
  * Read only, so some benefits vs. `vim`
* `find` files / directories
  * `find images/ -name "*.png"`
    * find all files in the `images` directory with a name that includes `".png"`
  * `find . -type d -name "images"`
    * find all folders in the current directory with the name `images`
  * `find images/ -name "*.png" -exec pngquant {} \;`
    * find all `png` images, and for each image, execute the command `pngquant`
* `grep` - find in files
  * `grep --color -n -C 2 -e "some regex"`
    * find, and colorize, with line numbers, with 2 lines of context, everything matching regex
* `curl`
  * `-i` - headers
  * `-L` - follow redirects
  * `-H` - add header
  * `-X` - HTTP verb (`GET`, `POST`, etc)
  * `-d` - request body
  * `--data-url-encode title="Foo"` - will url encode key/value pairs
  * `\` - new line to separate `curl` optoins
  * `-o` - output to file
* `$PATH` - colon-separated list of places that shell looks for executables
* `$?` - last command exit code
* `functions`
  * `$1` - get first arg passed to script (`script.sh foo`)
  * `$(pwd)` - executes command and outputs; can assign to variable
  * `local` - to give variable local scope (`local localvar="some local var"`)

```bash
# functions don't take parameters
# () just indicates to compiler that it is a function
greet() {
  echo "hello world"
}

greet
```

```bash
greet() {
  // uses first arg
  echo "$1 world"
}

greet "howdy" # "howdy world"
```

```bash
# if/elif/else
if [[ ]]; then
elif
else
fi

# 1 equals 1
# 1 -eq 1

# 1 not equals 1
# 1 -ne 1

# script.sh exists
# -e script.sh

# variable foo exists
# -z foo
```

* piping
  * `status=curl -ILs $1 | head -n 1 | cut -d ' ' -f 2`
    * make HTTP request
    * get first line (status header)
    * split the status header on `' '`
    * get second part which will be numerical status
* `ls > ls.txt` - output command results to `ls.txt`
* `echo "hi" >> ls.txt` - concatenate output to `ls.txt`

