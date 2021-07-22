import axios from 'axios';
import {apis} from '../../config/wxapi.json';

/**
 * @typedef {Object} getAccessTokenResult
 * @property {String} errmsg 错误消息
 * @property {Number} errcode 错误码
 * @property {String} access_token AccessToken
 * @property {Number} expires_in 有效时间
 */

/**
 * @Description 获取微信应用AccessToken
 * @author CharZhou
 * @date 2021/7/22 10:31
 * @param {String} appId application id
 * @param {String} appSecret application secret
 * @return {getAccessTokenResult} result 错误消息
 */
async function getAccessToken(appId, appSecret) {
  const response = await axios.get(apis.accessTokenQueryUrl, {
    params: {
      appid: appId,
      secret: appSecret,
      grant_type: 'client_credential',
    },
  });
  return response.data;
}

/**
 * @typedef {Object} code2SessionResult
 * @property {String} openid
 * @property {String} session_key
 * @property {String} unionid
 * @property {String} errmsg
 * @property {Number} errcode
 */

/**
 * @Description 登录凭证校验
 * @author CharZhou
 * @date 2021/7/22 11:28
 * @param {String} accessToken
 * @param {String} code
 * @return {code2SessionResult}
 */
async function code2Session(accessToken, code) {
  const result = await axios.get(apis.code2SessionUrl, {
    params: {
      access_token: accessToken,
      js_code: code,
      grant_type: 'authorization_code',
    },
  });
  return result.data;
}

/**
 * @typedef {Object} getPaidUnionIdResult
 * @property {String} unionid
 * @property {String} errmsg
 * @property {Number} errcode
 */

/**
 * @Description 支付后获取UnionID
 * @author CharZhou
 * @date 2021/7/22 11:28
 * @param {String} accessToken
 * @param {String} openid
 * @param {String} transactionId 微信支付订单号
 * @param {String} mchId 微信支付分配的商户号，和商户订单号配合使用
 * @param {String} outTradeNo 微信支付商户订单号，和商户号配合使用
 * @return {getPaidUnionIdResult}
 */
async function getPaidUnionId(accessToken,
    openid,
    transactionId,
    mchId,
    outTradeNo) {
  const queryParams = {
    access_token: accessToken,
    openid: openid,
  };
  if (transactionId) {
    queryParams.transaction_id = transactionId;
  }
  if (mchId && outTradeNo) {
    queryParams.mch_id = mchId;
    queryParams.out_trade_no = outTradeNo;
  }
  const result = await axios.get(apis.getPaidUnionIdUrl, {
    params: queryParams,
  });
  return result.data;
}


export {
  getAccessToken,
  code2Session,
  getPaidUnionId,
};
