(function(){
    'use strict';

    let i=0;
    let image = document.getElementById("img");
    let imgs = new Array('image/turnik.png', 'image/turnik2.png', 'image/turnik3.png', 'image/turnik4.png', 'image/turnik5.png');

    let img = document.getElementById("img2");
    let images = new Array('image/turnik.png', 'image/turnik2.png', 'image/turnik3.png', 'image/turnik4.png', 'image/turnik5.png');
   
    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");

//  ФУНКЦИЯ, ВЫВОДЯЩАЯ КАРТИКИ ПО ОЧЕРЕДИ ИЗ МАССИВА imgs
function imgsrc(){
  i++;
  image.src = imgs[i];
        
      if (i == imgs.length) {
          i = 0;
          image.src = imgs[i];
          }
      };

function imagesrc(){
        i++;
        img.src=images[i];
        
        if (i == images.length) {
            i = 0;
            img.src = images[i];
          }
      };

// Добавляет событие при клике на кнопку
  btn1.addEventListener('click', function() {
          imgsrc();
         
      });

  btn2.addEventListener('click', function() {
      imagesrc();
         
      });
    
// Функция, меняющая цвет иконки на кнопке с ограничением в 1с
      function colorBtn() {
          let original =  btn1.style.color;
          btn1.style.color = 'red';

          window.setTimeout(function() {
              btn1.style.color = original; 
          }, 1000);
      }

      function colorBtn1() {
          let original =  btn2.style.color;
          btn2.style.color = 'red';

          window.setTimeout(function() {
              btn2.style.color = original; 
          }, 1000);
      }

// Функция, поворачивающая кнопку при смене каждой картинки на 360 градусов

      function rotate() {
          btn1.style.transform = "rotate(" +i*(-360) + "deg)";
          window.requestAnimationFrame(rotate);
      }
      let id = window.requestAnimationFrame(rotate);

      function rotate1() {
          btn2.style.transform = "rotate(" +i*(-360) + "deg)";
          window.requestAnimationFrame(rotate);
      }
      let id1 = window.requestAnimationFrame(rotate);

// Функция, которая выполняет все предыдущие с периодичностью в 5 секунд  
      setInterval(function() {
           imgsrc();
           imagesrc();
           rotate();
           rotate1();
           colorBtn();
           colorBtn1();
      }, 5000 );
      

})();