const names = ["Aman", "Arun", "Laxmi", "Anuj", "Kartick", "Ganesh", "Shashank", "Harika", "Palvee", "Chandra", "Manju", "Viraj", "Srashti", "Ritu", "Anshita", "Avanish", "Shruthi", "Nadeem"];
let clickCount = 0;

document.getElementById('pickNameButton').addEventListener('click', function() {
    clickCount++;
    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    document.getElementById('result').textContent = `This week's Host: ${randomName}`;
    document.getElementById('clickCount').textContent = `Generated: ${clickCount} times`;
});


// Initialize the checkboxes when the page loads
document.addEventListener('DOMContentLoaded', createCheckboxes);
