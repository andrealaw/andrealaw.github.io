/**
 * School: Harvard University
 * Subject: CS50
 * Last update: 5 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * A program that encrypts messages using Vigenère’s cipher. 
 * 
 * This program must:
 * 1. Accept a single command-line argument: a keyword, k, composed entirely of alphabetical characters
 * 2. For the characters in k, you must treat A and a as 0, B and b as 1, … , and Z and z as 25
 * 3. Only apply Vigenère’s cipher to a character in p if that character is a letter
 * 4. All other characters (numbers, symbols, spaces, punctuation marks, etc.) must be outputted unchanged
 * 5. Do not skip any jth character in k
 * 6. Preserve the case of each letter in p
 * 
 * Otherwise, your program must proceed to prompt the user for a string of plaintext, p, which it must then encrypt according to Vigenère’s cipher with k, ultimately printing the result and exiting, with main returning 0.
 */
 
#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>
#include <ctype.h>

int main (int argc, string argv[])
{
    /**
     * Step 1: Get the key
     * If the program is executed: 
     * (1) without any command-line arguments / 
     * (2) with more than one command-line argument /
     * (3) with one command-line argument that contains any non-alphabetical character
     * it should complain and exit immediately, with main returning 1 (thereby signifying an error that our own tests can detect).
     */
    if (argc != 2)
    {
        printf("Hey! You have to enter a word :-(\n"); // Yell at the user for no or more than one command-line argument
        return 1; // To signify errors
    }
    else
    {
        
        // Check if the key is a word
        int n = strlen(argv[1]);
        for (int i = 0; i < n; i++)
        {
            if (isalpha(argv[1][i]))
            {
                // Do nothing
            }
            else
            {
                // Stop and signify errors
                printf("Hey! You have to enter a word not something else :-(\n"); // Yell at the user for 
                return 1;
            }    
        }
        
        // Convert the letters in key to 0 to 25
        int k[n];
        for (int i = 0; i < n; i++)
        {
            if (isupper(argv[1][i]))
            {
                k[i] = argv[1][i] - 'A';
            }
            else if (islower(argv[1][i]))
            {
                k[i] = argv[1][i] - 'a';
            }
        }

        /** 
         * Step 2: Get the plaintext
         */
        string text = GetString();

        /** 
         * Step 3: Encipher
         */
        int text_length = strlen(text);
        char c[text_length];
        int j = 0; // Position in key[n]
        int key_value = k[j];
        for (int i = 0; i < text_length; i++)
        {
            // If letter, check uppercase or lowercase. Then convert with the key value. Update the key value.
            
            if (isalpha(text[i])) // If it is a letter, convert with key value
            {
                if (islower(text[i]))
                {
                    if (text[i] + key_value > 'z') // If converted letter > 'z', continue with 'a'
                    {
                        c[i] = text[i] - 26 + key_value;   
                    }
                    else
                    {
                        c[i] = text[i] + key_value;
                    }
                }
                else if (isupper(text[i]))
                {
                    if (text[i] + key_value > 'Z') // If converted letter > 'Z', continue with 'A'
                    {
                        c[i] = text[i] - 26 + key_value;
                    }
                    else
                    {
                        c[i] = text[i] + key_value;
                    }    
                }
                
                // Update the key value for the next letter
                j = j + 1;
                if (j == n)
                {
                    j = 0;
                }
                key_value = k[j];
            }
            else // It is not a letter, so no change
            {
                c[i] = text[i];
            }
            
            /** 
             * Step 4: Print ciphertext
             */
            printf("%c", c[i]);
        }
        
        printf("\n"); // New line to end
    
        return 0; // To signify success
    }
}