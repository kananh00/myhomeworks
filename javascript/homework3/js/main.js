function createNewUser() {
    let name = prompt('Please, say your name:');
    let surname = prompt('Please, say your surname:');

    let newUser = {
        firstName: name,
        lastName: surname,
        getLogin() {
            console.log((newUser.firstName[0] + newUser.lastName).toLowerCase());
        }
    };
        return newUser;
}
 let user = new createNewUser();
 user.getLogin();
