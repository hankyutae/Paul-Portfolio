
/* global $ */
// eslint-disable-next-line no-unused-vars
const linkToPage ={
  'home-link': 'home-page',
  'about-me-link': 'about-me-page',
  'contact-me-link': 'contact-me-page',
  'projects-link': 'projects-page',
};

let currentPageLink='home-link';

function showTargetHideCurrent(target){
  $(`#${linkToPage[target]}`).removeClass('hidden');
  $(`#${target}`).addClass('hidden');
  $(`#${currentPageLink}`).removeClass('hidden');
  $(`#${linkToPage[currentPageLink]}`).addClass('hidden');
  currentPageLink=target;
  $('.fixed-nav-links').addClass('hidden');
}

function handleLinkClick(){

  $('.fixed-nav-links').on('click',e=>{
    e.preventDefault();
    const target= $(e.target).closest('li')[0].id;
    showTargetHideCurrent(target);
  });

}
function setDate(){
  let year = new Date().getFullYear();
  $('footer').html(`&#169; KPHan ${year}`);
}
function handleNavButtonClick(){
  $('.nav-button').on('click',e=>{
    e.preventDefault();
    const theNavLinks=$('.fixed-nav-links');
    if(!theNavLinks.hasClass('activated')){
      $('.fixed-nav-links').removeClass('deactivated');
      $('.fixed-nav-links').addClass('activated');
    }
    else{
      $('.fixed-nav-links').removeClass('activated');
      $('.fixed-nav-links').addClass('deactivated');
    }
    handleClickAnywhereButLink();
  });
}



function handleClickAnywhereButLink(){
  $('body').click(e=>{
    e.preventDefault();
    const theNavLinks=$('.fixed-nav-links');
    if(theNavLinks.hasClass('activated')){
      $('.fixed-nav-links').removeClass('activated');
      $('.fixed-nav-links').addClass('deactivated');
    }
  });
  $('.dropdown-wrapper').click(e=>e.stopPropagation());
}



function main(){
  setDate();
  handleNavButtonClick();
  //handleLinkClick();
}

$(main);