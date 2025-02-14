// content.js

// Function to replace all occurrences of the phrase "Gulf of America" with "Gulf of Mexico"
function replaceText() {
    if (window.location.hostname.includes("facebook.com")) {
        console.log("Skipping Facebook page.");
        return; // Skip replacing text if the page is from Facebook
    }
    // Get the HTML content of the entire body of the page
    const bodyText = document.body.innerHTML;
  
    // Replace all occurrences of "Gulf of America" with "Gulf of Mexico"
    const updatedText = bodyText.replace(/Gulf of America/g, 'Gulf of Mexico');
  
    // Apply the updated text to the page
    document.body.innerHTML = updatedText;
  }
  
  // Call the function to replace the text
  replaceText();
  