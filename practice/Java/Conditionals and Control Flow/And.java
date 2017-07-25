/*

Learn the "and" Boolean operator

- The and operator is represented in Java by &&
- returns a boolean value of true 
- only when the expressions on both sides of && are true

Practice from
Codecademy: https://www.codecademy.com/

*/
public class And {
	public static void main(String[] args) {

        // The following expressions use the "and" Boolean operator
        System.out.println(true && true); // prints true
        System.out.println(false && false); // prints false
        System.out.println(false && true); // prints false
        System.out.println(true && false); // prints false
		
	}
}