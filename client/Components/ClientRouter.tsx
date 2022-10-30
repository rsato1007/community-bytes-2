/* IMPORT EXTERNAL MODULES */
import React from "react";
import {
    Routes,
    Route
} from "react-router-dom";

/* IMPORT INTERNAL MODULES */
import NavBar from "./Navigation/NavBar";

// View Components
import LandingPage from "../Views/LandingPage";
import AboutPage from "../Views/AboutPage";

/* INTERFACES AND TYPES */
interface IParentPropComp {
    childComp?: React.ReactNode
}

/**
 * React component that handles client side routing. 
 * Allows for better seperation of concerns.
 * 
 * @param children  
 * @returns 
 */
const ClientRouter = ({children}: any): JSX.Element => {
    return (
        <>
            <NavBar />
            <Routes>
                {/* TODO:
                    - Determine what routes we need
                */}
                <Route 
                    path="about" 
                    element={<AboutPage />} 
                />
                <Route 
                    path="account" 
                    element={<div>This a placeholder for now</div>} 
                />
                <Route 
                    path="recipes" 
                    element={<div>This is the recipes page</div>}
                />
                <Route 
                    path="recipe"
                    element={<div>This is recipe page</div>}
                />
                <Route 
                    path="/"
                    element={<LandingPage />}
                />
            </Routes>
        </>
    );
};

export default ClientRouter;