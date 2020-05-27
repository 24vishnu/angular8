export class User {
    constructor(
        public email: string,
        public id: string,
        private _TOKEN: string,
        private _TOKENEXPIRATIONDATE: Date
    ) {}

    get token() {
        if (!this._TOKENEXPIRATIONDATE || new Date() > this._TOKENEXPIRATIONDATE) {
            return null;
        }
        return this._TOKEN;
    }
}
