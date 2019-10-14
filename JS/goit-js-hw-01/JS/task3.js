const ADMIN_PASSWORD = 'jqueryismyjam';
const userPassword = prompt ('Введите пароль доступа');
let message;

if (userPassword) {

 if (userPassword===ADMIN_PASSWORD) {
     message = ('Добро пожаловать!');
 }
 else if (userPassword!==ADMIN_PASSWORD) {
        message = ('Доступ запрещен, неверный пароль!');}} 


else {
        message = ('Отменено пользователем!');
    }
    

alert (message);

