/*

Learn equality operators
- do not require that operands share the same ordering
- can test equality across boolean, char, or int data types

Equality operators:
==  equal to
!=  not equal to

Practice from
Codecademy: https://www.codecademy.com/

*/

public class EqualityOperators {
	public static void main(String[] args) {

    // return true
		System.out.println(true == true);
    System.out.println(true != false);
    
    // return false
    System.out.println(true == false);
    System.out.println(true != true);

	}
}