# Swim Distance Tracker

In 2024, I plan to swim at least 100 miles. I wanted to design an app for my personal use, to track how many laps I swim and perform conversions with feet, yards, and miles.

To do:

Advanced button, opens modal to add extra details
[] time and temperature (weather API?)
[] click on date to fetch those details
[x] select menu for different pools?
<!-- - JSON file with pools and yardage -->
[x] Firebase Realtime Database
[x] total laps
[x] total miles
[] total yards?


Settin up Firebase
- [Getting started with Firebase](https://www.youtube.com/watch?v=9zdvmgGsww0&list=PL4cUxeGkcC9jERUGvbudErNCeSZHWUVlb)
- [Module bundling](https://firebase.google.com/docs/web/module-bundling)


** Notes about `onValue`
// onValue takes a reference, where to fetch data from (reference), 
// then it takes a function which takes snapshot as an argument
// this will return an object. Do I want an object?
// If I want an array, can use Object.keys(snapshot.val()) - get the ids, Object.values(snapshot.val()) - get the values, Object.entries(snapshot.val()) - get both
// onValue runs every time there is an update to the database
// if using for innerHTML, might need to clear before rendering updated data

had some issues sorting by date, [this article](https://byby.dev/js-sort-by-date-value) was helpful. long story short, default format from the input was a string. needed to convert to Date to convert.

[] create functionality to edit and/or delete an entry
[] create login/auth with Google
[] animation for when new entry is added
[] get weekly(?)/monthly sums
[] photo upload? photo gallery
[] get weather ??
[] pool info
