interface IModelTest {
    foo: string;
    bar: number;
}

export class Test {
    private model: IModelTest = {
        foo: 'sdsdsd',
        bar: 123
    };

    constructor() {
        console.log('ts go');
    }

    public getModel(): IModelTest {
        return this.model;
    }
}

const test = new Test();
console.log(test.getModel());