/**
 * Demonstrate "Polymorphism" here
 *  - making your program more dynamic
 *  - a way to organise the code by using Animal for the type of the above variables
 *  - refer to the variable type of sparrow1 and fish1
 *  - refer to moveAnimal abstract method
 */

public class Zoo {
	
	public static void main(String[] args) {
		
		Animal sparrow1 = new Sparrow(2, "F", 5); // Objects exist when application runs
		//sparrow1.move();
		//sparrow1.fly(); <-- You cannot call the fly() method because it is of type Animal now
	
		Animal fish1 = new Fish(1, "M", 2);
		//fish1.move();
		
		moveAnimal(fish1);
		
		moveAnimal(sparrow1);
		
	}

	public static void moveAnimal(Animal animal) {
		animal.move();
	}
	
}
