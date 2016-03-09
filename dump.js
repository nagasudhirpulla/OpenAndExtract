//from content.js
var monthSelect = document.getElementById("table3").getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].cells[1].getElementsByTagName("select")[0];
//Select the month next
if(monthSelect.selectedIndex != month){
	//change the year input text
	monthSelect.selectedIndex = month;
	monthSelect.onchange();
}
//sleep for 3 seconds
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
	if ((new Date().getTime() - start) > 3000){
		break;
	}
}

var dateSelect = document.getElementById("table3").getElementsByTagName("tbody")[0].getElementsByTagName("tr")[0].cells[1].getElementsByTagName("select")[1];
//Select the date next
if(dateSelect.selectedIndex != date-1){
	//change the year input text
	dateSelect.selectedIndex = date-1;
	dateSelect.onchange();
}
//sleep for 3 seconds
var start = new Date().getTime();
for (var i = 0; i < 1e7; i++) {
	if ((new Date().getTime() - start) > 3000){
		break;
	}
}

//TODO select the constituent based on the string
document.getElementById("scl2").options[request.constituentIndex].selected = true
document.getElementById("scl2").onchange();

//from background.js
chrome.tabs.sendMessage(tabId, {"message": "clicked_browser_action", "constituentIndex": savedIDs.indexOf(tabId), "dateReceived": yesterdayDate.getDate(), "monthReceived": yesterdayDate.getMonth(), "yearReceived": yesterdayDate.getFullYear()});