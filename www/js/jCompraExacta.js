var indexCE = {
	
	init: function(){
		
		$("#ce-index-dialog-0").hide();
		$("#ce-index-vaca-img-1").show();
		$("#ce-index-vaca-img-2").hide();
		$("#ce-vaca-bolso-img").hide();
		$("#index-compra-e .btn").hide();
  		
	},
	start: function(){
		
		var dialog0 = document.getElementById("ce-index-dialog-0");
		var vacaPos1 = document.getElementById("ce-index-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-index-vaca-img-2");
		var vacaBolso = document.getElementById("ce-vaca-bolso-img");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000);
  			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Dialogo:
			fillSpanWithCorrectFontSize( $("#index-compra-e .dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				$("#index-compra-e .btn").show();
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},500);//Espera medio segundo para empezar a hablar.
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
	/*Acción al tocar la vaca para empezar el juego
	  Hace la intro y muestra a la vaca entrando al kiosco*/			
		$("#index-compra-e .kiosco").bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				$("#index-compra-e .ce-vaca-img").hide();
				$("#ce-index-dialog-0").hide();  				
				//Luego, se muestra la vaca con la bolsa
				$("#ce-vaca-bolso-img").show();
				window.setTimeout(function(){
					$.mobile.navigate( "#b1-compra-e", { transition : "none" });
				},1000); //Para dejar ver al usuario a la vaca.
			}
		});
		
	//TODO: Acá, se debería setear el atributo "estadoBotonesNav" de compraExacta segun los datos del usuario en uso de localStorage.
	//Esto hará que tenga disponibles los botones de los niveles que ya pasó.	
	}
};

var b1 = {
	
	variantesJuego:[	{
						"mPago":mediosDePago.bill5, 
						"1":productos.halls_2pe, 
						"2":productos.glincoln_15pe,
						"3":productos.tita_5pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"mPago":mediosDePago.bill10, 
						"1":productos.halls_2pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.tita_5pe,
						"4":productos.glincoln_15pe 
				    	},
				    	{
						"mPago":mediosDePago.bill2, 
						"1":productos.tita_5pe, 
						"2":productos.glincoln_15pe,
						"3":productos.halls_2pe,
						"4":productos.chocoShot_7Pe 
				    	}			    	
				   ],
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#b1-compra-e .producto img");
		var billete = document.getElementById("ce-b1-bill");
		
		$("#ce-b1-dialog-0").hide();
		$("#ce-b1-vaca-img-1").show();
		$("#ce-b1-vaca-img-2").hide();
		$("#b1-compra-e .btn").hide();
		$(billete).hide();
		$productos.removeClass("correcto");		
		
		var random = randomIntFromInterval(0,b1.variantesJuego.length-1);
		var varianteJuego = b1.variantesJuego[random];
		var numOpc = 1;
		//Cargo la imagen del billete de la variante seleccionada.
		billete.src = varianteJuego["mPago"].rutaImg;
		$(billete).show();
		
		var valorMedioPago = varianteJuego["mPago"].valor;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = varianteJuego[numOpc.toString()].rutaImg;
			if( varianteJuego[numOpc.toString()].precio == valorMedioPago ){
				$(value).addClass("correcto");
			};
			numOpc++;
		});
		numOpc = 1;
		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#b1-compra-e .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + varianteJuego[numOpc.toString()].precio.toString();
			numOpc++;			
		});		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		var dialog0 = document.getElementById("ce-b1-dialog-0");
		var vacaPos1 = document.getElementById("ce-b1-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-b1-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#ce-b1-estante .precio"), null, null, "black" );		
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 /*por ahora*/ );
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(compraExacta.estadoBotonesNav["b1-compra-e"], "#b1-compra-e", "b1", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up imagenes de productos:
		var $productos = $("#b1-compra-e .producto img");
		$productos.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-e", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $productos, 4, 0, 1, 40 );
	}
};

var b2 = {
	
	variantesJuego:[	{
						"prod": productos.halls_2pe, 
						"1":mediosDePago.bill5, 
						"2":mediosDePago.bill2,
						"3":mediosDePago.bill20						 
				    	},
				    	{
						"prod": productos.lilaPause_10pe, 
						"1":mediosDePago.bill10, 
						"2":mediosDePago.bill5,
						"3":mediosDePago.bill100						 
				    	},
				    	{
						"prod": productos.tita_5pe, 
						"1":mediosDePago.bill2, 
						"2":mediosDePago.bill50,
						"3":mediosDePago.bill5						 
				    	},
				    	{
						"prod": productos.glincoln_20pe, 
						"1":mediosDePago.bill2, 
						"2":mediosDePago.bill20,
						"3":mediosDePago.bill10						 
				    	},
				    	{
						"prod": productos.chocoShot_10Pe, 
						"1":mediosDePago.bill2, 
						"2":mediosDePago.bill100,
						"3":mediosDePago.bill10						 
				    	}			    	
				   ],
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $billetes = $("#b2-compra-e .bill-opc img");
		var productoImg = document.getElementById("ce-b2-p");
		
		$("#ce-b2-dialog-0").hide();
		$("#ce-b2-vaca-img-1").show();
		$("#ce-b2-vaca-img-2").hide();
		$("#b2-compra-e .btn").hide();
		$billetes.hide();
		$(productoImg).hide();
		$billetes.removeClass("correcto");		
		
		var random = randomIntFromInterval(0,b2.variantesJuego.length-1);
		var varianteJuego = b2.variantesJuego[random];
		var numOpc = 1;
		//Cargo la imagen del producto de la variante seleccionada.
		productoImg.src = varianteJuego["prod"].rutaImg;		
		
		var valorMedioPago = varianteJuego["prod"].precio;
		//Cargo la imagen de los billetes de la variante seleccionada.
		$.each( $billetes , function(key, value){
			value.src = varianteJuego[numOpc.toString()].rutaImg;
			if( varianteJuego[numOpc.toString()].valor == valorMedioPago ){
				$(value).addClass("correcto");
			};
			numOpc++;
		});		
		
		//Cargo el precio del producto de la variante seleccionada.
		$("#ce-b2-precio span")[0].textContent = "$" + varianteJuego["prod"].precio.toString();
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		var dialog0 = document.getElementById("ce-b2-dialog-0");
		var vacaPos1 = document.getElementById("ce-b2-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-b2-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#ce-b2-precio"), null, null, "black" );
		
		//Muestro los billetes y el producto con un retraso para que carguen las img.
		$("#b2-compra-e .bill-opc img").show();
		$("#ce-b2-p").show();				
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 /*por ahora*/ );
  			// Dialogo:
			fillSpanWithCorrectFontSize( $("#b2-compra-e .dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(compraExacta.estadoBotonesNav["b2-compra-e"], "#b2-compra-e", "b2", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up imagenes de billetes:
		var $billetes = $("#b2-compra-e .bill-opc img");
		$billetes.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-e", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $billetes, 4, 0, 1, 40 );
	}
	
};

var b3 = {
	
	variantesJuego:[	{
						"prod": productos.halls_2pe, 
						"bill": mediosDePago.bill2,																		 
				    	},
				    	{
						"prod": productos.chocoShot_10Pe, 
						"bill": mediosDePago.bill10,
						},
				    	{
						"prod": productos.tita_5pe, 
						"bill": mediosDePago.bill2,
						},
				    	{
						"prod": productos.chocoShot_7Pe, 
						"bill": mediosDePago.bill5,
						},
				    	{
						"prod": productos.lilaPause_10pe, 
						"bill": mediosDePago.bill10,
						},
				    	{
						"prod": productos.glincoln_20pe, 
						"bill": mediosDePago.bill20,
						},
				    	{
						"prod": productos.glincoln_15pe, 
						"bill": mediosDePago.bill10,
						},
				    	{
						"prod": productos.glincoln_20pe, 
						"bill": mediosDePago.bill5,
						},
				    	{
						"prod": productos.lilaPause_10pe, 
						"bill": mediosDePago.bill2,
						}
				    				    	
				   ],
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var billete = document.getElementById("b3-bill");
		var productoImg = document.getElementById("ce-b3-p");
		var $opcSiNo = $("#b3-compra-e .sino-opt");		
		
		$("#ce-b3-dialog-0").hide();
		$("#ce-b3-vaca-img-1").show();
		$("#ce-b3-vaca-img-2").hide();
		$("#b3-compra-e .btn").hide();
		$(billete).hide();
		$(productoImg).hide();
		$opcSiNo.find("img").removeClass("correcto");		
		
		var random = randomIntFromInterval(0,b3.variantesJuego.length-1);
		var varianteJuego = b3.variantesJuego[random];
		//Cargo la imagen del producto de la variante seleccionada.
		productoImg.src = varianteJuego["prod"].rutaImg;		
		
		//Cargo la imagen del billete de la variante seleccionada.
		$(billete).find("img")[0].src = varianteJuego["bill"].rutaImg;
		
		if( varianteJuego["prod"].precio == varianteJuego["bill"].valor ){
				$($opcSiNo[0]).find("img").addClass("correcto");
		}else{
				$($opcSiNo[1]).find("img").addClass("correcto");
		};
		
		//Cargo el precio del producto de la variante seleccionada.
		$("#ce-b3-precio span")[0].textContent = "$" + varianteJuego["prod"].precio.toString();
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		var dialog0 = document.getElementById("ce-b3-dialog-0");
		var vacaPos1 = document.getElementById("ce-b3-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-b3-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#ce-b3-precio"), null, null, "black" );
		
		//Muestro el billete y el producto con un retraso para que carguen las img.
		$("#b3-bill").show();
		$("#ce-b3-p").show();				
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 /*por ahora*/ );
  			// Dialogo:
			fillSpanWithCorrectFontSize( $("#b3-compra-e .dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(compraExacta.estadoBotonesNav["b3-compra-e"], "#b3-compra-e", "b3", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up imagenes de billetes:
		var $opcSiNo = $("#b3-compra-e .sino-opt img");
		$opcSiNo.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-e", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $opcSiNo, 4, 0, 1, 40 );
	}
	
};

var b4 = {
	
	valorAPagar : 0,
	
	variantesProd:[		{
						"1":productos.halls_2pe, 
						"2":productos.beldV_3pe,
						"3":productos.tita_5pe,
						"4":productos.chocoShot_7Pe 
				    	},
				    	{
						"1":productos.halls_2pe, 
						"2":productos.beldV_3pe,
						"3":productos.tita_5pe,
						"4":productos.oreo_12pe 
				    	},
				    	{
						"1":productos.tita_5pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.halls_2pe,
						"4":productos.chocoShot_7Pe 
				    	},
				    	{
						"1":productos.beldN_4pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.oreo_12pe,
						"4":productos.tita_5pe 
				    	},
				    	{
						"1":productos.beldN_4pe, 
						"2":productos.chocoShot_7Pe,
						"3":productos.beldV_3pe,
						"4":productos.halls_2pe 
				    	},
				    	{
						"1":productos.chocoShot_7Pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.lilaPause_10pe 
				    	},			    	
				   ],
	
	variantesPago: variantesDePago.monedas,
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#b4-compra-e .producto img");
		var $etiquetas = $("#b4-compra-e .precio");
		var $mediosDePago = $("#b4-compra-e .mon-pago");
		
		$("#ce-b4-dialog-0").hide();
		$("#ce-b4-dialog-1").hide();
		$("#ce-b4-dialog-2").hide();
		$("#ce-b4-vaca-img-1").show();
		$("#ce-b4-vaca-img-2").hide();
		$productos.hide();
		$etiquetas.hide();
		$mediosDePago.hide();
		$("#ce-b4-caja-reg").hide();
		$("#ce-b4-pagar").hide();
		$("#ce-b4-listo").hide();
		$("#b4-compra-e .btn").hide();
		//Limpio el container de la bolsa y acomodo si quedó alguno elegido.
		$("#ce-b4-compra-1").html("");
		$("#b4-compra-e .full").removeClass("full");
		$("#b4-compra-e .prod-bolsa").css("background-color","rgba(0,0,0,0)").css("border","dashed 3px rgba(0,0,0,0)");		
		$( "#b4-compra-e .piso" ).removeAttr("style"); 
		
		var random = randomIntFromInterval(0,b4.variantesProd.length-1);
		var variantesProd = b4.variantesProd[random];
		
		var numOpc = 1;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = variantesProd[numOpc.toString()].rutaImg;
			numOpc++;
		});
		numOpc = 1;		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#b4-compra-e .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + variantesProd[numOpc.toString()].precio.toString();
			$(value).data("precio", variantesProd[numOpc.toString()].precio.toString());
			numOpc++;			
		});
		//Reinicio el valor de la caja registradora y la compra.
		b4.valorAPagar = 0;
		$("#ce-b4-cr-txt span").html("$0");		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		var dialog0 = document.getElementById("ce-b4-dialog-0");
		var dialog1 = document.getElementById("ce-b4-dialog-1");
		var dialog2 = document.getElementById("ce-b4-dialog-2");
		var vacaPos1 = document.getElementById("ce-b4-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-b4-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		$("#b4-compra-e .producto img").show();
		$("#b4-compra-e .precio").show();
		$("#ce-b4-estante").show();
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#ce-b4-estante .precio"), null, null, "black" );
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 /*por ahora*/ );
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				//Activa los botones correspondientes.
  				nivelSuperadoManager.initPanelNav(compraExacta.estadoBotonesNav["b4-compra-e"], "#b4-compra-e", "b4", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up Drag and Drop
		elemAnimador.setUpDraggables("#b4-compra-e .piso", "#ce-ddlc-b4", "#ce-b4-compra-1", "#ce-b4-listo");
		elemAnimador.setUpDropable("#ce-b4-compra-1", "#ce-b4-listo", 1, "#b4-compra-e");
		
		//Listo para pagar.
		$("#ce-b4-listo").bind( "click", function() {
			
			var dialog0 = document.getElementById("ce-b4-dialog-0");
			var dialog1 = document.getElementById("ce-b4-dialog-1");
			var vacaPos1 = document.getElementById("ce-b4-vaca-img-1");
			var vacaPos2 = document.getElementById("ce-b4-vaca-img-2");
			var animationElemPair = [vacaPos1, vacaPos2];
			var $mediosDePago = $("#b4-compra-e .mon-pago");
			$("#ce-b4-caja-reg").show();
			$("#ce-b4-pagar").show();
			$(this).hide();
			$comprados = $("#b4-compra-e .dropped");
			b4.valorAPagar = 0;
			//Seteo del valor a pagar buscado.
			$.each($comprados.find(".precio"), function(key, value) {
				b4.valorAPagar += parseInt($(value).data("precio"));
			});
			//Injecto las variantes de pago según el valor a pagar
			//Cargo la imagen de los productos de la variante seleccionada.
			var varianteDePago = b4.variantesPago[b4.valorAPagar.toString()];
			var numOpc = 0;
			var actual;
			$.each($mediosDePago, function(key, value) {
				actual = varianteDePago[numOpc.toString()];
				value.src = actual.rutaImg;
				$(value).data("valor", actual.valor.toString());
				numOpc++;
			}); 
			$mediosDePago.removeClass("usado").show();
			 
			//Clono y acomodo el elemento con los productos comprados en la bolsa.
			elemAnimador.setElemComprado($comprados, "ce-b4");
			
			//Reseteo los arrastrables y escondo el estante.
			$( "#b4-compra-e .piso" ).removeAttr("style"); 
			$("#b4-compra-e .full").removeClass("full");			
			$("#ce-b4-estante").hide();
			
			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Valor Caja registradora:
			fillSpanWithCorrectFontSize( $("#ce-b4-cr-txt"), null, null, "white" );
			// Dialogo y tamaño de fuente.
			playTimeLast = dialogManager.startDialog( [dialog0],[dialog1], animationElemPair, "", 3000 );
  			fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );			
			
		});
		
		//Seteo el comportamiento de los billetes al pagar. 
		elemAnimador.setUpMediosDePago( $("#b4-compra-e .mon-pago"), "ce-b4-cr-txt" );
		
		$("#ce-b4-pagar").bind( "click", function() { 
			
			var $valorCaja = $("#ce-b4-cr-txt span");
			var valorActualCaja = parseInt($valorCaja.html().replace("$", '').trim());	
				
			if( valorActualCaja != 0 && valorActualCaja == b4.valorAPagar ){
				//Va a la página de nivel superado.
				window.setTimeout(function(){
					$.mobile.navigate( "#ns-compra-e", { transition : "none" });					
					$(".prod-bolsa").css("background-color","rgba(0,0,0,0)").css("border","dashed 3px rgba(0,0,0,0)");				
				},300);
			}else{
				var dialog1 = document.getElementById("ce-b4-dialog-1");
				var dialog2 = document.getElementById("ce-b4-dialog-2");
				var vacaPos1 = document.getElementById("ce-b4-vaca-img-1");
				var vacaPos2 = document.getElementById("ce-b4-vaca-img-2");
				var animationElemPair = [vacaPos1, vacaPos2];
				$("#b4-compra-e .mon-pago").removeClass("usado").show();
				$valorCaja.html("$0");									
				// Dialogo y tamaño de fuente.
				playTimeLast = dialogManager.startDialog( [dialog1],[dialog2], animationElemPair, "", 3000 );
				fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
			}
		
		});
	
	}
};

var b5 = {
	
	valorAPagar : 0,
	
	variantesProd:[		{
						"1":productos.halls_2pe, 
						"2":productos.beldV_3pe,
						"3":productos.tita_5pe,
						"4":productos.chocoShot_7Pe 
				    	},
				    	{
						"1":productos.halls_2pe, 
						"2":productos.beldV_3pe,
						"3":productos.tita_5pe,
						"4":productos.oreo_12pe 
				    	},
				    	{
						"1":productos.tita_5pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.halls_2pe,
						"4":productos.chocoShot_7Pe 
				    	},
				    	{
						"1":productos.beldN_4pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.oreo_12pe,
						"4":productos.tita_5pe 
				    	},
				    	{
						"1":productos.beldN_4pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.chocoShot_10Pe 
				    	},
				    	{
						"1":productos.chocoShot_7Pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"1":productos.chocoShot_7Pe, 
						"2":productos.oreo_12pe,
						"3":productos.glincoln_20pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"1":productos.glincoln_20pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"1":productos.glincoln_20pe, 
						"2":productos.oreo_18pe,
						"3":productos.tita_5pe,
						"4":productos.glincoln_20pe 
				    	},
				    	{
						"1":productos.chocoShot_10Pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.chocoShot_10Pe,
						"4":productos.tita_5pe 
				    	},
				    	{
						"1":productos.glincoln_20pe, 
						"2":productos.oreo_18pe,
						"3":productos.tita_5pe,
						"4":productos.beldV_3pe 
				    	}			    	
				   ],
	
	variantesPago: variantesDePago.billetes,
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#b5-compra-e .producto img");
		var $etiquetas = $("#b5-compra-e .precio");
		var $mediosDePago = $("#b5-compra-e .bill-pago");
		
		$("#ce-b5-dialog-0").hide();
		$("#ce-b5-dialog-1").hide();
		$("#ce-b5-dialog-2").hide();
		$("#ce-b5-vaca-img-1").show();
		$("#ce-b5-vaca-img-2").hide();
		$productos.hide();
		$etiquetas.hide();
		$mediosDePago.hide();
		$("#ce-b5-caja-reg").hide();
		$("#ce-b5-pagar").hide();
		$("#ce-b5-listo").hide();
		$("#b5-compra-e .btn").hide();
		//Limpio el container de la bolsa y acomodo si quedó alguno elegido.
		$("#ce-b5-compra-1").html("");
		$("#ce-b5-compra-2").html("");
		$("#b5-compra-e .full").removeClass("full");
		$("#b5-compra-e .prod-bolsa").css("background-color","rgba(0,0,0,0)").css("border","dashed 3px rgba(0,0,0,0)");		
		$( "#b5-compra-e .piso" ).removeAttr("style"); 
		
		var random = randomIntFromInterval(0,b5.variantesProd.length-1);
		var variantesProd = b5.variantesProd[random];
		var numOpc = 1;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = variantesProd[numOpc.toString()].rutaImg;
			numOpc++;
		});
		numOpc = 1;		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#b5-compra-e .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + variantesProd[numOpc.toString()].precio.toString();
			$(value).data("precio", variantesProd[numOpc.toString()].precio.toString());
			numOpc++;			
		});
		//Reinicio el valor de la caja registradora y la compra.
		b5.valorAPagar = 0;
		$("#ce-b5-cr-txt span").html("$0");		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		var dialog0 = document.getElementById("ce-b5-dialog-0");
		var dialog1 = document.getElementById("ce-b5-dialog-1");
		var dialog2 = document.getElementById("ce-b5-dialog-2");
		var vacaPos1 = document.getElementById("ce-b5-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-b5-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		$("#b5-compra-e .producto img").show();
		$("#b5-compra-e .precio").show();
		$("#ce-b5-estante").show();
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#ce-b5-estante .precio"), null, null, "black" );
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 /*por ahora*/ );
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				//Activa los botones correspondientes.
  				nivelSuperadoManager.initPanelNav(compraExacta.estadoBotonesNav["b5-compra-e"], "#b5-compra-e", "b5", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up Drag and Drop
		elemAnimador.setUpDraggables("#b5-compra-e .piso", "#ce-ddlc-b5", "#ce-b5-compra-1", "#ce-b5-listo");
		elemAnimador.setUpDropable("#ce-b5-compra-1", "#ce-b5-listo",2, "#b5-compra-e");
		elemAnimador.setUpDropable("#ce-b5-compra-2", "#ce-b5-listo",2, "#b5-compra-e");
		
		$("#ce-b5-listo").bind( "click", function() {
			
			var dialog0 = document.getElementById("ce-b5-dialog-0");
			var dialog1 = document.getElementById("ce-b5-dialog-1");
			var vacaPos1 = document.getElementById("ce-b5-vaca-img-1");
			var vacaPos2 = document.getElementById("ce-b5-vaca-img-2");
			var animationElemPair = [vacaPos1, vacaPos2];
			var $mediosDePago = $("#b5-compra-e .bill-pago");
			$("#ce-b5-caja-reg").show();
			$("#ce-b5-pagar").show();
			$(this).hide();
			$comprados = $("#b5-compra-e .dropped");
			b5.valorAPagar = 0;
			//Seteo del valor a pagar buscado.
			$.each($comprados.find(".precio"), function(key, value) {
				b5.valorAPagar += parseInt($(value).data("precio"));
			});
			//Injecto las variantes de pago según el valor a pagar
			//Cargo la imagen de los productos de la variante seleccionada.
			var varianteDePago = b5.variantesPago[b5.valorAPagar.toString()];
			var numOpc = 0;
			var actual;
			$.each($mediosDePago, function(key, value) {
				actual = varianteDePago[numOpc.toString()];
				value.src = actual.rutaImg;
				$(value).data("valor", actual.valor.toString());
				numOpc++;
			}); 
			$mediosDePago.removeClass("usado").show();
			
			//Clono y acomodo los elementos con los productos comprados en la bolsa.
			elemAnimador.setElemComprado($comprados, "ce-b5");
			
			//Reseteo los arrastrables y escondo el estante.
			$( "#b5-compra-e .piso" ).removeAttr("style"); 
			$("#b5-compra-e .full").removeClass("full");			
			$("#ce-b5-estante").hide();
			
			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Valor Caja registradora:
			fillSpanWithCorrectFontSize( $("#ce-b5-cr-txt"), null, null, "white" );
			// Dialogo y tamaño de fuente.
			playTimeLast = dialogManager.startDialog( [dialog0],[dialog1], animationElemPair, "", 3000 );
  			fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );			
			
		});
		
		//Seteo el comportamiento de los billetes al pagar. 
		elemAnimador.setUpMediosDePago( $("#b5-compra-e .bill-pago"), "ce-b5-cr-txt" );
		
		
		$("#ce-b5-pagar").bind( "click", function() { 
			
			var $valorCaja = $("#ce-b5-cr-txt span");
			var valorActualCaja = parseInt($valorCaja.html().replace("$", '').trim());	
				
			if( valorActualCaja != 0 && valorActualCaja == b5.valorAPagar ){
				//Va a la página de nivel superado.
				window.setTimeout(function(){
					$.mobile.navigate( "#ns-compra-e", { transition : "none" });
				},300);
			}else{
				var dialog1 = document.getElementById("ce-b5-dialog-1");
				var dialog2 = document.getElementById("ce-b5-dialog-2");
				var vacaPos1 = document.getElementById("ce-b5-vaca-img-1");
				var vacaPos2 = document.getElementById("ce-b5-vaca-img-2");
				var animationElemPair = [vacaPos1, vacaPos2];
				$("#b5-compra-e .bill-pago").removeClass("usado").show();
				$valorCaja.html("$0");									
				// Dialogo y tamaño de fuente.
				playTimeLast = dialogManager.startDialog( [dialog1],[dialog2], animationElemPair, "", 3000 );
				fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
			}
		
		});
	
	}
};

var b6 = {
	
	valorAPagar : 0,
	
	variantesProd:[		{
						"1":productos.halls_2pe, 
						"2":productos.beldV_3pe,
						"3":productos.tita_5pe,
						"4":productos.chocoShot_7Pe 
				    	},
				    	{
						"1":productos.halls_2pe, 
						"2":productos.beldV_3pe,
						"3":productos.tita_5pe,
						"4":productos.oreo_12pe 
				    	},
				    	{
						"1":productos.tita_5pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.halls_2pe,
						"4":productos.chocoShot_7Pe 
				    	},
				    	{
						"1":productos.beldN_4pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.oreo_12pe,
						"4":productos.tita_5pe 
				    	},
				    	{
						"1":productos.beldN_4pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.chocoShot_10Pe 
				    	},
				    	{
						"1":productos.chocoShot_7Pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"1":productos.chocoShot_7Pe, 
						"2":productos.oreo_12pe,
						"3":productos.glincoln_20pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"1":productos.glincoln_20pe, 
						"2":productos.oreo_12pe,
						"3":productos.beldV_3pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"1":productos.glincoln_20pe, 
						"2":productos.oreo_18pe,
						"3":productos.tita_5pe,
						"4":productos.glincoln_20pe 
				    	},
				    	{
						"1":productos.chocoShot_10Pe, 
						"2":productos.lilaPause_10pe,
						"3":productos.chocoShot_10Pe,
						"4":productos.tita_5pe 
				    	},
				    	{
						"1":productos.glincoln_20pe, 
						"2":productos.oreo_18pe,
						"3":productos.tita_5pe,
						"4":productos.beldV_3pe 
				    	},
				    	{
						"1":productos.halls_2pe, 
						"2":productos.oreo_18pe,
						"3":productos.tita_5pe,
						"4":productos.lilaPause_10pe 
				    	},			    	
				   ],
	
	variantesPago: variantesDePago.combinado,
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#b6-compra-e .producto img");
		var $etiquetas = $("#b6-compra-e .precio");
		var $mediosDePago = $("#b6-compra-e .pago-comb");
		
		$("#ce-b6-dialog-0").hide();
		$("#ce-b6-dialog-1").hide();
		$("#ce-b6-dialog-2").hide();
		$("#ce-b6-vaca-img-1").show();
		$("#ce-b6-vaca-img-2").hide();
		$productos.hide();
		$etiquetas.hide();
		$mediosDePago.hide();
		$("#ce-b6-caja-reg").hide();
		$("#ce-b6-pagar").hide();
		$("#ce-b6-listo").hide();
		$("#b6-compra-e .btn").hide();
		//Limpio el container de la bolsa y acomodo si quedó alguno elegido.
		$("#ce-b6-compra-1").html("");
		$("#ce-b6-compra-2").html("");
		$("#b6-compra-e .full").removeClass("full");
		$("#b6-compra-e .prod-bolsa").css("background-color","rgba(0,0,0,0)").css("border","dashed 3px rgba(0,0,0,0)");		
		$( "#b6-compra-e .piso" ).removeAttr("style"); 
		
		var random = randomIntFromInterval(0,b6.variantesProd.length-1);
		var variantesProd = b6.variantesProd[random];
		var numOpc = 1;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = variantesProd[numOpc.toString()].rutaImg;
			numOpc++;
		});
		numOpc = 1;		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#b6-compra-e .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + variantesProd[numOpc.toString()].precio.toString();
			$(value).data("precio", variantesProd[numOpc.toString()].precio.toString());
			numOpc++;			
		});
		//Reinicio el valor de la caja registradora y la compra.
		b6.valorAPagar = 0;
		$("#ce-b6-cr-txt span").html("$0");		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		var dialog0 = document.getElementById("ce-b6-dialog-0");
		var dialog1 = document.getElementById("ce-b6-dialog-1");
		var dialog2 = document.getElementById("ce-b6-dialog-2");
		var vacaPos1 = document.getElementById("ce-b6-vaca-img-1");
		var vacaPos2 = document.getElementById("ce-b6-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		$("#b6-compra-e .producto img").show();
		$("#b6-compra-e .precio").show();
		$("#ce-b6-estante").show();
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#ce-b6-estante .precio"), null, null, "black" );
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 /*por ahora*/ );
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				//Activa los botones correspondientes.
  				nivelSuperadoManager.initPanelNav(compraExacta.estadoBotonesNav["b6-compra-e"], "#b6-compra-e", "b6", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up Drag and Drop
		elemAnimador.setUpDraggables("#b6-compra-e .piso", "#ce-ddlc-b6", "#ce-b6-compra-1", "#ce-b6-listo");
		elemAnimador.setUpDropable("#ce-b6-compra-1", "#ce-b6-listo",2, "#b6-compra-e");
		elemAnimador.setUpDropable("#ce-b6-compra-2", "#ce-b6-listo",2, "#b6-compra-e");
		
		$("#ce-b6-listo").bind( "click", function() {
			
			var dialog0 = document.getElementById("ce-b6-dialog-0");
			var dialog1 = document.getElementById("ce-b6-dialog-1");
			var vacaPos1 = document.getElementById("ce-b6-vaca-img-1");
			var vacaPos2 = document.getElementById("ce-b6-vaca-img-2");
			var animationElemPair = [vacaPos1, vacaPos2];
			var $mediosDePago = $("#b6-compra-e .pago-comb");
			$("#ce-b6-caja-reg").show();
			$("#ce-b6-pagar").show();
			$(this).hide();
			$comprados = $("#b6-compra-e .dropped");
			
			b6.valorAPagar = 0;
			//Seteo del valor a pagar buscado.
			$.each($comprados.find(".precio"), function(key, value) {
				b6.valorAPagar += parseInt($(value).data("precio"));
			});
			//Injecto las variantes de pago según el valor a pagar
			//Cargo la imagen de los productos de la variante seleccionada.
			var varianteDePago = b6.variantesPago[b6.valorAPagar.toString()];
			var numOpc = 0;
			var actual;
			var numPos;
			$.each($mediosDePago, function(key, value) {
				actual = varianteDePago[numOpc.toString()];
				value.src = actual.rutaImg;
				$(value).data("valor", actual.valor.toString());
				numPos = (numOpc+1).toString();
				$(value).removeClass("mon-pago mon-pago-pos"+numPos+" bill-pago bill-pago-pos"+numPos);
				if(actual.tipo == "moneda"){
					$(value).addClass("mon-pago").addClass("mon-pago-pos"+(numOpc+1).toString());				
				}
				if(actual.tipo == "billete"){
					$(value).addClass("bill-pago").addClass("bill-pago-pos"+(numOpc+1).toString());				
				}
				numOpc++;
			}); 
			$mediosDePago.removeClass("usado").show();
			
			//Clono y acomodo los elementos con los productos comprados en la bolsa.
			elemAnimador.setElemComprado($comprados, "ce-b6");
			
			//Reseteo los arrastrables y escondo el estante.
			$( "#b6-compra-e .piso" ).removeAttr("style"); 
			$("#b6-compra-e .full").removeClass("full");			
			$("#ce-b6-estante").hide();
			
			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Valor Caja registradora:
			fillSpanWithCorrectFontSize( $("#ce-b6-cr-txt"), null, null, "white" );
			// Dialogo y tamaño de fuente.
			playTimeLast = dialogManager.startDialog( [dialog0],[dialog1], animationElemPair, "", 3000 );
  			fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );			
			
		});
		
		//Seteo el comportamiento de los billetes al pagar. 
		elemAnimador.setUpMediosDePago( $("#b6-compra-e .pago-comb"), "ce-b6-cr-txt" );
		
		
		$("#ce-b6-pagar").bind( "click", function() { 
			
			var $valorCaja = $("#ce-b6-cr-txt span");
			var valorActualCaja = parseInt($valorCaja.html().replace("$", '').trim());	
				
			if( valorActualCaja != 0 && valorActualCaja == b6.valorAPagar ){
				//Va a la página de nivel superado.
				window.setTimeout(function(){
					$.mobile.navigate( "#ns-compra-e", { transition : "none" });
				},300);
			}else{
				var dialog1 = document.getElementById("ce-b6-dialog-1");
				var dialog2 = document.getElementById("ce-b6-dialog-2");
				var vacaPos1 = document.getElementById("ce-b6-vaca-img-1");
				var vacaPos2 = document.getElementById("ce-b6-vaca-img-2");
				var animationElemPair = [vacaPos1, vacaPos2];
				$("#b6-compra-e .pago-comb").removeClass("usado").show();
				$valorCaja.html("$0");									
				// Dialogo y tamaño de fuente.
				playTimeLast = dialogManager.startDialog( [dialog1],[dialog2], animationElemPair, "", 3000 );
				fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
			}
		
		});
	
	}
};

var nivelSuperadoCE = {
	
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function( idPaginaJuegoPrevio ){
		
		$("#ns-sig-ce").css("background-color","rgba(0,0,0,0)");	
		nivelSuperadoManager.setUpAtInit(idPaginaJuegoPrevio, $("#ns-back-ce"), $("#ns-sig-ce"), compraExacta );
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		//Por ahora nada, a lo sumo, después la vaca se moverá y habrá algun audio.
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){		
		//Por ahora, no realizara nada acá.
	}
};

var compraExacta = {
	
	cantidadDeNiveles: 6,
	pageLevels : {
		"index-compra-e": indexCE,
		"b1-compra-e": b1,
		"b2-compra-e": b2,
		"b3-compra-e": b3,
		"b4-compra-e": b4,
		"b5-compra-e": b5,
		"b6-compra-e": b6,
		"ns-compra-e" : nivelSuperadoCE
	},
	
	estadoBotonesNav : {
		"b1-compra-e": {"b": true, "s": false, "1": true, "2": false, "3": false, "4": false, "5": false, "6":false },
		"b2-compra-e": {"b": true, "s": false, "1": true, "2": true, "3": false, "4": false, "5": false, "6":false },
		"b3-compra-e": {"b": true, "s": false, "1": true, "2": true, "3": true, "4": false, "5": false, "6":false },
		"b4-compra-e": {"b": true, "s": false, "1": true, "2": true, "3": true, "4": true, "5": false, "6":false },
		"b5-compra-e": {"b": true, "s": false, "1": true, "2": true, "3": true, "4": true, "5": true, "6":false },
		"b6-compra-e": {"b": true, "s": false, "1": true, "2": true, "3": true, "4": true, "5": true, "6":true }
	},
	
	initialize: function(){
		this.setUpGamePages();
		
	},
	
	setUpGamePages: function(){
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainerbeforeshow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = compraExacta.pageLevels[idPage];
			
			if(levelToShowObject){
				if(idPage !== "ns-compra-e" ){
					levelToShowObject.init();
				}else if(  typeof ui.prevPage[0] == "undefined" ){
					//En el caso que no le llegue la página previa (ej. actualizar?), va al inicio del juego.
					levelToShowObject.init("index-compra-e");					
				}else{
					levelToShowObject.init(ui.prevPage[0].id);
				}
			}			
		});
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainershow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = compraExacta.pageLevels[idPage];
			
			if(levelToShowObject && levelToShowObject.start ){
				levelToShowObject.start();
			}			
		});		
		/*Set Up de todas las páginas*/
		$.each(compraExacta.pageLevels, function(key, value){
			if(value){				
				value.setUp();
			};
		});
	}
};