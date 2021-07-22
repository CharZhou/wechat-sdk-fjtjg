import axios from 'axios';

/**
 * @Description 通过HTTP获取AccessToken控制器
 * @author CharZhou
 * @date 2021/7/22 10:15
 * @implements {IAccessTokenController}
 */
class HttpAccessTokenController {
  /**
   * @Description 构造函数
   * @author CharZhou
   * @date 2021/7/22 12:52
   * @param {String} url 获取AccessToken的URL
   */
  constructor(url) {
    this.url = url;
  }
  /**
   * @Description 获取AccessToken
   * @author CharZhou
   * @date 2021/7/22 10:26
   */
  async getAccessToken() {
    const res = await axios.get(this.url);
    return res.data;
  }
}

export default HttpAccessTokenController;
