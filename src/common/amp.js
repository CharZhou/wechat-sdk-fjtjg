/**
 * @Description 微信公众平台通用业务模型
 * @author CharZhou
 * @date 2021/7/22 09:32
 * @class
 */
class AMP {
  /**
   * @Description 构造函数
   * @author CharZhou
   * @date 2021/7/22 09:32
   * @param {AppType} appType 应用类型
   * @param {String} appId 应用的AppId
   * @param {IAccessTokenController} accessTokenController AccessToken管理器
   * @param {Object} config AMP配置
   */
  constructor(appType, appId, accessTokenController, config) {
    if (!accessTokenController) {
      throw new Error('accessTokenController not set');
    }
    this.appId = appId;
    this.accessTokenController = accessTokenController;
    this.config = config || {};
  }

  /**
   * @Description 获取应用AccessToken
   * @author CharZhou
   * @date 2021/7/22 11:08
   */
  async getAppAccessToken() {
    return this.accessTokenController.getAccessToken();
  }
}

export default AMP;
