import { useMediaQuery } from "react-responsive";

import { NavigationStyled, MobileNavigationStyled } from "./Navigation.style";

const Navigation = () => {
    const isBigScreen = useMediaQuery({ query: "(min-width: 470px)" });
    const isMobile = useMediaQuery({ query: "(max-width: 470px)" });

    return (
        <>
            {isBigScreen && (
                <NavigationStyled>
                    <div className="upper-header">
                        <label>Aktualni kuponi na jednom mjestu.</label>
                        <input placeholder="Search coupons..." />
                    </div>
                    <div className="lower-header">
                        <ul>
                            <li>Show all</li>
                        </ul>
                        <div className="border"></div>
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
            )}
            {isMobile && (
                <MobileNavigationStyled>
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
                </MobileNavigationStyled>
            )}
        </>
    );
};

export default Navigation;
