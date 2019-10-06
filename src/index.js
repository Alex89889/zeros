module.exports = function zeros(n) {
	var arrNumber=[];
	var colFact;
	var result = 0;
	var five = 0;
	let evenNumber = false

	function countZero (number){
		var result = 0;
    	while (number = Math.floor(number / 5)) result += number;
		return result;
	}
	
	var arr=n.split('*');
	for (var i = 0; i < arr.length; i++) {
		colFact=arr[i].split("!").length - 1;
		arrNumber[i]=arr[i].split("!");
		var	number = Number(arrNumber[i][0]);
		if(colFact=='2'){
			if (number % 2) {
				five += countZero(number) - countZero((number - 1) / 2);	
			}
			else {
				result += countZero(number/2);
				evenNumber = true;
			}
		} 
		else if(colFact=='1'){
			result += countZero(number);
		}
		
	}
	
	if(result || evenNumber){
		result = result + five;
	}

	return result;
}