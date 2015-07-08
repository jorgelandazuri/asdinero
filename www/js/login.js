var juegos = {

	contarDinero: function(){
		return "contarDinero";
	},
	
	compraExacta: function(){
		return "compraExacta";
	},
	
	compraConVuelto: function(){
		return "compraConVuelto";
	}

};

var loginPageComposer = {
	
	setUpMenuButtonsAction: function(){
		
		/*Acción del botón de "Seleccionar Jugador" Esconde ambos botones y muestra el menu para ingresar jugador*/			
			$("#jugar-sj").bind( "click", function(event, ui) {
  				$(this).hide();
  				$("#jugar-inv").hide();  				  				  				
  				if( $("#select-jg option").size() <= 1){ 
  					$("#jugar-sj-menu .ui-select").hide();
  					$("#jugar-jn").css('top','40%');
  					$("#input-jn").attr("placeholder","INGRESA TU NOMBRE");  					
  				}else{
  					$("#jugar-sj-menu .ui-select").show();
  					$("#jugar-jn").css('top','50%');
  					$("#input-jn").attr("placeholder","SINO, INGRESA TU NOMBRE");
  				}
  				$("#jugar-sj-menu").show();
  				$("#jugar-sj-back").show();  				
			});
			
		/*Acción del botón de "Jugar como invitado"
		  Setea el jugador usado como invitado y va al menú de selección*/
			$("#jugar-inv").bind( "click", function(event, ui) {
  				var nomJugElegido = "INVITADO";
  				usrManager.setJugadorActivo(nomJugElegido);
  				$.mobile.navigate( "#seleccion-juego", { transition : "none" });  				  				
			});
			
		/*Acción del botón de "Volver" del menú de selección de jugador
		  Setea el jugador usado como invitado y va al menú de selección*/
			$("#jugar-sj-back").bind( "click", function(event, ui) {
  				$("#jugar-sj-menu").hide();
  				$("#jugar-sj-back").hide();
  				$("#jugar-sj").show();
  				$("#jugar-inv").show();  				  				
			});
			
		/*Acción del select de jugadores guardados al elegir uno.
		  Setea el jugador elegido y va al menú de selección*/
			$("#select-jg").bind( "change", function(event, ui) {
  				var nomJugElegido = $("#select-jg option:selected").val();
  				usrManager.setJugadorActivo(nomJugElegido);
				$(this).data('removedPlaceHolder', true); 
  				window.setTimeout(function(){
  					$.mobile.navigate( "#seleccion-juego", { transition : "none" });
  				},1000); //Para dejar ver al usuario el jugador elegido.
			});
			
		/*Acción del input y botón de jugador nuevo al ingresar uno.
		  Crea y Setea el jugador ingresado y va al menú de selección*/
			$("#button-jn").bind( "click", function(event, ui) {
  				var nomJugCreado = $("#input-jn").val();
  				usrManager.crearJugador(nomJugCreado);
  				usrManager.setJugadorActivo(nomJugCreado);
  				$.mobile.navigate( "#seleccion-juego", { transition : "none" });  				  				
			});			
		}
};

var usrManager = {

		getFile: function(){
			return "usuarios";
		},
		
		init: function(){
	    	
	    	var usr = this.getJugadores(this.getFile());
			
			if (usr == null){
				usr = {};
				usr.jugadores = new Array();
			}
	    	this.setSelectOpts(usr.jugadores);
			
	    },
	    
	    getJugadores: function (archivo){
			var jugadores;
			
			jugadores = JSON.parse(localStorage.getItem(archivo));
									
			return jugadores;
		},
		
		getJugador: function (archivo, nombre){
			var usr = this.getJugadores(archivo);
			var jugadorEncontrado = []; //vacío si no encontrado
			
			for (var i = 0; i < usr.jugadores.length; i++){
				if (jugadores[i].nombre === nombre){
					jugadorEncontrado = jugadores[i];
				}
			}
			
			return jugadorEncontrado;
		},

		saveJugador: function(usuarios, jugador){//(jugador)
				
			var reemplazo = false;
			
			for (index = 0; index < usuarios.jugadores.length; index++) {
				if (jugador.nombre == usuarios.jugadores[index].nombre){
					usuarios.jugadores[index] = jugador;
					reemplazo = true;
					break;
				}
			}		
			
			if (!reemplazo)
				usuarios.jugadores.push(jugador);
			
			localStorage.removeItem(this.getFile());
			localStorage.setItem(this.getFile(), JSON.stringify(usuarios));
			
		},
		
		setSelectOpts: function(jugadores){
			var $jugSelect = $("#select-jg");
			var index;
			
			for (index = 0; index < jugadores.length; index++) {
    			$jugSelect.append('<option value="'+jugadores[index].nombre+'">'+jugadores[index].nombre+'</option>');
			}
						
			$jugSelect.selectmenu();
			$jugSelect.selectmenu('refresh', true);
		},
		
		setJugadorActivo: function(nombreJugador){
			var usr = this.getJugadores(this.getFile());
			localStorage.removeItem(this.getFile());
			
			if (usr == null){
				usr = {};
				usr.jugadores = new Array();
			}
			
			usr.jugadorActivo = nombreJugador;
			
			localStorage.setItem(this.getFile(), JSON.stringify(usr));
		},
		
		crearJugador: function(nomJugCreado, usuarioInicial){
			
			var jugador = {};
			
			var usr = this.getJugadores(this.getFile());
			
			if (usr == null){
				usr = {};
				usr.jugadorActivo = nomJugCreado;
				usr.jugadores = new Array();
			}
				
			jugador.nombre = nomJugCreado; 
			jugador.foto = "/PATH/photoNeutral.png";
			jugador.juegosGanados = new Array();
			jugador.juegosGanados.push({juego: juegos.contarDinero(), nivel: "0"});
			jugador.juegosGanados.push({juego: juegos.compraExacta(), nivel: "0"});
			jugador.juegosGanados.push({juego: juegos.compraConVuelto(), nivel: "0"});
						
			this.saveJugador(usr, jugador);			
			
		},
				
		//Guarda el ultimo nivel ganado por el jugador activo. Si el jugador activo es el invitado no guarda nada
		//Llamado correcto a la funcion usrManager.saveNivelGanado(juegos.contarDinero(), 1)
		saveNivelGanado: function(juego, idNivel){
		
			var usrs = this.getJugadores(this.getFile());
			var jugador;
			var index;
			
			if (usrs.jugadorActivo == 'INVITADO') return;
			
			for (index = 0; index < usrs.jugadores.length; index++) {
				if (usrs.jugadorActivo == usrs.jugadores[index].nombre){
					jugador = usrs.jugadores[index];
				}
			}	
			
			for (index = 0; index < jugador.juegosGanados.length; index++){
				if (jugador.juegosGanados.juego == juego) jugador.juegosGanados.nivel = idNivel;				
			}
						
			this.saveJugador(usrs, jugador);
		},
		
		//Obtiene el ultimo nivel ganado por el jugador activo. Si el jugador activo es el invitado o el jugador recien fue creado, entonces el nivel es 0.
		//Llamado correcto a la funcion usrManager.getUltimoNivelGanado(juegos.contarDinero())
		getUltimoNivelGanado: function(juego){
			var usrs = this.getJugadores(this.getFile());
			var jugador;
			var index;
			
			if (usrs.jugadorActivo == 'INVITADO') return 0;
			
			for (index = 0; index < usrs.jugadores.length; index++) {
				if (usrs.jugadorActivo == usrs.jugadores[index].nombre){
					jugador = usrs.jugadores[index];
				}
			}	
			
			for (index = 0; index < jugador.juegosGanados.length; index++){
				if (jugador.juegosGanados[index].juego == juego) return jugador.juegosGanados[index].nivel;				
			}
		},
		
};