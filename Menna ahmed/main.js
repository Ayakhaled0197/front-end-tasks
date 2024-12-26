var productName=document.getElementById("productName");
var MemorySize=document.getElementById("memorySize");
var ProductPrice=document.getElementById("productPrice");
var productContainer=[];
function addProduct(){
    var product= {
        name:productName.value,
        size:MemorySize.value,
        price:ProductPrice.value,
    };
    productContainer.push(product);
    displayProduct();
    console.log(productContainer);
}

function displayProduct(){
    var cartoona="";
    for(var i=0; i<productContainer.length; i++) {
        cartoona+=`<tr>
        <td>${productContainer[i].name}</td>
        <td>${productContainer[i].size}</td>
        <td>${productContainer[i].price}</td>
        </tr>`;
        
    }
    document.getElementById("productBody").innerHTML=cartoona;
}
  