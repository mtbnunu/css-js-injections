(()=>{
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
})();
