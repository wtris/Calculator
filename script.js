//clears all values
function clearScreen(){
    document.getElementById("result").value="";
}
//display values
function display(value){
    document.getElementById("result").value +=value;
}
//evauluates and return results
function calculate(){
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}