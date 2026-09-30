import fs from "fs";

const fileName = "test.txt";

// Create the file
console.log("Creating file...");

fs.writeFile(
    fileName,
    "Hello! This is my Smart Utility Toolkit.",
    (err) => {
        if (err) {
            console.log("Error creating file:", err);
            return;
        }

        console.log("File created successfully!");

        // Read the file
        console.log("Reading file...");

        fs.readFile(fileName, "utf8", (err, data) => {
            if (err) {
                console.log("Error reading file:", err);
                return;
            }

            console.log("File Content:");
            console.log(data);

            // Update the file
            console.log("Updating file...");

            fs.appendFile(
                fileName,
                "\nThis text was added later.",
                (err) => {
                    if (err) {
                        console.log("Error updating file:", err);
                        return;
                    }

                    console.log("File updated successfully!");

                    // Read the updated file
                    fs.readFile(
                        fileName,
                        "utf8",
                        (err, updatedData) => {
                            if (err) {
                                console.log(
                                    "Error reading updated file:",
                                    err
                                );
                                return;
                            }

                            console.log("\nUpdated Content:");
                            console.log(updatedData);

                            // Delete the file
                            console.log("\nDeleting file...");

                            fs.unlink(fileName, (err) => {
                                if (err) {
                                    console.log(
                                        "Error deleting file:",
                                        err
                                    );
                                    return;
                                }

                                console.log(
                                    "File deleted successfully!"
                                );
                            });
                        }
                    );
                }
            );
        });
    }
);