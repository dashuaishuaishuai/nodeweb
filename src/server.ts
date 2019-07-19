import App from './app';
// const app = new App();
// app.start();

(async () => {
    await new App().start();
    if (module.hot) {
        module.hot.accept('./app.ts', async function () {
            console.log('[HMR] ready for restart application...');
            console.log('[HMR] shutdown outdated application');
            await new App().shutdown();
            console.log('[HMR] loading new application module');
            console.log('[HMR] startup new application\n');
            // await new App().start();
        })
    }

    // 进程事件的监听
    process.on('uncaughtException', error => { // 未捕获的异常事件
        console.log("[App] 发现一个未处理的异常: ", error);
    }).on('unhandledRejection', (reason, p) => { // 未处理的rejection事件
        console.log("[App] 发现一个未处理的rejection: ", p, "原因: ", reason);
    });
})();

