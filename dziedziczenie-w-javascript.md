# Dziedziczenie w JavaScript

Zaczęło się od tego, że zostaliśmy zmuszeni do poznania i nauczenia się tworu jakim jest CoffeeScript. Napotkaliśmy szereg problemów podczas pisania w tym zacnym języku.

Złotą zasadą CoffeeScriptu jest 
>"It's just JavaScript"
Zaczęliśmy się zastanawiać co takiego daje nam CoffeeScript, a czego nie ma JavaScript. Po wielu dyskusjach i testach okazało się, że jedyną zaletą tego "little language" jest lambda.

```coffeescript

() ->

```
Szalę przechyliło definitywnie na korzyść JavaScript dziedziczenie obiektów.

## Moduł w JavaScript i jego dziedziczenie
```javascript

// moduł bazowy
var Module = ( function () {
	var moduleInstance = {};
		privateVariable = 1;
	
	function privateMethod() {
		// ...
	}
	
	moduleInstance.moduleProperty = 1;
	moduleInstance.moduleMethod = function () {
		// ...
	};
	
	return moduleInstance;
} () );

// moduł dziedziczący
var ExtendingModule = ( function ( parentModule ) {
	var moduleInstance = {},
		key;
	
	for ( key in parentModule ) {
		if ( parentModule.hasOwnProperty( key ) ) {
			moduleInstance[ key ] = parentModule[ key ];
		}
	}
	
	var super_moduleMethod = parentModule.moduleMethod;
	moduleInstance.moduleMethod = function () {
		// nadpisanie metody klonowanej
		// dostep do dziedziczonej metody poprzez super_moduleMethod
	};
	
	return moduleInstance;
} ( Module ) );

```

## Dziedziczenie za pomocą `prototype`

```javascript

function MyBase(){
	this.nameOfClass = "MyBase";
};

// poniższa linijke może być, ale nie musi
/* MyBase.prototype = {}; */

// Metoda w MyBase 
MyBase.prototype.printClassName = function(c){
   // ...
};

// Klasa dziedzicząca po MyBase.
function Extending(){
	MyBase.call(this);
	this.nameOfClass = "Extending";
};

Extending.prototype = new MyBase();

// poniższa linijka nie jest wymagana
/* MoreExtending.prototype.constructor = Extending; */
// chociaż z niewiadomych nam powodów wymagana jest na certyfikacie MCTS 70-480

// Przeciążam metode z MyBase, i w jej wnętrzu używam metody MyBase z klasy bazowej
Extending.prototype.printClassName = function ( c ) {
	MyBase.prototype.printClassName.call( this, c );
};

// Klasa dziedzicząca po Extending
function MoreExtending () {
  Extending.call( this );
  this.nameOfClass = "MoreExtending";
};

MoreExtending.prototype = new Extending();
MoreExtending.prototype.printClassName = function( c ) {
	Extending.prototype.printClassName.call( this, c );
};


```

## Podsumowanie
Jak widać dziedziczenie w JavaScript istnieje i ma sie bardzo dobrze. Nie potrzebuje też niewiadomo jak dużej ilości kodu, aby zostalo zaimplementowane.     