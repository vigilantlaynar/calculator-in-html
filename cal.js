var resVal="";
var operator="";
function typenumber(num)
{
    var res=document.querySelector("#result");
    res.value += num;
}
function typeop(op)
{
    operator=op;
    var res=document.querySelector("#result");
    resVal =res.value;
    res.value="";
    
}
function clrsc()
{
    var res=document.querySelector("#result");
    resVal="";
    operator="";
    res.value=""
}
function calculate()
{
    var res=document.querySelector("#result");
    var nextInput=res.value;
    res.value="";   
    var output =0;
    switch(operator) {
            
            case "+":
            output=parseInt(resVal)+ parseInt(nextInput);
            break;
            
            case "-":
            output= parseInt(resVal)- parseInt(nextInput);
            break;
            
             case "*":
            output= parseInt(resVal)*parseInt(nextInput);
            break;
            
             case "/":
            if(parseInt(nextInput)==0){
              
               alert("0!= denominator");
                
                
                
            }
            else{
            output=parseInt(resVal)/parseInt(nextInput);
            }break;
        default:
            output="not implemented"
            
            
    }
    res.value=output;
}