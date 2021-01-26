import toolState from "../store/toolState"

export default class Tool{
    constructor(canvas){
        this.canvas = canvas //ссылка на canvas
        this.ctx = canvas.getContext('2d') // контекст, позволяет рисовать линии-фигуры
        this.ctx.lineWidth = toolState.lineWidth
        this.ctx.strokeStyle = toolState.strokeColor
        this.ctx.fillStyle = toolState.fillColor
        this.destroyEvents() //удаляю предыдущий инструмент
        this.listen() //вызываю, чтобы начал слушать сразу после создания

    }
    set fillColor(color) {
        this.ctx.fillStyle = color
    }
    set strokeColor(color) {
        this.ctx.strokeStyle = color
    }
    set lineWidth(width) {
        this.ctx.lineWidth = width
    }

    listen(){ //слушатели событий мыши на canvas
        this.canvas.onmouseup = this.mouseUpHandler.bind(this)
        this.canvas.onmousedown = this.mouseDownHandler.bind(this)
        this.canvas.onmousemove = this.mouseMoveHandler.bind(this)
    }
    destroyEvents(){
        this.canvas.onmouseup = null
        this.canvas.onmousedown = null
        this.canvas.onmousemove = null
    }

    mouseUpHandler(e){ //отпустил кнопку мыши
        this.mouseDown = false // слежу занажатием кнопки мыши
    }
    mouseDownHandler(e){ //нажал кнопку мыши
        this.mouseDown = true
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.ctx.beginPath()
        this.ctx.moveTo(this.startX, this.startY)
        this.saved = this.canvas.toDataURL() //снимок canvas
    }

}