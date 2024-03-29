function display(mark){
    document.getElementById("result").value+=mark;
}
 function clearResult() {
      document.getElementById("result").value = "";
    }
function clearResult1() {
      var result = document.getElementById("result").value;
        document.getElementById("result").value = result.slice(0, -1);
      }    
function calculate() {
     var result = document.getElementById("result").value;
    try {
      var finalResult = eval(result);
    document.getElementById("result").value = finalResult;
      }
       catch (error) {
        alert("Invalid expression!");
     }
    }