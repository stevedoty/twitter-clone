const express = require('express')
const cors = require('cors');

const app = express();

app.use(express.static('public'));
app.use(express.json());
app.use(cors());

app.listen(5000, () => {
  console.log('listening at 5000');
})

let isValidTweet = (tweet) => {
  if (tweet.name && tweet.content)?true:false;
}

app.get('/', (request, response) => {
  if (isValidTweet(request.body)) {
    //insert into db...
  } else {
    response.status(422);
    response.json({
      message: "Add a Name and Content"
    })
  }
})

app.post('/tweets', (request, response) => {
  console.log('post and rerender works');
  console.log(request.body);
})
