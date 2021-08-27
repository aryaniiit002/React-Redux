## This repo is focused more on how the react and redux works.

#### For the CSS Part I have used [Semantic UI](https://cdnjs.com/libraries/semantic-ui)

##### Dependencies - `npm install redux react-redux axios react-router-dom`
<Br />

## Redux Life Cycle - Small Overview

![Redux Life Cycle](public/RLC.png?raw=true "Title")

Action Creator which is our components and from our components we actually dispatch the action which goes to the reducer and reducer has the power to update the state.
This is what is been implemented in this project.

If you want to see the Redux store in our Chrome Dev then you'll need an extension.
Here is this [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension) where we will be able to see all the states and when we fire or dispatch the actions.    

A fake api store to fetch actual products from.   
https://fakestoreapi.com/docs    
Open above mentioned link and then go to `Get all products` and copy-paste the code.   


`Reducers` - The concept of a Reducer became popular in JavaScript with the rise of Redux as state management solution for React. ... Basically reducers are there to manage state in an application.

What's happening in redux/ and with components is that -
we have 2 reducers - allProducts , product.     
We fetch data from the server in ProductListing.js and then using useDispatch we store all the product data in allProducts. How is this happening? 
We have 3 action types set products , selected products and remove selected products in (productsActions.js).      
Now, when we call these actions these actions then returns 2 things an object (Plain JS object) which has a key as type and the payload. They will store the respective key and the data in the state.      
Now, After that when we want to fetch the data from redux store we use useSelector and provide state (here either product or allProducts) moving to redux/reducers/index.js, from there a reducer will be called in redux/reducers/productsReducer.js returning the data (here data can be either all the products or a single product). And now finally if we want to clear that single product state then we will call remove selected products action.

If you click on any product on site then go back and click any other product you will first see that previous product and then it gets updated and you will see the current one, so to solve this issue we use 3rd actions which is remove selected products.

Basically, Main purpose of this action is to remove the selected product from the state right after we go back to main page (or when component gets destroyed).  
Which is valid we need remove the selected product when component destroyed.

That's it.

Let me know if I understood anything wrong.