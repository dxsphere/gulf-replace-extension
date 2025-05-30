// content.js

// Function to replace all variations of "Gulf of America" with "Gulf of Mexico"
function replaceText() {
  if (window.location.hostname.includes("facebook.com")) {
    console.log("Skipping Facebook page.");
    return; // Skip replacing text if the page is from Facebook
  }

  // Get the HTML content of the entire body of the page
  const bodyText = document.body.innerHTML;

  // Replace all variations using a case-insensitive regex with a replacer function
  const updatedText = bodyText.replace(/Gulf of America/gi, (match) => {
    // Preserve original case style
    if (match === match.toUpperCase()) return "GULF OF MEXICO";
    if (match === match.toLowerCase()) return "gulf of mexico";
    if (match[0] === match[0].toUpperCase()) return "Gulf of Mexico";
    return "Gulf of Mexico"; // Fallback
  });

  // Apply the updated text to the page
  document.body.innerHTML = updatedText;
}

// Call the function to replace the text
replaceText();
