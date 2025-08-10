# JS-Front End

## Wild West Adventure

### Description
    You find yourself amidst the gritty and unforgiving terrain of the Wild West, eager to carve out your legend in this vast, lawless frontier. 
    As dawn breaks, you're presented with an opportunity to assemble a posse of the most daring gunslingers and outlaws to ride by your side.

    On the first line of the standard input, you will receive an integer n – the number of characters that you can choose for your posse. 
    On the next n lines, these rough-and-tumble characters themselves will follow with their health points (HP) and the number of bullets they carry, separated by a single space in the following format:

        "{hero name} {HP} {bullets}"
        -	HP stands for hit points 
        -	a character can have a maximum of 100 HP 
        -	The number of bullets signifies how many shots they can fire before needing to reload.

    After you have successfully assembled your posse, the real adventure begins. You will be navigating through a series of commands, each on a new line, separated by " - ", 
    until the "Ride Off Into Sunset" command is given.

    There are several actions that your characters can undertake:

    "FireShot - {character name} - {target}"

        •	If the character has bullets, they fire a shot, reducing their bullet count by one. Print this message:

            "{character name} has successfully hit {target} and now has {number of bullets left} bullets!"
        •	If the character does not have bullets to shoot, print:
                "{character name} doesn't have enough bullets to shoot at {target}!"

    "TakeHit - {character name} - {damage} - {attacker}"

        •	Reduce the character's HP by the given damage amount. If the character is still standing (their HP is greater than 0), print:

            "{character name} took a hit for {damage} HP from {attacker} and now has {current HP} HP!"

        •	If the character has been gunned down, remove them from your posse and print:

        "{character name} was gunned down by {attacker}!"

    "Reload - {character name}"

        •	If they have less than the maximum capacity of bullets (6), the character loads their gun. In this case, print the following on the console:
            "{character name} reloaded {number of bullets reloaded} bullets!"

        •	If the gun is already fully loaded, print:

        " {character name}'s pistol is fully loaded!"

    "PatchUp – {character name} – {amount}"

        •	The character patches up, recovering HP. If this action would bring their HP above the maximum value (100), HP is increased to 100. Print:

            " {character name} patched up and recovered {amount recovered} HP!"

        If the character is already at full health, print:
            " {character name} is in full health!"

#### Input
    •	On the first line of the standard input, you will receive an integer n.
    •	On the following n lines, the characters themselves will follow with their hit points and bullets separated by a space in the following format.
    •	You will be receiving different commands, each on a new line, separated by " – ", until the " Ride Off Into Sunset" command is given.
#### Output
    •	Print all members of your party who are still alive, in the following format:
    "{Character name}
      HP: {current HP}
      Bullets: {current bullets}"
