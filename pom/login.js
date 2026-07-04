class login{
    constructor(page){

        this.page=page

        this.user = page.locator('')
        this.poss = page.locator('')
        this.btn = page.locator('')


    }

    async url(dt){
     await this.page.goto(dt)
    }

    async getlogin(userid , possward){
await this.user.fill(userid);
await this.poss.fill(possward);
await this.btn.click();

    }
} module.exports = { login };