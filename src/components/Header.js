import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { UseStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {

    const [{ basket, user }] = UseStateValue();

    const login = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <nav className="header">
            <Link to="/">
                <img
                    src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt="logo"
                    className="header__logo"
                />
            </Link>

            <div className="header__search">
                <input type="text" className="header__searchBar" />
                <SearchIcon className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <Link to={!user && "/login"} className="header__link">
                    <div onClick={login} className="header__option">
                        <span className="header__optionONe">Hello {user?.email}</span>
                        <span className="header__optionTwo">{user ? `Sign-out` : 'Sign-in'}</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionONe">Returns</span>
                        <span className="header__optionTwo">& Orders</span>
                    </div>
                </Link>

                <Link to="/login" className="header__link">
                    <div className="header__option">
                        <span className="header__optionONe">Join</span>
                        <span className="header__optionTwo">Prime</span>
                    </div>
                </Link>

                <Link to="/checkout" className="header__link">
                    <div className="header__basket">
                        <ShoppingBasketIcon />
                        <span className="header__optionTwo basket__count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </nav>


    );
}

export default Header;
