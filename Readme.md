## GST E-Invoice JSON Generator

This is a script written in NodeJs to generate the JSON required for GST E-Invoice download.

It uses extremely specific regexes to extract the required information from an unformatted bill.
Update the regexes at `scripts\bill-specifics\bill-regex.js` for your own use.

#### Run
Use `Generate JSON.bat` to run

#### Prerquisites
- Provide the bills to be used for generation by copying them over to `Bills.txt` on the desktop.
- Provide a `node.exe` binary in the `bin\nodejs\` location.
- Provide a sample E-Invoice JSON file as a template at `scripts\assets`


