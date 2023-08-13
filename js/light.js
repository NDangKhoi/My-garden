const data = {
    datasets:[{
        label: 'Light',
        data:[0, 1],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(0, 0 ,0 ,0.1)'  
        ],
        borderColor: [
          'rgba(254, 26, 104, 1)',
          'rgba(0, 0 ,0 , 0)'
        ],
        boderWidth: 0.1
    }]
}
const gaugeChartText = {
    id:'gaugeChartText',
    afterDatasetsDraw(chart, args, pluginOptions) {
        const {ctx, data, chartArea:{top, bottom, left, right, width, height}, scales:{r}} = chart;
        ctx.save();
        const xCoor = chart.getDatasetMeta(0).data[0].x
        const yCoor = chart.getDatasetMeta(0).data[0].y
        const score = data.datasets[0].data[0]
        ctx.font = '20px sans-serif'
        ctx.textAlign = 'center'
        ctx.fillText(score +'lux', xCoor, yCoor - 40)
    }
}
const config ={
    type: 'doughnut',
    data,
    options: {
        circumference: 180,
        rotation: 270,
        cutout: '90%',
        aspectRatio: 2
    },
    plugins: [gaugeChartText]
}
const myChart = new Chart(
    document.getElementById('Light_HaftDoughtnutChart'),
    config
)
const api_url = 'https://vuonthongminh-328d9-default-rtdb.firebaseio.com/Status/Sensor.json'

lightChart();
window.setInterval(lightChart,200);
async function lightChart(){
    const response = await fetch(api_url)
    const dataJson = await response.json();
    data.datasets[0].data[0] = dataJson.Light
    data.datasets[0].data[1] = 1000 - dataJson.Light
    myChart.update()
}