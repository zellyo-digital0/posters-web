//Ensure Placeholder Works
document.addEventListener("DOMContentLoaded", function () {
  const dateInput = document.getElementById("datepicker");

  dateInput.addEventListener("input", function () {
    if (this.value) {
      this.style.color = "#5a5a5a"; // Selected text color
    } else {
      this.style.color = "#999"; // Placeholder color
    }
  });

  dateInput.addEventListener("focus", function () {
    this.setAttribute("placeholder", "");
  });

  dateInput.addEventListener("blur", function () {
    if (!this.value) {
      this.setAttribute("placeholder", "Select a date");
    }
  });
});
// upload area
  const uploadArea = document.getElementById("uploadArea");
  const fileInput = document.getElementById("fileInput");
  const fileNameDisplay = document.getElementById("file-name");

  uploadArea.addEventListener("click", () => {
    fileInput.click();
  });

  fileInput.addEventListener("change", (event) => {
    showFileName(event.target.files);
  });

  uploadArea.addEventListener("dragover", (event) => {
    event.preventDefault();
    uploadArea.classList.add("active");
  });

  uploadArea.addEventListener("dragleave", () => {
    uploadArea.classList.remove("active");
  });

  uploadArea.addEventListener("drop", (event) => {
    event.preventDefault();
    uploadArea.classList.remove("active");

    let files = event.dataTransfer.files;
    fileInput.files = files; // Assign files to input
    showFileName(files);
  });

  function showFileName(files) {
    if (files.length > 0) {
      fileNameDisplay.textContent = `Selected: ${files[0].name}`;
    } else {
      fileNameDisplay.textContent = "";
    }
  }