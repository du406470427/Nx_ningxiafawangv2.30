window.onload=function(){
	
	/*区县选择*/
	var oCity=document.getElementsByClassName("area_city");
	var oCounty=document.getElementsByClassName("county");
	for(var i=0;i<oCity.length;i++){
		oCity[i].index=i;
		oCity[i].onclick=function(){
			for(var i=0;i<oCity.length;i++){
				oCity[i].className="area_choose_a area_city";
				oCounty[i].style.display="none";
			}
			this.className=" area_choose_a area_city area_choose_active";
			oCounty[this.index].style.display="block";
		}
	}
	
	var pCounty=document.getElementsByClassName("area_county");
	for(var j=0;j<pCounty.length;j++){
		pCounty[j].index=j;
		pCounty[j].onclick=function(){
			for(var j=0;j<pCounty.length;j++){
				pCounty[j].className="area_choose_a area_county";
			}
			this.className="area_choose_a area_choose_active area_county";
		}
	}
	
	var oDisputes=document.getElementsByClassName("area_disputes");
	for(var k=0;k<oDisputes.length;k++){
		oDisputes[k].index=k;
		oDisputes[k].onclick=function(){
			for(var k=0;k<oDisputes.length;k++){
				oDisputes[k].className="area_choose_a area_disputes";
			}
			this.className="area_choose_active area_disputes area_choose_a";
		}
	}
}