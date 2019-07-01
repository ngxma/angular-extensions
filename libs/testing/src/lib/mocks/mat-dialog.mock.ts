import {
    MockMatDialogRef,
} from './mat-dialog-ref.mock';

export class MockMatDialog {
    public open: jest.Mock<{}>;

    constructor() {
        this.open = jest.fn(() => new MockMatDialogRef());
    }
}
