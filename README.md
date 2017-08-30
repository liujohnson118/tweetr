# Tweeter Project

Tweeter is a simple, single-page Twitter clone.

## Getting Started

1. Fork this repository, then clone your fork of this repository.
2. Install dependencies using the `npm install` command.
3. Start the web server using the `npm run local` command. The app will be served at <http://localhost:8080/>.
4. Go to <http://localhost:8080/> in your browser.

## Technologies Used

* ExpressJS
* JSX
* CSS
* MongoDB
* jQUery

## Dependencies

- Dependencies are listed in `package.json`
- Install dependencies using the `npm install` command.


## Remarks

- Everything should work as specified. Extra features implemented for counting likes, retweets, and flags.
- Currently, the users are a lists of pre-defined figures and their info is managed by MongoDB.
- User registration and login will be added, if time permits.

## User Experience
- As a user, you can create tweets using the form as shown below
!["homepage"](https://github.com/liujohnson118/tweetr/blob/master/docs/home.png)
- The form can appear and disapper by clicking "compose" on the top right corner
- The form can accept a maximum of 140 characters. It will stop recording text if the text is more than 140 characters.
- You can see other users' tweets
!["tweets"](https://github.com/liujohnson118/tweetr/blob/master/docs/tweets.png)
- When hovering hover a tweet, the emojis for flag, retweet, and like will be displayed. Once clicked, the counter for those emojis will change accordingly
!["emoji"](https://github.com/liujohnson118/tweetr/blob/master/docs/emoji.png)
