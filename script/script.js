// Initialize the map and user location
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },
    zoom: 15,
  });

  if (navigator.geolocation) {
    navigator.geolocation.watchPosition(function (position) {
      const currentLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };

      const marker = new google.maps.Marker({
        position: currentLocation,
        map: map,
        title: "Your Location",
      });

      map.setCenter(currentLocation); // Center the map on user's location
    });
  }
}

// Store alerts in localStorage
const alerts = JSON.parse(localStorage.getItem("alerts") || "[]");

// Function to display alerts in the list
function displayAlerts() {
  const alertsContainer = document.getElementById("alerts-container");
  alertsContainer.innerHTML = "";

  alerts.forEach((alert, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Location:</strong> Lat: ${alert.latitude}, Lng: ${alert.longitude}<br>
      <strong>Message:</strong> ${alert.message}<br>
      <strong>Alert Type:</strong> ${alert.type}<br>
      <button onclick="deleteAlert(${index})">Delete Alert</button>
    `;
    alertsContainer.appendChild(li);
  });
}

// Function to add new alert
document.getElementById("alert-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const latitude = parseFloat(document.getElementById("latitude").value);
  const longitude = parseFloat(document.getElementById("longitude").value);
  const message = document.getElementById("alert-message").value;
  const type = document.getElementById("alert-type").value;

  const alert = {
    latitude,
    longitude,
    message,
    type,
  };

  alerts.push(alert);
  localStorage.setItem("alerts", JSON.stringify(alerts));

  displayAlerts();
  this.reset();
});

// Function to delete an alert
function deleteAlert(index) {
  alerts.splice(index, 1);
  localStorage.setItem("alerts", JSON.stringify(alerts));
  displayAlerts();
}

// Function to handle audio tone selection and save it to localStorage
document.getElementById("alert-tone").addEventListener("change", function (event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    if (file.type.startsWith("audio/")) {
      // Save the audio file URL to localStorage
      const audioURL = URL.createObjectURL(file);
      localStorage.setItem("alertTone", audioURL); // Store audio URL in localStorage

      // Update the alert tone variable
      alertTone = new Audio(audioURL);

      // Update the UI with the selected audio file name
      document.getElementById("tone-name").innerText = `Selected Tone: ${file.name}`;
    } else {
      displayAlertMessage("Please select a valid audio file.");
      alertTone = null;
    }
  }
});

// Retrieve the saved alert tone from localStorage when the page is loaded
window.addEventListener("load", function () {
  const savedAudioURL = localStorage.getItem("alertTone");
  if (savedAudioURL) {
    alertTone = new Audio(savedAudioURL);
    const fileName = savedAudioURL.split('/').pop(); // Extract file name from URL
    document.getElementById("tone-name").innerText = `Selected Tone: ${fileName}`;
  }
});

// Function to display alert messages
function displayAlertMessage(message) {
  const alertMessageElement = document.createElement("div");
  alertMessageElement.innerText = message;
  alertMessageElement.style.position = "absolute";
  alertMessageElement.style.top = "10px";
  alertMessageElement.style.left = "10px";
  alertMessageElement.style.background = "#ffcc00";
  alertMessageElement.style.padding = "10px";
  alertMessageElement.style.borderRadius = "5px";
  alertMessageElement.style.fontSize = "14px";
  alertMessageElement.style.zIndex = "1000";
  document.body.appendChild(alertMessageElement);

  setTimeout(() => {
    alertMessageElement.remove();
  }, 3000);
}

// Function to trigger the alert (audio or vibration)
function triggerAlert(alert) {
  if (alertTone) {
    // Play the saved audio tone
    alertTone.play().catch(error => {
      console.error("Error playing alert tone:", error);
      displayAlertMessage("Error playing alert tone.");
    });
  } else {
    const defaultTone = new Audio("hk.mp3");
    defaultTone.play().catch(error => {
      console.error("Error playing default tone:", error);
      displayAlertMessage("Error playing default tone.");
    });
  }

  // Trigger vibration if supported
  if (navigator.vibrate) {
    navigator.vibrate([1000]); // Vibrate for 1 second
  }
}

// Call the displayAlerts function to show existing alerts
displayAlerts();

// Watch position and check proximity with alerts
navigator.geolocation.watchPosition(
  function (position) {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;

    let nearestDistance = Infinity;

    alerts.forEach((alert) => {
      const distance = calculateDistance(userLat, userLng, alert.latitude, alert.longitude);
      nearestDistance = Math.min(nearestDistance, distance);

      // Trigger alert if within 10 meters
      if (distance <= 10) {
        triggerAlert(alert);
      }
    });

    // Update the nearest distance display
    updateDistanceDisplay(nearestDistance);
  },
  function (error) {
    console.error("Error getting location: ", error);
  },
  { enableHighAccuracy: true }
);

// Calculate distance in meters using Haversine formula
function calculateDistance(lat1, lng1, lat2, lng2) {
  const R = 6371000; // Radius of the Earth in meters
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLng = (lng2 - lng1) * (Math.PI / 180);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return R * c; // Distance in meters
}

// Update the nearest distance display
function updateDistanceDisplay(distance) {
  const distanceDisplay = document.getElementById("distance-display");
  if (!distanceDisplay) {
    const display = document.createElement("div");
    display.id = "distance-display";
    display.style.position = "absolute";
    display.style.bottom = "20px";
    display.style.right = "20px";
    display.style.background = "#fff";
    display.style.padding = "10px";
    display.style.borderRadius = "5px";
    display.style.boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.2)";
    display.style.fontSize = "14px";
    display.innerText = `Nearest Distance: ${Math.round(distance)} meters`;
    document.body.appendChild(display);
  } else {
    distanceDisplay.innerText = `Nearest Distance: ${Math.round(distance)} meters`;
  }
}

// Dark mode toggle functionality
document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
