// Working with JavaScript Object Notation (JSON) for storing file data

const fs = require("fs");

function append(data) {
  const filePath = "./data.json";
  let currData = [];

  // Try reading existing data
  try {
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf8");
      if (fileContent.trim()) {
        currData = JSON.parse(fileContent);
      }
    }
  } catch (err) {
    console.log("Error reading file:", err);
  }

  // Add new data to the array
  currData.push(data);

  // Convert back to JSON
  const todoJSON = JSON.stringify(currData, null, 2);

  // Write updated data to file
  fs.writeFileSync(filePath, todoJSON);

  console.log("Successfully updated file!");
}

module.exports = append;
