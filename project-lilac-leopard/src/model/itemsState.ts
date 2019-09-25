export default class ItemsState {
    items: Array<string>;

    constructor(items: Array<string>) {
        this.items = items;
    }

    clone(): ItemsState {
        return new ItemsState(this.items);
    }
}