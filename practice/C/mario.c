/**
 * School: Harvard University
 * Subject: CS50
 * Last update: 5 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * Recreate the half-pyramid in Mario using hashes (#) for blocks
 */
 
#include <stdio.h>
#include <cs50.h>

int main(void)
{
    // Prompt users for the half-pyramid’s height
    int height;
    do
    {
        printf("Height: ");
        height = GetInt();
    } while (height < 0 || height > 23); // Ask users to enter a integer between 0 and 23 until the input is valid
    
    /** 
     * Generate the half-pyramid
     * 
     * Assume height = 4, here is the logic behind the loops:
     * row  height  space   block   pyramid
     * 1    4       4-1=3   1+1=2      ##
     * 2    4       4-2=2   1+2=3     ###
     * 3    4       4-3=1   1+3=4    ####
     * 4    4       4-4=0   1+4=5   #####
     * 
     * To make it simple to read, start the counters with 1
     * Manage the loops with the value of row
     * E.g.
     * when row = 1
     * space = height - row
     * block = 1 + row
     * 
     * The loops end when row > height, so space < 0, and block > height + 1
     */ 
     
    for (int row = 1; row <= height; row++)
    {
        
        // Print spaces before blocks
        for (int space = height - row; space > 0; space--) // More rows, fewer spaces on the row
        {
            printf(" ");
        }
        
        // Print blocks after spaces
        for (int block = 1; block <= row; block++) // More rows, more blocks on the row
        {
            if (block == row)
            {
                printf("##\n"); // Make the first row has at least two blocks
            } 
            else
            {
                printf("#"); // Add blocks on the same line before the two last blocks
            }
        }
        
    }
    
    return 0;
}