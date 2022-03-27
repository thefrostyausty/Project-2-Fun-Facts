# Project-2-Fun-Facts
My second project within my coding cohort. This is a random fact generator, full stack application built by me. Here I am utilizing APIs, Fetch, ERDs, with programming languages such as Express, MongoDB, Liquid and Javascript. 

## Description
Welcome to the Fun Fact Generator! Here's the place where you can get some interesting fun facts that you'll be able to use as great conversation starters whether by the office water cooler, on a date, or even waiting in the doctor's office. Enjoy this endless amount of fun facts and ease of use!

## API
Here's the base URL for this API: https://api.aakhilv.me

### Installation Instructions
1. 

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
| GET | / | Index | Indexes with singular Fun Fact | Facts |
| GET | /facts/faves | Show | Shows User's fact they've favorited | Facts |
| DELETE | /:id | Delete | Deletes a User's specific fact they've favorited | Facts |
| ----------- | ----------- | ----------- | ----------- | ----------- |




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