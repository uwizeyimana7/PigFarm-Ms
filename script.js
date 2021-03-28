
function myNewFunction(sel) {
  num1 = document.getElementById("firstNumber").value;
  num2 = document.getElementById("secondNumber").value;
  difference=num2 -num1;
  
// geting selected text of selection box;
type= sel.options[sel.selectedIndex].text;


 switch(type){
 // when it is a public client type
 case "Public":
 money=difference * 323;

 document.getElementById("result").innerHTML= money;
 
 break; 
 // when it a residential client type
	 case "Residential":
			 if(difference <= 5){
			 
			 money=difference * 340;
						document.getElementById("result").innerHTML= money;
			 }else if(difference <= 20){

						money=difference * 720;
						document.getElementById("result").innerHTML= money;
			 }else if(difference <= 50){
						money=difference * 845;
						document.getElementById("result").innerHTML= money;
			 }else if(difference > 50){
						money=difference * 877;
						document.getElementById("result").innerHTML= money;
			 
			 }
	 break;
	 // when it is non residentintial client type
	 case "Non-Residential":
			
			if(difference <= 50){
						money=difference * 877;
						document.getElementById("result").innerHTML= money;
			
			}else if(difference > 50){
						money=difference * 895;
						document.getElementById("result").innerHTML= money;
			}
	 break;
	 // when it is an industry clent type
	 case "Industry":
						money=difference * 830;
						document.getElementById("result").innerHTML= money;
	break;
	// when it is none selected in list

	default:
 alert("Select any type");
 
 break;
 }
}
	function Clear()// clearing a form as default
	{
		
		document.getElementById("MyForm").reset();
		document.getElementById("result").innerHTML= "";
	}
