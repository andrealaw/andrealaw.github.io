/*

Learn the ternary conditional statement

If/else statements can become lengthy 
when you simply want to return a value 
depending on a Boolean expression

Fortunately, Java provides a shortcut that 
allows you to write if/else statements 
in a single line of code

The term ternary comes from a Latin word that means "composed of three parts".

These three parts are:
1. A Boolean expression
2. A single statement that gets executed if the Boolean expression is true
3. A single statement that gets executed if the Boolean expression is false

Practice from
Codecademy: https://www.codecademy.com/

*/

public class Ternary {
	public static void main(String[] args) {
		
		int fuelLevel = 3;

		char canDrive = (fuelLevel > 0) ? 'Y' : 'N';
		System.out.println(canDrive);

	}
}