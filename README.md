GitHub User Activity Tracker
A simple CLI project that uses the GitHub API to fetch and display a user's recent activity directly in the terminal.

Features
Fetches activities like commits, issues, stars, and more for a given GitHub username.
Displays the activities in a clean, user-friendly format.
Easy to set up and run locally.
Prerequisites
Node.js (version 14 or later)
An active internet connection
Installation
Clone the repository or download the code.
Navigate to the project directory in your terminal.
Run the following command to install the required dependencies:
bash
Copy code
npm install
Usage
You can run the project in two ways:

Using Node.js:

bash
Copy code
node index.js github-activity <username>
Replace <username> with the GitHub username whose activities you want to fetch. For example:

bash
Copy code
node index.js github-activity torvalds
Using the Batch File: For convenience on Windows systems, run:

bash
Copy code
./githubuseractivity.bat github-activity <username>
