
public class Earth {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Human tom; // Create a new variable of type Human (not an object before the program is running)
		
		tom = new Human(); // tom is the reference of the address of the Human object created with the constructor
		
		tom.name = "Tom Smith";
		tom.heightInInches = 72;
		tom.age = 5;
		tom.eyeColor = "brown";
		
		tom.speak();
		
		Human joe = new Human(); // Create a new variable of type Human (not an object before the program is running)
		
		joe.name = "Joe Smith";
		joe.heightInInches = 66;
		joe.age = 4;
		joe.eyeColor = "blue";
		
		joe.speak();
		
	}

}
