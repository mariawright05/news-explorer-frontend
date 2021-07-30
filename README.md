# News Explorer App

![NewsExplorer Screenshot](/src/images/app-graphic.jpg)

This project is a service where users can search for news articles and save them to their profiles.

The app can be run at <http://localhost:3000/> and will access the api at <https://api-news-explorer-mmw.herokuapp.com/api>

## About the Project

This website has these main features:

* When a user enters a keyword in the search bar, a request to the News API service, where it finds all the relevant articles over the last week, and display a list of cards for each of them.

* If a user creates an account, they have the ability to save and display articles they have saved in a special section of the website.

## Front-End

The website consists of 2 pages: the home pages where users can seach for recent news articles, and a saved news page that is only available to logged in users. There are 3 popup windows: registration, registration success, and login.

### Technology Features

The front-end was written using React. Something new that I tried in this project was the use of `useContext` and `useReducer` hooks to create a global states for both user authorization as well as the contents of the news cards. Instead of putting all of the functions in App.js and passing them as props to all of the components, the functions are divided between "user" and "news" categories, and are put in their own respective files: `NewsState.js` and `AuthState.js`. All of the components are wrapped in these contexts and the state of the variables are available throughout the app.

### Challenges

The use of "cards" to display news articles created some challenges since they are slightly different on the `home` page and `saved-news` page. They needed to react to the user clicks to save, unsave, and delete, and all of these functionalities differed depending on what page they were located and whether or not the user was logged in. I originally showed the state of articles on the front-end first, then added or deleted the articles from the database. However, since unique ids were not created until a card was saved, I ran into problems. I solved this by reversing my strategy, and doing all the state changes on the backend, then determining how the cards would appear to the user.

I also really upped my game with debugging in the course of this project. :octocat:

## Back-End

Two entities were created in this project: `user` and `article`.

The following 4 routes are included for `article`:

```bash
# returns information about the logged-in user (email and name)
GET /users/me

# returns all articles saved by the user
GET /articles

# creates an article with the passed
# keyword, title, text, date, source, link, and image in the body
POST /articles

# deletes the stored article by _id
DELETE /articles/articleId
```

The following 2 routes are created for `user`:

```bash
# creates a user with the passed
# email, password, and name in the body
POST /signup

# checks the email and password passed in the body
# and returns a JWT
POST /signin
```

The code for the backend can be found here: <https://github.com/mariawright05/news-explorer-api>
