        function miWst() {
                 alert('WhatsApp: 809-648-6026');
             }
             

             function CambiarColor(){
               
            var randomColor = Math.floor(Math.random()*16777215).toString(16)
            document.getElementById('color').style.backgroundColor='#'+randomColor

             }
  

        function  CambiarNumeroPrimo(){

           
            var valorActual= document.getElementById('button-dos').value;
            valorActual++;
            valor=primo(valorActual);


            while (valor==0){
            	 valorActual++;
                 valor=primo(valorActual);
            }

           document.getElementById('button-dos').value=valor;
            


            

            }


      function primo(num){

      			var a=0;
      			 for(i=1;i<(num+1);i++){  
      			         if(num%i==0){  
      			             a++;  
      			            }  
      			         }  
      			         if(a!=2){  
      			            return 0;
      			         }else
      			            return num;
      			         
              }


      function CambiarTitulo() {

        //j
                    
               	        //var TituloActual="";
                        var TituloActual= document.getElementById('titulo').textContent;
                        var primera = TituloActual.charAt(0);
                        var nombre= TituloActual.slice(1,8);
                        var Ultima=TituloActual.substr(-4);
                      
                       document.getElementById('titulo').innerHTML= nombre+primera+" "+Ultima;
                 }





      function validar(){

    
              var nombre =document.getElementById("nombre").value;
              var edad=document.getElementById("edad").value;
              var colors= getRadioValue("color");

              var mensaje="Existen campos incompletos";
            
              if(nombre==""||edad==""){
                 document.getElementById("pantalla").innerHTML=mensaje;
                 }
              else {
                      alert("Mi nombre es "+nombre+", tengo "+edad+" años y me gusta el "+colors);
                }
   }
   
    
   
   
       function getRadioValue(elemento){
                var elements = document.getElementsByName(elemento);
                
              for (var i = 0, l = elements.length; i < l; i++){
                   if (elements[i].checked){
                      return elements[i].value;
                     }
                 }
  }
    
   
   

function valida_cedula(cedula,resultado) {  
     ced=cedula.value;
   if(ced.length != 13) {  alert("formato invalido"); } 
   else{
    var c = ced.replace(/-/g,'');  
    var Cedula = c.substr(0, c.length - 1);  
    var Verificador = c.substr(c.length - 1, 1);  
    var suma = 0;  
     
    for (i=0;i < Cedula.length;i++) {  
        mod = "";  
         if((i % 2) == 0){mod = 1} else {mod = 2}  
         res = Cedula.substr(i,1) * mod;  
         if (res > 9) {  
              res = res.toString();  
              uno = res.substr(0,1);  
              dos = res.substr(1,1);  
              res = eval(uno) + eval(dos);  
         }  
         suma += eval(res);  
    }  
    el_numero = (10 - (suma % 10)) % 10;  
    if (el_numero == Verificador && Cedula.substr(0,3) != "000") {  
      resultado.value="La Cedula es valida";
   
    }  
    else   {  
    resultado.value="La Cedula es ilegal";  
    }
  }  
}  
