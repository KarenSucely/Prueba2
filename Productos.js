//draggable = "true" --> Elemento pueda moverse
      //ondrastar --> llama a la funcion drop(event)
      //ondragover --> llama a la funcion allowDrop(event)
      function drag(ev) {
      //establece el tipo de dato y valor del elemento capturado, en este caso el valor del atributo id
         ev.dataTransfer.setData("text", ev.target.id); 
         ev.effectAllowed = "copyMove";
      }

      function allowDrop(ev) {
          ev.preventDefault(); //Evitar la manipulación del navegador de los datos.
      }

      function drop(ev) {
       ev.preventDefault();
       var id = ev.dataTransfer.getData("text");
       if (id=="1"){
         var nodeCopy = document.getElementById(id).cloneNode(true);
            nodeCopy.id = "1";
            ev.target.appendChild(nodeCopy);
       }else if (id=="2"){
         var nodeCopy = document.getElementById(id).cloneNode(true);
            nodeCopy.id = "2";
            ev.target.appendChild(nodeCopy);
       }else if (id=="3"){
         var nodeCopy = document.getElementById(id).cloneNode(true);
            nodeCopy.id = "3";
            ev.target.appendChild(nodeCopy);
       }
          Pedido();
      }
      


      function Pedido(){
         var Producto = document.getElementsByClassName("juegos");
         
         for(var i=0;i<Producto.length; i++){
            if(Producto[i].getAttribute("id")==1){
               document.getElementById("resultado").innerHTML = "Compra juego = Splatoon 2"; 
               
            }else if (Producto[i].getAttribute("id")==2){
               document.getElementById("resultado").innerHTML = "Compra juego = Super Mario Odyssey"; 

            }else if (Producto[i].getAttribute("id")==3){
               document.getElementById("resultado").innerHTML = "Compra juego = Zelda Breath of Wild ";  

            }
         }
      }