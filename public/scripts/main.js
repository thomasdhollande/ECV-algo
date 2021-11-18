"use strict";
function init() {
    const mapCanvas = document.getElementById("map");
    const viewCanvas = document.getElementById("view");
    // const blockStyles = { 1: "rgba(238,68,0,1.0)" }
    // const view3D: IView3D = new View3D({
    //     canvas: viewCanvas,
    //     blockStyles,
    //     couleurPlafond: "#223344",
    //     couleurSol: "#448844"
    // })
    const delay = Math.floor(1000 / 30);
    let lastTime = Date.now();
    function render() {
        const newTime = Date.now();
        const delay = newTime - lastTime;
        /*point.deplace(delay)
        grille.lanceRayons( point.x, point.y, point.angle )
        grille.dessine()
        point.dessine()
        view3D.dessine()
        */
        //console.log(delay)
        lastTime = newTime;
    }
    setInterval(render, delay);
}
init();
window.addEventListener("keyup", (evt) => {
    switch (evt.key) {
        case "ArrowUp":
            console.log("ok");
            break;
        case "ArrowDown":
            console.log("ok");
            break;
        case "ArrowLeft":
            console.log("ok");
            break;
        case "ArrowRight":
            console.log("ok");
            break;
    }
    //evt.preventDefault()
});
window.addEventListener("keydown", (evt) => {
    switch (evt.key) {
        case "ArrowUp":
            console.log("ok");
            break;
        case "ArrowDown":
            console.log("ok");
            break;
        case "ArrowLeft":
            console.log("ok");
            break;
        case "ArrowRight":
            console.log("ok");
            break;
    }
    //evt.preventDefault()
});
//# sourceMappingURL=main.js.map