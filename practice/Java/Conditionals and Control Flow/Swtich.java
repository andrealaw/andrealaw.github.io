/**

Learn the switch statement

The switch statement
- A way to execute code blocks based on whether a block is equal to a specific value
- Benefits: keep code organized and less wordy

The break statement
- will exit the switch statement after a condition is met
- stop Java to check whether the value matches any other cases

*/

public class Switch {
	public static void main(String[] args) {
		
        // Task 1: Set the code block under the default case
        // Task 2: Set the char variable penaltyKick value to L, R, or C
		char penaltyKick = 'L';

		switch (penaltyKick) {

			case 'L': System.out.println("Messi shoots to the left and scores!");
								break; 
			case 'R': System.out.println("Messi shoots to the right and misses the goal!");
								break;
			case 'C': System.out.println("Messi shoots down the center, but the keeper blocks it!");
								break;

            default:
				System.out.println("Messi is in position...");

		}

	}
}