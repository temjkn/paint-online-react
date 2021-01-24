import Tool from "./Tools"

export default class Circle extends Tool{
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
        this.startX = e.pageX - e.target.offsetLeft
        this.startY = e.pageY - e.target.offsetTop
        this.saved = this.canvas.toDataURL() //снимок canvas
    }
    mouseMoveHandler(e){
        if(this.mouseDown){
            let currentX = e.pageX - e.target.offsetLeft
            let currentY = e.pageY - e.target.offsetTop

            let height = currentY - this.startY
            let width = currentX - this.startX

            let radius = Math.sqrt(width**2 + height**2)

            this.draw(currentX, currentY, radius) //рисую со смещением центра
            // this.draw(this.startX, this.startY, radius)
        }
    }
    draw(x,y,radius){
        const img = new Image();
        img.src = this.saved //записал предыдущий снимок canvas, что-бы прямойгольник рисовался новый, а не поверх старого за один прием
        img.onload = () =>{ //слушатель события, отрабатывает момент когда изображение установилось
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //удаляет старый прямоугольник
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height) //вставляет предыдущий снимок canvas

            this.ctx.beginPath()

            this.ctx.arc(x, y, radius, 0, 2 * Math.PI);
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}