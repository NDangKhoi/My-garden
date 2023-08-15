
$(document).ready(function(){
    $('#eyes').click(function(){       
        $(this).children('i').toggleClass('fa-eye-slash fa-eye')
        $(this).toggleClass('open')
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text')
        }
        else {
            $(this).prev().attr('type', 'password')
        }
    })
})
 // Import the functions you need from the SDKs you need
 
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAY-dzp0N1P3PGnZcsHK3GZ-p49L6EcvIg",
   authDomain: "vuonthongminh-328d9.firebaseapp.com",
   databaseURL: "https://vuonthongminh-328d9-default-rtdb.firebaseio.com",
   projectId: "vuonthongminh-328d9",
   storageBucket: "vuonthongminh-328d9.appspot.com",
   messagingSenderId: "534379632975",
   appId: "1:534379632975:web:9e276cf510ee849ac28d3a",
   measurementId: "G-B30WLK7ETS"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


 function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email)==true){
        return true
    } else{
        return false
    }
 }
 function validate_password(password){
    if(password <7){
        return false
    }
    else {
        return true
    }
 } 
//  var email = document.querySelector('#email');
//  var password = document.querySelector('#password')
// function showError(input){
//     let parent = input.parentElement;
//     let small = parent.querySelector('small')
//     small.innerText ='Loi'
// }


 var login = document.getElementById('login');
 login.addEventListener('click',logIn);
 function logIn(){
    const auth = getAuth();
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
signInWithEmailAndPassword(auth, email, password)
 .then((userCredential) => {
   // Signed in     const user = userCredential.user;
   const user = userCredential.user;
   window.location.assign('https://ndangkhoi.github.io/My-garden/html/home.html')
   // ...
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage);
 })
 }




