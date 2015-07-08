/* Las funciones init dec cada uno de estos objetos realizan practicamente los mismo.
 * Por ahora quedan así. Luego veremos, si es que no se quieren cambiar, se podría crear
 * un objeto "Inicializador" o algo parecido para que en base a parámetros inicialice las
 * páginas. 
 */
 
 var indexCD = {

	init: function(){
		
		$("#cd-i-dialog-0").hide();
		$("#cd-i-dialog-1").hide();
		$("#cd-index-vaca-1").show();
		$("#cd-index-vaca-2").hide();		
  		
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cd-i-dialog-0");
		var dialog1 = document.getElementById("cd-i-dialog-1");
		var vacaPos1 = document.getElementById("cd-index-vaca-1");
		var vacaPos2 = document.getElementById("cd-index-vaca-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		
		var playTimeLast;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3500 );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1], animationElemPair, "", 2000 );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );  			
  			},playTimeLast);
  			  			
  		},1000);//Espera un segundo para empezar a hablar.
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
				
	}
};

var indexCM = {

	init: function(){
		
		$("#cm-i-dialog-0").hide();
		$("#cm-i-dialog-1").hide();
		$("#cm-index-vaca-1").show();
		$("#cm-index-vaca-2").hide();		
  		
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-i-dialog-0");
		var dialog1 = document.getElementById("cm-i-dialog-1");
		var vacaPos1 = document.getElementById("cm-index-vaca-1");
		var vacaPos2 = document.getElementById("cm-index-vaca-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		
		var playTimeLast;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3500 );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1], animationElemPair, "", 2500 );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );  			
  			},playTimeLast);
  			  			
  		},1000);//Espera un segundo para empezar a hablar.
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
				
	}
};
var indexCB = {

	init: function(){
				
		$("#cb-i-dialog-0").hide();
		$("#cb-i-dialog-1").hide();
		$("#cb-index-vaca-1").show();
		$("#cb-index-vaca-2").hide();
  		
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cb-i-dialog-0");
		var dialog1 = document.getElementById("cb-i-dialog-1");
		var vacaPos1 = document.getElementById("cb-index-vaca-1");
		var vacaPos2 = document.getElementById("cb-index-vaca-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 3500 );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1], animationElemPair, "", 2500 );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera un segundo para empezar a hablar.
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
				
	}
};

var dosPesosCM = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cm-2pe-dialog-0").hide();
		$("#cm-2pe-dialog-1").hide();
		$("#cm-2pe-dialog-2").hide();
		$("#cm-2pe-vaca-1").show();
		$("#cm-2pe-vaca-2").hide();
		$("#cm-2pe-front").show();
		$("#cm-2pe-back").hide();
		$("#cm-2pe-h1").hide();
		$("#cm-2pe-h2").hide();
		$(".btn").hide();	
				
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-2pe-dialog-0");
		var dialog1 = document.getElementById("cm-2pe-dialog-1");
		var dialog2 = document.getElementById("cm-2pe-dialog-2");
		var monFront = document.getElementById("cm-2pe-front");
		var monBack = document.getElementById("cm-2pe-back");
		var monBorderH = document.getElementById("cm-2pe-h1");
		var monCenterH = document.getElementById("cm-2pe-h2");
		var vacaPos1 = document.getElementById("cm-2pe-vaca-1");
		var vacaPos2 = document.getElementById("cm-2pe-vaca-2");
		var animationElemPair = [vacaPos1, vacaPos2];
		
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			window.setTimeout(function(){
  				$(monFront).hide();
				$(monBorderH).show();				  			
	  			
	  			window.setTimeout(function(){
	  				$(monBorderH).hide();
	  				$(monCenterH).show();	  			
	  			},playTimeLast*(1/3)); //Muestra la moneda resaltada 2.
	  			
  			},playTimeLast*(1/3));//Muestra la moneda resaltada 1.
  			
  			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, monCenterH], [dialog1,monBack], animationElemPair, "", 4000/*por ahora*/ );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
  				window.setTimeout(function(){
  					playTimeLast = dialogManager.startDialog( [dialog1,monBack], [dialog2,monFront], animationElemPair, "", 4000/*por ahora*/ );
  					// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
					
  					window.setTimeout(function(){
  						self.suspenderClickHandlers = false;
  						$(".btn").show();
  					},playTimeLast); 
  					 					  			
  				},playTimeLast);
  				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera dos segundos para empezar a hablar.  		
	
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar la moneda, da vuelta - CARA*/
		$("#cm-2pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-2pe-dialog-2").hide();
	  			$("#cm-2pe-back").show();
	  			$("#cm-2pe-dialog-1").show();  				
  			};
		});
		/*Al tocar la moneda, da vuelta - CONTRACARA*/
		$("#cm-2pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-2pe-dialog-1").hide();
	  			$("#cm-2pe-front").show();
	  			$("#cm-2pe-dialog-2").show();  				
  			};
		});		
	},
};

var unPesoCM = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cm-1pe-dialog-0").hide();
		$("#cm-1pe-dialog-1").hide();
		$("#cm-1pe-dialog-2").hide();
		$("#cm-1pe-vaca-1").show();
		$("#cm-1pe-vaca-2").hide();
		$("#cm-1pe-front").show();
		$("#cm-1pe-back").hide();
		$("#cm-1pe-h1").hide();
		$("#cm-1pe-h2").hide();
		$(".btn").hide();		
				
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-1pe-dialog-0");
		var dialog1 = document.getElementById("cm-1pe-dialog-1");
		var dialog2 = document.getElementById("cm-1pe-dialog-2");
		var monFront = document.getElementById("cm-1pe-front");
		var monBack = document.getElementById("cm-1pe-back");
		var monBorderH = document.getElementById("cm-1pe-h1");
		var monCenterH = document.getElementById("cm-1pe-h2");
		var vacaPos1 = document.getElementById("cm-1pe-vaca-1");
		var vacaPos2 = document.getElementById("cm-1pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				$(monFront).hide();
				$(monBorderH).show();				  			
	  			
	  			window.setTimeout(function(){
	  				$(monBorderH).hide();
	  				$(monCenterH).show();	  			
	  			},playTimeLast*(1/3)); //Muestra la moneda resaltada 2.
	  			
  			},playTimeLast*(1/3));//Muestra la moneda resaltada 1.
  			
  			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, monCenterH], [dialog1,monBack], animationElemPair, "", 4000/*por ahora*/ );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
  				
  				window.setTimeout(function(){
  					playTimeLast = dialogManager.startDialog( [dialog1,monBack], [dialog2,monFront], animationElemPair, "", 4000/*por ahora*/ );
  					// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
  					
  					window.setTimeout(function(){
  						self.suspenderClickHandlers = false;
  						$(".btn").show();
  					},playTimeLast);  					  			
  				},playTimeLast);
  				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera dos segundos para empezar a hablar.
	
	
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar la moneda, da vuelta - CARA*/
		$("#cm-1pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-1pe-dialog-2").hide();
	  			$("#cm-1pe-back").show();
	  			$("#cm-1pe-dialog-1").show();
  			};
		});
		/*Al tocar la moneda, da vuelta - CONTRACARA*/
		$("#cm-1pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-1pe-dialog-1").hide();
	  			$("#cm-1pe-front").show();
	  			$("#cm-1pe-dialog-2").show();	  			 				
  			};
		});				
	},
	
};

var ctvs50M = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cm-50c-dialog-0").hide();
		$("#cm-50c-dialog-1").hide();
		$("#cm-50c-dialog-2").hide();
		$("#cm-50c-vaca-1").show();
		$("#cm-50c-vaca-2").hide();
		$("#cm-50c-front").show();
		$("#cm-50c-back").hide();
		$(".btn").hide();	
				
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-50c-dialog-0");
		var dialog1 = document.getElementById("cm-50c-dialog-1");
		var dialog2 = document.getElementById("cm-50c-dialog-2");
		var monFront = document.getElementById("cm-50c-front");
		var monBack = document.getElementById("cm-50c-back");		
		var vacaPos1 = document.getElementById("cm-50c-vaca-1");
		var vacaPos2 = document.getElementById("cm-50c-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1,monBack], animationElemPair, "", 4000/*por ahora*/ );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
			
  				window.setTimeout(function(){
  					playTimeLast = dialogManager.startDialog( [dialog1,monBack], [dialog2,monFront], animationElemPair, "", 4000/*por ahora*/ );
  					// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
			
  					window.setTimeout(function(){
  						self.suspenderClickHandlers = false;
  						$(".btn").show();
  					},playTimeLast); 
  					 					  			
  				},playTimeLast);
  				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera dos segundos para empezar a hablar.
  		
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar la moneda, da vuelta - CARA*/
		$("#cm-50c-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-50c-dialog-2").hide();
	  			$("#cm-50c-back").show();
	  			$("#cm-50c-dialog-1").show();  				
  			};
		});
		/*Al tocar la moneda, da vuelta - CONTRACARA*/
		$("#cm-50c-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-50c-dialog-1").hide();
	  			$("#cm-50c-front").show();
	  			$("#cm-50c-dialog-2").show();  				
  			};
		});		
	},
};

var ctvs25M = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cm-25c-dialog-0").hide();
		$("#cm-25c-dialog-1").hide();
		$("#cm-25c-dialog-2").hide();
		$("#cm-25c-vaca-1").show();
		$("#cm-25c-vaca-2").hide();
		$("#cm-25c-front").show();
		$("#cm-25c-back").hide();
		$(".btn").hide();
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-25c-dialog-0");
		var dialog1 = document.getElementById("cm-25c-dialog-1");
		var dialog2 = document.getElementById("cm-25c-dialog-2");
		var monFront = document.getElementById("cm-25c-front");
		var monBack = document.getElementById("cm-25c-back");		
		var vacaPos1 = document.getElementById("cm-25c-vaca-1");
		var vacaPos2 = document.getElementById("cm-25c-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
				
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 4000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1,monBack], animationElemPair, "", 4000/*por ahora*/ );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
  				window.setTimeout(function(){
  					playTimeLast = dialogManager.startDialog( [dialog1,monBack], [dialog2,monFront], animationElemPair, "", 4000/*por ahora*/ );
  					// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
					
  					window.setTimeout(function(){
  						self.suspenderClickHandlers = false;
  						$(".btn").show();
  					},playTimeLast); 
  					 					  			
  				},playTimeLast);
  				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera dos segundos para empezar a hablar.		
	},
	
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar la moneda, da vuelta - CARA*/
		$("#cm-25c-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-25c-dialog-2").hide();
	  			$("#cm-25c-back").show();
	  			$("#cm-25c-dialog-1").show();  				
  			};
		});
		/*Al tocar la moneda, da vuelta - CONTRACARA*/
		$("#cm-25c-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-25c-dialog-1").hide();
	  			$("#cm-25c-front").show();
	  			$("#cm-25c-dialog-2").show();  				
  			};
		});		
	},
};

var ctvs10M = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cm-10c-dialog-0").hide();
		$("#cm-10c-dialog-1").hide();
		$("#cm-10c-dialog-2").hide();
		$("#cm-10c-vaca-1").show();
		$("#cm-10c-vaca-2").hide();
		$("#cm-10c-back").hide();
		$(".btn").hide();		
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-10c-dialog-0");
		var dialog1 = document.getElementById("cm-10c-dialog-1");
		var dialog2 = document.getElementById("cm-10c-dialog-2");
		var monFront = document.getElementById("cm-10c-front");
		var monBack = document.getElementById("cm-10c-back");		
		var vacaPos1 = document.getElementById("cm-10c-vaca-1");
		var vacaPos2 = document.getElementById("cm-10c-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 5000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1,monBack], animationElemPair, "", 4000/*por ahora*/ );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
  				window.setTimeout(function(){
  					playTimeLast = dialogManager.startDialog( [dialog1,monBack], [dialog2,monFront], animationElemPair, "", 4000/*por ahora*/ );
  					// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
  					
  					window.setTimeout(function(){
  						self.suspenderClickHandlers = false;
  						$(".btn").show();
  					},playTimeLast); 
  					 					  			
  				},playTimeLast);
  				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera un segundo para empezar a hablar.
  		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar la moneda, da vuelta - CARA*/
		$("#cm-10c-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-10c-dialog-2").hide();
	  			$("#cm-10c-back").show();
	  			$("#cm-10c-dialog-1").show();  				
  			};
		});
		/*Al tocar la moneda, da vuelta - CONTRACARA*/
		$("#cm-10c-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-10c-dialog-1").hide();
	  			$("#cm-10c-front").show();
	  			$("#cm-10c-dialog-2").show();  				
  			};
		});		
	},
};

var ctvs5M = {

	suspenderClickHandlers :false,
	
	init: function(){
		$("#cm-5c-dialog-0").hide();
		$("#cm-5c-dialog-1").hide();
		$("#cm-5c-dialog-2").hide();
		$("#cm-5c-vaca-1").show();
		$("#cm-5c-vaca-2").hide();
		$("#cm-5c-back").hide();
		$(".btn").hide();		
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cm-5c-dialog-0");
		var dialog1 = document.getElementById("cm-5c-dialog-1");
		var dialog2 = document.getElementById("cm-5c-dialog-2");
		var monFront = document.getElementById("cm-5c-front");
		var monBack = document.getElementById("cm-5c-back");		
		var vacaPos1 = document.getElementById("cm-5c-vaca-1");
		var vacaPos2 = document.getElementById("cm-5c-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[dialog0], animationElemPair, "", 5000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0], [dialog1,monBack], animationElemPair, "", 4000/*por ahora*/ );
  				// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
  				window.setTimeout(function(){
  					playTimeLast = dialogManager.startDialog( [dialog1,monBack], [dialog2,monFront], animationElemPair, "", 4000/*por ahora*/ );
  					// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
  					
  					window.setTimeout(function(){
  						self.suspenderClickHandlers = false;
  						$(".btn").show();
  					},playTimeLast); 
  					 					  			
  				},playTimeLast);
  				  			
  			},playTimeLast);
  			  			
  		},1000);//Espera segundo para empezar a hablar.
  		
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar la moneda, da vuelta - CARA*/
		$("#cm-5c-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-5c-dialog-2").hide();
	  			$("#cm-5c-back").show();
	  			$("#cm-5c-dialog-1").show();  				
  			};
		});
		/*Al tocar la moneda, da vuelta - CONTRACARA*/
		$("#cm-5c-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cm-5c-dialog-1").hide();
	  			$("#cm-5c-front").show();
	  			$("#cm-5c-dialog-2").show();  				
  			};
		});		
	},
};

var dosPesosCB = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cb-2pe-dialog-0").hide();
		$("#cb-2pe-dialog-1").hide();
		$("#cb-2pe-dialog-2").hide();
		$("#cb-2pe-dialog-3").hide();
		$("#cb-2pe-dialog-4").hide();
		$("#cb-2pe-front").show();
		$("#cb-2pe-back").hide();
		$("#cb-2pe-front-z1").hide();
		$("#cb-2pe-front-z2").hide();
		$("#cb-2pe-front-c").hide();
		$("#cb-2pe-mon-front").hide();
		$("#igual-2").hide();
		$("#cb-2pe-vaca-1").show();
		$("#cb-2pe-vaca-2").hide();
		$(".btn").hide();	
				
	},
	
	start: function(){
		var dialog0 = document.getElementById("cb-2pe-dialog-0");
		var dialog1 = document.getElementById("cb-2pe-dialog-1");
		var dialog2 = document.getElementById("cb-2pe-dialog-2");
		var dialog3 = document.getElementById("cb-2pe-dialog-3");
		var dialog4 = document.getElementById("cb-2pe-dialog-4");		
		var billFront = document.getElementById("cb-2pe-front");
		var billBack = document.getElementById("cb-2pe-back");
		var billZoomN = document.getElementById("cb-2pe-front-z1");
		var billZoomL = document.getElementById("cb-2pe-front-z2");
		var igual = document.getElementById("igual-2");
		var billFrontComp = document.getElementById("cb-2pe-front-c");
		var monFrontComp = document.getElementById("cb-2pe-mon-front");				
		var vacaPos1 = document.getElementById("cb-2pe-vaca-1");
		var vacaPos2 = document.getElementById("cb-2pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[billFront, dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, billFront],[dialog1, billZoomN], animationElemPair, "", 6000 /*por ahora*/ );	
	  			// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
	  			window.setTimeout(function(){
	  				playTimeLast = dialogManager.startDialog( [dialog1, billZoomN],[dialog2, billZoomL], animationElemPair, "", 6000 /*por ahora*/ );
	  				// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
					
	  				window.setTimeout(function(){
	  					playTimeLast = dialogManager.startDialog( [dialog2, billZoomL],[dialog3, billFrontComp, monFrontComp, igual], animationElemPair, "", 6000 /*por ahora*/ );	  			
	  					// Dialogo 3 - tamaño de fuente.
						fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
						
	  					window.setTimeout(function(){
	  						playTimeLast = dialogManager.startDialog( [dialog3, billFrontComp, monFrontComp, igual],[dialog4, billBack], animationElemPair, "", 6000 /*por ahora*/ );
	  						// Dialogo 4 - tamaño de fuente.
							fillSpanWithCorrectFontSize( $(dialog4).find(".dialog-txt"), null, null, "black" );
							
	  						window.setTimeout(function(){
  								self.suspenderClickHandlers = false;
  								$(".btn").show();
  							},playTimeLast);
  							 	  			
	  					},playTimeLast);
	  					
	  				},playTimeLast);
	  				  			
	  			},playTimeLast); 
	  			
  			},playTimeLast);
  			  			
  		},1000);//Espera 1 segundo para empezar a hablar.
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar el billete, da vuelta - CARA*/
		$("#cb-2pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-2pe-dialog-0").hide();
	  			$("#cb-2pe-back").show();
	  			$("#cb-2pe-dialog-4").show();  				
  			};
		});
		/*Al tocar el billete, da vuelta - CONTRACARA*/
		$("#cb-2pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-2pe-dialog-4").hide();
	  			$("#cb-2pe-front").show();
	  			$("#cb-2pe-dialog-0").show();  				
  			};
		});		
	},
};

var cincoPesosCB = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cb-5pe-dialog-0").hide();
		$("#cb-5pe-dialog-1").hide();
		$("#cb-5pe-dialog-2").hide();
		$("#cb-5pe-dialog-3").hide();
		$("#cb-5pe-front").show();
		$("#cb-5pe-back").hide();
		$("#cb-5pe-front-z1").hide();
		$("#cb-5pe-front-z2").hide();
		$("#cb-5pe-vaca-1").show();
		$("#cb-5pe-vaca-2").hide();
		$(".btn").hide();
				
	},
	
	start: function(){
		var dialog0 = document.getElementById("cb-5pe-dialog-0");
		var dialog1 = document.getElementById("cb-5pe-dialog-1");
		var dialog2 = document.getElementById("cb-5pe-dialog-2");
		var dialog3 = document.getElementById("cb-5pe-dialog-3");				
		var billFront = document.getElementById("cb-5pe-front");
		var billBack = document.getElementById("cb-5pe-back");
		var billZoomN = document.getElementById("cb-5pe-front-z1");
		var billZoomL = document.getElementById("cb-5pe-front-z2");
		var vacaPos1 = document.getElementById("cb-5pe-vaca-1");
		var vacaPos2 = document.getElementById("cb-5pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[billFront, dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, billFront],[dialog1, billZoomN], animationElemPair, "", 6000 /*por ahora*/ );	
	  			// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
	  			
	  			window.setTimeout(function(){
	  				playTimeLast = dialogManager.startDialog( [dialog1, billZoomN],[dialog2, billZoomL], animationElemPair, "", 6000 /*por ahora*/ );
	  				// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
	  					
	  					window.setTimeout(function(){
	  						playTimeLast = dialogManager.startDialog( [dialog2, billZoomL],[dialog3, billBack], animationElemPair, "", 6000 /*por ahora*/ );
	  						// Dialogo 3 - tamaño de fuente.
							fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
							
	  						window.setTimeout(function(){
  								self.suspenderClickHandlers = false;
  								$(".btn").show();
  							},playTimeLast);
  							 	  			
	  					},playTimeLast);
	  				  			
	  			},playTimeLast); 
	  			
  			},playTimeLast);
  			  			
  		},1000);//Espera 1 segundo para empezar a hablar.
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar el billete, da vuelta - CARA*/
		$("#cb-5pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-5pe-dialog-0").hide();
	  			$("#cb-5pe-back").show();
	  			$("#cb-5pe-dialog-3").show();  				
  			};
		});
		/*Al tocar el billete, da vuelta - CONTRACARA*/
		$("#cb-5pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-5pe-dialog-3").hide();
	  			$("#cb-5pe-front").show();
	  			$("#cb-5pe-dialog-0").show();  				
  			};
		});		
	},
};

var diezPesosCB = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cb-10pe-dialog-0").hide();
		$("#cb-10pe-dialog-1").hide();
		$("#cb-10pe-dialog-2").hide();
		$("#cb-10pe-dialog-3").hide();
		$("#cb-10pe-front").show();
		$("#cb-10pe-back").hide();
		$("#cb-10pe-front-z1").hide();
		$("#cb-10pe-front-z2").hide();
		$("#cb-10pe-vaca-1").show();
		$("#cb-10pe-vaca-2").hide();
		$(".btn").hide();		
				
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cb-10pe-dialog-0");
		var dialog1 = document.getElementById("cb-10pe-dialog-1");
		var dialog2 = document.getElementById("cb-10pe-dialog-2");
		var dialog3 = document.getElementById("cb-10pe-dialog-3");				
		var billFront = document.getElementById("cb-10pe-front");
		var billBack = document.getElementById("cb-10pe-back");
		var billZoomN = document.getElementById("cb-10pe-front-z1");
		var billZoomL = document.getElementById("cb-10pe-front-z2");
		var vacaPos1 = document.getElementById("cb-10pe-vaca-1");
		var vacaPos2 = document.getElementById("cb-10pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[billFront, dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, billFront],[dialog1, billZoomN], animationElemPair, "", 6000 /*por ahora*/ );	
	  			// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
	  			window.setTimeout(function(){
	  				playTimeLast = dialogManager.startDialog( [dialog1, billZoomN],[dialog2, billZoomL], animationElemPair, "", 6000 /*por ahora*/ );
	  				// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
					
	  					window.setTimeout(function(){
	  						playTimeLast = dialogManager.startDialog( [dialog2, billZoomL],[dialog3, billBack], animationElemPair, "", 6000 /*por ahora*/ );
	  						// Dialogo 3 - tamaño de fuente.
							fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
							
	  						window.setTimeout(function(){
  								self.suspenderClickHandlers = false;
  								$(".btn").show();
  							},playTimeLast);
  							 	  			
	  					},playTimeLast);
	  				  			
	  			},playTimeLast); 
	  			
  			},playTimeLast);
  			  			
  		},1000);//Espera 1 segundo para empezar a hablar.
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar el billete, da vuelta - CARA*/
		$("#cb-10pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-10pe-dialog-0").hide();
	  			$("#cb-10pe-back").show();
	  			$("#cb-10pe-dialog-3").show();  				
  			};
		});
		/*Al tocar el billete, da vuelta - CONTRACARA*/
		$("#cb-10pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-10pe-dialog-3").hide();
	  			$("#cb-10pe-front").show();
	  			$("#cb-10pe-dialog-0").show();  				
  			};
		});		
	},
};

var veintePesosCB = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cb-20pe-dialog-0").hide();
		$("#cb-20pe-dialog-1").hide();
		$("#cb-20pe-dialog-2").hide();
		$("#cb-20pe-dialog-3").hide();
		$("#cb-20pe-front").show();
		$("#cb-20pe-back").hide();
		$("#cb-20pe-front-z1").hide();
		$("#cb-20pe-front-z2").hide();
		$("#cb-20pe-vaca-1").show();
		$("#cb-20pe-vaca-2").hide();
		$(".btn").hide();		
				
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cb-20pe-dialog-0");
		var dialog1 = document.getElementById("cb-20pe-dialog-1");
		var dialog2 = document.getElementById("cb-20pe-dialog-2");
		var dialog3 = document.getElementById("cb-20pe-dialog-3");				
		var billFront = document.getElementById("cb-20pe-front");
		var billBack = document.getElementById("cb-20pe-back");
		var billZoomN = document.getElementById("cb-20pe-front-z1");
		var billZoomL = document.getElementById("cb-20pe-front-z2");
		var vacaPos1 = document.getElementById("cb-20pe-vaca-1");
		var vacaPos2 = document.getElementById("cb-20pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[billFront, dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
  			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, billFront],[dialog1, billZoomN], animationElemPair, "", 6000 /*por ahora*/ );	
	  			// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
	  			window.setTimeout(function(){
	  				playTimeLast = dialogManager.startDialog( [dialog1, billZoomN],[dialog2, billZoomL], animationElemPair, "", 6000 /*por ahora*/ );
	  				// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
	  					
	  					window.setTimeout(function(){
	  						playTimeLast = dialogManager.startDialog( [dialog2, billZoomL],[dialog3, billBack], animationElemPair, "", 6000 /*por ahora*/ );
	  						// Dialogo 3 - tamaño de fuente.
							fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
					
	  						window.setTimeout(function(){
  								self.suspenderClickHandlers = false;
  								$(".btn").show();
  							},playTimeLast);
  							 	  			
	  					},playTimeLast);
	  				  			
	  			},playTimeLast); 
	  			
  			},playTimeLast);
  			  			
  		},1000);//Espera 1 segundo para empezar a hablar.
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar el billete, da vuelta - CARA*/
		$("#cb-20pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-20pe-dialog-0").hide();
	  			$("#cb-20pe-back").show();
	  			$("#cb-20pe-dialog-3").show();  				
  			};
		});
		/*Al tocar el billete, da vuelta - CONTRACARA*/
		$("#cb-20pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-20pe-dialog-3").hide();
	  			$("#cb-20pe-front").show();
	  			$("#cb-20pe-dialog-0").show();  				
  			};
		});		
	},
};

var cincuentaPesosCB = {

	suspenderClickHandlers :false,
	
	init: function(){
				
		$("#cb-50pe-dialog-0").hide();
		$("#cb-50pe-dialog-1").hide();
		$("#cb-50pe-dialog-2").hide();
		$("#cb-50pe-dialog-3").hide();
		$("#cb-50pe-front").show();
		$("#cb-50pe-back").hide();
		$("#cb-50pe-front-z1").hide();
		$("#cb-50pe-front-z2").hide();
		$("#cb-50pe-vaca-1").show();
		$("#cb-50pe-vaca-2").hide();
		$(".btn").hide();
				
	},
	
	start: function(){
		var dialog0 = document.getElementById("cb-50pe-dialog-0");
		var dialog1 = document.getElementById("cb-50pe-dialog-1");
		var dialog2 = document.getElementById("cb-50pe-dialog-2");
		var dialog3 = document.getElementById("cb-50pe-dialog-3");				
		var billFront = document.getElementById("cb-50pe-front");
		var billBack = document.getElementById("cb-50pe-back");
		var billZoomN = document.getElementById("cb-50pe-front-z1");
		var billZoomL = document.getElementById("cb-50pe-front-z2");
		var vacaPos1 = document.getElementById("cb-50pe-vaca-1");
		var vacaPos2 = document.getElementById("cb-50pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[billFront, dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, billFront],[dialog1, billZoomN], animationElemPair, "", 6000 /*por ahora*/ );	
	  			// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
	  			window.setTimeout(function(){
	  				playTimeLast = dialogManager.startDialog( [dialog1, billZoomN],[dialog2, billZoomL], animationElemPair, "", 6000 /*por ahora*/ );
	  				// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
					
	  					window.setTimeout(function(){
	  						playTimeLast = dialogManager.startDialog( [dialog2, billZoomL],[dialog3, billBack], animationElemPair, "", 6000 /*por ahora*/ );
	  						// Dialogo 3 - tamaño de fuente.
							fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
	  						
	  						window.setTimeout(function(){
  								self.suspenderClickHandlers = false;
  								$(".btn").show();
  							},playTimeLast);
  							 	  			
	  					},playTimeLast);
	  				  			
	  			},playTimeLast); 
	  			
  			},playTimeLast);
  			  			
  		},1000);//Espera 1 segundo para empezar a hablar.		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar el billete, da vuelta - CARA*/
		$("#cb-50pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-50pe-dialog-0").hide();
	  			$("#cb-50pe-back").show();
	  			$("#cb-50pe-dialog-3").show();  				
  			};
		});
		/*Al tocar el billete, da vuelta - CONTRACARA*/
		$("#cb-50pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-50pe-dialog-3").hide();
	  			$("#cb-50pe-front").show();
	  			$("#cb-50pe-dialog-0").show();  				
  			};
		});		
	},
};

var cienPesosCB = {

	suspenderClickHandlers :false,
	
	init: function(){
		
		$("#cb-100pe-dialog-0").hide();
		$("#cb-100pe-dialog-1").hide();
		$("#cb-100pe-dialog-2").hide();
		$("#cb-100pe-dialog-3").hide();
		$("#cb-100pe-dialog-4").hide();
		$("#cb-100pe-front").hide();
		$("#cb-100pe-back").hide();
		$("#cb-100pe-front-z1").hide();
		$("#cb-100pe-front-z2").hide();
		$("#cb-100pe-front-c1").hide();
		$("#cb-100pe-front-c2").hide();
		$("#cb-100pe-front-zc1").hide();
		$("#cb-100pe-front-zc2").hide();
		$("#igual-100").hide();
		$("#cb-100pe-vaca-1").show();
		$("#cb-100pe-vaca-2").hide();
		$(".btn").hide();
				
	},
	
	start: function(){
		
		var dialog0 = document.getElementById("cb-100pe-dialog-0");
		var dialog1 = document.getElementById("cb-100pe-dialog-1");
		var dialog2 = document.getElementById("cb-100pe-dialog-2");
		var dialog3 = document.getElementById("cb-100pe-dialog-3");
		var dialog4 = document.getElementById("cb-100pe-dialog-4");		
		var billFront = document.getElementById("cb-100pe-front");
		var billBack = document.getElementById("cb-100pe-back");
		var billZoomN = document.getElementById("cb-100pe-front-z1");
		var billZoomL = document.getElementById("cb-100pe-front-z2");
		var billFrontComp1 = document.getElementById("cb-100pe-front-c1");
		var billFrontComp2 = document.getElementById("cb-100pe-front-c2");
		var billZoomComp1 = document.getElementById("cb-100pe-front-zc1");
		var billZoomComp2 = document.getElementById("cb-100pe-front-zc2");
		var igual = document.getElementById("igual-100");
		var vacaPos1 = document.getElementById("cb-100pe-vaca-1");
		var vacaPos2 = document.getElementById("cb-100pe-vaca-2");
		
		var animationElemPair = [vacaPos1, vacaPos2];
		
		var playTimeLast;
		self.suspenderClickHandlers = true;
		window.setTimeout(function(){
  			playTimeLast = dialogManager.startDialog( [],[billFront, dialog0], animationElemPair, "", 6000 /*por ahora*/ );
  			// Dialogo 0 - tamaño de fuente.
			fillSpanWithCorrectFontSize( $(dialog0).find(".dialog-txt"), null, null, "black" );
			
  			window.setTimeout(function(){
  				playTimeLast = dialogManager.startDialog( [dialog0, billFront],[dialog1, billZoomN], animationElemPair, "", 6000 /*por ahora*/ );	
	  			// Dialogo 1 - tamaño de fuente.
				fillSpanWithCorrectFontSize( $(dialog1).find(".dialog-txt"), null, null, "black" );
				
	  			window.setTimeout(function(){
	  				playTimeLast = dialogManager.startDialog( [dialog1, billZoomN],[dialog2, billZoomL], animationElemPair, "", 6000 /*por ahora*/ );
	  				// Dialogo 2 - tamaño de fuente.
					fillSpanWithCorrectFontSize( $(dialog2).find(".dialog-txt"), null, null, "black" );
					
	  				window.setTimeout(function(){
	  					playTimeLast = dialogManager.startDialog( [dialog2, billZoomL],[dialog3, billFrontComp1, billFrontComp2, igual], animationElemPair, "", 4000 /*por ahora*/ );	  			
	  					// Dialogo 3 - tamaño de fuente.
						fillSpanWithCorrectFontSize( $(dialog3).find(".dialog-txt"), null, null, "black" );
						
	  					window.setTimeout(function(){
	  						playTimeLast = dialogManager.startDialog( [billFrontComp2, billFrontComp1],[billZoomComp1, billZoomComp2], animationElemPair, "", 4000 /*por ahora*/ );
	  						
							
		  					window.setTimeout(function(){
		  						playTimeLast = dialogManager.startDialog( [dialog3, billZoomComp1, billZoomComp2, igual],[dialog4, billBack], animationElemPair, "", 6000 /*por ahora*/ );
		  						// Dialogo 4 - tamaño de fuente.
								fillSpanWithCorrectFontSize( $(dialog4).find(".dialog-txt"), null, null, "black" );
								
		  						window.setTimeout(function(){
	  								self.suspenderClickHandlers = false;
	  								$(".btn").show();
	  							},playTimeLast);
	  							 	  			
		  					},playTimeLast);

	  					},playTimeLast);
	  					
	  				},playTimeLast);
	  				  			
	  			},playTimeLast); 
	  			
  			},playTimeLast);
  			  			
  		},1000);//Espera 1 segundo para empezar a hablar.
		
	},
	
	//Todos los Bindings de eventos que se hacen una vez en la página.
	setUp: function(){
		/*Al tocar el billete, da vuelta - CARA*/
		$("#cb-100pe-front").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-100pe-dialog-0").hide();
	  			$("#cb-100pe-back").show();
	  			$("#cb-100pe-dialog-4").show();  				
  			};
		});
		/*Al tocar el billete, da vuelta - CONTRACARA*/
		$("#cb-100pe-back").on("click",function(){
  			if(!self.suspenderClickHandlers){
	  			$(this).hide();
	  			$("#cb-100pe-dialog-4").hide();
	  			$("#cb-100pe-front").show();
	  			$("#cb-100pe-dialog-0").show();  				
  			};
		});		
	},
};

var conocerDinero = {
	
	datos : [],
	pageLevels : {
		"index-conocer-d": indexCD,
		"index-conocer-m": indexCM,
		"index-conocer-b": indexCB,
		"conocer-m-2pe" : dosPesosCM,
		"conocer-m-1pe" : unPesoCM,
		"conocer-m-50ctv" : ctvs50M,
		"conocer-m-25ctv" : ctvs25M,
		"conocer-m-10ctv" : ctvs10M,
		"conocer-m-5ctv" : ctvs5M,
		"conocer-b-2pe" : dosPesosCB,
		"conocer-b-5pe" : cincoPesosCB,
		"conocer-b-10pe" : diezPesosCB,
		"conocer-b-20pe" : veintePesosCB,
		"conocer-b-50pe" : cincuentaPesosCB,
		"conocer-b-100pe" : cienPesosCB			
	},
	
	initialize: function(){
		this.setUpGamePages();
		
	},
	
	setUpGamePages: function(){
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainerbeforeshow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = conocerDinero.pageLevels[idPage];
			
			if(levelToShowObject){
				levelToShowObject.init();
			}			
		});	
		
		/*Setea los bindings para inicializar el estado al mostrar cada página.*/
		$(document).on("pagecontainershow", function(event, ui) {
			var idPage = ui.toPage[0].id;
			var levelToShowObject = conocerDinero.pageLevels[idPage];
			
			if(levelToShowObject && levelToShowObject.start ){
				levelToShowObject.start();
			}			
		});	
			
		/*Set Up de todas las páginas*/
		$.each(conocerDinero.pageLevels, function(key, value){
			if(value){				
				value.setUp();
			};
		});
	}
};
