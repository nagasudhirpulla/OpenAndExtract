var str = "";
function doExtraction(){
	var colBeginners = ["Time Block", " ", "01 (00:00-00:15)", "02 (00:15-00:30)", "03 (00:30-00:45)", "04 (00:45-01:00)", "05 (01:00-01:15)", "06 (01:15-01:30)", "07 (01:30-01:45)", "08 (01:45-02:00)", "09 (02:00-02:15)", "10 (02:15-02:30)", "11 (02:30-02:45)", "12 (02:45-03:00)", "13 (03:00-03:15)", "14 (03:15-03:30)", "15 (03:30-03:45)", "16 (03:45-04:00)", "17 (04:00-04:15)", "18 (04:15-04:30)", "19 (04:30-04:45)", "20 (04:45-05:00)", "21 (05:00-05:15)", "22 (05:15-05:30)", "23 (05:30-05:45)", "24 (05:45-06:00)", "25 (06:00-06:15)", "26 (06:15-06:30)", "27 (06:30-06:45)", "28 (06:45-07:00)", "29 (07:00-07:15)", "30 (07:15-07:30)", "31 (07:30-07:45)", "32 (07:45-08:00)", "33 (08:00-08:15)", "34 (08:15-08:30)", "35 (08:30-08:45)", "36 (08:45-09:00)", "37 (09:00-09:15)", "38 (09:15-09:30)", "39 (09:30-09:45)", "40 (09:45-10:00)", "41 (10:00-10:15)", "42 (10:15-10:30)", "43 (10:30-10:45)", "44 (10:45-11:00)", "45 (11:00-11:15)", "46 (11:15-11:30)", "47 (11:30-11:45)", "48 (11:45-12:00)", "49 (12:00-12:15)", "50 (12:15-12:30)", "51 (12:30-12:45)", "52 (12:45-13:00)", "53 (13:00-13:15)", "54 (13:15-13:30)", "55 (13:30-13:45)", "56 (13:45-14:00)", "57 (14:00-14:15)", "58 (14:15-14:30)", "59 (14:30-14:45)", "60 (14:45-15:00)", "61 (15:00-15:15)", "62 (15:15-15:30)", "63 (15:30-15:45)", "64 (15:45-16:00)", "65 (16:00-16:15)", "66 (16:15-16:30)", "67 (16:30-16:45)", "68 (16:45-17:00)", "69 (17:00-17:15)", "70 (17:15-17:30)", "71 (17:30-17:45)", "72 (17:45-18:00)", "73 (18:00-18:15)", "74 (18:15-18:30)", "75 (18:30-18:45)", "76 (18:45-19:00)", "77 (19:00-19:15)", "78 (19:15-19:30)", "79 (19:30-19:45)", "80 (19:45-20:00)", "81 (20:00-20:15)", "82 (20:15-20:30)", "83 (20:30-20:45)", "84 (20:45-21:00)", "85 (21:00-21:15)", "86 (21:15-21:30)", "87 (21:30-21:45)", "88 (21:45-22:00)", "89 (22:00-22:15)", "90 (22:15-22:30)", "91 (22:30-22:45)", "92 (22:45-23:00)", "93 (23:00-23:15)", "94 (23:15-23:30)", "95 (23:30-23:45)", "96 (23:45-24:00)"];
	var schtable = document.getElementById("table4").getElementsByTagName("tbody")[0];
	str = "";
	var len = schtable.rows[2].cells.length;
	for(var i = 0; i < 98; i++) {
		if(i!=1){
			str += colBeginners[i] + "\t"
			for(var j = 1; j < len; j++) {
				temp = schtable.rows[i].cells[j].innerHTML.trim();
				temp = temp.replace(/,/g,'');
				str += temp + "\t";
				
			}
			str += "\n";
		}
	}
	str += "Total Mus " + "\t";
	var colSum = 0;
	var cellVal = 0;
	for(var col = 1; col < len; col++) {
		colSum = 0;
		for(var row = 2; row < 98; row++) {
			cellVal = schtable.rows[row].cells[col].innerHTML.trim();
			cellVal = cellVal.replace(/,/g,'');
			cellVal = Number(cellVal);
			if(!isNaN(cellVal)){
				//valid cell value
				colSum += cellVal;
			}
		}
		str += colSum/4000 + "\t";
	}
	str += "\n";
	str += "MAX" + "\t";
	var colMax = -100000;
	for(var col = 1; col < len; col++) {
		colMax = -100000;
		for(var row = 2; row < 98; row++) {
			cellVal = schtable.rows[row].cells[col].innerHTML.trim();
			cellVal = cellVal.replace(/,/g,'');
			cellVal = Number(cellVal);
			if(!isNaN(cellVal)){
				//valid cell value
				if(cellVal>colMax){
					colMax = cellVal;
				}
			}
		}
		str += colMax + "\t";
	}
	str += "\n";
	str += "MIN " + "\t";
	var colMin = 100000;
	for(var col = 1; col < len; col++) {
		colMin = 100000;
		for(var row = 2; row < 98; row++) {
			cellVal = schtable.rows[row].cells[col].innerHTML.trim();
			cellVal = cellVal.replace(/,/g,'');
			cellVal = Number(cellVal);
			if(!isNaN(cellVal)){
				//valid cell value
				if(cellVal<colMin){
					colMin = cellVal;
				}
			}
		}
		str += colMin + "\t";
	}
	if(!document.getElementById("CONSOLE")){
		var newDiv = document.createElement("textarea"); 
		newDiv.setAttribute("id", "CONSOLE");
		newDiv.style.width = "600px";
		newDiv.style.height = "600px"
		var newContent = document.createTextNode(str); 
		newDiv.appendChild(newContent); //add the text node to the newly created div. 
		document.body.appendChild(newDiv);
		} else{
		document.getElementById("CONSOLE").innerHTML = str;
	}
}

if(!document.getElementById("CONSOLEBUTTON")){
	var newDiv = document.createElement("button"); 
	newDiv.setAttribute("id", "CONSOLEBUTTON");
	newDiv.style.width = "400px";
	newDiv.style.height = "100px"
	var newContent = document.createTextNode("COPYTEXT"); 
	newDiv.appendChild(newContent); //add the text node to the newly created div. 
	document.body.appendChild(newDiv);
	newDiv.addEventListener("click", function(){
		doExtraction();
		//document.body.style.backgroundColor = "#99b3ff"
		document.getElementById("CONSOLE").focus();
		document.getElementById("CONSOLE").select();
		document.execCommand('Copy');
		alert("Text selected and Copied!!!");		
	});
}
