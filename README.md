<!-- PROJECT LOGO -->

<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Recipe Soup</h3>

  <p align="center">
    An personal online cookbook for storing all your favorite recipes
    <br />
    <a href="https://www.recipesoup.app">View Demo</a>
    ·
    <a href="https://github.com/ClockworkFTW/recipe-soup-client/issues">Report Bug</a>
    ·
    <a href="https://github.com/ClockworkFTW/recipe-soup-client/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Tech Stack</a></li>
        <li><a href="#lessons-learned">Lessons Learned</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Demo GIF][demo-gif]](https://www.recipesoup.app)

This is my first full stack project created using the JavaScript ecosystem!

At its core, RecipeSoup is a simple CRUD application featuring authentication and image uploading. Users can create custom recipes featuring completion times, ratings, cuisine tags, ingredients and instructions.

The look and feel of this project was heavily inspired by sites such as [Just The Recipe](https://www.justtherecipe.com/) and [Saffron](https://www.mysaffronapp.com/).

### Tech Stack

Client

- React for the frontend client
- React Query for data fetching and caching
- Zustand for global state management
- DND Kit for drag and drop functionality
- React Hook Form for managing form state and validation
- Font Awesome for icons
- Styled Components for styling

Server

- Node.js and Express for the backend API
- Postgres and Sequelize ORM for data persistance
- JOI for API endpoint schema validation
- Nodemailer for email communication
- AWS S3 for image storage

### Lessons Learned

...

<!-- USAGE EXAMPLES -->

## Usage

A live version of the project can be viewed at [www.recipesoup.app](https://www.recipesoup.app).

_If you prefer not to enter your personal information, you can try out the demo account by navigating to the login page and clicking the "demo" button._

<!-- ROADMAP -->

## Roadmap

- [ ] Add sharable recipe link
- [ ] Add recipe printing
- [ ] Add additional recipes to demo account
- [ ] Add automated recipe extraction from url

See the [open issues](https://github.com/ClockworkFTW/recipe-soup-client/issues) for a full list of proposed features (and known issues).

<!-- MARKDOWN LINKS & IMAGES -->

[demo-gif]: src/assets/demo.gif
