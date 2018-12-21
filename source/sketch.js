var star = {
	x: 0,
	y: 0,
	diameter: 30,
	color: 'rgb(255, 255, 0)',
	mass: 20000,
	velx: 0,
	vely: 0
};

var planet = {
	x: 0,
	y: 0,
	diameter: 20,
	color: 'rgb(51, 171, 240)',
	mass: 500,
	velx: 10,
	vely: 0
}

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(0);
	star.x = windowWidth/2;
	star.y = windowHeight/2;
	planet.x = star.x;
	planet.y = star.y - 200;
}

function update(obj1, obj2) {
	dist = ((obj1.x - obj2.x)**2 + ((obj1.y - obj2.y)**2))**0.5;
	cos = (obj1.x - obj2.x) / dist;
	sin = (obj1.y - obj2.y) / dist;
	acc = obj2.mass / (dist**2);
	obj1.velx = obj1.velx - (acc*cos);
	obj1.vely = obj1.vely - (acc*sin);
	if ((obj1.x > windowWidth) || (obj1.x < 0) || (obj1.y > windowHeight) || (obj1.y < 0) || (dist < 20)) {
		obj1.velx = 0;
		obj1.vely = 0;
	}
	obj1.x = obj1.x + obj1.velx;
	obj1.y = obj1.y + obj1.vely;
	fill(obj1.color);
	noStroke();
	ellipse(obj1.x, obj1.y, obj1.diameter);
}

function draw() {
  background(0)
	update(planet, star);
	update(star, planet);
}

function mousePressed() {
	box = planet.mass;
	planet.mass = star.mass;
	star.mass = planet.mass;
}
