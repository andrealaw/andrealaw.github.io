/*

School: HKU SPACE CC
Subject: Computer Programming I
Title: Individual Assignment 2
-----------------------------------------------------------------------------------------------------------------------
Program ID  : orderSupply.cpp
Description : This is a program which allows the Expedition Supplies Officer 
              to enter, online, an order for supplies.
Date Written: 2010-04-12
Written by  : Andrea Law

*/

#include <iostream>                                                  // add the contents of the library file "iostream" 
                                                                     // in the default location
#include <iomanip>                                                   // add the contents of the library file "iomanip" 
                                                                     // in the default location
                                                                     // prototypes for setprecision
#include <cstdlib>                                                   // add the contents of the library file "cstdlib" 
                                                                     // in the default location

using namespace std;                                                 // use a set of names in the namespace of "std"

// function main begins program execution
int main()
{

// declare variables with name and data type before use
struct ItemDetail                                                    //a container for item details
{
    char   itemCode[50];                                             // code of the item, array size 10000
    char   desc[50];                                                 // description of the item, array size 10000,
                                                                     // reserves 50 characters
    char   char_weight[50];
    int    weight;                                                   // weight of the item, array size 10000
    char   char_price[50];
    double price;                                                    // price of the item, array size 10000    
    int    qty;                                                      // order quantity of the item, array size 10000
};
    
    ItemDetail ID[1000];                                             // set array
    int        i;                                                    // loop counter
    string     addItem;                                              // user's response of continue adding item
    char       test;                                                 // test input validation
    int        x;                                                    // reserve character for input
    int        errorcounter;                                         // counting error
    int        dotcounter;                                           // counting dots
   
    addItem = "Y";                                                   // initialize addItem
    i       = 0;                                                     // initialize loop counter

    // allow user to enter product data
    cout << "==================================================================" << endl;    
    cout << "                     PLEASE ENTER ITEM DETAILS                    " << endl;
    cout << "==================================================================" << endl;
    // loop repeatedly until user does not want to add another item
    while (addItem == "Y" ||                                         // set condition for enter loop
           addItem == "y")                                           // set condition for enter loop
    {
        i    = i + 1;                                                // increment loop counter
        test = 'F';                                                  // test input validation
        
        cout << "ENTER ITEM CODE: ";                                 // prompt for input
        cin.getline(ID[i].itemCode, 50, '\n');                       // read a char array from user
                                                                     // test input validation
        while (test == 'F')                                          // set condition for enter loop
        {
            errorcounter = 0;                                        // initialize errorcounter
            dotcounter   = 0;                                        // initialize dotcounter
            for (int count = 0; count < strlen(ID[i].itemCode); count++) // set condition for enter loop
        {
            if  (!isdigit(ID[i].itemCode[count]))                    // set condition for true
            {
                errorcounter = errorcounter + 1;                     // assign result to errorcounter
                if  (ID[i].itemCode[count] == '.' &&                 // set condition for true
                     ID[i].itemCode[0] != '.')                       // set condition for true
                {
                    errorcounter = errorcounter - 1;                 // assign result to errorcounter
                    dotcounter = dotcounter + 1;                     // assign result to dotcounter
                }
                if  (ID[i].itemCode[0] == '.')                       // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
                if  (dotcounter > 1)                                 // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
            }
        }
        if (errorcounter > 0)                                        // set condition for true
        {                
            cout << "WRONG INPUT. PLEASE ENTER AGAIN." << endl;      // print error message 
            cout << "ENTER ITEM CODE: ";                             // prompt for input
            cin.getline(ID[i].itemCode, 50, '\n');                   // read a char array from user
        }
        else
        {
            test = 'T';                                              // assign result to test
        }
        }   

        test = 'F';                                                  // test input validation
                                                
        cout << "ENTER ITEM DESCRIPTION: ";                          // prompt for input
        cin.getline(ID[i].desc, 50, '\n');                              // read a char array from user
                                                                     // test input validation
     while (test == 'F')                                          // set condition for enter loop
        {
        errorcounter = 0;                                            // initialize errorcounter
        dotcounter   = 0;                                            // initialize dotcounter
        for (int count = 0; count < strlen(ID[i].desc); count++) // set condition for enter loop
        {
            if  (!isdigit(ID[i].desc[count]))                    // set condition for true
            {
                errorcounter = errorcounter + 1;                     // assign result to errorcounter
                if  (ID[i].desc[count] == '.' &&                 // set condition for true
                     ID[i].desc[0] != '.')                       // set condition for true
                {
                    errorcounter = errorcounter - 1;                 // assign result to errorcounter
                    dotcounter = dotcounter + 1;                     // assign result to dotcounter
                }
                if  (ID[i].desc[0] == '.')                       // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
                if  (dotcounter > 1)                                 // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
            }
        }
        if (errorcounter > 0)                                        // set condition for true
        {                
            cout << "WRONG INPUT. PLEASE ENTER AGAIN." << endl;      // print error message 
            cout << "ENTER ITEM DESCRIPTION: ";                             // prompt for input
            cin.getline(ID[i].desc, 50, '\n');                   // read a char array from user
        }
        else
        {
            test = 'T';                                              // assign result to test
        }
        }   

        test = 'F';                                                  // test input validation
               
        cout << "ENTER ITEM WEIGHT IN GRAMS: ";                      // prompt for input
        cin.getline(ID[i].char_weight, 50, '\n');                              // read a char array from user
                                                                     // test input validation
     while (test == 'F')                                          // set condition for enter loop
        {
        errorcounter = 0;                                            // initialize errorcounter
        dotcounter   = 0;                                            // initialize dotcounter
        for (int count = 0; count < strlen(ID[i].char_weight); count++) // set condition for enter loop
        {
            if  (!isdigit(ID[i].char_weight[count]))                    // set condition for true
            {
                errorcounter = errorcounter + 1;                     // assign result to errorcounter
                if  (ID[i].char_weight[count] == '.' &&                 // set condition for true
                     ID[i].char_weight[0] != '.')                       // set condition for true
                {
                    errorcounter = errorcounter - 1;                 // assign result to errorcounter
                    dotcounter = dotcounter + 1;                     // assign result to dotcounter
                }
                if  (ID[i].char_weight[0] == '.')                       // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
                if  (dotcounter > 1)                                 // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
            }
        }
        if (errorcounter > 0)                                        // set condition for true
        {                
            cout << "WRONG INPUT. PLEASE ENTER AGAIN." << endl;      // print error message 
            cout << "ENTER ITEM WEIGHT IN GRAMS: ";                             // prompt for input
            cin.getline(ID[i].char_weight, 50, '\n');                   // read a char array from user
        }
        else
        {
            test = 'T';                                              // assign result to test
        }
        }   
        ID[i].weight = atoi (ID[i].char_weight);

        test = 'F';                                                  // test input validation

        cout << "ENTER ITEM UNIT PRICE ($): ";                       // prompt for input
        cin.getline(ID[i].char_price, 50, '\n');                              // read a char array from user
                                                                     // test input validation
    while (test == 'F')                                          // set condition for enter loop
    {
        errorcounter = 0;                                            // initialize errorcounter
        dotcounter   = 0;                                            // initialize dotcounter
        for (int count = 0; count < strlen(ID[i].char_price); count++) // set condition for enter loop
        {
            if  (!isdigit(ID[i].char_price[count]))                    // set condition for true
            {
                errorcounter = errorcounter + 1;                     // assign result to errorcounter
                if  (ID[i].char_price[count] == '.' &&                 // set condition for true
                     ID[i].char_price[0] != '.')                       // set condition for true
                {
                    errorcounter = errorcounter - 1;                 // assign result to errorcounter
                    dotcounter = dotcounter + 1;                     // assign result to dotcounter
                }
                if  (ID[i].char_price[0] == '.')                       // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
                if  (dotcounter > 1)                                 // set condition for true
                {
                    errorcounter = errorcounter + 1;                 // assign result to errorcounter
                }
            }
        }
        if (errorcounter > 0)                                        // set condition for true
        {                
            cout << "WRONG INPUT. PLEASE ENTER AGAIN." << endl;      // print error message 
            cout << "ENTER ITEM UNIT PRICE ($): ";                             // prompt for input
            cin.getline(ID[i].char_price, 50, '\n');                   // read a char array from user
        }
        else
        {
            test = 'T';                                              // assign result to test
        }
        }   
        ID[i].price = atoi (ID[i].char_price);

        cout << endl;                                                // flush the output buffer after sending a '\n'
        ID[i].qty = 0;                                                  // initialize qty[i]
        
        cout << "ADD ANOTHER ITEM DETAILS? (Y/N): ";                 // prompt for input
        cin  >> addItem;                                             // read a string from user
        cout << endl;                                                // flush the output buffer after sending a '\n'
        
        // loop repeatedly until user enter the correct response
        while (addItem != "Y" &&                                     // set condition for enter loop
               addItem != "y" &&                                     // set condition for enter loop
               addItem != "N" &&                                     // set condition for enter loop
               addItem != "n")                                       // set condition for enter loop
        {
            cout << "WRONG INPUT. PLEASE ENTER AGAIN."               // print error message
                 << endl;                                            // flush the output buffer after sending a '\n'
            cout << "ADD ANOTHER ITEM DETAILS? (Y/N): ";             // prompt for input
            cin  >> addItem;                                         // read a string from user
            cout << endl;                                            // flush the output buffer after sending a '\n'
        }
        // discard the next character in the stream buffer until '\n'is found
        cin.ignore();  
    }
    cout << endl;                                                    // flush the output buffer after sending a '\n'
    cout << endl;                                                    // flush the output buffer after sending a '\n'

    string addOrder;                                                 // user's response of continue ordering or not
    string searchCode;                                               // for searching itemCode stored
    string exist;                                                    // store results of the itemCode search
    int    itemAmt;                                                  // number of item being entered
    int    totalWeight[10000];                                       // total weight of the order
    double totalPrice[10000];                                        // total price of the order
    double allOrderWeight;                                           // total weight of all orders
    double allOrderPrice;                                            // total price of all orders
    
    addOrder       = "Y";                                            // initialize addOrder
    itemAmt        = i;                                              // initialize itemAmt
    i              = 0;                                              // initialize loop counter
    allOrderWeight = 0;                                              // initialize allOrderWeight
    allOrderPrice  = 0;                                              // initialize allOrderPrice

    // allow user to make an order
    cout << "==================================================================" << endl;    
    cout << "                         PLEASE ENTER ORDER                       " << endl;
    cout << "==================================================================" << endl;
    // loop repeatedly until user does not want to make another order
    while (addOrder == "Y" ||                                        // set condition for enter loop
           addOrder == "y")                                          // set condition for enter loop
    {
        i     = 0;                                                   // initialize loop counter
        exist = "n";                                                 // initialize exist
        
        cout << "ENTER ITEM CODE: ";                                 // prompt for input
        cin  >> searchCode;
        cout << endl;                                                // flush the output buffer after sending a '\n'
        
        //loop repeatedly until the searchCode matching an itemCode
        while (i <= itemAmt && ID[i].itemCode != searchCode)         // set condition for enter loop
        {
            i = i + 1;                                               // increment loop counter
            if (ID[i].itemCode == searchCode)                        // set the condition for true
            {
                exist = "y";                                         // the searchCode matching an itemCode
            }
        }
        
        if (exist == "y")                                            // set the condition for true
        {
            cout << "ITEM IS "                                       // prompt for output
                 << ID[i].desc                                       // print desc[i]
                 << ", WEIGHT IN GRAMS: "                            // prompt for output
                 << ID[i].weight                                     // print weight[i]
                 << ", UNIT PRICE: $"                                // prompt for output
                 << fixed                                            // print the following outputs
                 << setprecision(2)                                  // with 2 decimal places
                 << ID[i].price << endl;                             // print price[i]
            cout << "ENTER QUANTITY: ";                              // prompt for input
            cin  >> ID[i].qty;                                       // read an integer from user
            totalWeight[i] = ID[i].weight * ID[i].qty;               // assign result to totalWeight[i]
            allOrderWeight = allOrderWeight + totalWeight[i];        // assign result to allOrderWeight
            totalPrice[i]  = ID[i].price * ID[i].qty;                // assign result to totalPrice[i]
            allOrderPrice  = allOrderPrice + totalPrice[i];          // assign result to allOrderPrice
            cout << endl;                                            // flush the output buffer after sending a '\n'
            cout << "ADD ANOTHER ORDER? (Y/N): ";                    // prompt for input
            cin  >> addOrder;                                        // read a string from user
            cout << endl;                                            // flush the output buffer after sending a '\n'
            cout << endl;                                            // flush the output buffer after sending a '\n'
        
            // loop repeatedly until user enter the correct response
            while (addOrder != "Y" &&                                // set condition for enter loop
                   addOrder != "y" &&                                // set condition for enter loop
                   addOrder != "N" &&                                // set condition for enter loop
                   addOrder != "n")                                  // set condition for enter loop
            {
                cout << "WRONG INPUT. PLEASE ENTER AGAIN."           // print error message
                     << endl                                         // flush the output buffer after sending a '\n'
                     << endl;                                        // flush the output buffer after sending a '\n'
                cout << "ADD ANOTHER ORDER? (Y/N): ";                // prompt for input
                cin  >> addOrder;                                    // read a string from user
            }                                
        }
        else 
        {
            cout << "NO SUCH ITEM. PLEASE ENTER AGAIN." << endl;     // print statement ignored,
            cout << "ENTER ITEM CODE: ";                             // prompt for input                                                                     // prompt for input
        }
        // discard the next character in the stream buffer until '\n'is found
        cin.ignore();
    }

    time_t rawtime;                                                  // local time
    i = 0;                                                           // initialize loop counter
    
    // print a summary of orders
    cout << "==================================================================" << endl;
    cout << "                          SUMMARY OF ORDER                        " << endl;
    cout << "==================================================================" << endl;      
    time ( &rawtime );                                               // call the ctime function
    printf ( "ORDER TIME: %s", ctime (&rawtime) );                   // print the current local time
    cout << endl;                                                    // flush the output buffer after sending a '\n'
    cout << "YOU HAVE ORDERED"                                       // prompt for output
         << endl;                                                    // flush the output buffer after sending a '\n'   
    while (itemAmt > i)
    {
        i = i + 1;                                                   // increment loop counter
        
        // set the condition for true: item is ordered
        if (ID[i].qty != 0)
        {
            cout << setw(5) << ID[i].qty << " "                      // print qty[i]
                 << ID[i].desc                                       // print desc[i]
                 << " (" << ID[i].itemCode << ")"                    // print itemCode[i]
                 // print the following outputs with 2 decimal places
                 << setprecision(2)                                  
                 << " @ $"                                           // prompt for output
                 << ID[i].price                                         // print price[i]
                 << " TOTAL: $"                                      // prompt for output
                 << totalPrice[i]                                    // print totalPrice[i]
                 << endl;                                            // flush the output buffer after sending a '\n'          
        }
    }
    cout << endl;                                                    // flush the output buffer after sending a '\n'
    
    // declare variables with name and data type before use
    double measure;                                                  // to calculate number of decimal places
                                                                     // displayed in allOrderWeight
    
    measure = allOrderWeight;                                        // initialize measure
    
    while (measure >= 1000)                                          // set condition for enter loop
    {
        measure = measure - 1000;                                    // assign result to measure
    }
    if  (measure == 0)                                               // allOrderWeight/1000 has no remainder
    {
        // print the following outputs with 0 decimal places
        cout << setprecision(0);                                     
    }
    else
    {
        while (measure >= 100)                                       // set condition for enter loop
        {
            measure = measure - 100;                                 // assign result to measure
        }
        if  (measure == 0)                                           // allOrderWeight/100 has no remainder
        {
            // print the following outputs with 1 decimal places                                 
            cout << setprecision(1);
        }
        else
        {
            while (measure >= 10)                                    // set condition for enter loop
            {
                measure = measure - 10;                              // assign result to measure
            }
            if  (measure == 0)                                       // allOrderWeight/10 has no remainder
            {
                // print the following outputs with 2 decimal places
                cout << setprecision(2);                             
            }
            else                                                     // allOrderWeight/10 has remainder
            {
                // print the following outputs with 3 decimal places
                cout << setprecision(3);                             
            }
        }
    }
    allOrderWeight = allOrderWeight / 1000;                          // assign result to allOrderWeight
    cout << "GRAND TOTAL WEIGHT: "                                   // prompt for output
         << allOrderWeight << "kg"                                   // print allOrderWeight
         << endl;                                                    // flush the output buffer after sending a '\n'
    cout << "GRAND TOTAL COST: $"                                    // prompt for output
         << setprecision(2) << allOrderPrice                         // print allOrderPrice with 2 decimal places
         << endl                                                     // flush the output buffer after sending a '\n'
         << endl;                                                    // flush the output buffer after sending a '\n'
    cout << "==================================================================" << endl;
    cout << "                        THANK YOU FOR ORDERING                    " << endl;
    cout << "==================================================================" << endl;                                                                                      
    cout << endl << endl;                                            // prompt for output

    // indicate that program ended successfully   
    system("PAUSE");
    return EXIT_SUCCESS;
}
