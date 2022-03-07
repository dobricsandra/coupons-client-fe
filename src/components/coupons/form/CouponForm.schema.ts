import * as yup from "yup";

const couponFormSchema = yup.object().shape({
    amount: yup
        .string()
        .required("Required.")
        .max(3, "Please enter no more than 3 characters."),
    code: yup
        .string()
        .required("Required.")
        .min(3, "Please enter no less than 3 characters."),
    // description: yup.string().min(3, "Please enter no less than 3 characters."),
    // validFrom: yup.string().min(6, "Please enter no less than 6 characters."),
    // validTo: yup.string().min(6, "Please enter no less than 6 characters."),
    // webshopId: yup.string().required("Please Choose webshop"),
});

export default couponFormSchema;
