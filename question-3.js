// Question #3
// let userPassword = "";
// let userPassword = "ssswnalWadqQ"
// let userPassword = "TechUp"
let userPassword = "abcde"
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
    let result
    if(userPassword.length < 6){
        result = "Weak"
    }else if (userPassword.length >= 6 && userPassword.length <= 10){
        result = "Medium"
    }else if (userPassword.length > 10){
        result = "Strong"
    }else{
        result = "Weak"
    }
    return result
}
console.log(checkPasswordStrength(userPassword))