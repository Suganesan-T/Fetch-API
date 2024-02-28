var api = fetch("https://restcountries.com/v3.1/all")
.then((data)=>data.json()).then((data1)=>foo(data1))

var container = document.createElement("div")
container.className = "container"

var row = document.createElement("div")
row.className = "row"

function foo(data1){
    for(var i=0;i<data1.length;i++){
  var column = document.createElement("div")
  var name = data1[i].name.common
  var cap = data1[i].capital
  var img = data1[i].flag
   column.className = "col-md-4"
   column.innerHTML =`<div class="card" style="width: 18rem;">
   <div class="card-body">
     <h5 class="card-title">Country: ${name}</h5>
     <p class="card-text">Capital: ${cap}</p>
   </div>
 </div>`
  row.append(column)
  container.append(row)
  document.body.append(container)
}
}


