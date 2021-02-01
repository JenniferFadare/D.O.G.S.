fetch('https://dog.ceo/api/breeds/image/random')
.then(function(response) {
    return response.json();
})
.then(function(data) {
    var getDog = document.querySelector("#dog");
    var dogImage = document.createElement("img");
    dogImage.setAttribute("src", data.message);
    dogImage.setAttribute("alt", "photo of dog");
    getDog.appendChild(dogImage);

});

