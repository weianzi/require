require.config({
    baseUrl: 'modules/',
    paths: {
        zepto: "../libs/zepto.min",
        lazyload: "../libs/lazyload"
    },
    shim: {
        zepto: {exports: "Zepto"},
        lazyload: {
            deps: ['zepto'],
            exports: "Zepto.lazyload"
        }

    }

});

require(["zepto", "lazyload", "hi", "indexGetData"], function ($, lazyload, hi, getData) {

    $("#box").html("OK");

    $(".lazyload").lazyload();

    var hhh = new hi.Hi();
    hhh.showMe();

    getData.getData1();
    getData.getData2();

});
