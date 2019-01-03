export class MockMatDialog {
    public open: jest.Mock<{}>;
    public selectSnapshot: jest.Mock<{}>;
    public select: jest.Mock<{}>;
    public selectOnce: jest.Mock<{}>;
    public reset: jest.Mock<{}>;

    constructor() {
        this.open = jest.fn();
    }
}
