export const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export const isValidPhoneNumber = (phoneNumber: string) => {
    const regex = /^\+?\d{10,14}$/;
    return regex.test(phoneNumber);
}
export const isValidPassword = (password: string) => {
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const isValidLength = password.length >= 8;
  
    return hasUppercase && hasLowercase && hasNumber && isValidLength;
}