var step = 0;
var number=0;
var key_code_number;
var last_number_0;
var last_number_1;
var last_number_2;
var last_number_3;
var last_number_4;
function calc(a){
	last_number = a;
	if(number>9999){
		document.getElementById('bot_div_calc').innerHTML = number+"  ERCOM";
	}
	else{
		if(step==0){
		number = a;
		}
		else{
			number = (number*10)+a;
		}
		document.getElementById('bot_div_calc').innerHTML = number+" = "+(number*2);
		switch(step){
			case 0:last_number_0 = a; break;
			case 1:last_number_1 = a; break;
			case 2:last_number_2 = a; break;
			case 3:last_number_3 = a; break;
			case 4:last_number_4 = a; break;
		}
		step++;
	}
}
function drop(){
	step--;
	switch(step){
		case 0:number = number - last_number_0; break;
		case 1:number = number - last_number_1; break;
		case 2:number = number - last_number_2; break;
		case 3:number = number - last_number_3; break;
		case 4:number = number - last_number_4; break;
	}
	
	
	number = number/10;
	document.getElementById('bot_div_calc').innerHTML = number+" = "+(number*2);
}
document.addEventListener("keydown", KeyCheck);
function KeyCheck(event)
{
	var KeyID = event.keyCode;
	if(KeyID == 48){
	calc(0);
	}
	if(KeyID == 49){
		calc(1);
	}
	if(KeyID == 50){
		calc(2);
	}
	if(KeyID == 51){
		calc(3);
	}
	if(KeyID == 52){
		calc(4);
	}
	if(KeyID == 53){
		calc(5);
	}
	if(KeyID == 54){
		calc(6);
	}
	if(KeyID == 55){
		calc(7);
	}
	if(KeyID == 56){
		calc(8);
	}
	if(KeyID == 57){
		calc(9);
	}
	if(KeyID == 8){
		if(step == 0 || step<0)
			document.getElementById('bot_div_calc').innerHTML = "ERCOM";
		else
			drop();
	}
}