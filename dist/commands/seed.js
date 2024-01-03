"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const child_process_1 = require("child_process");
// Search for seeds and factories
const run = () => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    const log = console.log;
    (0, child_process_1.exec)('yarn seed:run', (err, stdout, stderr) => {
        if (err) {
            log(err);
        }
        else {
            // the *entire* stdout and stderr (buffered)
            log(`stdout: ${stdout}`);
            log(`stderr: ${stderr}`);
        }
    });
    log('\n👍 ', chalk_1.default.gray.underline(`finished seeding`));
    process.exit(0);
});
run();
//# sourceMappingURL=seed.js.map