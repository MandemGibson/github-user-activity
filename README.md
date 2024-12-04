# GitHub User Activity Tracker

A simple CLI project that uses the GitHub API to fetch and display a user's recent activity directly in the terminal.

## Features

- Fetches activities like commits, issues, stars, and more for a given GitHub username.
- Displays the activities in a clean, user-friendly format.
- Easy to set up and run locally.

## Prerequisites

- **Node.js** (version 14 or later)
- An active internet connection

## Installation

1. Clone the repository or download the code.  
2. Navigate to the project directory in your terminal.  
3. Run the following command to install the required dependencies:
   ```bash
   npm install
   ```

## Usage

You can run the project in two ways:

1. **Using Node.js:**
   ```bash
   node index.js github-activity <username>
   ```
   Replace `<username>` with the GitHub username whose activities you want to fetch. For example:
   ```bash
   node index.js github-activity torvalds
   ```

2. **Using the Batch File:**
   For convenience on Windows systems, run:
   ```bash
   ./githubuseractivity.bat github-activity <username>
   ```

## Example Output

```
Output:
- Pushed 3 commits to user/repo-name on YYYY-MM-DD
- Opened a new issue in user/repo-name
- Starred user/repo-name
```

## Notes

- **GitHub API Rate Limiting:** The GitHub API allows 60 requests per hour for unauthenticated requests. To increase this limit, you can authenticate using a personal access token (not currently implemented in this project).  
- Ensure your Node.js version is 14 or later by running:
  ```bash
  node -v
  ```

## Future Improvements

- Add support for authentication using a personal access token to handle rate limits.
- Include more event types from the GitHub API.
- Enhance output formatting.

---
