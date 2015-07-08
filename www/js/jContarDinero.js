var r1 = {

	variantesJuego: [
						{
							"buscar": mediosDePago.bill2							
						},
						{
							"buscar": mediosDePago.bill5
						},
						{
							"buscar": mediosDePago.bill10
						},
						{
							"buscar": mediosDePago.bill20
						},
						{
							"buscar": mediosDePago.bill50
						},
						{
							"buscar": mediosDePago.bill100
						},
					],
					
	ordenBilletes: 	[
						{
							1: mediosDePago.bill2,
							2: mediosDePago.bill5,
							3: mediosDePago.bill10,
							4: mediosDePago.bill20,
							5: mediosDePago.bill50,
							6: mediosDePago.bill100,
						},
						{
							1: mediosDePago.bill2,
							2: mediosDePago.bill10,
							3: mediosDePago.bill20,
							4: mediosDePago.bill100,
							5: mediosDePago.bill50,
							6: mediosDePago.bill5,
						},
						{
							1: mediosDePago.bill10,
							2: mediosDePago.bill5,
							3: mediosDePago.bill2,
							4: mediosDePago.bill100,
							5: mediosDePago.bill50,
							6: mediosDePago.bill20,
						},
						{
							1: mediosDePago.bill50,
							2: mediosDePago.bill5,
							3: mediosDePago.bill100,
							4: mediosDePago.bill20,
							5: mediosDePago.bill10,
							6: mediosDePago.bill2,
						},
						{
							1: mediosDePago.bill100,
							2: mediosDePago.bill5,
							3: mediosDePago.bill20,
							4: mediosDePago.bill2,
							5: mediosDePago.bill10,
							6: mediosDePago.bill50,
						},
						{
							1: mediosDePago.bill2,
							2: mediosDePago.bill5,
							3: mediosDePago.bill100,
							4: mediosDePago.bill20,
							5: mediosDePago.bill10,
							6: mediosDePago.bill50,
						},						
					],
					
	init: function(){
				
		var random = randomIntFromInterval(0,r1.variantesJuego.length-1);
		var varianteJuego = r1.variantesJuego[random];
		
		random = randomIntFromInterval(0,r1.ordenBilletes.length-1);
		var ordenBillete = r1.ordenBilletes[random];
		
		$("#cds-r1-dialog-0-txt span").text("SE ME PERDIO EL BILLETE DE $ " + varianteJuego["buscar"].valor + ", ¿ME AYUDAS A ENCONTRARLO?");
		
		var index = 1;
		var $pos = $("#r1-contar-dinero .cds-b-banner img");
		
		$.each( $pos , function(key, value){
			value.src = ordenBillete[index].rutaImg;
			if( ordenBillete[index].valor == varianteJuego["buscar"].valor ){
				$(value).addClass("correcto");
			}else{
				$(value).removeClass("correcto");
			};		
			index++;
		});
		
		
  		
	},
	
	start: function(){
	
		var dialog0 = $("#cds-r1-dialog-0");
		var vacaPos1 = document.getElementById("cds-r1-vaca-1");
		var vacaPos2 = document.getElementById("cds-r1-vaca-2");
		$(dialog0).hide();
		$(vacaPos1).show();
		$(vacaPos2).hide();
		var animationElemPair = [vacaPos1, vacaPos2];
	
		var playTimeLast;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
						  			  			
			window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(contarDinero.estadoBotonesNav["r1-contar-dinero"], "#r1-contar-dinero", "r1", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);									
			
  		},1000);//Espera dos segundo para empezar a hablar.
	
	
	},	
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
	
		//Set up imagenes de billetes:
		var $billetes = $("#r1-contar-dinero .cds-b-banner img");
		$billetes.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-contar-d", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $billetes, 4, 0, 1, 40 );
	
	}
};

var r2 = {
	
	variantesJuego: [
						{
							"buscar": mediosDePago.moneda1
						},
						{
							"buscar": mediosDePago.bill5
						},
						{
							"buscar": mediosDePago.bill10
						},
						{
							"buscar": mediosDePago.moneda2
						},
						{
							"buscar": mediosDePago.bill20
						},
						{
							"buscar": mediosDePago.moneda1
						},
					],
	ordenBilletes: 	[
						{
							1: mediosDePago.moneda2,
							2: mediosDePago.bill5,
							3: mediosDePago.bill10,
							4: mediosDePago.moneda1,
							5: mediosDePago.bill20,
							6: mediosDePago.bill2,
						},
						{
							1: mediosDePago.bill5,
							2: mediosDePago.moneda2,
							3: mediosDePago.bill20,
							4: mediosDePago.moneda1,
							5: mediosDePago.bill2,
							6: mediosDePago.bill10,
						},
						{
							1: mediosDePago.moneda2,
							2: mediosDePago.moneda1,
							3: mediosDePago.bill20,
							4: mediosDePago.bill5,
							5: mediosDePago.bill10,
							6: mediosDePago.bill2,
						},
						{
							1: mediosDePago.bill2,
							2: mediosDePago.bill20,
							3: mediosDePago.bill10,
							4: mediosDePago.bill5,
							5: mediosDePago.moneda1,
							6: mediosDePago.moneda2,
						},
						{
							1: mediosDePago.bill20,
							2: mediosDePago.bill2,
							3: mediosDePago.bill10,
							4: mediosDePago.moneda1,
							5: mediosDePago.bill5,
							6: mediosDePago.moneda2,
						},				
					],

	init: function(){
				
		var random = randomIntFromInterval(0,r2.variantesJuego.length-1);
		var varianteJuego = r2.variantesJuego[random];
		
		random = randomIntFromInterval(0,r2.ordenBilletes.length-1);
		var ordenBillete = r2.ordenBilletes[random];
		
		$("#r2_dialogo").text("SE ME PERDIO " + varianteJuego["buscar"].frase + " DE $" + varianteJuego["buscar"].valor + ", ¿ME AYUDAS A ENCONTRARLO?");
		
		var index = 1;
		var $pos = $("#r2-contar-dinero .cds-b-banner img");
		
		
		var $pos = $("#r2-contar-dinero .cds-b-banner div");
		var index = 1;
		$.each( $pos , function(key, value){
			
			if( ordenBillete[index].tipo == "moneda" ){
				$(value).removeClass("cds-bill-banner");
				$(value).addClass("mon-banner");
				$(value).addClass("moneda");
				$(value).addClass("mon_" + index + "_3_centrados");
				$(value).removeClass("bill_" + index + "_3_centrados");
			}else{
				$(value).removeClass("mon-banner");
				$(value).removeClass("moneda");
				$(value).addClass("cds-bill-banner");
				$(value).addClass("bill_" + index + "_3_centrados");
				$(value).removeClass("mon_" + index + "_3_centrados");
			}
			
			index++; 
		});
		
		index = 1;
		$pos = $("#r2-contar-dinero .cds-b-banner img");
		
		$.each( $pos , function(key, value){
			value.src = ordenBillete[index].rutaImg;

			if( ordenBillete[index].tipo == "moneda" )
				$(value).removeClass("cds-b-banner-img");
			else
				$(value).addClass("cds-b-banner-img");
			
			if( ordenBillete[index].valor == varianteJuego["buscar"].valor ){
				$(value).addClass("correcto");
			}else{
				$(value).removeClass("correcto");
			};		

			index++; 
		});	

		
	},
	
	start: function(){
	
		var dialog0 = $("#cds-r2-dialog-0");
		var vacaPos1 = document.getElementById("cds-r2-vaca-1");
		var vacaPos2 = document.getElementById("cds-r2-vaca-2");
		$(dialog0).hide();
		$(vacaPos1).show();
		$(vacaPos2).hide();
		var animationElemPair = [vacaPos1, vacaPos2];
	
		var playTimeLast;
		
		window.setTimeout(function(){
			/*Activa los botones correspondientes*/
			nivelSuperadoManager.initPanelNav(contarDinero.estadoBotonesNav["r2-contar-dinero"], "#r2-contar-dinero", "r2", 6);
			self.suspenderClickHandlers = false;				  			
		},playTimeLast);	
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
											
			
  		},1000);//Espera dos segundo para empezar a hablar.
	
	
	},	
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
	
		//Set up imagenes de billetes:
		var $billetes = $("#r2-contar-dinero .cds-b-banner img");
		$billetes.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-contar-d", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $billetes, 4, 0, 1, 40 );
	
	}
	
};

var r3 = {

	variantesJuego: [
						{
							"correcto": 4,
							"opciones":	{
											1: 4,
											2: 5,
											3: 9
										},
							"billetes":	{
											1: mediosDePago.bill2,
											2: mediosDePago.bill2
										}
						},
						{
							"correcto": 7,
							"opciones":	{
											1: 5,
											2: 7,
											3: 9
										},
							"billetes":	{
											1: mediosDePago.bill5,
											2: mediosDePago.bill2
										} 
						},
						{
							"correcto": 10,
							"opciones":	{
											1: 5,
											2: 10,
											3: 4
										},
							"billetes":	{
											1: mediosDePago.bill5,
											2: mediosDePago.bill5
										}
						}
					],

	init: function(){
			
		var random = randomIntFromInterval(0,r3.variantesJuego.length-1);
		var varianteJuego = r3.variantesJuego[random];
				
		var $pos = $("#r3-contar-dinero .cds-b-banner img");
		var index = 1;
		$.each( $pos , function(key, value){
			value.src = varianteJuego.billetes[index].rutaImg;
			index++; 
		});
	
		index = 1;
		$pos = $("#r3-contar-dinero .cds-b-banner-botones .vuelto-txt");
		$.each( $pos , function(key, value){
			$(value).find("span")[0].textContent = "$ "+varianteJuego.opciones[index];
			if (varianteJuego.correcto == varianteJuego.opciones[index])
				$(value).parent().addClass("correcto");
			else
				$(value).parent().removeClass("correcto");
			index++; 
		});
		
	},
	
	start: function(){
	
		var dialog0 = $("#cds-r3-dialog-0");
		var vacaPos1 = document.getElementById("cds-r3-vaca-1");
		var vacaPos2 = document.getElementById("cds-r3-vaca-2");
		$(dialog0).hide();
		$(vacaPos1).show();
		$(vacaPos2).hide();
		var animationElemPair = [vacaPos1, vacaPos2];
	
		var playTimeLast;
		
		$pos = $("#r3-contar-dinero .cds-b-banner-botones .vuelto-txt");
		fillSpanWithCorrectFontSize($pos, null, null, "black" );
		
		window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(contarDinero.estadoBotonesNav["r3-contar-dinero"], "#r3-contar-dinero", "r3", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
		  			  			
  		},1000);//Espera dos segundo para empezar a hablar.
	
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		var $botones = $("#r3-contar-dinero .cds-b-banner-botones .opcion_bg");
		$botones.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-contar-d", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $botones, 4, 0, 1, 40 );
	}
		
};

var r4 = {

	variantesJuego: [
						{
							"correcto": 2,
							"opciones":	{
											1: 2,
											2: 3,
											3: 4
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.moneda1
										}
						},
						{
							"correcto": 3,
							"opciones":	{
											1: 2,
											2: 3,
											3: 5
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.moneda1
										} 
						},
						{
							"correcto": 4,
							"opciones":	{
											1: 5,
											2: 2,
											3: 4
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.moneda2
										}
						}
					],

	init: function(){
			
		var random = randomIntFromInterval(0,r4.variantesJuego.length-1);
		var varianteJuego = r4.variantesJuego[random];
				
		var $pos = $("#r4-contar-dinero .cds-b-banner img");
		var index = 1;
		$.each( $pos , function(key, value){
			value.src = varianteJuego.monedas[index].rutaImg;
			index++; 
		});
	
		index = 1;
		$pos = $("#r4-contar-dinero .cds-b-banner-botones .vuelto-txt");
		$.each( $pos , function(key, value){
			$(value).find("span")[0].textContent = "$ "+varianteJuego.opciones[index];
			if (varianteJuego.correcto == varianteJuego.opciones[index])
				$(value).parent().addClass("correcto");
			else
				$(value).parent().removeClass("correcto");
			index++; 
		});
		
	},
	
	start: function(){
	
		var dialog0 = $("#cds-r4-dialog-0");
		var vacaPos1 = document.getElementById("cds-r4-vaca-1");
		var vacaPos2 = document.getElementById("cds-r4-vaca-2");
		$(dialog0).hide();
		$(vacaPos1).show();
		$(vacaPos2).hide();
		var animationElemPair = [vacaPos1, vacaPos2];
	
		var playTimeLast;
		
		$pos = $("#r4-contar-dinero .cds-b-banner-botones .vuelto-txt");
		fillSpanWithCorrectFontSize($pos, null, null, "black" );
		
		window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(contarDinero.estadoBotonesNav["r4-contar-dinero"], "#r4-contar-dinero", "r4", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
		  			  			
  		},1000);//Espera dos segundo para empezar a hablar.
	
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){		
		var $botones = $("#r4-contar-dinero .cds-b-banner-botones .opcion_bg");
		$botones.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-contar-d", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $botones, 4, 0, 1, 40 );
	}
		
};

var r5 = {

	variantesJuego: [
						{
							"correcto": 4,
							"opciones":	{
											1: 4,
											2: 5,
											3: 2
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill2
										}
						},
						{
							"correcto": 6,
							"opciones":	{
											1: 6,
											2: 4,
											3: 5
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill2,
											3: mediosDePago.bill2
										}
						},
						{
							"correcto": 6,
							"opciones":	{
											1: 4,
											2: 6,
											3: 5
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.moneda2,
											3: mediosDePago.bill2
										}
						},
						{
							"correcto": 7,
							"opciones":	{
											1: 5,
											2: 8,
											3: 7
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill5
										}
						},
						{
							"correcto": 8,
							"opciones":	{
											1: 6,
											2: 8,
											3: 10
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.moneda1,
											3: mediosDePago.moneda2
										}
						},
						{
							"correcto": 8,
							"opciones":	{
											1: 8,
											2: 6,
											3: 10
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill2
										}
						},
						{
							"correcto": 9,
							"opciones":	{
											1: 9,
											2: 8,
											3: 10
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.moneda2,
											3: mediosDePago.moneda2
										}
						},
						{
							"correcto": 9,
							"opciones":	{
											1: 10,
											2: 8,
											3: 9
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.bill2,
											3: mediosDePago.bill2
										}
						},
					],

	init: function(){
			
		var random = randomIntFromInterval(0,r5.variantesJuego.length-1);
		var varianteJuego = r5.variantesJuego[random];
				
		var $pos = $("#r5-contar-dinero .cds-b-banner div");
		var index = 1;
		$.each( $pos , function(key, value){
			
			if( varianteJuego.monedas[index].tipo == "moneda" ){
				$(value).removeClass("cds-bill-banner");
				$(value).removeClass("billete");
				$(value).addClass("mon-banner");
				$(value).addClass("moneda");
				$(value).addClass("mon_" + index + "_3_centrados");
				$(value).removeClass("bill_" + index + "_3_centrados");
			}else{
				$(value).removeClass("mon-banner");
				$(value).removeClass("moneda");
				$(value).addClass("billete");
				$(value).addClass("cds-bill-banner");
				$(value).addClass("bill_" + index + "_3_centrados");
				$(value).removeClass("mon_" + index + "_3_centrados");
			}
			
			index++; 
		});
		
		index = 1;
		$pos = $("#r5-contar-dinero .cds-b-banner img");
		
		$.each( $pos , function(key, value){
			value.src = varianteJuego.monedas[index].rutaImg;
			
			if(varianteJuego.monedas[index].tipo == "moneda" )
				$(value).removeClass("cds-b-banner-img");
			else
				$(value).addClass("cds-b-banner-img");
			
			index++; 
		});
			
		index = 1;
		$pos = $("#r5-contar-dinero .cds-b-banner-botones .vuelto-txt");
		$.each( $pos , function(key, value){
			$(value).find("span")[0].textContent = "$ "+varianteJuego.opciones[index];
			if (varianteJuego.correcto == varianteJuego.opciones[index])
				$(value).parent().addClass("correcto");
			else
				$(value).parent().removeClass("correcto");
			index++; 
		});
				
	},
	
	start: function(){
	
		var dialog0 = $("#cds-r5-dialog-0");
		var vacaPos1 = document.getElementById("cds-r5-vaca-1");
		var vacaPos2 = document.getElementById("cds-r5-vaca-2");
		$(dialog0).hide();
		$(vacaPos1).show();
		$(vacaPos2).hide();
		var animationElemPair = [vacaPos1, vacaPos2];
	
		var playTimeLast;
		
		$pos = $("#r5-contar-dinero .cds-b-banner-botones .vuelto-txt");
		fillSpanWithCorrectFontSize($pos, null, null, "black" );
		
		window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(contarDinero.estadoBotonesNav["r5-contar-dinero"], "#r5-contar-dinero", "r5", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
		  			  			
  		},1000);//Espera dos segundo para empezar a hablar.
	
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		var $botones = $("#r5-contar-dinero .cds-b-banner-botones .opcion_bg");
		$botones.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-contar-d", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $botones, 4, 0, 1, 40 );
	}
		
};

var r6 = {

	variantesJuego: [
						{
							"correcto": 11,
							"opciones":	{
											1: 11,
											2: 2,
											3: 10
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.bill5,
											3: mediosDePago.bill5
										}
						},
						{
							"correcto": 12,
							"opciones":	{
											1: 11,
											2: 12,
											3: 15
										},
							"monedas":	{
											1: mediosDePago.bill2,
											2: mediosDePago.bill5,
											3: mediosDePago.bill5
										}
						},
						{
							"correcto": 13,
							"opciones":	{
											1: 13,
											2: 12,
											3: 10
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 14,
							"opciones":	{
											1: 11,
											2: 12,
											3: 14
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill2,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 17,
							"opciones":	{
											1: 19,
											2: 15,
											3: 17
										},
							"monedas":	{
											1: mediosDePago.bill2,
											2: mediosDePago.bill5,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 17,
							"opciones":	{
											1: 17,
											2: 15,
											3: 12
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill5,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 20,
							"opciones":	{
											1: 20,
											2: 15,
											3: 25
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.bill5,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 21,
							"opciones":	{
											1: 21,
											2: 20,
											3: 24
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.bill10,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 22,
							"opciones":	{
											1: 20,
											2: 22,
											3: 21
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 22,
							"opciones":	{
											1: 22,
											2: 20,
											3: 21
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill10,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 23,
							"opciones":	{
											1: 23,
											2: 25,
											3: 20
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 24,
							"opciones":	{
											1: 24,
											2: 22,
											3: 25
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill2,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 27,
							"opciones":	{
											1: 25,
											2: 24,
											3: 27
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill5,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 27,
							"opciones":	{
											1: 25,
											2: 24,
											3: 27
										},
							"monedas":	{
											1: mediosDePago.bill2,
											2: mediosDePago.bill5,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 30,
							"opciones":	{
											1: 25,
											2: 30,
											3: 27
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.bill5,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 40,
							"opciones":	{
											1: 25,
											2: 30,
											3: 40
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill10,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 41,
							"opciones":	{
											1: 41,
											2: 30,
											3: 39
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.moneda1,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 42,
							"opciones":	{
											1: 42,
											2: 40,
											3: 45
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill2,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 42,
							"opciones":	{
											1: 45,
											2: 42,
											3: 40
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill20,
											3: mediosDePago.moneda2
										}
						},
						{
							"correcto": 45,
							"opciones":	{
											1: 41,
											2: 40,
											3: 45
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill5,
											3: mediosDePago.bill20
										}
						},
						{
							"correcto": 50,
							"opciones":	{
											1: 50,
											2: 45,
											3: 48
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill20,
											3: mediosDePago.bill10
										}
						},
						{
							"correcto": 52,
							"opciones":	{
											1: 52,
											2: 50,
											3: 53
										},
							"monedas":	{
											1: mediosDePago.bill50,
											2: mediosDePago.moneda1,
											3: mediosDePago.moneda1
										}
						},
						{
							"correcto": 53,
							"opciones":	{
											1: 53,
											2: 50,
											3: 52
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.bill2,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 53,
							"opciones":	{
											1: 53,
											2: 50,
											3: 52
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.moneda2,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 60,
							"opciones":	{
											1: 58,
											2: 60,
											3: 62
										},
							"monedas":	{
											1: mediosDePago.bill5,
											2: mediosDePago.bill5,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 61,
							"opciones":	{
											1: 61,
											2: 63,
											3: 65
										},
							"monedas":	{
											1: mediosDePago.moneda1,
											2: mediosDePago.bill10,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 62,
							"opciones":	{
											1: 63,
											2: 60,
											3: 62
										},
							"monedas":	{
											1: mediosDePago.moneda2,
											2: mediosDePago.bill10,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 62,
							"opciones":	{
											1: 63,
											2: 60,
											3: 62
										},
							"monedas":	{
											1: mediosDePago.bill2,
											2: mediosDePago.bill10,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 70,
							"opciones":	{
											1: 80,
											2: 70,
											3: 90
										},
							"monedas":	{
											1: mediosDePago.bill10,
											2: mediosDePago.bill10,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 80,
							"opciones":	{
											1: 80,
											2: 70,
											3: 90
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill10,
											3: mediosDePago.bill50
										}
						},
						{
							"correcto": 90,
							"opciones":	{
											1: 80,
											2: 70,
											3: 90
										},
							"monedas":	{
											1: mediosDePago.bill20,
											2: mediosDePago.bill20,
											3: mediosDePago.bill50
										}
						},
					],

	init: function(){
			
		var random = randomIntFromInterval(0,r6.variantesJuego.length-1);
		var varianteJuego = r6.variantesJuego[random];
				
		var $pos = $("#r6-contar-dinero .cds-b-banner div");
		var index = 1;
		$.each( $pos , function(key, value){
			
			if( varianteJuego.monedas[index].tipo == "moneda" ){
				$(value).removeClass("bill-banner");
				$(value).addClass("mon-banner");
				$(value).addClass("moneda");
				$(value).addClass("mon_" + index + "_3_centrados");
				$(value).removeClass("bill_" + index + "_3_centrados");
			}else{
				$(value).removeClass("mon-banner");
				$(value).removeClass("moneda");
				$(value).addClass("cds-bill-banner");
				$(value).addClass("bill_" + index + "_3_centrados");
				$(value).removeClass("mon_" + index + "_3_centrados");
			}
			
			index++; 
		});
		
		index = 1;
		$pos = $("#r6-contar-dinero .cds-b-banner img");
		
		$.each( $pos , function(key, value){
			value.src = varianteJuego.monedas[index].rutaImg;	
			
			if( varianteJuego.monedas[index].tipo == "moneda" )
				$(value).removeClass("cds-b-banner-img");
			else
				$(value).addClass("cds-b-banner-img");
			
			index++; 
		});
	
		index = 1;
		$pos = $("#r6-contar-dinero .cds-b-banner-botones .vuelto-txt");
		$.each( $pos , function(key, value){
			$(value).find("span")[0].textContent = varianteJuego.opciones[index];
			if (varianteJuego.correcto == varianteJuego.opciones[index])
				$(value).parent().addClass("correcto");
			else
				$(value).parent().removeClass("correcto");
			index++; 
		});
		
	},
	
	start: function(){
	
		var dialog0 = $("#cds-r6-dialog-0");
		var vacaPos1 = document.getElementById("cds-r6-vaca-1");
		var vacaPos2 = document.getElementById("cds-r6-vaca-2");
		$(dialog0).hide();
		$(vacaPos1).show();
		$(vacaPos2).hide();
		var animationElemPair = [vacaPos1, vacaPos2];
	
		var playTimeLast;
		
		$pos = $("#r6-contar-dinero .cds-b-banner-botones .vuelto-txt");
		fillSpanWithCorrectFontSize($pos, null, null, "black" );
		
		window.setTimeout(function(){
  				/*Activa los botones correspondientes*/
  				nivelSuperadoManager.initPanelNav(contarDinero.estadoBotonesNav["r6-contar-dinero"], "#r6-contar-dinero", "r6", 6);
				self.suspenderClickHandlers = false;				  			
  			},playTimeLast);
		
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
		  			  			
  		},1000);//Espera dos segundo para empezar a hablar.
	
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		var $botones = $("#r6-contar-dinero .cds-b-banner-botones .opcion_bg");
		$botones.bind( "click", function() {
			if( ! self.suspenderClickHandlers ){
				if( $(this).hasClass("correcto") ){
					//Va a la página de nivel superado.
					window.setTimeout(function(){
						$.mobile.navigate( "#ns-contar-d", { transition : "none" });
					},300);
				}else{
					elemAnimador.start(this,1200);
				}
			}
		});
		elemAnimador.setUp( $botones, 4, 0, 1, 40 );
	}
		
};

var nivelSuperadoCE = {
	
	/*Lo necesario que se ejecute antes que la página se muestre*/
	init: function( idPaginaJuegoPrevio ){
		
		nivelSuperadoManager.setUpAtInit(idPaginaJuegoPrevio, $("#ns-back-cds-b1"), $("#ns-sig-cds-b1"), contarDinero );	
		
	},
	
	/*Lo necesario que se ejecute cuando la página se muestre, el nivel empieza*/
	start: function(){
		
		//Por ahora nada, a lo sumo, después la vaca se moverá y habrá algun audio.
		
	},
	
	//Todos los bindings de eventos que se hacen una vez en la página.
	setUp: function(){		
		//Por ahora, no realizara nada aca.
	}
};

var contarDinero = {
	
	cantidadDeNiveles: 6,
	pageLevels : {
		
		"r1-contar-dinero": r1,
		"r2-contar-dinero": r2,
		"r3-contar-dinero": r3,
		"r4-contar-dinero": r4,
		"r5-contar-dinero": r5,
		"r6-contar-dinero": r6,
		"ns-contar-d" : nivelSuperadoCE
	},
	
	estadoBotonesNav : {
		"r1-contar-dinero": {"r": true, "s": false, "1": true, "2": false, "3": false, "4": false, "5": false, "6":false },
		"r2-contar-dinero": {"r": true, "s": false, "1": true, "2": true, "3": false, "4": false, "5": false, "6":false },
		"r3-contar-dinero": {"r": true, "s": false, "1": true, "2": true, "3": true, "4": false, "5": false, "6":false },
		"r4-contar-dinero": {"r": true, "s": false, "1": true, "2": true, "3": true, "4": true, "5": false, "6":false },
		"r5-contar-dinero": {"r": true, "s": false, "1": true, "2": true, "3": true, "4": true, "5": true, "6":false },
		"r6-contar-dinero": {"r": true, "s": false, "1": true, "2": true, "3": true, "4": true, "5": true, "6":true }
	},
	
	initialize: function(){
		this.setUpGamePages();
		
	},
	
	setUpGamePages: function(){
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainerbeforeshow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = contarDinero.pageLevels[idPage];
			
			if(levelToShowObject){
				if(idPage !== "ns-contar-d" ){
					levelToShowObject.init();
				}else if(  typeof ui.prevPage[0] == "undefined" ){
					//En el caso que no le llegue la página previa (ej. actualizar?), va al inicio del juego.
					levelToShowObject.init("r1-contar-dinero");					
				}else{
					levelToShowObject.init(ui.prevPage[0].id);
				}
			}			
		});
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainershow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = contarDinero.pageLevels[idPage];
			
			if(levelToShowObject && levelToShowObject.start ){
				levelToShowObject.start();
			}			
		});		
		/*Set Up de todas las páginas*/
		$.each(contarDinero.pageLevels, function(key, value){
			if(value){				
				value.setUp();
			};
		});
	}
};
