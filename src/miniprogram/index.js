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
  }

  /**
   * @Description 获取登陆模块控制器
   * @author CharZhou
   * @date 2021/7/22 12:18
   * @return {Login}
   */
  getLoginController() {
    return new Login(this.accessTokenController, this.config);
  }

  /**
   * @Description 获取统一消息模块控制器
   * @author CharZhou
   * @date 2021/7/22 12:19
   * @return {UniformMessage}
   */
  getUniformMessageController() {
    return new UniformMessage(this.accessTokenController, this.config);
  }
}

export default MiniProgram;
