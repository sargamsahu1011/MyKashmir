// Sample Alerts
const alerts = [
    { message: "Curfew in Lal Chowk area. Stay indoors!", active: true },
    { message: "Route to Pahalgam is safe and open.", active: false }
];

function loadAlerts() {
    const alertBox = document.getElementById('alertMessages');
    const activeAlerts = alerts.filter(alert => alert.active);

    if (activeAlerts.length > 0) {
        alertBox.innerHTML = activeAlerts.map(alert => `<p>${alert.message}</p>`).join('');
        alertBox.style.color = 'red';

        // Pop-up alert
        activeAlerts.forEach(alert => {
            alertUser(alert.message);
        });

    } else {
        alertBox.innerHTML = "No active alerts.";
        alertBox.style.color = 'green';
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
    banner.innerText = message;

    document.body.appendChild(banner);

    setTimeout(() => {
        banner.remove();
    }, 10000);
}

// Data for regions
const regionData = {
  srinagar: {
    name: "Srinagar",
    description: "Capital city with Dal Lake and Mughal gardens.",
    emergencyContacts: [
      { type: "Police", number: "0194-2477568" },
      { type: "Hospital", number: "0194-2452052" },
      { type: "Fire", number: "101" },
    ],
  },
  gulmarg: {
    name: "Gulmarg",
    description: "Famous for skiing and gondola rides.",
    emergencyContacts: [
      { type: "Police", number: "0194-1234567" },
      { type: "Hospital", number: "0194-7654321" },
      { type: "Fire", number: "102" },
    ],
  },
  pahalgam: {
    name: "Pahalgam",
    description: "Known as the Valley of Shepherds.",
    emergencyContacts: [
      { type: "Police", number: "0194-9876543" },
      { type: "Hospital", number: "0194-5678901" },
      { type: "Fire", number: "103" },
    ],
  },
  sonmarg: {
    name: "Sonamarg",
    description: "Meadow of Gold with scenic beauty.",
    emergencyContacts: [
      { type: "Police", number: "0194-6543210" },
      { type: "Hospital", number: "0194-4321098" },
      { type: "Fire", number: "104" },
    ],
  },
  kupwara: {
    name: "Kupwara",
    description: "Scenic beauty at the border.",
    emergencyContacts: [
      { type: "Police", number: "0194-1111111" },
      { type: "Hospital", number: "0194-2222222" },
      { type: "Fire", number: "105" },
    ],
  },
  baramulla: {
    name: "Baramulla",
    description: "Historic town on Jhelum River.",
    emergencyContacts: [
      { type: "Police", number: "0194-3333333" },
      { type: "Hospital", number: "0194-4444444" },
      { type: "Fire", number: "106" },
    ],
  },
};

// Add click event listeners to cards
document.querySelectorAll(".card").forEach((card) => {
  card.addEventListener("click", () => {
    const regionId = card.id;
    const region = regionData[regionId];

    if (region) {
      // Display region details dynamically
      const regionDetails = `
        <h2>${region.name}</h2>
        <p>${region.description}</p>
        <h3>Emergency Contacts:</h3>
        <ul>
          ${region.emergencyContacts
            .map(
              (contact) =>
                `<li><strong>${contact.type}:</strong> ${contact.number}</li>`
            )
            .join("")}
        </ul>
        <button onclick="goBack()">Back</button>
      `;

      // Replace the content of the main section
      document.body.innerHTML = `<div class="region-details">${regionDetails}</div>`;
    }
  });
});

// Go back to the main page
function goBack() {
  location.reload();
}

// Toggle Dark/Light Theme
document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Feedback Form Handling
document.getElementById('feedback-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const story = document.getElementById('story').value.trim();

    if (name && story) {
        const feedbackMessages = document.getElementById('feedback-messages');
        const feedbackEntry = document.createElement('div');
        feedbackEntry.innerHTML = `<strong>${name}:</strong> <p>${story}</p>`;
        feedbackEntry.style.backgroundColor = '#fff';
        feedbackEntry.style.padding = '10px';
        feedbackEntry.style.marginTop = '10px';
        feedbackEntry.style.borderRadius = '5px';
        feedbackMessages.appendChild(feedbackEntry);

        document.getElementById('feedback-form').reset();
    }
});

// Load alerts when page loads
window.onload = loadAlerts;