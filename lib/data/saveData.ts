import setCookie from "../cookie/setCookie";
import setItemLocalStorage from "../localStorage/setItemLocalStorage";

const saveData = (key: string, data: any) => {
    if (setItemLocalStorage(key, JSON.stringify(data))) {
        return
    }
    setCookie({
        cname: key,
        cvalue: JSON.stringify(data)
    })
}
export default saveData;
