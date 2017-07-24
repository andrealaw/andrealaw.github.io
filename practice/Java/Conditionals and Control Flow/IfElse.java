/*

Learn if/else statements

- If Boolean expression evaluates to true, run the block of code associated with the if statement
- If the Boolean expression evaluates to false, run the block of code after the else keyword
- Example of if/else syntax:

if (1 < 3 && 5 < 4) {
    System.out.println("I defy the Boolean laws!")
} else {
    System.out.println("You can thank George Boole!");
}

*/

public class IfElse {
	public static void main(String[] args) {

        // Task: Modify the if statement's Boolean expression 
        // so that the code in the else block gets executed and prints to the console.
		if (9 <= 7) {

			System.out.println("Try again...");

		} else {

			System.out.println("Success!");

		}
		
	}
}