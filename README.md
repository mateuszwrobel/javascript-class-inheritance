Orzecha i Wróbki guidotutorial do Javascruptu PART_1. Pop&*$ne dziedziczenie prototypowe.
=========================================================================================

Owoc moich i Mateusza rozważań nad pop****ną naturą javascriptu nie może pójść na marne.

W pliku html w repozytorium znajduje sie strona www która wystarczy odpalic w przegladarce i podejrzec output na consoli, zeby przekonac sie ze jest tak, jak mowimy.
Jednak wielu ludzi uzywa JS nie rozumiejac jego prototypowej architektury (tak jak my do niedawna), wiec zamieszczamy szybka solucje dla programistow "normanych" jezykow zmuszonych do uzycia JS i dziedziczenia prototypowego.



Szybki guide dla ludzi piszacych w innych jezykach
==================================================
i muszacych cos naskrobac w JS
==================================================

Java:
=====
```java
class A {
	public string className;

	public A(){
		this.className= "A";
	}

	public void method(){
		System.out.println("I am A");
	}

	public void anotherMethod(){
		System.out.println("Called in A");
	}

	public void sayClassName(){
		System.out.println(this.className);
	}
}

class B extends A{

	public B(){
		super();
		this.className="B";
	}

	public void method(){
	Szybkistem.out.println("I am B");
	}

	public void anotherMethod(){
		System.out.println("Calling A from B");
		super.anotherMethod();
	}

}


A a = new A();
B b = new B();

System.out.println (a instanceof A); // true
System.out.println (a instanceof B); // false
System.out.println (b instanceof A); // true
System.out.println (b instanceof B); // true
```

PHP
===
```php
class A {
	public $className;

	public function __construct(){
		$this->className= "A";
	}

	public function method(){ 
		echo "I am A";
	}

	public function anotherMethod(){
		echo "Called in A";
	}

	public function sayClassName(){
		echo $this->className;
	}
}

class B extends A {
	public function __construct(){
		parent::__construct();
		$this->className="B";
	}

	public function method(){
		echo "I am B";
	}

	public function anotherMethod(){
		echo "Calling A from B";
		parent::anotherMethod();
	}
}

$a = new A();
$b = new B();

echo ($a instanceof A); // true
echo ($a instanceof B); // false
echo ($b instanceof A); // true
echo ($b instanceof B); // true

C#
==
```c#

class A {
	public string className;

	public A() {
		this.className="A";
	}

	public virtual void method() {
		Console.WriteLine("I am A");
	}

	public virtual void anotherMethod(){ 
		Console.WriteLine("Called in A");
	}

	public void sayClassName(){
		Console.WriteLine(this.className);
	}

}

class B:A {
	public B():base(){
		this.className="B";
	}

	public override void method(){
		Console.WriteLine("I am B");
	}

	public override void anotherMethod(){ 
		Console.WriteLine("calling A from B");
		base.anotherMethod();
	}
}

// w jakiejs innej klasie:
var a = new A();
var b = new B();

Console.WriteLine(a is A); // true
Console.WriteLine(a is B); // false
Console.WriteLine(b is A); // true
Console.WriteLine(b is B); // true
```

Jest równoważne w Javascript:
=============================
```javascript

function A () {
	this.className = "A"; 
};
A.prototype.method = function(){
	console.log("I am A");
};
A.prototype.anotherMethod = function(){
	console.log("called in A");
};
A.prototype.sayClassName=function(){
	console.log(this.className);
};


function B(){
	A.call(this);
	this.className= "B";
};
// poniewaz teraz jest tworzona nowa instancja obiektu A, wiec wazne jest aby konstruktor nie mial zadnych side-effects
B.prototype = new A();
B.prototype.method = function(){
	console.log("I am B");
};
B.prototype.anotherMethod = function(){
	console.log("calling A in B");
	A.prototype.anotherMethod.call(this);
};



var a = new A();
var b = new B();

console.log(a instanceof A); // true
console.log(a instanceof B); // false
console.log(b instanceof A); // true
console.log(b instanceof B); // true

```