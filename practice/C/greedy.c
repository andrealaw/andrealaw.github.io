/**
 * 
 * School: Harvard University
 * Subject: CS50
 * Last update: 5 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * Asks the user how much change is owed
 * then spits out the minimum number of coins with which said change can be made
 * 
 * TODO:
 * - Prompt user for an amount of change
 * - Always use the largest coin possible
 * - Keep track of coins used
 * - Print the final amount of coins
 * 
 * Assume the only coins available are:
 * - quarter (25¢)
 * - dime (10¢) 
 * - nickel (5¢) 
 * - penny (1¢)
 * 
 * Assume format of inputs will be 9.75
 * not $9.75 or 975
 * and they are in dollars
 * 
 */

#include <stdio.h>
#include <cs50.h>
#include <math.h>

int main(void)
{
    // Get amount in dollar
    printf("O hai! How much change is owed?\n");
    float amount;
    amount = GetFloat();
    
    // Prompt user to enter a positive number until the input is valid
    while (amount < 0)
    {
        printf("How much change is owed?\n");
        amount = GetFloat();
    }
    
    // Round the amount to cents avoid inherent imprecision of float
    int cent = (int) round(amount * 100);
  
    // Count the coins
    int count = 0; // Count the number of coins
    
    count = count + cent / 25; // Count quarters
    cent = cent % 25; // Update cents left
    
    count = count + cent / 10; // Count quarters + dimes
    cent = cent % 10; // Update cents left
    
    count = count + cent / 5; // Count quarters + dimes + nickels
    cent = cent % 5; // Update cents left
    
    count = count + cent;  // Count quarters + dimes + nickels + pennies
    
    // Print number of coins used
    printf("%i\n", count);
}