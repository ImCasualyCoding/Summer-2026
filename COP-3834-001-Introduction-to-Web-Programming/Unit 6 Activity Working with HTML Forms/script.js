const form = document.getElementById('songRequests');
const requestList = document.getElementById('requestList');

// Pre-fill the date input field with today's local date
document.getElementById('requestDate').valueAsDate = new Date();

const addSongRequest = (event) => {
  event.preventDefault();
  
  // Get inputs
  const name = document.getElementById('name').value;
  const song = document.getElementById('song').value;
  const artist = document.getElementById('artist').value;
  const genre = document.querySelector('input[name="genre"]:checked').value;
  const requestDate = document.getElementById('requestDate').value;
  const passphrase = document.getElementById('passphrase').value;
  
  // Remove empty message if it exists
  const emptyMessage = requestList.querySelector('.empty-message');
  if (emptyMessage) {
    emptyMessage.remove();
  }
  
  // Determine request count based on passphrase
  let iterations = 1;
  if (passphrase === 'narwhals777') {
    iterations = 3;
  }
  
  // Loop to add requests
  for (let i = 0; i < iterations; i++) {
    const requestPara = document.createElement('p');
    requestPara.className = 'request-item';
    requestPara.innerHTML = `<span class="req-name">${name}</span> has requested <span class="req-song">"${song}"</span> by <span class="req-artist">${artist}</span> <span class="req-badge">${genre}</span> <span class="req-date">${requestDate}</span>`;
    
    // Add micro-animation delay for visual flow
    requestPara.style.animationDelay = `${i * 0.1}s`;
    
    requestList.appendChild(requestPara);
  }
  
  // Reset form inputs except date
  document.getElementById('name').value = '';
  document.getElementById('song').value = '';
  document.getElementById('artist').value = '';
  document.getElementById('passphrase').value = '';
};

form.addEventListener('submit', addSongRequest);
