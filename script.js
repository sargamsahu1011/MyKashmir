// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function toggleTheme() {
  document.body.classList.toggle('dark-theme');
  
  if (document.body.classList.contains('dark-theme')) {
    themeIcon.classList.remove('fa-sun');
    themeIcon.classList.add('fa-moon');
    localStorage.setItem('theme', 'dark');
  } else {
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
    localStorage.setItem('theme', 'light');
  }
}

// Check for saved theme preference
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-theme');
  themeIcon.classList.remove('fa-sun');
  themeIcon.classList.add('fa-moon');
}

themeToggle.addEventListener('click', toggleTheme);

// Sample Alerts
const alerts = [
  { message: "Curfew in Lal Chowk area. Stay indoors!", active: true },
  { message: "Route to Pahalgam is safe and open.", active: false }
];

function loadAlerts() {
  const alertBox = document.querySelector('.alert-banner');
  const activeAlerts = alerts.filter(alert => alert.active);

  if (activeAlerts.length > 0) {
    alertBox.innerHTML = activeAlerts.map(alert => `${alert.message}`).join('<br>');
    alertBox.style.backgroundColor = '#ff4d4d';

    // Pop-up alert
    activeAlerts.forEach(alert => {
      alertUser(alert.message);
    });
  } else {
    alertBox.innerHTML = "No active alerts at this time. All areas are safe for travel.";
    alertBox.style.backgroundColor = '#4CAF50';
  }
}

function alertUser(message) {
  const banner = document.createElement('div');
  banner.style.backgroundColor = '#ff4d4d';
  banner.style.color = 'white';
  banner.style.padding = '15px';
  banner.style.position = 'fixed';
  banner.style.top = '0';
  banner.style.width = '100%';
  banner.style.textAlign = 'center';
  banner.
