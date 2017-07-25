/*

Learn Boolean operator precedence

- Boolean operators follow rules that specify the order in which they are evaluated. 
- The precedence of each Boolean operator is as follows:

        ! is evaluated first
        && is evaluated second
        || is evaluated third

- Like numerical expressions, every expression within parentheses is evaluated first
- Expressions are read from left to right

Practice from
Codecademy: https://www.codecademy.com/

*/

public class Precedence {
	public static void main(String[] args) {

        /*

        Task: 
        Use each Boolean operator no more than once to replace the empty comments ???. 
        The code statement should print out false.

        boolean riddle = ???( 1 < 8 ??? (5 > 2 ??? 3 < 5));

        */

		boolean riddle = !( 1 < 8 || (5 > 2 && 3 < 5));
		System.out.println(riddle); // print false

	}
}