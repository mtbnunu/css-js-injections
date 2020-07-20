(function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        $ = jQuery;
	    $(document).ready(()=>{
		function contains(selector, text) {
		  var elements = document.querySelectorAll(selector);
		  return Array.from(elements).filter(function(element) {
		    return RegExp(text).test(element.textContent);
		  });
		}
		const mls = contains(".info-content","MLS")[0].querySelector(".info-data").innerHTML
		const rltlink = "https://www.realtor.ca/map#Area=" + mls + "&ApplicationId=1&RecordsPerPage=9&Page=1"
		const rewlink = "https://www.rew.ca/properties/search/results?query=" + mls

		const place = 	$(".detail-info")
		place.prepend("<a href='"+rltlink +"'>Realtor.ca | </a>")
		place.prepend("<a href='"+rewlink +"'>REW | </a>")
	});
    };
    document.head.appendChild(e);
})(document.createElement('script'), '//code.jquery.com/jquery-latest.min.js')
