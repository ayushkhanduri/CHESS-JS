// This is built using modular pattern and prototypal oops concepts
//this is an IIFE , which is a self executing function and it will help us not to attach our variable to the global object so they can't be accessed in the console

(function(){
  
  function $(element){
      var ch = element.charAt(0);
      var ele;
      var attr = element.substring(1);
      if(ch == '.')
        ele = document.getElementsByClassName(attr);
      else if(ch == '#')
        ele = document.getElementById(attr);
      else
        ele = document.getElementsByTagName(attr);
      return ele;
  }

  //this is a function of the framework inside which the main game object will be created and main where game loop will run
  var MainGameFramework = (function(){
      //all private variables
      var _self
      var CONST_WIDTH,CONST_HEIGHT,LEFT_OFFSET,TOP_OFFSET,STARTING_POINT_X,STARTING_POINT_Y,NOS; // all capital letters are all constants and are private , if you want to access those elements make getters
      var SCREEN_WIDTH,SCREEN_HEIGHT;// assuming that the window won't resize while playing the game
      var DIFF_COLORS =[];
      // main constructor function to be returned , used for setting up configuration and object
      function MainGame(canvas){
        //initialize all the variables which would add to the property of the object
        _self= this; // so that we can bind other function's variables 
        initializePrivateConstants();
        $('#mainGame').style.left = LEFT_OFFSET;
        $('#mainGame').style.top = TOP_OFFSET;
        canvas.width= CONST_WIDTH;
        canvas.height = CONST_HEIGHT;
        _self.canvasContext = canvas.getContext("2d");
        //calculateXY();
        drawingBoard();
        //console.log(_self);
      }
      
      // this function is no longer needed
      // function calculateXY(){
      //   var percent = LEFT_OFFSET.substring(0,LEFT_OFFSET.length-1);
      //   STARTING_POINT_X = ((parseInt(percent)/100) * SCREEN_WIDTH).toFixed(2);
      //   percent = TOP_OFFSET.substring(0,TOP_OFFSET.length-1);
      //   STARTING_POINT_Y = ((parseInt(percent)/100) * SCREEN_HEIGHT).toFixed(2);
      //   console.log(STARTING_POINT_X +  " : " + STARTING_POINT_Y);
      //   //STARTING_POINT_Y = (parseInt(per))
      //   drawingBoard();
      // }

      function drawingBoard(){
        var eachSideLength = CONST_WIDTH/8;
        var xCoor =0, yCoor=0;
        //_self.canvasContext.fillStyle = "#000";
        //_self.canvasContext.fillRect(20,20,100,100);
        for(var i=0;i<NOS;i++){
          yCoor = (eachSideLength * i);
          for(var j=0; j<NOS;j++){
            xCoor = (eachSideLength * j);
            _self.canvasContext.fillStyle= DIFF_COLORS[(i+j)%2];
            _self.canvasContext.fillRect(xCoor,yCoor,eachSideLength,eachSideLength);
          }
        }
      }

      //this is a private function , not accessable from the object 
      function initializePrivateConstants(){
        CONST_WIDTH = (33/100) * window.innerWidth;
        CONST_HEIGHT = CONST_WIDTH;
        NOS = 8; // number of sides 
        LEFT_OFFSET="33%";
        TOP_OFFSET="15%";
        SCREEN_WIDTH = window.innerWidth;
        SCREEN_HEIGHT = window.innerHeight;
        DIFF_COLORS = ["#FFF","#000"];

      }
      //  custom $ implementation of jquery ,
      
    return MainGame; // returning the constructor function;
  })();
  
  //functions of the class MainGameFramework
  MainGameFramework.prototype.updateGameArea = function(){

  }


  var canvas = document.getElementById("mainGame");
  var gameObject = new MainGameFramework(canvas);
  console.log(gameObject);
})()
