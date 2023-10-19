const apiurl = 'https://vuonthongminh-328d9-default-rtdb.firebaseio.com/History.json'   
    async function myCallback(){
        var response = await fetch(apiurl);
        var data = await response.json();
        console.log(data[0].Date)
        const table = document.getElementById('myTable')
        table.innerHTML=''
        for (var i = 0; i< data.length; i++){
            
            var row = `<tr>
                        <td>${data[i].Date}</td>
                        <td>${data[i].Time}</td>
                        <td>${data[i].Mode}</td>
                        <td>${data[i].Fan}</td>
                        <td>${data[i].Lamp}</td>
                        <td>${data[i].Pump}</td>
                        <td>${data[i].Stepper}</td>
                        <td>${data[i].Humidity}</td>
                        <td>${data[i].Light}</td>
                        <td>${data[i].Rain}</td>
                        <td>${data[i].Soil}</td>
                        <td>${data[i].Temperature}</td>
                        <td>${data[i].Reset}</td>
                      </tr>`
                      table.innerHTML += row
        }
    }
    // myCallback()

    
flatpickr("input[type=date]", {
    dateFormat: "d-m-Y",
});
var search = document.getElementById('search')
search.addEventListener('click',searchData)
async function searchData(){
    var response = await fetch(apiurl);
    var data = await response.json();
    var datePicker = document.getElementById('picker').value;
    const table = document.getElementById('myTable')            
    
    table.innerHTML=''
    for (var i = 0; i< data.length; i++){
        if(datePicker == ''){
            alert('Vui lòng chọn ngày')
            i = data.length
        }
        else if(datePicker == data[i].Date){
            var row = `<tr>
            <td>${data[i].Date}</td>
            <td>${data[i].Time}</td>
            <td>${data[i].Mode}</td>
            <td>${data[i].Fan}</td>
            <td>${data[i].Lamp}</td>
            <td>${data[i].Pump}</td>
            <td>${data[i].Stepper}</td>
            <td>${data[i].Humidity}</td>
            <td>${data[i].Light}</td>
            <td>${data[i].Rain}</td>
            <td>${data[i].Soil}</td>
            <td>${data[i].Temperature}</td>
            <td>${data[i].Reset}</td>
          </tr>`
          table.innerHTML += row
        }
       
    }
      
}
var pdf = document.getElementById('pdf')
pdf.addEventListener('click', exportPDF)
function exportPDF() {
    window.jsPDF = window.jspdf.jsPDF
    var doc = new jsPDF('p', 'pt', 'letter')
    specialElementHandlers = {
        '.no-export':function(element, renderer){
            return true
        }
    }
    var datePicker = document.getElementById('picker').value;
    var margins = {
        top: 150,
        bottom: 60,
        left: 10,
        right: 40,
        width: 595
    }
    var y = 20
    doc.setLineWidth(2)
    doc.text(250, y = y + 15, "System History")
    var now = new Date();
    now = now.getDate() + "-" + (now.getMonth()+1) + "-" + now.getFullYear();
    if(datePicker != ''){
        doc.text(450, y = y + 30, "Date:" + datePicker)
    }
    else{
        doc.text(450, y = y + 30, "Date:" + now)
    }
    doc.autoTable({
        html: '#table_history',
        startY: 70,
        theme: 'grid',
        columnStyles: {
            0: {
                cellWidth: 60
            },
            1: {
                cellWidth: 48
            },
            2: {
                cellWidth: 53
            },
            3: {
                cellWidth: 30
            },
            4: {
                cellWidth: 36
            }
            ,
            5: {
                cellWidth: 37
            }
            ,
            6: {
                cellWidth: 47
            },
            7: {
                cellWidth: 36
            },
            8: {
                cellWidth: 39
            },
            9: {
                cellWidth: 49
            },
            10: {
                cellWidth: 30
            },
            11: {
                cellWidth: 36
            }
        },
        styles: {
            minCellHeight: 20
        }
    })
    doc.save('sys.pdf')
}
