const fs = require('fs');

// Read the JSON file
fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Parse the JSON data
    const jsonData = JSON.parse(data);

    // Access the data
    console.log("Name:", jsonData.name);
    console.log("Age:", jsonData.age);
    console.log("Profession:", jsonData.profession);
    console.log("Hobbies:", jsonData.hobbies);
});
