var _0x2795af = _0xbdbc;
(function (_0x271822, _0x516178) {
  var _0x2e12a3 = _0xbdbc,
    _0x558a9c = _0x271822();
  while ([]) {
    try {
      var _0x12804b =
        (parseInt(_0x2e12a3(0xb9)) / 0x1) * (parseInt(_0x2e12a3(0x10c)) / 0x2) +
        (-parseInt(_0x2e12a3(0xc4)) / 0x3) * (parseInt(_0x2e12a3(0xf8)) / 0x4) +
        (-parseInt(_0x2e12a3(0xd2)) / 0x5) * (-parseInt(_0x2e12a3(0xb3)) / 0x6) +
        (-parseInt(_0x2e12a3(0x102)) / 0x7) * (parseInt(_0x2e12a3(0x104)) / 0x8) +
        parseInt(_0x2e12a3(0xdd)) / 0x9 +
        (parseInt(_0x2e12a3(0x10b)) / 0xa) * (-parseInt(_0x2e12a3(0xe5)) / 0xb) +
        (parseInt(_0x2e12a3(0xfb)) / 0xc) * (parseInt(_0x2e12a3(0xc7)) / 0xd);
      if (_0x12804b === _0x516178) break;
      else _0x558a9c['push'](_0x558a9c['shift']());
    } catch (_0x1b5e5d) {
      _0x558a9c['push'](_0x558a9c['shift']());
    }
  }
})(_0x57df, 0x758ce);
var imageAvatar,
  avatarObject,
  mainSize = {},
  canvasSize = {},
  screenRateScale = 0x1,
  zCanvas,
  saturationInputObj,
  f = fabric[_0x2795af(0xc5)]['filters'];
let browserInfo;
function _0xbdbc(_0x33e498, _0x12acab) {
  var _0x57dfef = _0x57df();
  return (
    (_0xbdbc = function (_0xbdbcbb, _0x45ccec) {
      _0xbdbcbb = _0xbdbcbb - 0xad;
      var _0x3ac291 = _0x57dfef[_0xbdbcbb];
      return _0x3ac291;
    }),
    _0xbdbc(_0x33e498, _0x12acab)
  );
}
const editorContainer = document[_0x2795af(0xc9)](_0x2795af(0xeb));
let MAX_SIZE_EDGE = 0x800;
$(function () {
  var _0x418b9d = _0x2795af;
  (fabric[_0x418b9d(0xf0)] = fabric['initFilterBackend']()),
    $('#le_canvas')[_0x418b9d(0xb5)](),
    (zCanvas = new fabric[_0x418b9d(0x103)]('le_canvas', {
      selection: ![],
      preserveObjectStacking: !![],
    })),
    (editorContainer['style'][_0x418b9d(0xcb)] = _0x418b9d(0xc0)),
    initCanvas(),
    initWebViewInfo();
  const _0x32520e = browserInfo?.['os']?.['name'][_0x418b9d(0xae)]();
  _0x32520e == _0x418b9d(0x109) && (MAX_SIZE_EDGE = 0x400);
});
function _0x57df() {
  var _0x1c2e55 = [
    'result',
    '.area_frame',
    'none',
    'renderAll',
    'setValue',
    'hide',
    '1851kIlEXK',
    'Image',
    '_khunghinh.jpeg',
    '16562BuiADh',
    'copy_to_clipboard_success',
    'getElementById',
    '.area_process',
    'pointerEvents',
    'change',
    'translations',
    'anonymous',
    'css',
    'filter_color',
    'android',
    '25tZTMkY',
    'POST',
    'image/jpeg',
    'avatar',
    'jpeg',
    'viewportTransform',
    'click',
    'height',
    'success',
    '.common-area',
    'attr',
    '817119QKGcgl',
    'message',
    'setControlsVisibility',
    'write',
    '#saturation-zoom-input',
    'appendTo',
    'split',
    'trigger',
    '3342911ilVMUN',
    'target',
    'fromURL',
    'requestRenderAll',
    'getParser',
    'setWidth',
    'frame-container',
    'event',
    'set',
    'image_tool',
    'length',
    'filterBackend',
    'readAsDataURL',
    'modal',
    'default',
    'userAgent',
    'ajax',
    'add',
    'onclick',
    '2404pjfkjP',
    '#img_download_modal',
    '.canvas-container',
    '9984yKjiRP',
    'upload_photo',
    'filters',
    'slider',
    'value',
    'application/json',
    'files',
    '217574rtKLwQ',
    'Canvas',
    '112Ktjvim',
    'width',
    'unblockUI',
    'src',
    'toDataURL',
    'ios',
    'remove',
    '20qBsaEG',
    '2QVOYMO',
    'name',
    'toLowerCase',
    'body',
    '.result-image-ios',
    'Saturation',
    'onload',
    '696642SdQGAX',
    'clipboard',
    'show',
    'addEventListener',
    'blockUI',
    'selection',
    '163959nckTRX',
    '.image-editor',
    'slice',
    'createObjectURL',
    '<a\x20/>',
  ];
  _0x57df = function () {
    return _0x1c2e55;
  };
  return _0x57df();
}
function initCanvas() {
  var _0x237ac9 = _0x2795af;
  (imageAvatar = new Image()),
    (imageAvatar['src'] = srcDefault),
    (imageAvatar['crossOrigin'] = _0x237ac9(0xce)),
    (imageAvatar[_0x237ac9(0xb2)] = function () {
      var _0x14d4b0 = _0x237ac9;
      (mainSize = { width: parseInt(this[_0x14d4b0(0x105)]), height: parseInt(this['height']) }),
        changeSizeCanvas(),
        processResizeScreen(),
        ($(_0x14d4b0(0xbf))[_0x14d4b0(0x105)] = canvasSize[_0x14d4b0(0x105)]),
        (avatarObject = new fabric[_0x14d4b0(0xc5)](imageAvatar)),
        avatarObject[_0x14d4b0(0xed)]({
          scaleX: 0x1,
          scaleY: 0x1,
          evented: ![],
          selectable: ![],
          lockRotation: !![],
          lockScalingX: !![],
          lockScalingY: !![],
          id: 'avatar',
        }),
        zCanvas[_0x14d4b0(0xf6)](avatarObject),
        initUI(),
        (zCanvas[_0x14d4b0(0xb8)] = ![]),
        onChangeSaturation(-0x1),
        zCanvas['renderAll']();
    });
}
function initUI() {
  var _0x18dc4f = _0x2795af;
  (saturationInputObj = $(_0x18dc4f(0xe1))[_0x18dc4f(0xfe)]()),
    saturationInputObj['on'](_0x18dc4f(0xcc), function (_0x372feb) {
      var _0x25596e = _0x18dc4f;
      onChangeSaturation(_0x372feb[_0x25596e(0xff)]['newValue']);
    });
}
function onChangeSaturation(_0x30e977) {
  applySaturationFilterValue(0x7, _0x30e977);
}
function applySaturationFilterValue(_0xb8cf5b, _0x50cf1c) {
  var _0x55702a = _0x2795af;
  (avatarObject[_0x55702a(0xfd)][_0xb8cf5b] = new f[_0x55702a(0xb1)]({
    saturation: parseFloat(_0x50cf1c),
  })),
    avatarObject['applyFilters'](),
    zCanvas[_0x55702a(0xc1)]();
}
function onChoosePhoto() {
  var _0x25c9a7 = _0x2795af;
  $('#upload_photo')[_0x25c9a7(0xe4)](_0x25c9a7(0xd8));
}
(document[_0x2795af(0xc9)](_0x2795af(0xfc))[_0x2795af(0xf7)] = function () {
  this['value'] = null;
}),
  document[_0x2795af(0xc9)]('upload_photo')[_0x2795af(0xb6)](
    _0x2795af(0xcc),
    function () {
      readPhotoUpload(this);
    },
    ![]
  );
function readPhotoUpload(_0x3ddb83) {
  var _0x22519b = _0x2795af;
  if (_0x3ddb83[_0x22519b(0x101)] && _0x3ddb83['files'][0x0]) {
    var _0x17c6c1 = new FileReader();
    _0x17c6c1[_0x22519b(0xf1)](_0x3ddb83['files'][0x0]),
      (_0x17c6c1[_0x22519b(0xb2)] = function (_0x49f54f) {
        var _0x4b9c58 = _0x22519b;
        const _0x489d2e = _0x49f54f[_0x4b9c58(0xe6)][_0x4b9c58(0xbe)];
        avatarObject && (zCanvas[_0x4b9c58(0x10a)](avatarObject), (avatarObject = null)),
          fabric[_0x4b9c58(0xc5)][_0x4b9c58(0xe7)](_0x489d2e, function (_0x2e8a53) {
            var _0x2fb9cf = _0x4b9c58;
            let _0x3bbf8a = _0x2e8a53['width'],
              _0x59945a = _0x2e8a53[_0x2fb9cf(0xd9)],
              _0x5ba441 = ![];
            _0x3bbf8a < _0x59945a
              ? _0x59945a > MAX_SIZE_EDGE &&
                ((_0x3bbf8a = parseInt((MAX_SIZE_EDGE / _0x59945a) * _0x3bbf8a, 0xa)),
                (_0x59945a = MAX_SIZE_EDGE),
                (_0x5ba441 = !![]))
              : _0x3bbf8a > MAX_SIZE_EDGE &&
                ((_0x59945a = parseInt((MAX_SIZE_EDGE / _0x3bbf8a) * _0x59945a, 0xa)),
                (_0x3bbf8a = MAX_SIZE_EDGE),
                (_0x5ba441 = !![]));
            (mainSize = { width: _0x3bbf8a, height: _0x59945a }),
              _0x2e8a53['scaleToWidth'](_0x3bbf8a),
              _0x2e8a53['scaleToHeight'](_0x59945a);
            const _0x225f98 = {
              selectable: ![],
              hoverCursor: _0x2fb9cf(0xf3),
              hasControls: ![],
              hasBorders: ![],
              lockRotation: !![],
              lockScalingX: !![],
              lockScalingY: !![],
              id: _0x2fb9cf(0xd5),
            };
            _0x2e8a53[_0x2fb9cf(0xed)]({ ..._0x225f98 }),
              _0x2e8a53[_0x2fb9cf(0xdf)]({
                mt: ![],
                mb: ![],
                ml: ![],
                mr: ![],
                bl: ![],
                br: ![],
                tl: ![],
                tr: ![],
                mtr: ![],
              }),
              zCanvas[_0x2fb9cf(0xf6)](_0x2e8a53),
              (avatarObject = _0x2e8a53);
            if (_0x5ba441) {
              zCanvas['setViewportTransform'](fabric['iMatrix']['concat']()),
                zCanvas[_0x2fb9cf(0xe8)]();
              const _0x24a6d8 = { ...mainSize, format: 'jpeg', quality: 0x1 },
                _0x16b0da = zCanvas[_0x2fb9cf(0x108)](_0x24a6d8);
              fabric[_0x2fb9cf(0xc5)][_0x2fb9cf(0xe7)](_0x16b0da, function (_0x165709) {
                var _0x46fa20 = _0x2fb9cf;
                zCanvas[_0x46fa20(0x10a)](_0x2e8a53),
                  _0x165709[_0x46fa20(0xed)]({ ..._0x225f98 }),
                  _0x165709['setControlsVisibility']({
                    mt: ![],
                    mb: ![],
                    ml: ![],
                    mr: ![],
                    bl: ![],
                    br: ![],
                    tl: ![],
                    tr: ![],
                    mtr: ![],
                  }),
                  zCanvas[_0x46fa20(0xf6)](_0x165709),
                  (avatarObject = _0x165709),
                  resetAvatarProperties();
              });
            }
            changeSizeCanvas(),
              processResizeScreen(),
              zCanvas[_0x2fb9cf(0xc1)](),
              resetAvatarProperties();
          });
      });
  }
}
function changeSizeCanvas() {
  var _0x4cf851 = _0x2795af;
  mainSize['width'] < mainSize[_0x4cf851(0xd9)]
    ? mainSize[_0x4cf851(0xd9)] > MAX_SIZE_EDGE
      ? ((canvasSize[_0x4cf851(0x105)] =
          (mainSize[_0x4cf851(0x105)] * MAX_SIZE_EDGE) / mainSize['height']),
        (canvasSize[_0x4cf851(0xd9)] = MAX_SIZE_EDGE))
      : ((canvasSize[_0x4cf851(0x105)] = mainSize[_0x4cf851(0x105)]),
        (canvasSize[_0x4cf851(0xd9)] = mainSize[_0x4cf851(0xd9)]))
    : mainSize[_0x4cf851(0x105)] > MAX_SIZE_EDGE
    ? ((canvasSize[_0x4cf851(0x105)] = MAX_SIZE_EDGE),
      (canvasSize['height'] =
        (mainSize[_0x4cf851(0xd9)] * MAX_SIZE_EDGE) / canvasSize[_0x4cf851(0x105)]))
    : ((canvasSize[_0x4cf851(0x105)] = mainSize['width']),
      (canvasSize['height'] = mainSize['height'])),
    zCanvas[_0x4cf851(0xea)](canvasSize['width']),
    zCanvas['setHeight'](canvasSize[_0x4cf851(0xd9)]);
}
function resetAvatarProperties() {
  var _0x2a90d8 = _0x2795af;
  onChangeSaturation(-0x1),
    saturationInputObj[_0x2a90d8(0xfe)](_0x2a90d8(0xc2), -0x1),
    zCanvas[_0x2a90d8(0xc1)]();
}
function processResizeScreen() {
  var _0x12d62c = _0x2795af,
    _0x3488ff = $(_0x12d62c(0xba))[_0x12d62c(0x105)]();
  _0x3488ff <= canvasSize[_0x12d62c(0x105)]
    ? ((screenRateScale = _0x3488ff / canvasSize[_0x12d62c(0x105)]),
      $(_0x12d62c(0xbf))[_0x12d62c(0xcf)]('width', _0x3488ff),
      $('.common-area')[_0x12d62c(0xcf)](_0x12d62c(0x105), _0x3488ff),
      $('.canvas-container')['css'](_0x12d62c(0x105), _0x3488ff))
    : ((screenRateScale = 0x1),
      $(_0x12d62c(0xbf))[_0x12d62c(0xcf)](_0x12d62c(0x105), canvasSize[_0x12d62c(0x105)]),
      $(_0x12d62c(0xdb))['css'](_0x12d62c(0x105), canvasSize['width']),
      $(_0x12d62c(0xfa))[_0x12d62c(0xcf)](_0x12d62c(0x105), canvasSize[_0x12d62c(0x105)])),
    $(_0x12d62c(0xca))[_0x12d62c(0xcf)](
      _0x12d62c(0xd9),
      screenRateScale * canvasSize[_0x12d62c(0xd9)]
    ),
    $(_0x12d62c(0xdb))[_0x12d62c(0xcf)]('height', screenRateScale * canvasSize[_0x12d62c(0xd9)]),
    $(_0x12d62c(0xfa))[_0x12d62c(0xcf)](
      _0x12d62c(0xd9),
      screenRateScale * canvasSize[_0x12d62c(0xd9)]
    );
}
const opt = { format: _0x2795af(0xd6), quality: 0x1 };
function getResultImageData() {
  var _0x13fdfa = _0x2795af,
    _0x47e4d1 = zCanvas[_0x13fdfa(0xd7)][_0x13fdfa(0xbb)]();
  zCanvas['setViewportTransform']([0x1, 0x0, 0x0, 0x1, 0x0, 0x0]);
  const _0x5868aa = zCanvas[_0x13fdfa(0x108)]({
    ...opt,
    width: canvasSize[_0x13fdfa(0x105)],
    height: canvasSize[_0x13fdfa(0xd9)],
  });
  return zCanvas['setViewportTransform'](_0x47e4d1), _0x5868aa;
}
function downloadImage() {
  var _0x176dc9 = _0x2795af;
  const _0x11e74e = getResultImageData();
  window['gg_tag_id'] != '' &&
    gtag(_0x176dc9(0xec), 'filter_color_download', {
      event_category: _0x176dc9(0xee),
      event_label: _0x176dc9(0xd0),
    });
  const _0x48926d = browserInfo?.['os']?.[_0x176dc9(0xad)]['toLowerCase']();
  if (_0x48926d == _0x176dc9(0x109)) return showModalImageDownload(_0x11e74e), '';
  if (_0x48926d == _0x176dc9(0xd1) && isAndroidDownloadImg == '1') {
    $[_0x176dc9(0xb7)]({ message: '' });
    const _0x4b5686 = { _token: TOKEN, image: _0x11e74e };
    return (
      $[_0x176dc9(0xf5)]({
        url: URL_ROOT + '/generate-image',
        type: _0x176dc9(0xd3),
        data: JSON['stringify'](_0x4b5686),
        contentType: _0x176dc9(0x100),
        success: function (_0x3626cf) {
          var _0x3d48c3 = _0x176dc9;
          if (_0x3626cf[_0x3d48c3(0xda)]) {
            const _0x1d6418 = URL_ROOT + '/download/' + _0x3626cf[_0x3d48c3(0xde)];
            var _0x9fcff = $('<a\x20/>', { href: _0x1d6418 })
              [_0x3d48c3(0xc3)]()
              [_0x3d48c3(0xe2)](_0x3d48c3(0xaf));
            _0x9fcff[0x0]['click'](), _0x9fcff[_0x3d48c3(0x10a)]();
          }
          $[_0x3d48c3(0x106)]();
        },
        error: function () {
          var _0x4ae070 = _0x176dc9;
          $[_0x4ae070(0x106)]();
        },
      }),
      ''
    );
  }
  const _0xb640d3 =
    _0x11e74e[_0x176dc9(0xe3)](',')[_0x176dc9(0xef)] > 0x1
      ? _0x11e74e[_0x176dc9(0xe3)](',')[0x1]
      : _0x11e74e;
  var _0x485ab9 = Base64toBlob(_0xb640d3, _0x176dc9(0xd4)),
    _0x20218d = window['URL'][_0x176dc9(0xbc)](_0x485ab9),
    _0x392af0 = $(_0x176dc9(0xbd), {
      href: _0x20218d,
      download: new Date()['getTime']() + _0x176dc9(0xc6),
    })
      [_0x176dc9(0xc3)]()
      [_0x176dc9(0xe2)](_0x176dc9(0xaf));
  _0x392af0[0x0][_0x176dc9(0xd8)](), _0x392af0['remove']();
}
function showModalImageDownload(_0x2c4816) {
  var _0x385552 = _0x2795af;
  const _0x41c9cd = $(_0x385552(0xf9));
  _0x41c9cd[_0x385552(0xf2)]('show'),
    $(_0x385552(0xb0))[_0x385552(0xdc)](_0x385552(0x107), _0x2c4816);
}
function initWebViewInfo() {
  var _0x4fe09c = _0x2795af,
    _0x48ff3c = bowser[_0x4fe09c(0xe9)](window['navigator'][_0x4fe09c(0xf4)]);
  browserInfo = _0x48ff3c['parsedResult'];
}
async function CopyToClipboard() {
  var _0x1e9bdf = _0x2795af;
  const _0x5cac26 = getResultImageData(),
    _0x5d6e54 =
      _0x5cac26[_0x1e9bdf(0xe3)](',')[_0x1e9bdf(0xef)] > 0x1
        ? _0x5cac26[_0x1e9bdf(0xe3)](',')[0x1]
        : _0x5cac26;
  var _0x3808f7 = Base64toBlob(_0x5d6e54, _0x1e9bdf(0xd4));
  try {
    typeof navigator['clipboard'] !== 'undefined' &&
      (await navigator[_0x1e9bdf(0xb4)][_0x1e9bdf(0xe0)]([
        new ClipboardItem({ 'image/jpeg': _0x3808f7 }),
      ]),
      showNotification(window[_0x1e9bdf(0xcd)][_0x1e9bdf(0xc8)]));
  } catch (_0x452a86) {
    console['error'](_0x452a86);
  }
}
