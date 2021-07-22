import {sendUniformMessage} from '../api/uniformmessage';
import Controller from '../common/controller';
/**
 * @Description 统一服务相关
 * @author CharZhou
 * @date 2021/7/22 11:24
 */
class UniformMessage extends Controller {
  /**
   * @Description 发送统一服务消息
   * @author CharZhou
   * @date 2021/7/22 12:29
   * @param {String} toUser
   * @param {String} appId 公众号ID
   * @param {String} templateId 公众号模版消息ID
   * @param {String} url
   * @param {UniformMessageMiniProgramData} miniProgramData 目标小程序配置
   * @param {Object} messageData
   */
  async sendMessage(toUser,
      appId,
      templateId,
      url,
      miniProgramData,
      messageData) {
    const ak = await this.accessTokenController.getAccessToken();
    const result = await sendUniformMessage(ak, toUser, {
      appid: appId,
      template_id: templateId,
      url: url,
      miniprogram: miniProgramData,
      data: messageData,
    });

    if (result.errcode && result.errcode !== 0) {
      throw new Error(result.errmsg);
    }
    return result;
  }
}

export default UniformMessage;
