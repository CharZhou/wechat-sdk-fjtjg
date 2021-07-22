import AMP from '../common/amp';
import {AppType} from '../common/defines';

/**
 * @Description 微信公众号业务
 * @author CharZhou
 * @date 2021/7/22 09:38
 * @extends {AMP}
 */
class OfficialAccount extends AMP {
  /**
   * @Description 构造函数
   * @author CharZhou
   * @date 2021/7/22 11:03
   * @param {String} appId 公众号appId
   * @param {IAccessTokenController} accessTokenController ak控制实例
   * @param {Object} [config]
   */
  constructor(appId, accessTokenController, config) {
    super(AppType.OfficialAccount, appId, accessTokenController, config);
  }
}

export default OfficialAccount;
