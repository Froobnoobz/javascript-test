## React interview questions

1. What is state and props in reactjs?
  State is the components internal values/scope where as props are the variables passed into the component from its parent

2. What is high order component? How do you use it?
  Im not sure off the top of my head on what a higher order component is, 
  but what I know of higher order functions is that its a function that can take function(s)
  as an argument or can return a function as an arugment. e.g. map, reduce, filter. So I guess it would follow that same paradigm.
  So maybe just a regular react function component like a button? 

3. What is context? What are the benefits of it?
  Contexts allow a method of sharing props to children of a component via a context provider, children can access this property via globally accessible context
  This is beneficial mainly for storing a global state such as meta data needed within deep children components and you dont want to have to pass the props to each child.

4. How to assign and change the value of state in a component?
  this.setState({
    // objects to update
  });

  With only the objects that need to be updated being re-put back into it the object for set stat

5. Could you explain the life-cycle of a react component?
  Component lifecycle is the internal state of a component that handle Mounting, Updating and Unmounting
  It exposes certain hooks such as ComponentDidMount and ComponentDidRecieveProps that can be used to handle these updates in the lifecycle.

6. What is fragment in react?


7. What is ref in react?
  ref is used to access the public members of a child component, so you would declare a ref on render of the component with a this.etc = React.createRef() on the constructor with the ref on the tag of the child as ref={this.etc}
  then when we are in a function we can call this.etc.current.{childFunction}

8. What is container component? What is presentational component?
  A container component is a component that doesn't concern itself with presentation more on functionallity, so the root of a component tree for a page would be a container.
  Where as a presentation component would be a footer or table that takes its props from its container component parent and renders the content.

9. How to pass a function to a component?
  <MyComponent functionName={this.functionName}> </MyComponent>
  Or however you would access the function to be passed

10. What is portal?
  I have not encounterd this concept before


11. How to share state between parent component and child component? How to share state between sibling components?
  My current understand of base react is that application state is handled in a single source of truth at the component root, with some functional state being handled by the individual component
  So sharing state with a parent is done via the props on the component  
  <MyComponent etc={this.etc} onChildUpdate={this.onChildUpdate}> </MyComponent>
  Then the child will call the onChildUpdate instead of setting its internal state, aka one way data binding

  Between siblings you would do the same but via the parent, so you would have two 
  <MyComponent etc={this.etc} onChildUpdate={this.onChildUpdate}> </MyComponent>
  <MyComponent etc={this.etc} onChildUpdate={this.onChildUpdate}> </MyComponent>
  which would be sharing the same parental props

  I haven yet to touch on redux yet but I think this smoothens out the process a bit?
