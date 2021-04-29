class Task {
    constructor() {
        this._question = '';
        this._ansvers = new Array();
        this._indexRightAnsver = 0;
    }

    get question() {
        return this._question;
    }
    get ansvers() {
        return this._ansvers;
    }
    get indexRightAnsver(){
        return this._indexRightAnsver;
    }
    set question(value) {
        this._question = value;
    }
    set ansvers(value){
        this._ansvers = value;
    }
    set indexRightAnsver(value){
        this._indexRightAnsver = value;
    }
}


