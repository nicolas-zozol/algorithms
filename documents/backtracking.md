You have 3 steps:

### Choice

- you find the function definition
- you determine the decision space, aka `for (x,y = …)`

### Constrains

Inside the decision space (for loop), express what you cannot do.

Call the recursive function with that constraint

### Goal

If the path is good → success

If the path is no good, undo

Example

```java
private static void buildCombinations(List<String> result, StringBuilder current, String digits, int index, Map<Character, char[]> phoneMap) {
    // GOAL: If we have built a full-length combination, store it
    if (index == digits.length()) {

        // Success
        result.add(current.toString());
        return;
    }

    // CHOICE: Find the possible letters for the current digit
    char digit = digits.charAt(index);
    char[] letters = phoneMap.get(digit);

    // DECISION SPACE: Try each letter
    for (char letter : letters) {
        if (/* constraint */) {
            current.append(thisLetter);
        } // Choice made
        else {
            current.append(otherLetter);
        }

        // Recursive Call        
        buildCombinations(result, current, digits, index + 1, phoneMap); // Explore next digit

        // Undo
        current.deleteCharAt(current.length() - 1); // Undo choice (Backtrack)
    }
}
```

## Real life example

You have lost your keys

You explore all the paths but don’t want to search twice the same room

You enter one room

If it was already visited, you go back instant
You visit all the adjacent (yes you can, before searching)

You search it

If key found, success

You mark it

If not, UNDO