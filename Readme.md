## GST E-Invoice JSON Generator

This is a script written in NodeJs to generate the JSON required for GST E-Invoice download.
Preview UI implemented in ReactJS.

It uses extremely specific regexes to extract the required information from an unformatted bill.

Update the regexes at `scripts\bill-specifics\bill-regex.js` for your own use.


#### Prerquisites
- Currently only supports Windows 
- Provide the bills to be parsed, as a `.txt` file with whatever file name was specified in the `.env` file.
- Does not require an installed/global node. Uses everything it needs from the `bin/` diretory
- Provide the `node_binaries.zip` binaries grabbed from [releases page](https://github.com/spell1612/GST-E-Invoice-JSON-Generator/releases), and place them in the `bin\nodejs\` location.
- Provide a sample E-Invoice JSON file as a template at `scripts\assets`

#### Build

- Clone the repository
- Grab the `node_binaries.zip` from the [releases page](https://github.com/spell1612/GST-E-Invoice-JSON-Generator/releases), extract, and place the contents in `bin/nodejs`
- `cd` into the `/scripts` and `preview-gui` directories and run `npm i` in each of them
- Provide a valid GST JSON template with pre filled seller details, and other static information in the `/scripts/assets` directory
- Provide the appropriate values and file names in `.env`
- Provide the bills to be parsed, as a `.txt` file with whatever file name was specified in the `.env` file.
- Double click `Generate JSON.bat` to run if using a node binary, or by running `node index.js` inside the `/scripts` directory

#### Run Release

- Grab the [latest release](https://github.com/spell1612/GST-E-Invoice-JSON-Generator/releases/latest)
- Provide the bills to be parsed, as a `Bills.txt` file on the desktop.
- Use `Generate JSON.bat` to run


