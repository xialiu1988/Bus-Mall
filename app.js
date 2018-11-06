

var products=[];
var totalClicks=0;

var imgone=document.getElementById('divone');
var imgtwo=document.getElementById('divtwo');
var imgthree=document.getElementById('divthree');

new Product('bag','bag.jpg');
new Product('banana','banana.jpg');
new Product('bathroom','bathroom.jpg');
new Product('boots','boots.jpg');
new Product('breakfast','breakfast.jpg');
new Product('bubblegum','bubblegum.jpg');
new Product('chair','chair.jpg');
new Product('cthulhu','cthulhu.jpg');
new Product('dog-duck','dog-duck.jpg');
new Product('dragon','dragon.jpg');
new Product('pen','pen.jpg');
new Product('pet-sweep','pet-sweep.jpg');
new Product('scissors','scissors.jpg');
new Product('shark','shark.jpg');
new Product('sweep','sweep.png');
new Product('tauntaun','tauntaun.jpg');
new Product('unicorn','unicorn.jpg');
new Product('usb','usb.gif');
new Product('water-can','water-can.jpg');
new Product('wine-glass','wine-glass.jpg');




function Product(name,src){

  this.name=name;
  this.src=src;
  //   this.totalClicks=0;
  this.votes=0;
  products.push(this);
}



var tracker={



  getRandomIndex:function(){

    var rannum=Math.floor(Math.random()*(products.length));
    return rannum;
  },


  getUniqueImages:function(){
    var mainEl=document.getElementById('main-content');

    var rand1=this.getRandomIndex();
    var rand2=this.getRandomIndex();
    var rand3=this.getRandomIndex();
    mainEl.appendChild(imgone);
    mainEl.appendChild(imgtwo);
    mainEl.appendChild(imgthree);

    while(rand2===rand1){
      rand2=this.getRandomIndex();
    }


    while(rand3===rand2||rand3===rand1){

      rand3=this.getRandomIndex();
    }
    imgone.src=products[rand1].src;
    imgtwo.src=products[rand2].src;
    imgthree.src=products[rand3].src;

      products[rand1].votes++;
      products[rand2].votes++;
      products[rand3].votes++;

    totalClicks++;
  },





  renderImages:function(){


  },



  addClickTracker:function(){


  },




    clickHandler:function(){
   
      if(this.totalClicks<=25){
     
        this.getUniqueImages();
        this.totalClicks++;

      }

    },

  //   imgone:addEventListener('click',this.clickHandler),

  //   imgtwo:addEventListener('click',this.clickHandler),
  //   imgthree:addEventListener('click',this.clickHandler),

};


document.querySelector('#divone').addEventListener('click',function(){

  tracker.getRandomIndex();
  tracker.getUniqueImages();

});
document.querySelector('#divtwo').addEventListener('click',function(){

  tracker.getRandomIndex();
  tracker.getUniqueImages();

});
document.querySelector('#divthree').addEventListener('click',function(){

  tracker.getRandomIndex();
  tracker.getUniqueImages();

});



tracker.getRandomIndex();
tracker.getUniqueImages();
tracker.renderImages();





