// the sellection elements;

const name = document.getElementById('name')
const email = document.getElementById('e-mail')
const pass = document.getElementById('password')
const conf = document.getElementById('confp')
const signupBtn=document.getElementById('signup-btn')
let form =document.querySelector('form')
let users=[]
let h1 = document.getElementById('wel')
const loginBtn=document.getElementById('login-btn')

// signup button and the enterd values ;

if(signupBtn){
    signupBtn.addEventListener('click',signup)
} 
function signup(){
    if(name.value=="")name.focus()
    else if(email.value=="")email.focus()
    else if(pass.value=="")pass.focus()
    else if(conf.value=="")conf.focus()
    else if(pass.value != conf.value)return
    else{
        var user= {
            name: name.value,
            email: email.value,
            pass: pass.value,
        }
        users.push(user)
        localStorage.setItem('users',JSON.stringify(users))
        name.value=""
        email.value=""
        pass.value=""
        conf.value=""
        window.open('login.html','_self')
    }
    
// login button and the compareing;
// JSON.parse : turnback any string into what it was before;
// JSON.stringify : turn any thing into a string ;

}
if (form)form.addEventListener('submit',function(e){e.preventDefault()})
if (loginBtn)loginBtn.addEventListener('click', login)
function login(){
    if(email.value=="")email.focus()
    else if(pass.value=="")pass.focus()
    else {
        for (let i = 0; i < JSON.parse(localStorage.getItem('users')).length ; i++) {
            if(email.value===JSON.parse(localStorage.getItem('users'))[i].email && pass.value===JSON.parse(localStorage.getItem('users'))[i].pass){
                localStorage.setItem('logged', JSON.stringify(JSON.parse(localStorage.getItem('users'))[i]  ))
                window.open('welcome.html','_self')
            }

        }
    }
}

//the welcome window; 

window.onload = ()=>{
    if(h1){
        h1.innerHTML='welcome, '+JSON.parse(localStorage.getItem('logged')).name
        h1.style.color = 'white';
        h1.style.textTransform = 'capitalize';

    }
}