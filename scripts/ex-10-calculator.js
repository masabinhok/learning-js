let calculation =localStorage.getItem('calculation')||'';
    console.log(calculation);

    document.querySelector('.js-result').innerHTML=calculation;
    
    function updateCalculation(data) {
      if(data === '='){
        calculation = eval(calculation); 
        console.log(calculation);
        document.querySelector('.js-result').innerHTML=calculation;
        localStorage.setItem('calculation', calculation);

      }
      else{
      calculation+=data;
      console.log(calculation);

      document.querySelector('.js-result').innerHTML=calculation;
      localStorage.setItem('calculation', calculation);
      }
    }