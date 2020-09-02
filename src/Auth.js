class Auth{
    constructor() {
        this.authenticated = false;
        this.email = "";
        this.password = "";
    }

    login(login, password, cb) {
        this.authenticated = true;
        this.email = login;
        this.password = password;
        cb();
    }

    logout(cb) {
        this.authenticated = false;
        this.email = "";
        this.password = "";
        cb();
    }

    isAuthenticated(){
        return this.authenticated;
    }

    getLogin(){
        return this.email;
    }

    getPassword(){
        return this.password;
    }
}

export default new Auth()