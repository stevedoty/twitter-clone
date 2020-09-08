const express = require('express')
const cors = require('cors');
const monk = require('monk');

const app = express();

const db = monk('localhost/twitter');
const tweets = db.get('tweets');

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log('listening at 5000');
})

app.get('/', (request, response) => {
  response.json({
    message: "TWEET!"
  })
})

const isValidTweet = (tweet) => {
  return tweet.name && tweet.name.toString().trim() !== '' &&
    tweet.content && tweet.content.toString().trim() !== '';
}

app.post('/tweets', (request, response) => {
  if (isValidTweet(request.body)) {
    const tweet = {
      name: request.body.name.toString(),
      content: request.body.content.toString(),
      created: new Date()
    };
    tweets
      .insert(tweet)
      .then(createdTweet => {
        res.json(createdTweet);
      })
  } else {
    response.status(422);
    response.json({
      message: "Add a Name and Content"
    })
  }
})
