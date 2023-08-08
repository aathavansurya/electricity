const generateRandomBillNumber = () => {

    const pattern = 'INXXXXXXX';

    const length = pattern.length;

 

    // Function to generate a random uppercase letter or digit

    const randomChar = () => {

        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

        value = chars.charAt(Math.floor(Math.random() * chars.length))

        return value

    }

 

    // Generate random characters for the X characters in the pattern

    let randomChars = '';

    for (let i = 0; i < length - 2; i++) {

        randomChars += randomChar();

    }

 

    // Replace the X characters in the pattern with the random characters

    const billNumber = pattern.replace('XXXXXXX', randomChars);

    return billNumber;

};

 

const genMonth = (i) => {

    if (i <= 12) {

        return i;

    } else if (i > 12) {

        if (i % 12 === 0) {

            return 12;

        } else {

            return (i % 12);

        }

    }

};

 

// const genYear = (j) => {

//     if (j <= 12) {

//         return 2021;

//     } else if (j > 12 && j <= 24) {

//         return 2022;

//     } else if(j>24&&j<=36){

//         return 2023;

//     }

//     else{

//         return 2024

//     }

// };
const genYear_1 = (j,year) => {

    if (j <= 12) {

        return year;

    }else if(j%12==0){
        x =parseInt(j  / 12)
        return year+x-1
    }
     else {
        x = parseInt(j/12)
        return year+x
    }

}




 

// const calculateElectricityBill = (unitsConsumed) => {

//     let rate;

//     switch (true) {

//         case unitsConsumed >= 0 && unitsConsumed <= 50:

//             rate = 4.00;

//             break;

//         case unitsConsumed <= 100:

//             rate = 5.25;

//             break;

//         case unitsConsumed <= 200:

//             rate = 6.80;

//             break;

//         default:

//             rate = 7.65;

//     }

//     return rate * unitsConsumed;

// };
// --------------?
const calculateElectricityBill = (unitsConsumed) =>
{
    if(unitsConsumed<=50){
         value =unitsConsumed*4.00
         return value.toFixed(2)
    }
    else if(unitsConsumed<=100){
        value=200+((unitsConsumed-50)*5.25)
        return value.toFixed(2)
    }
    else if ( unitsConsumed<=200){
        value= (462.5+((unitsConsumed-100)*6.80))
        return value.toFixed(2)
    }else {
         value = 1142.5+(unitsConsumed-200)*7.65
         return value.toFixed(2)
    }
}

 

const getRandomZeroOrOne = () => Math.random() < 0.5;

 

 

 const generateDateRange=(startDate, endDate)=> {
    const new_st_date =new Date(startDate)
    const new_end_date = new Date(endDate)
    const dateRangeList = [];
    const currentDate = new Date(new_st_date);
  
    while (currentDate <= new_end_date) {
      dateRangeList.push(new Date(currentDate));
      currentDate.setDate(currentDate.getDate() + 1);
    }
    date =dateRangeList.map(data=>
      data.toISOString().slice(0, 10)
    )
    random =date.at(Math.floor(Math.random()*date.length))
     return `${random}`;
    }
  
 

  const  monthsBetweenDates=(date1, date2)=> {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    
    const monthsDiff = (d2.getFullYear() - d1.getFullYear()) * 12 + d2.getMonth() - d1.getMonth();
    
    return monthsDiff;
}

module.exports = {

    generateRandomBillNumber,

    genMonth,

    genYear_1,

    calculateElectricityBill,

    getRandomZeroOrOne,

    generateDateRange,

    monthsBetweenDates

}