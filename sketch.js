/*

Officer: 1680135
CaseNum: 101-3-16003772-1680135

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a blue filled rectangle with a magenta outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar yellow filled
rectangle with a green outline around him.

Identify the man reading the newspaper by drawing a green filled rectangle
with a blue outline around him.

Identify the woman with the dog by drawing a red filled rectangle with a
blue outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...

	fill(0,0,255,100);
	stroke(255,0,255);
	rect(556,17,140,300);

	fill(255,255,0,100);
stroke(0,255,0);
rect(11,120,140,190);

fill(0,255,0,100);
stroke(0,0,255);
rect(1216,66,150,300);

fill(255,0,0,100);
stroke(0,0,255);
rect(199,15,105,220);



}
