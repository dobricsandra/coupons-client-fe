import { BiAddToQueue } from "react-icons/bi";
import { NavigationStyled } from "./Navigation.style";
import { useNavigate } from "react-router-dom";
import { webshopRoutes } from "../../routes/routesList";

const Navigation = () => {
    const navigate = useNavigate();
    return (
        <>
            <NavigationStyled>
                <div className="upper-header">
                    <div>
                        <label>Aktualni kuponi na jednom mjestu.</label>
                        <input placeholder="Search coupons..." />
                    </div>
                    <button>
                        <BiAddToQueue size={24} />
                        <span>Dodaj&nbsp;novi</span>
                    </button>
                </div>

                <div className="lower-header">
                    <ul>
                        <li onClick={() => navigate("/coupons")}>Show all</li>
                    </ul>
                    <div className="border"></div>
                    <ul>
                        <li>Most popular</li>
                        <li>Newest</li>
                    </ul>
                    <div className="border"></div>
                    <ul>
                        {webshopRoutes.map((item) => (
                            <li
                                onClick={() => navigate(item.redirectPath)}
                                key={item.webshopName}
                            >
                                {item.webshopName}
                            </li>
                        ))}
                    </ul>
                </div>
            </NavigationStyled>
        </>
    );
};

export default Navigation;
