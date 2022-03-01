import styled from "styled-components";

export default function Coupon(props: any) {
    const couponData = props.couponData;
    const webshopLogo = () => {
        if (couponData.webshop.name === "Lijepa.hr") {
            return (
                <img
                    src="/images/webshop-logos/lijepa-hr_logo.png"
                    alt="lijepa.hr logo"
                />
            );
        }
        if (couponData.webshop.name === "Notino") {
            return (
                <img
                    src="/images/webshop-logos/notino_logo.png"
                    alt="notino.hr logo"
                />
            );
        }
        return <span className="name-logo">{couponData.webshop.name}</span>;
    };

    const copyToClipboard = () => {
        navigator.clipboard.writeText(couponData.couponCode);
    };

    return (
        <LightLayout>
            <CouponHeader>
                <LogoWrapper>{webshopLogo()}</LogoWrapper>
                <div>{couponData.amount} kn</div>
            </CouponHeader>
            <div className="coupon-code">
                {couponData.code}
                <img
                    src="/images/copy_icon.png"
                    alt="copy"
                    title="Copy"
                    onClick={copyToClipboard}
                />
            </div>
            <p>* Kupon vrijedi od 2021-01-01 do 2020-01-01</p>
            <p>* {couponData.description}</p>
            <div className="rating">
                Uspješno iskorišteno?
                <img
                    className="w-6"
                    src="/images/thumb_up.png"
                    title="Da"
                    alt="thumbs up"
                />
                <span>{couponData.popularity}</span>
                <img
                    className="w-6"
                    src="/images/thumb_down.png"
                    alt="thumbs down"
                    title="Ne"
                />
            </div>
        </LightLayout>
    );
}

const LightLayout = styled.div`
    background-color: white;
    color: black;
    padding: 1rem;
    margin: 1rem;
    max-height: 300px;
    max-width: 20rem;
    width: 100%;
    text-align: left;
    box-shadow: 7px 7px rgba(0, 0, 0, 0.5);
    & .coupon-code {
        padding: 2.5rem;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        line-height: 2rem;
        img {
            max-height: 2rem;
            cursor: copy;
        }
    }
    & .rating {
        border-top: 2px solid rgba(229, 231, 235);
        padding-top: 0.7rem;
        margin-top: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        img {
            width: 1.5rem;
        }

        span {
            padding: 0.5rem 1rem;
            background-color: lightgrey;
        }
    }
    & p {
        margin: 0.3rem;
        font-size: 12px;
        font-weight: 500;
    }
`;

const CouponHeader = styled.div`
    display: flex;
    height: 3.5rem;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    font-size: 1.5rem;
    border-bottom: 2px solid rgba(229, 231, 235);
`;

const LogoWrapper = styled.div`
    & .name-logo {
        background-color: black;
        color: white;
        font-weight: 700;
        padding: 0.8rem;
    }
    & img {
        max-height: 3.4rem;
    }
`;
