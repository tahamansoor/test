const fs = require('fs');
exports.readFileAsync = async (filePath) => {
  try {
    const data = await fs.readFile(filePath);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
