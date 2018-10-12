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