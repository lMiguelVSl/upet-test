export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const isValidPhoneNumber = (phoneNumber: string): boolean => {
    const regex = /^\+?\d{10,14}$/;
    return regex.test(phoneNumber);
}
export const isValidPassword = (password: string): boolean => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValidLength = password.length >= 8;

    return hasUppercase && hasLowercase && hasNumber && isValidLength;
}
export const isValidName = (name: string) => {
    if (!name || !name.length) return false;
    return true;
}
export const isValidLastName = (lastName: string) => {
    if (!lastName || !lastName.length) return false;
    return true
}