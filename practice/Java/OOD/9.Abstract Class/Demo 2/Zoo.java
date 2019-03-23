public class Zoo {
	
	public static void main(String[] args) {
		
		Flyable flyingBird = new Sparrow(2, "M", 6); 	// Works
		Flyable flyingBird2 = new Bird(1, "M", 3); 		// Does not work
		
		// Reason of why the second one is not working: 
		// Flyable is not implemented by the Bird class
		
	}
	
}
