/**
 * @Description 微信公众平台AccessToken管理器
 * @author CharZhou
 * @date 2021/7/22 09:32
 * @interface
 */
class IAccessTokenController {
  /**
   * @Description 获取AccessToken
   * @author CharZhou
   * @date 2021/7/22 10:00
   * @public
   */
  async getAccessToken() {
    throw new Error('Not Implemented');
  }
}

export default IAccessTokenController;
