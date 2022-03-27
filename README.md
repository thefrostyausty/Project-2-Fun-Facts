# Project-2-Fun-Facts
My second project within my coding cohort. This is a random fact generator, full stack application built by me. Here I am utilizing APIs, Fetch, ERDs, with programming languages such as Express, MongoDB, Liquid and Javascript. 

## Description
Welcome to the Fun Fact Generator! Here's the place where you can get some interesting fun facts that you'll be able to use as great conversation starters whether by the office water cooler, on a date, or even waiting in the doctor's office. Enjoy this endless amount of fun facts and ease of use!

## API
Here's the base URL for this API: https://api.aakhilv.me

### Installation Instructions
1. Fork and Clone this repository
2. Cd into the `Project-2-Fun-Facts` directory
3. Run `npm install` to install the dependencies
4. `Touch .env .gitignore` in the main directory 
5. Add `node_modules` and `.env` into the `.gitignore` folder.
6. Check if you have nodemon installed by running `npm install -g nodemon`
7. Run `nodemon` to start the server
8. Run 'https://localhost:3000'
9. Signup or Login to create an account to continue through the app. 
10. Enjoy and Favorite some Fun Facts! :)

## User Information
As a user, you should be able to use this full stack application to:
1. Receive random facts from database schema
2. Log in/Sign Up in order to have a user profile within the app
3. Save random facts to profile in order to have them logged within my profile
4. Ability to journal/create information that relates to that specific fact.
5. Delete any favorite facts that are no longer needed. 
6. The ability to log out and return to the main homepage/Index

## Requirements
This will have elements of:
- RESTful Routes (i.e. GET, POST, PUT and DELETE )
- Utilize ODM to create a database table structure with MongoDB data
- Incoportate API
- Have models

## CRUD Functionality
*Facts and Journals Routes*
| **VERB**| **PATTERN** | **ACTION** | **DESCRIPTION** | **MODEL** |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| GET | /facts | Index | Indexes with singular Fun Fact | Facts |
| GET | /facts/faves | Show | Shows User's fact they've favorited | Facts |
| DELETE | /:id | Delete | Deletes a User's specific fact they've favorited | Facts |
| ----------- | ----------- | ----------- | ----------- | ----------- |
| GET | /journals | Index | Shows all users Journal entries | Journals |
| POST | /journals | Create | Shows User's journaled 'fact' they've favorited | Journals |
| GET | /:id/edit | Edit | Shows User's fact they've favorited | Journals |
| PUT | /journals | Update | Shows User's fact they've favorited | Facts |
| DELETE | /:id | Delete | Shows User's fact they've favorited | Facts |




## WireFrames
- Home Page
![img](/Wireframe-Imgs/Home-Page.png)

- Login
![img](/Wireframe-Imgs/Login.png)

- Sign Up
![img](/Wireframe-Imgs/Sign-Up.png)

- Fun Facts
![img](/Wireframe-Imgs/Fun-Fact-Page.png)

- Favorites 
![img](/Wireframe-Imgs/Favorites-Page.png)

- Journal
![img](/Wireframe-Imgs/Journal-Entry-Page.png)

- Sign Out
![img](/Wireframe-Imgs/Signed-Out.png)

- ERD
![img](/Wireframe-Imgs/ERD.png)