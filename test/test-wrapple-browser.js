(function () {
    'use strict';

    var assert = buster.assert,
        refute = buster.refute,
        wrap = window.wrapple,
        properties = [
            'addEventListener',
            'alert',
            'applicationCache',
            'blur',
            'cancelAnimationFrame',
            'captureEvents',
            'clearInterval',
            'clearTimeout',
            'clientInformation',
            'close',
            'closed',
            'confirm',
            'console',
            'constructor',
            'crypto',
            'devicePixelRatio',
            'dispatchEvent',
            'document',
            'eval',
            'event',
            'external',
            'find',
            'focus',
            'frameElement',
            'frames',
            'getComputedStyle',
            'getDefaultComputedStyle',
            'getMatchedCSSRules',
            'getSelection',
            'history',
            'indexedDB',
            'innerHeight',
            'innerWidth',
            'isPrototypeOf',
            'length',
            'localStorage',
            'location',
            'locationbar',
            'matchMedia',
            'menubar',
            'moveBy',
            'moveTo',
            'mozAnimationStartTime',
            'mozCancelAnimationFrame',
            'mozCancelRequestAnimationFrame',
            'mozIndexedDB',
            'mozInnerScreenX',
            'mozInnerScreenY',
            'mozPaintCount',
            'mozRequestAnimationFrame',
            'mozRequestOverfill',
            'name',
            'navigator',
            'offscreenBuffering',
            'onabort',
            'onafterprint',
            'onautocomplete',
            'onautocompleteerror',
            'onbeforeprint',
            'onbeforeunload',
            'onblur',
            'oncancel',
            'oncanplay',
            'oncanplaythrough',
            'onchange',
            'onclick',
            'onclose',
            'oncontextmenu',
            'oncuechange',
            'ondblclick',
            'ondevicelight',
            'ondevicemotion',
            'ondeviceorientation',
            'ondeviceproximity',
            'ondrag',
            'ondragend',
            'ondragenter',
            'ondragleave',
            'ondragover',
            'ondragstart',
            'ondrop',
            'ondurationchange',
            'onemptied',
            'onended',
            'onerror',
            'onfocus',
            'onhashchange',
            'oninput',
            'oninvalid',
            'onkeydown',
            'onkeypress',
            'onkeyup',
            'onlanguagechange',
            'onload',
            'onloadeddata',
            'onloadedmetadata',
            'onloadstart',
            'onmessage',
            'onmousedown',
            'onmouseenter',
            'onmouseleave',
            'onmousemove',
            'onmouseout',
            'onmouseover',
            'onmouseup',
            'onmousewheel',
            'onmozfullscreenchange',
            'onmozfullscreenerror',
            'onmozpointerlockchange',
            'onmozpointerlockerror',
            'onoffline',
            'ononline',
            'onpagehide',
            'onpageshow',
            'onpause',
            'onplay',
            'onplaying',
            'onpopstate',
            'onprogress',
            'onratechange',
            'onreset',
            'onresize',
            'onscroll',
            'onsearch',
            'onseeked',
            'onseeking',
            'onselect',
            'onshow',
            'onstalled',
            'onstorage',
            'onsubmit',
            'onsuspend',
            'ontimeupdate',
            'ontoggle',
            'ontransitionend',
            'onunload',
            'onuserproximity',
            'onvolumechange',
            'onwaiting',
            'onwebkitanimationend',
            'onwebkitanimationiteration',
            'onwebkitanimationstart',
            'onwebkittransitionend',
            'onwheel',
            'open',
            'openDatabase',
            'opener',
            'outerHeight',
            'outerWidth',
            'pageXOffset',
            'pageYOffset',
            'parent',
            'parseFloat',
            'parseInt',
            'performance',
            'personalbar',
            'postMessage',
            'print',
            'prompt',
            'propertyIsEnumerable',
            'releaseEvents',
            'removeEventListener',
            'requestAnimationFrame',
            'resizeBy',
            'resizeTo',
            'screen',
            'screenLeft',
            'screenTop',
            'screenX',
            'screenY',
            'scroll',
            'scrollBy',
            'scrollByLines',
            'scrollByPages',
            'scrollMaxX',
            'scrollMaxY',
            'scrollTo',
            'scrollX',
            'scrollY',
            'scrollbars',
            'self',
            'sessionStorage',
            'setInterval',
            'setTimeout',
            'speechSynthesis',
            'status',
            'statusbar',
            'stop',
            'styleMedia',
            'toLocaleString',
            'toString',
            'toolbar',
            'top',
            'webkitAudioContext',
            'webkitCancelAnimationFrame',
            'webkitCancelRequestAnimationFrame',
            'webkitIDBCursor',
            'webkitIDBDatabase',
            'webkitIDBFactory',
            'webkitIDBIndex',
            'webkitIDBKeyRange',
            'webkitIDBObjectStore',
            'webkitIDBRequest',
            'webkitIDBTransaction',
            'webkitIndexedDB',
            'webkitMediaStream',
            'webkitOfflineAudioContext',
            'webkitRTCPeerConnection',
            'webkitRequestAnimationFrame',
            'webkitRequestFileSystem',
            'webkitResolveLocalFileSystemURL',
            'webkitSpeechGrammar',
            'webkitSpeechGrammarList',
            'webkitSpeechRecognition',
            'webkitSpeechRecognitionError',
            'webkitSpeechRecognitionEvent',
            'webkitStorageInfo',
            'webkitURL',
            'window'
        ];


    buster.testCase('wrapple api', {
        'tearDown' : function () {
            wrap.reset();
        },

        'wrap method should wrap window properties': function () {
            var defaultFunctionMembers = [
                    'constructor',
                    'isPrototypeOf',
                    'length',
                    'name',
                    'propertyIsEnumerable',
                    'toLocaleString',
                    'toString'
                ],
                name,
                i;

            for (i = 0; i < properties.length; i++) {
                name = properties[i];

                // our wrap function comes with a few functions out of the box
                if (defaultFunctionMembers.indexOf(name) === -1) {
                    refute.isFunction(wrap[name], name);
                    wrap(name);
                    assert.isFunction(wrap[name]);
                    assert.same(wrap[name](), window[name], name);
                }
            }

            assert.equals(i, properties.length);
        },

        'wrap method should be idempotent' : function () {
            var name = 'location',
                func1, func2;

            refute.isFunction(wrap[name]);

            wrap(name);
            assert.isFunction(wrap[name]);
            func1 = wrap[name];

            wrap(name);
            func2 = wrap[name];

            assert.same(func1, func2);
        },

        'wrap method should return the wrapped property': function () {
            var name = 'location',
                prop = wrap(name);

            assert.same(prop, window[name]);
        },

        'reset method should remove wrapped methods' : function () {
            var name = 'location';

            refute.isFunction(wrap[name]);

            wrap(name);
            assert.isFunction(wrap[name]);

            wrap.reset();
            refute.isFunction(wrap[name]);
        }
    });
}());
