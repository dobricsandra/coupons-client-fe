import RatingStyled from "./Rating.style";

export default function Rating(props: any) {
    return (
        <RatingStyled rating={props.rating} isLoading={props.isLoading}>
            Uspješno iskorišteno?
            <img
                className="w-6"
                src="/images/thumb_up.png"
                title="Da"
                alt="thumbs up"
                onClick={props.upvoteHandler}
            />
            <div className="popularity">{props.children}</div>
            <img
                className="w-6"
                src="/images/thumb_down.png"
                alt="thumbs down"
                title="Ne"
                onClick={props.downvoteHandler}
            />
        </RatingStyled>
    );
}
