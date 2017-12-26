window.onload=function(){
	
	/*地区选择*/
	var oCity=document.getElementsByClassName("area_city");
	var oCounty=document.getElementsByClassName("county");
	for(var i=0;i<oCity.length;i++){
		oCity[i].index=i;
		oCounty[1].style.display="block";
		oCity[i].onclick=function(){
			for(var i=0;i<oCity.length;i++){
				oCity[i].className="area_choose_a area_city";
				oCounty[i].style.display="none";
			}
			this.className="area_choose_a area_city area_choose_active";
			oCounty[this.index].style.display="block";
			oCounty[0].style.display="none";
		}
	}
	
	/*区县选择*/
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
	
	/*机构选择*/
	var oDisputes=document.getElementsByClassName("area_disputes");
	for(var i=0;i<oDisputes.length;i++){
		oDisputes[i].index=i;
		oDisputes[i].onclick=function(){
			for(var i=0;i<oDisputes.length;i++){
				oDisputes[i].className="area_choose_a area_disputes";
			}
			this.className="area_choose_active area_disputes area_choose_a";
		}
	}
	
	/*人员选择*/
	var oPeople=document.getElementsByClassName("area_peo");
	for(var i=0;i<oPeople.length;i++){
		oPeople[i].index=i;
		oPeople[i].onclick=function(){
			for(var i=0;i<oPeople.length;i++){
				oPeople[i].className="area_choose_a area_peo";
			}
			this.className="area_choose_active area_peo area_choose_a";
		}
	}
	
	/*案例选择*/
	var oCase=document.getElementsByClassName("area_case");
	for(var i=0;i<oCase.length;i++){
		oCase[i].index=i;
		oCase[i].onclick=function(){
			for(var i=0;i<oCase.length;i++){
				oCase[i].className="area_choose_a area_case";
			}
			this.className="area_choose_active area_case area_choose_a";
		}
	}
	
	/*法律选择*/
	var oLaw=document.getElementsByClassName("area_law");
	for(var i=0;i<oLaw.length;i++){
		oLaw[i].index=i;
		oLaw[i].onclick=function(){
			for(var i=0;i<oLaw.length;i++){
				oLaw[i].className="area_choose_a area_law";
			}
			this.className="area_choose_active area_law area_choose_a";
		}
	}
}
