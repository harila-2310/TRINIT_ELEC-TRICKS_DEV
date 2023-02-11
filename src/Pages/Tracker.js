import React from "react";
import "../Pages/tracker.css"
import ColorSchemesExample from "../components/bar/bar";
import LongTextSnackbar from "./Snackbar";
import BasicTabs from "./Snackbar";
import CollapsibleExample from "../components/bar/bar2";


export default function App() {
  return (
   <div >
    <CollapsibleExample/>
   {/* <ColorSchemesExample class1="fs-4 p-4 " class2="fs-4 p-4 " class3="fs-4 p-4 " class4="fs-4 p-4 text-light"/> */}
    <BasicTabs/>
    </div>
  );
}