function setup() {
	createCanvas(1200, 880);
	print("Starting up simple shapes")
	strokeWeight(2);
	ellipseMode(RADIUS);

	print("Width = " + width);
	print("Height = " + height);	

	drawRobot();
	//drawFoldedPaper();
	//drawSublimeLogo();
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
	fill(200,162,200); // set fill to black
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

function drawFoldedPaper() {
	fill(255); // set fill to white
	quad(158, 55, 199, 14, 392, 66, 351, 107);
	triangle(347, 54, 392, 9, 392, 66);
	triangle(158, 55, 290, 91, 290, 112);
}

function drawSublimeLogo() {
	let logoWidth  = 120;
	let logoHeight = 500;
	let flapWidth  = 50;

	let xCenter = width/2;
	let yCenter = height/2;

	// Logo edges
	var xLogoLeft   = xCenter - logoWidth/2;
	var xLogoRight  = xCenter + logoWidth/2;
	var yLogoTop    = yCenter + logoHeight/2;
	var yLogoBottom = yCenter - logoHeight/2;

	// Logo interior points
	var yLogoInnerLeftTop     = yCenter + flapWidth;
	var yLogoInnerLeftBottom  = yLogoBottom + flapWidth;
	var yLogoInnerRightTop    = yLogoTop - flapWidth;
	var yLogoInnerRightBottom = yCenter - flapWidth;

	fill(255,152,3); // set fill to orange
	quad(
		xLogoLeft,  yLogoInnerLeftTop,  // x1, y1
		xLogoLeft,  yCenter,		    // x2, y2
		xLogoRight, yLogoInnerRightTop, // x3, y3
		xLogoRight, yLogoTop);          // x4, y4
}

