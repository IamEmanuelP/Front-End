

  let url = 'https://restcountries.com/v3.1/all' //Origen de los datos
  fetch(url)
    .then(response => response.json()) //Promesa
    .then(data => mostrarData(data)) //Leer objeto data
    .catch(error => console.log(error)) //Si hay un error

 const mostrarData = (data) => {
   console.log(data)
   let body = ''
   for (let i = 0;i<data.length;i++){
     body += `<tr>
       <td>${data[i].name.common}</td>
       <td>${data[i].capital ? data[i].capital : "No capital to display"}</td>
       <td>${data[i].region}</td>
       <td>${data[i].languague}</td>
       <td>${data[i].population}</td>
       <td><img src="${data[i].flags.png}" width="50px"></td>
     </tr>`

   }
   document.getElementById('data').innerHTML = body

 }
