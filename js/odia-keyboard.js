/*! Odia keyboard v0.1 | (c) Xtra Codes | xtracodes.com */

	var phoneticCharList = {
            "a":"@","i":"A","u":"C","e":"G","o":"I"
		};

	var getProperty = function (propertyName) {
			return phoneticCharList[propertyName];
		};

	jQuery(function($){
			
			/**
			* Enable Dragable functionality to keyboard
			*/
			var $draggable = $('.draggable').draggabilly();

			var writeAt=1;
			
			$(document).find('.odia_char_input').keypress(function(evt){
				
				var keychar = String.fromCharCode(event.which);
				var ch = getProperty(keychar);
				/* console.log(keychar+"==evt.which=="+evt.which); */
		        if(ch!=undefined && ch!=""){		        	
		            $(this).val($(this).val()+ch);
		            evt.preventDefault();
		        }
		    });
			
			
			 $('.switch_charblock').on('click', function() {
				 
				    var divA =  $('#commonchar_block');
					var divB =  $('#yuktakshyara_block');
					
				 	if( $(divA).is( ':visible' ) ){
						
				 		$(divA).hide();
				 		$(divB).show();
					}
				 	else
				 	{
				 		$(divA).show();
				 		$(divB).hide();
				 	}
				 
			 });
			 $('.odia_kb').on('click', function() {
				  var eleid = $(this).attr("id");
				   if(eleid=="odia_fathername_kb")
					   writeAt=2;
				   else
					   writeAt=1;
				  
			    if($(this).hasClass('selected')) {
			      deselect($(this));               
			    } else {
			      $(this).addClass('selected');
			      $('.pop').slideFadeToggle();
			      
			     // $('.keyboard').css({'top':e.pageY-300,'left':e.pageX+50, 'position':'absolute', 'border':'1px solid black', 'padding':'5px'});
			    }
			    return false;
			  });

			  $('.close').on('click', function() {
			    deselect($('.odia_kb'));
			    return false;
			  });


			  	
			  $(".phonetic_keychar").on('click',function(){
					var char_typed = $(this).html();
					console.log("=="+$(this).hasClass('spacebar'));
					if(!$(this).hasClass('spacebar') && $(this).hasClass('omitchar')  ) 
						return;
					if($(this).hasClass('spacebar'))
					{
						char_typed= " ";
					}
					else
					{
						char_typed = char_typed.replace("&#x25cc;","");
						char_typed = char_typed.replace("◌","");
					}
					
					/* if($(this).hasClass('dotcircle'))
					char = char.substr(1); */					
				
					var fieldid="odia_name";				
					if(writeAt==2)
						fieldid="odia_fathername";
					
					var cur_val = $("#"+fieldid).val();
					
					
					//console.log("="+char_typed+"=");
					
					$("#"+fieldid).val(cur_val+char_typed);
				});

				$(".backspace").on('click',function(){	
					var fieldid="odia_name";				
					if(writeAt==2)
						fieldid="odia_fathername";
					
					var cur_val = $("#"+fieldid).val();
					cur_val = cur_val.slice(0,-1);
					$("#"+fieldid).val(cur_val);
				});
				
				
				
		});
		
		
		function deselect(e) {
			  $('.pop').slideFadeToggle(function() {
			    e.removeClass('selected');
			  });    
			}

		$.fn.slideFadeToggle = function(easing, callback) {
		  return this.animate({ opacity: 'toggle', height: 'toggle' }, 'fast', easing, callback);
		};
		
		
		$(function(){
			
			$(".kbtheme_block li label").on('click', function(){
				
				var kbid = $(this).parent().attr('id');
				console.log("id="+kbid);
				if(kbid=="kbtheme1")
				{
					$(".keyboard").addClass('keyboard_theme1');
					$(".keyboard").removeClass('keyboard_theme2');
					$(".keyboard").removeClass('keyboard_theme3');
					
					$(".keyboard span").addClass('keyboard_key_theme1');
					$(".keyboard span").removeClass('keyboard_key_theme2');
					$(".keyboard span").removeClass('keyboard_key_theme3');
					
				}
				else if(kbid=="kbtheme2")
				{
					$(".keyboard").addClass('keyboard_theme2');
					$(".keyboard").removeClass('keyboard_theme1');
					$(".keyboard").removeClass('keyboard_theme3');
					
					$(".keyboard span").addClass('keyboard_key_theme2');
					$(".keyboard span").removeClass('keyboard_key_theme1');
					$(".keyboard span").removeClass('keyboard_key_theme3');
				}
				else if(kbid=="kbtheme3")
				{
					$(".keyboard").addClass('keyboard_theme3');
					$(".keyboard").removeClass('keyboard_theme1');
					$(".keyboard").removeClass('keyboard_theme2');
					
					
					$(".keyboard span").addClass('keyboard_key_theme3');
					$(".keyboard span").removeClass('keyboard_key_theme1');
					$(".keyboard span").removeClass('keyboard_key_theme2');
				}
				
				
			});
		});