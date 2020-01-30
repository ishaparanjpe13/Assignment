function setup() {
  createCanvas(400, 400);
  p=0;
}
function draw(){
background(222,544,188);
  let w=55;
  let h=80;
  square(p,height/1-h/1,w,h);
  p=p+1
   if(p>width)
p=p+(-1);
  
  square(width/1-w/1,p,w,h);
  p=p+1;
  if(p>height)
p=0;
  square(p,height/2-h/2,w,h);
  p=p+1
   if(p>width)
p=p+(-1);
  
  square(width/2-w/2,p,w,h);
  p=p+1;
  if(p>height)
p=0;
  
  square(p,height/3-h/3,w,h);
  p=p+1
   if(p>width)
p=p+(-1);
  
  square(width/3-w/3,p,w,h);
  p=p+1;
  if(p>height)
p=0;

  square(p,height/4-h/4,w,h);
  p=p+1
   if(p>width)
p=p+(-1);
  
  square(width/4-w/4,p,w,h);
  p=p+1;
  if(p>height)
p=0;

  square(p,height/5-h/5,w,h);
  p=p+1
   if(p>width)
p=p+(-1);
  
  square(width/5-w/5,p,w,h);
  p=p+1;
  if(p>height)
p=0;
}


