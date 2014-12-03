/*************************************************************************************
	AUTHOR
	AHCHIENONG
	
	DISCLAIMERS
	THIS PIECE OF CODE IS NOT INTENDED TO CRASH ANY SYSTEM(S),
	IT IS WRITTEN TO POKE FRIENDS MORE EFFECTIVELY. RUN AT YOUR OWN RISK. (RUN~) XD
	IT IS TESTED WORKING IN CHROME.
	ALSO TAKE NOTE THAT RUNNING THIS CONTINUOUSLY MAY COST YOU LOTS OF MEMORIES (RAM)!

	
	FEATURES
	THIS PIECE OF JAVASCRIPTS WILL LOOK FOR POKES[NOUN]	EVERY 5 SECONDS[DEFAULT VALUE].

	
	INSTRUCTIONS
	(1) ACCESS FACEBOOK POKES PAGE: https://www.facebook.com/pokes/ ^
	(2) OPEN YOUR CHROME BROWSER CONSOLE ( SHORTCUTS: PRESS <F12> )
	(3) PASTE THE FOLLOWING CODE ON THE CONSOLE AND PRESS <ENTER>
	(4) VOILÀ! IT DOES THE POKES FOR YOU :)
	
	
	NOTES
	^ YOU WILL NEED TO LOGIN TO YOUR FACEBOOK ACCOUNT IN THE SAME BROWSER
	  FOR LOADING THE LISTS OF POKES (OBVIOUSLY).
	
*************************************************************************************/

var $ = $$;
var schedule_in_seconds = 5;
var toPoke;
// Actual Poke Function (By checking specific target, in this case those pokes you)
function doPoke(){
	toPoke = $("#poke_live_new .selected , [id^=poke_live_item_] .selected");
	Array.prototype.forEach.call(toPoke, function(child) {
		child.click();
	});
	toPoke = [];
}
// Scheduler code
setInterval("doPoke()", schedule_in_seconds*1000);
