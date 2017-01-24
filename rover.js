/* var theGrid = [
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
 [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
];
*/

var myRover = {
  position: [0,0],
  direction: 'N'
};
var mrsRover = {
  position: [1,0],
  direction: 'E'
};
function doCommand(rover, com) {
  switch(com) {
    case 'f':
      goForward(rover)
    break;
    case 'b':
      goBack(rover)
    break;
    case 'r':
      turnRover(rover, "E")
    break;
    case 'l':
      turnRover(rover, "W")
    break;
  }
}


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
  };

  if (rover.position[0] >= 10)   {
  rover.position = [0,0]
  }
  if (rover.position[1] >= 10)   {
  rover.position = [0,0]
  }


if (rover.position[1] >= 7) {
  rover.position = [0,6]
  console.log("Obstacle detected")
}
}
//myRover.direction = 'N';
function goBack(rover){
  switch (rover.direction) {
    case 'N':
    rover.position[1]--
      break;
      case 'E':
        rover.position[0]--
        break;
      case 'S':
        rover.position[1]++
        break;
      case 'W':
        rover.position[0]++
        break;

  }
  if (rover.position[0] <= 10)   {
  rover.position = [0,0]
  }
  if (rover.position[1] <= 10)   {
  rover.position = [0,0]
  }
}

function turnRover(rover, newDirection){
  switch (newDirection) {
    case 'N':
    rover.direction = 'N'
    break;
    case 'S':
    rover.direction = 'S'
    break;
    case 'E':
    rover.direction = 'E'
    break;
    case 'W':
    rover.direction = 'W'
    break;
  }
}

var c = 'fffffff';
for (var i = 0; i < c.length; i++){
  (doCommand (myRover, c[i]));
  console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
}
var d = 'ffffffff';
for (var i = 0; i < c.length; i++){
(doCommand (mrsRover, c[i]));
console.log("New Mrs. Rover Position: [" + mrsRover.position[0] + ", " + mrsRover.position[1] + "]")
}
/*
goForward(myRover);
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
turnRover(myRover, 'N');
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
goBack(myRover);
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
goBack(myRover);
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]")
*/
