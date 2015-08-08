/**
 * Created by Alfianjau on 08/08/2015.
 */


// Instantiation
var theater = new TheaterJS();

// Describe actors
theater
    .describe("Vader", .8, "#vader")
    .describe("Luke", .6, "#luke");

// Write the scenario
theater
    .write("Vader:Dude!", 600)
    .write("Luke:What?", 400)
    .write("Vader:I am...", 400, " Awesome.")
    .write("Luke:WTH?", 400)
    .write("Vader:I am...", 400, " Too...", 400 , "Awesome..")
    .write("Luke:Yeah...", 400)
    .write("Vader:This", 400, " site...", 400 , "Too Awesome..");

// Listen to theater's events
theater
    .on("say:start, erase:start", function () {
        // add blinking caret
    })
    .on("say:end, erase:end", function () {
        // remove blinking caret
    })
    .on("*", function () {
        // do something
    });

