function calculateMinCost() {
  //your code here
  
  var inputData = document.getelementById("rope-lengths").value;
  var inputArr = inputData.split(",");
	for (let index = 0; index < inputArr.length; index++) {
		inputArr[index] = Number(inputArr[index])
	}
	var cost = 0;
	inputData.sort(function(a,b){return a-b});
  while(inputArr.length > 1){
	  var newRope = inputArr[0] + inputArr[1];
	  cost+=newRope;
	  inputArr.slice(0,2);
	  inputArr.push(newRope);
	  alert("aaa")
	  inputArr.sort(function(a,b){return a-b});
	  document.getelementById("result").innerHTML = cost;
  }

// document.getelementById("result").innerHTML = cost;
}