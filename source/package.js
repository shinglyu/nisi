enyo.depends(
	"$lib/layout",
	"$lib/onyx",	// To theme Onyx using Theme.less, change this line to $lib/onyx/source,
	//"Theme.less",	// uncomment this line, and follow the steps described in Theme.less
	"$lib/mochi",
	//Non-enyojs libs
	"zepto.min.js",
	"localstoragedb.min.js",
	"OAuthSimple.js",
	//Common core
	"main.js",
	//Main App
	"App.css",
	"App.js"
);
