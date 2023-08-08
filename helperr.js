const mysql=require('mysql2')

const genBillData = require('./index.js')


const conn=mysql.createConnection({

    host:"localhost",

    user:"root",

    password:"admin",

    database:"Electricity"

})

 

conn.connect((err)=>{

    if(err){

        console.log("Error connecting Mysql",err.message)

    }

    else{

        console.log('Mysql connected')

    }

})

 

const generateBill=(data,callBack)=>{

   

    let flag;
    
    

    for(let i=0;i<data.length;i++){


            table_name="bill_info";

            column_name='bill_id,user_id,meter_num,bill_generated_date ,bill_due_date ,consumption_units ,amount_due ,paid_status ,paid_date';

            values=`'${data[i].bill_id}',${data[i].user_id},${data[i].meter_num},'${data[i].bill_generated_date}','${data[i].bill_due_date}',${data[i].consumption_units},${data[i].amount_due},${data[i].paid_status},'${data[i].paid_date}'`


   

        const genBill=`INSERT INTO ${table_name} (${column_name})VALUES (${values})`

        // console.log(genBill)

        conn.query(genBill,(err,result)=>{

            if(err){
                flag=false;
                console.log('err inserting table',err.message);

            }else{
                console.log('data inserted');

                // callBack(1)

            }

        })

    }
    if(flag){
        callBack(1)
    }
    else{
        callBack(0)
    }

}

 

module.exports={generateBill}