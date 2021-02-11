let input = document.querySelector('.input input');
let span = document.querySelector('.texto');
let contador = 0;

function enviar(){
       
   if(span.classList.contains('spanOn')){
       
   } else {
      let separador = input.value.split(""); 

      for(i = 0; i < separador.length; i++){
         let criaSpan = document.createElement('span');
         span.appendChild(criaSpan);
         criaSpan.innerHTML=separador[contador++];
      }

      span.classList.add('spanOn');

      contador = 0;
   }
   
}

function limpar(){ 
   let getSpan = document.querySelectorAll('.texto span');
   getSpan.forEach((item) => {
      item.remove();
   });

   span.classList.remove('spanOn');
   input.value="";

}


