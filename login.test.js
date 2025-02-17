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
        console.log("CENÁRIO 1: Realizar login com credenciais inválidas");
        try {
            await driver.get('https://demo.automationtesting.in/SignIn.html');
            await driver.findElement(By.css("input[placeholder='E mail']")).sendKeys('1223');
            await driver.findElement(By.css("input[placeholder='Password']")).sendKeys('1223');
            await driver.findElement(By.id('enterbtn')).click();

            await driver.wait(until.elementLocated(By.id("errormsg")), 5000);
            console.log("✔ Mensagem de erro exibida para credenciais inválidas");
        } catch {
            console.log("❌ Falha no cenário 1.");
        }

        console.log("CENÁRIO 2: Realizar login com credenciais Válidas");
        try {
            await driver.get('https://demo.automationtesting.in/SignIn.html');
            await driver.findElement(By.css("input[placeholder='E mail']")).sendKeys('email@valid.com');
            await driver.findElement(By.css("input[placeholder='Password']")).sendKeys('12345678');
            await driver.findElement(By.id('enterbtn')).click();

            await driver.wait(until.elementLocated(By.id("successmsg")), 5000);
            console.log("✔ Login realizado com sucesso");
        } catch {
            console.log("❌ Falha no cenário 2.");
        }

        console.log("CENÁRIO 3: Login com email no formato inválido");
        try {
            await driver.get('https://demo.automationtesting.in/SignIn.html');
            await driver.findElement(By.css("input[placeholder='E mail']")).sendKeys('1223');
            await driver.findElement(By.css("input[placeholder='Password']")).sendKeys('1223');
            await driver.findElement(By.id('enterbtn')).click();

            await driver.wait(until.elementLocated(By.id("errormsg")), 5000);
            console.log("✔ Mensagem exibida para email inválido");
        } catch {
            console.log("❌ Falha no cenário 3.");
        }

        console.log("CENÁRIO 4: Campos obrigatórios vazios");
        try {
            await driver.get('https://demo.automationtesting.in/SignIn.html');
            await driver.findElement(By.id('enterbtn')).click();

            await driver.wait(until.elementLocated(By.xpath("//*[text()='Email é obrigatório']")), 5000);
            await driver.wait(until.elementLocated(By.xpath("//*[text()='Senha é obrigatória']")), 5000);
            console.log("✔ Mensagens exibidas para campos obrigatórios");
        } catch {
            console.log("❌ Falha no cenário 4.");
        }

    } catch {
        console.log("❌ Erro durante os testes gerais.");
    } finally {
        await driver.quit();
    }
})();
