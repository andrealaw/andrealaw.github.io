/*

Learn the if/else if/else statement

*/

public class IfElseIf {
	public static void main(String[] args) {

        // Task: Set the value of the round variable so that the code in the else if block runs
		int round = 10;

		if (round > 12) {

			System.out.println("The match is over!");

		} else if (round > 0) {

			System.out.println("The match is underway!");

		}	else {

			System.out.println("The boxing match hasn't started yet.");

		}	
	}
}