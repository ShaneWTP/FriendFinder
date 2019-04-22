# FriendFinder

## Functionality

In this app, a user is directed to the Friend Finder homepage. When ready, they must click on the survey button. The survey page then requires the user to enter a name and a link to an image. Once they enter their info, they must then answer 10 personality questions. Each question has a dropdown menu that has numbers 1-5 available for selection. The user must then pick a number (1 = Disagree Strongly, 5 = Agree Strongly) for how much they believe their personality pertains to each question. One the user answers all questions, they submit their answers and their "best friend match" is displayed on their screen.

## Database

In the survey section, the the user input information and survey answers are stores in our friends.js file as a new object. Each time a new user fills out the survey, they information is compare to all users that are already stored into the friends.js file. The user that has the least difference in questionaire score to the new user is their "best match" and becomes the display on the screen. That new user is then stored into the friends.js as a new object. 