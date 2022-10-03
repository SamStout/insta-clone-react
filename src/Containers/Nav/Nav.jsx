import "/Users/gglsdnft/bootcamp/projectRepo/instagram-react/src/Containers/Nav/Nav.css"
import HomeButton from "../../components/Buttons/HomeButtton/HomeButton"
import AirplaneButton from "../../components/Buttons/AirplaneButton/AirplaneButton"
import PlusButton from "../../components/Buttons/PlusButton/PlusButton"
import HeartButton from "../../components/Buttons/HeartButton/HeartButton"
import CompassButton from "../../components/Buttons/CompassButton/CompassButton"
import SearchBar from "../../components/SearchBar/SearchBar"
import Logo from "../../components/Buttons/Logo/Logo"

const Nav = () => {
    return (
        <div className="nav">
            <Logo />
            <SearchBar/>
            <HomeButton className= "b"/> 
            <AirplaneButton className= "b"/>
            <PlusButton className= "b"/>
            <HeartButton className= "b"/>
            <CompassButton className= "b"/>
        </div>
    )
}


export default Nav