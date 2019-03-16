
public class Earth {

	public static void main(String[] args) {
		
		// They have the same values but they are three different, independent objects
		Human human1 = new Human("Tom", 5, 72, "brown");
		Human human2 = new Human("Sam", 4, 68, "blue");
		Human human3 = new Human("Pat", 5, 70, "green");
		
		human1.speak();
		human2.speak();
		human3.speak();
		
	}

}
