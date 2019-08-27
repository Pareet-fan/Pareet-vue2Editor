export default (function () {
    const formatDate = (value, type = 'YYYY-MM-DD HH:MM:SS') => {
        const _date = new Date(parseInt(value, 10));
        if (isNaN(_date)) {
            return value;
        } else {
              let result = '';
              const y = _date.getFullYear(),
              month = _date.getMonth() > 8 ? _date.getMonth() + 1 : `0${_date.getMonth() + 1}`,
              d = _date.getDate() > 9 ? _date.getDate() : `0${_date.getDate()}`,
              h = _date.getHours() > 9 ? _date.getHours() : `0${_date.getHours()}`,
              minute = _date.getMinutes() > 9 ? _date.getMinutes() : `0${_date.getMinutes()}`,
              s = _date.getSeconds() > 9 ? _date.getSeconds() : `0${_date.getSeconds()}`;
              switch (type) {
                case 'MM-DD':
                      result = `${month}-${d}`;
                      break;
                case 'YYYY/MM/DD':
                      result = `${y}/${month}/${d}`;
                      break;
                case 'YYYY-MM-DD':
                      result = `${y}-${month}-${d}`;
                      break;
                case 'YYYY-MM-DD HH:MM':
                      result = `${y}-${month}-${d} ${h}:${minute}`;
                      break;
                case 'YYYY-MM-DD HH:MM:SS':
                      result = `${y}-${month}-${d} ${h}:${minute}:${s}`;
                      break;
                case 'YYYY年MM月DD日 HH:MM:SS':
                      result = `${y}年${month}月${d}日  ${h}:${minute}:${s}`;
                      break;
                case 'YYYY年MM月DD日 HH:MM':
                      result = `${y}年${month}月${d}日  ${h}:${minute}`;
                      break;
                case 'HH:MM MM月DD日':
                      result = `${h}:${minute} ${month}月${d}日`;
                      break;
                default:
                      result = `${y}-${month}-${d} ${h}:${minute}:${s}`;
              }
            
              return result;
          }
      };

      return {
          formatDate
      };
})();
