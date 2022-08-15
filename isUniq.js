let str = "hello";

function isUniq(a) {
	for(let i = 0; i < a.length - 1; ++i){
		for(let j = i+1; j < a.length; ++j){
			if(a[i] === a[j]){
				return false;
			}
		}
	}
	return true;
}

console.log(isUniq(str));
