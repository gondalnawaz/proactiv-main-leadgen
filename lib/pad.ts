
export default function pad(input: number, size: number) {
    let s = `${input}`;
    while (s.length < (size || 2)) {
        s = "0" + s;
    }
    return s;
}
