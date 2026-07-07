
const { login } = require('./login');

class object {

    constructor(page) {
        this.page = page;
        this.pp = new login(page);
    }

    getloginpage() {
        return this.pp;
    }
}

module.exports = { object };