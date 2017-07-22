#
# Makefile
#
# Computer Science 50
# Problem Set 3
#

# Allow the use of "make all" to generate find.c and generate.c
all: find generate

# Generate 2 *.c files when "make find"
find: find.c helpers.c helpers.h
	clang -ggdb3 -O0 -std=c11 -Wall -Werror -o find find.c helpers.c -lcs50 -lm

# Generate generate.c file when "make generate"
generate: generate.c
	clang -ggdb3 -O0 -std=c11 -Wall -Werror -o generate generate.c

# Allow you to clean all the files
clean:
	rm -f *.o a.out core find generate