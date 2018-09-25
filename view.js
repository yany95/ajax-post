function button_onclick(){
    var id=$('#ID').val();
    var ps=$('#PS').val();
    var st = false;
    $(function(){
        $.ajax({
            type:'get',
            url:'http://localhost:3000/user',
            dataType:"json",
            async:false,
            success:function (data){         
                for(i=0;i<data.length;i++){
                    if(id==data[i].id&&ps==data[i].ps){
                        var st = true;
                    }
                }
                if(st){
                    console.log("login in success");
                }else{
                    console.log("config your id or password");
                }
            }
           
        });
        
    });
    
}

