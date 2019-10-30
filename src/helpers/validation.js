const regExp = {
    letters: /^[a-zA-ZА-Яа-я0-9]*$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    password: /^[a-z0-9]+$/,
};

const MESSAGES = {
    USERNAME_MESSAGE: {
        invalidCharacters: 'use only letters and numbers',
        tooLongUsername: 'too long username',
    },
    EMAIL_MESSAGE: {
        invalidEmail: 'invalid email',
    },
    PASSWORD_MESSAGE: {
        invalidPassword: 'invalid password',
        tooLongPassword: 'too long password',
    }
};

const success = (fieldName, value) => ({
    status: 'success',
    fieldName,
    value,
});

const error = (fieldName, value, errorMessage) => ({
    status: 'error',
    error: errorMessage,
    fieldName,
    value,
});

export const formValidation = (fieldName, value) => {
    const field = {
        USERNAME: 'username',
        EMAIL: 'email',
        PASSWORD: 'password',
    };

    switch (fieldName) {
        case field.USERNAME:
            if(regExp.letters.test(value)) {
                if(value.length < 20 && value.length > 3) {
                    return success(fieldName, value);
                }
                return error(fieldName, value, MESSAGES.USERNAME_MESSAGE.tooLongUsername);
            }
            return error(fieldName, value, MESSAGES.USERNAME_MESSAGE.invalidCharacters);
        case field.EMAIL:
            if(regExp.email.test(value)) {
                return success(fieldName, value);
            }
            return error(fieldName, value, MESSAGES.EMAIL_MESSAGE.invalidEmail);
        case field.PASSWORD:
            if(regExp.password.test(value)) {
                if(value.length < 20 && value.length > 5) {
                    return success(fieldName, value);
                }
                return error(fieldName, value, MESSAGES.PASSWORD_MESSAGE.tooLongPassword);
            }
            return error(fieldName, value, MESSAGES.PASSWORD_MESSAGE.invalidPassword);
        default:
            return false;
    }
};