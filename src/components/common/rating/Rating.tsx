import { HiThumbUp, HiThumbDown } from "react-icons/hi";

import RatingStyled from "./Rating.style";

export default function Rating(props: any) {
    return (
        <RatingStyled
            rating={props.rating}
            isLoading={props.isLoading}
            isRated={props.isRated}
        >
            Uspješno iskorišteno?
            <HiThumbUp
                className="thumb-up"
                size={30}
                title="Da"
                onClick={props.upvoteHandler}
            />
            <div className="popularity">{props.children}</div>
            <HiThumbDown
                className="thumb-down"
                size={30}
                title="Ne"
                onClick={props.downvoteHandler}
            />
        </RatingStyled>
    );
}
