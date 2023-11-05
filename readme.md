Before you start, take a look at the existing code. A lot has already been built for you so that you can focus on practicing working with events.

Prompts
The answers can be viewed directly below the respective prompt. The solution branch contains the final code.

There's a form to add sheep to the page, but it currently doesn't do anything! Add an event listener to the form so that when it's submitted, the state of the starting bank is updated to include additional sheep according to the user input. Remember to rerender!

Show Answer
render currently contains logic only for rendering sheep on the starting bank. Complete the function so that sheep on the target bank are rendered as well.

Show Answer
Add an event listener to each sheep that is rendered into the starting bank so that a sheep moves from the starting bank to the target bank when clicked. This should be accomplished by updating state.

Show Answer
Extensions
If you're done early, try to implement one or more of the following features:

Show visitors a congratulatory message when all sheep have been moved to the target bank.
Add an intermediate step so sheep must be moved from the starting bank to the river before being moved to the target bank.
Display to visitors many sheep have been moved to the target bank.
Add a limit to how many sheep can be on the starting bank