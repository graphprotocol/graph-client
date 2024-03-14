import 'ts-node/register';
import { runServeCLI } from "./index.js";

runServeCLI().catch(e => {
    console.error(e);
    process.exit(1);
})