
import { lazy } from "react";

export const contactsRoutes = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: lazy(() =>
            import("./page/home/HomePage")
        ),
        isPrivate: false,
        restricted: false,
    },
    {
        path: "/register",
        name: "Register",
        exact: true,
        component: lazy(() =>
            import("./page/register/RegisterPage")
        ),
        isPrivate: false,
        restricted: true,
    },
    {
        path: "/login",
        name: "Login",
        exact: true,
        component: lazy(() =>
            import("./page/login/LoginPage")
        ),
        isPrivate: false,
        restricted: true,
    },
    {
        path: "/contacts",
        name: "Contacts",
        exact: true,
        component: lazy(() =>
            import("./page/contacts/ContactsPage")
        ),
        isPrivate: true,
        restricted: false,
    },
];