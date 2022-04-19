function getCapital(capital) {
	return function(interest) {
		return (capital * interest)/100;
	}

}
const profit = getCapital(12000);
console.log(profit(25));