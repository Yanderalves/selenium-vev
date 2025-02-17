const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


(async function loginTests() {
    let options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--log-level=3');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log("CENÁRIO 1: Realizar Upload de arquivo");
        try {
            const filePath = path.resolve(__dirname, 'filetest.txt');
            const fileInput = await driver.findElement(By.id('input-4'));

            await fileInput.sendKeys(filePath);
            await driver.findElement(By.xpath("//*[@title='Upload selected files']")).click();

            const successMessage = await driver.findElement(By.id('res')).getText();
            console.log("Mensagem após upload:", successMessage);


        } catch {
            console.log("❌ Erro no cenário 1");
        }

        console.log();


    } catch {
        console.log("❌ Erro durante os testes gerais.");
    } finally {
        await driver.quit();
    }
})();


const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


(async function loginTests() {
    let options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--log-level=3');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log("CENÁRIO 1: Realizar Upload de arquivo");
        try {
            const filePath = path.resolve(__dirname, 'filetest.txt');
            const fileInput = await driver.findElement(By.id('input-4'));

            await fileInput.sendKeys(filePath);
            await driver.findElement(By.xpath("//*[@title='Upload selected files']")).click();

            const successMessage = await driver.findElement(By.id('res')).getText();
            console.log("Mensagem após upload:", successMessage);


        } catch {
            console.log("❌ Erro no cenário 1");
        }

        console.log("CENÁRIO 2:Realizar Upload de arquivo (falha no diretório)");
        try {
            const filePath = path.resolve(__dirname, 'filetest.txt');

            const message = await driver.findElement(By.id('res')).getText();
            console.log("Nenhum arquivo selecionado");

        } catch {
            console.log("❌ Erro no cenário 2");
        }


    } catch {
        console.log("❌ Erro durante os testes gerais.");
    } finally {
        await driver.quit();
    }
})();
