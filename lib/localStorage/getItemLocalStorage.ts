
const getItemLocalStorage = (key: string): string | null => {
    try {

        return (
            window.localStorage &&
            window.localStorage.getItem
        ) ?
            window.localStorage.getItem(key) :
            null;

    } catch (e) {
        console.error(e);
        return null;
    }
}
export default getItemLocalStorage;