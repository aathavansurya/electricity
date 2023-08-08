const users= require('./user.js')
const helper=require('./helperr.js')
const functions=require('./function.js')
const { log } = require('console')

 

// const genBillData=()=>{

//     const bill_data=[]

 

//         for(let i=0;i<users.length;i++){

//             let meter=Math.floor(Math.random()*100000000)

//             for(let j=1;j<32;j++){

//                 let day=5,consumption=Math.floor(Math.random()*1000),random=functions.getRandomZeroOrOne()

//                 const data={

//                     bill_id:functions.generateRandomBillNumber(),

//                     user_id:users[i].user_id,

//                     meter_num:meter,

//                     bill_generated_date:`${functions.genYear(j)}-${functions.genMonth(j)<10?'0'+functions.genMonth(j):functions.genMonth(j)}-${day<10?'0'+day:day}`,

//                     bill_due_date:`${functions.genYear(j+3)}-${functions.genMonth(j+3)<10?'0'+functions.genMonth(j+3):functions.genMonth(j+3)}-${day<10?'0'+day:day}`,

//                     consumption_units:consumption,

//                     amount_due:functions.calculateElectricityBill(consumption),

//                     paid_status:random?0:1,

//                     paid_date:random?functions.getRandomDateInRange(functions.genYear(j),functions.genMonth(j),functions.genMonth(j+8)):'not paid'

//                 }

//                 bill_data.push(data)

//             }

//         }

//         return bill_data

// }

// ------------------------------

const genBillData_1=(req,res)=>{

    const bill_data_1=[]
    st_date=req.body.start
    end_date = req.body.end
    st_month=parseInt(st_date.slice(5,7))
    st_year=parseInt(st_date.slice(0,4))
    // end_year=parseInt(end_date.slice(0,4))
    end_month=parseInt(end_date.slice(5,7))

    months_to_generate =parseInt(functions.monthsBetweenDates(st_date,end_date))+parseInt(st_month)
   
    console.log("months to generate",months_to_generate,st_month);
     

         for(let j=st_month;j<months_to_generate+1;j++){

            let meter=Math.floor(Math.random()*100000000)

            for(let i=0;i<users.length;i++){

                let day=5,
                consumption=Math.floor(Math.random()*1000),
                random=functions.getRandomZeroOrOne()

                const startDate=`${functions.genYear_1(j,st_year)}-${functions.genMonth(j)<10?'0'+functions.genMonth(j):functions.genMonth(j)}-${day<10?'0'+day:day}`

                const endDate=`${functions.genYear_1(j+6,st_year)}-${functions.genMonth(j+6)<10?'0'+functions.genMonth(j+6):functions.genMonth(j+6)}-${day<10?'0'+day:day}`
              
                const data={

                    bill_id:functions.generateRandomBillNumber(),

                    user_id:users[i].user_id,

                    meter_num:meter,

                    bill_generated_date:`${functions.genYear_1(j,st_year)}-${functions.genMonth(j)<10?'0'+functions.genMonth(j):functions.genMonth(j)}-${day<10?'0'+day:day}`,

                    bill_due_date:`${functions.genYear_1(j+1,st_year)}-${functions.genMonth(j+1)<10?'0'+functions.genMonth(j+1):functions.genMonth(j+1)}-${day<10?'0'+day:day}`,

                    consumption_units:consumption,

                    amount_due:functions.calculateElectricityBill(consumption),

                    paid_status:random?true:false,

                    paid_date:random?functions.generateDateRange(startDate,endDate):'not paid'

                }

                bill_data_1.push(data)

            }

           

        }    
    
        
        helper.generateBill(bill_data_1,(result)=>{
            if(result){
                res.send('good')
            }
        })

}

module.exports={genBillData_1}