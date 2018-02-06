var axios = require('axios');

export default {
  AJAX_URL: 'http://polies.ru/GoSocial_wp/wp-json',
  removeHTMLTags(str){
  	if(!str) return "";
    str = str.replace(/&(lt|gt);/g, function (strMatch, p1){
      return (p1 == "lt")? "<" : ">";
    });
    return str.replace(/<\/?[^>]+(>|$)/g, "");
  }
}
