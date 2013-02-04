( function ( doc ) {
	// var metallica = Metallica ();
	// var ironMaiden = IronMaiden ();
	var blindGuardian = new BlindGuardian ();



	var domMetallica = doc.getElementsByClassName( 'metallica' );
	var domIronMaiden = doc.getElementsByClassName( 'iron-maiden' );
	var domBlindGuardian = doc.getElementsByClassName( 'blind-guardian' );

	var bands = [
		// {
		// 	domElement: domMetallica,
		// 	instance: metallica
		// },
		// {
		// 	domElement: domIronMaiden,
		// 	instance: ironMaiden
		// },
		{
			domElement: domBlindGuardian,
			instance: blindGuardian
		}
	];

	for ( band in bands ) {
		console.log( bands[ band ].instance );
		bands[ band ].domElement[ 0 ].innerHTML = bands[ band ].instance.name + ' ' + bands[ band ].instance.genre;
	}

} ) ( document );