const ADMIN_PASSWORD = 'jqueryismyjam';
const ENTER_PASSWORD = 'Введите пароль доступа';
const CANCEL_BY_USER = 'Отменено пользователем!';
const ACCESS_IS_ALLOWED = 'Добро пожаловать!';
const ACCESS_DENIED= 'Доступ запрещен, неверный пароль!';
let message;

const userPassword = prompt(ENTER_PASSWORD, '')

if (ENTER_PASSWORD) {

 if (ENTER_PASSWORD===ADMIN_PASSWORD) {
    message = ACCESS_IS_ALLOWED;
 }
 else if (ENTER_PASSWORD!==ADMIN_PASSWORD) {
    message = ACCESS_DENIED;}} 


else {
    message = CANCEL_BY_USER;
    }
    

alert (message);

