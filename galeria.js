

function showImageFirebaseStorage() {
 firebase.storage()
     .ref()
     .child('images')
     .listAll()
     .then(function (result) {
        result.items.map(function (imageRef) {
            imageRef.getDownloadURL().then(function (url) {
            let cardItem = document.querySelector('.card').cloneNode(true);
            document.querySelector('.wrp-cards').appendChild(cardItem);
            cardItem.querySelector('.card-img').src = url;
            cardItem.querySelector('.card-name').innerHTML = imageRef.name;
     })

})     
})

}


showImageFirebaseStorage();