import 'ts-node/register';
import { runComposeCLI } from "./index.js";

runComposeCLI().catch(e => {
    console.error(e);
    process.exit(1);
})