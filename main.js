let noktalar=[];
let nokta_sayisi=60;
let sw,clrr;

function setup() {
createCanvas(800,600);

olustur();

function bagla(){
for (i of noktalar) {
var d =dist(x.i,x.y,j.i,j.y);
}for (j noktalar) {
if (d <80) {
clrr=color();
if (d <50) {
}else {
clrr=color();
}

stroke(clrr);
strokeWeight(sw);
line(j.x,j.i,i.x,x.y);
}
}


}//fonksiyon Sonu

var btn=createButton();
btn.addClass();
btn.mousePressed(olustur);
}





function ciz(){
background(230);
for (var i of noktalar) {
i.show();
i.move();
i.kontrol();
}


bagla();

}






function olustur(){
noktalar=[];
for(var i=0;i<nokta_sayisi;i++;){
var n1=random(-1,-1);
var n2=random(-0.1,0.1);
noktalar.push(new nokta(random(width),random(height),n1,n2));
}



}
