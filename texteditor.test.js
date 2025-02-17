const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');


(async function texteditor() {
    let options = new chrome.Options();
    options.addArguments('--no-sandbox');
    options.addArguments('--log-level=3');

    let driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();

    try {
        console.log("CENÁRIO 1: Editar texto com sucesso");
        try {
            await driver.get('https://demo.automationtesting.in/CKEditor.html');
            await driver.findElement(By.className, "cke_editable cke_editable_themed cke_contents_ltr cke_show_borders").sendKeys("Text test");
            await driver.findElement(By.className, "italic_btn").click()

            console.log("Texto teve as formatações aplicadas");

        } catch {
            console.log("❌ Erro no cenário 1");
        }

        console.log("CENÁRIO 2: Editar texto e formatação não ser aplicada");
        try {
            await driver.get('https://demo.automationtesting.in/CKEditor.html');
            await driver.findElement(By.className, "cke_editable cke_editable_themed cke_contents_ltr cke_show_borders").sendKeys("Text test");
            await driver.findElement(By.className, "italic_btn").click()

            console.log("Texto não teve as formatações aplicadas ");

        } catch {
            console.log("❌ Erro no cenário 2");
        }

        console.log("CENÁRIO 3: Adicionar texto e desfazer alterações via botão de desfazer");
        try {
            await driver.get('https://demo.automationtesting.in/CKEditor.html');
            await driver.findElement(By.className, "cke_editable cke_editable_themed cke_contents_ltr cke_show_borders").sendKeys("Text test");
            await driver.findElement(By.className, "cke_button_icon cke_button__undo_icon").click();

            console.log("Texto teve as alteracoes desfeitas apos clicar no botao de desfazer");

        } catch {
            console.log("❌ Erro no cenário 3");
        }


    } catch {
        console.log("❌ Erro durante os testes gerais.");
    } finally {
        await driver.quit();
    }
})();
