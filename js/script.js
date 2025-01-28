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
// Configure upload areas
const uploadConfig = [
  { id: 'mainUploadArea', inputId: 'mainImageInput', displayId: 'mainFileName' },
  { id: 'imageUpload1', inputId: 'imageInput1', displayId: 'imageFileName1' },
  { id: 'imageUpload2', inputId: 'imageInput2', displayId: 'imageFileName2' },
  { id: 'videoUpload1', inputId: 'videoInput1', displayId: 'videoFileName1' },
  { id: 'videoUpload2', inputId: 'videoInput2', displayId: 'videoFileName2' }
];

// Initialize all upload areas
uploadConfig.forEach(config => {
  const uploadArea = document.getElementById(config.id);
  const fileInput = document.getElementById(config.inputId);
  const fileNameDisplay = document.getElementById(config.displayId);

  // Click handler
  uploadArea.addEventListener('click', () => fileInput.click());

  // Input change handler
  fileInput.addEventListener('change', (e) => showFileName(e.target.files, fileNameDisplay));

  // Drag and drop handlers
  uploadArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    uploadArea.classList.add('active');
  });

  uploadArea.addEventListener('dragleave', () => {
    uploadArea.classList.remove('active');
  });

  uploadArea.addEventListener('drop', (e) => {
    e.preventDefault();
    uploadArea.classList.remove('active');
    fileInput.files = e.dataTransfer.files;
    showFileName(fileInput.files, fileNameDisplay);
  });
});

function showFileName(files, displayElement) {
  if (files.length > 0) {
    displayElement.textContent = `Selected: ${files[0].name}`;
  } else {
    displayElement.textContent = '';
  }
}