// хранит состояние и логику состояния
// связанное с инструментом (толщина,активный инструмент)

const { makeAutoObservable } = require("mobx");

class ToolState {
    tool = null
    constructor(){
        makeAutoObservable(this) //данные хранимые в классе становятся отслеживаемыми
    }

    setTool(tool){
        this.tool = tool //сохраняю текущий инструмент
    }
}

export default new ToolState();