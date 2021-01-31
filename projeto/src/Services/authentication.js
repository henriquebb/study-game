const TOKEN_KEY = 'jwt';

export const login = (user) => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
    localStorage.setItem('username', user);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('username');
}

export const isLoged = () => {
    if (localStorage.getItem(TOKEN_KEY)) {
        return true;
    }

    return false;
}

export const whosLoged = () =>{
    return localStorage.getItem('username');
}