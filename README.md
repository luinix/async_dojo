Asynchronous dojo using Node.js
======

## Requirements

 * [Node.js](http://nodejs.org/)
 * Jasmine-node (requires root access):

  ```
  npm install -g jasmine-node
  ```
  
## What will we do

We are going to solve three katas today.

##### Round 1:
  In round 1 we will solve the fizz buzz kata in a node.js environment, using jasmine-node for the tests. Nothing async here!
  
  For installing the dependencies for this round, cd to the round_1 directory and run:
  ```
  npm install
  ```
  
  To run the tests, cd into round_1 directory and run:
  ```
  jasmine-node --captureExceptions .
  ```
  
##### Round 2:
  In round 2 we will once again solve the fizz buzz kata, but we will read the number stream from files. We have a bunch of files in the directory `input_files/`, and we will read those listed in `input_files/files_to_read`. We will process them (they are json files), and output the fizzbuzz conversion of them, **no matter in which order**. Feel free to reuse the code of the round 1.
  
  To run the tests, cd into round_2 directory and run:
  ```
  jasmine-node --captureExceptions .
  ```

##### Round 3:
  In round 3 we will repeat the exercise in the round 2, but this time we will avoid using callbacks, and instead use promises. Feel free to reuse your code from round 2.
  
  Again, to run the tests, cd into round_2 directory and run:
  ```
  jasmine-node --captureExceptions .
  ```

Have fun!
