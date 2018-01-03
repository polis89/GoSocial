var axios = require('axios');

export default {
  AJAX_URL: 'http://polies.ru/GoSocial/wp-json',
  removeHTMLTags(str){
    str = str.replace(/&(lt|gt);/g, function (strMatch, p1){
      return (p1 == "lt")? "<" : ">";
    });
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }
}
