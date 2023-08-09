

const data = {
    datasets:[{
        label: 'Weekly Sales',
        data: [17,12],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(0, 0 ,0 ,0.2)'  
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
          'rgba(0, 0 ,0 , 1)'
        ],
        boderWidth: 1
    }]
}
const config ={
    type: 'doughnut',
    data,
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2
    }
}
const myChart = new Chart(
    document.getElementById('Temp_HaftDoughtnutChart'),
    config
)
const _myChart = new Chart(
    document.getElementById('Soil_HaftDoughtnutChart'),
    config
)
const __myChart = new Chart(
    document.getElementById('Light_HaftDoughtnutChart'),
    config
)
const ___myChart = new Chart(
    document.getElementById('Humi_HaftDoughtnutChart'),
    config
)