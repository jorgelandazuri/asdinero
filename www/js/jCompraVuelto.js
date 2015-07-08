var indexCV = {
	
	init: function(){
		
		$("#cv-index-dialog-0").hide();
		$("#cv-index-vaca-img-1").show();
		$("#cv-index-vaca-img-2").hide();
		$("#cv-vaca-bolso-img").hide();
		$("#index-compra-v .btn").hide();
  		
	},
	start: function(){
		
		var dialog0 = document.getElementById("cv-index-dialog-0");
		var vacaPos1 = document.getElementById("cv-index-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-index-vaca-img-2");
		var vacaBolso = document.getElementById("cv-vaca-bolso-img");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 );
  			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Dialogo:
			fillSpanWithCorrectFontSize( $("#index-compra-v .dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				$("#index-compra-v .btn").show();
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera un segundo para empezar a hablar.
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
	/*Acción al tocar la vaca para empezar el juego
	  Hace la intro y muestra a la vaca entrando al kiosco*/			
		$("#index-compra-v .kiosco").bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				$("#index-compra-v .cv-vaca-img").hide();
				$("#cv-index-dialog-0").hide();  				
				//Luego, se muestra la vaca con la bolsa
				$("#cv-vaca-bolso-img").show();
				window.setTimeout(function(){
					$.mobile.navigate( "#c1-compra-v", { transition : "none" });
				},1000); //Para dejar ver al usuario a la vaca.
			}
		});
		
	//TODO: Acá, se debería setear el atributo "estadoBotonesNav" de compraVuelto segun los datos del usuario en uso de localStorage.
	//Esto hará que tenga disponibles los botones de los niveles que ya pasó.	
	}
};


var c1 = {
	variantesJuego:[	{
						"prod": productos.halls_2pe, 
						"bill": mediosDePago.bill5,																		 
				    	},
				    	{
						"prod": productos.chocoShot_10Pe, 
						"bill": mediosDePago.bill20,
						},
						{
						"prod": productos.chocoShot_10Pe, 
						"bill": mediosDePago.bill100,
						},
						{
						"prod": productos.chocoShot_10Pe, 
						"bill": mediosDePago.bill2,
						},
				    	{
						"prod": productos.tita_5pe, 
						"bill": mediosDePago.bill2,
						},
						{
						"prod": productos.tita_5pe, 
						"bill": mediosDePago.bill50,
						},
				    	{
						"prod": productos.chocoShot_7Pe, 
						"bill": mediosDePago.bill5,
						},
						{
						"prod": productos.chocoShot_7Pe, 
						"bill": mediosDePago.bill10,
						},
						{
						"prod": productos.chocoShot_7Pe, 
						"bill": mediosDePago.bill20,
						},
						{
						"prod": productos.chocoShot_7Pe, 
						"bill": mediosDePago.bill2,
						},
						{
						"prod": productos.beldV_3pe, 
						"bill": mediosDePago.bill5,
						},
						{
						"prod": productos.beldV_3pe, 
						"bill": mediosDePago.bill2,
						},
						{
						"prod": productos.beldN_4pe, 
						"bill": mediosDePago.bill10,
						},
						{
						"prod": productos.beldN_4pe, 
						"bill": mediosDePago.bill2,
						},
						{
						"prod": productos.oreo_18pe, 
						"bill": mediosDePago.bill20,
						},
						{
						"prod": productos.oreo_18pe, 
						"bill": mediosDePago.bill10,
						},
						{
						"prod": productos.oreo_18pe, 
						"bill": mediosDePago.bill2,
						},
						{
						"prod": productos.oreo_18pe, 
						"bill": mediosDePago.bill50,
						},
						{
						"prod": productos.glincoln_20pe, 
						"bill": mediosDePago.bill50,
						},
						{
						"prod": productos.glincoln_20pe, 
						"bill": mediosDePago.bill10,
						},
						{
						"prod": productos.glincoln_20pe, 
						"bill": mediosDePago.bill2,
						}			    	
				   ],
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var billete = document.getElementById("c1-bill");
		var productoImg = document.getElementById("cv-c1-p");
		var $opcSiNo = $("#c1-compra-v .sino-opt");		
		
		$("#cv-c1-dialog-0").hide();
		$("#cv-c1-vaca-img-1").show();
		$("#cv-c1-vaca-img-2").hide();
		$("#c1-compra-v .btn").hide();
		$(billete).hide();
		$(productoImg).hide();
		$opcSiNo.find("img").removeClass("correcto");		
		
		var random = randomIntFromInterval(0,c1.variantesJuego.length-1);
		var varianteJuego = c1.variantesJuego[random];
		//Cargo la imagen del producto de la variante seleccionada.
		productoImg.src = varianteJuego["prod"].rutaImg;		
		
		//Cargo la imagen del billete de la variante seleccionada.
		$(billete).find("img")[0].src = varianteJuego["bill"].rutaImg;
		
		if( varianteJuego["prod"].precio <= varianteJuego["bill"].valor ){
				$($opcSiNo[0]).find("img").addClass("correcto");
		}else{
				$($opcSiNo[1]).find("img").addClass("correcto");
		};
		
		//Cargo el precio del producto de la variante seleccionada.
		$("#cv-c1-precio span")[0].textContent = "$" + varianteJuego["prod"].precio.toString();
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		var dialog0 = document.getElementById("cv-c1-dialog-0");
		var vacaPos1 = document.getElementById("cv-c1-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c1-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#cv-c1-precio"), null, null, "black" );
		
		//Muestro el billete y el producto con un retraso para que carguen las img.
		$("#c1-bill").show();
		$("#cv-c1-p").show();				
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 );
  			// Dialogo:
			fillSpanWithCorrectFontSize( $("#c1-compra-v .dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(compraVuelto.estadoBotonesNav["c1-compra-v"], "#c1-compra-v", "c1", 4);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up imagenes de billetes:
		var $opcSiNo = $("#c1-compra-v .sino-opt img");
		$opcSiNo.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-v", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $opcSiNo, 4, 0, 1, 40 );
	}
	
};
var c2 = {
	
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
						"mPago":mediosDePago.bill20, 
						"1":productos.tita_5pe, 
						"2":productos.oreo_18pe,
						"3":productos.chocoShot_10Pe,
						"4":productos.glincoln_20pe 
				    	},
				    	{
						"mPago":mediosDePago.bill5, 
						"1":productos.beldV_3pe, 
						"2":productos.glincoln_15pe,
						"3":productos.beldN_4pe,
						"4":productos.lilaPause_10pe 
				    	},
				    	{
						"mPago":mediosDePago.bill10, 
						"1":productos.oreo_12pe, 
						"2":productos.chocoShot_10Pe,
						"3":productos.tita_5pe,
						"4":productos.beldN_4pe 
				    	},
				    				    	
				   ],
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#c2-compra-v .producto img");
		var billete = document.getElementById("cv-c2-bill");
		
		$("#cv-c2-dialog-0").hide();
		$("#cv-c2-dialog-1").hide();
		$("#cv-c2-vaca-img-1").show();
		$("#cv-c2-vaca-img-2").hide();
		$("#c2-compra-v .btn").hide();
		$(billete).hide();
		$productos.removeClass("correcto");
		$("#cv-c2-prod-elegido").hide();
		$("#cv-c2-opc-ctn").hide();
		$("#cv-c2-estante").show();		
		
		var random = randomIntFromInterval(0,c2.variantesJuego.length-1);
		var varianteJuego = c2.variantesJuego[random];
		var numOpc = 1;
		//Cargo la imagen del billete de la variante seleccionada.
		billete.src = varianteJuego["mPago"].rutaImg;
		$(billete).show();
		
		var valorMedioPago = varianteJuego["mPago"].valor;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = varianteJuego[numOpc.toString()].rutaImg;
			if( varianteJuego[numOpc.toString()].precio <= valorMedioPago ){
				$(value).addClass("correcto");
				$(value).data("vuelto", (valorMedioPago - varianteJuego[numOpc.toString()].precio).toString());								
			};
			numOpc++;
		});
		numOpc = 1;
		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#c2-compra-v .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + varianteJuego[numOpc.toString()].precio.toString();
			numOpc++;			
		});		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		var dialog0 = document.getElementById("cv-c2-dialog-0");
		var vacaPos1 = document.getElementById("cv-c2-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c2-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#cv-c2-estante .precio"), null, null, "black" );		
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000 );
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(compraVuelto.estadoBotonesNav["c2-compra-v"], "#c2-compra-v", "c2", 4);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Set up imagenes de productos:
		var $productos = $("#c2-compra-v .piso");
		var dialog0 = document.getElementById("cv-c2-dialog-0");
		var dialog1 = document.getElementById("cv-c2-dialog-1");
		var vacaPos1 = document.getElementById("cv-c2-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c2-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		var $elegidoContainer = $("#cv-c2-prod-elegido");
		$productos.bind( "click", function() {
			var $prodElegidoImg = $(this).find(".producto img");
			var vuelto = 0;
			var opciones;
			if( $prodElegidoImg.hasClass("correcto") ){
				playTimeLast = dialogManager.startDialog( [dialog0],[dialog1], animationElemPair, "", 3000 );
				// Dialogo - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
				$elemElegido = $(this).clone();
				$elemElegido.attr("id","cv-c2-elegido");
				$elemElegido.find(".producto").addClass("comprado-bolsa").removeClass("producto");
				$elemElegido.find(".precio").addClass("precio-bolsa").removeClass("precio");
				$elegidoContainer.html($elemElegido.html());
				$elegidoContainer.show();
				$("#cv-c2-estante").hide();
				
				//Obtengo las opciones
				vuelto = parseInt($prodElegidoImg.data("vuelto"));
				opciones = getOpcionesDeVuelto(vuelto);
				//Cargo las opciones del multiple choice y seteo el vuelto-correcto.
				var i = 0;
				var actual;
				var $multipleChoiceTxt = $("#cv-c2-opc-ctn .vuelto-txt");

				$.each($multipleChoiceTxt, function(key, value) {
					actual = opciones[i];
					if( actual == vuelto){
						$(value).parent().addClass("vuelto-correcto");
					}else{
						$(value).parent().removeClass("vuelto-correcto");
					}
					$(value).find("span")[0].textContent = "$ " + actual.toString();
					i++;					
				});
				$multipleChoiceTxt.css("color","rgba(0,0,0,0)").show();
				$("#cv-c2-opc-ctn").show();
				fillSpanWithCorrectFontSize( $multipleChoiceTxt, null, null, "black" ); 
				 
			}else{
				elemAnimador.start($prodElegidoImg[0],1200);
			}
			
		});
		elemAnimador.setUp( $productos.find(".producto img"), 4, 0, 1, 40 );
		
		//Set up opciones de vuelto.
		var $opcVuelto = $("#c2-compra-v .mc-btn-type1 .opc-bg");
		$opcVuelto.bind( "click", function() {
			
				if( $(this).hasClass("vuelto-correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-v", { transition : "none" });
						//Elimina la copia de la imagen.
						$elegidoContainer.html("");
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			
		});		
		elemAnimador.setUp( $opcVuelto, 4, 0, 1, 40 );
		
	}	
	
};
var c3 = {
	
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
	
	variantesPago: variantesDePago.billetesVuelto,
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#c3-compra-v .producto img");
		var $etiquetas = $("#c3-compra-v .precio");
		var $mediosDePago = $("#c3-compra-v .bill-pago");
		
		$("#cv-c3-dialog-0").hide();
		$("#cv-c3-dialog-1").hide();
		$("#cv-c3-dialog-2").hide();
		$("#cv-c3-dialog-3").hide();
		$("#cv-c3-vaca-img-1").show();
		$("#cv-c3-vaca-img-2").hide();
		$productos.hide();
		$etiquetas.hide();
		$mediosDePago.hide();
		$("#cv-c3-caja-reg").hide();
		$("#cv-c3-pagar").hide();
		$("#cv-c3-listo").hide();
		$("#c3-compra-v .btn").hide();
		$("#c3-compra-v .cv-opc-ctn-vertical").hide();
		//Limpio el container de la bolsa y acomodo si quedó alguno elegido.
		$("#cv-c3-compra-1").html("");
		$("#cv-c3-compra-2").html("");
		$("#c3-compra-v .full").removeClass("full");
		$mediosDePago.removeClass("usado");
		$("#c3-compra-v .prod-bolsa").css("background-color","rgba(0,0,0,0)").css("border","dashed 3px rgba(0,0,0,0)");		
		$( "#c3-compra-v .piso" ).removeAttr("style"); 
		
		var random = randomIntFromInterval(0,c3.variantesProd.length-1);
		var variantesProd = c3.variantesProd[random];
		var numOpc = 1;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = variantesProd[numOpc.toString()].rutaImg;
			numOpc++;
		});
		numOpc = 1;		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#c3-compra-v .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + variantesProd[numOpc.toString()].precio.toString();
			$(value).data("precio", variantesProd[numOpc.toString()].precio.toString());
			numOpc++;			
		});
		//Reinicio el valor de la caja registradora y la compra.
		c3.valorAPagar = 0;
		$("#cv-c3-cr-txt span").html("$0");		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		var dialog0 = document.getElementById("cv-c3-dialog-0");
		var dialog1 = document.getElementById("cv-c3-dialog-1");
		var dialog2 = document.getElementById("cv-c3-dialog-2");
		var vacaPos1 = document.getElementById("cv-c3-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c3-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		$("#c3-compra-v .producto img").show();
		$("#c3-compra-v .precio").show();
		$("#cv-c3-estante").show();
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#cv-c3-estante .precio"), null, null, "black" );
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000);
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				//Activa los botones correspondientes.
  				nivelSuperadoManager.initPanelNav(compraVuelto.estadoBotonesNav["c3-compra-v"], "#c3-compra-v", "c3", 4);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Variables comunes del set up
		var dialog0 = document.getElementById("cv-c3-dialog-0");
		var dialog1 = document.getElementById("cv-c3-dialog-1");
		var dialog2 = document.getElementById("cv-c3-dialog-2");
		var dialog3 = document.getElementById("cv-c3-dialog-3");
		var vacaPos1 = document.getElementById("cv-c3-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c3-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		var $mediosDePago = $("#c3-compra-v .bill-pago");
		var $cajaRegistradora = $("#cv-c3-caja-reg");
		var $botonPagar = $("#cv-c3-pagar");
		
		
		//Set up Drag and Drop
		elemAnimador.setUpDraggables("#c3-compra-v .piso", "#cv-ddlc-c3", "#cv-c3-compra-1", "#cv-c3-listo");
		elemAnimador.setUpDropable("#cv-c3-compra-1", "#cv-c3-listo",2, "#c3-compra-v");
		elemAnimador.setUpDropable("#cv-c3-compra-2", "#cv-c3-listo",2, "#c3-compra-v");
		
		
		//Set up boton "Listo".
		$("#cv-c3-listo").bind( "click", function() {
			
			$(this).hide();
			$cajaRegistradora.show();
			$botonPagar.show();
			
			$comprados = $("#c3-compra-v .dropped");
			//Seteo del valor a pagar buscado.
			c3.valorAPagar = 0;
			$.each($comprados.find(".precio"), function(key, value) {
				c3.valorAPagar += parseInt($(value).data("precio"));
			});
			
			//Inyecto las variantes de pago según el valor a pagar
			//Cargo la imagen de los productos de la variante seleccionada.
			var varianteDePago = c3.variantesPago[c3.valorAPagar.toString()];
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
			elemAnimador.setElemComprado($comprados, "cv-c3");
			
			//Reseteo los arrastrables y escondo el estante.
			$("#c3-compra-v .piso").removeAttr("style"); 
			$("#c3-compra-v .full").removeClass("full");			
			$("#cv-c3-estante").hide();
			
			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Valor Caja registradora:
			fillSpanWithCorrectFontSize( $("#cv-c3-cr-txt"), null, null, "white" );
			// Dialogo y tamaño de fuente
			playTimeLast = dialogManager.startDialog( [dialog0],[dialog1], animationElemPair, "", 3000 );
  			fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );			
			
		});
		
		//Seteo el comportamiento de los billetes al pagar.
		var $opcVuelto = $("#c3-compra-v .mc-btn-type2 .opc-bg"); 
		elemAnimador.setUpMediosDePago( $mediosDePago, "cv-c3-cr-txt" );
		
		//Set up boton "Pagar"
		$("#cv-c3-pagar").bind( "click", function() { 
			
			var $valorCaja = $("#cv-c3-cr-txt span");
			var valorActualCaja = parseInt($valorCaja.html().replace("$", '').trim());	
				
			if( valorActualCaja != 0 && valorActualCaja >= c3.valorAPagar ){
				
				$mediosDePago.hide();
				$("#c3-compra-v .usado").show();
				$opcVuelto.show();
				$cajaRegistradora.hide();
				$botonPagar.hide();
				
				//Dialogo
				dialogManager.startDialog( [dialog1, dialog2],[dialog3], animationElemPair, "", 3000 );
				// Dialogo - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
				
				//Obtengo las opciones
				var vuelto = valorActualCaja - c3.valorAPagar;
				var opciones = getOpcionesDeVuelto(vuelto);
				//Cargo las opciones del multiple choice y seteo el vuelto-correcto.
				var i = 0;
				var actual;
				var $multipleChoiceTxt = $("#cv-c3-opc-ctn .vuelto-txt");

				$.each($multipleChoiceTxt, function(key, value) {
					actual = opciones[i];
					if( actual == vuelto){
						$(value).parent().addClass("vuelto-correcto");
					}else{
						$(value).parent().removeClass("vuelto-correcto");
					}
					$(value).find("span")[0].textContent = "$ " + actual.toString();
					i++;					
				});
				$multipleChoiceTxt.css("color","rgba(0,0,0,0)").show(); //Letra transparente antes de cambiarles el tamaño.
				$("#cv-c3-opc-ctn").show(); //Muestro el contenedor con las opciones.
				fillSpanWithCorrectFontSize( $multipleChoiceTxt, null, null, "black" ); 
				
				
			}else{
				$mediosDePago.removeClass("usado").show();
				$valorCaja.html("$0");									
				// Dialogo y tamaño de fuente.
				playTimeLast = dialogManager.startDialog( [dialog1],[dialog2], animationElemPair, "", 3000 );
				fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
			}
		
		});
		
		//Set up opciones de vuelto.
		var $opcVuelto = $("#c3-compra-v .mc-btn-type2 .opc-bg");
		$opcVuelto.bind( "click", function() {
			
				if( $(this).hasClass("vuelto-correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-v", { transition : "none" });
						$("#c3-compra-v .usado").removeClass("usado");						
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			
		});		
		elemAnimador.setUp( $opcVuelto, 4, 0, 1, 40 );
	
	}
		
};
var c4 = {
	
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
	
	variantesPago: variantesDePago.combinadoVuelto,
					   
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function(){
		
		var $productos = $("#c4-compra-v .producto img");
		var $etiquetas = $("#c4-compra-v .precio");
		var $mediosDePago = $("#c4-compra-v .pago-comb");
		
		$("#cv-c4-dialog-0").hide();
		$("#cv-c4-dialog-1").hide();
		$("#cv-c4-dialog-2").hide();
		$("#cv-c4-dialog-3").hide();
		$("#cv-c4-vaca-img-1").show();
		$("#cv-c4-vaca-img-2").hide();
		$productos.hide();
		$etiquetas.hide();
		$mediosDePago.hide();
		$("#cv-c4-caja-reg").hide();
		$("#cv-c4-pagar").hide();
		$("#cv-c4-listo").hide();
		$("#c4-compra-v .btn").hide();
		$("#c4-compra-v .cv-opc-ctn-vertical").hide();
		//Limpio el container de la bolsa y acomodo si quedó alguno elegido.
		$("#cv-c4-compra-1").html("");
		$("#cv-c4-compra-2").html("");
		$("#c4-compra-v .full").removeClass("full");
		$mediosDePago.removeClass("usado");
		$("#c4-compra-v .prod-bolsa").css("background-color","rgba(0,0,0,0)").css("border","dashed 3px rgba(0,0,0,0)");		
		$("#c4-compra-v .piso" ).removeAttr("style"); 
		
		var random = randomIntFromInterval(0,c4.variantesProd.length-1);
		var variantesProd = c4.variantesProd[random];
		var numOpc = 1;
		//Cargo la imagen de los productos de la variante seleccionada.
		$.each( $productos , function(key, value){
			value.src = variantesProd[numOpc.toString()].rutaImg;
			numOpc++;
		});
		numOpc = 1;		
		//Cargo los precios de los productos de la variante seleccionada.
		$.each($("#c4-compra-v .precio"), function(key, value){
			value.childNodes[0].textContent = "$" + variantesProd[numOpc.toString()].precio.toString();
			$(value).data("precio", variantesProd[numOpc.toString()].precio.toString());
			numOpc++;			
		});
		//Reinicio el valor de la caja registradora y la compra.
		c4.valorAPagar = 0;
		$("#cv-c4-cr-txt span").html("$0");		
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		var dialog0 = document.getElementById("cv-c4-dialog-0");
		var dialog1 = document.getElementById("cv-c4-dialog-1");
		var dialog2 = document.getElementById("cv-c4-dialog-2");
		var dialog3 = document.getElementById("cv-c4-dialog-3");
		var vacaPos1 = document.getElementById("cv-c4-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c4-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		$("#c4-compra-v .producto img").show();
		$("#c4-compra-v .precio").show();
		$("#cv-c4-estante").show();
		
		//Seteo el tamaño de la letra en función del contenedor. 
		//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
		// Etiquetas:
		fillSpanWithCorrectFontSize( $("#cv-c4-estante .precio"), null, null, "black" );
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3000);
  			// Dialogo - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				//Activa los botones correspondientes.
  				nivelSuperadoManager.initPanelNav(compraVuelto.estadoBotonesNav["c4-compra-v"], "#c4-compra-v", "c4", 4);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
  			  			
  		},1000);
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		//Variables comunes del set up
		var dialog0 = document.getElementById("cv-c4-dialog-0");
		var dialog1 = document.getElementById("cv-c4-dialog-1");
		var dialog2 = document.getElementById("cv-c4-dialog-2");
		var dialog3 = document.getElementById("cv-c4-dialog-3");
		var vacaPos1 = document.getElementById("cv-c4-vaca-img-1");
		var vacaPos2 = document.getElementById("cv-c4-vaca-img-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		var $mediosDePago = $("#c4-compra-v .pago-comb");
		var $cajaRegistradora = $("#cv-c4-caja-reg");
		var $botonPagar = $("#cv-c4-pagar");
		
		//Set up Drag and Drop
		elemAnimador.setUpDraggables("#c4-compra-v .piso", "#cv-ddlc-c4", "#cv-c4-compra-1", "#cv-c4-listo");
		elemAnimador.setUpDropable("#cv-c4-compra-1", "#cv-c4-listo",2, "#c4-compra-v");
		elemAnimador.setUpDropable("#cv-c4-compra-2", "#cv-c4-listo",2, "#c4-compra-v");
		
		
		//Set up boton "Listo".
		$("#cv-c4-listo").bind( "click", function() {
			
			$(this).hide();
			$cajaRegistradora.show();
			$botonPagar.show();
			
			$comprados = $("#c4-compra-v .dropped");
			//Seteo del valor a pagar buscado.
			c4.valorAPagar = 0;
			$.each($comprados.find(".precio"), function(key, value) {
				c4.valorAPagar += parseInt($(value).data("precio"));
			});
			
			//Inyecto las variantes de pago según el valor a pagar
			//Cargo la imagen de los productos de la variante seleccionada.
			var varianteDePago = c4.variantesPago[c4.valorAPagar.toString()];
			var numOpc = 0;
			var actual;
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
			elemAnimador.setElemComprado($comprados, "cv-c4");
			
			//Reseteo los arrastrables y escondo el estante.
			$("#c4-compra-v .piso").removeAttr("style"); 
			$("#c4-compra-v .full").removeClass("full");			
			$("#cv-c4-estante").hide();
			
			//Seteo el tamaño de la letra en función del contenedor. 
			//Se hace en pageshow ya que los contenedores tienen que ser visibles - tener ancho y alto. 
			// Valor Caja registradora:
			fillSpanWithCorrectFontSize( $("#cv-c4-cr-txt"), null, null, "white" );
			// Dialogo y tamaño de fuente
			playTimeLast = dialogManager.startDialog( [dialog0],[dialog1], animationElemPair, "", 3000 );
  			fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );			
			
		});
		
		//Seteo el comportamiento de los billetes al pagar.
		var $opcVuelto = $("#c4-compra-v .mc-btn-type2 .opc-bg"); 
		elemAnimador.setUpMediosDePago( $mediosDePago, "cv-c4-cr-txt" );
		
		//Set up boton "Pagar"
		$("#cv-c4-pagar").bind( "click", function() { 
			
			var $valorCaja = $("#cv-c4-cr-txt span");
			var valorActualCaja = parseInt($valorCaja.html().replace("$", '').trim());	
				
			if( valorActualCaja != 0 && valorActualCaja >= c4.valorAPagar ){
				
				$mediosDePago.hide();
				$("#c4-compra-v .usado").show();
				$opcVuelto.show();
				$cajaRegistradora.hide();
				$botonPagar.hide();
				
				//Dialogo
				dialogManager.startDialog( [dialog1, dialog2],[dialog3], animationElemPair, "", 3000 );
				// Dialogo - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
				
				//Obtengo las opciones
				var vuelto = valorActualCaja - c4.valorAPagar;
				var opciones = getOpcionesDeVuelto(vuelto);
				//Cargo las opciones del multiple choice y seteo el vuelto-correcto.
				var i = 0;
				var actual;
				var $multipleChoiceTxt = $("#cv-c4-opc-ctn .vuelto-txt");

				$.each($multipleChoiceTxt, function(key, value) {
					actual = opciones[i];
					if( actual == vuelto){
						$(value).parent().addClass("vuelto-correcto");
					}else{
						$(value).parent().removeClass("vuelto-correcto");
					}
					$(value).find("span")[0].textContent = "$ " + actual.toString();
					i++;					
				});
				$multipleChoiceTxt.css("color","rgba(0,0,0,0)").show(); //Letra transparente antes de cambiarles el tamaño.
				$("#cv-c4-opc-ctn").show(); //Muestro el contenedor con las opciones.
				fillSpanWithCorrectFontSize( $multipleChoiceTxt, null, null, "black" ); 
				
				
			}else{
				$mediosDePago.removeClass("usado").show();
				$valorCaja.html("$0");									
				// Dialogo y tamaño de fuente.
				playTimeLast = dialogManager.startDialog( [dialog1],[dialog2], animationElemPair, "", 3000 );
				fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
			}
		
		});
		
		//Set up opciones de vuelto.
		var $opcVuelto = $("#c4-compra-v .mc-btn-type2 .opc-bg");
		$opcVuelto.bind( "click", function() {
			
				if( $(this).hasClass("vuelto-correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-compra-v", { transition : "none" });
						$("#c4-compra-v .usado").removeClass("usado");						
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			
		});		
		elemAnimador.setUp( $opcVuelto, 4, 0, 1, 40 );
	
	}
};


var nivelSuperadoCV = {
	
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function( idPaginaJuegoPrevio ){
		
		$("#ns-sig-cv").css("background-color","rgba(0,0,0,0)");	
		nivelSuperadoManager.setUpAtInit(idPaginaJuegoPrevio, $("#ns-back-cv"), $("#ns-sig-cv"), compraVuelto );
		
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

var compraVuelto = {
	
	cantidadDeNiveles: 4,
	pageLevels : {
		"index-compra-v": indexCV,
		"c1-compra-v": c1,
		"c2-compra-v": c2,
		"c3-compra-v": c3,
		"c4-compra-v": c4,
		"ns-compra-v" : nivelSuperadoCV
	},
	
	estadoBotonesNav : {
		"c1-compra-v": {"b": true, "s": false, "1": true, "2": false, "3": false, "4": false},
		"c2-compra-v": {"b": true, "s": false, "1": true, "2": true, "3": false, "4": false},
		"c3-compra-v": {"b": true, "s": false, "1": true, "2": true, "3": true, "4": false},
		"c4-compra-v": {"b": true, "s": false, "1": true, "2": true, "3": true, "4": true},		
	},
	
	initialize: function(){
		this.setUpGamePages();
		
	},
	
	setUpGamePages: function(){
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainerbeforeshow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = compraVuelto.pageLevels[idPage];
			
			if(levelToShowObject){
				if(idPage !== "ns-compra-v" ){
					levelToShowObject.init();
				}else if(  typeof ui.prevPage[0] == "undefined" ){
					//En el caso que no le llegue la página previa (ej. actualizar?), va al inicio del juego.
					levelToShowObject.init("index-compra-v");					
				}else{
					levelToShowObject.init(ui.prevPage[0].id);
				}
			}			
		});
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainershow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = compraVuelto.pageLevels[idPage];
			
			if(levelToShowObject && levelToShowObject.start ){
				levelToShowObject.start();
			}			
		});		
		/*Set Up de todas las páginas*/
		$.each(compraVuelto.pageLevels, function(key, value){
			if(value){				
				value.setUp();
			};
		});
	}
};