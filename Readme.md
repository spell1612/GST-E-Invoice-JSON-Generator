## GST E-Invoice JSON Generator

This is a script written in NodeJs to generate the JSON required for GST E-Invoice download.

It uses extremely specific regexes to extract the required information from an unformatted bill.

Update the regexes at `scripts\bill-specifics\bill-regex.js` for your own use.

#### Build

- Clone the repository
- Either use the node v20.x binary provided in the releases page, or use a global node 20.x installation
- `cd` into the `/scripts` directory and run `npm i`
- Provide a valid GST JSON template with pre filled seller details, and other static information in the `/scripts/assets` directory
- Provide the appropriate values and file names in `.env`
- Provide the bills to be parsed, as a `.txt` file with whatever file name was specified in the `.env` file.
- Double click `Generate JSON.bat` to run if using a node binary, or by running `node index.js` inside the `/scripts` directory

#### Run Release

- Grab the latest release
- Provide the bills to be parsed, as a `.txt` file with whatever file name was specified in the `.env` file.
- Use `Generate JSON.bat` to run

#### Prerquisites
- Provide the bills to be used for generation by copying them over to `Bills.txt` on the desktop.
- Provide a `node.exe` binary in the `bin\nodejs\` location.
- Provide a sample E-Invoice JSON file as a template at `scripts\assets`


