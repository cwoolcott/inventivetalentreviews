var dp1="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Kim Ruyle<br/><i>HR, MGR</i><br/>Pos. Level: 2<br/>Hire Date: 1/2/2015<br/><a href='/site/planning'><button>Update Planning</button></a></div>";
var dp2="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Jim Johnson<br/><i>HR, MGR</i><br/>Pos. Level: 3<br/>Hire Date: 2/3/2015<br/><a href='/site/planning'><button>Update Planning</button></a></div>";
var dp3="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Patricio Morales<br/><i>HR, MGR</i><br/>Pos. Level: 3<br/>Hire Date: 3/14/2015<br/><a href='/site/planning'><button>Update Planning</button></a></div>";
var dp4="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Sally Brown<br/><i>L&ampD, MGR</i><br/>Pos. Level: 2<br/>Hire Date: 3/4/2015<br/><a href='/site/planning'><button>Update Planning</button></a></div>";
var dp5="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>John Smith<br/><i>MGR, OD/i><br/>Pos. Level: 1<br/>Hire Date: 4/15/2015<br/><a href='/site/planning'><button>Update Planning</button></a></div>";
var dp6="<div class='hover'><img src='http://bit.ly/1F8GntM' width='120px'><br/><b>Candidate:</b><br/>Jane Doe<br/><i>MGR, OD</i><br/>Pos. Level: 2<br/>Hire Date: 1/2/2014<br/><a href='/site/planning'><button>Update Planning</button></a></div>";


CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#3A5222",
                "#2E8B57",
                "#3CB371",
                "#90EE90"                
                ]);

var chart = new CanvasJS.Chart("chartContainer3", 
{
    exportFileName: "CurrentPosition",
    exportEnabled: true,
    backgroundColor:null,
    colorSet: "greenShades",
    title:{
        text: ""
    },
    axisX: {
               title:"",
                minimum: 1,
                //labelAngle: -40,
                maximum: 4,
                labelFontSize: 14,
                titleFontSize: 18,     
                gridThickness: 0,   
                labelFontSize:1,
            },
            axisY:{
                maximum: 5,
                labelMaxWidth: 120, 
                title: "",
                lineThickness: 1,
                labelFontSize: 12,
                labelFontColor: "black",
                 gridThickness: 1, 
                labelAutoFit: true, 
                labelFormatter: function(e){
                    
                    switch(e.value) {
                        case 0:
                            ylabel='Individual Contributor';
                            break;
                        case 1:
                            ylabel='Manager';
                            break
                        case 2:
                            ylabel='Senior Manager';
                            break
                        case 3:
                            ylabel='Business Unit Leader';
                            break
                        case 4:
                            ylabel='Senior Organization Leader';
                            break
                        
                        default:
                            ylabel='';
                    }  
                        return  ylabel;
            }
            },
    data: [{
        type: "scatter",
        toolTipContent: '{tip}',
        indexLabelFontColor: "black",
        indexLabelFontSize: "14",
        indexLabelBackgroundColor: "white",
        indexLabelFontWeight: "bold",
        markerType: "triangle",        
        markerSize: 10,   
        dataPoints: 
        [


            { tip:dp1, y: 2, x: 2.5, indexLabel: "KER", indexLabelBackgroundColor: "#ADD8E6",  indexLabelFontStyle: "italic" },/* IT*/
            { tip:dp2, y: 3.0, x: 3.3, indexLabel: "JGJ",  indexLabelBackgroundColor: "#90EE90",  indexLabelFontStyle: "italic",  },/* IT*/
            { tip:dp3, y: 1, x: 2.1, indexLabel: "PRM",  indexLabelBackgroundColor: "#ADD8E6"  },
            { tip:dp4, y: 2, x: 2.7, indexLabel: "SMB",  indexLabelBackgroundColor: "#FFE4E1",  indexLabelFontStyle: "italic",  },/* IT*/
            { tip:dp5, y: 0, x: 1.5, indexLabel: "JGS", indexLabelBackgroundColor: "#90EE90"  },
            { tip:dp6, y: 0.4, x: 1.5, indexLabel: "JDD", indexLabelBackgroundColor: "#FFE4E1"  },
            
        ]
    },
           {        
        type: "stepArea",
            fillOpacity: .7, 
        markerSize: 0, 
        toolTipContent: null,  
            highlightEnabled: false,
        dataPoints: [
            { x: 0, y: 0,  },
            { x: 1.6, y: 0 },
            { x: 1.6, y: 1 },
            { x: 2.2, y: 1 },
            { x: 2.2, y: 2 },
            { x: 2.8, y: 2 },
            { x: 2.8, y: 3 },
            { x: 3.4, y: 3 },
            { x: 3.4, y: 4 },
            { x: 4.0, y: 4 },
            { x: 4.0, y: 5 },
            
        ]}
               ]
    
});
chart.render();
