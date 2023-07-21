class Password {
    Password = undefined
    // character sets which we will use to generate passwords
    // declare them static so that they can share memory space and accessible in every function 
    static lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    static upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    static digitChars = '0123456789';
    static specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?~';

    constructor(username, password) {
        this.username = username
        this.Password = password
        console.log(`Password has been set successfully for Username=${username}`)
    }
    getRandom(max, min) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    getPassword = () => {
        return this.Password
    }
    ResetPassword = (password) => {
        //Implement later
        //     let response=prompt('Enter last password you remember')
        //     if(response!=this.password){
        //         alert('You cannot reset password,please enter correct password')
        //     }
        //     else{
        //     this.Password=Password
        //     alert(`Password has been successully reset for ${this.username}`)
        // }
        this.Password = password;
        console.log(`Password has been successully reset for ${this.username}`)
    }
    generateWeakPassword() {
        const CharacterSets = [Password.lowerCaseChars, Password.upperCaseChars, Password.digitChars, Password.specialChars]
        //use only letters or numbers whichever is your choice to generate weak passwords
        //i will use only capital letters
        //we will take length short ; 8 in our case
        let password = ""
        const uppercaseSet = CharacterSets[1]
        for (let i = 0; i < 8; i++) {
            password += uppercaseSet[this.getRandom(0, uppercaseSet.length)]
        }

        return password
    }

}

User1 = new Password('Rahul', '12345678')
console.log(User1.generateWeakPassword())
