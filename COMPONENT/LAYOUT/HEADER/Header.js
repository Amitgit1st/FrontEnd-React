import {Fragment} from "react";
import Classes from './Header.module.css';
import dishImage from '../../../assests/indian_dishes.jpg'
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
    return (
        <Fragment>
            <header className={Classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton/>
            </header>

            <div className={Classes['main-image']}>
                <img src={dishImage} alt="DISHES" />
            </div>

        </Fragment>
    );
}
export default Header;