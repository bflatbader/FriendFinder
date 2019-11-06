[![Generic badge](https://img.shields.io/badge/Portfolio-Red.svg)](https://bflatbader.github.io/)
[![Generic badge](https://img.shields.io/badge/LinkedIn-Blue.svg)](https://www.linkedin.com/in/bishop-bader/)

<p align="center">
    <img src="app/public/images/logo.png" alt="Logo"><br>
</p>

## Overview
This app is a compatibility-based "FriendFinder" application. This full-stack app will take in results from your users' surveys, then compare their answers with those from other users. The app will then display the name, picture, and match % of the user with the best overall match.

## Languages/Technologies Used
- HTML, CSS, JavaScript
- [Bootstrap 4.3.1](https://getbootstrap.com/docs/4.3)
- [Node](https://nodejs.org/en/docs/)
    - [Express 4.x](https://expressjs.com/en/4x/api.html)
    - [Path 0.12.7](https://www.npmjs.com/package/path)

## Getting Started
Visit https://frozen-anchorage-48891.herokuapp.com/.

### Prerequisites
- An internet browser with JavaScript enabled. 
- Sound on.

### Instructions
![titleScreenshot](/app/public/images/ss_title.jpg)

- Users will click the **Go to Survey!** link to start.
- Begin to fill in the form. *Note: All fields are required.*
    - Enter your Name.
    - Enter a URL to a photo of yourself.

![formBeginSS](/app/public/images/ss_formBegin.jpg)

- Next, the user will be prompted on how much they agree with a particular statement, on a scale of 1 - 5. 1 being the least and 5 representing the most.
    - The user should click the number button corresponding to the response they'd like to give.
    - Each time a number is clicked, a touch tone sound will play.
- Once all questions are answered, the user should click on the green phone icon to submit their survey.
- They will hear a phone ringing sound and then be presented with their match!
- The user's data is also submitted to the API.

![matchScreenshot](/app/public/images/ss_match.jpg)

#### API Access
See: https://frozen-anchorage-48891.herokuapp.com/api/friends, or the **API Friends List** link at the bottom of the survey.