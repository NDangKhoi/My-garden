
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
 import { getAnalytics} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
 import { getAuth ,sendPasswordResetEmail} from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
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
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);
var forgot = document.getElementById('forgot');
forgot.addEventListener('click',sendEmail);
function sendEmail() {

const auth = getAuth();
var email = document.getElementById('email').value;
sendPasswordResetEmail(auth, email)
 .then(() => {
   
alert('Password reset email sent!')
   // Password reset email sent!
   // ..
 })
 .catch((error) => {
   const errorCode = error.code;
   const errorMessage = error.message;
   alert(errorMessage)
   // ..
 });
}
