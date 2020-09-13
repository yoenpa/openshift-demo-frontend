var webdriver = require('selenium-webdriver');
 
 var driver = new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.chrome()).
    build();
  
 driver.get('http://localhost:4200');
 driver.findElement(webdriver.By.name('userName')).sendKeys('Victor');
 driver.findElement(webdriver.By.name('contrasenia')).sendKeys('123456');
 driver.findElement(webdriver.By.name('login')).click();
 driver.quit();