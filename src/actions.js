
const ACTIONS = {

    addDot: function() {
        let myCanvas = getElementById('myCanvas')
        let ctx = myCanvas.getContext('2d')
        let canvasLocation = myCanvas.getBoundingClientRect()

        const x = event.clientX - canvasLocation.left
        const y = event.clientY - canvasLocation.top

        ctx.fillRect(x, y, 5, 5)
    }
}

export default ACTIONS
