export const localUser = {
    set: (userData) => {
        let dataJson = JSON.stringify(userData);
        localStorage.setItem('USER_LOGIN', dataJson);
    },
    get: () => {
        let dataJson = localStorage.getItem('USER_LOGIN');
        return JSON.parse(dataJson);
    },
    remove: () => {
        localStorage.removeItem('USER_LOGIN');
    },
};
