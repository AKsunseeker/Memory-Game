$(document).ready(function(){

  var firstNumberClicked;
  var secondNumberClicked;
  var ticker = 0;

  function clickTracker(){
    if(ticker < 2){
      ticker++;
    } else{
      ticker = 0;
    }
    console.log("clickTracker:" + ticker);
  }

  function isShowing(number_class){
    if(number_class != 'hide_text'){
      alert('Is showing');
    }else{
      clickTracker();
    }
  }

  function checkMatch(num1, num2){
    if(num1 == num2){
      alert('matched');
      $('.boxes').each(function(){
        var classCheck = $(this).children(0).attr('class');
      if (classCheck != 'hide_text'){
        $(this).addClass('matched');
      }
    })

      return true;
    };
  }

  $('.boxes').click(function(){
    var currentClass = $(this).children(0).attr('class');

    isShowing(currentClass);
    $(this).children(0).toggleClass('hide_text');

    if(ticker == 1){
      firstNumberClicked = $(this).children(0).html();
    }
    
    if(ticker == 2){
      secondNumberClicked = $(this).children(0).html();
      if (checkMatch(firstNumberClicked, secondNumberClicked)){
        $(this).children(0).addClass('matched');
      }
    }



  });

});




