# Hacker Space
Let’s redefine the hacker stereotype with HackerSpace. HackerSpace helps project creators with big ideas to find like-minded collaborators to join their teams. Unlike typical project boards, HackerSpace is on a mission to empower minority leaders through leading technology projects on any scale. We believe that diversity throughout the technology space, inclusion amongst all, and accepting our strengths, identities, and differences will help us come back stronger to hack together. 
 
## Inspiration
We’ve had a lot of project ideas in the past however, it’s always been a struggle to find like-minded teammates. We enjoy the excitement of bouncing ideas off of each other, talking out loud while problem-solving, and meeting new people from diverse backgrounds. Currently, there isn't a platform that allows like-minded, ambitious people to build and create with each other. In the past, project collaboration would be done with in-person meetings or through word of mouth. Throughout the Covid-19 pandemic, it became significantly harder for us to connect with other people to share our ideas and passions. And that's how our project, HackerSpace, was born. 
 
## What it does
 
HackerSpace immerses all hackers and creators in a tech-savvy community where they can collaborate with each other to work on projects catered to each individual's interest. The web application features a to-the-point, easy-to-navigate user interface. And of course, the default theme is in dark mode so it won't hurt our eyes! The front page displays a list of projects that are open to accepting collaborators. But don't worry, if a hacker has an idea they want to work on, they can become a creator and list their project on that site. All they have to do is submit a short form to get their project listed. Hackers can scroll and use the filters to sort for project types, and hit the "I'm interested" to request to join the project. Each project has its own tags, ranging from the type of project (web application, robotics, etc.) to female-identifying project owners, differently-abled, or LGBTQ+ identifying project leads.
 
 
## How we built it
We built the web app using the MERN(MongoDB, Express, React.js, Node.js) stack.
 
HackerSpace collects project ideas through the use of Google Forms, which may be linked to a Google Spreadsheet. The backend is designed using MongoDB to store all the data collected from the spreadsheet (projectName, projectOwner, description, pronouns, etc).  We then used Express and Node.js to facilitate the communication between our backend and frontend portions. 


Our frontend component was created by translating our initial prototype on Figma into writable code using HTML and CSS. React.js was used to create a dynamic client-side application in HTML and display the complete list of projects. Filters were built in express mongo react to allow a user to sort and search for projects of their interest. Multiple filters and search queries may be executed to cater to a user’s best interests. This portion of the project required our team to learn how to filter records using Javascript and return those query results to the frontend for display.
 
 
## Challenges we ran into
One of the challenges we ran into was connecting the backend to the frontend. When trying to link our backend component to our frontend, we received invalid responses from our API calls. Firstly, we scoured the web for possibilities as to why this was happening, but we decided to reach out to a mentor for assistance. After speaking with a mentor, we discovered that our problem was twofold: we needed a proxy to enable running the backend and frontend components concurrently on different ports, as well as needing to change the function declaration syntax so that it takes in multi-line instructions. On the front end, we came across a challenge while integrating existing javascript code with the react.js file. We resolved the issue by using react-helmet, a component that dynamically manages the document's head section, to solve the problem unconventionally.
 
 
## Accomplishments that we're proud of
Half of our team are first-time hackathon participants. As a team of four who lived in completely different time zones on different sides of the world (Malaysia, Japan, United States), we faced some difficulty finding suitable meeting times, but we are all proud of being able to complete this project successfully with each of us getting some rest, having fun, attending workshops and not coding all day long. We are also proud of the fact that only one member among us is familiar with MERN, so utilizing this new architecture on our application with little to no experience is a large feat. On a personal note, we are all proud of the fact that our motivation wasn’t fueled by all-nighters and coffee breaks (we didn’t drink any coffee!), but by pure motivation and willpower to see our project succeed. 
 
## What we learned
We learned how to connect Google Form with Google Sheet and then MongoDB, how to connect to the database, retrieve data and make queries. From the frontend perspective, we learned how to manipulate states in React frontend, and utilize that to dynamically display components using data retrieved from the database. Additionally, three of our team members have never used React for development before, so we learned a lot from our mentors, StackOverflow, and each other. 
 
 
## What's next for HackerSpace
We want to add a login/create user feature along with authentication via OAuth to HackerSpace. Our future plans also include adding profile features where users can track their application status for the projects they have applied to work on. Additionally, project owners/creators should also be given a page where they can track the members who have applied to join a project, and be given options to edit project descriptions, statuses (eg. Closed/Filled). Furthermore, we want to implement a location option for projects so that people who want to work in person can choose to collaborate with people in the same location. We also want to implement an ethnic group option to further advocate for diversity in tech. 

Devpost Link: https://devpost.com/software/hacker-space
