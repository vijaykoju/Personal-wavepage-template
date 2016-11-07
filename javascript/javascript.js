//////////////////////////////////////////////////////////////////////////////////////
//This function open a new window to display the figures when figures are clicked.
function newWindow(url) {
        bookWindow = window.open(url, "SWLac", "width=540,height=360")
        bookWindow.focus()
    }
    
//////////////////////////////////////////////////////////////////////////////////////
//This fuction creates a drowing menu.
//Copyright 2006-2007 javascript-array.com
var timeout = 500;
var closetimer  = 0;
var ddmenuitem  = 0;
// open hidden layer
function mopen(id)
{   
    // cancel close timer
    mcancelclosetime();

    // close old layer
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';

    // get new layer and show it
    ddmenuitem = document.getElementById(id);
    ddmenuitem.style.visibility = 'visible';
}
// close showed layer
function mclose()
{
    if(ddmenuitem) ddmenuitem.style.visibility = 'hidden';
}
// go close timer
function mclosetime()
{
    closetimer = window.setTimeout(mclose, timeout);
}
// cancel close timer
function mcancelclosetime()
{
    if(closetimer)
    {
        window.clearTimeout(closetimer);
        closetimer = null;
    }
}
// close layer when click-out
document.onclick = mclose;

//////////////////////////////////////////////////////////////////////////////////////
//This function enables the togglemenu on the leftsection of my website.
//I used the javascript from the class website for this.
function toggleMenu(currMenu) {
            if (document.getElementById) {
                thisMenu = document.getElementById(currMenu).style
                if (thisMenu.display == "block") {
                    thisMenu.display = "none"
                }
                else {
                    thisMenu.display = "block"
                }
                return false
            }
            else {
                return true
            }
        }
        
//////////////////////////////////////////////////////////////////////////////////////
//This fuction uses AJAX technique to display my picture of the right section of my website when my name is clicked.
//I modified the code from the class website to fit into my website.
function initXMLHttpClient() {
   var xmlhttp;

    try {

            // Mozilla / Safari

            xmlhttp = new XMLHttpRequest();

        } catch (e) {

        // IE

        var XMLHTTP_IDS = new Array(

                'MSXML2.XMLHTTP.5.0',

                'MSXML2.XMLHTTP.4.0',

                'MSXML2.XMLHTTP.3.0',

                'MSXML2.XMLHTTP',

                'Microsoft.XMLHTTP' );

        var success = false;

        for (var i=0;i < XMLHTTP_IDS.length && !success; i++) {

            try {

                xmlhttp = new ActiveXObject(XMLHTTP_IDS[i]);

                success = true;

            } catch (e) {}

        }

        if (!success) {

            throw new Error('Unable to create XMLHttpRequest.');

        }

        }

    var self = xmlhttp;

    xmlhttp.onreadystatechange = function() {

        if (self.readyState == 4) {

            if (self.status == 200) {

                self.onComplete(self.responseText);

            }

            else {

                throw new Error('Loading Error: ['+req.status+'] '+req.statusText);

            }

        }

    }

    return xmlhttp;

}

//Displays my picture when my name is clicked.

function test() {

  var req = initXMLHttpClient();

     req.onComplete = function(text) {

    document.getElementById('middlesection').innerHTML = text;

}

     req.open('GET','bsw.php',true);

     req.send(null);

}


//Displays on the text if my name is clicked while the picture is on display.
function test1() {

  var req = initXMLHttpClient();

     req.onComplete = function(text) {

    document.getElementById('middlesection').innerHTML = text;

}

     req.open('GET','bsw1.php',true);

     req.send(null);

}
//////////////////////////////////////////////////////////////////////////////////////

//Displays my picture when my name is clicked.

function test_cmtdisplay() {

  var req = initXMLHttpClient();

     req.onComplete = function(text) {

    document.getElementById('middlesection').innerHTML = text;

}

     req.open('GET','bsw.php',true);

     req.send(null);

}


//Displays on the text if my name is clicked while the picture is on display.
function test1_cmtdisplay() {

  var req = initXMLHttpClient();

     req.onComplete = function(text) {

    document.getElementById('rightsection_cmtdisplay').innerHTML = text;

}

     req.open('GET','myInfo2.html',true);

     req.send(null);

}
/////////////////////////////////////////////////////////////////////////////////////
