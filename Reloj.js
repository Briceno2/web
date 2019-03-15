(function(){
	var actializarHora = function(){
		var fecha = new Date(),
		Horas = fecha.getHours(),
		ampn,
		minutos = fecha.getMinutes(),
		diaSemana = fecha.getDay(),
		dia = fecha.getDate(),
		mes = fecha.getMonth(),
		year = fecha.getFullYear();

		var pHoras = document.getElementById('Horas')
			pAMPM = document.getElementById('ampm')
			pMinutos = document.getElementById('minutos')
			pSegundos = document.getElementById('segundos')
			pDiaSemana = document.getElementById('diaSemana')
			pDia = document.getElementById('dia')
			pMes = document.getElementById('mes')
			pYear = document.getElementById('year')

		var Semana = ['Domingo', 'Lunes', 'Martes', 'Mi ercoles', 'Jueves', 'Viernes', 'Sabado', ]
		pDiaSemana.textContent = semana[diaSemana];
	};
	actializarHora();
}())