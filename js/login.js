// document.querySelector("form").addEventListener("submit",login)
// var signupData = JSON.parse(localStorage.getItem("usersLoginDetails")) || [];
// var registeredUsersArray = [];
// var usersLoginDetails =
// [
//     {email:"abc@mailinator.com",
//     password:"abc@123"
// },
//     {
//         email:"xyz@mailinator.com",
//         password:"abc@123"
//     }
// ]

// function login(event){
//   event.preventDefault();
//   var email=document.querySelector("#email").value
//   var password=document.querySelector("#password").value
//   if(signupData.length==0)
//   {
//     usersLoginDetails.forEach(function(obj)
//     {
//         registeredUsersArray.push(obj);
//         localStorage.setItem("usersLoginDetails", JSON.stringify(registeredUsersArray));
//     })
//   }
//    else if(signupData.length>0)
//     {
//         for(i=0;i<signupData.length;i++){
//         console.log(signupData[i].email,email,signupData[i].password,password)
//         if(signupData[i].email==email && signupData[i].password==password){
//             alert("Welcome Logged In Successfully");
//             window.location.href="#####"
//             break;
//         }
//         else{
//             if((signupData.length-1)==i){
//                 alert("Invalid Email or Password");
//             }
//         }
//         }
//     }
//     else{
//         alert("Invalid Email or Password");
//     }
// }

document.querySelector("form").addEventListener("submit",login)
var signupData = JSON.parse(localStorage.getItem("signupData")) || [];
FormData.addEventListener("submit",function(event){
    event.preventDefault
    let data={
        email:form.email.value,
        password:form.password.value,
    }
    if(checkSignIn(data.email,data.password)===true){
    localStorage.setItem("signIn",JSON.stringify(data));
    alert("SignIn Successfull");
    }
    else{
        alert("Wrong email Or Password");
        window.location.href="index.html"
    }
})
function checkSignIn(email,password){
    let filter = signupData.filter(function(element){
        return element.email===email && element.password===password;
    })
    if(filter.length>0)
    {
        return true;
    }
    else {
        return false;
    }
}