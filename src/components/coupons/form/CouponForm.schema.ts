import * as yup from "yup";

const couponFormSchema = yup.object().shape({
    amount: yup.number().required("Required."),
    code: yup
        .string()
        .required("Required.")
        .min(3, "Please enter no less than 3 characters."),
    description: yup.string().min(3, "Please enter no less than 3 characters."),
    webshopId: yup.string().required("Required"),
    unit: yup.string().required("Required"),
});

export default couponFormSchema;
