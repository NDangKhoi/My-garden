
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

/*=========================-- Set Limit-=======================*/
const data_api = 'https://vuonthongminh-328d9-default-rtdb.firebaseio.com/System/SetValue.json'
var setTemplow = document.getElementById('setTemplow'),
    setTemphigh = document.getElementById('setTemphigh'),
    setSoillow = document.getElementById('setSoillow'),
    setSoilhigh = document.getElementById('setSoilhigh'),
    setLightlow = document.getElementById('setLightlow'),
    setLighthigh = document.getElementById('setLighthigh'),
    setHumilow = document.getElementById('setHumilow'),
    setHumihigh = document.getElementById('setHumihigh')
const response = await fetch(data_api)
const dataJson = await response.json();    
setTemplow.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('temp_low','Temp/LOW', dataJson.Temp.HIGH, 50,'Low')
  console.log(dataJson.Temp.LOW)
})
setTemphigh.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('temp_high','Temp/HIGH', dataJson.Temp.LOW, 50,'High')
  console.log(dataJson.Temp.HIGH)
})
setSoillow.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('soil_low','Soil/LOW', dataJson.Soil.HIGH, 100,'Low')
  console.log(dataJson.Soil.LOW)
})
setSoilhigh.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('soil_high','Soil/HIGH', dataJson.Soil.LOW, 100,'High')
  console.log(dataJson.Soil.HIGH)
})

setLightlow.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('light_low','Light/LOW', dataJson.Light.HIGH, 1000,'Low')
  console.log(dataJson.Light.LOW)
})
setLighthigh.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('light_high','Light/HIGH', dataJson.Light.LOW, 1000,'High')
  console.log(dataJson.Light.HIGH)
})
setHumilow.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('humi_low','Humidity/LOW', dataJson.Humidity.HIGH, 100,'Low')
  console.log(dataJson.Humidity.LOW)
})
setHumihigh.addEventListener('click',async (e)=>{
  const response = await fetch(data_api)
  const dataJson = await response.json();
  setvalueLow('humi_high','Humidity/HIGH', dataJson.Humidity.LOW, 100,'High')
  console.log(dataJson.Humidity.HIGH)
})
function setvalueLow(id, path, comValue, limitValue, typeValue){
  var valueid = document.getElementById(id).value
  if(valueid != '' && valueid >= 0){
    if(valueid <= limitValue){
      if(typeValue === 'Low'){
        console.log('LOW')
        if(Number(valueid) >= Number(comValue)){
          alert('Giá trị mức thấp không hợp lệ')
        }else{
          set(ref(database, 'System/SetValue/' + path),valueid)
          alert('Cài đặt giá trị mức thấp thành công')
        }
      }
      else if(typeValue === 'High'){
        console.log('HIGH')
        if(Number(valueid) <= Number(comValue)){
          alert('Giá trị mức cao không hợp lệ')
        }else{
          set(ref(database, 'System/SetValue/' + path),valueid)
          alert('Cài đặt giá trị mức cao thành công')
        }
      }
      
    }else{
      alert('Giá trị vượt ngưỡng giới hạn')
    }
  }
  else{
    alert('Vui lòng nhập giá trị!')
  }
}
