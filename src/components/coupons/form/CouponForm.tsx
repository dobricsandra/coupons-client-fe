import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import addCouponFormSchema from "./CouponForm.schema";
import { CouponFormStyled } from "./CouponForm.style";
import { useWebshops } from "../../../hooks/webshops/useWebshop";
import { useUnitsFetch } from "../../../hooks/units/useUnit";
export default function CouponForm(props: any) {
    const { data: webshops } = useWebshops();
    const { data: units } = useUnitsFetch();
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
        props.setNewCouponData({
            ...data,
            typeId: props.typeId,
            validFrom: "2022-03-11T23:12:29.744Z",
            validTo: "2022-03-11T23:12:29.744Z",
        });
        props.setStep(3);
    };

    return (
        <form onSubmit={handleSubmit(onSubmitHandler)}>
            {typeId === 1 && (
                <CouponFormStyled>
                    <div className="form-group">
                        <label>
                            <select placeholder=" " {...register("webshopId")}>
                                {webshops?.map((webshop: any) => (
                                    <option value={webshop.id} key={webshop.id}>
                                        {webshop.name}
                                    </option>
                                ))}{" "}
                            </select>
                            <span>*Webshop</span>
                        </label>
                        <p className="error-label">
                            {errors.webshopId?.message}
                        </p>
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
                                <select placeholder=" " {...register("unitId")}>
                                    {units?.map((unit: any) => (
                                        <option value={unit.id} key={unit.id}>
                                            {unit.name}
                                        </option>
                                    ))}{" "}
                                </select>
                                <span>Unit</span>
                            </label>
                            <p className="error-label">
                                {errors.unitId?.message}
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
