// function to check if password has uppercase letter 
function hasUppercase(password){
    for(let char of password){
        if(char >= "A" && char <= "Z")
        return true
    }
    return false
}

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

// returns true only if the password has at least 8 charac, 1 uppercase and a number 
function isValidPassword(password){
    if(password.length < 8){
        console.log("Password must have at least 8 characters")
        return false
    }
    if(!hasUppercase(password)){
        console.log("Password must have an uppercase character")
        return false
    }
    if(!hasLowercase(password)){
        console.log("Password must have an lower character")
        return false
    }
    if(!hasNumber(password)){
        console.log("Password must have a number")
        return false
    }
    return true
}

// check if password 1 and 2 are valid then compare if they matched or not 
function validatePassword(password1, password2){

    if (!isValidPassword(password1)){
        console.log("Not a valid password")
    }

    if (!isValidPassword(password2)){
        console.log("Not a valid password")
    }

    if (password1 === password2){
        console.log("Matched")
    } else {
        console.log("ERROR: Mismatched")
    }
}

validatePassword("CessCacot0929", "CessCacot0929")


function reversePassword(password){
    let reversed = ""
    for (let i = password.length - 1; i>= 0 ; i--){
        reversed += password[i]
    }
    return reversed
}

console.log(reversePassword("cesscacot"))


function storePassword(name,password1, password2){
    let object = {}

    object.name = name
    if (validatePassword(password1, password2)){
        password = reversePassword(password2)
        object.newpassword = password

    } else{
        password = password1
        object.newpassword = password
    }
    console.log(object)
}


storePassword("Cess", "Pass134", "Pass134")
storePassword("Ces", "Pass123", "Pass12345")
