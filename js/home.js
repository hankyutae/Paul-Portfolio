/* global $*/
const imgsrc=['img/imageedit_35_8033162653.jpg','img/15610685316106413.jpg','img/chaneweebearlite4.gif','img/PixelArt2LoopSquare.gif','img/polaroidsquare.png'];


const boxTranslator={
  '.b2':'about-me-link',
  '.b4':'projects-link',
  '.b9':'contact-me-link'
};

function preloadImages(){
  let preloadImg;
  for(let i=0;i<imgsrc.length;i++){
    preloadImg=new Image();
    preloadImg.src=imgsrc[i];
  }
}

function handleAnimateMyFace(){
  $('.b2').on('mouseenter',e=>{
    let image = $('.home-picture');
    image.fadeOut('slow', function () {
      image.attr('src', 'img/imageedit_35_8033162653.jpg');
      image.fadeIn('slow');
    });
  });
  $('.b2').on('mouseleave',e=>{
    let image = $('.home-picture');
    image.fadeOut('slow', function () {
      image.attr('src', 'img/15610685316106413.jpg');
      image.fadeIn('slow');
    });
  });
}

function handleClickBox(){
  $('.b4').click(e=>{
    e.preventDefault();
    window.location.href = './projects.html';
    /* showTargetHideCurrent(boxTranslator['.b5']); */
  });
  $('.b2').click(e=>{
    e.preventDefault();
    window.location.href = './about-me.html';
    /* showTargetHideCurrent(boxTranslator['.b2']); */
  });
  /* $('.b3').click(e=>{
    e.preventDefault();
    window.location.href = './projects.html';
  }); */
  $('.b9').click(e=>{
    e.preventDefault();
    window.location.href = './contact-me.html';
    /* showTargetHideCurrent(boxTranslator['.b12']) */
  });
}

function home(){
  preloadImages();
  handleAnimateMyFace();
  handleClickBox();

}

$(home);