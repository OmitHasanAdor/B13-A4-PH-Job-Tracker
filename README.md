## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:we use getElementById for select a element from DOM by their specific id and we can select a specific one element by specific id.
we use getElementsByClassName for select multiple element by the class name and they have to same name.it's return HTMLCollection.
we use querySelector for select the first element which match class name or id name.
we use querySelectorAll for select multiple element using both class and id name.it's return a nodelist. 

### 2. How do you create and insert a new element into the DOM?

Answer:(i)First I have to select a container or a parent.
(ii)we have to create an element using {document.createElement}
(iii)set innerText or HTML in the new created element
(iv)now we have to use append,prepend or before() function to insert into a parent container
it will be successfully insert in the DOM

### 3. What is Event Bubbling? And how does it work?

Answer:when we create a event ,in that time that event work or propagate upward into the DOM.events bubble to upward.first to child then parent and then that's parent then body then document

### 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:we can add addevent listener in the parent then we can access event into all the child from that parent and it is the concept of event delegation.it's usefull to keep code clean and easier.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:stopPropagation() uses to stop event bubbling,the parent will not recieve the event and preventDefault() uses to stop deafault browser behaviar.these methods are use for defferent purpose.
