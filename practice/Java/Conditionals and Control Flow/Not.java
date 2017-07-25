/*

Learn the "not" Boolean operator

- The not operator is represented in Java by !
- return the opposite of the expression immediately after it
- return false if the expression is true
- return true if the expression is false

Practice from
Codecademy: https://www.codecademy.com/

*/

public class Not {
	public static void main(String[] args) {

        // The "not" Boolean operator:
        System.out.println(!false); // prints true
        System.out.println(!true); // prints false

		// Use the Boolean operator ! with Boolean expressions
        System.out.println( !(4 <= 10) );
		
	}
}