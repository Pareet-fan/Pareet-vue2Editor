
// 数组去重，参数是数组
export function unique (arr) {  
    let hashTable = {};
    let data = [];
    for(let i=0,l=arr.length;i<l;i++) {
      if(!hashTable[arr[i]]) {
        hashTable[arr[i]] = true;
        data.push(arr[i]);
      }
    }
    return data
}
  
// 数组排序，参数是Number数组
export function bubbleSort(arr) {
    var i = arr.length-1;  //初始时,最后位置保持不变
    while ( i> 0) {
        var pos= 0; //每趟开始时,无记录交换
        for (var j= 0; j< i; j++)
            if (arr[j]> arr[j+1]) {
                pos= j; //记录交换的位置
                var tmp = arr[j]; arr[j]=arr[j+1];arr[j+1]=tmp;
            }
        i= pos; //为下一趟排序作准备
     }
     return arr;
  }

// 随机生成指定长度字符串，参数为位数Number
export function randomString(n) {  
    let str = 'abcdefghijklmnopqrstuvwxyz9876543210';
    let tmp = '',
        i = 0,
        l = str.length;
    for (i = 0; i < n; i++) {
      tmp += str.charAt(Math.floor(Math.random() * l));
    }
    return tmp;
}


// 常用正则校验 参数type是校验类型，手机号还是密码等  val是被校验的值
const regex = {
  phone: /^1\d{10}$/, //手机号
  number: /^[1-9]\d*$/,  // 正整数
  integer:/^[0-9]\d*$/, // 整数包含0
  poNumber: /^(0|[1-9][0-9]*)(\.\d+)?$/,   // 正数
  email: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/  //邮箱
}

export function regular (type,val) {
  let result;
  switch (type) {
      case 'phone':
          result = regex.phone.test(val);
          break
      case 'number':
          result = regex.number.test(val);
      break
      case 'poNumber':
          result = regex.poNumber.test(val);
      break
      case 'integer':
          result = regex.integer.test(val);
      break
      case 'email':
          result = regex.email.test(val);
      break
      default:
  }
  return result;
}



// 获取url参数
export function getUrlParam (name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return unescape(r[2]);
  } else {
      return null;
  }
}

// 获取url中文参数
export function getUrlCHParams (name) {
  const reg = new RegExp(`(^|&)${name}=([^&]*)(&|$)`);
  const r = window.location.search.substr(1).match(reg);
  if (r != null) {
      return decodeURI(r[2]);
  } else {
      return null;
  }
}


// 传入时间戳，判断是否在指定时间段内，如果在返回true，否则false.  参数1时间戳，参数2开始时间，参数3结束时间，示例：判断当前时间是否在09：00-17：00之间  isTime(15225,9,17)
export function isTime (time,firstTime,lastTime) {
  var time = Number(time);
  var zTime = new Date(new Date().toLocaleDateString()).getTime(); // 当天00:00:00
  var startTime = zTime + 3600000 * firstTime;   // 当天09点的时间戳
  var entTime = zTime + 3600000 * lastTime;   // 当天17点的时间戳
  if (time > startTime && time < entTime) {
      return true;   // 在09:00-17:00 时间段内
  } else {
      return false;
  }
}

// loading  使用，loading();  默认显示， loading(false) 隐藏
export function loading (status = true) {
  var oLoading = document.getElementById("loading");
    var oMask = document.createElement("section");
    var oIcon = document.createElement("i");
    oMask.appendChild(oIcon);
    oMask.setAttribute("id","mask");
    oLoading.style.position = 'relative';
    oMask.style.position = 'absolute';
    oIcon.className = "icon iconfont icon-loading";

  if (status) {
    oLoading.appendChild(oMask);
  } else {
    var oMasks = document.getElementById("mask");
    oLoading.removeChild(oMasks);
  }
}