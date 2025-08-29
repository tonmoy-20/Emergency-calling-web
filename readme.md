1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

   ans: {By #getElemenById we can pick one specific element in HTML.
   by #getElementsByClassName we can pick all element HTML collection which are under the same class name in HTML.By using #querySelector syntax we just get the first matched element . But by #querySelectorAll we can get all the matched element.}

2. How do you **create and insert a new element into the DOM**?

Ans : By maintain 3 step we can create and insert a new HTML element into a DOM.
at first - we have to create a new HTMLelement by useing #document.createElement()
2nd- we have to adding attribute like id, class in the new created element.
3rd- we have to get the parent using thats elements id/class in document.getElementById/className.And then we can add our element into the parent by using #appendChild() .

3. What is **Event Bubbling** and how does it work?

Ans: Event Bubbling is a step in JavaScript event propagation. When an event (like: click) occurs on an element, the event is first triggered on that element, then propagates to its (child -> parent -> root) elements above.
If a button () is clicked->
First the click event of the Button will fire -> Then the click event of the Parent div will fire -> Then the click event of the Body will fire.
This is how the event flows from the child to the parent, which is called Event Bubbling.

4.  What is **Event Delegation** in JavaScript? Why is it useful?

Ans: Event Delegation is a JavaScript technique where we place a single event listener on their parent element, rather than setting up separate event listeners for child elements.
This listener can catch events that occur on child elements through Event Bubbling.

It increase performance- If there are many child elements, it is expensive to set a separate event listener for each.
By delegation, we can work with only one listener on the parent.

Controlling the event in one place (parent) makes the code simpler and more maintainable.

Even if a new child element is added to the DOM, the listener on the parent will work.

5.  What is the difference between **preventDefault() and stopPropagation()** methods?

Ans: preventDefault() -> disables default behavior (function: event will run, but browser default action will not).

stopPropagation() -> disables event bubbling/capturing (function: event will not go to parent or ancestor element)
