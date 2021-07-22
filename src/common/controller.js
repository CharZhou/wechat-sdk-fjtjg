/**
 * @Description 各业务模块基类
 * @author CharZhou
 * @date 2021/7/22 12:46
 */
class Controller {
  /**
   * @Description 构造函数
   * @author CharZhou
   * @date 2021/7/22 12:46
   * @param {IAccessTokenController} accessTokenController
   * @param {Object} config
   */
  constructor(accessTokenController, config) {
    this.accessTokenController = accessTokenController;
    this.config = config;
  }
}

export default Controller;
