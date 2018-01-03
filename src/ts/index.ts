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

    public p() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('async TS');
            }, 1000)
        })
    }

    public async getTest() {
        const f = await this.p();
        console.log(f);
    }
}

const test = new Test();
test.getTest();