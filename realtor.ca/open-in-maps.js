$(document).ready(()=>{
    const listingAddress = window.document.getElementById("listingAddress");
    if(listingAddress){
        const address = listingAddress.innerText.replace("\n"," ");
        const link = "https://www.google.com/maps?t=k&q=" + encodeURIComponent(address);
        const linkFrag = window.document.createElement("a");
        linkFrag.href = link;
        linkFrag.target = "_blank";
        linkFrag.text = "View on Google Maps"
        listingAddress.parentNode.insertBefore(linkFrag, listingAddress.nextSibling);
    }

	//add details to modal
	const price = $("#listingPrice").text();
	const bb = $("#BedroomIcon .listingIconNum").text() + "/" + $("#BathroomIcon .listingIconNum").text();
	const space = $("#propertyDetailsSectionVal_InteriorFloorSpace .propertyDetailsSectionContentValue").text();
	$(".m_ryl_sld_hdr_address")[0].append("|  " + price + " | " + bb + " | " + space)

	//link to other sites
	const mls = $("#MLNumberVal").val();

	const sollink = "https://www.searchonlinelistings.ca/listing?key=" + mls
	const rewlink = "https://www.rew.ca/properties/search/results?query=" + mls

	const place = $("#listingDetailsTabsCon");
	place.prepend("<a href='"+sollink +"'>SOL | </a>")
	place.prepend("<a href='"+rewlink +"'>REW | </a>")
})
