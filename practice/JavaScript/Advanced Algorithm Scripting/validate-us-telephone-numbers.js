/*

Validate US Telephone Numbers
Written by: Andrea Law for a freecodecamp challenge


Requirement: Return true if the passed string is a valid US phone number.

- The user may fill out the form field any way they choose as long as it is a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):
 
    555-555-5555
    (555)555-5555
    (555) 555-5555
    555 555 5555
    5555555555
    1 555 555 5555

- For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

function telephoneCheck(str) {
  // Good luck!
  /*
    re (country code and area code + phone numbering) OR (digits only)):
    /
    
    (?:(?:  
      ***beginning***use ^ to identify the first char of the string
      1 555      (?:^1\s\d\d\d)
      1(555)     (?:^1[(]\d\d\d[)])
      1 (555)    (?:^1\s[(]\d\d\d[)])
      555        (?:^\d\d\d)
      (555)      (?:^[(]\d\d\d[)]))
      
      ***phone number***use $ to identify the last char of the string
      (?:
      -555-5555  (?:-|\s|)(?:\d\d\d)(?:-|\s)(?:\d\d\d\d$)
       555-5555
       555 5555
      )
      )
      
      OR
      
      ***digits only***use both ^ and $ to set the length of the digits
      |^\d\d\d\d\d\d\d\d\d\d$
    /
  */
  var re = /(?:(?:(?:^1\s\d\d\d)|(?:^1[(]\d\d\d[)])|(?:^1\s[(]\d\d\d[)])|(?:^\d\d\d)|(?:^[(]\d\d\d[)]))(?:(?:-|\s|)(?:\d\d\d)(?:-|\s)(?:\d\d\d\d$)))|^\d\d\d\d\d\d\d\d\d\d$/;
  return re.test(str);
}

// Test cases:

telephoneCheck("555-555-5555");// should return a boolean.
telephoneCheck("1 555-555-5555");// should return true.
telephoneCheck("1 (555) 555-5555");// should return true.
telephoneCheck("5555555555");// should return true.
telephoneCheck("555-555-5555");// should return true.
telephoneCheck("(555)555-5555");// should return true.
telephoneCheck("1(555)555-5555");// should return true.
telephoneCheck("555-5555");// should return false.
telephoneCheck("5555555");// should return false.
telephoneCheck("1 555)555-5555");// should return false.
telephoneCheck("1 555 555 5555");// should return true.
telephoneCheck("1 456 789 4444");// should return true.
telephoneCheck("123**&!!asdf#");// should return false.
telephoneCheck("55555555");// should return false.
telephoneCheck("(6505552368)");// should return false
telephoneCheck("2 (757) 622-7382");// should return false.
telephoneCheck("0 (757) 622-7382");// should return false.
telephoneCheck("-1 (757) 622-7382");// should return false
telephoneCheck("2 757 622-7382");// should return false.
telephoneCheck("10 (757) 622-7382");// should return false.
telephoneCheck("27576227382");// should return false.
telephoneCheck("(275)76227382");// should return false.
telephoneCheck("2(757)6227382");// should return false.
telephoneCheck("2(757)622-7382");// should return false.
telephoneCheck("555)-555-5555");// should return false.
telephoneCheck("(555-555-5555");// should return false.
telephoneCheck("(555)5(55?)-5555");// should return false.

