

function showImageFirebaseStorage() {
 firebase.storage()
     .ref()
     .child('images')
     .listAll()
     .then(function (result) {
      result.items.map(function (imageRef) {
       imageRef.getDownloadURL().then(function (url) {
        var img = document.createElement('img');
        img
       });
      });

     }).catch(function (error) {
  console.log(error);
 });
}

showImageFirebaseStorage();