$(".phone_in").hover(function(){
	$("#down_app").show();
//	$('#top_phone_in').find('a').addClass('active')
},function(){
	$("#down_app").hide();
//	$('#top_phone_in').find('a').addClass('active')
})
$("#search_in").focus(function(){
	if(this.value != ""){
		this.value = "";
	}
})
$("#search_in").blur(function(){
	if(this.value == "" || this.value == "请输入商品名称或货号" ){
		this.value = "请输入商品名称或货号";
	}
})
$(".search_btn").click(function(){
	$("document.keyform").submit();
})
$('.shopCar').hover(function () {
    $('.car-info').show();
//  $('.cart_bag').addClass('active');
}, function () {
    $('.car-info').hide();
//  $('.cart_bag').removeClass('active');
});
$("#lastLi_dl").hover(function () {
    if ($(this).find('#lastLi_dd').is(":hidden")) {
        $(this).find('#lastLi_dt').find('p').addClass('p_hover');
        $(this).find('#lastLi_dd').show();
    }
}, function () {
    if ($(this).find('#lastLi_dd').is(":visible")) {
        $(this).find('#lastLi_dd').hide();
        $(this).find('#lastLi_dt').find('p').removeClass('p_hover');
    }
});


$(".fly_user").hover(function(){
	$(this).find(".sidebarcom_hover").css("right",36)
},function(){
	$(this).find(".sidebarcom_hover").css("right",-325)
})
