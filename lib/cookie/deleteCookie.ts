import { getCanCookieAccess } from "./cookiePolicy";

function deleteCookie(name: string) {

    if (!getCanCookieAccess())
        return;

    const date = new Date();

    // Set it expire in -1 days
    date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

    // Set it
    document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
}
export default deleteCookie;