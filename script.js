$("#email").focus(function(){
  $("#cuboid form").addClass("ready");
})

$("#email").blur(function(){

  if($(this).val()=="")
    $("#cuboid form").removeClass("ready");
})

$("#email").keyup(function(){
  $(".submit-icon").toggleClass("active",$(this).val().length>0);
})

$("#cuboid form").submit(function(){
  $(this).removeClass("ready").addClass("loading");
  setTimeout(complete,4000);
  return false;
})

function complete(){
  $("#cuboid form").removeClass("loading").addClass("complete");
}
$(".reset-icon").click(function(){
  $("#cuboid form").removeClass("complete");
})