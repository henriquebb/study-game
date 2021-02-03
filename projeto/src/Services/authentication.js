const TOKEN_KEY = 'jwt';

export const login = (user, ID) => {
    localStorage.setItem(TOKEN_KEY, 'TestLogin');
    localStorage.setItem('username', user);
    localStorage.setItem('ID', ID);
}

export const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem('username');
    localStorage.removeItem('ID');
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

export const whosLoged2 = () =>{
    return localStorage.getItem('ID');
}