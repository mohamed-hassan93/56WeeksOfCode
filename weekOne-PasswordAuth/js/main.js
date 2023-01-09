document.querySelector('#passCheck').addEventListener('click',passwordTextAppear);



function passwordTextAppear(){
    var passwordType = document.getElementById('passwordEntry');

    if(passwordType.type === 'password'){
        passwordType.type = 'text'
    }else{
        passwordType.type = 'password'
    }
}


console.log(password);

function passwordAuth(){


    let password = document.querySelector('input').value

    console.log(password);

            // Lower-case Check
        if (password === ""){
            document.getElementById('lowerCaseCheck').style.color = 'rgb(100 116 139)'
        }else if(password !== password.toUpperCase()){
            document.getElementById('lowerCaseCheck').style.color = 'rgb(132,204,22)'
        }else{
            document.getElementById('lowerCaseCheck').style.color = 'rgb(185,28,28)'
        }


        // Upper case check
        if (password === ""){
            document.getElementById('lowerCaseCheck').style.color = 'rgb(100 116 139)'
        }else if(password !== password.toLowerCase()){
            document.getElementById('upperCaseCheck').style.color = 'rgb(132,204,22)'
        }else{
            document.getElementById('upperCaseCheck').style.color = 'rgb(185,28,28)'
        }

        // Number Check

        function containsNum(password){
            return /\d/.test(password)
        }

        if (password === ""){
            document.getElementById('numCheck').style.color = 'rgb(100 116 139)'
        }else if(containsNum(password) === true){
            document.getElementById('numCheck').style.color = 'rgb(132,204,22)'
        }else{
            document.getElementById('numCheck').style.color = 'rgb(185,28,28)'
        }

        // Character Count Check

        if (password === ""){
            document.getElementById('charCheck').style.color = 'rgb(100 116 139)'
        }else if(password.length >= 8){
            document.getElementById('charCheck').style.color = 'rgb(132,204,22)'
        }else{
            document.getElementById('charCheck').style.color = 'rgb(185,28,28)'
        }
}
// // Lower-case Check
// if (password === ""){
//     document.getElementById('lowerCaseCheck').style.color = 'rgb(100 116 139)'
// }else if(password !== password.toUpperCase()){
//     document.getElementById('lowerCaseCheck').style.color = 'rgb(132,204,22)'
// }else{
//     document.getElementById('lowerCaseCheck').style.color = 'rgb(185,28,28)'
// }


// // Upper case check
// if (password === ""){
//     document.getElementById('lowerCaseCheck').style.color = 'rgb(100 116 139)'
// }else if(password !== password.toLowerCase()){
//     document.getElementById('upperCaseCheck').style.color = 'rgb(132,204,22)'
// }else{
//     document.getElementById('upperCaseCheck').style.color = 'rgb(185,28,28)'
// }

// // Number Check

// function containsNum(password){
//     return /\d/.test(password)
// }

// if (password === ""){
//     document.getElementById('numCheck').style.color = 'rgb(100 116 139)'
// }else if(containsNum(password) === true){
//     document.getElementById('numCheck').style.color = 'rgb(132,204,22)'
// }else{
//     document.getElementById('numCheck').style.color = 'rgb(185,28,28)'
// }

// // Character Count Check

// if (password === ""){
//     document.getElementById('charCheck').style.color = 'rgb(100 116 139)'
// }else if(password.length >= 8){
//     document.getElementById('charCheck').style.color = 'rgb(132,204,22)'
// }else{
//     document.getElementById('charCheck').style.color = 'rgb(185,28,28)'
// }