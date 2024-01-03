import {HttpError} from 'routing-controllers';

export class RefreshTokenError extends HttpError {
    constructor() {
        super(401, 'TOKEN.ERRORS.REFRESH_TOKEN_IS_NOT_CORRECT');
    }
}

