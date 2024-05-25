# GitHub explorer project for #drycode internship
 Features:

User Search: Enter a GitHub username to fetch user details.
User Details Display: View the name, number of public repositories, and number of followers of the GitHub user.
Profile Link: Clickable link to the user's GitHub profile.
Error Handling: Displays an error message if the user is not found or the username is invalid.
Technologies Used:

HTML: Provides the structure of the web page.
CSS: Styles the web page for a clean and modern look.
JavaScript: Handles the functionality of fetching and displaying user details from the GitHub API.
Usage:

Open the index.html file in a web browser.
Enter a GitHub username in the input field.
Click the "Search" button.
View the fetched user details or an error message if the user is not found.
Files:

index.html: The main HTML file containing the structure of the web page.
styles.css: The CSS file containing styles for the web page.
script.js: The JavaScript file containing the logic to fetch and display user details from the GitHub API.
How It Works:

The user enters a GitHub username in the input field.
Upon clicking the "Search" button, a JavaScript function is triggered.
The function sends a request to the GitHub API using the entered username.
If the API returns a valid response, the user details are displayed on the page.
If the API returns an error (e.g., user not found), an error message is displayed.
