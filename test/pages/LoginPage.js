import BasePage from "./BasePage";

class LoginPage extends BasePage {
    get emailInput() { return $('[name="name"]') }
    get passwordInput() {return $('[name="password"]')}
    get loginBtn() {return $('[type="submit"]')}

    open() {
        super.open('/user/register');
    }

    loginAs(email, password){
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.loginBtn.click();
    }
}

export default new LoginPage();