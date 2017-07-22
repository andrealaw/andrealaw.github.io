/*

Learn the "or" Boolean operator

- The or operator is represented in Java by ||
- It returns a Boolean value of true 
- when at least one expression on either side of || is true

*/

public class Or {
	public static void main(String[] args) {

        //The "or" Boolean operator:
        System.out.println(false || false); // prints false
        System.out.println(false || true); // prints true
        System.out.println(true || false); // prints true
        System.out.println(true || true); // prints true
		System.out.println(2 > 1 || 3 > 4); // prints true
		
	}
}