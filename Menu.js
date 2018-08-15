$(document).ready(main);  //Ejecutar la funcion main
var contador = 1;
function main() {
	$('.Menu_bar').click(function(){
		if (contador==1) {
			$('nav').animate({
				left: '0'
			});
			contador=0;
		}else{
			contador=1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});
};



     
      
 