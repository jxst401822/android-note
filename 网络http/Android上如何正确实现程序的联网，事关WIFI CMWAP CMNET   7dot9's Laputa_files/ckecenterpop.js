﻿/* (c) 2011 JiaThis, LLC, 0125*/
(function(){var _ls=JIATHIS_CONFIGS.servicelist,_gcp=function(s){try{var conf=jiathis_config||{}}catch(e){var conf={}};var tm='<div style="border:10px solid #7F7F7F; width:300px;">';tm+='<div class="jiadiv_01" style="width:300px;">';tm+='<div style="background:#F2F2F2;line-height:100%;height:30px;overflow:hidden;width:300px;">';tm+='<table width="100%" style="margin:5px 0 0 0;"><tr class="jt_sharetitle"><td align="left" style="text-align:left;">分享到各大网站</td><td align="right"><img src="'+JIATHIS_CONFIGS.codehost+'/images/img_exit.gif" border="0" style="margin:0 4px;cursor:pointer;" onclick="$CKE.centerClose();"/></td></tr></table>';tm+='</div><div class="searchTxtCont">';tm+='<div style="background:url('+JIATHIS_CONFIGS.codehost+'/images/img_so.gif) no-repeat center;height:30px; width:281px">';tm+='<input class="searchTxt" name="" type="text" onclick="this.value=\'\';this.style.color=\'#000\';" value="输入网站名或拼音缩写"  onkeyup = "$CKE.choose(this)" />';tm+='</div></div><div id="ckelist" class="jiadiv_02">';for(var k in s){if(_ls[k]&&!!s[k]&&!!s[k].split){var webid=k.slice(3),media=s[k].split(','),hidden_value=webid+','+media[0]+','+media[1];tm+='<a href="#" onclick="jiathis_sendto(\''+webid+'\');return false;" class="jiatitle"><span class="jtico jtico_'+webid+'">'+media[0]+'</span><input type="hidden" value="'+hidden_value+'" /></a>'}}tm+='<div style="clear:both"></div>';tm+='</div>';tm+='<div class="centerBottom">';tm+='<div class="centerBottom">';tm+='<div style="width:120px;float:left;font-size:10px;text-align:left;"><a href="'+JIATHIS_CONFIGS.webhost+'/help/html/what-is-jiathis" class="link_01" style="color:#333333;" target="_blank">这是什么工具?</a></div>';tm+='<div style="width:70px;float:right;font-size:11px">';tm+='<img src="'+JIATHIS_CONFIGS.codehost+'/images/img_012.gif" border="none" />&nbsp;';tm+='<a href="'+JIATHIS_CONFIGS.webhost+'/" style="color:#333333;" class="link_01" target="_blank">JiaThis</a>';tm+='</div><div style="clear:both"></div></div></div></div>';return tm};$CKE.centerpop.innerHTML=_gcp(_ls);$CKE.center()})();