const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist",
  {
    useMongoClient: true
  }
);

const articleSeed = [
  {
    title: "With Twitch, Amazon Tightens Grip on Live Streams of Video Games",
    date: "June 17, 2018",
    artURL:
      "https://www.nytimes.com/2018/06/17/business/media/amazon-twitch-video-games.html?rref=collection%2Fsectioncollection%2Ftechnology&action=click&contentCollection=technology&region=stream&module=stream_unit&version=latest&contentPlacement=3&pgtype=sectionfront",
    date: new Date(Date.now())
  }
];

db.article
  .remove({})
  .then(() => db.article.collection.insertMany(articleSeed))
  .then(data => {
    console.log(data.insertedIds.length + " inserted.");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
