
public class Earth {

	public static void main(String[] args) {
		
		// They have the same values but they are three different, independent objects
		Human human1 = new Human();
		Human human2 = new Human();
		Human human3 = new Human();
		
		human1.speak();
		human2.speak();
		human3.speak();
		
	}

}
