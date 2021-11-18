"use strict";
const len = 10000000;
let arrayRandom = Array(len);
for (let i = 0; i < len; i++) {
    arrayRandom[i] = Math.round(Math.random() * 10);
}
const logiqueDeTri = (a, b) => {
    return a - b;
};
function benchMark() {
    const debut = Date.now();
    const ret = arrayRandom.sort(logiqueDeTri);
    return Date.now() - debut;
}
console.log(benchMark());
//# sourceMappingURL=tris.js.map