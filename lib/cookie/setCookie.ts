
const setCookie = (params: { cname: string, cvalue: string, exMilliseconds?: number | 'Session' }): void => {
    const { cname, cvalue, exMilliseconds } = params;
    let expires;
    if (exMilliseconds === "Session") {
        expires = "expires=Session";
    } else {
        let d = new Date();
        if (exMilliseconds) {
            d.setTime(exMilliseconds);
        } else {
            d = new Date('2038-01-19T03:14:08+03:30');
        }
        expires = "expires=" + d.toUTCString();
    }
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
export default setCookie;