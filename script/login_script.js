function check1(x) {
    if(x==0){
        document.getElementById("radio_btn2").style.display = "none";
        document.getElementById("radio_btn1").style.display = "";
    }
    else{
        document.getElementById("radio_btn1").style.display = "none";
        document.getElementById("radio_btn2").style.display = "";
    }
}

/*
function check2(x) {
    document.getElementById("radio_btn1").style.display = "none";
    document.getElementById("radio_btn2").style.display = "";
}*/


/*$(document).ready(function(){

    $('#radio_btn1').click(function(){
        // action goes here!!
        $('.register').css("display", "none");
        $('.login').css("display", "contents");
      });
    
    $('#radio_btn2').click(function(){
        // action goes here!!
        $('.login').css("display", "none");
        $('.register').css("display", "contents");
    });

    /*
    function login_btn(){
        if($('input[id="radio_btn1"]:checked').val()!=NULL){
            alert("This is radio button 1");
            $('.register').css("display", "none");
        }
        else if($('input[id="radio_btn2"]:checked').val()!=NULL){
            //alert("This is radio button 2");
            $('.login').css("display", "none");
        }
        else if($('input[id="radio_btn1"]:checked').val()==NULL){
            //alert("This is radio button 1");
            $('.login').css("display", "none");
        }
        else if($('input[id="radio_btn2"]:checked').val()==NULL){
            //alert("This is radio button 2");
            $('.register').css("display", "none");
        }
        else{
            ;
        }
    }
});*/