// setup variables
var productBtn = document.getElementById("product_btn")
var productContainer = document.getElementById("product_container")
var data = [
    {id:1, name: "product1", description:"bla bla bla"},
    {id:2, name: "product2", description:"bla bla bla"},
    {id:3, name: "product3", description:"bla bla bla"},
    {id:4, name: "product4", description:"bla bla bla"}
]

// draw function

function DrawUI(items){
    productContainer.innerHTML=""
    items.forEach(element => {
    productContainer.innerHTML+= `<div onclick='deleteItem(${element.id})'>${element.name} </div>`
   });

}

// load data

window.onload = function(){

 DrawUI(data);

}

// add item

productBtn.addEventListener('click', addItem)

function addItem(){
    var productinput= document.getElementById("product_input")
    if (productinput.value=="")alert("you should enter a product")

    var Lastid= data.length ? data[data.length-1].id : 1;

    data.push({id: ++Lastid, name: productinput.value, description:"bla bla bla"})
    //console.log(data)
    lastitem=data[data.length-1]
    productContainer.innerHTML += `<div onclick='deleteItem(${lastitem.id})'>${lastitem.name}</div>`
    productinput.value="";

}

function deleteItem(id){
    var index = data.map(function(i){
        return i.id;
    })
    .indexOf(id)

    if(index !==-1){
        data.splice(index, 1)
    }
    DrawUI(data)
}