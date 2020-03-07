document.querySelector('.header__hamburger').addEventListener('click', ()=>{

  document.querySelector('.header__hamburger').classList.toggle('active');
    document.querySelector('.section-our-practice').classList.toggle('active');
    document.querySelector('.navigation').classList.toggle('active');
});





///waypoints 



// var waypoint = new Waypoint({
//     element: document.getElementById('map'),
//     handler: function(direction) {
//       console.log('Scrolled to waypoint!');
//       console.log(this.triggerPoint, direction);
//     }
//   });


var accordion = document.getElementsByClassName("faq-header");

for(var i = 0; i < accordion.length; i++){
  accordion[i].onclick = function(){
   
    var content = this.nextElementSibling;

    if(content.style.maxHeight){

      content.style.maxHeight = null;
    }else{
      content.style.maxHeight = content.scrollHeight + "px";
    }
  }
}





  