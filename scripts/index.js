import "./config/dotenv.js"
import loadAndParseFiles from "./file-parser.js"

const run = () => {
    loadAndParseFiles();
}

run();