var dp1="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Kim Ruyle<br/><i>HR, MGR</i><br/>Pos. Level: 2<br/>Hire Date: 1/2/2015<br/><a href='/site/performance'><button>Update Rating</button></a></div>";
var dp2="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Jim Johnson<br/><i>HR, MGR</i><br/>Pos. Level: 3<br/>Hire Date: 2/3/2015<br/><a href='/site/performance'><button>Update Rating</button></a></div>";
var dp3="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Patricio Morales<br/><i>HR, MGR</i><br/>Pos. Level: 3<br/>Hire Date: 3/14/2015<br/><a href='/site/performance'><button>Update Rating</button></a></div>";
var dp4="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Sally Brown<br/><i>L&ampD, MGR</i><br/>Pos. Level: 2<br/>Hire Date: 3/4/2015<br/><a href='/site/performance'><button>Update Rating</button></a></div>";
var dp5="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>John Smith<br/><i>MGR, OD/i><br/>Pos. Level: 1<br/>Hire Date: 4/15/2015<br/><a href='/site/performance'><button>Update Rating</button></a></div>";
var dp6="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Jane Doe<br/><i>MGR, OD</i><br/>Pos. Level: 2<br/>Hire Date: 1/2/2014<br/><a href='/site/performance'><button>Update Rating</button></a></div>";

var chart = new CanvasJS.Chart("chartContainer1", 
{
    exportFileName: "Matrix",
    exportEnabled: true,
    backgroundColor:null,
  title:{
    text: ""
  },
    axisX: {

        title:"Rating",
        minimum: 1,
              //labelAngle: -40,
        maximum: 2.80,
        labelFontSize: 1,
        titleFontSize: 1,     
                
      },
      axisY:{

        title: "Performance",
        //valueFormatString: "$#,##0k", 
        lineThickness: 2,
        labelFontSize: 1,
        titleFontSize: 1,
                 gridThickness: 0, 
      },

  data: [
  {
    type: "scatter",
        toolTipContent: '{tip}',
        markerType: "triangle",        
        markerSize: 1,   
    dataPoints: [
            { tip:dp1, y: 1.2, x: 2.6, indexLabel: "KER", indexLabelBackgroundColor: "#ADD8E6" },
            { tip:dp2, y: 0.4, x: 1.5, indexLabel: "JGJ",  indexLabelBackgroundColor: "#90EE90"  },
            { tip:dp3, y: 1.6, x: 2.2, indexLabel: "PRM",  indexLabelBackgroundColor: "#ADD8E6"  },
            { tip:dp4, y: 1.9, x: 1.4, indexLabel: "SMB",  indexLabelBackgroundColor: "#FFE4E1"  },
            { tip:dp5, y: 2.1, x: 2.7, indexLabel: "JGS", indexLabelBackgroundColor: "#90EE90"  },
            { tip:dp6, y: 2.2, x: 1.5, indexLabel: "JDD", indexLabelBackgroundColor: "#FFE4E1"  },
    ]
  }
  ]
});
chart.render();