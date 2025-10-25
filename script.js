function toCase(text) {
  // write your code here
	  let lowercase=text.toLowerCase();
  let uppercase=text.toUpperCase();
  let arr=[];
  arr.push(lowercase);
  arr.push(uppercase);
  let data=arr.join("-");
  return data
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
