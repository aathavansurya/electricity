function Genatare(){
    st_date=document.getElementById('st_date').value
    end_date=document.getElementById('end_date').value
    console.log(st_date);
    console.log(typeof(st_date));

    $.post('/generate',{
        start:st_date,
        end :end_date
    },(data)=>{
        console.log(data)

        console.log('success')
    }
    ).error=(err)=>{
    


    }
}