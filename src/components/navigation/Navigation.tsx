import { BiAddToQueue } from "react-icons/bi";
import { NavigationStyled } from "./Navigation.style";
import { useNavigate } from "react-router-dom";
import { webshopRoutes } from "../../routes/routesList";
import { useEffect, useState } from "react";

const Navigation = () => {
    const navigate = useNavigate();

    const [search, setSearch] = useState("");

    const handleInput = (event: any) => {
        setSearch(event.target.value);
    };

    useEffect(() => {
        navigate(`/coupons?webshopName=${search}`);
    }, [search]);

    return (
        <>
            <NavigationStyled>
                <div className="upper-header">
                    <div>
                        <label>Aktualni kuponi na jednom mjestu.</label>
                        <input
                            placeholder="Search coupons..."
                            onInput={handleInput}
                        />
                    </div>
                    <button onClick={() => navigate("/coupons/add")}>
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
                        <li
                            onClick={() =>
                                navigate("/coupons?sortBy=Popularity")
                            }
                        >
                            Most popular
                        </li>
                        <li
                            onClick={() =>
                                navigate("/coupons?sortBy=DateAdded")
                            }
                        >
                            Newest
                        </li>
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
