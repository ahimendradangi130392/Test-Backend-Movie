"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
const tslib_1 = require("tslib");
const dotenv = tslib_1.__importStar(require("dotenv"));
const path = tslib_1.__importStar(require("path"));
const pkg = tslib_1.__importStar(require("../package.json"));
const env_1 = require("./lib/env");
/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({ path: path.join(process.cwd(), `.env${((process.env.NODE_ENV === 'test') ? '.test' : '')}`) });
/**
 * Environment variables
 */
const useSMTP = (0, env_1.getOsEnv)('USE_SMTP');
exports.env = {
    node: process.env.NODE_ENV || 'development',
    isProduction: process.env.NODE_ENV === 'production',
    isTest: process.env.NODE_ENV === 'test',
    isDevelopment: process.env.NODE_ENV === 'development',
    customerCompanyId: (0, env_1.getOsEnvOptional)('CUSTOMER_COMPANY_ID'),
    app: {
        name: (0, env_1.getOsEnv)('APP_NAME'),
        version: pkg.version,
        description: pkg.description,
        host: (0, env_1.getOsEnv)('APP_HOST'),
        localAssetHost: (0, env_1.getOsEnv)('LOCAL_ASSET_HOST'),
        schema: (0, env_1.getOsEnv)('APP_SCHEMA'),
        routePrefix: (0, env_1.getOsEnv)('APP_ROUTE_PREFIX'),
        port: (0, env_1.normalizePort)(process.env.PORT || (0, env_1.getOsEnv)('APP_PORT')),
        banner: (0, env_1.toBool)((0, env_1.getOsEnv)('APP_BANNER')),
        runCron: (0, env_1.toBool)((0, env_1.getOsEnv)('APP_ENABLE_CRON')),
        isCron: (0, env_1.toBool)((0, env_1.getOsEnvOptional)('IS_CRON')),
        dirs: {
            migrations: (0, env_1.getOsPaths)('TYPEORM_MIGRATIONS'),
            migrationsDir: (0, env_1.getOsPath)('TYPEORM_MIGRATIONS_DIR'),
            entities: (0, env_1.getOsPaths)('TYPEORM_ENTITIES'),
            entitiesDir: (0, env_1.getOsPath)('TYPEORM_ENTITIES_DIR'),
            controllers: (0, env_1.getOsPaths)('CONTROLLERS'),
            middlewares: (0, env_1.getOsPaths)('MIDDLEWARES'),
            interceptors: (0, env_1.getOsPaths)('INTERCEPTORS'),
            subscribers: (0, env_1.getOsPaths)('SUBSCRIBERS'),
            resolvers: (0, env_1.getOsPaths)('RESOLVERS'),
        },
    },
   
    log: {
        level: (0, env_1.getOsEnv)('LOG_LEVEL'),
        json: (0, env_1.toBool)((0, env_1.getOsEnvOptional)('LOG_JSON')),
        output: (0, env_1.getOsEnv)('LOG_OUTPUT'),
    },
    jwt: {
        secret: (0, env_1.getOsEnv)('JWT_SECRET'),
        algorithm: (0, env_1.getOsEnv)('JWT_ALGORITHM'),
        expireIN: (0, env_1.getOsEnv)('JWT_EXPIR_IN'),
        secretRefresh: (0, env_1.getOsEnv)('JWT_REFRESH_SECRET'),
        algorithmRefresh: (0, env_1.getOsEnv)('JWT_REFRESH_ALGORITHM'),
        refreshExpireIn: (0, env_1.getOsEnv)('JWT_REFRESH_EXPIRE_IN'),
    },
    db: {
        type: (0, env_1.getOsEnv)('TYPEORM_CONNECTION'),
        host: (0, env_1.getOsEnvOptional)('TYPEORM_HOST'),
        port: (0, env_1.toNumber)((0, env_1.getOsEnvOptional)('TYPEORM_PORT')),
        username: (0, env_1.getOsEnvOptional)('TYPEORM_USERNAME'),
        password: (0, env_1.getOsEnvOptional)('TYPEORM_PASSWORD'),
        database: (0, env_1.getOsEnv)('TYPEORM_DATABASE'),
        synchronize: (0, env_1.toBool)((0, env_1.getOsEnvOptional)('TYPEORM_SYNCHRONIZE')),
        logging: (0, env_1.getOsEnv)('TYPEORM_LOGGING'),
    },
    monitor: {
        enabled: (0, env_1.toBool)((0, env_1.getOsEnv)('MONITOR_ENABLED')),
        route: (0, env_1.getOsEnv)('MONITOR_ROUTE'),
        username: (0, env_1.getOsEnv)('MONITOR_USERNAME'),
        password: (0, env_1.getOsEnv)('MONITOR_PASSWORD'),
    },
};
//# sourceMappingURL=env.js.map