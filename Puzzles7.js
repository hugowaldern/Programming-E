function updown(){
 while (getColor()!= "red"){
  	down();
 }	
	while (getColor()== "red") {
		right();
		right();
  }
	while (getColor()!= "red") {
 		up();
	}
  while (getColor()== "red") {
		right();
		right();
  }
}

updown();
updown();
updown();
