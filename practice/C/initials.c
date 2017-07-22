/**
 * School: Harvard University
 * Subject: CS50
 * Last update: 5 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * A program that prompts a user for their name (using GetString to obtain their name as a string) and then 
 * outputs their initials in uppercase with no spaces or periods, 
 * followed by a newline (\n) and nothing more. 
 * 
 * Assume that the user’s input will contain only letters (uppercase and/or lowercase) 
 * plus single spaces between words. 
 * Folks like Joseph Gordon-Levitt, Conan O’Brien, and David J. Malan won’t be using your program.
 * 
 */
 
#include <stdio.h>
#include <cs50.h>
#include <string.h>
#include <ctype.h>

void Capitalize(char c);

int main(void)
{
    // Prompt for user name
    string name = GetString();
    
    // Extract the initials from the name
    for (int i = 0, n = strlen(name); i < n; i++)
    {

        if (i == 0)
        {
            if (isalpha(name[i])) 
            {
                // Initial. Capitalize it and print it.
                Capitalize(name[i]);
            }
        }
        else
        {
            if (isalpha(name[i - 1]))
            {
                // Not initial. Do nothing.
            }
            else if (isalpha(name[i]))
            {
                // Initial. Capitalize it and print it.
                Capitalize(name[i]);
            }
        }
        
    }
    
    // Open a new line and nothing more
    printf("\n");

}

/**
 * A function to captitalize a char and print it.
 *
 */
void Capitalize(char c)
{
    printf("%c", toupper(c));
}