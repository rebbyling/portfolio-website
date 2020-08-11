
var tabButtons=document.querySelectorAll(".tabContainer .buttonContainer button");
var tabPanels=document.querySelectorAll(".tabContainer  .tabPanel");

function showPanel(panelIndex,colorCode) {
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="white";
    tabPanels.forEach(function(node){
        node.style.display="none";
    });
    tabPanels[panelIndex].style.display="block";
    tabPanels[panelIndex].style.backgroundColor=colorCode;
}
showPanel(0,'#005C79');

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

function tb8_makeArray(n){
	this.length = n;
	return this.length;
}
var tb8_messages = new tb8_makeArray(3);
tb8_messages[0] = "2-Dimensional";
tb8_messages[1] = "fun fun fun fun fun";
tb8_messages[2] = "fun fun fun fun fun";
var tb8_rptType = 'infinite';
var tb8_rptNbr = 5;
var tb8_speed = 80;
var tb8_delay = 1600;
var tb8_counter=1;
var tb8_currMsg=0;
var tb8_tekst ="";
var tb8_i=0;
var tb8_TID = null;
function tb8_pisi(){
	tb8_tekst = tb8_tekst + tb8_messages[tb8_currMsg].substring(tb8_i, tb8_i+1);
	document.title = tb8_tekst;
	var tb8_sp=tb8_speed;
	tb8_i++;
	if (tb8_i==tb8_messages[tb8_currMsg].length){
		tb8_currMsg++; 
		tb8_i=0; 
		tb8_tekst="";
		tb8_sp=tb8_delay;
	}
	if (tb8_currMsg == tb8_messages.length){
		if ((tb8_rptType == 'finite') && (tb8_counter==tb8_rptNbr)){
			clearTimeout(tb8_TID);
			return;
		}
		tb8_counter++;
		tb8_currMsg = 0;
	}
	tb8_TID = setTimeout("tb8_pisi()", tb8_sp);
}
tb8_pisi();