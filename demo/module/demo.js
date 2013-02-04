var MetalMusic = ( function () {

	var instance = {};

	instance = {
		genre: '',
		vocal: '',
		text: '',
		mainInstruments: [],
		getInstruments: function () {
			return mainInstruments;
		}
	}

	return instance;
} ) ();


var HeavyMetal = ( function ( MetalMusic ) {

	var instance = {};

	for ( key in MetalMusic ) {
		if ( MetalMusic.hasOwnProperty( key ) ) {
			instance[ key ] = MetalMusic[ key ];
		}
	}

	instance = {
		genre: 'Heavy Metal',
		vocal: 'Manly',
		text: 'Universal',
		mainInstruments: [
			'Guitar',
			'Bass guitar',
			'Drums'
		]
	}


} ) ( MetalMusic );


var PowerMetal = ( function ( MetalMusic ) {

	var PowerMetal = function () {
		for ( key in MetalMusic ) {
			if ( MetalMusic.hasOwnProperty( key ) ) {
				this[ key ] = MetalMusic[ key ];
			}
		}

		this.genre = 'Power Metal';
		this.vocal = 'Girlish';
		this.text = 'Virgins and dragons';
		this.mainInstruments = [
			'Guitar',
			'Bass guitar',
			'Drums',
			'Keyboard'
		];
	}

	return PowerMetal;

} ) ( MetalMusic );


var ThrashMetal = ( function ( MetalMusic ) {

	var instance = {};

	for ( key in MetalMusic ) {
		if ( MetalMusic.hasOwnProperty( key ) ) {
			instance[ key ] = MetalMusic[ key ];
		}
	}

	instance = {
		genre: 'Thrash Metal',
		vocal: 'Aggressive',
		text: 'Brutal and aggressive',
		mainInstruments: [
			'Guitar',
			'Bass guitar',
			'Drums and drums',
		]
	};

} ) ( MetalMusic );


var DeathMetal = ( function ( MetalMusic ) {

	var instance = {};

	for ( key in MetalMusic ) {
		if ( MetalMusic.hasOwnProperty( key ) ) {
			instance[ key ] = MetalMusic[ key ];
		}
	}

	instance = {
		genre: 'Death Metal',
		vocal: 'Growl',
		text: 'Death and religion',
		mainInstruments: [
			'Guitar',
			'Bass guitar',
			'Drums',
		]
	};

} ) ( MetalMusic );


var Metallica = ( function ( ThrashMetal ) {

	var instance = {};

	for ( key in ThrashMetal ) {
		if ( ThrashMetal.hasOwnProperty( key ) ) {
			instance[ key ] = ThrashMetal[ key ];
		}
	}

	instance.name = 'Metallica';
	instance.band = [
		'James Hetfield',
		'Lars Urlich',
		'Kirk Hammett',
		'Robert Trujillo'
	];
	instance.albumNumber = 11;
	instance.formationDate = '1981.10.28';

} ) ( ThrashMetal );

var IronMaiden = ( function ( HeavyMetal ) {

	var instance = {};

	for ( key in HeavyMetal ) {
		if ( HeavyMetal.hasOwnProperty( key ) ) {
			instance[ key ] = HeavyMetal[ key ];
		}
	}

	instance.name = 'Iron Maiden'
	instance.band = [
		'Bruce Dickinson',
		'Janick Gers',
		'Steve Harris',
		'Nicko McBrain',
		'Dave Murray',
		'Adrian Smith'
	];
	instance.albumNumber = 15;
	instance.formationDate = '1975.12.25';

} ) ( HeavyMetal );

var BlindGuardian = ( function ( PowerMetal ) {

	PowerMetal = new PowerMetal();
	var BlindGuardian = function () {
		for ( key in PowerMetal ) {
			if ( PowerMetal.hasOwnProperty( key ) ) {
				this[ key ] = PowerMetal[ key ];
			}
		}

		this.name = 'Blind Guardian'
		this.band = [
			'Hansi Kursch',
			'Andre Olbrich',
			'Marcus Siepen',
			'Frederick Ehmke'
		];
		this.albumNumber = 10;
		this.formationDate = '1984';
	}



	return BlindGuardian;

} ) ( PowerMetal );