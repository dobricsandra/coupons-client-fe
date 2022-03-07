import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addCouponFormSchema from "./CouponForm.schema";
import * as yup from "yup";
import { CouponFormStyled } from "./CouponForm.style";
export default function CouponForm(props: any) {
    const typeId = props.typeId;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        mode: "onTouched",
        shouldFocusError: false,
        resolver: yupResolver(addCouponFormSchema),
    });
    const onSubmitHandler = (data: any) => {
        reset();
    };
    return (
        <>
            {typeId === 1 && (
                <CouponFormStyled>
                    <div className="form-group">
                        <label>
                            <input placeholder=" " {...register("amount")} />
                            <span>Webshop</span>
                        </label>
                        <p className="error-label">{errors.amount?.message}</p>
                    </div>
                    <div className="form-group amount">
                        <div>
                            <label>
                                <input
                                    placeholder=" "
                                    {...register("amount")}
                                />
                                <span>Amount</span>
                            </label>
                            <p className="error-label">
                                {errors.amount?.message}
                            </p>
                        </div>
                        <div>
                            <label>
                                <input
                                    placeholder=" "
                                    {...register("amount")}
                                />
                                <span>kn</span>
                            </label>{" "}
                            <p className="error-label">
                                {errors.amount?.message}
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            <input placeholder=" " {...register("amount")} />
                            <span>Code</span>
                        </label>
                        <p className="error-label">{errors.amount?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>
                            <input placeholder=" " {...register("amount")} />
                            <span>Additional info</span>
                        </label>
                        <p className="error-label">{errors.amount?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                placeholder=" "
                                {...register("amount")}
                                type="date"
                            />
                            <span>Valid from</span>
                        </label>
                        <p className="error-label">{errors.amount?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                placeholder=" "
                                {...register("amount")}
                                type="date"
                            />
                            <span>Valid to</span>
                        </label>
                        <p className="error-label">{errors.amount?.message}</p>
                    </div>
                </CouponFormStyled>
            )}

            {/* <button onClick={handleSubmit(onSubmitHandler)}>Ok</button> */}
        </>
    );
}
