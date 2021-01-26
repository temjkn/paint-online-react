import Tool from "./Tools"

export default class Rect extends Tool{
    mouseMoveHandler(e){
        if(this.mouseDown){
            let currentX = e.pageX - e.target.offsetLeft
            let currentY = e.pageY - e.target.offsetTop
            let height = currentY - this.startY
            let width = currentX - this.startX
            this.draw(this.startX, this.startY, width, height)
        }
    }
    draw(x,y,width, height){
        const img = new Image();
        img.src = this.saved //записал предыдущий снимок canvas, что-бы прямойгольник рисовался новый, а не поверх старого за один прием
        img.onload = () =>{ //слушатель события, отрабатывает момент когда изображение установилось
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //удаляет старый прямоугольник
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height) //вставляет предыдущий снимок canvas
            this.ctx.beginPath()
            this.ctx.rect(x,y,width, height)
            this.ctx.fill()
            this.ctx.stroke()
        }
    }
}