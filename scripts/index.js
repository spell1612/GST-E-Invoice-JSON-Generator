import "./config/dotenv.js"
import loadAndParseFiles from "./json-generator/index.js"
import runGui from './run-gui.js';

const run = async () => {
    try {
        await loadAndParseFiles();
        runGui();
    } catch (error) {
        console.error('Generator Error', err);
    }
}

await run();