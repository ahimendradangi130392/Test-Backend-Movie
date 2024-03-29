"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicLoader = void 0;
const tslib_1 = require("tslib");
const express = tslib_1.__importStar(require("express"));
const path = tslib_1.__importStar(require("path"));
const serve_favicon_1 = tslib_1.__importDefault(require("serve-favicon"));
const fs_1 = tslib_1.__importDefault(require("fs"));
const publicLoader = (settings) => {
    if (settings) {
        const expressApp = settings.getData('express_app');
        expressApp
            // Serve static files like images from the public folder
            .use(express.static(path.join(__dirname, '..', 'public'), { maxAge: 31557600000 }))
            // A favicon is a visual cue that client software, like browsers, use to identify a site
            .use((0, serve_favicon_1.default)(path.join(__dirname, '..', 'public', 'favicon.ico')));
    }
    if (!fs_1.default.existsSync(__dirname + `/../../uploads`)) {
        fs_1.default.mkdirSync(__dirname + `/../../uploads`);
    }
};
exports.publicLoader = publicLoader;
//# sourceMappingURL=publicLoader.js.map