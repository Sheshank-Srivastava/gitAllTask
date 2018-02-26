function  indianConverter(){
	inrToUsdConvert();
	inrToPoundConvert();
}
function  usdConverter(){
	usdToInrConverter();
	usdToPoundConverter();
}
function  poundConverter(){
	poundToUsdConverter();
	poundToInrConverter();
}
//function is use to convert rupees into us dollar
function inrToUsdConvert(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var apiData =JSON.parse(this.responseText);
			var rupeeData = 0.0;
			var newValue=0.0;
			var updateAmount=0.0;

			rupeeData=document.getElementById('rupees').value;
			newValue=apiData.rates.USD;
			updateAmount =rupeeData * newValue;
			
			document.getElementById('dollar').value = updateAmount;		 
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=INR&symbols=USD',true);
	xhttp.send();
}
//function is use to convert rupees into pounds
function inrToPoundConvert(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var apiData =JSON.parse(this.responseText);
			var indianData = 0.0;
			var newValue=0.0;
			var updateAmount = 0.0;

			indianData=document.getElementById('rupees').value;
			newValue = apiData.rates.GBP;
			updateAmount = indianData * newValue;
			
			document.getElementById('pounds').value = updateAmount;	
			
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=INR&symbols=GBP',true);
	xhttp.send();
}
//function is use to convert US dollar to pounds

function usdToPoundConverter(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var apiData =JSON.parse(this.responseText);
			var dollarData = 0.0;
			var newValue = 0.0;
			var updateAmount = 0.0;

			dollarData = document.getElementById('dollar').value;
			newValue = apiData.rates.GBP;
			updateAmount = dollarData*newValue;
			
			document.getElementById('pounds').value = updateAmount;	
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=USD&symbols=GBP',true);
	xhttp.send();
}
//function is use to convert US dollar to rupees
function usdToInrConverter(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var apiData =JSON.parse(this.responseText);
			var dollarData = 0.0;
			var newValue=0.0;
			var updateAmount=0.0;
			
			dollarData=document.getElementById('dollar').value;
			newValue=apiData.rates.INR;
			updateAmount =dollarData*newValue;
			
			document.getElementById('rupees').value = updateAmount;	
			
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=USD&symbols=INR',true);
	xhttp.send();
}
//function is use to convert pounds into rupees
function poundToInrConverter(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var apiData =JSON.parse(this.responseText);
			var poundData = 0.0;
			var newValue=0.0;
			var updateAmount=0.0;

			poundData=document.getElementById('pounds').value;
			newValue=apiData.rates.INR;
			updateAmount =poundData*newValue;
			
			document.getElementById('rupees').value = updateAmount;	
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=GBP&symbols=INR',true);
	xhttp.send();
}
//function is use to convert pounds  into US dollar
function poundToUsdConverter(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var apiData =JSON.parse(this.responseText);
			var poundData = 0.0;
			var newValue=0.0;
			var updateAmount=0.0;

			poundData=document.getElementById('pounds').value;
			newValue=apiData.rates.USD;
			updateAmount =poundData*newValue;
			
			document.getElementById('dollar').value = updateAmount;	
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=GBP&symbols=USD',true);
	xhttp.send();
}