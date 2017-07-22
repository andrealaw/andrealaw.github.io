/**
 * School: Harvard University
 * Subject: CS50
 * Last update: 5 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * Calculate number of bottles for users taking a shower
 * 
 * Assume the user will input a positive integer, so no need for error-checking
 */

#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Prompt users to enter their shower in minutes
    printf("minutes: ");
    int minutes = GetInt();
    
    // Get and print the number of bottles
    printf("bottles: %i\n", minutes * 12);
    
    return 0;
}