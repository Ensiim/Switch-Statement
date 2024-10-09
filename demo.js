const select = document.querySelector('select');
const para = document.querySelector('p');
const html = document.querySelector('body');

      select.addEventListener('change', setWeather);

      function setWeather() {
        const choice = select.value;

        switch(choice) {
          case 'summer':
            para.textContent = 'The sound of waves gently crashing against the shore evokes a sense of peace, reminding all of the beauty found in nature\'s rhythm.';
            para.style.backgroundColor = "rgba(86, 182, 255, 0.568)";
            para.style.color = "white";
            html.style.backgroundImage = "url('images/summer.jpeg')";
            para.style.fontSize = "26px";
        break;

          case 'spring':
          para.textContent = 'The vibrant colors of cherry blossoms remind all of the beauty that emerges from even the smallest seeds of hope, brightening the days of spring.';
          para.style.backgroundColor = "rgba(255, 86, 103, 0.568)";
          para.style.color = "white";
          html.style.backgroundImage = "url('images/actualspring.jpeg')";
          para.style.fontSize = "26px";
        break;

          case 'pollening':
          para.textContent = 'The graceful movement of pollen in the air serves as a reminder of the fragile nature of life and the balance essential for sustaining blooms.';
          para.style.backgroundColor = "rgba(255, 249, 86, 0.568)";
          para.style.color = "white";
          html.style.backgroundImage = "url('images/pollening.jpeg')";
          para.style.fontSize = "26px";
        break;

          case 'fools':
          para.textContent = 'The spirited emergence of blooms in the chill inspires all to celebrate the beauty of change, showing the resilence can thrive amid adversity.';
          para.style.backgroundColor = "rgba(255, 142, 86, 0.568)";
          para.style.color = "white";
          html.style.backgroundImage = "url('images/fools.jpeg')";
          para.style.fontSize = "26px";
        break;

          case 'falling':
          para.textContent = 'Cozy sweaters and the scent of cinnamon fill homes, creating an atmosphere of comfort and warmth that envelops all in a tender embrace.';
          para.style.backgroundColor = "rgba(255, 114, 86, 0.568)";
          para.style.color = "white";
          html.style.backgroundImage = "url('images/actualf.jpeg')";
          para.style.fontSize = "26px";
        break;

          case 'fake':
          para.textContent = 'The heat of summer and the sound of leaves crunching underfoot stir a sense of nostalgia, conjuring images of laughter from the past.';
          para.style.backgroundColor = "rgba(218, 255, 86, 0.568)";
          para.style.color = "white";
          html.style.backgroundImage = "url('images/fakef.jpeg')";
          para.style.fontSize = "26px";
        break;

          case 'winter':
          para.textContent = 'Twinkling lights create a magical ambiance on houses, brightening the dark nights and filling the neighborhood with warmth and joy.';
          para.style.backgroundColor = "rgba(255, 156, 86, 0.568)";
          para.style.color = "white";
          html.style.backgroundImage = "url('images/winter.jpeg')";
          para.style.fontSize = "26px";
        break;
        default:
           para.textContent = '';
        }
      }
      
      
      
      