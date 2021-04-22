var World = Matter.World;
var Bodies = Matter.Bodies;
var Engine = Matter.Engine;
var engine, world19;
var bk, canvas;
var canvasMouse, mouseConstraint;

function preload(){
	bkIMG = loadImage("bk.png");
}

function setup(){
	var canvas = createCanvas(1000,500);
	engine = Engine.create();
	world19 = engine.world;

    canvasMouse = Matter.Mouse.create(canvas.elt);
	canvasMouse.pixelRatio = pixelDensity();
	var options = {
		mouse: canvasMouse
	};
    mouseConstraint = Matter.MouseConstraint.create(engine, options);
	Matter.World.add(world19, mouseConstraint);

	poke1 = new Bob(350,430,30);
	poke2 = new Bob(411,430,30);
	poke3 = new Bob(471,430,30);
	poke4 = new Bob(531,430,30);     
	poke5 = new Bob(591,430,30);

	rope1 = new Rope({x : 350, y : 100}, poke1.body)
	rope2 = new Rope({x : 410, y : 100}, poke2.body);
	rope3 = new Rope({x : 470, y : 100}, poke3.body);
	rope4 = new Rope({x : 530, y : 100}, poke4.body);
	rope5 = new Rope({x : 590, y : 100}, poke5.body);
}

function draw(){
	imageMode(CENTER);
	image(bkIMG,width/2,height/2,width,height);
	Engine.update(engine);
	rope1.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
	poke1.display();
	poke2.display();
	poke3.display();
	poke4.display();
	poke5.display();
}
function mouseDragged(){
	Matter.Body.setPosition(poke1.body,{x : mouseX, y : mouseY});
}