import {CustomError} from './custom-error'  


export class NotAuthorizeError extends CustomError {
  statusCode = 401

  constructor(public message: string) {
    super(message) 

    Object.setPrototypeOf(this, NotAuthorizeError.prototype);
  }

  serializeErrors() {
    return [
      {
        message: this.message
      }
    ]
  }
}