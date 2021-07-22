import axios from 'axios';
import {apis} from '../../config/wxapi.json';

/**
 * @typedef {Object} UniformMessageMiniProgramData
 * @property {String} appid 小程序APPID
 * @property {String} pagepath 小程序路径,带query
 */

/**
 * @typedef {Object} UniformMpTemplateMsg
 * @property {String} appid 公众号APPID
 * @property {String} template_id 公众号模板id
 * @property {String} url 公众号模板消息所要跳转的url
 * @property {UniformMessageMiniProgramData} miniprogram
 * 公众号模板消息所要跳转的小程序，小程序的必须与公众号具有绑定关系
 * @property {Object} data 公众号模板消息的数据
 */

/**
 * @Description
 * @author CharZhou
 * @date 2021/7/22 12:35
 * @param {String} accessToken
 * @param {String} toUser
 * @param {UniformMpTemplateMsg} mpTemplateMsg
 */
async function sendUniformMessage(accessToken, toUser, mpTemplateMsg) {
  const res =
    await axios.post(apis.uniformMsgUrl + '?access_token=' + accessToken,
        {
          touser: toUser,
          mp_template_msg: mpTemplateMsg,
        });
  return res.data;
}

export {
  sendUniformMessage,
};
