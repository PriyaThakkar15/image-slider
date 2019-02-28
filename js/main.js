var data = ["cat.jpg", "kitten.jpg", "dog.jpg", "puppy.jpg"];


function randomimg() {

    var randomNum = Math.floor(Math.random() * data.length);
    var abc = document.getElementsByTagName("body")[0];
    abc.style.background = 'url(image/' + data[randomNum] + ')';
    abc.style.backgroundSize = 'cover';

    var st = setTimeout(function () {
        randomimg()
    }, 3000);
}




