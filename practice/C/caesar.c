/**
 * School: Harvard University
 * Subject: CS50
 * Last update: 5 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * A program that encrypts messages using Caesar’s cipher. 
 * It must accept a single command-line argument: a non-negative integer
 * 
 * 4 steps:
 * -Get the key
 * -Get the plaintext
 * -Encipher
 * -Print ciphertext
 */

#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

int main (int argc, string argv[])
{
    // Step 1: Get the key
    if (argc != 2)
    {
        // If no command-line arguments or with more than one command-line argument
        printf("Hey! You have to enter a non-negative integer :-(\n"); // Yell at the user
        return 1; // To signify errors
    }
    else
    {
        int initial_k = 0;

        // Check if the key is a number
        for (int i = 0, n = strlen(argv[1]); i < n; i++)
        {
            if (isdigit(argv[1][i]))
            {
                // Do nothing
            }
            else
            {
                // Stop and signify errors
                return 1;
            }    
        }
        
        // The key is a number. Check if it is within the range of int.
        initial_k = atoi(argv[1]);
        //printf("Initial k = %i\n", initial_k);
        
        int max_k = (int)pow(2, 31) - 26;
        //printf("Max k = %i\n", max_k);
        while (initial_k < 0 || initial_k > max_k)
        {
            return 1;
        }
        int k = initial_k % 26;
    
        
        // Step 2: Get the plaintext
        string text = GetString();

        
        // Step 3: Encipher
        int n = strlen(text);
        char c[n];
        for (int i = 0; i < n; i++)
        {
            if (isalpha(text[i])) // If it is a letter, convert with k
            {
                if (islower(text[i]))
                {
                    if (text[i] + k > 'z') // If converted letter > 'z', continue with 'a'
                    {
                        c[i] = text[i] - 26 + k;   
                    }
                    else
                    {
                        c[i] = text[i] + k;
                    }
                }
                else if (isupper(text[i]))
                {
                    if (text[i] + k > 'Z') // If converted letter > 'Z', continue with 'A'
                    {
                        c[i] = text[i] - 26 + k;
                    }
                    else
                    {
                        c[i] = text[i] + k;
                    }    
                }
            }
            else // It is not a letter, so no change
            {
                c[i] = text[i];
            }
            
            // Step 4: Print ciphertext
            printf("%c", c[i]);
        }
    
        printf("\n"); // New line to end
    
        return 0; // To signify success
    }
}