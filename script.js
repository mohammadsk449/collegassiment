let message = "welocme to my website";
alert(message);
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function updateClock() {
    let clockElement = document.getElementById("clock");
    let now = new Date();
    let hours = now.getHours().toString().padStart(2, '0');
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');
    clockElement.innerText = `Current Time: ${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);

document.addEventListener("DOMContentLoaded", updateClock);

function searchTrain() {
    let searchQuery = document.getElementById("trainSearch").value;
    let resultElement = document.getElementById("trainResult");
    let sidebarElement = document.getElementById("sidebar");
    sidebarElement.innerHTML = "";
    
    let trains = {
        "12345": { name: "Rajdhani Express", time: "10:00 AM", route: "Delhi - Mumbai" },
        "67890": { name: "Shatabdi Express", time: "2:00 PM", route: "Chennai - Bangalore" },
        "11223": { name: "Duronto Express", time: "6:00 AM", route: "Kolkata - Delhi" },
        "44556": { name: "Garib Rath Express", time: "9:30 PM", route: "Mumbai - Chennai" },
        "55001": { name: "Intercity Express", time: "8:15 AM", route: "Lucknow - Kanpur" },
        "55002": { name: "Jan Shatabdi Express", time: "7:30 AM", route: "Patna - Ranchi" },
        "55003": { name: "Mahamana Express", time: "9:45 PM", route: "Varanasi - Delhi" },
        "55004": { name: "Vivek Express", time: "5:00 AM", route: "Kanyakumari - Dibrugarh" },
        "55005": { name: "Tejas Express", time: "11:00 AM", route: "Mumbai - Goa" },
        "55006": { name: "Antyodaya Express", time: "6:45 PM", route: "Howrah - Chennai" },
        "55007": { name: "Sampark Kranti Express", time: "10:30 PM", route: "Delhi - Bangalore" },
        "55008": { name: "Humsafar Express", time: "3:15 PM", route: "Gorakhpur - Anand Vihar" },
        "55009": { name: "Kavi Guru Express", time: "1:50 PM", route: "Mumbai - Kolkata" },
        "55010": { name: "Utkal Express", time: "4:20 AM", route: "Puri - Haridwar" }
    };
    
    if (trains[searchQuery]) {
        let train = trains[searchQuery];
        resultElement.innerText = `Train Found: ${train.name}, Time: ${train.time}, Route: ${train.route}`;
        let trainDetails = `<div class='train-info'><h3>${train.name}</h3><p>Time: ${train.time}</p><p>Route: ${train.route}</p></div>`;
        sidebarElement.innerHTML = trainDetails;
    } else {
        resultElement.innerText = "No train found with this number/name.";
    }
}

function bookTicket(event) {
    event.preventDefault();
    
    let userName = document.getElementById("userName").value;
    let fromStation = document.getElementById("fromStation").value;
    let toStation = document.getElementById("toStation").value;
    let bookingResult = document.getElementById("bookingResult");
    
    if (userName && fromStation && toStation) {
        bookingResult.innerText = `Success! Ticket booked for ${userName} from ${fromStation} to ${toStation}.`;
        bookingResult.style.color = "green";
    } else {
        bookingResult.innerText = "Please fill all details.";
        bookingResult.style.color = "red";
    }
}
alert("this website only for colloge project")
