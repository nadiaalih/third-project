function addproduct(id){

    console.log("image" + id);
 let image = document.getElementById("image" + id).src
 let title = document.getElementById('title' + id).innertext
 let des = document.getElementById('des' + id).innerText
 let price = document.getElementById('price' +id).innerText


 let object = {
'image' : image,
 'title' : title,
 'des'   : des,
 'price' : price
 }
 localStorage.setItem('product' + id , JSON.stringify(object))
}
