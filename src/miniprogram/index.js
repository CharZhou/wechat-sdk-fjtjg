import AMP from '../common/amp';
import {AppType} from '../common/defines';
import Login from './login';
import UniformMessage from './uniformmessage';

/**
 * @Description 微信小程序业务
 * @author CharZhou
 * @date 2021/7/22 09:38
 * @extends {AMP}
 */
class MiniProgram extends AMP {
  /**
   * @Description 构造函数
   * @author CharZhou
   * @date 2021/7/22 11:03
   * @param {String} appId 小程序appId
   * @param {IAccessTokenController} accessTokenController ak控制实例
   * @param {Object} [config]
   */
  constructor(appId, accessTokenController, config) {
    super(AppType.MiniProgram, appId, accessTokenController, config);

    /**
     * @Description 登陆相关业务控制器
     * @author CharZhou
     * @date 2021/7/22 13:49
     */
    this.loginController = new Login(this.accessTokenController, this.config);
    /**
     * @Description 统一服务消息相关业务控制器
     * @author CharZhou
     * @date 2021/7/22 13:50
     */
    this.uniformMessageController =
      new UniformMessage(this.accessTokenController,
          this.config);
  }
}

export default MiniProgram;
