
var imageWidth = document.querySelector('#front-intro-img');
var imageHalf = imageWidth.clientWidth/2;
var imageWidth = document.querySelector('#front-intro-img');
var frontInfo= document.querySelector('.front-intro-text');

// imageWidth.style.right = -(screen.width*.2-imageHalf)+'px';
imageWidth.style.right = -imageHalf + 'px';
frontInfo.style.marginLeft = imageHalf + 'px';