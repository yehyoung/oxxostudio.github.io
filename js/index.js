$(function(){function i(){$.getJSON("/json/articles.json",function(i){r=i,s()})}function n(n){$.getJSON("/json/pageList.json",function(e){var o;c=e.length,o=c<6?c:6;!function(i){var n,t;for((t=i+o)>=c&&(t=c),n=i;n<t;n++){var a;a=e[n].img?e[n].img:"/img"+e[n].site.replace(".html","-s.jpg"),$("#content-grid>ul").append('<li><i class="'+e[n].tag+'"></i><h2>'+e[n].title+'</h2><h3><i class="icon-date"></i>'+e[n].date+'</h3><h3><i class="icon-author"></i>OXXO.STUDIO</h3><a href="'+e[n].site+'" title="'+e[n].title+'"><div class="content-img"><span></span><img src="'+a+'"></div></a><div class="content-grid-line"></div><h4 content="'+e[n].site+'"></h4><a href="'+e[n].site+'"><div class="read-more">Read more</div></a></li>')}}(6*(-1+n)),i(),t(c,n),a()})}function e(i,n){$.getJSON("/json/pageList.json",function(e){c=e.length;var a,d,l=[],h=0;for(a=0;a<c;a++)e[a].tag==i&&(l[h]=e[a],h+=1);d=h<6?h:6;!function(i){var n,e;for((e=i+d)>=h&&(e=h),n=i;n<e;n++){var t;t=l[n].img?l[n].img:"/img"+l[n].site.replace(".html","-s.jpg"),$("#content-grid>ul").append('<li><i class="'+l[n].tag+'"></i><h2>'+l[n].title+'</h2><h3><i class="icon-date"></i>'+l[n].date+'</h3><h3><i class="icon-author"></i>OXXO.STUDIO</h3><a href="'+l[n].site+'"><div class="content-img"><span></span><img src="'+t+'"></div></a><div class="content-grid-line"></div><h4 content="'+l[n].site+'"></h4><a href="'+l[n].site+'"><div class="read-more">Read more</div></a></li>')}}(6*(-1+n)),s(),t(h,n),o()})}function t(i,n){var e,t;for(e=Math.ceil(i/6),t=1;t<=e;t++)$("#page-num").append("<div>"+t+"</div>");$("#page-num div").hide(),n-3>=0&&$("#page-num div").eq(n-3).show(),n-2>=0&&$("#page-num div").eq(n-2).show(),$("#page-num div").eq(n-1).show(),$("#page-num div").eq(n).show(),$("#page-num div").eq(n+1).show(),$("#page-num div").eq(n+2).show(),$("#page-num div").eq(n+3).show(),$("#page-num div").eq(n-1).css({background:"#888",color:"#fff"})}function a(){$("#page-num div").on("click",function(){var i=$(this).index()+1;1==i?window.open(p,"_self"):window.open(p+"index.html?="+i,"_self")})}function o(){$("#page-num div").on("click",function(){var i=$(this).index()+1;1==i?window.open(p+"index.html?"+h,"_self"):window.open(p+"index.html?"+h+"="+i,"_self")})}function s(){$("#content-grid>ul").find("h4").each(function(){var i=$(this),n=i.attr("content").split("/"),e="/"+n[n.length-2]+"/"+n[n.length-1];for(var t in r)for(var a in r[t])if(e=="/"+t+"/"+a+".html"){var o=r[t][a].body;i.html(o),i.html(i.text())}})}$(window);var c,d,l,h,r,g=location.href,v=g.split("?"),f=g.split("/"),p=f[0]+"//"+f[2]+"/";v[1]?(d=v[1].split("="),h=d[0],(l=Number(d[1]))?""==d[0]?n(l):e(h,l):e(h,1)):n(1)});