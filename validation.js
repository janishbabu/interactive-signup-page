$(document).ready(function()
{
    $('#close_eye').hide()

    $('#alert').hide()
    $('#alert2').hide()
    $('#alert3').hide()
    $('#alert4').hide()

    $('#form').submit(function(ev){

        ev.preventDefault()
        var pass=$("#password").val()
        const regexp=/(?=.*\d)(?=.*[a-z])(?=.*[@$!%*?&])(?=.*[A-Z]).{8,}/
        const result1=regexp.test(pass)
        console.log(result1)



        var name =$('#name').val()
        const regexp1=/^[A-Za-z ]{3,}$/
        const result=regexp1.test(name)
        console.log(result)

        var email=$("#email").val()
        const regexp4=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        const result4=regexp4.test(email)
        console.log(result4)

        var check=$('#age').val()


        var confirm =$('#confirm_password').val()


         if(result==true && pass==confirm && check!= 'DOB invalid' && result1 ==true && result4==true){
         window.location.assign("https://www.cybrosys.com/");
         }
         else{

         }

        })
        $("#eye").mousedown(function(ev){
            $("#password").attr("type",'text');
            $("#confirm_password").attr("type",'text');
            $('#close_eye').show();
            $('#eye').hide()





        })
    $('#close_eye').mouseup(function(ev){
            $("#password").attr("type","password")
            $("#confirm_password").attr("type","password");
            $('#eye').show()
            $('#close_eye').hide()

       })

$("#dob").click(function(ev){
    var max=$("#dob").attr("max")
    var date=Date.now()
    $("#Dob").attr("max","date")
})




$("#dob").change(function(ev){


    var Dob  = $("#dob").val();
    var dob = new Date(Dob);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);
    var year = age_dt.getUTCFullYear();
    var diff1 = year - 1970;
    if(diff1 >= 0)
    {

        var age = Math.abs(year - 1970);
        $("#age").val(age);
    }
    else
    {

       $("#age").val('DOB invalid');
    }

})



$("#password").keyup(function(ev){
 var pass=$("#password").val()
 const regexp=/(?=.*\d)(?=.*[a-z])(?=.*[@$!%*?&])(?=.*[A-Z]).{8,}/
 const result1=regexp.test(pass)
 console.log(result1)
 if(result1==false){
     $("#alert").show()
 }
 else{
     $("#alert").hide()

 }
})
$('#name').keyup(function(ev){
        var name =$('#name').val()
        const regexp1=/^[A-Za-z ]{3,}$/
        const result=regexp1.test(name)
         if(result == true)
        {
            $('#alert2').hide()
        }
        else{
            $('#alert2').show()
        }
        })
$("#email").keyup(function(ev){
 var email=$("#email").val()
 const regexp4=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
 const result4=regexp4.test(email)
 console.log(result4)
 if(result4==false){
    $("#alert3").show()
    }
 else{
     $("#alert3").hide()

 }
 })
 $('#confirm_password').keyup(function(ev){
    var password=$('#password').val()
    var confirm =$('#confirm_password').val()
    if(password !=confirm)
        {
            $('#alert4').show()
        }
 else
 {
    $('#alert4').hide()
 }
})


})

