const { promises: fs } = require('fs');
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
            const fileInput = await driver.findElement(By.id('input-4'));

            await fileInput.sendKeys(filePath);
            await driver.findElement(By.className("btn btn-primary")).click();

            await driver.sleep(5000);

        } catch {
            console.log("❌ Erro no cenário 2");
        }

    } catch {
        console.log("❌ Erro durante os testes gerais.");
    } finally {
        await driver.quit();
    }
})();
