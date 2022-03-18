import * as yup from "yup";

const couponFormSchema = yup.object().shape({
    amount: yup.number().typeError("Must be a number").required("Required."),
    code: yup
        .string()
        .required("Required.")
        .min(3, "Please enter no less than 3 characters."),
    webshopId: yup.string().required("Required"),
    unitId: yup.string().required("Required"),
});

export default couponFormSchema;
