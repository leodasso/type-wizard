# TypeWizard

### Overview
I created TypeWizard because I'm currently learning Korean, and there's no good way (that I could find) to practice keyboarding
with a Hangul keyboard layout. 
Simply put, TypeWizard is a keyboarding practice app with the option to choose different keyboard layouts.

## Screenshots
![keyboarding tutorial](https://github.com/leodasso/type-wizard/blob/master/readme/tw_play_1.gif?raw=true)

Step by step tutorial on finger placement!


![destroying a hotdog](https://github.com/leodasso/type-wizard/blob/master/readme/tw_play_2.gif?raw=true)

Minigames and challenges


![Previewing keyboards](https://github.com/leodasso/type-wizard/blob/master/readme/tw_selection_1.gif?raw=true)
![Selecting a language](https://github.com/leodasso/type-wizard/blob/master/readme/tw_selection_2.gif?raw=true)

Preview and select keyboards of different languages (only English and Korean are fully supported right now. More to come soon!)


![Choosing a stage](https://github.com/leodasso/type-wizard/blob/master/readme/tw_play_selection.gif?raw=true)


## Prerequisites
Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Development Setup Instructions

* Run `npm install`
* Create a `.env` file at the root of the project and paste this line into the file:
    ```
    SERVER_SESSION_SECRET=superDuperSecret
    ```
    While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
* Start postgres if not running already by using `brew services start postgresql`
* Run `npm run server`
* Run `npm run client`
* Navigate to `localhost:3000`
