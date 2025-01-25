// Selecting necessary elements
const fileInput = document.getElementById("file-upload");
const photoPreview = document.querySelector(".uploaded-photo-preview");
const noPhotoText = document.querySelector(".uploaded-nophoto-text");
const deleteIcon = document.querySelector(".delete-photo-icon");

// Event listener for file upload
fileInput.addEventListener("change", function () {
  const file = this.files[0];

  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Set uploaded image as background
      photoPreview.style.backgroundImage = `url(${e.target.result})`;
      photoPreview.style.backgroundSize = "cover";
      photoPreview.style.backgroundPosition = "center";
    };
    reader.readAsDataURL(file);

    // Hide the "no photo" text and show delete icon
    noPhotoText.style.display = "none";
    deleteIcon.style.background = "#fff";
  }
});

// Event listener for deleting the uploaded image
deleteIcon.addEventListener("click", function () {
  // Clear the preview image
  photoPreview.style.backgroundImage = "none";

  // Show the "no photo" text and hide delete icon
  noPhotoText.style.display = "block";
  deleteIcon.style.background = "transparent";

  // Clear the file input value
  fileInput.value = "";
});
