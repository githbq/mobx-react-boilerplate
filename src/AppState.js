import { observable } from 'mobx';

class AppState {
    @observable timer = 0;
    @observable text = 'null text'
    constructor() {
        setInterval(() => {
            this.timer += 1;
            this.text += 1;
        }, 1000);
    }

    resetTimer() {
        this.timer = '02333333333';
        this.text = 222
    }
}

export default AppState;