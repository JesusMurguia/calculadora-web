export default class googleAuth{
    constructor(formSecondSection,paciente){
        this.auth2;
        this.googleUser;
        this.paciente = paciente;
        this.formSecondSection = formSecondSection;
    }
    appStart(){
        window.gapi.load('auth2', this.initSigninV2.bind(this));
    }
    initSigninV2(){
        this.auth2 = gapi.auth2.getAuthInstance();
        this.auth2.currentUser.listen(this.userChanged.bind(this));
        if (this.auth2.isSignedIn.get() == true) {
            this.auth2.signIn();
        }
    }
    userChanged(user){
        this.googleUser = user;
        this.paciente.id = this.googleUser.getAuthResponse().id_token;
        this.formSecondSection.next(this.paciente);
    }
}