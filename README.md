# grello_backend

# Introduction to the Team

| collaborators |               |               |            |                         |
|---------------|---------------|---------------|------------|-------------------------|
| Ron Dunphy    | Kyle Winckler | Carolina Ceja | Dan Peters | Jessica Vasquez-Soltero |

# Project Objective

Our goal is to provide a project workflow that will easily couple tasks to the assignee and allow for those tasks to be placed into categories.  The work flows from google docs to the Wattle application where the tasks can be assigned, from an uncategorized list, to the categories that each user sets.

# To use this backend with another front end one must:

how to link front and back.....................

# Schemas Used

All data is stored using Mongo in the Backend of our Project

-Category: The different naming conventions used for each container, whether it be
 for different project names, or to assign urgency ratings for unassigned tasks.

-Document: googleID, name, array of tasks.

-Tag: Tags will identify properties on the comment object so that we can create custom filters.

-Task: All tasks to be completed.

-User: All users that have created accounts.

# Routes

 GET/task

 This will bring the user to the task view, where one can see the uncategorized tasks as well as the categories created.

 PUT/task

 This route will allow for updating tasks.

 /categories

 This route will show all categories created by the user.

 /tags

 This route will show the categories that each task is associated with.  

 /user

 The user that has signed up for the Google auth API.

 OAUTH:
 The user is signed into Google already, and is using Google docs.  Next, permission is granted by the user allowing google to share their information with the Wattle app.  Then the Google OAuth API sends server code to the Wattle backend server.  The Wattle backend server then sends the code back to the OAuth API with their 'secret' included.  Then the Google OAuth API sends back an access token with the request token. Then a request, with the bearer authorization token in the header, is sent to the Google openid API, which will fetch a specific set of information about the user.  The user is then placed into the application's database, and can begin using Wattle.

 # Prerequisites

software needed and how to install it
```
Here are Examples
```

# Setup

Using CLI

Use the command:
```
npm install
```
This command will load all of the the dependencies needed to run the program.


# Deployment

We used AWS CodeDeploy to launch the application.

# Testing

Testing was done with Karma and Jasmine.
