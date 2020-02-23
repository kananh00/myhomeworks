function createNewUser() {
    let name = prompt('Please, say your name:');
    let surname = prompt('Please, say your surname:');

    let newUser = {
        firstName: name,
        lastName: surname,
        getLogin() {
            let string = newUser.firstName[0] + newUser.lastName;
            return string.toLowerCase();
        }
    };
    return newUser.getLogin();
}
 let user = {
     answer: createNewUser()
 };

 console.log(user.answer);