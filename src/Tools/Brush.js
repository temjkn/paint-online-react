import Tool from "./Tools"

export default class Brush extends Tool{
    constructor(canvas){
        super(canvas);
        this.listen() //вызываю, чтобы начал слушать сразу после создания
    }
    listen(){ //слушатели событий мыши на canvas
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }

    mouseUpHandler(e){
        this.mouseDown = false // слежу занажатием кнопки мыши
    }
    mouseDownHandler(e){
        this.mouseDown = true
        this.ctx.beginPath()
        this.ctx.moveTo(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
    }
    mouseMoveHandler(e){
        if(this.mouseDown){
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x,y){
        this.ctx.lineTo(x,y)
        this.ctx.stroke()
    }
}