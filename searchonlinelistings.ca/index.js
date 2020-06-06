(function() {
    function l(u, i) {
        var d = document;
        if (!d.getElementById(i)) {
            var s = d.createElement('script');
            s.src = u;
            s.id = i;
            d.body.appendChild(s);
        }
    }
    l('//code.jquery.com/jquery-3.2.1.min.js', 'jquery')
})();

$(document).ready(()=>{
	function contains(selector, text) {
	  var elements = document.querySelectorAll(selector);
	  return Array.from(elements).filter(function(element) {
	    return RegExp(text).test(element.textContent);
	  });
	}
	const mls = contains(".info-content","MLS Listing ID")[0].querySelector(".info-data").innerHTML
	
	const rltlink = "https://www.realtor.ca/map#ReferenceNumber=" + mls
	const rewlink = "https://www.rew.ca/properties/search/results?query=" + mls

	const place = 	$(".detail-info")
	place.prepend("<a href='"+rltlink +"'>Realtor.ca | </a>")
	place.prepend("<a href='"+rewlink +"'>REW | </a>")
});
