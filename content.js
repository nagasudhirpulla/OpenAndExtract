// content.js
chrome.runtime.onMessage.addListener(
function(request, sender, sendResponse) {
    if( request.message === "select_year_action" ) {
		console.log("Constituent received = " + request.message);
		console.log("Message received = " + request.constituentIndex);
		console.log("Month received = " + request.monthReceived);
		console.log("Date received = " + request.dateReceived);
		console.log("Year received = " + request.yearReceived);
		selectYearr(request.yearReceived);
	}
	if( request.message === "select_month_action" ) {
		console.log("Constituent received = " + request.message);
		console.log("Message received = " + request.constituentIndex);
		console.log("Month received = " + request.monthReceived);
		console.log("Date received = " + request.dateReceived);
		console.log("Year received = " + request.yearReceived);
		selectMonthh(request.monthReceived);
	}
	if( request.message === "select_date_action" ) {
		console.log("Constituent received = " + request.message);
		console.log("Message received = " + request.constituentIndex);
		console.log("Month received = " + request.monthReceived);
		console.log("Date received = " + request.dateReceived);
		console.log("Year received = " + request.yearReceived);
		selectDatee(request.dateReceived);
	}
	if( request.message === "select_constituent_action" ) {
		console.log("Constituent received = " + request.message);
		console.log("Message received = " + request.constituentIndex);
		console.log("Month received = " + request.monthReceived);
		console.log("Date received = " + request.dateReceived);
		console.log("Year received = " + request.yearReceived);
		selectConstituentt(request.constituentIndex);
	}
});

function selectYearr(year){
	var yearInput = document.getElementById("table3").getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].cells[1].getElementsByTagName("input")[1];
	//Select the year first
	if(yearInput.value != ""+year){
		//change the year input text
		yearInput.value = ""+year;
		
		//yearInput.onkeyup();
		var changeEvent = document.createEvent("HTMLEvents");
		changeEvent.initEvent("keyup", true, true);
		yearInput.dispatchEvent(changeEvent);
	}
}

function selectMonthh(month){
	var monthSelect = document.getElementById("table3").getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].cells[1].getElementsByTagName("select")[0];
	//Select the month next
	if(monthSelect.selectedIndex != month){
		//change the year input text
		monthSelect.selectedIndex = month;
		
		//monthSelect.onchange();
		var changeEvent = document.createEvent("HTMLEvents");
		changeEvent.initEvent("change", true, true);
		monthSelect.dispatchEvent(changeEvent);
	}
}

function selectDatee(date){
	var dateSelect = document.getElementById("table3").getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].cells[1].getElementsByTagName("select")[1];
	//Select the date next
	if(dateSelect.selectedIndex != date-1){
		//change the date input text
		dateSelect.selectedIndex = date-1;
		
		//dateSelect.onchange();
		var changeEvent = document.createEvent("HTMLEvents");
		changeEvent.initEvent("change", true, true);
		dateSelect.dispatchEvent(changeEvent);
	}
}

function selectConstituentt(constituentIndex){
	if(document.getElementById("scl2").options[document.getElementById("scl2").selectedIndex].text != constituentIndex){
		var sel = document.getElementById("scl2");
		for(var i=0; i<sel.options.length; i++) {
			if ( sel.options[i].text == constituentIndex ) {
				sel.selectedIndex = i;
				break;
			}
		}
		
		//document.getElementById("scl2").onchange();
		var changeEvent = document.createEvent("HTMLEvents");
		changeEvent.initEvent("change", true, true);
		document.getElementById("scl2").dispatchEvent(changeEvent);	
		}
}