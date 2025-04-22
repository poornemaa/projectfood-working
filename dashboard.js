/*const username = localStorage.getItem('username');
const userType = localStorage.getItem('user_type');
const userId = localStorage.getItem('user_id');
const token = localStorage.getItem('token');

if (!token) {
  alert('You must be logged in!');
  window.location.href = '/';
}

// Update Welcome Text
document.getElementById('welcomeText').innerText = `Welcome, ${username}! You are logged in as ${userType}.`;

// Hide "Add Donation" and "Certification" button if recipient
if (userType.toLowerCase() !== 'donor') {
  document.getElementById('addDonationBtn').style.display = 'none';
  document.getElementById('certificationsBtn').style.display = 'none';
}

// Logout Button
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.clear();
  window.location.href = '/';
});*/

document.addEventListener('DOMContentLoaded', () => {
  const username = localStorage.getItem('username');
  const userType = localStorage.getItem('user_type');
  const userId = localStorage.getItem('user_id');
  const token = localStorage.getItem('token');

  if (!token) {
    alert('You must be logged in!');
    window.location.href = '/';
  }

  document.getElementById('welcomeText').innerText = `Welcome, ${username}! You are logged in as ${userType}.`;

  /*if (userType.toLowerCase() !== 'donor') {
    document.getElementById('addDonationBtn').style.display = 'none';
    document.getElementById('certificationsBtn').style.display = 'none';
  }*/

});

// Load navbar then attach logout logic
fetch('navbar.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('navbarContainer').innerHTML = data;

    // ✅ Attach logout button after navbar is loaded
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        localStorage.clear();
        alert('Logged out successfully!');
        window.location.href = '/index.html'; // Change this if needed
      });
    }
  });

