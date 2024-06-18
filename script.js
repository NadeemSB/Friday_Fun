const names = ["Aman", "Arun", "Laxmi", "Anuj", "Kartick", "Ganesh", "Shashank", "Harika", "Palvee", "Chandra", "Manju", "Viraj", "Srashti", "Ritu", "Anshita", "Avanish", "Shruthi", "Nadeem"];

function createCheckboxes() {
    const checkboxesContainer = document.getElementById('nameCheckboxes');
    checkboxesContainer.innerHTML = '';

    names.forEach(name => {
        const checkboxLabel = document.createElement('label');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = name;

        checkboxLabel.appendChild(checkbox);
        checkboxLabel.appendChild(document.createTextNode(name));

        checkboxesContainer.appendChild(checkboxLabel);
    });
}

document.getElementById('pickNameButton').addEventListener('click', function() {
    const checkboxes = document.querySelectorAll('#nameCheckboxes input[type="checkbox"]');
    const selectedNames = Array.from(checkboxes)
                               .filter(checkbox => checkbox.checked)
                               .map(checkbox => checkbox.value);

    if (selectedNames.length === 0) {
        document.getElementById('result').textContent = 'Select at least one name';
        return;
    }

    const randomIndex = Math.floor(Math.random() * selectedNames.length);
    const randomName = selectedNames[randomIndex];

    document.getElementById('result').textContent = `This week's Host: ${randomName}`;
});

document.addEventListener('DOMContentLoaded', createCheckboxes);
