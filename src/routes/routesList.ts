const webshopNameFilterRoute = "/coupons?webshopName=";

export const webshopRoutes = [
    {
        webshopName: "Lijepa.hr",
        get redirectPath() {
            return webshopNameFilterRoute + this.webshopName;
        },
    },
    {
        webshopName: "Notino.hr",
        get redirectPath() {
            return webshopNameFilterRoute + this.webshopName;
        },
    },
    {
        webshopName: "About you",
        get redirectPath() {
            return webshopNameFilterRoute + this.webshopName;
        },
    },
];
