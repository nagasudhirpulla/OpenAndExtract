// background.js

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
	// Send a message to the active tab
	var url = "http://www.wrldc.com/test/sch.asp";
	var constituents = ["CSEB","DD","DNH","ESIL_WR","GOA","GUVNL","MPSEB","MSEB"];
	var savedIDs = [];
	var servedTabs = [];
	//Find the yesterday month and date
	var todayTimeStamp = +new Date; // Unix timestamp in milliseconds
	var yesterdayDate = new Date(todayTimeStamp - 86400000);//Milliseconds in a day = 1000 * 60 * 60 * 2 = 86400000
	//Now we have yesterday date and month
	function saveIDs(id){
		savedIDs.push(id);
	}
	for(var i=0;i<constituents.length;i++){
		chrome.tabs.create({"url": url},function(tab){
			saveIDs(tab.id);
		}
		);
	}	
	chrome.tabs.onUpdated.addListener(function(tabId , info) {
		//if tabs belong to the created tabs and not served even served once...
		//if(savedIDs.indexOf(tabId) != -1 && servedTabs.indexOf(tabId) == -1){
		if(savedIDs.indexOf(tabId) != -1){
			if (info.status == "complete") {
				//Select the year first
				chrome.tabs.sendMessage(tabId, {"message": "select_year_action", "constituentIndex": savedIDs.indexOf(tabId), "dateReceived": yesterdayDate.getDate(), "monthReceived": yesterdayDate.getMonth(), "yearReceived": yesterdayDate.getFullYear()});
				//select month next
				chrome.tabs.sendMessage(tabId, {"message": "select_month_action", "constituentIndex": savedIDs.indexOf(tabId), "dateReceived": yesterdayDate.getDate(), "monthReceived": yesterdayDate.getMonth(), "yearReceived": yesterdayDate.getFullYear()});
				//select date next
				chrome.tabs.sendMessage(tabId, {"message": "select_date_action", "constituentIndex": savedIDs.indexOf(tabId), "dateReceived": yesterdayDate.getDate(), "monthReceived": yesterdayDate.getMonth(), "yearReceived": yesterdayDate.getFullYear()});
				//select constituent next
				chrome.tabs.sendMessage(tabId, {"message": "select_constituent_action", "constituentIndex": constituents[savedIDs.indexOf(tabId)], "dateReceived": yesterdayDate.getDate(), "monthReceived": yesterdayDate.getMonth(), "yearReceived": yesterdayDate.getFullYear()});
				
				chrome.tabs.executeScript(tabId, {"file": "extract.js"});
				//mark the Tab as served
				servedTabs.push(tabId);
			}
		}
		
	});
});