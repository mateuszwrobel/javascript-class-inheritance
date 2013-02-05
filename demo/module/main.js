( function ( doc ) {
	var metallica = Metallica;
	var ironMaiden = IronMaiden;
	var blindGuardian = BlindGuardian;



	var domMetallica = doc.getElementsByClassName( 'metallica' );
	var domIronMaiden = doc.getElementsByClassName( 'iron-maiden' );
	var domBlindGuardian = doc.getElementsByClassName( 'blind-guardian' );

	var bands = [
		{
			domElement: domMetallica,
			instance: metallica
		},
		{
			domElement: domIronMaiden,
			instance: ironMaiden
		},
		{
			domElement: domBlindGuardian,
			instance: blindGuardian
		}
	];

	for ( band in bands ) {
		bands[ band ].domElement[ 0 ].innerHTML = bands[ band ].instance.name + ' ' + bands[ band ].instance.genre;
		bands[ band ].domElement[ 0 ].myIndex = band;
		bands[ band ].domElement[ 0 ].addEventListener('click', function ( event ) {
			event.preventDefault();
			var myIndex = this.myIndex;

			var i = 0,
				lenght = bands[ myIndex ].instance.band.length,
				message = '';
			for (; i < lenght; i++ ) {
				message += bands[ myIndex ].instance.band[ i ] + "\n";
			}

			alert( message );
		}, false );
	}

} ) ( document );