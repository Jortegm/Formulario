window.addEventListener("load", function () {
	//ponemos por defecto que el foco este en input de DNI
	document.getElementById("dni").focus();

	//cuando el usuario presione una tecla solo permitirá que introduzca letras
    document.getElementById("nombre").addEventListener("keypress",soloLetras);
	//-------------------------------------------------------------------------------------
	//cuando el usuario presione una tecla solo permitirá que introduzca letras
    document.getElementById("apellidos").addEventListener("keypress",soloLetras);
		
	//---------------------------------------------------------------------------------------
	//cuando el usuario presione una tecla solo permitirá que introduzca numeros
	document.getElementById("cp").addEventListener("keypress",soloNumeros);
	document.getElementById("cp").addEventListener("keypress",caracteresMaximosCP);
    //---------------------------------------------------------------------------------------
	//cuando el usuario presione una tecla solo permitirá que introduzca numeros
	document.getElementById("telefono").addEventListener("keypress",soloNumeros);
    
    //-------------------------------------------------------------------------------------------
	// caracteres maximos para text Area
	document.getElementById("area").addEventListener("keypress",caracteresMaximosTexArea);
	//--------------------------------------------------------------------------------------------
	
	//creamos variables para enviar el formulario y para Limpiarlo
    var botonEnviar, botonLimpiar;
	//creamos un evento para que no envie el formulario
	document.getElementById("submit").addEventListener("click", function(event){
		event.preventDefault();
		});
	//guardamos el nombre del boton, no el id: con el nombre del formulario.
    botonEnviar = document.Formulario.enviar;
    botonEnviar.onclick = validacionDatos;
	//cogemos el id del boton limpiar
    botonLimpiar = document.getElementById("limpiar"); //cogemos el id del boton limpiar
    botonLimpiar.onclick = limpiar;
});
var cont=0;
/**
 * Funcion que solo permite escribir Letras en un input
 * @param {object} event [[tecla pulsada por el usuario]]
 */
function soloLetras(event){
             key = event.keyCode || event.which;
		     tecla = String.fromCharCode(key).toLowerCase();
            letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
            especiales = [8, 37, 39, 46];

            tecla_especial = false
            for(var i in especiales) {
            if(key == especiales[i]) {
                tecla_especial = true;
                document.getElementById("apellidos").style.borderColor="green";
                break;
            }
        }
	if(letras.indexOf(tecla) == -1 && !tecla_especial){
            event.preventDefault();
            }
}

/**
 * Funcion que solo permite introducir numeros
 * @param {object} event [[teclas Pulsada por el usuario]]
 */
function soloNumeros(event){
            key = event.keyCode || event.which;
            tecla = String.fromCharCode(key);
            numeros = "0123456789";
            especiales = [8, 37, 39, 46];

            tecla_especial = false
            for(var i in especiales) {
            if(key == especiales[i]) {
                tecla_especial = true;
                document.getElementById("cp").style.borderColor="green";
                break;
            }
        }

        if(numeros.indexOf(tecla) == -1 && !tecla_especial){
             event.preventDefault();

         }
}


function caracteresMaximosCP (event){
	cp = document.getElementById("cp").value;
	caracteres = 5;
	        // obtenemos la tecla pulsada
            var unicode=event.keyCode? event.keyCode : event.charCode;
 
            // Permitimos las siguientes teclas:
            // 8 backspace
            // 46 suprimir
            // 13 enter
            // 9 tabulador
            // 37 izquierda
            // 39 derecha
            // 38 subir
            // 40 bajar
            if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
                return true;
 
            // Si ha superado el limite de caracteres devolvemos false
            if(cp.length>=caracteres){
 				event.preventDefault();
			}
            return true;
}

function caracteresMaximosTexArea (event){
	area = document.getElementById("area").value;
	caracteres = 140;
	        // obtenemos la tecla pulsada
            var unicode=event.keyCode? event.keyCode : event.charCode;
 
            // Permitimos las siguientes teclas:
            // 8 backspace
            // 46 suprimir
            // 13 enter
            // 9 tabulador
            // 37 izquierda
            // 39 derecha
            // 38 subir
            // 40 bajar
            if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
                return true;
 
            // Si ha superado el limite de caracteres devolvemos false
            if(area.length>=caracteres){
 				event.preventDefault();
			}else{
				cont++;
				document.getElementById("Contador").innerHTML= cont;
			}	
            return true;
}


//**********************************************************************************************************************************************
//variables para guardar el valor en los input y sus expresiones regulares
var dni, nombre, apellidos, cp, telefono, fecha, curriculo, formulario, area,  expRegNombre, expRegDni, expRegCp, expRegTlf, expRegPrefijo, expRegFecha, verificar;
//**********************************************************************************************************************************************
//variable para poder comprobar el DNI;
var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T'];
//***********************************************************************************************************************************************
//expresiones regulares de los distintos campos que se muestran.
	expRegDni = /^\d{7,8}[a-zA-Z]$/;
	expRegNombre = /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/; //expresion regular que valida de a -z incluyendo mayusculas, con acento en las vocales y espacios en blanco.TAmbien vale para el Apellido
//expRegEmail = /^[\w-\-]+@([\w-]+\.)+[\w-]{2,4}$/; verifica el email
    expRegCp = /(^([0-9]{5,5})|^)$/;
	expRegTlf = /^\d{9}$/;
    expRegPrefijo = /^\+\d{2,3}\s\d{9}$/;
    /*expRegFecha = (0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d;*/
//***********************************************************************************************************************************************




/**
 * Funcion que valida todos los valores dentro de los input.
 * @returns {[[Type]]} [[Description]]
 */
function validacionDatos() {
	verificar = true;
//pasar a una variable los id de los campos de los formularios
    var dni, nombre, apellidos, cp, telefono, fecha, curriculo;
	formulario = document.getElementById("formulario");
	dni = document.getElementById("dni");
    nombre = document.getElementById("nombre");
	apellidos = document.getElementById("apellidos");
    cp = document.getElementById("cp");
	telefono  = document.getElementById("telefono");
    fecha = document.getElementById("fecha");
	area = document.getElementById("area");


//Validacion del campo dni
    if (!dni.value) { //al negar el valor de dni, entoces esta vacio
        document.getElementById("errorDNI").innerHTML = "Introduce el DNI";
        dni.style.borderColor = "red";
		dni.focus();
        verificar = false;
    } else if (!expRegDni.test(dni.value)) {
        document.getElementById("errorDNI").innerHTML = "Introduce el DNI";
        dni.style.borderColor = "red";
		dni.focus();
        verificar = false;
    } else if (dni.value.charAt(8).toUpperCase() !== letras[(dni.value.substring(0, 8)) % 23]) {
        document.getElementById("errorDNI").innerHTML = "Introduce el DNI";
        dni.style.borderColor = "red";
		dni.focus();
        verificar = false;
    } else {
        dni.style.borderColor = "green";
        document.getElementById("errorDNI").innerHTML = " ";
    }
//-----------------------------------------------------------------------------------------
//validacion del campo nombre;
    if (!nombre.value) {
		document.getElementById("errorNombre").innerHTML = "Introduce el Nombre";
		nombre.style.borderColor = "red";
		nombre.focus();
		verificar = false;
	} else if (!expRegNombre.exec(nombre.value)) {

		alert("El Campo " + nombre.id + " solo puedes introducir letras y espacion en Blanco");
        nombre.style.borderColor = "red";
    } else {
        nombre.style.borderColor = "green";
        document.getElementById("errorNombre").innerHTML = " ";
    }
//-------------------------------------------------------------------------------------------
//validacion del campo apellidos
    if (!apellidos.value) {
        document.getElementById("errorApellido").innerHTML = "Introduce los Apellidos";
		apellidos.style.borderColor = "red";
		apellidos.focus();
		verificar = false;
    } else if (!expRegNombre.exec(apellidos.value)) {
		alert("El Campo " + apellidos.id + " solo puedes introducir letras y espacion en Blanco");
    } else {
        apellidos.style.borderColor = "green";
        document.getElementById("errorApellido").innerHTML = " ";
    }
//--------------------------------------------------------------------------------------------
//validacion del campo Codigo Postal
    if (!cp.value) {
		document.getElementById("errorCodigo").innerHTML = "Introduce el Codigo Postal";
        cp.style.borderColor = "red";
		cp.focus();
		verificar = false;
    } else if (!expRegCp.exec(cp.value)) {
        document.getElementById("errorCodigo").innerHTML = "Introduce el Codigo Postal";
        cp.style.borderColor = "red";
		cp.focus();
		verificar = false;
    } else {
        cp.style.borderColor ="green";
        document.getElementById("errorCodigo").innerHTML = " ";

    }
 //-------------------------------------------------------------------------------------------
//validacion del campo Telefono
    if (!telefono.value) {
		document.getElementById("errorTelefono").innerHTML = "Introduce el Telefono";
		telefono.style.borderColor = "red";
		telefono.focus();
		verificar = false;
    } else if (!expRegTlf.exec(telefono.value)) {
        document.getElementById("errorTelefono").innerHTML = "Introduce el Telefono";
		telefono.style.borderColor = "red";
		telefono.focus();
		verificar = false;
    } else{
        telefono.style.borderColor ="green";
        document.getElementById("errorTelefono").innerHTML = " ";
    }
 //--------------------------------------------------------------------------------------------
//validacion del campo fecha
    if (!fecha.value) {
		document.getElementById("errorFecha").innerHTML = "Introduce la fecha Correctamente";
        fecha.style.borderColor ="red";
		fecha.focus();
		verificar = false;
    } else {
        fecha.style.borderColor ="green";
        document.getElementById("errorFecha").innerHTML = " ";
    }
//-----------------------------------------------------------------------------------------------
//validacion campo TextAre => Breve Curriculo;
    if (!area.value) {
		document.getElementById("errorArea").innerHTML = "Debes introducir un breve resumen de tu vida laboral";
		area.style.borderColor = "red";
		area.focus();
		verificar = false;
	} else {
        area.style.borderColor="green";
        document.getElementById("errorArea").innerHTML = " ";
    }

	if (verificar == true) {
		document.getElementById("validacion").innerHTML = "FORMULARIO VALIDO";
		document.getElementById("validacion").style.color = "green";
	} else {
		dni.focus();
	}

}
//******************************************************************************************************


/**
 * Funcion para limpiar el formulario cuando no sirvan los datos introducidos por el usuario
 */
function limpiar() {
    alert("Limpiando Formulario ");
    document.getElementById('formulario').reset();

}

