// Temperature Functionality
navigator.geolocation.getCurrentPosition(success, error);
function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  fetch(`https://wttr.in/${lat},${lon}?format=j1`)
    .then((res) => res.json())
    .then((data) => {
      const tempC = data.current_condition[0].temp_C;
      const desc = data.current_condition[0].weatherDesc[0].value;

      document.getElementById("temperature-degree").textContent = `${tempC}°C`;
      const city = data.nearest_area[0].areaName[0].value;
      document.getElementById("temperature-location").textContent = city;
    })
    .catch((err) => {
      document.getElementById("temperature-degree").textContent = `--°C`;
      document.getElementById(
        "temperature-location"
      ).textContent = `Weather load failed.`;
    });
}
function error() {
  document.getElementById("temperature-degree").textContent = `--°C`;
  document.getElementById(
    "temperature-location"
  ).textContent = `Location not available.`;
}

// Clock Functionality
const time = document.getElementById("display-Time");
setInterval(() => {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  const formattedHours = [
    hours < 10 ? "0" + hours : hours,
    minutes < 10 ? "0" + minutes : minutes,
    seconds < 10 ? "0" + seconds : seconds,
  ].join(":");

  time.textContent = formattedHours;
});

// Random Quotes
const quoteElement = document.getElementById("display-Quotes");
const quotes = [
  "Stay wild, moon child.",
  "Dream big, work hard.",
  "Create your own path.",
  "Less talk, more action.",
  "Be here now.",
  "Live, love, laugh.",
  "Do it with passion.",
  "Make your own magic.",
  "Be fearless in life.",
  "Chase the impossible.",
  "Start where you are.",
  "Enjoy the little things.",
  "Feel the fear, do it.",
  "Let it be.",
  "Choose joy today.",
  "Believe in your dreams.",
  "Live for the moment.",
  "Make it count.",
  "Work hard, stay humble.",
  "Be the change.",
  "Seek the unknown.",
  "Never stop dreaming.",
  "Stay curious, stay kind.",
  "Keep moving forward.",
  "Turn dreams into reality.",
  "Laugh more, stress less.",
  "Follow your own path.",
  "Dare to be different.",
  "You are enough.",
  "Start today, not tomorrow.",
  "Success is the journey.",
  "Make today amazing.",
  "Don’t stop believing.",
  "Live without regrets.",
  "The best is yet to come.",
  "Embrace the chaos.",
  "Be a light.",
  "Take the risk.",
  "Dream it, do it.",
  "Stay true to yourself.",
  "Create your own sunshine.",
  "Take it one step.",
  "Every moment counts.",
  "Learn from yesterday.",
  "Stay humble, hustle hard.",
  "Life begins at the end.",
  "Be brave, be bold.",
  "Happiness is a choice.",
];
function getRandomQuotes() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}
quoteElement.textContent = getRandomQuotes();

// Search Functionality
const searchForm = document.getElementById("search-bar");
const searchInput = document.getElementById("searchInput");
searchForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const query = searchInput.value.trim();

  if (query) {
    const urlPattern =
      /^(https?:\/\/)?([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,6}(\/[^\s]*)?$/;

    if (urlPattern.test(query)) {
      window.location.href = query.startsWith("http")
        ? query
        : "https://" + query;
    } else {
      const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
        query
      )}`;
      window.location.href = googleSearchUrl;
    }
  }
  searchInput.value = "";
});
