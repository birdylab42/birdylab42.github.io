// start the image gallery
function activateGallery() {

// select all thumbnails
    let thumbnails  = document.querySelectorAll("#gallery-thumbs div img");
    let mainImage   = document.querySelector("#gallery-photo img");
    let galleryInfo = document.querySelector("#gallery-info");
    let imageTitle  = galleryInfo.querySelector(".title");
    let imageDesc   = galleryInfo.querySelector(".description");
// add event listeners to the thumbnails
thumbnails.forEach(function(thumbnail){
    thumbnail.addEventListener("click", function() {
        let newImageSrc   = thumbnail.dataset.largeVersion;
        imageTitle.innerHTML = thumbnail.dataset.title;
        imageDesc.innerHTML  = thumbnail.dataset.description;
        // change current image indicator
        document.querySelector(".current").classList.remove("current");
        thumbnail.parentNode.classList.add("current");

        // code to set clicked image as main image
        mainImage.setAttribute("src", newImageSrc);
        mainImage.setAttribute("alt", thumbnail.alt);


    });
});
}
