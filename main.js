//this is an IIFE , which is a self executing function and it will help us not to attach our variable to the global object so they can't be accessed in the console
(function(){
  //this is a function of the framework inside which the main game object will be created and main where game loop will run
  function MainGameFramework(canvas){
    //initialize all the variables
    this.canvasContext = canvas.getContext("2d");
    canvas.width= 400;
    canvas.height = 400;
    //var basicXOffset = (20%/100) * window.

  }
  //functions of the class MainGameFramework
  MainGameFramework.prototype.updateGameArea = function(){

  }

  var canvas = document.getElementById("mainGame");
  var gameObject = new MainGameFramework(canvas);

})()
