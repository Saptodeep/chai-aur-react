test

react.dev ---> React documentation

react works with react-dom when it is used to build web applications
react works with react-native when it is used to build mobile applications



Ways of creating React apps:
1) npx create-react-app proj_name

When we install node, we get another package with it called node package manager(npm). Similarly there is another package called npx(node package executor)

create-react-app is the utility or software used to build new project
create-react-app is a bulky utility ; bulky bundle size; it gives you many things which are not even required
Alternate utilities : Vite and Parcel

2) npm create vite@latest



"web-vitals": "^2.1.4"  //it is used to track the performance of the application
"scripts": {  //scripts are something which run the project or make it ready for production
    "start": "react-scripts start",  //start script is used to run the project in development environment
    "build": "react-scripts build",  //when our application goes to production, it behaves differently. So build is used for that
    "test": "react-scripts test",  //to run test cases
    "eject": "react-scripts eject" //to eject our app from React maybe because now we are done with react and need other frameworks to introduce to our code
  },

  npm run start/npm start is used to run the start script ie to run the development server

  when u deploy to production, the build folder is served, not the src folder

  devDependencies are used only during development. These do not go to production

  npm install -> used to install node modules

  gitignore -> contains file names which I dont want to push to git

  package-lock.json ---> all the stable versions in the dependencies get locked here

  The manifest.json provides information about a web application in a JSON text file, necessary for the web app to be downloaded and be presented to the user similarly to a native app (e.g., be installed on the homescreen of a device, providing users with quicker access and a richer experience). PWA manifests include its name, author, icon(s), version, description, and list of all the necessary resources (among other things).

  manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop

  index.html is the only html file which is served
  index.js is the main entry point


  inside JSX, we can give only evaluated expression. We can't use if else inside because under the hood, JSX is parsed to an object , and we know that we can't have if else inside objects


  React no longer uses Virtual DOM

1.The createRoot creates its own DOM and then compare it with the web browser's DOM and only update those elements which are actually updated.
2.On the other hand, the browser used to remove the whole DOM and then restructure the whole DOM with the updated values. That's why the page reloads.
3. However virtual DOM tracks whole DOM like a tree like structure and updates only those values which were only changed.
4. But some values depends on network call so if we update a value it might get update immediately via a network call.
5. So we will have to update it again. To avoid this overhead we can drop the updation calls for the immediate value update.
6. The current algo used by React to update the Virtual DOM is called the React Fibre.

What is reconciliation?
-> The algorithm React uses to differentiate the web browser's tree(Real DOM) and React's tree(Virtual DOM) created through createRoot, to determine which parts need to be changed is called reconciliation.

Reconciliation is the algorithm behind what is popularly understood as the "Virtual DOM"


The key points are:

In a UI, it's not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience.
Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store.
A push-based approach requires the app (you, the programmer) to decide how to schedule work. A pull-based approach allows the framework (React) to be smart and make those decisions for you.


npm install -D tailwindcss postcss autoprefixer
-D means you are installing it in devDependencies



Custom hooks are nothing but just functions which return something. 
Custom hooks can use the built-in hooks provided by react.




Saptodeep Atta <saptodeepatta@gmail.com>
4:14 PM (0 minutes ago)
to me

Context API:

step 1 : create the context and export the context variable
step 2 : create the provider and pass the context value as an attribute
step 3: wrap all the components that need the context with the context Provider
step 4: consume or set the context value using useContext


1. Create a Context: First, you create a context using the React.createContext() method. This provides a way to define a "global" value that can be shared across components.

2. Provide the Context Value: You use the Provider component that comes with the context to specify the value of the context. The Provider wraps the components that need access to the context.

3. Consume the Context Value: Any component can use the useContext hook to access the context's value without passing props.