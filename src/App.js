import React, { Component } from 'react';

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"





// importing components
import Intro from './intro';
import Navbar from "./navbar"
import ClickingCounter from "./clickingcounter"
import ConditionalRendering4 from "./conditionalrendering4"
import ConditionalRendering3 from "./conditionalrendering3"
import ConditionalRendering2 from "./conditionalrendering2"
import ConditionalRendering1 from "./conditionalrendering1"
import FavouriteMobile from "./favouriteMobile"
import Clock from "./clock"
import Intro1 from "./intro1"
import MainBody from "./mainbody"
import NameList from "./namelist"
import SimpleForm from "./simpleform"
import Students from "./students"
import StudentsInfo from "./studentsinfo"
import TemperatureChecker from "./temperaturechecker"
import YoutubeMsg from "./youtubemsg"


// This was my very first react app that I created while learning react for the first Time.
// It's so funny considering I had used Class based components instead of functional components

// Let's add some routers and load all of these components

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path ="/" element ={""}>
      <Route path ="" element ={<Intro1/>}/>
      <Route path ="favmobile" element = {<FavouriteMobile/>}/>
    </Route>
  )
)

class App extends Component {
  
  render() {
    return (
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
      
    )
  }
}
export default App;