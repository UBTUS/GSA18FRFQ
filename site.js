var statePairs = [
    { name: 'ALABAMA', abbreviation: 'AL'},
    { name: 'ALASKA', abbreviation: 'AK'},
    { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
    { name: 'ARIZONA', abbreviation: 'AZ'},
    { name: 'ARKANSAS', abbreviation: 'AR'},
    { name: 'CALIFORNIA', abbreviation: 'CA'},
    { name: 'COLORADO', abbreviation: 'CO'},
    { name: 'CONNECTICUT', abbreviation: 'CT'},
    { name: 'DELAWARE', abbreviation: 'DE'},
    { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
    { name: 'FEDERATED STATES OF MICRONESIA', abbreviation: 'FM'},
    { name: 'FLORIDA', abbreviation: 'FL'},
    { name: 'GEORGIA', abbreviation: 'GA'},
    { name: 'GUAM', abbreviation: 'GU'},
    { name: 'HAWAII', abbreviation: 'HI'},
    { name: 'IDAHO', abbreviation: 'ID'},
    { name: 'ILLINOIS', abbreviation: 'IL'},
    { name: 'INDIANA', abbreviation: 'IN'},
    { name: 'IOWA', abbreviation: 'IA'},
    { name: 'KANSAS', abbreviation: 'KS'},
    { name: 'KENTUCKY', abbreviation: 'KY'},
    { name: 'LOUISIANA', abbreviation: 'LA'},
    { name: 'MAINE', abbreviation: 'ME'},
    { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
    { name: 'MARYLAND', abbreviation: 'MD'},
    { name: 'MASSACHUSETTS', abbreviation: 'MA'},
    { name: 'MICHIGAN', abbreviation: 'MI'},
    { name: 'MINNESOTA', abbreviation: 'MN'},
    { name: 'MISSISSIPPI', abbreviation: 'MS'},
    { name: 'MISSOURI', abbreviation: 'MO'},
    { name: 'MONTANA', abbreviation: 'MT'},
    { name: 'NEBRASKA', abbreviation: 'NE'},
    { name: 'NEVADA', abbreviation: 'NV'},
    { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
    { name: 'NEW JERSEY', abbreviation: 'NJ'},
    { name: 'NEW MEXICO', abbreviation: 'NM'},
    { name: 'NEW YORK', abbreviation: 'NY'},
    { name: 'NORTH CAROLINA', abbreviation: 'NC'},
    { name: 'NORTH DAKOTA', abbreviation: 'ND'},
    { name: 'NORTHERN MARIANA ISLANDS', abbreviation: 'MP'},
    { name: 'OHIO', abbreviation: 'OH'},
    { name: 'OKLAHOMA', abbreviation: 'OK'},
    { name: 'OREGON', abbreviation: 'OR'},
    { name: 'PALAU', abbreviation: 'PW'},
    { name: 'PENNSYLVANIA', abbreviation: 'PA'},
    { name: 'PUERTO RICO', abbreviation: 'PR'},
    { name: 'RHODE ISLAND', abbreviation: 'RI'},
    { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
    { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
    { name: 'TENNESSEE', abbreviation: 'TN'},
    { name: 'TEXAS', abbreviation: 'TX'},
    { name: 'UTAH', abbreviation: 'UT'},
    { name: 'VERMONT', abbreviation: 'VT'},
    { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
    { name: 'VIRGINIA', abbreviation: 'VA'},
    { name: 'WASHINGTON', abbreviation: 'WA'},
    { name: 'WEST VIRGINIA', abbreviation: 'WV'},
    { name: 'WISCONSIN', abbreviation: 'WI'},
    { name: 'WYOMING', abbreviation: 'WY' }
];
var locationCriteria = '"Nationwide"';
var searchUrl = "";

$.extend($.easing,
{
    def: 'easeOutQuad',
    easeInOutExpo: function (x, t, b, c, d) {
        if (t==0) return b;
        if (t==d) return b+c;
        if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
        return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
    }
});

function parameterGet(name){
   if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
      return decodeURIComponent(name[1]);
}

(function( $ ) {

    var settings;
    var disableScrollFn = false;
    var navItems;
    var navs = {}, sections = {};

    $.fn.navScroller = function(options) {
        settings = $.extend({
            scrollToOffset: 170,
            scrollSpeed: 800,
            activateParentNode: true,
        }, options );
        navItems = this;

        //attatch click listeners
    	navItems.on('click', function(event){
    		event.preventDefault();
            var navID = $(this).attr("href").substring(1);
            disableScrollFn = true;
            activateNav(navID);
            populateDestinations(); //recalculate these!
        	$('html,body').animate({scrollTop: sections[navID] - settings.scrollToOffset},
                settings.scrollSpeed, "easeInOutExpo", function(){
                    disableScrollFn = false;
                }
            );
    	});

        //populate lookup of clicable elements and destination sections
        populateDestinations(); //should also be run on browser resize, btw

        // setup scroll listener
        $(document).scroll(function(){
            if (disableScrollFn) { return; }
            var page_height = $(window).height();
            var pos = $(this).scrollTop();
            for (i in sections) {
                if ((pos + settings.scrollToOffset >= sections[i]) && sections[i] < pos + page_height){
                    activateNav(i);
                }
            }
        });
    };

    function populateDestinations() {
        navItems.each(function(){
            var scrollID = $(this).attr('href').substring(1);
            navs[scrollID] = (settings.activateParentNode)? this.parentNode : this;
            sections[scrollID] = $(document.getElementById(scrollID)).offset().top;
        });
    }

    function activateNav(navID) {
        for (nav in navs) { $(navs[nav]).removeClass('active'); }
        $(navs[navID]).addClass('active');
    }
})( jQuery );

function generateUSMap() {
	var $usmap = $('#usmap');
	
	$usmap.width($usmap.parent().width() * .8);
	$usmap.height($usmap.width() * .68);
	$usmap.usmap({
		'stateStyles': { fill: '#5AAC00', 'stroke': 'black', 'stroke-width': 2 },
		'stateHoverStyles': { fill: '#7BEC00' },
		showLabels: true,
		'mouseoverState': {
			'HI': function (event, data) {
				//return false;
			}
		},

		'click': function (event, data) {
			$('html, body').animate({
				scrollTop: $("#searchBox").siblings("h1").offset().top - 75
			}, 500);
			var fullStateName = $.grep(statePairs, function(e) {
				return e.abbreviation === data.name; 
			})[0].name;
			locationCriteria =  '"' + data.name + '"+distribution_pattern:"' + fullStateName + '"+distribution_pattern:"Nationwide"' ;
			$('#searchAreaDisplay').html('Searching ' + fullStateName);
		}
	});
}

$(document).ready(function (){

    $('nav li a').navScroller();

    //section divider icon click gently scrolls to reveal the section
	$(".sectiondivider").on('click', function(event) {
    	$('html,body').animate({scrollTop: $(event.target.parentNode).offset().top - 50}, 400, "linear");
	});

    //links going to other sections nicely scroll
	$(".container a").each(function(){
        if ($(this).attr("href").charAt(0) == '#'){
            $(this).on('click', function(event) {
        		event.preventDefault();
                var target = $(event.target).closest("a");
                var targetHight =  $(target.attr("href")).offset().top
            	$('html,body').animate({scrollTop: targetHight - 170}, 800, "easeInOutExpo");
            });
        }
	});
	
	generateUSMap();
	
	$(window).on('resize', function(){
		$('#usmap').replaceWith('<div id="usmap"></div>');
		generateUSMap();
	});
	
	$('#searchButton').click(function() {		
		$('html, body').animate({
			scrollTop: $("#themeTable").offset().top - 150
		}, 500);
		
		searchUrl = 'https://api.fda.gov/food/enforcement.json?search=status:"Ongoing"+distribution_pattern:' + locationCriteria + '+AND+';
		if ($('#radioDesc').is(':checked')) {
			searchUrl += "product_description:" + '"' + $('#searchTextbox').val() + '"';
		} else if ($('#radioManu').is(':checked')) {
			searchUrl += "recalling_firm:" + '"' + $('#searchTextbox').val() + '"+' + '"' + $('#searchTextbox').val() + '"';
		} else if ($('#radioBatc').is(':checked')) {
			searchUrl += "code_info:" + '"' + $('#searchTextbox').val() + '"+' + '"' + $('#searchTextbox').val() + '"';
		} else {
			searchUrl += '"' + $('#searchTextbox').val() + '"';
		}
		searchUrl += "&limit=10";
		
		$('#shareDiv').show();
		$('#searchURL').val('http://ec2-52-27-70-124.us-west-2.compute.amazonaws.com?search=' + encodeURIComponent(searchUrl) + "/#information");

		$.get(searchUrl,
			function (data) {
				$("#table_body").empty();
				if (data.results.length > 0) {
					$.each(data.results, function (index, datab) {
						$("#table_body")
							.append($('<tr>')
							.append($('<td>').html(datab.product_description))
							.append($('<td>').html(datab.reason_for_recall))
							.append($('<td>').html(datab.recall_initiation_date))
							.append($('<td>').html(datab.recall_number))
							.append($('<td>').html(datab.recalling_firm))
							.append($('<td>').html(datab.classification))
							.append($('<td>').html(datab.code_info))
							.append($('<td>').html(datab.distribution_pattern))
							);

					});
				} else {
					$("#table_body").append($('<tr>').html('<td colspan="8">Your query yielded no results.</td>'));
				}
			},
			'json'
		).fail(function() {
			$("#table_body").empty();
			$("#table_body").append($('<tr>').html('<td colspan="8">Your query yielded no results.</td>'));
		});
	});
	
	$('#searchTextbox').keyup(function(e) {
		if (e.keyCode == 13) {
			$('html, body').animate({
				scrollTop: $("#themeTable").offset().top - 150
			}, 500);
			
			searchUrl = 'https://api.fda.gov/food/enforcement.json?search=status:"Ongoing"+distribution_pattern:' + locationCriteria + '+AND+';
			if ($('#radioDesc').is(':checked')) {
				searchUrl += "product_description:" + '"' + $('#searchTextbox').val() + '"';
			} else if ($('#radioManu').is(':checked')) {
				searchUrl += "product_description:" + '"' + $('#searchTextbox').val() + '"+' + "recalling_firm:" + '"' + $('#searchTextbox').val() + '"';
			} else if ($('#radioBatc').is(':checked')) {
				searchUrl += "code_info:" + '"' + $('#searchTextbox').val() + '"+' + "product_description:" + '"' + $('#searchTextbox').val() + '"';
			} else {
				searchUrl += '"' + $('#searchTextbox').val() + '"';
			}
			searchUrl += "&limit=10";
			
			$('#shareDiv').show();
			$('#searchURL').val('http://ec2-52-27-70-124.us-west-2.compute.amazonaws.com?search=' + encodeURIComponent(searchUrl) + "/#information");

			$.get(searchUrl,
				function (data) {
					$("#table_body").empty();
					if (data.results.length > 0) {
						$.each(data.results, function (index, datab) {
							$("#table_body")
								.append($('<tr>')
								.append($('<td>').html(datab.product_description))
								.append($('<td>').html(datab.reason_for_recall))
								.append($('<td>').html(datab.recall_initiation_date))
								.append($('<td>').html(datab.recall_number))
								.append($('<td>').html(datab.recalling_firm))
								.append($('<td>').html(datab.classification))
								.append($('<td>').html(datab.code_info))
								.append($('<td>').html(datab.distribution_pattern))
								);

						});
					} else {
						$("#table_body").append($('<tr>').html('<td colspan="8">Your query yielded no results.</td>'));
					}
				},
				'json'
			).fail(function() {
				$("#table_body").empty();
				$("#table_body").append($('<tr>').html('<td colspan="8">Your query yielded no results.</td>'));
			});
		}
	});
	
	$('#rssFeed').FeedEk({
		FeedUrl: 'http://www.fda.gov/AboutFDA/ContactFDA/StayInformed/RSSFeeds/Recalls/rss.xml',
		TitleLinkTarget: '_blank'
	});
	
	var sharedLink = parameterGet('search');
	if (sharedLink) {
		$('html, body').animate({
			scrollTop: $("#themeTable").offset().top - 150
		}, 500);
		
		searchUrl = sharedLink;
		
		$('#shareDiv').show();
		$('#searchURL').val('http://ec2-52-27-70-124.us-west-2.compute.amazonaws.com?search=' + encodeURIComponent(searchUrl) + "/#information");

		$.get(searchUrl,
			function (data) {
				$("#table_body").empty();
				if (data.results.length > 0) {
					$.each(data.results, function (index, datab) {
						$("#table_body")
							.append($('<tr>')
							.append($('<td>').html(datab.product_description))
							.append($('<td>').html(datab.reason_for_recall))
							.append($('<td>').html(datab.recall_initiation_date))
							.append($('<td>').html(datab.recall_number))
							.append($('<td>').html(datab.recalling_firm))
							.append($('<td>').html(datab.classification))
							.append($('<td>').html(datab.code_info))
							.append($('<td>').html(datab.distribution_pattern))
							);

					});
				} else {
					$("#table_body").append($('<tr>').html('<td colspan="8">Your query yielded no results.</td>'));
				}
			},
			'json'
		).fail(function() {
			$("#table_body").empty();
			$("#table_body").append($('<tr>').html('<td colspan="8">Your query yielded no results.</td>'));
		});
	}
});

