//function for products which are in available and upcoming
function available(evnt, image)
{
   var i, images, link;
   var images = document.getElementsByClassName("top");

   for (i = 0; i < images.length; i++)
   {
     images[i].style.display = "none";
   }
   var link = document.getElementsByClassName("links");
   for (i = 0; i < link.length; i++)
   {
     link[i].className = link[i].className.replace(" active", "");
   }
    document.getElementById(image).style.display = "block";
    evnt.currentTarget.className += " active";
    topslide(1);
    downslide(1);
}
//function ending
//slider for available
   var Index = 1;
function availableSlideImage(n)
{
  topslide(Index += n)
}
function topslide(n)
{
  var i
  var x=document.getElementsByClassName("topsliders");
  if (n > x.length)
   {
     Index = 1
   };
  if (n < 1)
   {
   	 Index = x.length;
   }
  for (i = 0; i < x.length; i++)
   {
     x[i].style.display = "none";
   }
  x[Index-1].style.display = "block";
}
//slider ending for available
//slider for upcoming
function upcomeSlideImage(k)
{
	downslide(Index +=k)
}
function downslide(k)
{
  var i ;
  var l=document.getElementsByClassName("downsliders");
  if (k > l.length)
   {
    Index = 1
   };
  if (k < 1)
   {
   	 Index = l.length;
   }
  for (i = 0; i < l.length; i++)
   {
     l[i].style.display = "none";
   }
  l[Index-1].style.display = "block";
}
//slider ending for upcoming
