$(function(){function t(){e.show(),e.find("i").on("click",function(){e.find("i").addClass("not-this"),$(this).removeClass("not-this"),i("filterClick");var t=$(this).attr("class");"tag-all"==t?(a.find("li").removeAttr("style"),l.val(""),s.html("")):(a.find("li").hide(),a.find("li."+t).show(),l.val(""))})}function n(){l.on("change paste keyup",function(){function t(t){s.html('#container .content li:not([data-title*="'+t+'"]) {display: none;}')}var n=$(this).val().toLowerCase();i("list-Search"),$(".content i.tag-all").hasClass("not-this")?(e.find("i").addClass("not-this"),$(".content i.tag-all").removeClass("not-this"),a.find("li").removeAttr("style"),t(n)):n?t(n):s.html("")})}function i(t){ga("send","event",t,t)}var a=$(".content ul"),e=$(".tag-list"),l=$(".list-search input"),s=$(".list-search-style");!function(){$.getJSON("/json/pageList.json",function(i){for(var e=0;e<i.length;e++)a.append('<li class="'+i[e].tag+'" data-title="'+i[e].title.toLowerCase()+'"><i></i><h3>'+i[e].date+'</h3><a href="'+i[e].site+'"><h2>'+i[e].title+"</h2></a></li>");$(".content h1 span").text(i.length),t(),n()})}()});