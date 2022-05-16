$(document).ready(()=>{
	const listingAddress = window.document.getElementById("listingAddress");
	
	const openLink = (link)=>{
	    const linkFrag = window.document.createElement("a");
	    linkFrag.href = link;
	    linkFrag.target = "_blank";
	    linkFrag.click();
	}
	
	const addLink = (text, link, onclick)=>{
		console.log(link, text)
		const linkDivFrag = window.document.createElement("div");
		
	    const linkFrag = window.document.createElement("a");
	    linkFrag.href = link;
	    linkFrag.target = "_blank";
	    linkFrag.addEventListener("click",onclick);
	    linkFrag.text = text
	    
	    linkDivFrag.appendChild(linkFrag)
	    
	    listingAddress.parentNode.insertBefore(linkDivFrag, listingAddress.nextSibling);
	}
	
	if(listingAddress){
	
	    // add maps link
	    const address = listingAddress.innerText.replace("\n"," ");
	    addLink("View on Google Maps", "https://www.google.com/maps/place/" + encodeURIComponent(address))


	    // add bc assessment link

		addLink("BC Assessment","#",(e)=>{
			e.preventDefault();
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
			    openLink(bcassessmentlink);
			}
		    });

		})
		
		//add floodmaps link
		
		const directionButton = document.getElementById("listingDirectionsBtn");
		if(directionButton && directionButton.href){
			const directionUrl = new URL(directionButton.href);
			const latLong = directionUrl.searchParams.get("destination")?.split(",")
			const floodmapsUrl = `https://coastal.climatecentral.org/map/17/${latLong[1]}/${latLong[0]}/?theme=sea_level_rise&map_type=year&basemap=roadmap&contiguous=true&elevation_model=best_available&forecast_year=2050&pathway=rcp45&percentile=p50&refresh=true&return_level=return_level_1&rl_model=tebaldi_2012&slr_model=kopp_2014`
			console.log(floodmapsUrl);
			addLink("Flood Map", floodmapsUrl)
		}
		
	}

	//add details to modal
	const price = $("#listingPrice").text();
	const bb = $("#BedroomIcon .listingIconNum").text() + "/" + $("#BathroomIcon .listingIconNum").text();
	const spaceIn = $("#propertyDetailsSectionVal_InteriorFloorSpace .propertyDetailsSectionContentValue").text();
	const spaceOut = $("#propertyDetailsSectionContentSubCon_LandSize .propertyDetailsSectionContentValue").text();
	$(".m_ryl_sld_hdr_address")[0].append("|  " + price + " | " + bb + " | " + spaceIn + " / " + spaceOut)

	//link to sol
	const mls = $("#MLNumberVal").text();

	// const sollink = "https://www.searchonlinelistings.ca/listing?key=" + mls
	// const rewlink = "https://www.rew.ca/properties/search/results?query=" + mls

	// const place = $("#listingDetailsTabsCon");
	// place.prepend("<a href='"+sollink +"'>SOL | </a>")
	// place.prepend("<a href='"+rewlink +"'>REW | </a>")
})
