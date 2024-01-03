"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const tslib_1 = require("tslib");
const nodemailer_1 = tslib_1.__importDefault(require("nodemailer"));
const nodemailer_express_handlebars_1 = tslib_1.__importDefault(require("nodemailer-express-handlebars"));
const env_1 = require("../env");
const gmail = {
    service: env_1.env.email.serviceName,
    host: env_1.env.email.serviceHost,
    secure: env_1.env.email.isSecure,
    port: env_1.env.email.servicePort,
    auth: {
        user: env_1.env.email.userName,
        pass: env_1.env.email.userPassword,
    },
};
const outlook = {
    service: env_1.env.email.serviceName,
    host: env_1.env.email.serviceHost,
    secureConnection: false,
    port: 587,
    tls: {
        ciphers: 'SSLv3',
    },
    auth: {
        user: env_1.env.email.userName,
        pass: env_1.env.email.userPassword,
    },
};
const Transport = () => {
    const transport = nodemailer_1.default.createTransport(env_1.env.email.use_smtp === 'gmail' ? gmail : outlook);
    transport.use('compile', (0, nodemailer_express_handlebars_1.default)({
        viewPath: 'src/views/email',
        extName: '.hbs',
        viewEngine: {
            extname: '.hbs',
            layoutsDir: 'src/views/email/',
            defaultLayout: 'layout',
            partialsDir: 'src/views/email/', // location of your subtemplates aka. header, footer etc
        },
    }));
    return transport;
};
exports.Transport = Transport;
//# sourceMappingURL=index.js.map