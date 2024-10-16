// customError.ts
export class CustomError extends Error {
    statusCode: number;

    constructor(message: string, statusCode: number) {
        super(message); // Call the parent class constructor (Error)
        this.statusCode = statusCode;

        // Because we are extending a built-in class
        Object.setPrototypeOf(this, CustomError.prototype);
    }
}
    