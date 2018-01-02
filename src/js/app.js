const css = import('../scss/app.scss');

const s = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(100500);
        }, 3000)
    })
};

const bar = async () => {
    const f = await s();
    console.log(f);
};
bar();