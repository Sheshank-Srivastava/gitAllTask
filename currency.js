function  indianConverter(){
	iu();
	ib();
}
function  usdConverter(){
	ui();
	ub();
}
function  poundConverter(){
	bu();
	bi();
}
//function is use to convert rupees into us dollar
function iu(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var obj =JSON.parse(this.responseText);
			var ir = 0.0;
			var updat=0.0;
			ir=document.getElementById('rupees').value;
			updat=obj.rates.USD;
			var cur=0.0;
			cur =ir*updat;
			document.getElementById('dollar').value = cur;		 
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=INR&symbols=USD',true);
	xhttp.send();
}
//function is use to convert rupees into us pounds
function ib(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var obj =JSON.parse(this.responseText);
			var ir = 0.0;
			var updat=0.0;
			ir=document.getElementById('rupees').value;
			updat=obj.rates.GBP;
			var cur=0.0;
			cur =ir*updat;
			document.getElementById('pounds').value = cur;	
			
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=INR&symbols=GBP',true);
	xhttp.send();
}
//function is use to convert US dollar to pounds

function ub(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
		var obj =JSON.parse(this.responseText);
			var ir = 0.0;
			var updat=0.0;
			ir=document.getElementById('dollar').value;
			updat=obj.rates.GBP;
			var cur=0.0;
			cur =ir*updat;
			document.getElementById('pounds').value = cur;	
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=USD&symbols=GBP',true);
	xhttp.send();
}
//function is use to convert US dollar to rupees
function ui(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var obj =JSON.parse(this.responseText);
			var ir = 0.0;
			var updat=0.0;
			ir=document.getElementById('dollar').value;
			updat=obj.rates.INR;
			var cur=0.0;
			cur =ir*updat;
			document.getElementById('rupees').value = cur;	
			
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=USD&symbols=INR',true);
	xhttp.send();
}
//function is use to convert pounds into rupees
function bi(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var obj =JSON.parse(this.responseText);
			var ir = 0.0;
			var updat=0.0;
			ir=document.getElementById('pounds').value;
			updat=obj.rates.INR;
			var cur=0.0;
			cur =ir*updat;
			document.getElementById('rupees').value = cur;	
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=GBP&symbols=INR',true);
	xhttp.send();
}
//function is use to convert pounds  into US dollar
function bu(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
		if(this.readyState == 4 && this.status == 200){
			var obj =JSON.parse(this.responseText);
			var ir = 0.0;
			var updat=0.0;
			ir=document.getElementById('pounds').value;
			updat=obj.rates.USD;
			var cur=0.0;
			cur =ir*updat;
			document.getElementById('dollar').value = cur;	
		}
	};
	xhttp.open("GET",'https://api.fixer.io/latest?base=GBP&symbols=USD',true);
	xhttp.send();
}