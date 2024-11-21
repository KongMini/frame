const _0x1749cb = _0x5606;
(function (_0x2f992f, _0x53208d) {
  const _0x1b0c7e = _0x5606,
    _0xeab00d = _0x2f992f();
  while ([]) {
    try {
      const _0x2f05cb =
        (parseInt(_0x1b0c7e(0x9c)) / 0x1) * (parseInt(_0x1b0c7e(0x143)) / 0x2) +
        (-parseInt(_0x1b0c7e(0x116)) / 0x3) * (-parseInt(_0x1b0c7e(0xf0)) / 0x4) +
        parseInt(_0x1b0c7e(0x112)) / 0x5 +
        parseInt(_0x1b0c7e(0x99)) / 0x6 +
        (parseInt(_0x1b0c7e(0xfc)) / 0x7) * (-parseInt(_0x1b0c7e(0x135)) / 0x8) +
        (parseInt(_0x1b0c7e(0x10e)) / 0x9) * (-parseInt(_0x1b0c7e(0x137)) / 0xa) +
        (-parseInt(_0x1b0c7e(0x167)) / 0xb) * (parseInt(_0x1b0c7e(0xcf)) / 0xc);
      if (_0x2f05cb === _0x53208d) break;
      else _0xeab00d['push'](_0xeab00d['shift']());
    } catch (_0x42f95c) {
      _0xeab00d['push'](_0xeab00d['shift']());
    }
  }
})(_0x4f6b, 0xd52ef);
const ITEM_CLASS = 'col-xl-3\x20col-md-4\x20col-sm-6\x20col-6',
  URL_PROFILE_MAKER = URL_ROOT + '/img/tool/profile_maker/',
  TEMPLATE_CATEGORY = [
    { id: _0x1749cb(0xf4), text: window[_0x1749cb(0xb7)][_0x1749cb(0xf4)] },
    { id: _0x1749cb(0xe8), text: window[_0x1749cb(0xb7)][_0x1749cb(0xe8)] },
    { id: _0x1749cb(0xd6), text: window[_0x1749cb(0xb7)]['product'] },
    { id: _0x1749cb(0xa7), text: window[_0x1749cb(0xb7)][_0x1749cb(0xa7)] },
    { id: _0x1749cb(0xa2), text: window['translations'][_0x1749cb(0xa2)] },
    { id: 'room', text: window[_0x1749cb(0xb7)]['in_door'] },
    { id: _0x1749cb(0xd2), text: window[_0x1749cb(0xb7)][_0x1749cb(0xd2)] },
  ],
  SCALE_DEFAULT = 0.5,
  ExportFileName = _0x1749cb(0x14a);
let fixmeTop = 0x0,
  currentImage,
  currentImageFromCanvas,
  profileMakerConfig,
  templateBackground = {},
  currentColorBg,
  currentCategory,
  currentShadowIndex,
  currentTime = Date[_0x1749cb(0x130)](),
  currentTool = 0x0;
var canvas = document[_0x1749cb(0x136)]('profile_maker_canvas'),
  context = canvas['getContext']('2d');
const canvasMask = document['createElement'](_0x1749cb(0xe4)),
  ctxMask = canvasMask[_0x1749cb(0x10c)]('2d', { willReadFrequently: !![] });
var originalSize = {},
  mainSize = {},
  mainPosition = { x: canvas[_0x1749cb(0x16d)] / 0x2, y: canvas[_0x1749cb(0x120)] / 0x2 },
  mainScale = SCALE_DEFAULT,
  mainRotate = 0x0,
  isFlip = ![],
  snapshotBeforeEdit = {},
  imageAvatar,
  screenRateScale = 0x1,
  flagMoveActive = ![],
  isMoving = ![],
  flagEraserActive = ![],
  currentMoveX = -0x1,
  currentMoveY = -0x1,
  offsetX,
  offsetY,
  beginMoveX,
  beginMoveY,
  eraserPointSize = 0x14;
let curTemplate, browserInfo;
$(function () {
  LoadJsonData()['then'](function () {
    InitPage();
  });
});
function _0x5606(_0xff20e3, _0x424158) {
  const _0x4f6b27 = _0x4f6b();
  return (
    (_0x5606 = function (_0x560627, _0x2c6220) {
      _0x560627 = _0x560627 - 0x87;
      let _0x277d84 = _0x4f6b27[_0x560627];
      return _0x277d84;
    }),
    _0x5606(_0xff20e3, _0x424158)
  );
}
function InitPage() {
  const _0x3b63b8 = _0x1749cb;
  RmBgProcessingId[_0x3b63b8(0xc2)] > 0x0
    ? OnCheckProcessing()
    : $(_0x3b63b8(0xb5))[_0x3b63b8(0x151)]();
  $('#modalEditProfileMaker')['on'](_0x3b63b8(0xae), function (_0x4964ae) {
    if (currentTool == 0x1) InitEditImageTool();
    else {
      if (currentTool == 0x2) InitChangeBgTool();
      else currentTool == 0x3 ? InitChangeShadowTool() : InitResultImage();
    }
  }),
    $(_0x3b63b8(0x15d))['on'](_0x3b63b8(0x102), function (_0x43e089) {
      (currentTool = 0x0),
        $('#modalEditProfileMaker\x20.modal-footer\x20.btn-primary')['show'](),
        ClearCanvas();
    }),
    GetOffset();
  var _0x38810a = bowser[_0x3b63b8(0x150)](window[_0x3b63b8(0x9e)]['userAgent']);
  (browserInfo = _0x38810a[_0x3b63b8(0xc5)]),
    browserInfo?.['os']?.[_0x3b63b8(0x121)][_0x3b63b8(0xb4)]() == _0x3b63b8(0xe6) && InitIOSView();
}
function InitIOSView() {
  const _0x1f8873 = _0x1749cb;
  $(_0x1f8873(0x13f))[_0x1f8873(0x144)]();
}
function OnChoosePhoto() {
  const _0x4846f2 = _0x1749cb;
  $('#upload_photo')[_0x4846f2(0xdb)](_0x4846f2(0xca));
}
(document[_0x1749cb(0x136)](_0x1749cb(0x8a))['onclick'] = function () {
  const _0x189221 = _0x1749cb;
  this[_0x189221(0xd0)] = null;
}),
  document[_0x1749cb(0x136)]('upload_photo')[_0x1749cb(0x125)](
    _0x1749cb(0x149),
    function () {
      ReadImageUpload(this);
    },
    ![]
  );
function ReadImageUpload(_0x41d4c6) {
  const _0x1ed589 = _0x1749cb;
  $[_0x1ed589(0x13c)]({ message: '' }),
    ReadURL(_0x41d4c6)
      [_0x1ed589(0x16e)](function (_0x239e06) {
        const _0x579d95 = _0x1ed589;
        var _0x228715 = new FormData();
        _0x228715[_0x579d95(0x117)]('_token', TOKEN),
          _0x228715[_0x579d95(0x117)](
            _0x579d95(0x169),
            _0x239e06[_0x579d95(0x12b)][0x0],
            _0x239e06[_0x579d95(0x12b)][0x0][_0x579d95(0x121)]
          );
        var _0x172ac4 = {
          url: URL_ROOT + _0x579d95(0xd4),
          method: _0x579d95(0x9b),
          timeout: 0x0,
          processData: ![],
          mimeType: _0x579d95(0xfe),
          contentType: ![],
          data: _0x228715,
        };
        $[_0x579d95(0x142)](_0x172ac4)[_0x579d95(0x93)](function (_0x168502) {
          const _0x13df34 = _0x579d95,
            _0x57e242 = JSON['parse'](_0x168502);
          _0x57e242[_0x13df34(0x11e)]
            ? OnCheckProcessing()
            : showError(_0x57e242[_0x13df34(0x175)]),
            $[_0x13df34(0xdf)]();
        });
      })
      [_0x1ed589(0x118)](function (_0x3f8cdb) {
        const _0x35bea3 = _0x1ed589;
        showError(_0x3f8cdb), $[_0x35bea3(0xdf)]();
      });
}
function LoadJsonData() {
  return new Promise(function (_0x2bcf95, _0x2d8705) {
    $['getJSON'](URL_ROOT + '/app/json/profile-maker.json', function (_0x12b207) {
      (profileMakerConfig = _0x12b207),
        ArrangeTemplateCategory(),
        LoadCategory(),
        LoadColorList(),
        LoadShadowList(),
        _0x2bcf95();
    });
  });
}
function ArrangeTemplateCategory() {
  const { templates: _0x24ecb } = profileMakerConfig;
  _0x24ecb['forEach']((_0x5835cb, _0x506008) => {
    const _0x271d7c = _0x5606;
    _0x5835cb['index'] = _0x506008;
    if (templateBackground[_0x5835cb[_0x271d7c(0x100)]]) {
      const _0x19efb1 = templateBackground[_0x5835cb['category']];
      _0x19efb1['push'](_0x5835cb), (templateBackground[_0x5835cb['category']] = _0x19efb1);
    } else templateBackground[_0x5835cb[_0x271d7c(0x100)]] = [_0x5835cb];
  });
}
function LoadCategory() {
  const _0x5cb4dc = _0x1749cb;
  (document[_0x5cb4dc(0x136)]('category_list')[_0x5cb4dc(0x173)] = ''),
    (document[_0x5cb4dc(0x136)](_0x5cb4dc(0x176))['innerHTML'] = ''),
    TEMPLATE_CATEGORY[_0x5cb4dc(0x13b)]((_0x5c74f3, _0x539d59) => {
      const _0x553691 = _0x5cb4dc;
      let _0x33c383 = document[_0x553691(0xed)]('li');
      (_0x33c383[_0x553691(0x173)] = _0x5c74f3[_0x553691(0x96)]),
        _0x33c383[_0x553691(0xbd)]('data-id', _0x5c74f3['id']);
      _0x539d59 == 0x0 &&
        ((_0x33c383['classList'] = 'active'), (currentCategory = _0x5c74f3['id']));
      (_0x33c383[_0x553691(0x129)] = () => {
        ChangeCategory(_0x5c74f3['id']);
      }),
        document[_0x553691(0x136)](_0x553691(0xe3))['appendChild'](_0x33c383);
      let _0x2dbb4c = document['createElement']('li'),
        _0xca06fe = document['createElement'](_0x553691(0x162));
      _0xca06fe[_0x553691(0xbd)](_0x553691(0xb3), _0x5c74f3['id']),
        (_0xca06fe['classList'] = _0x553691(0x115)),
        (_0xca06fe['innerHTML'] = _0x5c74f3[_0x553691(0x96)]),
        _0x2dbb4c[_0x553691(0x8c)](_0xca06fe),
        _0x539d59 == 0x0 &&
          ((_0xca06fe[_0x553691(0x145)] = _0x553691(0xd3)), (currentCategory = _0x5c74f3['id'])),
        (_0xca06fe['onclick'] = () => {
          ChangeCategory(_0x5c74f3['id']);
        }),
        document[_0x553691(0x136)](_0x553691(0x176))[_0x553691(0x8c)](_0x2dbb4c);
    });
}
function LoadColorList() {
  const _0x8cf9d6 = _0x1749cb,
    { colors: _0x3e8efa, gradients: _0x138c9c } = profileMakerConfig,
    _0xf6c86f = document[_0x8cf9d6(0x136)]('change_color_list');
  let _0x5d0eb2 = document[_0x8cf9d6(0xed)](_0x8cf9d6(0x179));
  (_0x5d0eb2['className'] = _0x8cf9d6(0x178)),
    (_0x5d0eb2[_0x8cf9d6(0x173)] = _0x8cf9d6(0xbe)),
    _0xf6c86f['appendChild'](_0x5d0eb2);
  let _0x597d8d = document['createElement'](_0x8cf9d6(0x179));
  (_0x597d8d['className'] = _0x8cf9d6(0xde)),
    _0x3e8efa[_0x8cf9d6(0x13b)]((_0x1df4aa, _0x1be962) => {
      const _0x289a19 = _0x8cf9d6;
      let _0x396825 = document['createElement']('div');
      (_0x396825[_0x289a19(0x11f)] = _0x289a19(0x157)), _0x597d8d[_0x289a19(0x8c)](_0x396825);
      let _0x1ae800 = document['createElement'](_0x289a19(0x162));
      (_0x1ae800[_0x289a19(0x11f)] = _0x289a19(0xee)),
        (_0x1ae800[_0x289a19(0x16f)][_0x289a19(0x138)] = _0x1df4aa),
        _0x396825[_0x289a19(0x8c)](_0x1ae800),
        (_0x396825[_0x289a19(0x129)] = () => {
          ChangeColorBackground({ type: 'color', color: _0x1df4aa });
        });
    }),
    _0xf6c86f[_0x8cf9d6(0x8c)](_0x597d8d);
  let _0x2fab53 = document['createElement'](_0x8cf9d6(0x179));
  (_0x2fab53[_0x8cf9d6(0x11f)] = _0x8cf9d6(0x178)),
    (_0x2fab53[_0x8cf9d6(0x173)] = _0x8cf9d6(0xf7)),
    _0xf6c86f[_0x8cf9d6(0x8c)](_0x2fab53);
  let _0x12a4c4 = document[_0x8cf9d6(0xed)]('div');
  (_0x12a4c4[_0x8cf9d6(0x11f)] = _0x8cf9d6(0xde)),
    _0x138c9c[_0x8cf9d6(0x13b)]((_0x2126cd, _0x290ea4) => {
      const _0x251d64 = _0x8cf9d6;
      let _0x493575 = document[_0x251d64(0xed)](_0x251d64(0x179));
      (_0x493575['className'] = _0x251d64(0x157)), _0x12a4c4['appendChild'](_0x493575);
      let _0x453db3 = document['createElement'](_0x251d64(0x162));
      (_0x453db3[_0x251d64(0x11f)] = _0x251d64(0xee)),
        (_0x453db3['style'][_0x251d64(0x8b)] = _0x251d64(0xcd) + _0x2126cd + ')'),
        _0x493575['appendChild'](_0x453db3),
        (_0x493575[_0x251d64(0x129)] = () => {
          const _0x8adce8 = _0x251d64;
          ChangeGradientBackground({ type: _0x8adce8(0xcc), color: _0x2126cd });
        });
    }),
    _0xf6c86f[_0x8cf9d6(0x8c)](_0x12a4c4);
}
function LoadShadowList() {
  const _0x399ed3 = _0x1749cb,
    { shadows: _0x24652d } = profileMakerConfig,
    _0x171eb8 = document[_0x399ed3(0x136)](_0x399ed3(0x110));
  let _0x2df0a2 = document[_0x399ed3(0xed)](_0x399ed3(0x179));
  (_0x2df0a2['className'] = 'shadow-picker\x20mb-4'),
    _0x24652d['forEach']((_0x3e75ff, _0x23a7d8) => {
      const _0x3c7368 = _0x399ed3;
      let _0x3de9c4 = document[_0x3c7368(0xed)](_0x3c7368(0x179));
      (_0x3de9c4[_0x3c7368(0x11f)] = _0x3c7368(0xf1)),
        _0x3de9c4[_0x3c7368(0xbd)](_0x3c7368(0x14b), _0x23a7d8),
        _0x2df0a2['appendChild'](_0x3de9c4);
      let _0x1580a3 = document[_0x3c7368(0xed)]('span');
      (_0x1580a3['className'] = 'shadow-picker-label'),
        (_0x1580a3[_0x3c7368(0x173)] = _0x3c7368(0x156) + (_0x23a7d8 + 0x1)),
        _0x3de9c4[_0x3c7368(0x8c)](_0x1580a3),
        (_0x3de9c4[_0x3c7368(0x129)] = () => {
          ChangeShadow(_0x23a7d8);
        });
    }),
    _0x171eb8['appendChild'](_0x2df0a2);
}
function OnCheckProcessing() {
  const _0x1d41bb = _0x1749cb,
    _0x18e7a3 = document['getElementById'](_0x1d41bb(0x14e));
  _0x534e69();
  var _0x4ea9db = setInterval(_0x534e69, 0x1388);
  function _0x534e69() {
    const _0x1ac263 = _0x1d41bb;
    $[_0x1ac263(0x142)]({
      type: _0x1ac263(0x154),
      url: URL_ROOT + _0x1ac263(0x13d),
      contentType: _0x1ac263(0xe7),
      success: (_0x5b3b6f) => {
        const _0x1eb5d7 = _0x1ac263,
          { success: _0x124844, data: _0x506f08 } = _0x5b3b6f;
        if (_0x124844) {
          $(_0x1eb5d7(0xb5))[_0x1eb5d7(0x15f)](_0x1eb5d7(0x144)),
            $(_0x1eb5d7(0xa5))[_0x1eb5d7(0x15f)]('hide'),
            $('.action-area-status')[_0x1eb5d7(0x144)]();
          const _0x29df3b = parseInt(_0x506f08['status']);
          switch (_0x29df3b) {
            case 0x3:
              clearInterval(_0x4ea9db),
                (currentImage = URL_ROOT + '/' + _0x506f08[_0x1eb5d7(0xb0)]),
                $(_0x1eb5d7(0xfd))[_0x1eb5d7(0xe2)](
                  _0x1eb5d7(0x168),
                  _0x1eb5d7(0x131) + currentImage + ')'
                ),
                _0x18e7a3[_0x1eb5d7(0x16f)][_0x1eb5d7(0x108)](
                  _0x1eb5d7(0x16a),
                  _0x1eb5d7(0x131) + currentImage + ')'
                ),
                $(_0x1eb5d7(0x170))[_0x1eb5d7(0x15f)](_0x1eb5d7(0x144)),
                $(_0x1eb5d7(0xa5))[_0x1eb5d7(0xbf)](_0x1eb5d7(0x144)),
                $(_0x1eb5d7(0xd1))[_0x1eb5d7(0x151)](),
                $('.action-area-status.profile-maker-done')[_0x1eb5d7(0x151)](),
                LoadProfileImage(),
                LoadTemplate(),
                InitFixArea();
              break;
            case 0x2:
              clearInterval(_0x4ea9db),
                $(_0x1eb5d7(0xb9))[_0x1eb5d7(0x15f)](_0x1eb5d7(0x144)),
                $(_0x1eb5d7(0x170))['removeClass'](_0x1eb5d7(0x144)),
                $(_0x1eb5d7(0xfd))[_0x1eb5d7(0xe2)](
                  _0x1eb5d7(0x168),
                  _0x1eb5d7(0x131) + URL_ROOT + '/' + _0x506f08[_0x1eb5d7(0x128)] + ')'
                ),
                $(_0x1eb5d7(0x180))[_0x1eb5d7(0x151)](),
                $(_0x1eb5d7(0x8f))[_0x1eb5d7(0x151)]();
              break;
            default:
              $(_0x1eb5d7(0x170))[_0x1eb5d7(0xbf)]('hide'),
                $('.profile-maker-src')[_0x1eb5d7(0xe2)](
                  _0x1eb5d7(0x168),
                  'url(' + URL_ROOT + '/' + _0x506f08['input_url'] + ')'
                ),
                $(_0x1eb5d7(0x180))['show'](),
                $('.action-area-status.profile-maker-processing')[_0x1eb5d7(0x151)]();
              break;
          }
        } else clearInterval(_0x4ea9db);
      },
    });
  }
}
function LoadTemplateByCategory(_0x5c3e0d) {
  const _0x48c2e4 = _0x1749cb;
  if (_0x5c3e0d == 'all') {
    LoadTemplate();
    return;
  }
  const _0x459fb4 = templateBackground[_0x5c3e0d];
  if (_0x459fb4 == undefined) return;
  (document[_0x48c2e4(0x136)](_0x48c2e4(0x111))[_0x48c2e4(0x173)] = ''),
    _0x459fb4[_0x48c2e4(0x13b)]((_0xede853, _0x317004) => {
      const _0x272916 = _0x48c2e4;
      let _0x59b77e;
      switch (_0xede853['type']) {
        case 0x1:
          _0x59b77e = RenderTemplateItemByBackground(_0xede853);
          break;
        case 0x2:
          _0x59b77e = RenderTemplateItemByBackdrop(_0xede853);
          break;
        case 0x3:
          _0x59b77e = RenderTemplateItemByDecal(_0xede853);
          break;
        case 0x4:
          _0x59b77e = RenderTemplateItemByDoubleColor(_0xede853);
          break;
        case 0x5:
          _0x59b77e = RenderTemplateItemByBlending(_0xede853);
          break;
        case 0x6:
          _0x59b77e = RenderTemplateItemByMask(_0xede853);
          break;
        default:
          _0x59b77e = RenderTemplateItemDefault(_0xede853);
          break;
      }
      document[_0x272916(0x136)]('profile-maker-template-list')[_0x272916(0x8c)](_0x59b77e);
    });
}
function InitFixArea() {
  const _0xffa8a6 = _0x1749cb;
  (fixmeTop = $('.profile-maker-tool-area')[_0xffa8a6(0x16b)]()[_0xffa8a6(0x152)]),
    $(window)[_0xffa8a6(0x88)](function () {
      const _0xf41737 = _0xffa8a6;
      var _0x495d9f = $(window)[_0xf41737(0xf6)]();
      if (_0x495d9f >= fixmeTop) {
        $(_0xf41737(0xa5))[_0xf41737(0x15f)](_0xf41737(0x122));
        const _0x366418 = $(_0xf41737(0xd1))[_0xf41737(0xa0)]();
        $(_0xf41737(0xbb))[_0xf41737(0xe2)](_0xf41737(0x171), _0x366418);
      } else $(_0xf41737(0xa5))['removeClass'](_0xf41737(0x122)), $(_0xf41737(0xbb))[_0xf41737(0xe2)](_0xf41737(0x171), 0x0);
    });
}
function LoadTemplate() {
  const _0x5f3519 = _0x1749cb,
    { templates: _0xc3b8eb } = profileMakerConfig;
  (document[_0x5f3519(0x136)](_0x5f3519(0x111))[_0x5f3519(0x173)] = ''),
    _0xc3b8eb[_0x5f3519(0x13b)]((_0x138e11, _0xc6fb7a) => {
      const _0x527dbf = _0x5f3519;
      let _0x567be9;
      switch (_0x138e11[_0x527dbf(0x16c)]) {
        case 0x1:
          _0x567be9 = RenderTemplateItemByBackground(_0x138e11);
          break;
        case 0x2:
          _0x567be9 = RenderTemplateItemByBackdrop(_0x138e11);
          break;
        case 0x3:
          _0x567be9 = RenderTemplateItemByDecal(_0x138e11);
          break;
        case 0x4:
          _0x567be9 = RenderTemplateItemByDoubleColor(_0x138e11);
          break;
        case 0x5:
          _0x567be9 = RenderTemplateItemByBlending(_0x138e11);
          break;
        case 0x6:
          _0x567be9 = RenderTemplateItemByMask(_0x138e11);
          break;
        default:
          _0x567be9 = RenderTemplateItemDefault(_0x138e11);
          break;
      }
      document['getElementById'](_0x527dbf(0x111))[_0x527dbf(0x8c)](_0x567be9);
    });
}
function CreateTemplateItemNode(_0x3e7dce) {
  const _0xe39bc3 = _0x1749cb;
  let _0x1c682a = document[_0xe39bc3(0xed)](_0xe39bc3(0x179));
  return (
    (_0x1c682a['className'] = _0xe39bc3(0x10b)),
    _0x1c682a[_0xe39bc3(0xbd)]('data-bg_id', _0x3e7dce['id']),
    (_0x1c682a[_0xe39bc3(0x129)] = () => {
      ChooseTemplate(_0x3e7dce['id']);
    }),
    _0x1c682a
  );
}
function RenderTemplateItemDefault(_0x1e20fa) {
  const _0x1ed1cd = _0x1749cb,
    { templates: _0x2f776f, colors: _0x7abef } = profileMakerConfig;
  let _0xdcf8f4 = document[_0x1ed1cd(0xed)](_0x1ed1cd(0x179));
  _0xdcf8f4[_0x1ed1cd(0x11f)] = ITEM_CLASS;
  let _0x3fcab8 = CreateTemplateItemNode(_0x1e20fa);
  _0xdcf8f4[_0x1ed1cd(0x8c)](_0x3fcab8);
  let _0x3faf4f = document[_0x1ed1cd(0xed)](_0x1ed1cd(0x179));
  _0x3faf4f[_0x1ed1cd(0x11f)] = _0x1ed1cd(0xba);
  if (currentColorBg)
    currentColorBg[_0x1ed1cd(0x16c)] == _0x1ed1cd(0x172)
      ? (_0x3faf4f[_0x1ed1cd(0x16f)]['backgroundColor'] = currentColorBg[_0x1ed1cd(0x172)])
      : (_0x3faf4f[_0x1ed1cd(0x16f)]['backgroundImage'] =
          _0x1ed1cd(0xcd) + currentColorBg[_0x1ed1cd(0x172)] + ')');
  else {
    const _0x3b6cee = (currentTime + _0x1e20fa['index']) % _0x7abef[_0x1ed1cd(0xc2)];
    _0x3faf4f[_0x1ed1cd(0x16f)]['backgroundColor'] = _0x7abef[_0x3b6cee];
  }
  let _0xa78704 = document['createElement'](_0x1ed1cd(0x179));
  (_0xa78704[_0x1ed1cd(0x11f)] = _0x1ed1cd(0x13a)), _0x3faf4f[_0x1ed1cd(0x8c)](_0xa78704);
  let _0x433e5e = document[_0x1ed1cd(0xed)](_0x1ed1cd(0x179));
  _0x433e5e[_0x1ed1cd(0x11f)] = _0x1ed1cd(0xd7);
  const _0x1077c4 = URL_PROFILE_MAKER + _0x1e20fa[_0x1ed1cd(0xc3)];
  (_0x433e5e[_0x1ed1cd(0x16f)][_0x1ed1cd(0x8b)] = _0x1ed1cd(0x131) + _0x1077c4 + ')'),
    _0x3faf4f[_0x1ed1cd(0x8c)](_0x433e5e),
    _0x3fcab8[_0x1ed1cd(0x8c)](_0x3faf4f);
  if (typeof _0x2f776f[_0x1e20fa[_0x1ed1cd(0x8d)]]['loadedImg'] == _0x1ed1cd(0x127)) {
    let _0x2e566a = new Image();
    (_0x2e566a[_0x1ed1cd(0xfa)] = _0x1077c4),
      (_0x2e566a[_0x1ed1cd(0xab)] = function () {
        const _0x186195 = _0x1ed1cd;
        _0x2f776f[_0x1e20fa['index']][_0x186195(0x11c)] = { front: _0x2e566a };
      });
  }
  return _0xdcf8f4;
}
function RenderTemplateItemByBackground(_0x5c5644) {
  const _0x430350 = _0x1749cb,
    { templates: _0x13d60b } = profileMakerConfig;
  let _0x1375fb = document['createElement'](_0x430350(0x179));
  _0x1375fb[_0x430350(0x11f)] = ITEM_CLASS;
  let _0x503106 = CreateTemplateItemNode(_0x5c5644);
  _0x1375fb[_0x430350(0x8c)](_0x503106);
  let _0x348e14 = document[_0x430350(0xed)](_0x430350(0x179));
  _0x348e14[_0x430350(0x11f)] = _0x430350(0x12d);
  const _0xe512d6 = URL_PROFILE_MAKER + _0x5c5644[_0x430350(0xc3)];
  _0x348e14[_0x430350(0x16f)][_0x430350(0x8b)] = _0x430350(0x131) + _0xe512d6 + ')';
  let _0x598aee = document['createElement'](_0x430350(0x179));
  (_0x598aee[_0x430350(0x11f)] = _0x430350(0x13a)),
    _0x348e14['appendChild'](_0x598aee),
    _0x503106['appendChild'](_0x348e14);
  if (typeof _0x13d60b[_0x5c5644[_0x430350(0x8d)]][_0x430350(0x11c)] == _0x430350(0x127)) {
    let _0x4d5ae1 = new Image();
    (_0x4d5ae1[_0x430350(0xfa)] = _0xe512d6),
      (_0x4d5ae1[_0x430350(0xab)] = function () {
        const _0x59c850 = _0x430350;
        _0x13d60b[_0x5c5644[_0x59c850(0x8d)]][_0x59c850(0x11c)] = { back: _0x4d5ae1 };
      });
  }
  return _0x1375fb;
}
function RenderTemplateItemByBackdrop(_0x5f1fb3) {
  const _0x299930 = _0x1749cb,
    { templates: _0x148525, colors: _0x493dce } = profileMakerConfig;
  let _0x575625 = document[_0x299930(0xed)](_0x299930(0x179));
  _0x575625[_0x299930(0x11f)] = ITEM_CLASS;
  let _0x27b802 = CreateTemplateItemNode(_0x5f1fb3);
  _0x575625[_0x299930(0x8c)](_0x27b802);
  let _0x353525 = document[_0x299930(0xed)](_0x299930(0x179));
  _0x353525[_0x299930(0x11f)] = _0x299930(0xba);
  if (currentColorBg)
    currentColorBg[_0x299930(0x16c)] == _0x299930(0x172)
      ? (_0x353525['style']['backgroundColor'] = currentColorBg[_0x299930(0x172)])
      : (_0x353525[_0x299930(0x16f)][_0x299930(0x8b)] =
          'linear-gradient(to\x20right,\x20' + currentColorBg[_0x299930(0x172)] + ')');
  else {
    const _0x2b3b6d = (currentTime + _0x5f1fb3[_0x299930(0x8d)]) % _0x493dce[_0x299930(0xc2)];
    _0x353525[_0x299930(0x16f)]['backgroundColor'] = _0x493dce[_0x2b3b6d];
  }
  let _0x365b5d = document['createElement'](_0x299930(0x179));
  (_0x365b5d[_0x299930(0x11f)] = _0x299930(0xd7)),
    (_0x365b5d[_0x299930(0x16f)][_0x299930(0x8b)] =
      _0x299930(0x131) + URL_PROFILE_MAKER + _0x5f1fb3['layer']['img_url'] + ')'),
    (_0x365b5d[_0x299930(0x16f)][_0x299930(0xf3)] = _0x5f1fb3[_0x299930(0x15c)]['opacity']),
    _0x353525[_0x299930(0x8c)](_0x365b5d);
  let _0x525549 = document['createElement'](_0x299930(0x179));
  (_0x525549['className'] = _0x299930(0x13a)), _0x353525[_0x299930(0x8c)](_0x525549);
  if (_0x5f1fb3[_0x299930(0x12c)]) {
    let _0x8c4fcf = document[_0x299930(0xed)](_0x299930(0x179));
    (_0x8c4fcf['className'] = _0x299930(0xd7)),
      (_0x8c4fcf['style']['backgroundImage'] =
        _0x299930(0x131) + URL_PROFILE_MAKER + _0x5f1fb3[_0x299930(0x12c)][_0x299930(0xc3)] + ')'),
      (_0x8c4fcf[_0x299930(0x16f)][_0x299930(0xf3)] = _0x5f1fb3['layer_ext'][_0x299930(0xf3)]),
      _0x353525[_0x299930(0x8c)](_0x8c4fcf);
  }
  if (typeof _0x148525[_0x5f1fb3[_0x299930(0x8d)]]['loadedImg'] == _0x299930(0x127)) {
    _0x148525[_0x5f1fb3[_0x299930(0x8d)]]['loadedImg'] = {};
    let _0x530014 = new Image();
    (_0x530014['src'] = URL_PROFILE_MAKER + _0x5f1fb3[_0x299930(0x15c)]['img_url']),
      (_0x530014[_0x299930(0xab)] = function () {
        const _0x3f8839 = _0x299930;
        _0x148525[_0x5f1fb3[_0x3f8839(0x8d)]][_0x3f8839(0x11c)][_0x3f8839(0x124)] = _0x530014;
      });
    if (_0x5f1fb3[_0x299930(0x12c)]) {
      let _0x11c0a1 = new Image();
      (_0x11c0a1[_0x299930(0xfa)] =
        URL_PROFILE_MAKER + _0x5f1fb3[_0x299930(0x12c)][_0x299930(0xc3)]),
        (_0x11c0a1[_0x299930(0xab)] = function () {
          const _0x222772 = _0x299930;
          _0x148525[_0x5f1fb3[_0x222772(0x8d)]]['loadedImg'][_0x222772(0xe1)] = _0x11c0a1;
        });
    }
  }
  return _0x27b802[_0x299930(0x8c)](_0x353525), _0x575625;
}
function RenderTemplateItemByDecal(_0x13bdeb) {
  const _0x61a905 = _0x1749cb,
    { templates: _0x55a634, gradients: _0x460c8a } = profileMakerConfig;
  let _0x373a2a = document[_0x61a905(0xed)]('div');
  _0x373a2a['className'] = ITEM_CLASS;
  let _0x2f5595 = CreateTemplateItemNode(_0x13bdeb);
  _0x373a2a[_0x61a905(0x8c)](_0x2f5595);
  let _0x103914 = document['createElement'](_0x61a905(0x179));
  _0x103914['className'] = _0x61a905(0xba);
  if (currentColorBg)
    currentColorBg[_0x61a905(0x16c)] == _0x61a905(0x172)
      ? (_0x103914[_0x61a905(0x16f)][_0x61a905(0x138)] = currentColorBg[_0x61a905(0x172)])
      : (_0x103914[_0x61a905(0x16f)][_0x61a905(0x8b)] =
          _0x61a905(0xcd) + currentColorBg[_0x61a905(0x172)] + ')');
  else {
    const _0x423c09 = (currentTime + _0x13bdeb[_0x61a905(0x8d)]) % _0x460c8a[_0x61a905(0xc2)];
    _0x103914['style'][_0x61a905(0x8b)] = _0x61a905(0xcd) + _0x460c8a[_0x423c09] + ')';
  }
  _0x2f5595['appendChild'](_0x103914);
  let _0x12d2dd = document['createElement']('img');
  (_0x12d2dd[_0x61a905(0x11f)] = 'profile-maker-decal'),
    (_0x12d2dd['src'] = URL_PROFILE_MAKER + _0x13bdeb['img_url']),
    _0x103914['appendChild'](_0x12d2dd);
  if (typeof _0x55a634[_0x13bdeb['index']]['loadedImg'] == _0x61a905(0x127)) {
    let _0x3bcb14 = new Image();
    (_0x3bcb14[_0x61a905(0xfa)] = URL_PROFILE_MAKER + _0x13bdeb[_0x61a905(0xc3)]),
      (_0x3bcb14[_0x61a905(0xab)] = function () {
        const _0x2062a = _0x61a905;
        _0x55a634[_0x13bdeb[_0x2062a(0x8d)]]['loadedImg'] = { back: _0x3bcb14 };
      });
  }
  let _0x400c8f = document['createElement'](_0x61a905(0x179));
  return (
    (_0x400c8f[_0x61a905(0x11f)] = _0x61a905(0x13a)),
    _0x103914[_0x61a905(0x8c)](_0x400c8f),
    _0x373a2a
  );
}
function RenderTemplateItemByDoubleColor(_0x5f473f) {
  const _0x2af3a7 = _0x1749cb;
  let _0x416170 = document[_0x2af3a7(0xed)]('div');
  _0x416170[_0x2af3a7(0x11f)] = ITEM_CLASS;
  let _0x54f1ed = CreateTemplateItemNode(_0x5f473f);
  _0x416170[_0x2af3a7(0x8c)](_0x54f1ed);
  let _0xef0580 = document[_0x2af3a7(0xed)]('div');
  (_0xef0580[_0x2af3a7(0x11f)] = _0x2af3a7(0x12d)), _0x54f1ed['appendChild'](_0xef0580);
  let _0x105c9d = document['createElement'](_0x2af3a7(0x179));
  (_0x105c9d['className'] = 'profile-maker-double-color\x20left'),
    _0xef0580[_0x2af3a7(0x8c)](_0x105c9d);
  let _0x364544 = document[_0x2af3a7(0xed)](_0x2af3a7(0x179));
  (_0x364544['className'] = 'profile-maker-double-color\x20right'),
    _0xef0580[_0x2af3a7(0x8c)](_0x364544);
  let _0x3ad13e = document[_0x2af3a7(0xed)](_0x2af3a7(0x179));
  return (
    (_0x3ad13e[_0x2af3a7(0x11f)] = 'profile-maker-photo\x20double-color'),
    _0xef0580['appendChild'](_0x3ad13e),
    _0x416170
  );
}
function RenderTemplateItemByBlending(_0x2183a0) {
  const _0xe41ebf = _0x1749cb,
    { colors: _0x3287e4 } = profileMakerConfig;
  let _0x5652a7 = document[_0xe41ebf(0xed)](_0xe41ebf(0x179));
  _0x5652a7[_0xe41ebf(0x11f)] = ITEM_CLASS;
  let _0x178b6d = CreateTemplateItemNode(_0x2183a0);
  _0x5652a7[_0xe41ebf(0x8c)](_0x178b6d);
  let _0x3de79d = document['createElement']('div');
  _0x3de79d['className'] = _0xe41ebf(0x177);
  if (currentColorBg)
    currentColorBg['type'] == _0xe41ebf(0x172)
      ? (_0x3de79d[_0xe41ebf(0x16f)][_0xe41ebf(0x138)] = currentColorBg[_0xe41ebf(0x172)])
      : (_0x3de79d[_0xe41ebf(0x16f)][_0xe41ebf(0x8b)] =
          'linear-gradient(to\x20right,\x20' + currentColorBg[_0xe41ebf(0x172)] + ')');
  else {
    const _0x21bc72 = (currentTime + _0x2183a0['index']) % _0x3287e4[_0xe41ebf(0xc2)];
    _0x3de79d['style'][_0xe41ebf(0x138)] = _0x3287e4[_0x21bc72];
  }
  _0x178b6d['appendChild'](_0x3de79d);
  let _0x2185b9 = document['createElement'](_0xe41ebf(0x179));
  return (
    (_0x2185b9['className'] = _0xe41ebf(0x13a)),
    (_0x2185b9[_0xe41ebf(0x16f)][_0xe41ebf(0xc9)] = _0x2183a0[_0xe41ebf(0x10f)]),
    _0x3de79d[_0xe41ebf(0x8c)](_0x2185b9),
    _0x5652a7
  );
}
function RenderTemplateItemByMask(_0xd2f7ee) {
  const _0x225267 = _0x1749cb;
  let _0x3d8512 = document[_0x225267(0xed)](_0x225267(0x179));
  _0x3d8512['className'] = ITEM_CLASS;
  let _0x34eefe = CreateTemplateItemNode(_0xd2f7ee);
  _0xd2f7ee[_0x225267(0x10f)] == _0x225267(0xc7) &&
    (_0x34eefe[_0x225267(0x11f)] = _0x225267(0x109));
  _0x3d8512[_0x225267(0x8c)](_0x34eefe);
  let _0x15b64c = document[_0x225267(0xed)](_0x225267(0x179));
  _0x15b64c['className'] = _0x225267(0xba);
  currentColorBg
    ? currentColorBg[_0x225267(0x16c)] == _0x225267(0x172)
      ? (_0x15b64c[_0x225267(0x16f)][_0x225267(0x138)] = currentColorBg[_0x225267(0x172)])
      : (_0x15b64c[_0x225267(0x16f)]['backgroundImage'] =
          _0x225267(0xcd) + currentColorBg[_0x225267(0x172)] + ')')
    : (_0x15b64c[_0x225267(0x16f)]['backgroundColor'] = _0x225267(0xb2));
  _0x34eefe[_0x225267(0x8c)](_0x15b64c);
  let _0x3988f2 = document['createElement'](_0x225267(0x179));
  return (
    _0xd2f7ee['mode'] !== _0x225267(0xc7) &&
      (_0x3988f2['className'] = 'profile-maker-photo-masked'),
    _0x15b64c['appendChild'](_0x3988f2),
    _0x3d8512
  );
}
function ShowEditImageTool(_0x1371fc) {
  const _0x1e6421 = _0x1749cb;
  (currentTool = 0x1),
    $(_0x1e6421(0x132))[_0x1e6421(0xd5)](_0x1371fc[_0x1e6421(0x173)]),
    $('#modalEditProfileMaker\x20.modal-title\x20span')[_0x1e6421(0xbf)](_0x1e6421(0xa8)),
    $('.tool-control')[_0x1e6421(0x144)](),
    $(_0x1e6421(0xc8))[_0x1e6421(0x151)](),
    $(_0x1e6421(0x17b))[_0x1e6421(0x151)](),
    $('#modalEditProfileMaker')[_0x1e6421(0x141)](_0x1e6421(0x151));
}
function ShowChangeColorBackgroundTool(_0x5a4f59) {
  const _0x2f6b1b = _0x1749cb;
  (currentTool = 0x2),
    $('#modalEditProfileMaker\x20.modal-title')[_0x2f6b1b(0xd5)](_0x5a4f59[_0x2f6b1b(0x173)]),
    $('#modalEditProfileMaker\x20.modal-title\x20span')['removeClass']('d-none'),
    $(_0x2f6b1b(0x11d))[_0x2f6b1b(0x144)](),
    $(_0x2f6b1b(0xec))[_0x2f6b1b(0x151)](),
    $(_0x2f6b1b(0x17b))['hide'](),
    $(_0x2f6b1b(0x15d))[_0x2f6b1b(0x141)](_0x2f6b1b(0x151));
}
function ShowChangeShadowTool(_0x2fa4e3) {
  const _0x272c11 = _0x1749cb;
  (currentTool = 0x3),
    $(_0x272c11(0x132))[_0x272c11(0xd5)](_0x2fa4e3[_0x272c11(0x173)]),
    $(_0x272c11(0x95))[_0x272c11(0xbf)](_0x272c11(0xa8)),
    $(_0x272c11(0x11d))[_0x272c11(0x144)](),
    $(_0x272c11(0x105))[_0x272c11(0x151)](),
    $('.layer-frame-shape')[_0x272c11(0x144)](),
    $('#modalEditProfileMaker')['modal'](_0x272c11(0x151));
}
function ChooseTemplate(_0x397522) {
  const _0x478251 = _0x1749cb,
    { templates: _0x4200f } = profileMakerConfig;
  (curTemplate = undefined),
    _0x4200f[_0x478251(0x13b)]((_0xf9117e, _0xcf73e0) => {
      _0xf9117e['id'] == _0x397522 && (curTemplate = _0xf9117e);
    });
  if (typeof curTemplate == _0x478251(0x127)) {
    showError('Template\x20invalid');
    return;
  }
  (currentTool = 0x4),
    $(_0x478251(0x11d))['hide'](),
    $(_0x478251(0xa3))[_0x478251(0x151)](),
    $(_0x478251(0x132))[_0x478251(0xd5)](_0x478251(0x13e)),
    $('#modalEditProfileMaker\x20.modal-footer\x20.btn-primary')[_0x478251(0x144)](),
    $(_0x478251(0x17b))[_0x478251(0x144)](),
    $('#modalEditProfileMaker')[_0x478251(0x141)](_0x478251(0x151));
}
function ChangeCategory(_0x33a4df) {
  const _0x1e327e = _0x1749cb;
  _0x33a4df != currentCategory &&
    ($('#category_list\x20li')[_0x1e327e(0xbf)](_0x1e327e(0x163)),
    $('#category_list\x20li[data-id=' + _0x33a4df + ']')[_0x1e327e(0x15f)]('active'),
    $(_0x1e327e(0x153))[_0x1e327e(0xbf)](_0x1e327e(0x163)),
    $(_0x1e327e(0x8e) + _0x33a4df + ']')['addClass']('active'),
    (currentCategory = _0x33a4df),
    LoadTemplateByCategory(_0x33a4df));
}
function ChangeColorBackground(_0x27bbf3) {
  (currentColorBg = _0x27bbf3), DrawCanvasChangeBackground();
}
function ChangeGradientBackground(_0x3099ca) {
  (currentColorBg = _0x3099ca), DrawCanvasChangeBackground();
}
function ChangeShadow(_0x31f3ba) {
  (currentShadowIndex = _0x31f3ba), DrawCanvasChangeShadow();
}
function EnableMoveCanvas() {
  const _0x580737 = _0x1749cb;
  $(_0x580737(0xda))
    [_0x580737(0xe2)](_0x580737(0x134), 'auto')
    [_0x580737(0xe2)](_0x580737(0x106), _0x580737(0x97)),
    (flagMoveActive = !![]),
    (flagEraserActive = ![]);
}
function DisableMoveCanvas() {
  const _0x45c79c = _0x1749cb;
  $('#profile_maker_canvas')
    [_0x45c79c(0xe2)](_0x45c79c(0x134), 'none')
    [_0x45c79c(0xe2)](_0x45c79c(0x106), 'auto'),
    (flagMoveActive = ![]);
}
function InitEditImageTool() {
  const _0x1e6e59 = _0x1749cb;
  ProcessResizeScreen(),
    GetOffset(),
    DrawCanvasEditImg(),
    (snapshotBeforeEdit = {
      position: { ...mainPosition },
      scale: mainScale,
      rotate: mainRotate,
      flip: isFlip,
      imgMask: ctxMask[_0x1e6e59(0xea)](
        0x0,
        0x0,
        canvasMask['width'],
        canvasMask[_0x1e6e59(0x120)]
      ),
    }),
    EnableMoveCanvas();
}
function InitChangeBgTool() {
  ProcessResizeScreen(),
    DrawCanvasChangeBackground(),
    (snapshotBeforeEdit = { bg: currentColorBg }),
    DisableMoveCanvas();
}
function InitChangeShadowTool() {
  ProcessResizeScreen(),
    DrawCanvasChangeShadow(),
    (snapshotBeforeEdit = { shadow: currentShadowIndex }),
    DisableMoveCanvas();
}
function InitResultImage() {
  ProcessResizeScreen(), DisableMoveCanvas(), DrawCanvasResult();
}
function LoadProfileImage() {
  (imageAvatar = new Image()),
    (imageAvatar['src'] = currentImage),
    (imageAvatar['onload'] = function () {
      const _0x2fdb0f = _0x5606;
      originalSize = {
        width: parseInt(this[_0x2fdb0f(0x16d)]),
        height: parseInt(this[_0x2fdb0f(0x120)]),
      };
      originalSize[_0x2fdb0f(0x16d)] > originalSize[_0x2fdb0f(0x120)]
        ? (mainSize = {
            width: parseInt(
              (originalSize[_0x2fdb0f(0x16d)] / originalSize[_0x2fdb0f(0x120)]) *
                canvas[_0x2fdb0f(0x120)]
            ),
            height: parseInt(canvas[_0x2fdb0f(0x120)]),
          })
        : (mainSize = {
            width: parseInt(canvas[_0x2fdb0f(0x16d)]),
            height: parseInt(
              (originalSize['height'] / originalSize[_0x2fdb0f(0x16d)]) * canvas[_0x2fdb0f(0x16d)]
            ),
          });
      (canvasMask['width'] = mainSize[_0x2fdb0f(0x16d)]),
        (canvasMask[_0x2fdb0f(0x120)] = mainSize[_0x2fdb0f(0x120)]),
        ctxMask[_0x2fdb0f(0x17a)](0x0, 0x0, canvasMask['width'], canvasMask[_0x2fdb0f(0x120)]);
      const _0x3dd78c = canvasMask[_0x2fdb0f(0x16d)] / 0x2,
        _0x26eb91 = canvasMask[_0x2fdb0f(0x120)] / 0x2;
      ctxMask[_0x2fdb0f(0x14f)](_0x3dd78c, _0x26eb91);
    });
}
function ProcessResizeScreen() {
  const _0x2fc0d1 = _0x1749cb;
  var _0x13e8ea = $(_0x2fc0d1(0xa1))[_0x2fc0d1(0x16d)]();
  (screenRateScale = _0x13e8ea / canvas['width']),
    $(_0x2fc0d1(0xc4))[_0x2fc0d1(0xe2)](_0x2fc0d1(0x16d), _0x13e8ea),
    $(_0x2fc0d1(0xc4))[_0x2fc0d1(0xe2)](
      _0x2fc0d1(0x120),
      screenRateScale * canvas[_0x2fc0d1(0x120)]
    );
}
function ClearCanvas() {
  const _0x19c42a = _0x1749cb;
  context[_0x19c42a(0x17a)](0x0, 0x0, canvas['width'], canvas[_0x19c42a(0x120)]);
}
function DrawCanvasEditImg() {
  const _0x51dbad = _0x1749cb;
  context[_0x51dbad(0x17a)](0x0, 0x0, canvas[_0x51dbad(0x16d)], canvas['height']),
    context[_0x51dbad(0x12a)](),
    context[_0x51dbad(0x14f)](mainPosition['x'], mainPosition['y']),
    isFlip && context['scale'](-0x1, 0x1),
    context[_0x51dbad(0xd9)]((mainRotate * Math['PI']) / 0xb4),
    context['drawImage'](
      imageAvatar,
      -mainSize['width'] / 0x2,
      -mainSize[_0x51dbad(0x120)] / 0x2,
      mainSize[_0x51dbad(0x16d)],
      mainSize[_0x51dbad(0x120)]
    ),
    (context[_0x51dbad(0x10d)] = 'destination-out'),
    context['drawImage'](
      canvasMask,
      -mainSize[_0x51dbad(0x16d)] / 0x2,
      -mainSize['height'] / 0x2,
      mainSize['width'],
      mainSize[_0x51dbad(0x120)]
    ),
    (context[_0x51dbad(0x10d)] = _0x51dbad(0x101)),
    context[_0x51dbad(0x159)](),
    flagEraserActive &&
      currentMoveX >= 0x0 &&
      currentMoveY >= 0x0 &&
      ((context[_0x51dbad(0x9f)] = _0x51dbad(0x11b)),
      context[_0x51dbad(0x15b)](),
      context[_0x51dbad(0xaa)](currentMoveX, currentMoveY, eraserPointSize, 0x0, 0x2 * Math['PI']),
      context[_0x51dbad(0x17c)]());
}
function DrawEraserLine() {
  const _0x3416b8 = _0x1749cb;
  if (
    flagEraserActive &&
    currentMoveX >= 0x0 &&
    currentMoveY >= 0x0 &&
    beginMoveX != currentMoveX &&
    beginMoveY != currentMoveY
  ) {
    let _0x1895ce = currentMoveX,
      _0x28b29b = beginMoveX;
    isFlip &&
      ((_0x1895ce = GetVertical(mainPosition['x'], currentMoveX)),
      (_0x28b29b = GetVertical(mainPosition['x'], beginMoveX)));
    const _0x39ffff = Rotate(
        mainPosition['x'],
        mainPosition['y'],
        _0x1895ce,
        currentMoveY,
        mainRotate
      ),
      _0x32f6b7 = _0x39ffff[0x0],
      _0x6759ea = _0x39ffff[0x1];
    let _0x37e4c5 = (-(mainPosition['x'] - _0x32f6b7) * SCALE_DEFAULT) / mainScale,
      _0x3aa0fb = (-(mainPosition['y'] - _0x6759ea) * SCALE_DEFAULT) / mainScale;
    const _0x4a389a = Rotate(
        mainPosition['x'],
        mainPosition['y'],
        _0x28b29b,
        beginMoveY,
        mainRotate
      ),
      _0x51f755 = _0x4a389a[0x0],
      _0x3bdd00 = _0x4a389a[0x1];
    let _0x499bb2 = (-(mainPosition['x'] - _0x51f755) * SCALE_DEFAULT) / mainScale,
      _0x25b2f2 = (-(mainPosition['y'] - _0x3bdd00) * SCALE_DEFAULT) / mainScale;
    const _0x4ed0b2 = (eraserPointSize * SCALE_DEFAULT) / mainScale;
    ctxMask['beginPath'](),
      ctxMask[_0x3416b8(0x94)](_0x499bb2, _0x25b2f2),
      (ctxMask[_0x3416b8(0x17d)] = _0x3416b8(0x164)),
      (ctxMask[_0x3416b8(0xf2)] = 'round'),
      (ctxMask[_0x3416b8(0x12e)] = _0x4ed0b2 * 0x2),
      ctxMask[_0x3416b8(0x140)](_0x37e4c5, _0x3aa0fb),
      ctxMask[_0x3416b8(0x91)](),
      (beginMoveX = currentMoveX),
      (beginMoveY = currentMoveY);
  }
}
function DrawEraserPoint() {
  const _0x30aecf = _0x1749cb;
  let _0x1ab922 = currentMoveX;
  isFlip && (_0x1ab922 = GetVertical(mainPosition['x'], currentMoveX));
  const _0x4246bc = Rotate(
      mainPosition['x'],
      mainPosition['y'],
      _0x1ab922,
      currentMoveY,
      mainRotate
    ),
    _0xf3cd39 = _0x4246bc[0x0],
    _0x42231b = _0x4246bc[0x1];
  let _0x1fda1e = (-(mainPosition['x'] - _0xf3cd39) * SCALE_DEFAULT) / mainScale,
    _0x4a6ec6 = (-(mainPosition['y'] - _0x42231b) * SCALE_DEFAULT) / mainScale;
  const _0xab01d4 = (eraserPointSize * SCALE_DEFAULT) / mainScale;
  (ctxMask['fillStyle'] = _0x30aecf(0x11b)),
    ctxMask['beginPath'](),
    ctxMask[_0x30aecf(0xaa)](_0x1fda1e, _0x4a6ec6, _0xab01d4, 0x0, 0x2 * Math['PI']),
    ctxMask['fill']();
}
function GetImageDataResult() {
  const _0x4441fc = _0x1749cb,
    _0x3cdee9 = document[_0x4441fc(0xed)](_0x4441fc(0xe4)),
    _0x1654be = _0x3cdee9[_0x4441fc(0x10c)]('2d'),
    _0x2a2e60 = canvas['width'],
    _0x23669f = canvas[_0x4441fc(0x16d)];
  return (
    (_0x3cdee9[_0x4441fc(0x16d)] = _0x2a2e60),
    (_0x3cdee9[_0x4441fc(0x120)] = _0x23669f),
    _0x1654be[_0x4441fc(0x12a)](),
    _0x1654be['translate'](mainPosition['x'], mainPosition['y']),
    isFlip && _0x1654be[_0x4441fc(0x98)](-0x1, 0x1),
    _0x1654be[_0x4441fc(0xd9)]((mainRotate * Math['PI']) / 0xb4),
    _0x1654be[_0x4441fc(0x123)](
      imageAvatar,
      -mainSize[_0x4441fc(0x16d)] / 0x2,
      -mainSize['height'] / 0x2,
      mainSize['width'],
      mainSize[_0x4441fc(0x120)]
    ),
    (_0x1654be[_0x4441fc(0x10d)] = 'destination-out'),
    _0x1654be[_0x4441fc(0x123)](
      canvasMask,
      -mainSize[_0x4441fc(0x16d)] / 0x2,
      -mainSize[_0x4441fc(0x120)] / 0x2,
      mainSize[_0x4441fc(0x16d)],
      mainSize['height']
    ),
    (_0x1654be[_0x4441fc(0x10d)] = _0x4441fc(0x101)),
    _0x1654be[_0x4441fc(0x159)](),
    {
      imgSrc: _0x3cdee9[_0x4441fc(0x103)](_0x4441fc(0x174)),
      imgData: _0x1654be[_0x4441fc(0xea)](
        0x0,
        0x0,
        _0x3cdee9[_0x4441fc(0x16d)],
        _0x3cdee9[_0x4441fc(0x120)]
      ),
    }
  );
}
function DrawCanvasChangeBackground() {
  const _0x545b21 = _0x1749cb;
  context[_0x545b21(0x17a)](0x0, 0x0, canvas[_0x545b21(0x16d)], canvas[_0x545b21(0x120)]),
    DrawBackgroundCurrentColor();
  if (typeof currentImageFromCanvas != 'undefined') {
    const _0x583f22 = document[_0x545b21(0xed)](_0x545b21(0xe4));
    (_0x583f22[_0x545b21(0x16d)] = canvas['width']),
      (_0x583f22[_0x545b21(0x120)] = canvas[_0x545b21(0x120)]);
    const _0x1f1198 = _0x583f22['getContext']('2d');
    _0x1f1198[_0x545b21(0xf8)](currentImageFromCanvas, 0x0, 0x0),
      context['drawImage'](_0x583f22, 0x0, 0x0);
    return;
  }
  context[_0x545b21(0x12a)](),
    context[_0x545b21(0x14f)](mainPosition['x'], mainPosition['y']),
    isFlip && context[_0x545b21(0x98)](-0x1, 0x1),
    context[_0x545b21(0xd9)]((mainRotate * Math['PI']) / 0xb4),
    context[_0x545b21(0x123)](
      imageAvatar,
      -mainSize[_0x545b21(0x16d)] / 0x2,
      -mainSize[_0x545b21(0x120)] / 0x2,
      mainSize[_0x545b21(0x16d)],
      mainSize[_0x545b21(0x120)]
    ),
    context[_0x545b21(0x159)]();
}
function DrawCanvasChangeShadow() {
  const _0x179324 = _0x1749cb;
  context['clearRect'](0x0, 0x0, canvas['width'], canvas[_0x179324(0x120)]),
    DrawBackgroundCurrentColor(),
    context[_0x179324(0x12a)]();
  if (typeof currentImageFromCanvas != _0x179324(0x127)) {
    if (typeof currentShadowIndex != _0x179324(0x127)) {
      const { shadows: _0x139f9c } = profileMakerConfig,
        _0x2bd3de = _0x139f9c[currentShadowIndex];
      context['filter'] = ConvertShadowBySize(_0x2bd3de, canvas['width']);
    }
    const _0x4bc1f1 = document[_0x179324(0xed)](_0x179324(0xe4));
    (_0x4bc1f1['width'] = canvas[_0x179324(0x16d)]),
      (_0x4bc1f1[_0x179324(0x120)] = canvas['height']);
    const _0x2319ef = _0x4bc1f1[_0x179324(0x10c)]('2d');
    _0x2319ef[_0x179324(0xf8)](currentImageFromCanvas, 0x0, 0x0),
      context['drawImage'](_0x4bc1f1, 0x0, 0x0);
  } else {
    context[_0x179324(0x14f)](mainPosition['x'], mainPosition['y']);
    isFlip && context['scale'](-0x1, 0x1);
    context[_0x179324(0xd9)]((mainRotate * Math['PI']) / 0xb4);
    if (typeof currentShadowIndex != _0x179324(0x127)) {
      const { shadows: _0x57ebe4 } = profileMakerConfig,
        _0x18571e = _0x57ebe4[currentShadowIndex];
      context[_0x179324(0x148)] = ConvertShadowBySize(_0x18571e, canvas[_0x179324(0x16d)]);
    }
    context[_0x179324(0x123)](
      imageAvatar,
      -mainSize[_0x179324(0x16d)] / 0x2,
      -mainSize[_0x179324(0x120)] / 0x2,
      mainSize['width'],
      mainSize[_0x179324(0x120)]
    );
  }
  context[_0x179324(0x159)]();
  return;
}
function DrawCanvasResult() {
  const _0x15c151 = _0x1749cb;
  if (curTemplate[_0x15c151(0x16c)] == 0x4) return DrawCanvasResultDoubleColor();
  if (curTemplate[_0x15c151(0x16c)] == 0x5) return DrawCanvasResultByBlending();
  if (curTemplate[_0x15c151(0x16c)] == 0x6) return DrawCanvasResultByMask();
  context[_0x15c151(0x17a)](0x0, 0x0, canvas[_0x15c151(0x16d)], canvas[_0x15c151(0x120)]);
  if (currentColorBg) DrawBackgroundCurrentColor();
  else {
    const { colors: _0x2df600, gradients: _0x536fe0 } = profileMakerConfig;
    let _0x2df378 = (currentTime + curTemplate['index']) % _0x2df600[_0x15c151(0xc2)];
    if (curTemplate[_0x15c151(0x16c)] == 0x3) {
      _0x2df378 = (currentTime + curTemplate['index']) % _0x536fe0[_0x15c151(0xc2)];
      const _0x27431c = _0x536fe0[_0x2df378]['split'](',\x20');
      var _0x53d690 = context['createLinearGradient'](0x0, 0x0, canvas[_0x15c151(0x16d)], 0x0);
      _0x53d690[_0x15c151(0xdc)](0x0, _0x27431c[0x0]),
        _0x53d690['addColorStop'](0x1, _0x27431c[0x1]),
        (context['fillStyle'] = _0x53d690),
        context['fillRect'](0x0, 0x0, canvas['width'], canvas[_0x15c151(0x120)]);
    } else
      (context['fillStyle'] = _0x2df600[_0x2df378]),
        context['fillRect'](0x0, 0x0, canvas[_0x15c151(0x16d)], canvas[_0x15c151(0x120)]);
  }
  curTemplate[_0x15c151(0x11c)] &&
    curTemplate[_0x15c151(0x11c)][_0x15c151(0x124)] &&
    context[_0x15c151(0x123)](
      curTemplate['loadedImg'][_0x15c151(0x124)],
      0x0,
      0x0,
      parseInt(curTemplate[_0x15c151(0x11c)][_0x15c151(0x124)][_0x15c151(0x16d)]),
      parseInt(curTemplate[_0x15c151(0x11c)][_0x15c151(0x124)][_0x15c151(0x120)]),
      0x0,
      0x0,
      canvas['width'],
      canvas[_0x15c151(0x120)]
    );
  context[_0x15c151(0x12a)]();
  if (typeof currentImageFromCanvas != _0x15c151(0x127)) {
    if (typeof currentShadowIndex != _0x15c151(0x127)) {
      const { shadows: _0x1b3ac6 } = profileMakerConfig,
        _0x59841a = _0x1b3ac6[currentShadowIndex];
      context[_0x15c151(0x148)] = ConvertShadowBySize(_0x59841a, canvas['width']);
    }
    const _0x188845 = document[_0x15c151(0xed)](_0x15c151(0xe4));
    (_0x188845[_0x15c151(0x16d)] = canvas[_0x15c151(0x16d)]),
      (_0x188845[_0x15c151(0x120)] = canvas[_0x15c151(0x120)]);
    const _0x21a1d7 = _0x188845[_0x15c151(0x10c)]('2d');
    _0x21a1d7['putImageData'](currentImageFromCanvas, 0x0, 0x0),
      context[_0x15c151(0x123)](_0x188845, 0x0, 0x0);
  } else {
    context[_0x15c151(0x14f)](mainPosition['x'], mainPosition['y']);
    isFlip && context[_0x15c151(0x98)](-0x1, 0x1);
    context[_0x15c151(0xd9)]((mainRotate * Math['PI']) / 0xb4);
    if (typeof currentShadowIndex != _0x15c151(0x127)) {
      const { shadows: _0x36d600 } = profileMakerConfig,
        _0x29d2e4 = _0x36d600[currentShadowIndex];
      context[_0x15c151(0x148)] = ConvertShadowBySize(_0x29d2e4, canvas[_0x15c151(0x16d)]);
    }
    context[_0x15c151(0x123)](
      imageAvatar,
      -mainSize[_0x15c151(0x16d)] / 0x2,
      -mainSize['height'] / 0x2,
      mainSize[_0x15c151(0x16d)],
      mainSize[_0x15c151(0x120)]
    );
  }
  context[_0x15c151(0x159)](),
    curTemplate[_0x15c151(0x11c)] &&
      curTemplate[_0x15c151(0x11c)][_0x15c151(0xe1)] &&
      context[_0x15c151(0x123)](
        curTemplate[_0x15c151(0x11c)][_0x15c151(0xe1)],
        0x0,
        0x0,
        parseInt(curTemplate[_0x15c151(0x11c)][_0x15c151(0xe1)][_0x15c151(0x16d)]),
        parseInt(curTemplate[_0x15c151(0x11c)]['front']['height']),
        0x0,
        0x0,
        canvas[_0x15c151(0x16d)],
        canvas[_0x15c151(0x120)]
      );
}
function DrawCanvasResultDoubleColor() {
  const _0x25ca89 = _0x1749cb;
  context[_0x25ca89(0x17a)](0x0, 0x0, canvas[_0x25ca89(0x16d)], canvas[_0x25ca89(0x120)]),
    (context[_0x25ca89(0x9f)] = _0x25ca89(0xcb)),
    context[_0x25ca89(0x90)](0x0, 0x0, canvas[_0x25ca89(0x16d)], canvas[_0x25ca89(0x120)]);
  const _0x1e9d07 = MaskColorImageCanvas({ type: _0x25ca89(0x172), color: _0x25ca89(0xdd) });
  (context['globalAlpha'] = 0.2), context[_0x25ca89(0x123)](_0x1e9d07, -16.6667, 0x0);
  const _0xc12a98 = MaskColorImageCanvas({ type: _0x25ca89(0x172), color: _0x25ca89(0x114) });
  context[_0x25ca89(0x123)](_0xc12a98, 16.6667, 0x0),
    (context[_0x25ca89(0xd8)] = 0x1),
    context[_0x25ca89(0x12a)]();
  if (typeof currentImageFromCanvas != _0x25ca89(0x127)) {
    const _0x206bd6 = document['createElement'](_0x25ca89(0xe4));
    (_0x206bd6['width'] = canvas['width']), (_0x206bd6['height'] = canvas[_0x25ca89(0x120)]);
    const _0x1e99a1 = _0x206bd6[_0x25ca89(0x10c)]('2d');
    _0x1e99a1['putImageData'](currentImageFromCanvas, 0x0, 0x0),
      context[_0x25ca89(0x123)](_0x206bd6, 0x0, 0x0);
  } else
    context[_0x25ca89(0x14f)](mainPosition['x'], mainPosition['y']),
      isFlip && context['scale'](-0x1, 0x1),
      context[_0x25ca89(0xd9)]((mainRotate * Math['PI']) / 0xb4),
      context[_0x25ca89(0x123)](
        imageAvatar,
        -mainSize['width'] / 0x2,
        -mainSize['height'] / 0x2,
        mainSize['width'],
        mainSize[_0x25ca89(0x120)]
      );
  context[_0x25ca89(0x159)]();
}
function DrawCanvasResultByBlending() {
  const _0x1911ae = _0x1749cb;
  context[_0x1911ae(0x17a)](0x0, 0x0, canvas[_0x1911ae(0x16d)], canvas['height']),
    (context['fillStyle'] = 'white'),
    context[_0x1911ae(0x90)](0x0, 0x0, canvas[_0x1911ae(0x16d)], canvas[_0x1911ae(0x120)]);
  if (currentColorBg) {
    const _0x53a945 = MaskColorImageCanvas(currentColorBg);
    context[_0x1911ae(0x123)](_0x53a945, 0x0, 0x0);
  } else {
    const { colors: _0x2b0abf } = profileMakerConfig,
      _0x5d86da = (currentTime + curTemplate[_0x1911ae(0x8d)]) % _0x2b0abf[_0x1911ae(0xc2)],
      _0x1af12d = MaskColorImageCanvas({ type: _0x1911ae(0x172), color: _0x2b0abf[_0x5d86da] });
    context[_0x1911ae(0x123)](_0x1af12d, 0x0, 0x0);
  }
  context[_0x1911ae(0x12a)]();
  if (typeof currentImageFromCanvas != 'undefined') {
    const _0x1a2bd1 = document[_0x1911ae(0xed)](_0x1911ae(0xe4));
    (_0x1a2bd1[_0x1911ae(0x16d)] = canvas[_0x1911ae(0x16d)]),
      (_0x1a2bd1[_0x1911ae(0x120)] = canvas[_0x1911ae(0x120)]);
    const _0x4ae3fe = _0x1a2bd1[_0x1911ae(0x10c)]('2d');
    _0x4ae3fe[_0x1911ae(0xf8)](currentImageFromCanvas, 0x0, 0x0),
      (context[_0x1911ae(0x10d)] = curTemplate['mode'] || 'screen'),
      context['drawImage'](_0x1a2bd1, 0x0, 0x0);
  } else
    context[_0x1911ae(0x14f)](mainPosition['x'], mainPosition['y']),
      isFlip && context[_0x1911ae(0x98)](-0x1, 0x1),
      context[_0x1911ae(0xd9)]((mainRotate * Math['PI']) / 0xb4),
      (context[_0x1911ae(0x10d)] = curTemplate[_0x1911ae(0x10f)] || _0x1911ae(0x9d)),
      context['drawImage'](
        imageAvatar,
        -mainSize[_0x1911ae(0x16d)] / 0x2,
        -mainSize['height'] / 0x2,
        mainSize['width'],
        mainSize['height']
      );
  context[_0x1911ae(0x159)](), (context[_0x1911ae(0x10d)] = _0x1911ae(0x101));
}
function DrawCanvasResultByMask() {
  const _0x2b4ea1 = _0x1749cb;
  context['clearRect'](0x0, 0x0, canvas['width'], canvas[_0x2b4ea1(0x120)]);
  let _0x56b662 = MaskColorImageCanvas({ type: _0x2b4ea1(0x172), color: _0x2b4ea1(0xcb) });
  curTemplate['mode'] == _0x2b4ea1(0xc7)
    ? ((context['fillStyle'] = _0x2b4ea1(0xcb)),
      context['fillRect'](0x0, 0x0, canvas['width'], canvas[_0x2b4ea1(0x120)]),
      currentColorBg
        ? (_0x56b662 = MaskColorImageCanvas(currentColorBg))
        : (_0x56b662 = MaskColorImageCanvas({ type: _0x2b4ea1(0x172), color: _0x2b4ea1(0xc7) })))
    : currentColorBg
    ? DrawBackgroundCurrentColor()
    : ((context[_0x2b4ea1(0x9f)] = _0x2b4ea1(0xc7)),
      context[_0x2b4ea1(0x90)](0x0, 0x0, canvas['width'], canvas['height'])),
    context[_0x2b4ea1(0x123)](_0x56b662, 0x0, 0x0);
}
function MaskColorImageCanvas(_0x201ee2) {
  const _0x27f19c = _0x1749cb,
    _0x358a95 = document[_0x27f19c(0xed)]('canvas'),
    _0x48c43c = _0x358a95[_0x27f19c(0x10c)]('2d');
  (_0x358a95[_0x27f19c(0x16d)] = canvas['width']),
    (_0x358a95['height'] = canvas[_0x27f19c(0x120)]),
    _0x48c43c[_0x27f19c(0x12a)]();
  if (typeof currentImageFromCanvas != _0x27f19c(0x127)) {
    const _0x60ad30 = document[_0x27f19c(0xed)]('canvas');
    (_0x60ad30[_0x27f19c(0x16d)] = canvas[_0x27f19c(0x16d)]),
      (_0x60ad30['height'] = canvas['height']);
    const _0x37b345 = _0x60ad30[_0x27f19c(0x10c)]('2d');
    _0x37b345[_0x27f19c(0xf8)](currentImageFromCanvas, 0x0, 0x0),
      _0x48c43c[_0x27f19c(0x123)](_0x60ad30, 0x0, 0x0);
  } else
    _0x48c43c[_0x27f19c(0x14f)](mainPosition['x'], mainPosition['y']),
      isFlip && _0x48c43c[_0x27f19c(0x98)](-0x1, 0x1),
      _0x48c43c[_0x27f19c(0xd9)]((mainRotate * Math['PI']) / 0xb4),
      _0x48c43c['drawImage'](
        imageAvatar,
        -mainSize[_0x27f19c(0x16d)] / 0x2,
        -mainSize['height'] / 0x2,
        mainSize[_0x27f19c(0x16d)],
        mainSize[_0x27f19c(0x120)]
      );
  _0x48c43c['restore'](), (_0x48c43c['globalCompositeOperation'] = 'source-in');
  const { type: _0x405220, color: _0x37d60c } = _0x201ee2;
  if (_0x405220 == _0x27f19c(0x172))
    (_0x48c43c[_0x27f19c(0x9f)] = _0x37d60c),
      _0x48c43c[_0x27f19c(0x90)](0x0, 0x0, _0x358a95[_0x27f19c(0x16d)], _0x358a95['height']);
  else {
    const _0xa3098a = _0x37d60c['split'](',\x20');
    var _0x237f62 = _0x48c43c[_0x27f19c(0x89)](0x0, 0x0, _0x358a95['width'], 0x0);
    _0x237f62[_0x27f19c(0xdc)](0x0, _0xa3098a[0x0]),
      _0x237f62[_0x27f19c(0xdc)](0x1, _0xa3098a[0x1]),
      (_0x48c43c[_0x27f19c(0x9f)] = _0x237f62),
      _0x48c43c['fillRect'](0x0, 0x0, _0x358a95[_0x27f19c(0x16d)], _0x358a95[_0x27f19c(0x120)]);
  }
  return _0x358a95;
}
function DrawBackgroundCurrentColor() {
  const _0x3bee52 = _0x1749cb;
  if (currentColorBg) {
    currentColorBg[_0x3bee52(0x16c)] == _0x3bee52(0x172) &&
      (context[_0x3bee52(0x9f)] = currentColorBg[_0x3bee52(0x172)]);
    if (currentColorBg['type'] == _0x3bee52(0xcc)) {
      const _0x111f59 = currentColorBg['color']['split'](',\x20');
      var _0x5e5c00 = context[_0x3bee52(0x89)](0x0, 0x0, canvas[_0x3bee52(0x16d)], 0x0);
      _0x5e5c00[_0x3bee52(0xdc)](0x0, _0x111f59[0x0]),
        _0x5e5c00['addColorStop'](0x1, _0x111f59[0x1]),
        (context[_0x3bee52(0x9f)] = _0x5e5c00);
    }
    context[_0x3bee52(0x90)](0x0, 0x0, canvas[_0x3bee52(0x16d)], canvas[_0x3bee52(0x120)]);
  }
}
function ConvertShadowBySize(_0x43995b, _0x418f02) {
  const _0x50b981 = _0x1749cb;
  if (_0x418f02 <= 0x0) return '';
  const _0x386265 = 0x3e8;
  return (
    _0x50b981(0xe0) +
    parseFloat((_0x43995b['position'][0x0] * _0x418f02) / _0x386265) +
    'px\x20' +
    parseFloat((_0x43995b[_0x50b981(0xef)][0x1] * _0x418f02) / _0x386265) +
    _0x50b981(0xc0) +
    parseFloat((_0x43995b[_0x50b981(0xef)][0x2] * _0x418f02) / _0x386265) +
    'px\x20' +
    _0x43995b[_0x50b981(0x172)]
  );
}
function GetOffset() {
  const _0x78a027 = _0x1749cb;
  var _0x2b4267 = canvas['getBoundingClientRect']();
  (offsetX = _0x2b4267[_0x78a027(0x126)]), (offsetY = _0x2b4267[_0x78a027(0x152)]);
}
(window[_0x1749cb(0x15a)] = function (_0x41b643) {
  GetOffset();
}),
  $('#profile_maker_canvas')
    [_0x1749cb(0x146)]('mousemove\x20touchmove', function (_0x4a9191) {
      const _0x40f4de = _0x1749cb;
      var _0x3196cf = parseInt(_0x4a9191[_0x40f4de(0xaf)] - offsetX),
        _0x462af6 = parseInt(_0x4a9191[_0x40f4de(0x119)] - offsetY);
      (currentMoveX = _0x3196cf / screenRateScale), (currentMoveY = _0x462af6 / screenRateScale);
      if (!isMoving) {
        flagEraserActive && DrawCanvasEditImg();
        return;
      }
      _0x4a9191[_0x40f4de(0x16c)] == 'touchmove' &&
        ((_0x3196cf = parseInt(
          _0x4a9191['originalEvent'][_0x40f4de(0xc6)][0x0]['pageX'] - offsetX
        )),
        (_0x462af6 = parseInt(
          _0x4a9191[_0x40f4de(0x17f)][_0x40f4de(0xc6)][0x0][_0x40f4de(0x165)] - offsetY
        )),
        (currentMoveX = _0x3196cf / screenRateScale),
        (currentMoveY = _0x462af6 / screenRateScale)),
        isMoving &&
          flagMoveActive &&
          ((mainPosition['x'] = mainPosition['x'] + (currentMoveX - beginMoveX)),
          (mainPosition['y'] = mainPosition['y'] + (currentMoveY - beginMoveY)),
          (beginMoveX = currentMoveX),
          (beginMoveY = currentMoveY),
          DrawCanvasEditImg()),
        flagEraserActive && (DrawEraserLine(), DrawCanvasEditImg()),
        _0x4a9191[_0x40f4de(0xf9)]();
    })
    [_0x1749cb(0x146)](_0x1749cb(0xe5), function (_0x1d6330) {
      const _0xa1b435 = _0x1749cb;
      !isMoving &&
        ((isMoving = !![]),
        _0x1d6330[_0xa1b435(0x16c)] == 'mousedown'
          ? ((beginMoveX = parseInt(_0x1d6330['clientX'] - offsetX)),
            (beginMoveY = parseInt(_0x1d6330[_0xa1b435(0x119)] - offsetY)))
          : ((beginMoveX = parseInt(
              _0x1d6330[_0xa1b435(0x17f)]['touches'][0x0][_0xa1b435(0xb6)] - offsetX
            )),
            (beginMoveY = parseInt(
              _0x1d6330['originalEvent'][_0xa1b435(0xc6)][0x0][_0xa1b435(0x165)] - offsetY
            ))),
        (beginMoveX = beginMoveX / screenRateScale),
        (beginMoveY = beginMoveY / screenRateScale),
        (currentMoveX = beginMoveX),
        (currentMoveY = beginMoveY),
        DrawCanvasEditImg()),
        flagEraserActive && DrawEraserLine(),
        _0x1d6330[_0xa1b435(0xf9)]();
    })
    ['bind'](_0x1749cb(0x139), function (_0x314381) {
      const _0x18f68 = _0x1749cb;
      (isMoving = ![]),
        (beginMoveX = -0x1),
        (beginMoveY = -0x1),
        DrawCanvasEditImg(),
        flagEraserActive && (DrawEraserPoint(), DrawCanvasEditImg()),
        (currentMoveX = -0x1),
        (currentMoveY = -0x1),
        _0x314381[_0x18f68(0xf9)]();
    })
    ['bind']('mouseleave', function (_0xfc0dd) {
      const _0x57242e = _0x1749cb;
      isMoving &&
        ((isMoving = ![]), (beginMoveX = 0x0), (beginMoveY = 0x0), _0xfc0dd[_0x57242e(0xf9)]()),
        (currentMoveX = -0x1),
        (currentMoveY = -0x1),
        DrawCanvasEditImg();
    });
function CloseProfileMakerTool() {
  const _0xd96094 = _0x1749cb;
  switch (currentTool) {
    case 0x2:
      CloseChangeColorBackground();
      break;
    case 0x3:
      CloseChangeShadow();
      break;
    case 0x4:
      break;
    default:
      CloseEditProfileMakerImage();
      break;
  }
  $(_0xd96094(0x15d))[_0xd96094(0x141)]('hide');
}
function CloseEditProfileMakerImage() {
  const _0x1f6dc1 = _0x1749cb;
  (mainPosition = snapshotBeforeEdit[_0x1f6dc1(0xef)]),
    (scale = snapshotBeforeEdit[_0x1f6dc1(0x98)]),
    (mainRotate = snapshotBeforeEdit[_0x1f6dc1(0xd9)]),
    (isFlip = snapshotBeforeEdit[_0x1f6dc1(0xbc)]),
    ctxMask[_0x1f6dc1(0xf8)](snapshotBeforeEdit['imgMask'], 0x0, 0x0),
    SetRotate(mainRotate),
    SetSize(scale),
    (snapshotBeforeEdit = {});
}
function CloseChangeColorBackground() {
  currentColorBg = snapshotBeforeEdit['bg'];
}
function CloseChangeShadow() {
  currentShadowIndex = snapshotBeforeEdit['shadow'];
}
function SaveProfileMakerTool() {
  const _0x152e2b = _0x1749cb;
  switch (currentTool) {
    case 0x2:
      SaveChangeColorBackground();
      break;
    case 0x3:
      SaveChangeShadow();
      break;
    case 0x4:
      break;
    default:
      SaveEditProfileMakerImage();
      break;
  }
  $(_0x152e2b(0x15d))[_0x152e2b(0x141)](_0x152e2b(0x144));
}
function SaveEditProfileMakerImage() {
  SaveCurrentImage();
}
function SaveChangeColorBackground() {
  const _0x306b7f = _0x1749cb;
  snapshotBeforeEdit['bg'] != currentColorBg &&
    (currentColorBg
      ? currentColorBg[_0x306b7f(0x16c)] == _0x306b7f(0x172)
        ? $(_0x306b7f(0x155))
            [_0x306b7f(0xa6)](_0x306b7f(0x17e))
            [_0x306b7f(0xe2)](_0x306b7f(0xad), currentColorBg[_0x306b7f(0x172)])
            [_0x306b7f(0xe2)](_0x306b7f(0x168), _0x306b7f(0x104))
        : $(_0x306b7f(0x155))
            ['not']('.bg-unique')
            [_0x306b7f(0xe2)](_0x306b7f(0x168), _0x306b7f(0xcd) + currentColorBg['color'] + ')')
      : LoadTemplateByCategory($(_0x306b7f(0x161))[_0x306b7f(0x10a)](_0x306b7f(0xb3))));
}
function SaveChangeShadow() {
  const _0x174997 = _0x1749cb;
  if (snapshotBeforeEdit['shadow'] != currentShadowIndex) {
    const _0x442205 = document[_0x174997(0x136)](_0x174997(0x14e));
    if (typeof currentShadowIndex == _0x174997(0x127)) {
      _0x442205['style']['setProperty']('--current-shadow', _0x174997(0xac));
      return;
    }
    const { shadows: _0x332bfb } = profileMakerConfig,
      _0xa30b53 = _0x332bfb[currentShadowIndex];
    _0x442205[_0x174997(0x16f)][_0x174997(0x108)](
      _0x174997(0x12f),
      ConvertShadowBySize(_0xa30b53, $(_0x174997(0xce))[_0x174997(0x16d)]())
    );
  }
}
function SaveCurrentImage() {
  const _0x26c830 = _0x1749cb,
    _0x2db488 = GetImageDataResult(),
    _0x365ecc = document['getElementById'](_0x26c830(0x14e));
  _0x365ecc['style'][_0x26c830(0x108)](
    _0x26c830(0x16a),
    _0x26c830(0x131) + _0x2db488[_0x26c830(0x147)] + ')'
  ),
    (currentImageFromCanvas = _0x2db488['imgData']);
}
function IncreaseSize() {
  SetSize(parseFloat(mainScale) + 0.05);
}
function DecreaseSize() {
  SetSize(parseFloat(mainScale) - 0.05);
}
function SetSize(_0xf7f02a) {
  const _0xed415f = _0x1749cb;
  _0xf7f02a < 0.01 && (_0xf7f02a = 0.01),
    _0xf7f02a > 0x1 && (_0xf7f02a = 0x1),
    $('.image-zoom-input')[_0xed415f(0xff)](_0xf7f02a),
    OnChangeSize(_0xf7f02a);
}
function OnChangeSize(_0x41f7e7) {
  const _0x27437d = _0x1749cb;
  (mainSize[_0x27437d(0x16d)] = (mainSize[_0x27437d(0x16d)] / mainScale) * _0x41f7e7),
    (mainSize[_0x27437d(0x120)] = (mainSize['height'] / mainScale) * _0x41f7e7),
    (mainScale = _0x41f7e7),
    $(_0x27437d(0x166))[_0x27437d(0xd5)](Math[_0x27437d(0x164)](_0x41f7e7 * 0x64) + '%'),
    DrawCanvasEditImg();
}
function SetZoomDefault() {
  SetSize(SCALE_DEFAULT);
}
function RotateRight() {
  SetRotate(parseInt(mainRotate) + 0x5a);
}
function RotateLeft() {
  SetRotate(parseInt(mainRotate) - 0x5a);
}
function SetRotateDefault() {
  SetRotate(0x0);
}
function SetRotate(_0x4597df) {
  const _0x4cb236 = _0x1749cb;
  _0x4597df > 0xb4 && (_0x4597df = _0x4597df - 0x168),
    _0x4597df < -0xb4 && (_0x4597df = 0x168 + _0x4597df),
    $(_0x4cb236(0xb1))[_0x4cb236(0xff)](_0x4597df),
    OnRotate(_0x4597df);
}
function OnRotate(_0x53c79b) {
  const _0x24f3f7 = _0x1749cb;
  (mainRotate = _0x53c79b), $(_0x24f3f7(0xf5))['html'](mainRotate + '°'), DrawCanvasEditImg();
}
function FlipImage() {
  (isFlip = !isFlip), DrawCanvasEditImg();
}
function EraserImage(_0x3d593b) {
  const _0x568509 = _0x1749cb;
  (flagEraserActive = !flagEraserActive),
    DisableToolCanvas(),
    flagEraserActive
      ? (DisableMoveCanvas(),
        $(_0x3d593b)[_0x568509(0x15f)](_0x568509(0xc1)),
        $(_0x568509(0xda))
          [_0x568509(0xe2)](_0x568509(0x134), _0x568509(0xe9))
          [_0x568509(0xe2)](_0x568509(0x106), _0x568509(0x160)))
      : EnableMoveCanvas();
}
function DisableToolCanvas() {
  const _0xd75c13 = _0x1749cb;
  $(_0xd75c13(0x92))[_0xd75c13(0xbf)](_0xd75c13(0xc1)),
    $(_0xd75c13(0xda))
      [_0xd75c13(0xe2)](_0xd75c13(0x134), 'none')
      ['css'](_0xd75c13(0x106), _0xd75c13(0x14d));
}
function DisableAdvanceImageEditor() {
  const _0x2f65a9 = _0x1749cb;
  $(_0x2f65a9(0x92))[_0x2f65a9(0xbf)](_0x2f65a9(0xc1)), (flagEraserActive = ![]);
}
function ResetEditImage() {
  const _0x154c8a = _0x1749cb;
  (mainPosition = { x: canvas['width'] / 0x2, y: canvas[_0x154c8a(0x120)] / 0x2 }),
    (mainRotate = 0x0),
    (isFlip = ![]),
    SetZoomDefault(),
    SetRotate(mainRotate),
    SetSize(SCALE_DEFAULT);
  const _0x572ebe = canvasMask[_0x154c8a(0x16d)] / 0x2,
    _0x34de9c = canvasMask['height'] / 0x2;
  ctxMask[_0x154c8a(0x14f)](-_0x572ebe, -_0x34de9c),
    ctxMask[_0x154c8a(0x17a)](0x0, 0x0, canvasMask[_0x154c8a(0x16d)], canvasMask[_0x154c8a(0x120)]),
    ctxMask[_0x154c8a(0x14f)](_0x572ebe, _0x34de9c),
    DrawCanvasEditImg();
}
function ResetColor() {
  (currentColorBg = undefined), DrawCanvasChangeBackground();
}
function ResetShadow() {
  (currentShadowIndex = undefined), DrawCanvasChangeShadow();
}
function ResetCurrentImage() {
  const _0x43dc2b = _0x1749cb;
  showConfirm(
    () => {
      const _0x533b42 = _0x5606;
      return (
        $[_0x533b42(0x13c)]({ message: '' }),
        $[_0x533b42(0x142)]({
          type: _0x533b42(0x154),
          url: URL_ROOT + _0x533b42(0x133),
          contentType: _0x533b42(0xe7),
          success: (_0x4c6f99) => {
            const _0x4682f = _0x533b42;
            _0x4c6f99['success']
              ? (!$('.profile-maker-done')[_0x4682f(0x158)](_0x4682f(0x144)) &&
                  (ResetEditImage(), ResetColor(), ResetShadow()),
                $(_0x4682f(0x107))[_0x4682f(0x15f)]('hide'),
                $('.profile-maker-start')[_0x4682f(0xbf)]('hide'))
              : showError(_0x4c6f99[_0x4682f(0x175)]),
              $[_0x4682f(0xdf)]();
          },
        }),
        !![]
      );
    },
    window[_0x43dc2b(0xb7)]['try_other_img'],
    window[_0x43dc2b(0xb7)]['ok']
  );
}
function _0x4f6b() {
  const _0x20eca6 = [
    'output_url',
    '.image-rotate-input',
    '#000',
    'data-id',
    'toLowerCase',
    '.profile-maker-start',
    'pageX',
    'translations',
    'open',
    '.profile-maker-result-avatar\x20.image-loading',
    'profile-maker-template-item',
    '.profile-maker-done\x20.profile-maker-template-list',
    'flip',
    'setAttribute',
    'Màu\x20mẫu',
    'removeClass',
    'px\x20',
    'btn-active',
    'length',
    'img_url',
    '.canvas-area',
    'parsedResult',
    'touches',
    'black',
    '.tool-control-edit-image',
    'mixBlendMode',
    'click',
    'white',
    'gradient',
    'linear-gradient(to\x20right,\x20',
    '.profile-maker-item',
    '156syzNAR',
    'value',
    '.profile-maker-tool-area',
    'bokeh',
    'dropdown-item\x20active',
    '/api/v1/remove-background',
    'html',
    'product',
    'profile-maker-layer',
    'globalAlpha',
    'rotate',
    '#profile_maker_canvas',
    'trigger',
    'addColorStop',
    'red',
    'color-picker\x20mb-4',
    'unblockUI',
    'drop-shadow(',
    'front',
    'css',
    'category_list',
    'canvas',
    'mousedown\x20touchstart',
    'ios',
    'application/json',
    'basic',
    'auto',
    'getImageData',
    'data',
    '.tool-control-change-color',
    'createElement',
    'color-picker-item-bg',
    'position',
    '722948NbfAAs',
    'shadow-picker-item\x20btn-light',
    'lineJoin',
    'opacity',
    'all',
    '.rotate-value',
    'scrollTop',
    'Dải\x20màu',
    'putImageData',
    'preventDefault',
    'src',
    'desktop',
    '5075pREkkt',
    '.profile-maker-src',
    'multipart/form-data',
    'val',
    'category',
    'source-over',
    'hide.bs.modal',
    'toDataURL',
    'None',
    '.tool-control-change-shadow',
    'cursor',
    '.profile-maker-step',
    'setProperty',
    'profile-maker-item\x20masked',
    'attr',
    'profile-maker-item',
    'getContext',
    'globalCompositeOperation',
    '2079eCKAbn',
    'mode',
    'change_shadow_list',
    'profile-maker-template-list',
    '6205240bEOdCu',
    'browser',
    'blue',
    'dropdown-item',
    '24DepMNU',
    'append',
    'catch',
    'clientY',
    'appendTo',
    '#000000',
    'loadedImg',
    '.tool-control',
    'success',
    'className',
    'height',
    'name',
    'fixed',
    'drawImage',
    'back',
    'addEventListener',
    'left',
    'undefined',
    'input_url',
    'onclick',
    'save',
    'files',
    'layer_ext',
    'profile-maker-template-item\x20bg-unique',
    'lineWidth',
    '--current-shadow',
    'now',
    'url(',
    '#modalEditProfileMaker\x20.modal-title',
    '/api/v1/reset-remove-background',
    'pointer-events',
    '1136MyVXzB',
    'getElementById',
    '71650bPgfJT',
    'backgroundColor',
    'mouseup\x20touchend',
    'profile-maker-photo\x20shadowed',
    'forEach',
    'blockUI',
    '/api/v1/rmbg-in-processing',
    'Kết\x20quả',
    '.btn-change-shadow',
    'lineTo',
    'modal',
    'ajax',
    '4FVSfAf',
    'hide',
    'classList',
    'bind',
    'imgSrc',
    'filter',
    'change',
    'zframe.png',
    'date-type',
    'remove',
    'default',
    'profile-maker-content',
    'translate',
    'getParser',
    'show',
    'top',
    '#category_list_mobile\x20li\x20span',
    'GET',
    '.profile-maker-template-item',
    'Loại\x20',
    'color-picker-item',
    'hasClass',
    'restore',
    'onresize',
    'beginPath',
    'layer',
    '#modalEditProfileMaker',
    'stringify',
    'addClass',
    'none',
    '#category_list\x20li.active',
    'span',
    'active',
    'round',
    'pageY',
    '.zoom-value',
    '826023ORLRid',
    'background-image',
    'file',
    '--current-image',
    'offset',
    'type',
    'width',
    'then',
    'style',
    '.profile-maker-process',
    'margin-top',
    'color',
    'innerHTML',
    'image/png',
    'message',
    'category_list_mobile',
    'profile-maker-template-item\x20blending',
    'color-picker-label\x20pb-2\x20mb-2',
    'div',
    'clearRect',
    '.layer-frame-shape',
    'fill',
    'lineCap',
    '.bg-unique',
    'originalEvent',
    '.action-area',
    'body',
    'scroll',
    'createLinearGradient',
    'upload_photo',
    'backgroundImage',
    'appendChild',
    'index',
    '#category_list_mobile\x20li\x20span[data-id=',
    '.action-area-status.profile-maker-fail',
    'fillRect',
    'stroke',
    '.btn-edit-image-action\x20.btn',
    'done',
    'moveTo',
    '#modalEditProfileMaker\x20.modal-title\x20span',
    'text',
    'grab',
    'scale',
    '5372610oSFjqW',
    '<a\x20/>',
    'POST',
    '12547JlMnFg',
    'screen',
    'navigator',
    'fillStyle',
    'outerHeight',
    '.edit-image-area',
    'shadow',
    '.tool-control-result',
    'platform',
    '.profile-maker-done',
    'not',
    'creative',
    'd-none',
    'version',
    'arc',
    'onload',
    'drop-shadow(0\x200\x200\x20rgba(0,0,0,0))',
    'background-color',
    'shown.bs.modal',
    'clientX',
  ];
  _0x4f6b = function () {
    return _0x20eca6;
  };
  return _0x4f6b();
}
function ChangeShapeView(_0x2243e9) {
  const _0x57a311 = _0x1749cb;
  $(_0x57a311(0xda))['removeClass']('circle'),
    $(_0x57a311(0xda))['addClass'](_0x2243e9[_0x57a311(0xd0)]);
}
function DownloadImageProfileMaker() {
  const _0x27c8e5 = _0x1749cb;
  $[_0x27c8e5(0x13c)]({ message: '' });
  const _0x468372 = canvas['toDataURL']('image/jpeg'),
    _0xb4a0c0 = {
      _token: TOKEN,
      image: _0x468372,
      source: 0x0,
      type: 'jpg',
      platform: browserInfo?.[_0x27c8e5(0xa4)]?.[_0x27c8e5(0x16c)] || '',
      platform_vendor: browserInfo?.[_0x27c8e5(0xa4)]?.['vendor'] || '',
      os_name: browserInfo?.['os']?.[_0x27c8e5(0x121)] || '',
      os_version: browserInfo?.['os']?.[_0x27c8e5(0xa9)] || '',
      browser_name: browserInfo?.[_0x27c8e5(0x113)]?.['name'] || '',
      browser_version: browserInfo?.['browser']?.['version'] || '',
    };
  $[_0x27c8e5(0x142)]({
    url: URL_ROOT + '/api/v1/generate-result-image',
    type: _0x27c8e5(0x9b),
    data: JSON[_0x27c8e5(0x15e)](_0xb4a0c0),
    contentType: 'application/json',
    success: function (_0x365b03) {
      const _0x4b6e04 = _0x27c8e5;
      if (_0x365b03[_0x4b6e04(0x11e)]) {
        const _0x432238 = URL_ROOT + '/result/' + _0x365b03[_0x4b6e04(0xeb)]['id'];
        if (_0xb4a0c0[_0x4b6e04(0xa4)] == _0x4b6e04(0xfb))
          window[_0x4b6e04(0xb8)](_0x432238, '_blank');
        else {
          var _0x2801ea = $(_0x4b6e04(0x9a), { href: _0x432238 })
            [_0x4b6e04(0x144)]()
            [_0x4b6e04(0x11a)](_0x4b6e04(0x87));
          _0x2801ea[0x0][_0x4b6e04(0xca)](), _0x2801ea[_0x4b6e04(0x14c)]();
        }
      } else showError(_0x365b03['message']);
      $[_0x4b6e04(0xdf)]();
    },
  });
}
