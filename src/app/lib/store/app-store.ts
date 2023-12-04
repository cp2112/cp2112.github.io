import {makeAutoObservable} from 'mobx'


interface IAppStore {
    page: number

}

class AppStore implements IAppStore {
    page = 0


    constructor() {
        makeAutoObservable(this)
    }

    setPage(val: number) {
        this.page = val
    }


}

export default new AppStore()
