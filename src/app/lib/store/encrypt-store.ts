import {makeAutoObservable} from 'mobx'


interface IEncryptStore {
    text: string
    key: string
    output: string

}

class EncryptStore implements IEncryptStore {
    text = ''
    key = ''
    output = ''


    constructor() {
        makeAutoObservable(this)
    }

    setText(val: string) {
        this.text = val
    }

    setKey(val: string) {
        this.key = val
    }

    setOutput(val: string) {
        this.output = val
    }


}

export default new EncryptStore()
