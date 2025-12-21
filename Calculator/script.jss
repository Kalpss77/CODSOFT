const display=document.getElementById('display');
          function appendvalue(value){
             if(display.innerText=='0' || display.innerText=='Error'){
                 display.innerText=value;
             }else{
                 display.innerText+= value;
             }
          }
          function cleardisplay(){
              display.innerText='0';
          }
          function calculate (){
              try{
                  let result=eval(display.innerText.replace('%','/100'));
                  display.innerText=result;
              }
          catch(e){
               display.innerText='Error';
             }    
          }