# Psychill



Psychill is a one click program embedded in the browser that automatically generates a random link to cool, ambient music. 
So that when you're studying or programming you don't have to dig through bookmarks or music sites looking for music to listen to. Just one click and the music starts playing in it's own tab. 

...so get to coding! \m/





Developers Diary:



early morning: 2017-30-7


Building a program that (hopefully) will be a Chrome Extension. 

The idea is that with one click it will open a tab and generate randomly selected music from an array of youtube links. 
While coding & studying it would be nice to quickly and easily be able to get some ambient music playing in a tab without really having to type anything. 

Just click an icon on the browser and music starts playing. (like the Adblock button or the Gdrive button/extension.)  



afternoon: 2017-30-7


Functions are now working properly. Each time the button is pushed a tab opens up and a random psychill mix starts playing. 
Need to make the background responsive and figure out how to make the whole thing a Chrome Extension.



evening: 2017-30-7


Everything is looking good and working well. And I got the 3 icons needed for the browser extension and have it installed in the browser. However Chrome seems to be blocking the javascript from running. So while it works as a stand-alone app in the browser, it's getting hung up as an extension. Will need more investigating as to how to get the javascript running in the extension the same way it does as a stand alone. 

...reading all the google developer docs atm to try and find the workaround. I keep reading if you put: 

 
 
 "permissions": [
 "tabs", "<all_urls>",
    "activeTab"
  ]
  


  ..in the manifest.json it should work. But...no,..it's not. New tabs aren't opening and I think it's because the javascript isn't running. Nothing happens when you click the button. The pop-up comes out of the browser displaying the button but nothing actually is happening when you click it. 
  
  ..will continue to research...
  
  
morning: 2017-31-7
  
  

Everything is now working as it should. The problem found is that the Chrome Browser will not allow any inline javascript to be embedded in the html. None. So things had to be rewritten so as to separate everything so that all javascript runs pure in a .js file with event listeners and the html file is purely html, using unique Id's to pass the button click event to javascript.  
  

morning: 2017-1-8

Some minor tweaks and changes. Added more music to the playlist also. 