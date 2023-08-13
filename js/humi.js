const data = {
    datasets:[{
        label: 'Humi',
        data:[0, 1],
        backgroundColor: [
          'rgba(255, 26, 104, 0.2)',
          'rgba(0, 0 ,0 ,0.1)'  
        ],
        borderColor: [
          'rgba(255, 26, 104, 1)',
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
        ctx.fillText(score +'%', xCoor, yCoor - 40)
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
let myChart = new Chart(
    document.getElementById('Humi_HaftDoughtnutChart'),
    config
)
humiChart();
window.setInterval(humiChart,200);
async function humiChart(){
    const response = await fetch(api_url)
    const dataJson = await response.json();
    data.datasets[0].data[0] = dataJson.Humidity
    data.datasets[0].data[1] = 100 - dataJson.Humidity
    myChart.update()
}