import Strings from "../constants/strings";

export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};

export const validateLoginData = (email, password) => {
    if (!email || !password) {
        return Strings.msgs.enterValidEmailAndPassword;
    }

    if (!validateEmail(email)) {
        return Strings.msgs.enterValidEmail;
    }

    if (!validatePassword(password)) {
        return Strings.msgs.enterRangePassword;
    }

    return null;
};
