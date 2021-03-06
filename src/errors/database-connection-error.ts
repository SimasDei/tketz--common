import { CustomError } from './custom-error';

export class DatabaseConnectionError extends CustomError {
  statusCode = 500;
  reason = 'Database go boom ๐งจ`๐ฅ๐ฅ';
  constructor() {
    super('Database go boom ๐งจ`๐ฅ๐ฅ');

    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.reason,
      },
    ];
  }
}
