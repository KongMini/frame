function showError(message) {
  Swal.fire({
    title: 'Error!',
    html: message,
    icon: 'error',
  });
}

function showConfirm(fn, message, confirmButtonTxt) {
  Swal.fire({
    title: window.translations.confirm,
    text: message || window.translations.ok,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: confirmButtonTxt || window.translations.confirm,
    cancelButtonText: window.translations.no,
  }).then((result) => {
    // console.log('showConfirm', result);
    if (result.isConfirmed) {
      if (fn != undefined) {
        fn();
      }
    }
  });
}

function showNotification(message, iconType = 'success') {
  Swal.fire({
    position: 'top-end',
    icon: iconType,
    title: message,
    showConfirmButton: false,
    timer: 1500,
  });
}

$(document).ready(function () {
  setTimeout(ShowHideAdsButton, 2000);

  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  $('.frame-type-item').on('click', (e) => {
    $('.frame-type-item').removeClass('active');
    $(e.currentTarget).addClass('active');
  });

  $('#create_frame_modal .btn-submit').on('click', (e) => {
    $(e.currentTarget).prop('disabled', true);
    window.location.href = $('.frame-type-item.active').data('url');
  });
});

function ShowHideAdsButton() {
  $('.sticky-footer .btn-close-ads').fadeIn('slow');
}

function CloseFooterAds() {
  $('.sticky-footer').remove();
  return false;
}

function RandomString(length = 8) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

var CKEDITOR_BASEPATH = URL_ROOT + '/lib/ckeditor/';

function copyContent(obj) {
  if (typeof navigator.clipboard !== 'undefined') {
    navigator.clipboard.writeText($(obj).find('input')[0].value);
    showNotification(window.translations.copied_success);
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function GetBrowserWebviewInfo() {
  var userAgent = window.navigator.userAgent.toLowerCase(),
    safari = /safari/.test(userAgent),
    ios = /iphone|ipod|ipad/.test(userAgent);
  if (ios) {
    if (safari) {
      //browser
      return 'safari';
    } else if (!safari) {
      return 'wv_ios';
    }
  } else {
    //not iOS
    if (userAgent.includes('wv')) {
      // Android webview
      return 'wv_android';
    } else {
      // Chrome
      return '';
    }
  }
}

function FormatBytes(bytes, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1000;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

function RandomRGBA(alpha = 1) {
  var o = Math.round,
    r = Math.random,
    s = 255;
  if (alpha) {
    return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + alpha + ')';
  }
  return 'rgba(' + o(r() * s) + ',' + o(r() * s) + ',' + o(r() * s) + ',' + r().toFixed(1) + ')';
}

function ReadURL(input) {
  const MAX_SIZE_UPLOAD_MB = 5;
  return new Promise(function (resolve, reject) {
    if (input.files && input.files[0]) {
      if (input.files[0].size > MAX_SIZE_UPLOAD_MB * 1024 * 1024) {
        return reject('Dung lượng hình quá lớn, chỉ hỗ trợ tối đa ' + MAX_SIZE_UPLOAD_MB + 'MB!');
      }
      resolve(input);
    } else {
      reject('File hình không hợp lệ!');
    }
  });
}

function Rotate(centerX, centerY, x, y, angle) {
  // console.log("Rotate", centerX, centerY, x, y, angle);
  var radians = (Math.PI / 180) * angle,
    cos = Math.cos(radians),
    sin = Math.sin(radians),
    nx = cos * (x - centerX) + sin * (y - centerY) + centerX,
    ny = cos * (y - centerY) - sin * (x - centerX) + centerY;
  return [nx, ny];
}

function GetVertical(centerX, x) {
  return 2 * centerX - x;
}

function OBSetCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  let expires = 'expires=' + d.toUTCString();
  document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

function OBGetCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function GenerateDateArray(startDate, endDate, dateFormat) {
  // Create an array to store the generated dates
  var dateArray = [];

  // Parse the input strings to Date objects
  var start = new Date(startDate);
  var end = new Date(endDate);

  // Validate that the inputs are valid dates
  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    console.error('Invalid date input');
    return dateArray;
  }

  // Loop through the dates and push them into the array
  var currentDate = new Date(start);
  while (currentDate <= end) {
    // Format the date according to the specified dateFormat
    var formattedDate = FormatDate(currentDate, dateFormat);

    // Push the formatted date into the array
    dateArray.push(formattedDate);

    // Move to the next date
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateArray;
}

// Helper function to format the date
function FormatDate(date, format) {
  var year = date.getFullYear();
  var month = PadZero(date.getMonth() + 1);
  var day = PadZero(date.getDate());

  // Replace placeholders in the format with corresponding values
  format = format.replace('YYYY', year);
  format = format.replace('MM', month);
  format = format.replace('DD', day);

  return format;
}

// Helper function to pad single-digit numbers with a leading zero
function PadZero(num) {
  return num < 10 ? '0' + num : num;
}

function ClearSpace(text) {
  text = text.trim();

  // Xóa khoảng trắng dư thừa giữa các từ
  text = text.replace(/\s+/g, ' ');

  // Định dạng chữ hoa chữ thường nếu cần
  // text = text.toLowerCase(); // Đổi thành chữ thường
  // text = text.toUpperCase(); // Đổi thành chữ hoa

  return text;
}

function ReplaceNbsps(str) {
  return str.replace(/&nbsp;/g, ' ');
}

function ComponentToHex(c) {
  var hex = c.toString(16);
  return hex.length == 1 ? '0' + hex : hex;
}

function RgbToHex(r, g, b) {
  return '#' + ComponentToHex(r) + ComponentToHex(g) + ComponentToHex(b);
}

function DataURLtoFile(dataUrl, fileName) {
  var arr = dataUrl.split(','),
    mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}

function DataUrlToArrayBuffer(dataUrl) {
  var arr = dataUrl.split(','),
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return u8arr.buffer;
}

function GetFileSizeFromBase64(base64String) {
  const binaryData = atob(base64String);
  // Measure the length of the binary data to get the file size
  const fileSize = binaryData.length;
  return fileSize;
  // var stringLength = base64String.length - 'data:image/png;base64,'.length;
  // var sizeInBytes = 4 * Math.ceil((stringLength / 3)) * 0.5624896334383812;
  // return sizeInBytes / 1000;
}

const Base64toBlob = (b64Data, contentType = '', sliceSize = 512) => {
  const byteCharacters = atob(b64Data);
  const byteArrays = [];

  for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
    const slice = byteCharacters.slice(offset, offset + sliceSize);

    const byteNumbers = new Array(slice.length);
    for (let i = 0; i < slice.length; i++) {
      byteNumbers[i] = slice.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    byteArrays.push(byteArray);
  }

  const blob = new Blob(byteArrays, { type: contentType });
  return blob;
};

function IsJPG(uBuff) {
  return uBuff[0] == 0xff && uBuff[1] == 0xd8 && uBuff[2] == 0xff;
}

function IsPNGFile(fileBytes) {
  // Kiểm tra xem fileBytes có đủ độ dài cho một header PNG không
  if (fileBytes.length < 8) {
    return false;
  }

  // Header của file PNG (được biểu diễn bằng các giá trị byte)
  const pngHeader = [137, 80, 78, 71, 13, 10, 26, 10];

  // So sánh các byte đầu tiên của file với header của PNG
  for (let i = 0; i < 8; i++) {
    if (fileBytes[i] !== pngHeader[i]) {
      return false;
    }
  }

  return true;
}

function GetRealMimeType(reader) {
  var arr = new Uint8Array(reader.result).subarray(0, 4);
  var header = '';
  var realMimeType;

  for (var i = 0; i < arr.length; i++) {
    header += arr[i].toString(16);
  }

  switch (header) {
    case '89504e47':
      realMimeType = 'image/png';
      break;
    // case "47494638":
    //     realMimeType = "image/gif";
    //     break;
    case 'ffd8ffDB':
    case 'ffd8ffe0':
    case 'ffd8ffe1':
    case 'ffd8ffe2':
    case 'ffd8ffe3':
    case 'ffd8ffe8':
      realMimeType = 'image/jpeg';
      break;
    default:
      realMimeType = 'unknown'; // Or you can use the blob.type as fallback
      break;
  }

  return realMimeType;
}

function GetImageMeta(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.setAttribute('crossorigin', 'anonymous');
    img.src = url;
    img.onload = () => resolve(img);
    img.onerror = (err) => {
      console.error(err);
      reject(false);
    };
    if (img.complete) {
      // console.log('complete', url);
      resolve(img);
    }
  });
}

function GenerateCanvasFingerprint() {
  var canvas = document.createElement('canvas');
  var ctx = canvas.getContext('2d');

  canvas.width = 200;
  canvas.height = 50;

  var text = 'zFrame Fingerprinting';
  ctx.textBaseline = 'top';
  ctx.font = '14px "Arial"';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = '#f60';
  ctx.fillRect(125, 1, 62, 20);
  ctx.fillStyle = '#069';
  ctx.fillText(text, 2, 15);

  var imageData = canvas.toDataURL();

  // Tạo một mã hash từ dữ liệu pixel
  var hash = 0;
  if (imageData.length == 0) return '0';
  for (var i = 0; i < imageData.length; i++) {
    var char = imageData.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }

  var fingerprint = hash.toString(16);

  return fingerprint;
}

function GetParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

const base64abc = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '+',
  '/',
];

//https://gist.github.com/enepomnyaschih/72c423f727d395eeaa09697058238727
function BytesToBase64(bytes) {
  let result = '',
    i,
    l = bytes.length;
  for (i = 2; i < l; i += 3) {
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
    result += base64abc[((bytes[i - 1] & 0x0f) << 2) | (bytes[i] >> 6)];
    result += base64abc[bytes[i] & 0x3f];
  }
  if (i === l + 1) {
    // 1 octet yet to write
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[(bytes[i - 2] & 0x03) << 4];
    result += '==';
  }
  if (i === l) {
    // 2 octets yet to write
    result += base64abc[bytes[i - 2] >> 2];
    result += base64abc[((bytes[i - 2] & 0x03) << 4) | (bytes[i - 1] >> 4)];
    result += base64abc[(bytes[i - 1] & 0x0f) << 2];
    result += '=';
  }
  return result;
}
