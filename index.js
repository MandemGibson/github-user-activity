const { program } = require("commander");

program
  .command("github-activity <username>")
  .description("Fetch and display GitHub activity for a user")
  .action(async (username) => {
    try {
      const response = await fetch(
        `https://api.github.com/users/${username}/events`
      );

      if (response.status === 404) {
        console.log(`User ${username} not found.`);
        return;
      }

      if (!response.ok) {
        console.log(`Error: Unable to fetch data (Status: ${response.status})`);
        return;
      }

      const data = await response.json();
      console.log("Output:\n");

      data.forEach((event) => {
        const date = event.created_at.split("T")[0];
        switch (event.type) {
          case "PushEvent":
            console.log(
              `- Pushed ${event.payload.commits.length} ${
                event.payload.commits.length === 1 ? "commit" : "commits"
              } to ${event.repo.name} on ${date}`
            );
            break;

          case "IssuesEvent":
            console.log(
              `- ${
                event.payload.action === "opened" ? "Opened" : "Closed"
              } an issue in ${event.repo.name} on ${date}`
            );
            break;

          case "PullRequestEvent":
            console.log(
              `- ${
                event.payload.action === "opened" ? "Opened" : "Merged"
              } a pull request in ${event.repo.name} on ${date}`
            );
            break;

          case "ForkEvent":
            console.log(`- Forked ${event.repo.name} on ${date}`);
            break;

          case "WatchEvent":
            console.log(`- Starred ${event.repo.name} on ${date}`);
            break;

          case "CreateEvent":
            console.log(
              `- Created a repository or branch in ${event.repo.name} on ${date}`
            );
            break;

          default:
            console.log(
              `- Performed ${event.type} in ${event.repo.name} on ${date}`
            );
        }
      });
    } catch (error) {
      console.error("An error occurred:", error.message);
    }
  });

program.parse(process.argv);
