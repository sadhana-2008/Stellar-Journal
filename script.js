var popupOverlay = document.querySelector(".popupoverlay");
var popupBox = document.querySelector(".popup-box");

var addPopupButton = document.getElementById("add-popup-button");

addPopupButton.addEventListener("click", function() {
    popupOverlay.style.display = "block";
    popupBox.style.display = "block";
});

var cancelPopup = document.getElementById("cancel-popup");

cancelPopup.addEventListener("click", function(event) {
    event.preventDefault();
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";
});

var container = document.querySelector(".container");
var addBlog = document.getElementById("add-blog");
var blogTitleInput = document.getElementById("blog-title-input");
var blogAuthorInput = document.getElementById("blog-author-input");
var blogContentInput = document.getElementById("blog-content-input");

addBlog.addEventListener("click", function(event) {
    event.preventDefault();
    var div = document.createElement("div");
    div.setAttribute("class", "blog-container");
    div.innerHTML = `<h2>${blogTitleInput.value}</h2>
                     <h5>${blogAuthorInput.value}</h5>
                     <p>${blogContentInput.value}</p>
                     <button onclick="deleteBlog(event)">Delete</button>`;
    container.append(div);
    popupOverlay.style.display = "none";
    popupBox.style.display = "none";

    // Reset inputs
    blogTitleInput.value = "";
    blogAuthorInput.value = "";
    blogContentInput.value = "";
});

function deleteBlog(event) {
    event.target.parentElement.remove();
}
