/*

Perform bubble sort in C++

School: HKU SPACE CC
Subject: Computer Programming I
-----------------------------------------------------------------------------------------------------------------------
Date written: 23 March 2010
Written by: Andrea Law

*/

#include <cstdlib>
#include <iostream>

using namespace std;

int main(int argc, char *argv[])
{
    int num[5] = {3, 1, 2, 7, 6};
    
    int i = 0;    
    
    cout << "Before sort" << endl;
    for (i = 0; i < 5; i++)
    {
        cout << num[i] << ", ";
    }
    cout << endl;
    
    i = 0;
    int temp;
    for (i = 0; i < 5 - 1; i++)
    {
        for (int k = i + 1; k < 5; k++)
        {
            if (num[i] < num[k])
            {
                temp = num[i];
                num[i] = num[k];
                num[k] = temp;
            }
        }
    }
  
    cout << "After sort" << endl;
    for (i = 0; i < 5; i++)
    {
        cout << num[i] << ", ";
    }
    cout << endl;
    
    system("PAUSE");
    return EXIT_SUCCESS;
}
