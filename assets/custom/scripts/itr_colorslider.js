/*
i. Marginal (Soft Red, RGB: 208, 101, 89 or #D06559)

ii. Expected (Silver, RGB: 192,192,192 or ##C0C0C0)

iii. Distinctive (Gold, RGB: 255, 215,0 or #FFD700)
*/

 
//This should have each valid amount that can be selected in the slider 
var sliderAmountMap = [1, 1.25,1.50, 1.75, 2,2.25,2.5, 2.75, 3];

function refreshtotalslide(){
    
   
var totalslide = ($('#coloredSlider1').slider("option", "value") +
     $('#coloredSlider2').slider("option", "value") +
     $('#coloredSlider3').slider("option", "value"))/3;
    
    $("#coloredSlider_current").slider('option','value',Math.round(totalslide*10)/10);
    refreshSwatch('coloredSlider_current');

    $("#coloredSlider_cumulative").slider('option','value',Math.round(totalslide*10)/10);
    refreshSwatch('coloredSlider_cumulative');

    
   // console.log('Totalslide:' + Math.round(totalslide*10)/10);

    //alert(totalslide);
}


function getTheColor( colorVal ) {
    var theColor = "";
  
      if (colorVal<1.25)
    {
          myRed = 208; myGreen = 101; myBlue = 89;
    }

    if (colorVal>1.24 && colorVal<1.50)
    {
          myRed = 203; myGreen = 120; myBlue = 120;
    }

    if (colorVal>1.49 && colorVal<1.75)
    {
          myRed = 198; myGreen = 140; myBlue = 140;
    }

    if (colorVal>1.74 && colorVal<2.00)
    {

          myRed = 195; myGreen = 160; myBlue = 160;
    }

    if (colorVal>1.99 && colorVal<2.25)
    {
          myRed = 192; myGreen = 192; myBlue = 192;
    }

    if (colorVal>2.24 && colorVal<2.5)
    {
          myRed = 210; myGreen = 200; myBlue = 130;
    }

     if (colorVal>2.49 && colorVal<2.75)
    {
          myRed = 225; myGreen = 204; myBlue = 60;
    }

     if (colorVal>2.74 && colorVal<3)
    {
          myRed = 240; myGreen = 208; myBlue = 30;
    }

    if (colorVal>2.75)
    {
          myRed = 255; myGreen = 215; myBlue = 0;
    }

    theColor = "rgb(" + myRed + "," + myGreen + "," + myBlue + ")"; 
    $( "#myDiv" ).text(theColor + ' slider:' + colorVal + ' slider:' + sliderAmountMap);
    return( theColor ); 
}

function refreshSwatch(elm) {
  var coloredSlider = $( "#" + elm ).slider( "value" ),
  myColor = getTheColor( coloredSlider );
  $("#" + elm).css( "background", myColor );
  $("#" + elm + " .ui-state-default, #" + elm + " .ui-widget-content , #" + elm + " .ui-state-default" ).css( "background", myColor );
    


}
$('#coloredSlider_current').slider({
              value: 1,
              min: 1,
              max: 3,
              step: .10,
                    
              
});

$('#coloredSlider_cumulative').slider({
              value: 1,
              min: 1,
              max: 3,
              step: .10,
                    
              
});

$('#coloredSlider_current').slider( "disable" );
$('#coloredSlider_cumulative').slider( "disable" );



$('.topslider').each(function(idx, elm) {
          var name = elm.id.replace('coloredSlider', '');
      $('#' + elm.id).slider({
              value: 2,
              min: 1,
              max: 3,
              step: .25,
              slide: function(event, ui) {
                        refreshSwatch(elm.id);
                        refreshtotalslide();
              },
        change: function(event, ui) {
                        refreshSwatch(elm.id);
                        refreshtotalslide();
              }
    
          });

    });
refreshSwatch('coloredSlider1');
refreshSwatch('coloredSlider2');
refreshSwatch('coloredSlider3');

refreshtotalslide();

/*
$(function() {
    $( ".coloredSlider" ).slider({
        orientation: "horizontal",
        range: "min",
        max: sliderAmountMap.length-1, 
        value: 0,
        slide: refreshSwatch,
        change: refreshSwatch
    });

    $( "#coloredSlider_current" ).slider({
        orientation: "horizontal",
        range: "min",
        max: 24, 
        value: 16 //should move dyanamically
    });

});
*/