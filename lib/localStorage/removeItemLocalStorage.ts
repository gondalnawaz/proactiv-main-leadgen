const removeItemLocalStorage = (key: string) => {
    try {

        const isAccessToRemoveLocalStorage = (
            window.localStorage &&
            window.localStorage.removeItem !== undefined &&
            window.localStorage.removeItem !== null
        );
        if (isAccessToRemoveLocalStorage)
            window.localStorage.removeItem(key);

        return isAccessToRemoveLocalStorage;

    } catch (e) {
        console.error(e);
        return false;
    }
}
export default removeItemLocalStorage;