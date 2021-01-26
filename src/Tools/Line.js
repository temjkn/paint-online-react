import Tool from "./Tools";

export default class Line extends Tool{
    mouseDownHandler(e){
        this.mouseDown = true;
        this.currentX = e.pageX - e.target.offsetLeft;
        this.currentY = e.pageY - e.target.offsetTop;
        this.ctx.beginPath()
        this.ctx.moveTo(this.currentX, this.currentY )
        this.saved = this.canvas.toDataURL()
    }
    mouseMoveHandler(e){ //двигаю мышь с нажатой кнопкой
        if(this.mouseDown){
            this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop)
        }
    }
    draw(x,y){
        const img = new Image();
        img.src = this.saved //записал предыдущий снимок canvas, что-бы прямойгольник рисовался новый, а не поверх старого за один прием
        img.onload = () =>{ //слушатель события, отрабатывает момент когда изображение установилось
            this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height) //удаляет старый прямоугольник
            this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height) //вставляет предыдущий снимок canvas
            this.ctx.beginPath()
            this.ctx.moveTo(this.currentX, this.currentY)
            this.ctx.lineTo(x,y)
            this.ctx.stroke()
        }
    }
}