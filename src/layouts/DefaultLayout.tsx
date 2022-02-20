import Navigation from "../components/navigation/Navigation";

const DefaultLayout = (props: any) => {
    return (
        <>
            <Navigation />
            {props.children}
        </>
    );
};

export default DefaultLayout;
