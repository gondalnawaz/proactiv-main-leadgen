const setItemLocalStorage = (key: string, value?: string | null): boolean => {
    try {

        const isAccessToSetLocalStorage = (
            window.localStorage &&
            window.localStorage.setItem !== undefined &&
            window.localStorage.setItem !== null
        );
        if (isAccessToSetLocalStorage)
            window.localStorage.setItem(key, value ?? '');

        return isAccessToSetLocalStorage;

    } catch (e) {
        console.error(e);
        return false;
    }
}
export default setItemLocalStorage;