$(function() {
	$('.pinglun-default').click(function() {

		//		debugger;
		$('.pinglun-text-box').click(function(event) {
			event.stopPropagation();
		});
		var odiv = $(this).parent().siblings('.pinglun-but-box')
		console.log(odiv)
		if($(this).parent().siblings('.pinglun-but-box').css('display') == 'none') {
			$(this).find("textarea[name=username]").attr('autofocus', 'autofocus');
			$(this).parent().siblings('.pinglun-but-box').css('display', 'block');
		} else {
			$(this).find("textarea[name=username]").removeAttr('autofocus');
			$(this).parent().siblings('.pinglun-but-box').css('display', 'none');
		}
	})
//		$("textarea").blur(function() {
//			$(this).parent('.pinglun-text-box').css('display', 'none');
//		})

	//评论方法
	$(".content-box").on("click", ".send-mess", function() {
		var promptMess = $('.prompt-mess')
		if($(".pinglun-text").val() != '') {
			$('.prompt-mess').css('display', 'none');
			var myDate = new Date();
			//获取当前年
			var year = myDate.getFullYear();
			//获取当前月
			var month = myDate.getMonth() + 1;
			//获取当前日
			var date = myDate.getDate();
			var h = myDate.getHours(); //获取当前小时数(0-23)
			var m = myDate.getMinutes(); //获取当前分钟数(0-59)
			if(m < 10) m = '0' + m;
			var s = myDate.getSeconds();
			if(s < 10) s = '0' + s;
			var now = year + '-' + month + "-" + date + " " + h + ':' + m + ":" + s;
			//      var nowTime = parseInt(now);

			console.log(now)
			var userContentBox = $("<div class='pinglun-text-box'></div>"); // 创建的父元素div
			var userName = $("<span class='pinglun-text-box'>张三：</span>"); //创建的子元素span
			var userContent = $("<span class='user-review-content'></span>"); //创建的子元素span
			$('.review-content-box').append(userContentBox);
			userContentBox.append(userName);
			userContentBox.append(userContent);
			userContentBox.append("<div id='userTime'></div>");

			var textArea = $(".pinglun-text").val();
			$(this).parent().siblings('.review-content-box').children('.pinglun-text-box').children('#userTime').text(now);
			var userContentText = $(this).parent().siblings('.review-content-box').children('.pinglun-text-box').children('.user-review-content').text(textArea);
			$(".pinglun-text").attr("value", '');
			console.log(textArea)
		} else {
			$('.prompt-mess').show().delay(1000).fadeOut();
//			$('.prompt-mess').css('display','block');
			promptMess.text('内容不能为空');
			//$ ('div').show ().delay (3000).fadeOut ();
		}

	})
	//点赞方法
	//	   var n = 0;
	$('.pl-box').on('click', '.dianzan-default', function() {
		//		debugger;
		var giveNum = $('.dianzan-num');
		var praise_txt = parseInt(giveNum.text());
		//浏览量的增加开始
		var giveClicks = $('.liulanliang-number'); //拿到浏览的标签
		var praiseCont = parseInt(giveClicks.text()); //拿到浏览的标签取整
		praiseCont += 1;
		giveClicks.text(praiseCont)
		//浏览量的增加结束

		if($('.dianzan-default').hasClass('dianzan-old')) {
			$('.dianzan-default').removeClass('dianzan-old');
			$('.dianzan-default').addClass('dianzan-new');
			$('.dianzan-num').css('color', 'red')
			praise_txt += 1;
		} else {
			$('.dianzan-default').removeClass('dianzan-new');
			$('.dianzan-default').addClass('dianzan-old');
			$('.dianzan-num').css('color', '')
			praise_txt -= 1
		}
		giveNum.text(praise_txt)
	})
})