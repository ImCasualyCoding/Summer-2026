// --- Global Variables & References ---
let intervalId;
let timeoutId;
let scaleFactor = 1;
let scaleDirection = 1;

const modal = document.getElementById('thanks-modal');
const modalText = document.getElementById('modal-text-container');
const modalImage = document.getElementById('modal-img');
const closeModalBtn = document.getElementById('close-modal-btn');
const reduceMotionBtn = document.getElementById('reduce-motion-btn');

// --- Image Animation Function (setInterval) ---
function animateImage() {
  if (document.body.classList.contains('reduce-motion')) {
    return; // Skip animation if "Reduce Motion" is enabled
  }

  intervalId = setInterval(() => {
    // Pulse image size between 1.0x and 1.2x
    if (scaleFactor >= 1.2) {
      scaleDirection = -0.02;
    } else if (scaleFactor <= 1.0) {
      scaleDirection = 0.02;
    }
    scaleFactor += scaleDirection;
    modalImage.style.transform = `scale(${scaleFactor})`;
  }, 20);
}

// --- Toggle / Display Modal Function ---
function toggleModal(person) {
  // Update modal text dynamically using object data
  modalText.textContent = `Thank you, ${person.name} from ${person.hometown}, for supporting our cause!`;

  // Display modal overlay
  modal.style.display = 'flex';

  // Start image animation
  animateImage();

  // Hide modal automatically after 4 seconds (setTimeout)
  timeoutId = setTimeout(() => {
    closeModal();
  }, 4000);
}

// --- Close Modal Function ---
function closeModal() {
  modal.style.display = 'none';

  // Clear animation interval and timeout
  clearInterval(intervalId);
  clearTimeout(timeoutId);

  // Reset scale factor
  scaleFactor = 1;
  modalImage.style.transform = 'scale(1)';
}

// --- Form Handler Update ---
function addSignature(event) {
  event.preventDefault();

  // Get input values
  const nameInput = document.getElementById('name');
  const hometownInput = document.getElementById('hometown');
  const emailInput = document.getElementById('email');

  // Save submission data into a 'person' object
  const person = {
    name: nameInput.value,
    hometown: hometownInput.value,
    email: emailInput.value
  };

  // Add signature logic to DOM here (your existing signature code)...

  // Call modal with person object
  toggleModal(person);

  // Clear form inputs
  nameInput.value = '';
  hometownInput.value = '';
  emailInput.value = '';
}

// --- Stretch Feature: Reduce Motion Toggle ---
function toggleReduceMotion() {
  document.body.classList.toggle('reduce-motion');
  
  if (document.body.classList.contains('reduce-motion')) {
    reduceMotionBtn.textContent = "Enable Motion";
    clearInterval(intervalId);
    modalImage.style.transform = 'scale(1)';
  } else {
    reduceMotionBtn.textContent = "Reduce Motion";
  }
}

// --- Event Listeners ---
closeModalBtn.addEventListener('click', closeModal);
reduceMotionBtn.addEventListener('click', toggleReduceMotion);

// Attach addSignature to your form's submit event listener
const petitionForm = document.getElementById('sign-petition');
petitionForm.addEventListener('submit', addSignature);