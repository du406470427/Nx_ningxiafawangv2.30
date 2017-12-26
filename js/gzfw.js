
window.onload=function(){
	/*标签页切换*/
	var oBusiness_announcement_title = document.getElementsByClassName("default");
	var oBusiness_announcement_main = document.getElementsByClassName("business_announcement_main");
	for(var i=0;i<oBusiness_announcement_title.length;i++){
		oBusiness_announcement_title[i].index=i;
		oBusiness_announcement_title[i].onclick=function(){
			for(var i=0;i<oBusiness_announcement_title.length;i++){
				oBusiness_announcement_title[i].className="disciplinary_information_title default";
				oBusiness_announcement_main[i].style.display="none";
			}
			this.className="business_announcement_title default";
			oBusiness_announcement_main[this.index].style.display="block";
		}
	}
	
	var oTypical_cases = document.getElementsByClassName("active");
	var oTypical_cases_main = document.getElementsByClassName("typical_cases_main");
	for(var i=0;i<oTypical_cases.length;i++){
		oTypical_cases[i].index=i;
		oTypical_cases[i].onclick=function(){
			for(var i=0;i<oTypical_cases.length;i++){
				oTypical_cases[i].className="typical_case_title active";
				oTypical_cases_main[i].style.display="none";
			}
			this.className="policy_laws_title active";
			oTypical_cases_main[this.index].style.display="block";
		}
	}
	
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
