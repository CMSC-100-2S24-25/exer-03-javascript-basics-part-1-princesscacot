// function to check if password has uppercase letter 
function hasUppercase(password){
    for(let char of password){
        if(char >= "A" && char <= "Z")
        return true
    }
    return false
}

// function to check if password has lowercase letter 
function hasLowercase(password){
    for(let char of password){
        if(char >= "a" && char <= "z")
        return true
    }
    return false
}

// function to check if password has number
function hasNumber(password){
    for(let char of password){
        if(char >= '0' && char <= '9')
        return true
    }
    return false
}

// returns true only if the password has at least 8 charac, 1 uppercase, 1 lowercase and a number 
function isValidPassword(password){
    if(password.length < 8){
        //console.log("Password must have at least 8 characters")
        return false
    }
    if(!hasUppercase(password)){
        //console.log("Password must have an uppercase character")
        return false
    }
    if(!hasLowercase(password)){
        //console.log("Password must have an lower character")
        return false
    }
    if(!hasNumber(password)){
        //console.log("Password must have a number")
        return false
    }
    return true
}

// check if password 1 and 2 are valid then compare if they matched or not 
function validatePassword(password1, password2){

    if (!isValidPassword(password1)){
        //console.log("Not a valid password")
        return false
    }

    if (!isValidPassword(password2)){
        //console.log("Not a valid password")
        return false
    }

    if (password1 === password2){ // if p1 and p2 contains the same alphanumeric then it's a matched
        return true
    } else {
        console.log("ERROR: Mismatched")
        return false
    }
}

// to reverse the given password 
function reversePassword(password){
    let reversed = "" // where reverse pass will be stored
    // starts from the last until it reaches first charac
    for (let i = password.length - 1; i>= 0 ; i--){ // decrement since backwards 
        reversed += password[i] // appends each charac
    }
    return reversed
}

// to change password to reversed password2 if both are validated 
// if not validates, retain to password1 
function storePassword(name,password1, password2){
    let object = {}

    object.name = name
    if (validatePassword(password1, password2)){
        password = reversePassword(password2) 
        object.newpassword = password // set password to the reversed one

    } else{
        password = password1
        object.newpassword = password // password would retain, still password1
    }
    console.log(object)
}


storePassword("John", "Pass1234", "Pass1234")
storePassword("John", "Pass123", "Pass12345")
