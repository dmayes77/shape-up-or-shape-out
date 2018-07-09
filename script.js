const MAX = 600;
let recWidth = $('#recWidth');
let recHeight = $('#recHeight');
let sqSide = $('#squareSide');
let triHeight = $('#triHeight');
let cirRadius = $('#cirRadius');
let shapeContainer = $('#shapeContainer');
let recButton = $('#recButton');
let sqButton = $('#sqButton');
let triButton = $('#triButton');
let cirButton = $('#cirButton');

// parent class of shape
class Shape {
	constructor(width, height) {
		this.width = width;
		this.height = height;
	}
	drawShape(shape) {
		this.div = $('<div></div>');
		this.div.addClass(shape);
		shapeContainer.append(this.div);
		let xVal = Math.floor(Math.random() * (600 - this.width));
		let yVal = Math.floor(Math.random() * (600 - this.height));
		this.div.css('left', `${xVal}px`);
		this.div.css('top', `${yVal}px`);
		this.div.css('width', `${this.width}px`);
		this.div.css('height', `${this.height}px`);
		this.div.click(() => {
			this.updateColor();
			this.describe();
		});
	}
	describe() {
		let className = this.constructor.name;
		let area = this.width * this.height;
		let perimeter = this.width * 2 + this.height * 2;
		$('#shapeName').text(className);
		$('#shapeWidth').text(this.width);
		$('#shapeHeight').text(this.height);
		$('#shapeArea').text(area);
		$('#shapePerimeter').text(perimeter);
	}
	updateColor() {
		let randomColor = `rgb( ${randomVal(0, 255)}, 
								 						${randomVal(0, 255)}, 
								 						${randomVal(0, 255)}`;
		$(this.div).css('background-color', randomColor);
	}
}

// child class rectangle
class Rectangle extends Shape {
	constructor(width, height) {
		super(width, height);
		this.drawShape();
	}
}

// child class square
class Square extends Rectangle {
	constructor(sideLength) {
		super(sideLength, sideLength);
		this.sideLength = sideLength;
		this.drawShape();
	}
}

// child class circle
class Circle extends Shape {
	constructor(radius) {
		super(radius, radius);
		this.drawShape();
		$('#shapeRadius').text(cirRadius.val());
	}
}

// child class triangle
class Triangle extends Shape {
	constructor(height) {
		super(height, height);
		this.cssClass = 'triangle';
		this.drawShape();
		this.div.css({
			'top-border-width': `${this.height}px`,
			'left-border-width': `${this.height}px`
		});
	}
}

// buttons
recButton.click(() => {
	let r = new Rectangle(recWidth.val(), recHeight.val());
	r.drawShape('rectangle');
});
sqButton.click(() => {
	let s = new Square(sqSide.val());
	s.drawShape('square');
});
cirButton.click(() => {
	let c = new Circle(cirRadius.val());
	c.drawShape('circle');
});
triButton.click(() => {
	let t = new Triangle(triHeight.val());
	t.drawShape('triangle');
});

// random number function
function randomVal(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}
