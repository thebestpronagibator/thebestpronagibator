var timer_sec=10;
function onReady1(){
	setInterval(timer, 1000, 0);
}

function timer(){
	if(timer_sec!=0)
	{
		if(timer_sec>10 || timer_sec==10)
			document.getElementById('bot_div').innerHTML = "00:00:"+timer_sec;
		else
			document.getElementById('bot_div').innerHTML = "00:00:0"+timer_sec;
		timer_sec--;
	}
	else
	{
		document.getElementById('bot_div').innerHTML = " ";
		$("#bot_div").css("background", "url(TIMER.png)");
	}
	
}

$(document).ready(onReady1);