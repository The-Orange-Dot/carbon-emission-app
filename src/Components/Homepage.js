import NavBar from "./NavBar"
import About from "./About"
import Welcome from "./Welcome"
import UserInfo from "./UserInfo"

function Homepage() {
    return (
        <div>
            <NavBar />
            <About />
            <UserInfo />
            <Welcome />
        </div>
    )
}

export default Homepage;