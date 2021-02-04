function setup() {
	createCanvas(1200, 880);
	print("Starting up simple shapes")
	strokeWeight(2);
	ellipseMode(RADIUS);

	print("Width = " + width);
	print("Height = " + height);	
}

function drawRobot() {
	background(135,31,120);

	// Neck
	stroke(119,221,119); // set stroke to pastel green
	line(266, 257, 266, 162); // left
	line(276, 257, 276, 162); // middle
	line(286, 257, 286, 162); // right

	// Body
	noStroke(); // disable stroke
	fill(119,221,119); // set fill to pastel green
	ellipse(264, 377, 33, 33); // pastel green antigravity orb
	fill(200,162,200); // set fill to black
	rect(219, 257, 90, 120) // main body
	fill(255); // set fill to white
	rect(219, 274, 90, 6); // white stripe

	// Head
	fill(200,162,200); // seet fill to black
	ellipse(276, 155, 45, 45); // head
	fill(255); // set fill to white
	ellipse(288, 150, 14, 14); // large eye
	fill(0); // set fill to black
	ellipse(288, 150, 3, 3); // pupil
	fill(48,25,52); // set fill to light dark purple
	ellipse(263, 148, 5, 5); // small eye 1
	ellipse(296, 130, 4, 4); // small eye 2
	ellipse(305, 162, 3, 3); // small eye 3
}