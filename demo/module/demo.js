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

	return instance;

} ) ( MetalMusic );


var PowerMetal = ( function ( MetalMusic ) {

	var instance = {};

	for ( key in MetalMusic ) {
		if ( MetalMusic.hasOwnProperty( key ) ) {
			instance[ key ] = MetalMusic[ key ];
		}
	}

	instance.genre = 'Power Metal';
	instance.vocal = 'Girlish';
	instance.text = 'Virgins and dragons';
	instance.mainInstruments = [
		'Guitar',
		'Bass guitar',
		'Drums',
		'Keyboard'
	];

	return instance;

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

	return instance;

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

	return instance;

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

	return instance;

} ) ( ThrashMetal );

var IronMaiden = ( function ( HeavyMetal ) {


	var instance = {}

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

	return instance;

} ) ( HeavyMetal );

var BlindGuardian = ( function ( PowerMetal ) {

	var instance = {};

	for ( key in PowerMetal ) {
		if ( PowerMetal.hasOwnProperty( key ) ) {
			instance[ key ] = PowerMetal[ key ];
		}
	}

	instance.name = 'Blind Guardian'
	instance.band = [
		'Hansi Kursch',
		'Andre Olbrich',
		'Marcus Siepen',
		'Frederick Ehmke'
	];
	instance.albumNumber = 10;
	instance.formationDate = '1984';

	return instance;

} ) ( PowerMetal );