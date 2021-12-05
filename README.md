# Hacker Space
An app that allows people to hack together!

## Inspiration
I have a lot of project ideas. However, one thing that's been difficult for me is to find someone to collaborate with me. I like the fun of bouncing ideas off of each other, talking out loud while solving a bug, and generally just have fun together with cool people. But there is no existing public platform for exactly that. Everything is done manually by word of mouth. Thus, I decided to create my own platform to automate project team matching. 

## What it does
It enables hackers to find new project ideas and collaborate with other hackers on different cool projects. The front page is a project board that lists all the projects. You can find project by name, and by other parameters like if it is female/non-binary led or led by LGBTQ+ community. This encourages the leadership of underrepresented groups, and is an important feature on purpose. You can find an interesting idea and email the author of the idea to collab, or, if you have your own idea, you can post it by clicking "Add a Project" on top.

## How we built it
We built the web app using the MERN(MongoDB, Express, React.js, Node.js) stack. 
I designed the backend using MongoDB, connected google form to the database, and enabled sending data to the front end. I also built parts of frontend where it displays the complete list of projects, and filters out the projects when using search bar and update the project list. 
(Insert each of us's contribution below)

## Challenges we ran into
One of the challenges I run into is definitely connecting the backend to frontend. For some reason, the API call from the frontend won't return an eligible response. We have no idea why this is happening, and have to check each step in the logic chain. Collaborating with the mentors, we found out that the problem is twofolds: we first need to use a proxy to enbale running backend and frontend on different port; then we need to change the function declaration syntax so that it enables multi-line instruction. The bug is finally solved.
(Insert each of us's challenges below)

## Accomplishments that we're proud of
(Insert each of us's accomplishments below)

## What we learned
I learned how to connect Google Form with Google Sheet and then MongoDB, how to connect to the database, retrieve data and make queries. I also learned how to manipulate state in React frontend, and utilize that to dynamically display components using data retrieved from the database.
(Insert other stuff each team member learned below)

## What's next for Hacker Space
We want to add authentication to Hacker Space. Also, we want to add a profile portal where each user can see the list of projects ideas they have, the list of people who applied to work on the project and the list of projects he/she applied to work on. We also want to enable the user to delete project ideas where the team has already been filled. This will further automate the process and make managing projects a lot easier. 
