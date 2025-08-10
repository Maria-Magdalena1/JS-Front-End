# JS-Front-End Exam

## Problem

### Description
    You are the chieftain of a growing Viking clan, leading your warriors across the northern seas on raids, explorations, and heroic quests. 
    Your task is to recruit brave warriors, manage their strength and battle experience, and command their actions in real-time as you expand your saga.

    On the first line of input, you will receive an integer n – the number of warriors joining your clan. 
    On the following n lines, you will receive information about each warrior in the following format:

        "{warrior name}-{weapon}-{strength}"

        · The strength indicates how much power the warrior has for battle or training.

        · A warrior’s strength cannot exceed 100.

        · If a warrior's strength reaches 0 or less, they can no longer participate in raids or train, and any command targeting them should be silently ignored.

        · Each warrior starts with exactly one weapon.

        · During the game, a warrior can acquire more weapons by forging them.

        · The list of all weapons a warrior possesses is displayed at the end joined by ", ".

    After assembling your warband, you will receive a series of commands, each on a new line, separated by " -> ", 
    until the command "The Saga Ends" is given. Here are the commands your warriors can receive:

        · "Raid -> {warrior name} -> {weapon} -> {strength required}"

            o Check if the warrior has the specified weapon and enough strength.

            o If both are true, they join the raid and their strength is reduced by the required amount. Print in the console:

                "{warrior name} fought bravely with {weapon} and now has {remaining strength} strength!"

            o If the warrior doesn’t have the weapon or enough strength, print in the console:

                "{warrior name} couldn't join the raid with {weapon}!"


        · "Train -> {warrior name} -> {strength gained}"

            o Increase the warrior’s strength by the given amount.

            o If the result exceeds 100, cap it at 100.

            o If the warrior is already at full strength, print in the console:

                "{warrior name} is already at full strength!"

            o Otherwise, print:

                "{warrior name} trained hard and gained {actual gained} strength!"


        · "Forge -> {warrior name} -> {new weapon}":

            o If the warrior already has the specified weapon, print:

                "{warrior name} already wields {new weapon}."

            o Otherwise, add the weapon to the warrior’s list of weapons and print:

                "{warrior name} has forged a new weapon: {new weapon}!"


#### Input

    · On the first line: integer n, the number of warriors.

    · The next n lines: each warrior's info in format {warrior name}-{weapon}-{strength}.

    · Then, multiple commands in format described above, ending with: "The Saga Ends"

#### Output

    · After the "The Saga Ends", print the status of each warrior still standing, in the following format:


    "Warrior: {warrior name}

    - Weapons: {weapon1, weapon2, ...}

    - Strength: {current strength}"


        o Use .join(", ") when listing multiple weapons.