/**
 * helpers.c
 *
 * School: Harvard University
 * Subject: CS50
 * Last update: 26 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * Helper functions for Problem Set 3.
 */
       
#include <cs50.h>
#include <stdio.h>

#include "helpers.h"

/**
 * Returns true if value is in array of n values, else false.
 */
bool search(int value, int values[], int n)
{
    // Return false if n is negative
    if (n < 0)
    {
        return false;
    }
    
    // Uses binary search, returning true if value is in values and false if value is not in values
    int min = values[0]; // min = first value of the sorted array
    int max = values[n - 1]; // max = last value of the sorted array

    if (value < min || value > max)
    {
        return false;
    }
    else if (value == min || value == max)
    {
        return true;
    }

    while (n != 0)
    {
        n = n / 2;
    
        if (values[n] == value)
        {
            return true;
        }
        else if (values[n] > value)
        {
            max = values[n];
        }
        else
        {
            min = values[n];
        }
    }
    return false;
}

/**
 * Sorts array of n values.
 */
void sort(int values[], int n)
{
    // Use Selection sort with O(n^2) to sort the list
    int placeholder;
    int min_position;
    int min_value;
    for (int i = 0, j = 1; i < n; i++)
    {
        placeholder = values[i];
        min_position = i;
        min_value = values[i];
        j = i + 1; // Reset j for the next loop
        while (j < n) 
        {
            if (values[j] < values[i])
            {
                min_value = values[j];
                min_position = j;
            }
        j++;
        }
        values[i] = min_value;
        values[min_position] = placeholder;
    }
}