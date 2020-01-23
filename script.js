//e.clientX
//e.offset().left
//.width()
//mousedown()
//$("#test").html(this.offset().left);

// MY VERSION FROM SCRATCH

// $.isMouseDown.Function () {
//   console.log($("#slider").mousedown((),0))
//   return $("#slider").mousedown((),0);
// }
//
//
//   read mouseposition
//   set slider.left to mouseposition
//
//   and then set the divs width to that
//   function followSlider() {
//     var x = $("#slider").css("left");
//     x = parseInt(x, 10)+5+"px";
//     $("#top-img").css("width", x);
//
//   }
// }


$(document).ready(function() {

  var $isDown = false;
  var x = 0;
  var y = 0;
  var contX = parseInt($('#container').css('left'),10);
  var contY = parseInt($('#container').css('top'),10);
  var bordX = parseInt($('#container').css('border'),10);
  var contX2 = parseInt($('#container').css('width'),10);

  //console.log(contX, $("#slider").css("left"), contX2);

  function moveSlider(x){
    //x += $("#slider").css("left");
    //console.log(x);
    $("#slider").css("left", x);
    $("#top-img").css("width", x+10);

  };

  function moveSliderDiff(diffX){
    const newLeft = parseInt($("#slider").css("left"),10)+diffX;
    if ( 0 <= newLeft & newLeft <= contX2-10){
      $("#slider").css("left", newLeft);
      $("#top-img").css("width", newLeft);
    }

    console.log("x "+x+",diffX "+diffX+",newLeft "+newLeft);

  }

  $('#slider').on('mousedown', el => {
    x = el.clientX;
    $isDown = true;
    //console.log(x);
  });

  $('*').on('mouseup', () => {
    $isDown = false;
    //console.log($isDown);
});

  $('body').on('mousemove', el => {
    if ($isDown === true){
        const diffX = el.clientX - x;
        //console.log(diffX);
        moveSliderDiff(diffX);
        x = el.clientX;

        // console.log('mouse: '+(x-contX-bordX)+'\r slider.left: '+$("#slider").css("left"));
        //
        //  if( (parseInt($("#slider").css("left"),10) <= contX2-10) & (parseInt($("#slider").css("left"),10) >= 1) )
        //  {
        //    moveSlider(x-contX-bordX);
        //    x = el.clientX;
        //  }
        //
        //   if( (parseInt($("#slider").css("left"),10) > contX2-10 & el.clientX < x) ){
        //     moveSlider(x-contX-bordX-10);
        //     x = el.clientX;
        //   }
        //
        //   if( (parseInt($("#slider").css("left"),10) < 1 & el.clientX > x) ){
        //     moveSlider(x-contX-bordX-10);
        //     x = el.clientX;
        //   }
      }
      // console.log($isDown);
    });

    // while($isDown){
    //   $("#slider").css("left", x);

    // }

    // console.log($('#slider').is(":active"));
    //
    // while($('#slider').is(":active")){
    //   console.log( $("#slider").css("left") );
    // }

  }); // for doc.ready

  //
  // $("#slider").mousedown(function(e1) {
  //     $("#container").mousemove(function(e2) {
  //         var x = e2.clientX;
  //         $("#slider").animate({
  //           left: x
  //         }, 0);
  //     });
  // });

/*
      var x = e.clientX;
      var y = $("#top-img").width;
      $("#test").html(x);

      $("#top-img").css("width", x);

      });

/*
  $("#slider").mouseup(function(e) {
      //$("#test").html(this.offset().left);

      var x = e.clientX;
      var y = 'blabla';
      //alert(x);
      $("#test").html(x);

      });


});
*/


/////////////////

/*
WITH animate

var posX, posY, clicked = false;
function mueve (e) {
    clicked = true;
    posX = e.pageX;
    $('#slider').animate({left: posX});
    $('#top-img').animate({width: posX});
}
$('#slider').on('mousedown', mueve);
$(document).on('mouseup', function(e) {
    clicked = false;
});
$(document).mousemove(function(e) {
    if (clicked) {
        $('#slider').stop(true, true);
        $('#top-img').stop(true, true);
        mueve(e);
    }
});
*/

///////////////////

/*
// WORKING VERSION USING draggable
// USES JQUERYUI AND THEREFORE MIGHT BE DISQUALIFIED
// ALSO A LITLE FUDGY WITH THE x+5

$(document).ready(function() {
  $("#test").html("eeeey");

  $('#slider').draggable({
    drag: function() {
    followSlider();
    tellMe();
  },
   axis: 'x',

 });

 function followSlider() {
   var x = $("#slider").css("left");
   x = parseInt(x, 10)+5+"px";
   $("#top-img").css("width", x);

 }

function tellMe(){
  var x = $("#slider").css("left");
  $("#test").html(x);
}

});
*/

///////////////////////////////////////////
