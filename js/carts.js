let allproduct = document.getElementById('allproduct');

for( let i = 0 ; i < localStorage.length ; i++){
    let key = localstorage.key(i)

    let product = localstorage.getItem(key);
    let data = JSON.parse=(product)
    allproduct.innerHTML += `
    
    <div class="card mb-3">
    <div class="row no-gutters">
        <div class="col-md-3">
            <img src=" ${data.image} " class="img-fluid mt-3" alt="...">
        </div>
        <div class="col-md-7">
            <div class="card-body">
                <h5 class="card-title">${data.title}
                </h5>
                <p class="card-text">${data.des}</p>
                <p>${data.price}</p>
            </div>
        </div>
        <div class="col-md-2 my-5 px-5">
            <i class="fa-solid fa-trash mt-5"></i>
        </div>

    </div>
</div>
    
    
    `  
    
}









