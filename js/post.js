// Selecting necessary elements
const fileInput = document.getElementById("file-upload");
const photoPreview = document.querySelector(".uploaded-photo-preview");
const noPhotoText = document.querySelector(".uploaded-nophoto-text");
const deleteIcon = document.querySelector(".delete-photo-icon");

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

    noPhotoText.style.display = "none";
    deleteIcon.style.background = "#fff";
  }
});

deleteIcon.addEventListener("click", function () {
  photoPreview.style.backgroundImage = "none";

  noPhotoText.style.display = "block";
  deleteIcon.style.background = "transparent";

  fileInput.value = "";
});
