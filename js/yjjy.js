window.onload=function(){
	var oAdvice=document.getElementsByClassName("advice_choose");
	for(var i=0;i<oAdvice.length;i++){
		oAdvice.index=i;
		oAdvice[i].onclick=function(){
			for(var i=0;i<oAdvice.length;i++){
				oAdvice[i].className="advice_choose";
			}
			this.className="advice_choose advice_choose_default";
		}
	}
}
