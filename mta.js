var lineN = ['timeSquareN', '34thN', '28thN', '23rdN', 'unionSqr', '8thN'];

var lineL = ['8thL', '6thL', 'unionSqr', '3rdL', '1stL'];

var line6 = ['grandCentral6', '33rd6', '28th6', '23rd6', 'unionSqr', 'astorPlace6'];


//find intersection

var allStops = lineN.concat(lineL).concat(line6);
allStops.sort();

var intersect = function () {
	for (i=0; i<allStops.length; i++) {
		if (allStops[i-1] === allStops[i] && allStops[i] === allStops[i+1]) {
			return allStops[i];
		}
	}
};

// // TEST CODE
// var getOnLine = eval('lineN');
// var getOnStop = 'timeSquareN';
// var getOffLine = eval('line6');
// var getOffStop = '33rd6';


var getOnLine = eval(prompt('Which line are you getting on?'));
//is there a way to not use eval() that coverts a string to calling the variable?
var getOnStop = prompt('Which stop are you getting on?');
var getOffLine = eval(prompt('which line are you getting off?'));
var getOffStop = prompt('which stop are you getting off?');


var numberOfStops = function() {
	if (getOnLine === getOffLine) {
		return Math.abs(getOnLine.indexOf(getOnStop) - getOffLine.indexOf(getOffStop));
	} else {
		return Math.abs(getOnLine.indexOf(getOnStop) - getOnLine.indexOf(intersect())) + Math.abs(getOffLine.indexOf(getOffStop) - getOffLine.indexOf(intersect()));
	}
};

alert(numberOfStops());

// console.log(numberOfStops());