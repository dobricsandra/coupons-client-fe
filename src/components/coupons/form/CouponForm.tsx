import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addCouponFormSchema from "./CouponForm.schema";
import { CouponFormStyled } from "./CouponForm.style";
import { useWebshops } from "../../../hooks/webshops/useWebshop";
export default function CouponForm(props: any) {
    const { data: webshops, isLoading, isError } = useWebshops();
    const typeId = props.typeId;
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        shouldFocusError: false,
        resolver: yupResolver(addCouponFormSchema),
    });
    const onSubmitHandler = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            {typeId === 1 && (
                <CouponFormStyled>
                    <div className="form-group">
                        <label>
                            <datalist id="suggestions">
                                {webshops?.map((webshop: any) => (
                                    <option key={webshop.id}>
                                        {webshop.name}
                                    </option>
                                ))}
                            </datalist>
                            <input
                                autoComplete="on"
                                placeholder=" "
                                list="suggestions"
                                {...register("webshopId")}
                            />
                            <span>*Webshop</span>
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
                                <span>*Amount</span>
                            </label>
                            <p className="error-label">
                                {errors.amount?.message}
                            </p>
                        </div>
                        <div>
                            <label>
                                <input placeholder=" " {...register("unit")} />
                                <span>kn</span>
                            </label>{" "}
                            <p className="error-label">
                                {errors.unit?.message}
                            </p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>
                            <input placeholder=" " {...register("code")} />
                            <span>*Code</span>
                        </label>
                        <p className="error-label">{errors.code?.message}</p>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                placeholder=" "
                                {...register("description")}
                            />
                            <span>Additional info</span>
                        </label>
                        <p className="error-label">
                            {errors.description?.message}
                        </p>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                placeholder=" "
                                {...register("validFrom")}
                                type="date"
                            />
                            <span>Valid from</span>
                        </label>
                        <p className="error-label">
                            {errors.validFrom?.message}
                        </p>
                    </div>
                    <div className="form-group">
                        <label>
                            <input
                                placeholder=" "
                                {...register("validTo")}
                                type="date"
                            />
                            <span>Valid to</span>
                        </label>
                        <p className="error-label">{errors.validTo?.message}</p>
                    </div>
                    <button type="submit">Next</button>
                </CouponFormStyled>
            )}
        </form>
    );
}
