const len: number = 10000000;
let arrayRandom: Array<number> | number[] = Array(len);

for (let i = 0; i < len; i++) {
    arrayRandom[i] = Math.round(Math.random() * 10);
}

const logiqueDeTri = (a: number, b: number) => {
    return a - b;
}

function benchMark(): number {
    const debut: number = Date.now();
    const ret: Array<number> = arrayRandom.sort(logiqueDeTri);
    return Date.now() - debut;
}

console.log(benchMark());