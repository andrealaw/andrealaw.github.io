/**
 * fifteen.c
 *
 * School: Harvard University
 * Subject: CS50
 * Last update: 26 February 2016
 * Written by: Andrea Law
 * 
 * Descriptions: 
 * Implements Game of Fifteen (generalized to d x d).
 *
 * Usage: fifteen d
 *
 * whereby the board's dimensions are to be d x d,
 * where d must be in [DIM_MIN,DIM_MAX]
 *
 * Note that usleep is obsolete, but it offers more granularity than
 * sleep and is simpler to use than nanosleep; `man usleep` for more.
 */
 
#define _XOPEN_SOURCE 500

#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

// constants
#define DIM_MIN 3
#define DIM_MAX 9

// board
int board[DIM_MAX][DIM_MAX];

// dimensions
int d;

// prototypes
void clear(void);
void greet(void);
void init(void);
void draw(void);
bool move(int tile);
bool CheckUp(int tile, int i, int j);
bool CheckDown(int tile, int i, int j);
bool CheckLeft(int tile, int i, int j);
bool CheckRight(int tile, int i, int j);
bool won(void);

int main(int argc, string argv[])
{
    // ensure proper usage
    if (argc != 2)
    {
        printf("Usage: fifteen d\n");
        return 1;
    }

    // ensure valid dimensions
    d = atoi(argv[1]);
    if (d < DIM_MIN || d > DIM_MAX)
    {
        printf("Board must be between %i x %i and %i x %i, inclusive.\n",
            DIM_MIN, DIM_MIN, DIM_MAX, DIM_MAX);
        return 2;
    }

    // open log
    FILE* file = fopen("log.txt", "w");
    if (file == NULL)
    {
        return 3;
    }

    // greet user with instructions
    greet();

    // initialize the board
    init();

    // accept moves until game is won
    while (true)
    {
        // clear the screen
        clear();

        // draw the current state of the board
        draw();

        // log the current state of the board (for testing)
        for (int i = 0; i < d; i++)
        {
            for (int j = 0; j < d; j++)
            {
                fprintf(file, "%i", board[i][j]);
                if (j < d - 1)
                {
                    fprintf(file, "|");
                }
            }
            fprintf(file, "\n");
        }
        fflush(file);

        // check for win
        if (won())
        {
            printf("ftw!\n");
            break;
        }

        // prompt for move
        printf("Tile to move: ");
        int tile = GetInt();
        
        // quit if user inputs 0 (for testing)
        if (tile == 0)
        {
            break;
        }

        // log move (for testing)
        fprintf(file, "%i\n", tile);
        fflush(file);

        // move if possible, else report illegality
        if (!move(tile))
        {
            printf("\nIllegal move.\n");
            usleep(500000);
        }

        // sleep thread for animation's sake
        usleep(500000);
    }
    
    // close log
    fclose(file);

    // success
    return 0;
}

/**
 * Clears screen using ANSI escape sequences.
 */
void clear(void)
{
    printf("\033[2J");
    printf("\033[%d;%dH", 0, 0);
}

/**
 * Greets player.
 */
void greet(void)
{
    clear();
    printf("WELCOME TO GAME OF FIFTEEN\n");
    usleep(2000000);
}

/**
 * Initializes the game's board with tiles numbered 1 through d*d - 1
 * (i.e., fills 2D array with values but does not actually print them).  
 */
void init(void)
{
    // Assume indexing into board[row][column]
    int tiles = d * d;
    for (int i = 0; i < d; i++)
    {
        for (int j = 0; j < d; j++)
        {
            tiles = tiles - 1;
            board[i][j] = tiles;
        }
    }
    
    // If the board has an odd number of tiles, switch tiles numbered 1 and 2 
    if (board[0][0] % 2 == 1)
    {
        board[d - 1][d - 3] = 1;
        board[d - 1][d - 2] = 2;
    }
}

/**
 * Prints the board in its current state.
 */
void draw(void)
{
    printf("\n");
    for (int i = 0; i < d; i++)
    {
        for (int j = 0; j < d; j++)
        {
            printf("%3i", board[i][j]);
        }
        printf("\n");
    }
    printf("\n");
}

/**
 * If tile borders empty space, moves tile and returns true, else
 * returns false. 
 */
bool move(int tile)
{
    for (int i = 0; i < d; i++)
    {
        for (int j = 0; j < d; j++)
        {
            if (board[i][j] == tile) 
            {
                if (i > 0 && i < d - 1 && j > 0 && j < d - 1) // For tiles inside
                {
                    if (CheckUp(tile, i, j) || CheckDown(tile, i, j) || CheckLeft(tile, i, j) || CheckRight(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (i == 0 && j == 0) // For upper left corner
                {
                    if (CheckDown(tile, i, j) || CheckRight(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (i == 0 && j > 0 && j < d - 1) // For upper middle tile(s)
                {
                    if (CheckDown(tile, i, j) || CheckLeft(tile, i,j) || CheckRight(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (i == 0 && j == d - 1) // For upper right corner
                {
                    if (CheckDown(tile, i, j) || CheckLeft(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (j == d - 1 && i > 0 && i < d - 1) // For right middle tile(s)
                {
                    if (CheckUp(tile, i, j) || CheckLeft(tile, i,j) || CheckDown(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (i == d - 1 && j == d - 1) // For lower right corner
                {
                    if (CheckUp(tile, i, j) || CheckLeft(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (i == d - 1 && j > 0 && j < d - 1) // For lower middle tile(s)
                {
                    if (CheckLeft(tile, i, j) || CheckUp(tile, i,j) || CheckRight(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (i == d - 1 && j == 0) // For lower left corner
                {
                    if (CheckUp(tile, i, j) || CheckRight(tile, i,j))
                    {
                        return true;
                    }
                }
                
                if (j == 0 && i > 0 && i < d - 1) // For left middle tile(s)
                {
                    if (CheckUp(tile, i, j) || CheckRight(tile, i,j) || CheckDown(tile, i,j))
                    {
                        return true;
                    }
                }
            }
        }
    }
    return false;
}

/**
 * Returns true if the selected tile should move up,
 * else false.
 */
bool CheckUp(int tile, int i, int j)
{
    if (board[i-1][j] == 0) // When 0 is above the selected tile, move up the tile
    {
        board[i-1][j] = tile;
        board[i][j] = 0;
        return true;
    }
    return false;
}

/**
 * Returns true if the selected tile should move down,
 * else false.
 */
bool CheckDown(int tile, int i, int j)
{
    if (board[i+1][j] == 0) // When 0 is below the selected tile, move down the tile
    {
        board[i+1][j] = tile;
        board[i][j] = 0;
        return true;
    }
    return false;
}

/**
 * Returns true if the selected tile should move left,
 * else false.
 */
bool CheckLeft(int tile, int i, int j)
{
    if (board[i][j-1] == 0) // When 0 is on the left of the selected tile, move left the tile
    {
        board[i][j-1] = tile;
        board[i][j] = 0;
        return true;
    }
    return false;
}

/**
 * Returns true if the selected tile should move right,
 * else false.
 */
bool CheckRight(int tile, int i, int j)
{
    if (board[i][j+1] == 0) // When 0 is on the right of the selected tile, move right the tile
    {
        board[i][j+1] = tile;
        board[i][j] = 0;
        return true;
    }
    return false;
}

/**
 * Returns true if game is won (i.e., board is in winning configuration), 
 * else false.
 */
bool won(void)
{
    int tiles = 0;
    for (int i = 0; i < d; i++)
    {
        for (int j = 0; j < d; j++)
        {
            tiles = tiles + 1;
            if (i == d - 1 && j == d - 1) // Last tile is numbered 0
            {
                tiles = 0;
            }
            if (board[i][j] != tiles)
            {
                return false;
            }
        }
    }
    return true;
}

