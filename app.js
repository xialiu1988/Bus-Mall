'use strict';
var products=[];
var totalClicks=0;
var pictureshowIndex=[];

var pictureBox = document.getElementById('pictureArrays');
var img1 = document.getElementById('imgone');
var img2 = document.getElementById('imgtwo');
var img3 = document.getElementById('imgthree');
new Product('bag','assets/bag.jpg');
new Product('banana','assets/banana.jpg');
new Product('bathroom','assets/bathroom.jpg');
new Product('boots','assets/boots.jpg');
new Product('breakfast','assets/breakfast.jpg');
new Product('bubblegum','assets/bubblegum.jpg');
new Product('chair','assets/chair.jpg');
new Product('cthulhu','assets/cthulhu.jpg');
new Product('dog-duck','assets/dog-duck.jpg');
new Product('dragon','assets/dragon.jpg');
new Product('pen','assets/pen.jpg');
new Product('pet-sweep','assets/pet-sweep.jpg');
new Product('scissors','assets/scissors.jpg');
new Product('shark','assets/shark.jpg');
new Product('sweep','assets/sweep.png');
new Product('tauntaun','assets/tauntaun.jpg');
new Product('unicorn','assets/unicorn.jpg');
new Product('usb','assets/usb.gif');
new Product('water-can','assets/water-can.jpg');
new Product('wine-glass','assets/wine-glass.jpg');




function Product(name,src){

  this.name=name;
  this.src=src;
  this.percentage=0;
  //   this.totalClicks=0;
  this.shown=0;
  this.clicked=0;
  products.push(this);
}




function getRandomIndex(){

  var rannum=Math.floor(Math.random()*(products.length));
  return rannum;
}


function getUniqueImages(){
  pictureshowIndex=[];
  var picone=getRandomIndex();
  pictureshowIndex.push(picone);


  var pictwo=getRandomIndex();
  while(pictwo===pictureshowIndex[0]){

    pictwo=getRandomIndex();

  }
  pictureshowIndex.push(pictwo);


  var picthree=getRandomIndex();
  while(picthree===pictureshowIndex[0]||picthree===pictureshowIndex[1]){

    picthree=getRandomIndex();
  }

  pictureshowIndex.push(picthree);
  return pictureshowIndex;



}


function render(){

  if(totalClicks===0)
  {
    getUniqueImages();
    img1.name=products[pictureshowIndex[0]].name;
    img1.src=products[pictureshowIndex[0]].src;
    products[pictureshowIndex[0]].shown++;

    img2.name=products[pictureshowIndex[1]].name;
    img2.src=products[pictureshowIndex[1]].src;
    products[pictureshowIndex[1]].shown++;

    img3.name=products[pictureshowIndex[2]].name;
    img3.src=products[pictureshowIndex[2]].src;
    products[pictureshowIndex[2]].shown++;

 
  }
  
}



function newset(){


  var previousIndex=pictureshowIndex;
  var newIndex=getUniqueImages();

  while(previousIndex[0]===newIndex[0]||previousIndex[1]===newIndex[0]||previousIndex[2]===newIndex[0]){

    newIndex=getUniqueImages();
    
  }
  img1.name=products[pictureshowIndex[0]].name;
  img1.src=products[pictureshowIndex[0]].src;
  products[pictureshowIndex[0]].shown++;

  
  img2.name=products[pictureshowIndex[1]].name;
  img2.src=products[pictureshowIndex[1]].src;
  products[pictureshowIndex[1]].shown++;


  img3.name=products[pictureshowIndex[2]].name;
  img3.src=products[pictureshowIndex[2]].src;
  products[pictureshowIndex[2]].shown++;


}


function clicknumber(event){

  totalClicks++;
  for(var i=0;i<products.length;i++){
    if(event.target.name===products[i].name)
      products[i].clicked++;
    // products[i].percentage=Math.round(products[i].clicked/products[i].shown*100);

  }
  if(totalClicks<25){
    newset();
  }
  else{
    pictureBox.textContent='';
    createChart();
  
  }


}


function reset(event){

 event.preventDefault();
 if(event.target.id==='resetbutton'){

   window.location.reload();


 }

} 

function createChart(){

  pictureBox.style.backgroundColor='white';
  var title=document.createElement('h5');
  title.textContent='Bar Chart';
  pictureBox.appendChild(title);

  var chartBox=document.createElement('canvas');
  chartBox.width='400';
  chartBox.height='100';
  pictureBox.appendChild(chartBox);


  var ctx = chartBox.getContext('2d');
  var data = {
    labels: [],
    datasets: [
      {
        label: 'Total votes',
        backgroundColor: [
          '#FF6386',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],
        borderColor: [
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
        ],
        borderWidth: 1,
        data: [],
      },
      {
        label: 'Total Shown times',
        backgroundColor: [
          '#FF6386',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966FF'
        ],borderColor: [
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#4BC0C0',
          '#9966C0',
          '#FF6384',
          '#36A2EB',
          '#FFCE56'
         
        ],

        data: [],
      },
    ],
  };
  // function displayResults() {

  //   for (var i = 0; i < products.length; i++) { //start at 0. is 0 < 20? if yes, increment it by 1
  //     var listEl = document.createElement('li');
  //     listEl.textContent = products[i].votes + ' votes for the ' + products[i].name + ' and views ';
  //     results.appendChild(listEl);
  //   }
  // }

  for(var i=0;i<products.length;i++){

    data.labels.push(products[i].name);
    data.datasets[0].data.push(products[i].clicked);
    data.datasets[1].data.push(products[i].shown);

  }
  new Chart(ctx, {
    type: 'bar',
    data: data,
  });

}

img1.addEventListener('click', clicknumber);
img2.addEventListener('click', clicknumber);
img3.addEventListener('click', clicknumber);
this.resetbutton.addEventListener('click',reset);

render();

  