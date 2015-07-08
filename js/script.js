$(document).ready(function () {

	var Z, F, R, P, X, Y;

	$('#submit').click(function(){
		var lines = $( "#input" ).val().split('\n');
		var html = "";
		for (var i = 0;  i < lines.length; i++) {
			if(lines[i].substr(0,3) == 'G82')
            	html += G82toG01(lines[i]);
            else 
            	html += lines[i] + "\n";
		};
		document.getElementById("output").innerHTML = html;
	});

	function G82toG01(param) {
		var parts = param.split(" ");
		var ret = "";

		parts.forEach(function(item) {
			if(item[0] == 'X') X = item.substr(1);
			else if(item[0] == 'Y') Y = item.substr(1);
			else if(item[0] == 'Z') Z = item.substr(1);
			else if(item[0] == 'F') F = item.substr(1);
			else if(item[0] == 'R') R = item.substr(1);
			else if(item[0] == 'P') P = item.substr(1);
		});

		ret += "G01" + " X" + X + " Y" + Y + " F100" + "\n";
		ret += "G01" + " Z" + Z + " F" + F + "\n";
		ret += "G04" + " P" + P + "\n";
		ret += "G01" + " Z" + Z.substr(1) + " F" + F + "\n\n";	

		return ret;
		
	}

});

