export const setToken = (token) => {
    if (token) localStorage.setItem('token', token);
}

export const getToken = () => {
    const token = localStorage.getItem('token');
    if (token) return token;
    else return ""
}
