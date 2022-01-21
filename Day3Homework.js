//hwDay3
// let str = "#";
// str = str.concat(str);
// console.log(str);
//pyramid problem
// let pyramid = function (layers) {
//   for (let i = 0; i < layers; i++) {
//     let j = i;
//     let str = "#";
//     while (j != 0) {
//       str = str.concat("#");
//       j--;
//     }
//     console.log(str);
//   }
// };
// pyramid(1);
// //create function recieve a score and return a grade
// const getGrades = function (score) {
//   switch (true) {
//     case score < 60:
//       return "f";
//     case score < 70:
//       return "d";
//     case score < 80:
//       return "c";
//     case score < 90:
//       return "b";
//     default:
//       return "a";
//   }
// };
// console.log(getGrades(85));
// frist we use for loop to print the "#" 5 times 
for (let i = 0; i < 5; i++) {
    let str = "#";
    console.log(str);
  }
  //next for each time we go through the for loop we want to print one more "#",
  //so we can use string concatination to add the number of "#" we want
  let str = "#";
  console.log(str); //print #
  str = str.concat("#");//add one "#" to str
  console.log(str);//print ##
  str = str.concat("#");//add another one "#" to str
  console.log(str);//print ###
  // next we can use while loop to add the number of "#" we want
  let j = 5 // you can change the value of j to see what happen
  //j is the variable that we use to decide how many "#" we want to add after str2
  let str2 = "#"
  // the while loop will keep runing until j reaches 0 and it will stop and log string to screen
  while(j != 0){
      str2 = str2.concat("#")// add one "#" to the str2
      j--  // decrement by 1 each time the while loop goes through
  }
  console.log(str2)
  //finally we combine what see above
    for (let i = 0; i < 5; i++) {
      let j = i;// we assign the value i to j
      //in order to match the number of "#" we want to print when for loop goes through each time 
      let str = "#";
      while (j != 0) {
        str = str.concat("#");
        j--;
      }
      console.log(str);
    }
  console.log("start!")
  setTimeout(() => {
        console.log("Timer Done!")
    }, 0)
  console.log("Finish!")
  