(function(n,j){var k=/(opera)(?:.*version)?[ \/]([\w.]+)/,m=/(msie) ([\w.]+)/,s=/(mozilla)(?:.*? rv:([\w.]+))?/,i=navigator.userAgent.toLowerCase();navigator.platform.toLowerCase();var l;l={webkit:!1,opera:!1,msie:!1,mozilla:!1,version:""};k=/(webkit)[ \/]([\w.]+)/.exec(i)||k.exec(i)||m.exec(i)||0>i.indexOf("compatible")&&s.exec(i)||["","0"];l[k[1]]=!0;l.version=k[2];(new Date).getTime();var o=function(c,a){a="undefined"==typeof a||!a||!("undefined"!=typeof a.nodeType&&1==a.nodeType)?j:a;return a.getElementsByTagName(c)},
q=function(c,a){for(var c=c.replace(/^(#|\?|\s)*/g,""),b=c.split("&"),e=0;e<b.length;e++){var f=b[e];if(0==f.indexOf(a+"="))return f.substring((a+"=").length)}return""},r=function(c,a){c=parseInt(c);return isNaN(c)?a:c},k=function(c,a,b,e){var f="undefined"==typeof afc_rand||!afc_rand?Math.floor(2147483647*Math.random()):afc_rand,d=function(){"undefined"==typeof __sosoafc_ids&&(__sosoafc_ids=[]);for(var b=[],a=0;a<__sosoafc_ids.length;++a)b.push(__sosoafc_ids[a].id);__sosoafc_ids.push({id:c});return b.join(",")}();
p.ids=d;d="http://rh.qq.com/afc?"+function(d){var f=["placement_id="+c,"width="+a,"height="+b],e=0,g;g="sosoafc_previewid,sosoafc_placementid,rikey,title,ids,meta,headg,page,links,fulltext".split(",");for(var j="sosoafc_previewid,sosoafc_placementid,rikey,title,url,ids,meta,refer,headg,page,links,fulltext".split(","),j=l.msie&&6<l.version?g:j;g=j.shift();)if("undefined"!=typeof d[g])if(g+="="+("undefined"==typeof encodeURIComponent?n.escape:encodeURIComponent)((""+d[g]).replace(/(?:"|&quot;|&amp;quot;|\'|&#039;|<|&lt;|>|&gt;|\\)/g,
"")),2040>=e+g.length)f.push(g),e+=g.length;else break;return f.join("&")}(p);f='<div id="afc_div_dz_'+f+'"><iframe allowtransparency="true" style="background:transparent" id="afc_iframe_dz_'+f+'" name="afc_frame_dz_'+f+'" scrolling="no" frameborder="0" marginheight="0" marginwidth="0" width="'+a+'" height="'+b+'" allowtransparency="true" src="'+d+'"></iframe></div>';if(e=j.getElementById(e))e.innerHTML=f},d;if(!("object"!=typeof afcads_params_for_dz||null===afcads_params_for_dz)){var p=function(c){c=
"undefined"==typeof c||!c?{}:c;c.maxHeadingsCount="undefined"==typeof c.maxHeadingsCount?r(c.maxHeadingsCount,10):10;c.maxTextCount="undefined"==typeof c.maxTextCount?r(c.maxTextCount,100):100;var a={},b={},d=function(){var h=o("head",j),h=(h=0<h.length?h[0]:null)?o("meta",h):null,c=["",""];if(h)for(var a in h)"undefined"!=typeof h[a].name&&h[a].name&&("keywords"==h[a].name.toLowerCase()?c[0]=h[a].content:"description"==h[a].name.toLowerCase()&&(c[1]=h[a].content));return c}(),f=n.location.href,k=
j.referrer,m=function(){for(var a=[1,2,3,4,5],b,d=[],g=0,f=!1;(b=a.shift())&&!f;)if((b=o("h"+b,j))&&!("undefined"==typeof b||1>b.length))for(var e=0,i=b.length;e<i;e+=1){if(++g>c.maxHeadingsCount){f=!0;break}var k=b[e].innerHTML.replace(/<.*?>/g,"").replace(/[\r\n\t]/g,"");d.push(k)}return d}(),i=function(){var a=q(n.location.search,"sosoafc_previewid"),b=q(n.location.search,"sosoafc_placementid"),a=parseInt(a),b=parseInt(b);return!isNaN(a)&&0<a&&!isNaN(b)&&0<b?{sosoafc_previewid:a,sosoafc_placementid:b}:
null}(),l=function(){var a=n.location.href.match(/\Wrikey=(.*?)(?:[&#].*|)$/);return a&&"length"in a&&2==a.length?a[1]:""}();b.title=function(){return j.title};b.url=function(){return f};b.meta=function(){return d.join("\t")};b.refer=function(){return k};b.headg=function(){return m.join("\t")};b.page=function(){return""};b.links=function(){return""};b.fulltext=function(){return""};b.ids=function(){return neighbor_ids};i&&(b.sosoafc_previewid=function(){return i.sosoafc_previewid},b.sosoafc_placementid=
function(){return i.sosoafc_placementid});l&&(b.rikey=function(){return l});for(var g in b)try{a[g]=b[g]()}catch(p){a[g]="-99"}return a}();for(d in afcads_params_for_dz)if(!("object"!=typeof afcads_params_for_dz[d]||null===afcads_params_for_dz[d]||"showed"in afcads_params_for_dz[d]&&afcads_params_for_dz[d].showed)){afcads_params_for_dz[d].showed=!0;m=afcads_params_for_dz[d];try{k(m.afc_placementid,m.afc_width,m.afc_height,d)}catch(t){}}}})(window,document);
