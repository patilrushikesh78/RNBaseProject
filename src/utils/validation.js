export const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    return password.length >= 6;
};

export const validateLoginData = (email, password) => {
    if (!email || !password) {
        return 'Both email and password are required.';
    }

    if (!validateEmail(email)) {
        return 'Please enter a valid email address.';
    }

    if (!validatePassword(password)) {
        return 'Password must be at least 6 characters.';
    }

    return null;
};
