// console.log('%c HI', 'color: firebrick')

document.addEventListener('DOMContentLoaded', () => {

    // variable corral 
    imgURL = "https://dog.ceo/api/breeds/image/random/4"

    let dogHouse = document.querySelector("#dog-image-container");
    let newImg = document.createElement("img");


    // fetch images
    // parse resp
    // add img elements in the container

    fetch(imgURL)
    .then(resp => resp.json())
    .then(doggos => {
        doggos.message.forEach(pupper => {
            console.log(pupper);
            dogHouse.appendChild(newImg);
            newImg.src = pupper;            
        })
    })

})


// // 20211110163313
// // https://dog.ceo/api/breeds/image/random/4

// {
//     "message": [
//       "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1612.jpg",
//       "https://images.dog.ceo/breeds/australian-shepherd/pepper2.jpg",
//       "https://images.dog.ceo/breeds/shihtzu/n02086240_447.jpg",
//       "https://images.dog.ceo/breeds/mountain-swiss/n02107574_1261.jpg"
//     ],
//     "status": "success"
//   }