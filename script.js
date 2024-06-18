const names = ["Aman", "Arun", "Laxmi", "Anuj", "Kartick", "Ganesh", "Shashank", "Harika", "Palvee", "Chandra", "Manju", "Viraj", "Srashti", "Ritu", "Anshita", "Avanish", "Shruthi", "Nadeem"];


document.getElementById('pickNameButton').addEventListener('click', function() {

    const randomIndex = Math.floor(Math.random() * names.length);
    const randomName = names[randomIndex];

    document.getElementById('result').textContent = `This week's Host: ${randomName}`;
});
