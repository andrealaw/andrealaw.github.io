
public class Human {

	String name;
	int age;
	int heightInInches;
	String eyeColor;
		
	// Constructor method. Not necessary to define explicitly.
	public Human() {
		
		name = "Joe Smith";
		heightInInches = 66;
		age = 4;
		eyeColor = "blue";
		
	}
	
	public void speak() {
		System.out.println("Hello, my name is " + name);
		System.out.println("I am " + heightInInches + " inches tall");
		System.out.println("I am " + age + " years old");
		System.out.println("My eye colour is " + eyeColor);
	}
	
	public void eat() {
		System.out.println("eating...");
	}
	
	public void walk() {
		System.out.println("walking...");
	}
	
	public void work() {
		System.out.println("working...");
	}
	
}
