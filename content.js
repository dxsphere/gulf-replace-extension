// content.js

// Function to replace all occurrences of the phrase "Gulf of America" with "Gulf of Mexico"
function replaceText() {
    // Get the HTML content of the entire body of the page
    const bodyText = document.body.innerHTML;
  
    // Replace all occurrences of "Gulf of America" with "Gulf of Mexico"
    const updatedText = bodyText.replace(/Gulf of America/g, 'Gulf of Mexico');
  
    // Apply the updated text to the page
    document.body.innerHTML = updatedText;
  }
  
  // Call the function to replace the text
  replaceText();
  