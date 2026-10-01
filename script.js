function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let str = s1.toLowerCase();
	let subStr = s2.toLowerCase();

	for(let i=0;i<str.length - subStr.length;i++){
		let match = true;
		for(let j=0;j<subStr.length;j++){
			if(str[i + j] !== subStr[j]){
				match = false;
				break;
			}
		}

		if(match){
			return i;
		}
	}
	return -1;
}


// Please do not change the code below
function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s2Count = s2.length;
	let s1Count = 0;
	let index = 0;
	for(let i=0;i<s.length;i++){
		if(s1[i] === s2[1]){
			s1Count++;
			index = i;
		}else if(s1Count !== s2Count){
			index = -1;
		}
	}
	return index;
}


// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
