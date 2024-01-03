# Test-Backend-Movie
# create .env file 
APP_NAME=MOVIE-BACKEND
APP_SCHEMA=http
APP_HOST=localhost

APP_PORT=3003
APP_ROUTE_PREFIX=/api
APP_BANNER=true
LOCAL_ASSET_HOST=uploads/

#
# LOGGING
#
LOG_LEVEL=debug
LOG_OUTPUT=dev

#
# MySql DATABASE
#

TYPEORM_CONNECTION=mysql

# Production DD

TYPEORM_HOST=localhost
TYPEORM_PORT=3306
TYPEORM_USERNAME=root
TYPEORM_PASSWORD=
TYPEORM_DATABASE=movie_db

TYPEORM_SYNCHRONIZE=false
TYPEORM_LOGGING=all
TYPEORM_LOGGER=advanced-console

#
# JWT
#
JWT_SECRET=super_secret_token
JWT_ALGORITHM=HS256
JWT_EXPIR_IN='2 days'

#
# PATH STRUCTRUE
#
TYPEORM_MIGRATIONS=src/database/migrations/**/*.ts
TYPEORM_MIGRATIONS_DIR=src/database/migrations
TYPEORM_ENTITIES=src/api/models/**/*.ts
TYPEORM_ENTITIES_DIR=src/api/models
CONTROLLERS=src/api/controllers/**/*Controller.ts
MIDDLEWARES=src/api/middlewares/**/*Middleware.ts
INTERCEPTORS=src/api/interceptors/**/*Interceptor.ts
SUBSCRIBERS=src/api/subscribers/**/*Subscriber.ts
RESOLVERS=src/api/resolvers/**/*Resolver.ts


# ##Complete Registration Redirect URL
APP_ENABLE_CRON = false

JWT_REFRESH_SECRET=super_secret_refresh_token
JWT_REFRESH_ALGORITHM=HS256
JWT_REFRESH_EXPIRE_IN='11 days'

UPLOAD=/uploads/

# MOVIE BACKEND
# yarn install
# yarn start db.migrate
# yarn start db.seed
# yarn start serve
