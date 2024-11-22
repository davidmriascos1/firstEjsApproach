import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;



// http request get to bring to the server to the client "/", is selecting the home page. (req, res) are predeterminated to request o response to the send to the client or server
app.get("/", (req, res) => {
    // const week is holding in an array the days of the week Sunday-Saturday (or 0-6)
    const week = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    // this cons d is holding the object new Date(); which is a javascript code to grab the full date at the moment e.g. "November 24, 2024 11:11:00"
    const d = new Date();  //"November 24, 2024 11:11:00"
    //Here you want to make a variable called day holds just the day within the array called week and pick it up to assign it to day so
    // d. is holding the full date and getDay() will select just the day equivalent 0-6 and since week holds "sunday" to "saturday" (7 items) it will assign the equivalent 0-6 to "sunday" to "saturday"
    let day = week[d.getDay()];
// here you are seeting the predetermined message that will be display if is weekday
    let advice = "Let's work of ass off"
//here you are using if statment to let now that in case day which is 0-6 or Sunday to Saturday is completly equal (===) to "Sunday" (0) or (||) completly equal to Saturday, then change the message in the variable advice
    if (day === "Sunday" || day === "Saturday") {

        advice = "Let's relax and have a beer";
    }
//here you are saying respose rendering the index.ejs where the html with the js embedded where there is a js object written in the html
//called weekday linked to the day variable and anotherone called message linked to the advice that will change the html according the day
    res.render(__dirname + "/views/index.ejs", {
        weekday: day,
        message: advice,
    });
    });


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});