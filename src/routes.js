
import { lazy } from "react";

export const contactsRoutes = [
    {
        path: "/",
        name: "Home",
        exact: true,
        component: lazy(() =>
            import("./page/home/HomePage")
        ),
    },
    {
        path: "/register",
        name: "Register",
        exact: true,
        component: lazy(() =>
            import("./page/register/RegisterPage")
        ),
    },
    {
        path: "/login",
        name: "Login",
        exact: true,
        component: lazy(() =>
            import("./page/login/LoginPage")
        ),
    },
    {
        path: "/contacts",
        name: "Contacts",
        exact: true,
        component: lazy(() =>
            import("./page/contacts/ContactsPage")
        ),
    },
];