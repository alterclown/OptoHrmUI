export abstract class Authentication {

    public static isAuthenticated() {
        let user = JSON.parse(localStorage.getItem("user"));
        return !!user;
    }

    public static getUserIdFromLocalStorage() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user.userId
    }
    public static getCompanyIdFromLocalStorage() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user.companyId
    }
    public static getUserTokenFromLocalStorage() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user.token
    }

    public static getUserFromLocalStorage() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user
    }

    // public static getUserEmailFromLocalStorage(){
    //     let user = JSON.parse(localStorage.getItem('user'));
    //     return user.email
    // }

    public static logOutFromLocalStorage() {
        return localStorage.removeItem('user');
    }

    public static isNotAuthenticated() {
        let user = JSON.parse(localStorage.getItem("user"));
        return !user;
    }

    public static getUserNameLocalStorage() {
        let user = JSON.parse(localStorage.getItem('user'));
        return user.firstName
    }
}