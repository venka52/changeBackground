function changeBackground(){
    var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    document.getElementById("demo").style.background = randomColor;
}