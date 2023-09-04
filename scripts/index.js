import "./config/dotenv.js"
import loadAndParseFiles from "./json-generator/file-reader.js"

const run = async () => {
    try {
        await loadAndParseFiles()
    } catch (error) {
        console.error('Generator Error', err);
    }
}

await run();