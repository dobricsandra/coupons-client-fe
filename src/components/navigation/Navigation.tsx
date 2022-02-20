import { Link } from "react-router-dom";
import NavigationStyled from "./Navigation.style";

const Navigation = () => {
    return (
        <NavigationStyled>
            <div className="upper-header">
                <input placeholder="Search coupons..." />
            </div>
            <div className="lower-header">
                <ul>
                    <li>Most popular</li>
                    <li>Newest</li>
                </ul>
                <div className="border"></div>
                <ul>
                    <li>Lijepa.hr</li>
                    <li>Notino.hr</li>
                    <li>Notino.hr</li>
                    <li>Notino.hr</li>
                </ul>
            </div>
        </NavigationStyled>
    );
};

export default Navigation;
