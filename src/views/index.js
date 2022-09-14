import Home from "./Home";
import NotFound from "./NotFound";
// import About from "./About";

/*
  To add Route and Link for it dynamically, add any new view to this array , always keep the notFound View at the end,
  set show property to false if you don't want to list the new Route in the navigation bar,
  if you want to pass props for a specific components to be used within this component you can add it in a props object.
*/
export default [
  { name: "home", show: true, path: "/", element: Home, props: {} },
  // { name: "about", show: true, path: "/about", element: About, props: {name: "AhmedElzagh" } },
  { name: "notFound", show: false, path: "*", element: NotFound, props: {} },
];
