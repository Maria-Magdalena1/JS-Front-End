# JS Front-End

## Spellbook Unraveling

### Description
    You find yourself in a dimly lit chamber filled with ancient tomes and mystical artifacts. The air crackles with arcane energy as you embark on a journey to decipher the secrets hidden within the pages of a spellbook. 
    Each incantation holds the potential to unleash powerful magic or unveil hidden truths.
    Write a program that performs a series of commands in order to decode that information. First, you will receive a string representing a mysterious spell waiting to be unraveled, and afterwards, until the command "End" is given, 
    you will be receiving strings with commands split by a exclamation mark. The commands will be the following:
        •	"RemoveEven"
            o	The encoded spell is changed to consist only of its characters at even indices. Then, the updated spell is printed. 
    
        •	"TakePart!{from index}!{to index}":
            o	Selects a portion of the spell specified by two numbers, unveiling a segment of its hidden power and then prints the spell.

        •	"Reverse!{substring}":
            o	If the spell contains the given substring, cut it out, reverse it and add it at the end of the spell. Then, print the updated spell.   
            o	Otherwise, print "Error".
            o	This operation should replace only the first occurrence of the given substring if there are two or more occurrences.
#### Input
    •	You will be receiving strings until the "End" command is given.
    Output
    •	After the "End" command is received, print:
        o	"The concealed spell is: {spell}"
