// Une fois la fen�tre du navigateur charg�e, initialise PhoneGap
window.addEventListener('load', function(){
	document.addEventListener("deviceready", onDeviceReady, false);
}, false);

// Cette m�thode est appel�e une fois que PhoneGap est charg�
function onDeviceReady() {            	
	document.addEventListener("offline", onOffline, false);
	document.addEventListener("online", onOnline, false);
	var boutonTeste = $('#btnTeste');
	boutonTeste.click(function(){
		var states = {};
		states[Connection.UNKNOWN] = 'Connexion inconnue';
		states[Connection.ETHERNET] = 'Connexion Ethernet';
		states[Connection.WIFI] = 'Connexion WiFi';
		states[Connection.CELL_2G] = 'Connexion mobile 2G';
		states[Connection.CELL_3G] = 'Connexion mobile 3G';
		states[Connection.CELL_4G] = 'Connexion mobile 4G';
		states[Connection.NONE] = 'Pas de connexion r�seau';
		alert ('Type de connexion: ' + states [navigator.network.connection.type]);
	});
	var offline = $('#offline');
	var online = $('#online');
	online.hide();
	offline.hide();		
}

// Cette m�thode est appel�e lorsque le terminal se d�connecte
function onOffline() {
	var offline = $('#offline');
	var online = $('#online');
	offline.show();
	online.hide();	    	    
}

// Cette m�thode est appel�e lorsque le terminal se connecte
function onOnline() {
	var online = $('#online');
	var offline = $('#offline');
	online.show();
	offline.hide(); 
}
