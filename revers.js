function revers(str) {
	const arr = [];
	for(let letter of str) {
		arr.push(letter);
	}
	return arr.reverse().join('');
}

console.log(revers("hello🌔"));
