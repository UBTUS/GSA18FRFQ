(function ($) {
	"use strict";
	if ($('html').is('.ie8, .ie9')) {
		$(document).ready(function(){
			$("#oldIeModal").modal({backdrop: 'static', keyboard: false});
		});
	}
}(jQuery));	


function findBootstrapEnvironment() {
    var envs = ['xs', 'sm', 'md', 'lg'];

    $el = $('<div>');
    $el.appendTo($('body'));

    for (var i = envs.length - 1; i >= 0; i--) {
        var env = envs[i];

        $el.addClass('hidden-'+env);
        if ($el.is(':hidden')) {
            $el.remove();
            return env
        }
    };
}
        var json="<ul>";

function addsomething(){
	$('li.drug').addClass('plusimageapply');
	$('li.drug').children().addClass('selectedimage');
	$('li.drug').children().hide();
	$('li.drug').each(	function(column) {
		$(this).click(function(event){
			if (this == event.target) {
				if($(this).is('.plusimageapply')) {
					$(this).children().show();
					$(this).removeClass('plusimageapply');
					$(this).addClass('minusimageapply');
				}else{
					$(this).children().hide();
					$(this).removeClass('minusimageapply');
					$(this).addClass('plusimageapply');
				}
			}
		});
	});
}

function json2html(json) {
    var i, ret = "";
    ret += "<ul>";
    for( i in json) {
        
        if( typeof json[i] === "object"){ 
			ret += "<li class='drug'>"+i+": ";
			ret += json2html(json[i]);
		}else{
			ret += "<li>"+i+": ";
			ret += json[i];
		}
        ret += "</li>";
    }
    ret += "</ul>";
    return ret;
}

$(window).load(function(){
	$(".searchBtn").click(function(){
		$.get("http://api.fda.gov/"+$("select[name=searchdd]").val()+"/event.json?search="+$("input[name=searchtf]").val(), function(data){
			var tmp = json2html(data);
			$(".noresult").hide();
			$(".yesresult").show();			
			$("#tree1").html(tmp);
			addsomething();
		}).fail(function(){
			$("#tree1").html("");
			$(".noresult").show();
			$(".yesresult").hide();
		});
	});
});