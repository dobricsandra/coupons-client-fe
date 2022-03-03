import {
    useCouponDownvote,
    useCouponUpvote,
} from "../../../hooks/coupons/useCouponMutation";
import RatingStyled from "./Rating.style";

export default function Rating(props: any) {
    const { mutate: upvoteCoupon } = useCouponUpvote();
    const { mutate: downvoteCoupon } = useCouponDownvote();
    const upvoteHandler = () => {
        upvoteCoupon({
            onSuccess: () => {
                console.log("x");
            },
            onError: (err: any) => {},
        });
    };
    const downvoteHandler = () => {
        upvoteCoupon({
            onSuccess: () => {
                console.log("x");
            },
            onError: (err: any) => {},
        });
    };
    return (
        <RatingStyled>
            Uspješno iskorišteno?
            <img
                className="w-6"
                src="/images/thumb_up.png"
                title="Da"
                alt="thumbs up"
                onClick={upvoteHandler}
            />
            <span>{props.children}</span>
            <img
                className="w-6"
                src="/images/thumb_down.png"
                alt="thumbs down"
                title="Ne"
                onClick={downvoteHandler}
            />
        </RatingStyled>
    );
}
