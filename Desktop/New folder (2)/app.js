const userName = document.querySelector("#username");
const email = document.querySelector("#userEmail");
const password = document.querySelector("#userPassward");
const conformPassword = document.querySelector("#conformPassword");
const formLogin = document.querySelector("#Signup-form");
const loginPage = document.querySelector(".login-container")
const signupPage = document.querySelector(".signup-container")
loginPage.classList.add("active")





 let userData = [
  {
    username: "mahad",
    email: "mahad@gmail.com",
    password: "q34324235"
  },
  {
    username: "ahmad",
    email: "ahmad@gmail.com",
    password: "q343235"
  },
  {
    username: "hassan",
    email: "mahad@gmail.com",
    password: "d34224235"
  }
 ];


function signup(username , email , password , conformPassword){
  if (username && email && password && conformPassword) {  
    if (password !== conformPassword) {
      alert("conform password not same password")
    }
    else if(password.length !== 8){
      alert("please password 8 digits")
    } else {
      let user1 = {username: username , email: email , password:password};
      //console.log(user1)
      userData.push(user1);
     // console.log(userData);
      loginPage.classList.remove("active")
      signupPage.classList.add("active")
     
    }

  }else{
    alert("please data proper fill")
  }
}


//if(formLogin){
formLogin.addEventListener("submit", (e) => {
  e.preventDefault()

  let user_name = userName.value;
  let user_email = email.value;
  let user_password = password.value;
  let conform_password = conformPassword.value;

  signup(user_name , user_email , user_password , conform_password)

  
});






//console.log(userData)
//console.log(userData[0])

//userData.map((item) => console.log(item))
const LoginEmailName = document.querySelector("#login_email")
const LoginPassword = document.querySelector("#login_password")
const loginForm = document.querySelector("#Login-form")

function loginChecking(email , password){

  if(!email && !password){
    alert("please enter email and password")

  }else if( email && password){

    for(i = 0 ; i < userData.length; i++){
      //console.log(userData[i])

      if(email === userData[i].email && password === userData[i].password){
        alert("login successfully ")
        console.log("login successfully ", userData[i].email , userData[i].password)
      }

      
    }

    // userData.map((item) => { 
    //   console.log(item.email , item.password)
    //   if(email === item.email && password === item.password){
        
    //   }else{
    //     alert("please correct email and password")
    //   }
    // })
  }
}

//console.log(userData)
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const loginEmail = LoginEmailName.value;
  const loginPassword = LoginPassword.value;
//console.log(userData)
  loginChecking(loginEmail , loginPassword)
  
})











