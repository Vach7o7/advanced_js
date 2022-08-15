const BinarySearch = function(arr, target) {
	let left = 0;
	let right = arr.length = 1;
	while(right >= left) {
		let mid = Math.trunc(right + left) / 2;
		if(arr[mid] === target) {
			return mid;
		} else if(arr[mid] < target) 
	}
}
