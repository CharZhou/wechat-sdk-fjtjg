import NodeCache from 'node-cache';
import {getAccessToken} from '../api/auth';

const akCache = new NodeCache();
const akCacheKey = 'ak';

/**
 * @Description 默认AccessTokenController控制器
 * @author CharZhou
 * @date 2021/7/22 10:15
 * @implements {IAccessTokenController}
 */
class DefaultAccessTokenController {
  /**
   * @author CharZhou
   * @date 2021/7/22 10:23
   * @param {String} appId unique id for wechat mp application
   * @param {String} appSecret unique secret for wechat mp application
   */
  constructor(appId, appSecret) {
    this.appId = appId;
    this.appSecret = appSecret;
  }

  /**
   * @Description 刷新AccessToken
   * @author CharZhou
   * @date 2021/7/22 10:52
   */
  async refreshAccessToken() {
    const getResult = await getAccessToken(this.appId, this.appSecret);
    if (getResult.errcode && getResult.errcode !== 0) {
      throw new Error(getResult.errmsg);
    }

    await akCache.set(akCacheKey,
        getResult.access_token,
        getResult.expires_in);
  }

  /**
   * @Description 获取AccessToken
   * @author CharZhou
   * @date 2021/7/22 10:26
   */
  async getAccessToken() {
    let accessToken = await akCache.get(akCacheKey);
    if (!accessToken) {
      await this.refreshAccessToken();
      accessToken = await akCache.get(akCacheKey);
    }
    return accessToken;
  }
}

export default DefaultAccessTokenController;
