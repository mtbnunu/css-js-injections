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
    
    })