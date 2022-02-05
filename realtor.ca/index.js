$(document).ready(()=>{
	const listingAddress = window.document.getElementById("listingAddress");
	
	const addLink = (link, text)=>{
		console.log(link, text)
		const linkDivFrag = window.document.createElement("div");
		
	    const linkFrag = window.document.createElement("a");
	    linkFrag.href = link;
	    linkFrag.target = "_blank";
	    linkFrag.text = text
	    
	    linkDivFrag.appendChild(linkFrag)
	    
	    listingAddress.parentNode.insertBefore(linkDivFrag, listingAddress.nextSibling);
	}
	
	if(listingAddress){
	
	    // add maps link
	    const address = listingAddress.innerText.replace("\n"," ");
	    addLink("https://www.google.com/maps/place/" + encodeURIComponent(address), "View on Google Maps")


	    // add bc assessment link
	    const streetaddr = listingAddress.innerText.split("\n")[0]
	    fetch("https://api.allorigins.win/get?url="+"https://www.bcassessment.ca/Property/Search/GetByAddress?addr="+encodeURIComponent(streetaddr), 
	    {
		headers:{
		    'X-Requested-With': 'XMLHttpRequest'
		}
	    })
	    .then((response) => response.json())
	    .then((data) => {
		console.log(data)
		const jsonData = JSON.parse(data.contents)
		if(jsonData.length === 1){
			const bcassessmentlink = "https://www.bcassessment.ca//Property/Info/" + jsonData[0].value;
		    addLink(bcassessmentlink, "View on BCAssessment")
		}
	    });

	}

	//add details to modal
	const price = $("#listingPrice").text();
	const bb = $("#BedroomIcon .listingIconNum").text() + "/" + $("#BathroomIcon .listingIconNum").text();
	const space = $("#propertyDetailsSectionVal_InteriorFloorSpace .propertyDetailsSectionContentValue").text();
	$(".m_ryl_sld_hdr_address")[0].append("|  " + price + " | " + bb + " | " + space)

	//link to sol
	const mls = $("#MLNumberVal").text();

	// const sollink = "https://www.searchonlinelistings.ca/listing?key=" + mls
	// const rewlink = "https://www.rew.ca/properties/search/results?query=" + mls

	// const place = $("#listingDetailsTabsCon");
	// place.prepend("<a href='"+sollink +"'>SOL | </a>")
	// place.prepend("<a href='"+rewlink +"'>REW | </a>")
})
