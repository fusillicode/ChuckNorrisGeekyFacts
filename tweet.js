
function tweet(args) {
  openPopUp(getPopUp(args));
};

function getPopUp(args) {
  defaults = {
    'message' : '',
    'url'     : window.location.href,
    'height'  : 450,
    'width'   : 550,
    'top'     : $(window).height()/2 - 225,
    'left'    : $(window).width()/2
  };
  var popUp = $.extend(defaults, args);
  popUp.message = prepareMessage({'message' : popUp.message});
  return popUp;
}

function prepareMessage(args) {
  defaults = {
    'tweetLengthLimit'            : 140,
    'tweetUrlLengthLimitForHTTP'  : 22,
    'tweetUrlLengthLimitForHTTPS' : 23,
    'numberOfSpaceBeforeUrl'      : 1,
    'trimString'                  : '...'
  };
  args.customs = $.extend(defaults, args.customs);
  args.customs.tweetUrlLengthLimit = window.location.protocol === "https:" ?
                                     args.customs.tweetUrlLengthLimitForHTTPS :
                                     args.customs.tweetUrlLengthLimitForHTTP;
  args.customs.tweetTextLengthLimit = args.customs.tweetLengthLimit -
                                      args.customs.tweetUrlLengthLimit -
                                      args.customs.numberOfSpaceBeforeUrl -
                                      args.customs.trimString.length;
  var message = args.message.substring(0, args.customs.tweetTextLengthLimit) +
                (args.customs.tweetTextLengthLimit <= args.message.length ?
                  trimString :
                  '');
  return encodeURIComponent(message);
}

function openPopUp(popUp) {
  window.open('http://twitter.com/share?url=' + popUp.url +
              '&text=' + popUp.message +
              '&',
              'twitterwindow',
              'height=' + popUp.height +
              ', width=' + popUp.width +
              ', top=' + popUp.top +
              ', left=' + popUp.left +
              ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
}


