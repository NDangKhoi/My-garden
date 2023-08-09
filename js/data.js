import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase, ref, set, child, onValue } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
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

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const analytics = getAnalytics(app);



var manual = document.getElementById('button-manual');
var auto = document.getElementById('button-auto');
var fan_off = document.getElementById('button__Fan-OFF');
var fan_on = document.getElementById('button__Fan-ON');
var pump_off = document.getElementById('button__Pump-OFF');
var pump_on = document.getElementById('button__Pump-ON');
var lamp_off = document.getElementById('button__Lamp-OFF');
var lamp_on = document.getElementById('button__Lamp-ON');
var roof_off = document.getElementById('button__Roof-OFF');
var roof_on = document.getElementById('button__Roof-ON');

manual.addEventListener('click',btnManual);
auto.addEventListener('click',btnAuto);
fan_off.addEventListener('click',btnFanOff);
fan_on.addEventListener('click',btnFanOn);
pump_off.addEventListener('click',btnPumpOff);
pump_on.addEventListener('click',btnPumpOn);
lamp_off.addEventListener('click',btnLampOff);
lamp_on.addEventListener('click',btnLampOn);
roof_off.addEventListener('click',btnRoofOff);
roof_on.addEventListener('click',btnRoofOn);
/*=========================-- Set Data -=======================*/
function btnManual(){
   set(ref(database,'System/Mode'),'Manual')
}
function btnAuto(){
   set(ref(database,'System/Mode'),'Auto')
}
function btnFanOff(){
    set(ref(database,'System/Device/Fan'),'OFF')
 }
 function btnFanOn(){
    set(ref(database,'System/Device/Fan'),'ON')
 }
 function btnPumpOff(){
    set(ref(database,'System/Device/Pump'),'OFF')
 }
 function btnPumpOn(){
    set(ref(database,'System/Device/Pump'),'ON')
 }
 function btnLampOff(){
    set(ref(database,'System/Device/Lamp'),'OFF')
 }
 function btnLampOn(){
    set(ref(database,'System/Device/Lamp'),'ON')
 }
 function btnRoofOff(){
    set(ref(database,'System/Device/Stepper'),'OFF')
 }
 function btnRoofOn(){
    set(ref(database,'System/Device/Stepper'),'ON')
 }

 /*=========================-- Read Data -=======================*/
 const sttRoof = ref(database,'Status/Device/Stepper');
 onValue(sttRoof,(snapshot)=>{
    const dataRoof =snapshot.val();
    if(dataRoof=='CLOSE'){
        document.getElementById('roof-img').src='../images/Roof-ON.png'
     }
    else {
        document.getElementById('roof-img').src='../images/Roof-OFF.png'
    }
 })
 const mode = ref(database,'Status/Mode');
 onValue(mode,(snapshot)=>{
    const modeCurrent =snapshot.val();
    if(modeCurrent=='Manual'){
        document.getElementById('mode-img').src='../images/Manual.png'
     }
    else if(modeCurrent=='Auto'){
        document.getElementById('mode-img').src='../images/Auto.png'
    }
    else{
        document.getElementById('mode-img').src='../images/Customer.png'
    }
 })
 function readOnValue(path,id,imgOff,imgON){
    const StatusDevice = ref(database,'Status/Device/'+ path);
    onValue(StatusDevice,(snapshot)=>{
        const sttDevice = snapshot.val();
        if(sttDevice=='ON'){
            document.getElementById(id).src=imgON
         }
        else{
            document.getElementById(id).src=imgOff
        }
    })
 }
 readOnValue('Fan','fan-img','../images/Fan-OFF.png','../images/Fan-ON.png')
 readOnValue('Pump','pump-img','../images/Pump-OFF.png','../images/Pump-ON.png')
 readOnValue('Lamp','lamp-img','../images/Lamp-OFF.png','../images/Lamp-ON.png')
