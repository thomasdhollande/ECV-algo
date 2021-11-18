function init() {
    const mapCanvas: HTMLCanvasElement
        = document.getElementById("map") as HTMLCanvasElement
    const viewCanvas: HTMLCanvasElement
        = document.getElementById("view") as HTMLCanvasElement

    // const blockStyles = { 1: "rgba(238,68,0,1.0)" }
    // const view3D: IView3D = new View3D({
    //     canvas: viewCanvas,
    //     blockStyles,
    //     couleurPlafond: "#223344",
    //     couleurSol: "#448844"
    // })

    const delay: number = Math.floor(1000 / 30)
    let lastTime: number = Date.now()
    function render() {
        const newTime: number = Date.now()
        const delay: number = newTime - lastTime
        /*point.deplace(delay)
        grille.lanceRayons( point.x, point.y, point.angle )
        grille.dessine()
        point.dessine()
        view3D.dessine()
        */
        //console.log(delay)
        lastTime = newTime
    }
    setInterval(render, delay)
}

init()

window.addEventListener("keyup", (evt: KeyboardEvent) => {
    switch (evt.key) {
        case "ArrowUp": console.log("ok"); break;
        case "ArrowDown": console.log("ok"); break;
        case "ArrowLeft": console.log("ok"); break;
        case "ArrowRight": console.log("ok"); break;
    }
    //evt.preventDefault()
})
window.addEventListener("keydown", (evt: KeyboardEvent) => {
    switch (evt.key) {
        case "ArrowUp": console.log("ok"); break;
        case "ArrowDown": console.log("ok"); break;
        case "ArrowLeft": console.log("ok"); break;
        case "ArrowRight": console.log("ok"); break;
    }
    //evt.preventDefault()
})