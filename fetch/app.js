fetch("https://fakestoreapi.com/products").then((data)=>{

    console.log("hello");
    return data.json()
}).then((database)=>{
console.log(database[0].title);

let tableData =""
database.map((values)=>{
return(

    tableData += `
    
    <tr>
        <td>${values.title}</td>
      <td>${values.description}</td>
      <td>${values.price}</td>
        <td> <img src ="${values.image}" height ="300px" width= "300px"/></td>
    </tr>
    
    `
)
})
document.getElementById("table-body").innerHTML =tableData
})

document.body.classList.add("light");
let btn= document.getElementById("btn");
btn.addEventListener("click", ()=>{
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
})