

  
class login {

    constructor(page) {
        this.page = page;

        this.username = page.locator('#EmployeeCode');
        this.password = page.locator('#loginbtn');
        
    }

    async loginsagi(user) {
        await this.username.fill(user);
        await this.password.click();
        
    }
}

module.exports = { login };