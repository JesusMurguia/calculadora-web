export default class googleAuth {
    constructor(formSecondSection, paciente) {
        this.auth2;
        this.googleUser;
        this.paciente = paciente;
        this.formSecondSection = formSecondSection;
    }
    appStart() {
        gapi.load('auth2', this.initSigninV2.bind(this));
    }
    initSigninV2() {
        this.auth2 = gapi.auth2.init({
            client_id: '650423806990-8tiusmggq0nl4ies65aios269grffrkt.apps.googleusercontent.com'
        });
        this.auth2.grantOfflineAccess().then(() => {
            this.auth2.currentUser.listen(this.userChanged.bind(this));
        }
        );
    }
    userChanged(user) {
        this.googleUser = user;
        this.paciente.id = this.googleUser.getAuthResponse().id_token;
        this.formSecondSection.next(this.paciente);
    }
}