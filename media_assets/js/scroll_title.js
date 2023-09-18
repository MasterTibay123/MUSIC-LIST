window.onload = function(){
				var t = document.title;
				var i = 1;

				function scrollTitle () {
					var len = document.title.length;
					if(len == 0){
						i = 0;
					}
					document.title = t.substring(i, t.length);
					i++;
					setTimeout(scrollTitle, 1000);
				};

				scrollTitle();
			};