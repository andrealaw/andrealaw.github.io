/*

Learn the relational operators

- compare data types that have a defined ordering
- like numbers (since numbers are either smaller or larger than other numbers)
- always return a boolean value of true or false

Examples:

<   less than
<=  less than or equal to
>   greater than
>=  greater than or equal to

A relational operator is placed between the two operands (the terms that you want to compare using the relational operator):

System.out.println(5 < 7);      // return true

Practice from
Codecademy: https://www.codecademy.com/

*/

public class RelationalOperators {
	public static void main(String[] args) {

    // return true
	System.out.println(12 > 10);
    System.out.println(10 >= 10);
    System.out.println(2 < 10);
    System.out.println(2 <= 10);
    
    // return false
	System.out.println(10 > 10);
    System.out.println(9 >= 10);
    System.out.println(10 < 10);
    System.out.println(11 <= 10);

	}
}