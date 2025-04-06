function firstNonRepeatedChar(str) {
 // Write your code here
	let obj={};
	for(let char of str){
		obj[char]=(obj[char]||0) + 1;
	}
	for(let [key,value] of Object.entries(obj)){
		if(value===1) return key;
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
