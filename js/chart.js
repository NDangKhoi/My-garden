
const api_url = 'https://vuonthongminh-328d9-default-rtdb.firebaseio.com/Status/Sensor.json'
const light = document.getElementById('Light_Chart'),
      temp = document.getElementById('Temp_Chart'),
      humi = document.getElementById('Humi_Chart'),
      soil = document.getElementById('Soil_Chart')

/*========================== Light Data =============================*/
var dataLight = {
    labels:[0],
    datasets: [
        {
            label: 'Light Sensor',
            data:[0],
            borderWidth: 1,
           
        },
        
    ]
}
var configLight = {
    type: 'line',
    data: dataLight,
    options: {
        scales: {
                y: {
                beginAtZero: true
            }
        },
       
    },
    scales: {
        y: { 
          min: 0,
          max: 1000
        }
        
      }
}
/*========================== Temp Chart =============================*/
var dataTemp = {
    labels:[0],
    datasets: [
        {
            label: 'Temperature Sensor',
            data:[0],
            borderWidth: 1
        }
    ]
}
var configTemp = {
    type: 'line',
    data: dataTemp,
    options: {
        scales: {
                y: {
                beginAtZero: true
            }
        }
    },
    scales: {
        y: { 
          min: 0,
          max: 1000
        }
        
      }
}
/*========================== Humi Chart =============================*/
var dataHumi = {
    labels:[0],
    datasets: [
        {
            label: 'Humidity Sensor',
            data:[0],
            borderWidth: 1
        }
    ]
}
var configHumi = {
    type: 'line',
    data: dataHumi,
    options: {
        scales: {
                y: {
                beginAtZero: true
            }
        }
    },
    scales: {
        y: { 
          min: 0,
          max: 1000
        }
        
      }
}
/*========================== Soil Chart =============================*/
var dataSoil = {
    labels:[0],
    datasets: [
        {
            label: 'Soil Sensor',
            data:[0],
            borderWidth: 1
        }
    ]
}
var configSoil = {
    type: 'line',
    data: dataSoil,
    options: {
        scales: {
                y: {
                beginAtZero: true
            }
        }
    },
    scales: {
        y: { 
          min: 0,
          max: 1000
        }
        
      }
}
/*========================== Chart =============================*/
var lightChart = new Chart(light,
    configLight    
)

var tempChart = new Chart(temp,
    configTemp    
)
var humiChart = new Chart(humi,
    configHumi   
)
var soilChart = new Chart(soil,
    configSoil   
)
/*========================== Push Data =============================*/
myCallback();
window.setInterval(myCallback,5000);
async function myCallback(){
    const response = await fetch(api_url)
    const dataJson = await response.json();
    var now = new Date();
    now = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    dataLight.labels.push(now)
    dataLight.datasets[0].data.push(dataJson.Light)
    lightChart.update()
    dataTemp.labels.push(now)
    dataTemp.datasets[0].data.push(dataJson.Temperature)
    tempChart.update()
    dataHumi.labels.push(now)
    dataHumi.datasets[0].data.push(dataJson.Humidity)
    humiChart.update()
    dataSoil.labels.push(now)
    dataSoil.datasets[0].data.push(dataJson.Soil)
    soilChart.update()
}



    
