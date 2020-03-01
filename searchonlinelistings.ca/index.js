$(document).ready(()=>{
	const mls = $("[name=mls-listing-id]").val();
	const rltlink = "https://www.realtor.ca/map#ReferenceNumber=" + mls
	const rewlink = "https://www.rew.ca/properties/search/results?query=" + mls

	const place = 	$(".info-container")
	place.prepend("<a href='"+rltlink +"'>Realtor.ca | </a>")
	place.prepend("<a href='"+rewlink +"'>REW | </a>")
});
