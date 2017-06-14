// from https://github.com/johnhenry/example-heroku-clock-js/blob/master/Procfile
const CronJob = require('cron').CronJob

//OnInterval
function threeSecondInterval () {
  console.log("Another 3 seconds have gone by. What did you do in them?")
}
setInterval(threeSecondInterval, 3000)

//For specific times, use a chron job
function fifteenSeconsAfterMinute () {
  console.log("Another minute is gone forever. Hopefully, you made the most of it...")
}
new CronJob({
  cronTime: "15 * * * * *", //15 seconds after every minute
  onTick: fifteenSeconsAfterMinute,
  start: true,
  timeZone: "America/Los_Angeles"
})
