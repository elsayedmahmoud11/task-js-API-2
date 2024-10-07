fetch("https://jsonplaceholder.typicode.com/photos")
.then(function(ahmed){
    return ahmed.json()
})
.then (function(element){
    var cartoona =  `<div class="col-md-4 text-center mb-4">
                            <img src="${element[i].url}" style="height:350px" class="img-fluid">
                            <h4>${element[i].title}</h4>
                            <h6>${element[i].id}</h6>
                         </div>
                         `
            myText = myText+cartoona;
})
document.querySelector(".test").innerHTML = cartoona;