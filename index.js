// script.js
document.addEventListener('DOMContentLoaded', function () {
    // Arrays for possible names, occupations, and initial freelancers
    const possibleNames = ["Alice", "Bob", "Carol", "David"];
    const possibleOccupations = ["Writer", "Teacher", "Programmer", "Designer"];

    let freelancers = [
        { name: "Alice", occupation: "Writer", startingPrice: 30 },
        { name: "Bob", occupation: "Teacher", startingPrice: 50 }
    ];

    // Function to render the initial array of freelancers
    function renderFreelancers() {
        const freelancerList = document.getElementById('freelancer-list');
        freelancerList.innerHTML = ""; // Clear previous content

        freelancers.forEach(freelancer => {
            const freelancerDiv = document.createElement('div');
            freelancerDiv.textContent = `${freelancer.name}, ${freelancer.occupation}, Starting Price: $${freelancer.startingPrice}`;
            freelancerList.appendChild(freelancerDiv);
        });
    }

    // Function to calculate the average starting price
    function calculateAveragePrice() {
        const totalPrices = freelancers.reduce((sum, freelancer) => sum + freelancer.startingPrice, 0);
        return totalPrices / freelancers.length;
    }

    // Function to update the DOM with the average starting price
    function updateAveragePrice() {
        const averagePrice = calculateAveragePrice();
        const averagePriceElement = document.getElementById('average-price');
        averagePriceElement.textContent = `Average Starting Price: $${averagePrice.toFixed(2)}`;
    }

    // Function to generate a random freelancer and add it to the array
    function generateRandomFreelancer() {
        const randomName = possibleNames[Math.floor(Math.random() * possibleNames.length)];
        const randomOccupation = possibleOccupations[Math.floor(Math.random() * possibleOccupations.length)];
        const randomStartingPrice = Math.floor(Math.random() * 100) + 1; // Random starting price between 1 and 100

        const newFreelancer = { name: randomName, occupation: randomOccupation, startingPrice: randomStartingPrice };
        freelancers.push(newFreelancer);
    }

    // Function to add a freelancer and rerender every few seconds
    setInterval(function () {
        generateRandomFreelancer();
        renderFreelancers();
        updateAveragePrice();
    }, 5000); // Add a new freelancer every 5 seconds

    // Initial render
    renderFreelancers();
    updateAveragePrice();
});