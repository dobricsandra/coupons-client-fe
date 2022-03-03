const webshopNameFilterRoute = "/coupons?webshopName=";

export interface IRouteList {
    readonly webshopName: string;
    readonly redirectPath: string;
}

export const webshopRoutes: IRouteList[] = [
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
