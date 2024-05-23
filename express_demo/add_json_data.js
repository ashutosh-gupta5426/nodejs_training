const fs = require("fs");

const filePath = "./MOCK_DATA.json";

let addAnEntry = (jsonData) => {
  // Read the existing JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("An error occurred while reading the JSON file:", err);
      return;
    }

    // Parse the JSON data to an array
    let arr;
    try {
      arr = JSON.parse(data);
    } catch (parseErr) {
      console.error("An error occurred while parsing the JSON data:", parseErr);
      return;
    }

    // Add the new entry to the array
    arr.push(jsonData);

    // Write the updated array back to the JSON file
    fs.writeFile(filePath, JSON.stringify(arr, null, 2), "utf8", (writeErr) => {
      if (writeErr) {
        console.error(
          "An error occurred while writing to the JSON file:",
          writeErr
        );
        return;
      }
      console.log("New entry added to the JSON file successfully!");
    });
  });
};

let deleteAnEntry = (id) => {
  let deletedData;
  // Read the existing JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("An error occurred while reading the JSON file:", err);
      return;
    }

    // Parse the JSON data to an array
    let arr;
    try {
      arr = JSON.parse(data);
    } catch (parseErr) {
      console.error("An error occurred while parsing the JSON data:", parseErr);
      return;
    }

    // Find the element to delete
    arr.forEach((element, index) => {
      if (element.id == id) {
        deletedData = element;
        arr.splice(index, 1);
      }
    });

    // // Remove the element with id equal to '4'
    // const filteredArr = arr.filter((element) => element.id !== id); // Make sure to compare with the correct type (string or number)

    // Write the updated array back to the JSON file
    fs.writeFile(filePath, JSON.stringify(arr, null, 2), "utf8", (writeErr) => {
      if (writeErr) {
        console.error(
          "An error occurred while writing to the JSON file:",
          writeErr
        );
        return;
      }
      console.log(
        "Element with id=4 has been removed from the JSON file successfully!"
      );
    });
  });
  return deletedData;
};

let updateAnEntry = (id, updates) => {
  let updatedData;
  // Read the existing JSON file
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("An error occurred while reading the JSON file:", err);
      return;
    }

    // Parse the JSON data to an array
    let arr;
    try {
      arr = JSON.parse(data);
    } catch (parseErr) {
      console.error("An error occurred while parsing the JSON data:", parseErr);
      return;
    }

    // Find and update the element with id equal to '4'
    const updatedArr = arr.map((element) => {
      if (element.id === id) {
        // Make sure to compare with the correct type (string or number)
        return { ...element, ...updates };
      }
      return element;
    });

    // Find and update the element with id equal to '4'
    arr.forEach((element) => {
      if (element.id == id) {
        updatedData = element;
        console.log(updatedData);
      }
    });

    // Write the updated array back to the JSON file
    fs.writeFile(
      filePath,
      JSON.stringify(updatedArr, null, 2),
      "utf8",
      (writeErr) => {
        if (writeErr) {
          console.error(
            "An error occurred while writing to the JSON file:",
            writeErr
          );
          return;
        }
        console.log(
          "Element with id=4 has been updated in the JSON file successfully!"
        );
      }
    );
  });
  console.log('UPDATED DATA: ', updatedData);
  return updatedData;
};

module.exports = { addAnEntry, deleteAnEntry, updateAnEntry };
