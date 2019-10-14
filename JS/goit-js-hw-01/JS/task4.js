let credits =23580;
const pricePerDroid = 3000;
let howMuchDroid = prompt ('Какое количество вы желаите приобрести ?' );




if (howMuchDroid){
    howMuchDroid = Number(howMuchDroid );

    if(howMuchDroid){

        const price = howMuchDroid * pricePerDroid;
        if(price > credits){
            console.log('Недостаточно средств на счету!')
        }
        else {
            credits= credits - price;
            console.log(
                `Вы купили ${howMuchDroid} дроидов, на счету осталось ${credits} кредитов.`
              );
        }}
        
        
}
else {
    console.log('Отменено пользователем!');
}  
