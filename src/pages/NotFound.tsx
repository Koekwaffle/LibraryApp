import { NavLink } from "react-router"
import { NavBar } from "../shared/NavBar"

export const NotFound = () => {
    return <div>
        <NavBar />

        <h1>This page does not exist</h1>
        <p>
            <NavLink to="/">Go back to home</NavLink>
        </p>
    </div>
}