// Use Moment.js to format the date and assign to the declared variable.
// TODO: 1. What is your graduation date in the following format: Jan 1st, 1999?
var gradDate;
$("#1a").text(moment(gradDate).format("MMM Do, YYYY"))

// TODO: 2. What day of the week will 1/1/2022 be?
var weekDay;
$("#2a").text(moment(weekDay).format("M/D/YYYY"));

// TODO: 3. Out of 365, what day of the year is today?
var now;
$("#3a").text(moment(now).format("DDDD[. out of 365]"));

// TODO: 4. What is the current time in the format: hours:minutes:seconds
var time;
$("#4a").text(moment(time).format("hh:mm:ss"));

// TODO: 5. What is the current Unix timestamp?
var unix;
$("#5a").text(moment().unix());

// TODO: 6. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.
var unixFormat;
$("#6a").text(unixFormat);

