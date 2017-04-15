// This is built using modular pattern and prototypal oops concepts
//this is an IIFE , which is a self executing function and it will help us not to attach our variable to the global object so they can't be accessed in the console
 
(function(){
  //this is a function of the framework inside which the main game object will be created and main where game loop will run
  var MainGameFramework = (function(){
      //all private variables
      var self = this, canvas; // bind variables to _self in order to add properties to the objects;
      var CONST_WIDTH , CONST_HEIGHT , LEFT_OFFSET;
      // main constructor function to be returned , used for setting up configuration and object
      function MainGame(canvas){
        //initialize all the variables which would add to the property of the object
        initializePrivateConstants();
        self.canvasContext = canvas.getContext("2d");
        $('#mainGame').style.left = LEFT_OFFSET;
        canvas.width= CONST_WIDTH;
        canvas.height = CONST_HEIGHT;
        console.log(self.canvasContext);
      }

      //this is a private function , not accessable from the object 
      function initializePrivateConstants(){
        CONST_WIDTH = 400;
        CONST_HEIGHT = 400;
        LEFT_OFFSET=  "20%";

      }

      //  custom $ implementation of jquery ,
      function $(element){
        var ch = element.charAt(0);
        var ele;
        var attr = element.substring(1);
        if(ch == '.')
          ele = document.getElementsByClassName(attr);
        else if(ch == '#')
          ele = document.getElementById(attr);
        return ele;
      }
    return MainGame; // returning the constructor function;
  })();
  //functions of the class MainGameFramework
  MainGameFramework.prototype.updateGameArea = function(){

  }

  var canvas = document.getElementById("mainGame");
  var gameObject = new MainGameFramework(canvas);
})()
