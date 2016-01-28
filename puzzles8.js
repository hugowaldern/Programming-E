function loopdown(){
var count = 0;
  while (count < 8) {
    down();
    count = count + 1;
  }
right();
right();
}

function loopup(){
  var count = 0;
  while (count < 7) {
    up();
    count = count + 1;
  }
right();
right();
}

function loopdown2(){
var count = 0;
  while (count < 7) {
    down();
    count = count + 1;
  }
right();
right();
}
loopdown();
loopup();
loopdown2();
loopup();
loopdown2();
