// logical operators 
//1

// let age = prompt("Введите свой возраст: ")
// if(age >= 14 && age <= 90){
//     alert("Вы нам подходите")
// }

// else{
//     alert("Вы нам не подходите")
// }

//2.1
// if(age >= 14 && age <= 90){
//     alert("Вы нам не подходите")
// }

// else{
//     alert("Вы нам подходите")
// }

//2.2
// if (!(age >= 14 && age <=90)){
//     alert("Вы нам подходите")
// }

// else{
//     alert("Вы нам не подходите")
// }

//3
let loginMessage = prompt("Введите логин: ")

if(loginMessage === "Админ"){
    let passMessage = prompt("Введите пароль: ")
    if(passMessage === "Я главный"){
        alert("Здравствуйте!")
    }
    else if(loginMessage === null || loginMessage === '')
    {
        alert("Отменено")
    }
    else{
        alert("Неверный пароль")
    }
}

else if(loginMessage === null || loginMessage === ''){
    alert("Отменено")
}

else{
    alert("Я вас не знаю")
}
