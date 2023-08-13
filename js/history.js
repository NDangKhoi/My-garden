const apiurl = 'https://vuonthongminh-328d9-default-rtdb.firebaseio.com/History.json'   
    async function myCallback(){
        var response = await fetch(apiurl);
        var data = await response.json();
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
    myCallback();  