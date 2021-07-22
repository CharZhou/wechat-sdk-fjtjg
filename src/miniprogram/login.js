import {code2Session} from '../api/auth';
import Controller from '../common/controller';

/**
 * @Description 登陆相关
 * @author CharZhou
 * @date 2021/7/22 11:24
 */
class Login extends Controller {
  /**
   * @Description 通过code获取session数据
   * @author CharZhou
   * @date 2021/7/22 11:25
   * @param {String} appId
   * @param {String} appSecret
   * @param {String} code
   */
  async codeToSession(appId, appSecret, code) {
    // const ak = await this.accessTokenController.getAccessToken();
    const result = await code2Session(appId, appSecret, code);
    if (result.errcode && result.errcode !== 0) {
      throw new Error(result.errmsg);
    }
    return result;
  }
}

export default Login;
