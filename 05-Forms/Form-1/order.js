class Order {
    constructor(date, place, trainName) {
        this._date = date;
        this._place = place;
        this._trainName = trainName;
    }
    get date() {
        return this._date;
    }
    get place() {
        return this._place;
    }
    get trainName() {
        return this._trainName;
    }
}