
 

function confirmaTitulo(){
    titulo = confirmaMaquina.value;
    if(titulo.length < 10){
        alert("Insira seu título completo")
        confirmaMaquina.value = '';
    }       
    
   }
   
   
   
   function number(numeroTecla) {
      if (digito1.value == '' || digito1.value == 0) {
          digito1.value = numeroTecla;
   
      }
   
      if (digito1.value != '' || digito1.value != 0) {
          digito2.value = '';
   
      }
      if (digito2.value == '') {
          digito2.value = numeroTecla;
      }
      if (confirmaMaquina.value == ''){
   
       digito1.value='';
       digito2.value='';
      }
   }
   
   
   
   function confirma() {
      if (digito1.value == 1 && digito2.value == 5) {
          jose++;
          confirmaMaquina.value='';
          
      }
      if (digito1.value == 2 && digito2.value == 5) {
          maria++;
          confirmaMaquina.value='';
          
      }
      
      if (confirmaMaquina.value == ''){
   
       digito1.value='';
       digito2.value='';
      }
      else{
        alert("Candidato invalido");
      }

     

   
   }
   
   function corrige() {
      digito1.value = '';
      digito2.value = '';
   
   }

   function brancobtn(){
    if (confirmaMaquina.value == ''){
        digito1.value='';
        digito2.value='';
        branco='';
        }
    else{
        branco++; 
    confirmaMaquina.value='';
    }    
}


   
   function terminar(){
       
    alert("Resultado dos votos:" + "\n" + "José: " + jose + " " + "Maria: " + maria + " " + "Brancos: " + branco);
    jose=0;
    maria=0;
    branco=0;
    
    if (titulo == ''){
   
   digito1.value='';
   digito2.value='';
   }
   
   }