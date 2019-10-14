"use strict";

const country = prompt ('В ведите название страны ...');
let priseDeliveri;

if (country) 
{
    switch (country.toLowerCase())
    {
        case "китай":
        priseDeliveri = 100;
        break;
        case "чили":
        priseDeliveri = 250;
        break;
        case "австрия":
        priseDeliveri = 170;
        break;
        case "индия":
        priseDeliveri = 80;
        break;
        case "ямайка":
        priseDeliveri = 120;
        break;
        default:
        alert('В вашей стране доставка не доступна');
    }
    if (priseDeliveri) {
        console.log
        (`Доставка в ${country.toLowerCase()} будет стоить ${priseDeliveri} кредитов`);}
}
else
{
    console.log('Отменено пользователем!');
}