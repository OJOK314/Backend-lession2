const fs = require('fs');

// Path to your data file
const FILE_PATH = './data.json';

// Helper: read data from file
function fetch() {
  try {
    // Check if file exists
    if (!fs.existsSync(FILE_PATH)) {
      fs.writeFileSync(FILE_PATH, JSON.stringify([]));
    }

    const data = fs.readFileSync(FILE_PATH, 'utf8');
    return JSON.parse(data || '[]');
  } catch (err) {
    console.error("Error reading data:", err);
    return [];
  }
}

// Helper: add new data to file
function append(newItem) {
  try {
    const currentData = fetch();
    currentData.push(newItem);
    fs.writeFileSync(FILE_PATH, JSON.stringify(currentData, null, 2));
  } catch (err) {
    console.error("Error writing data:", err);
  }
}

// Export functions
module.exports = { fetch, append };
