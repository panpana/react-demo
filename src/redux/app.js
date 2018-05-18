import { notification } from 'antd';
import { 
  loginUrl, 
  logoutUrl, 
  getAllcommListUrl, 
  addCommInfoUrl, 
  getCartInfoUrl, 
  settleAccountUrl, 
  releaseCommUrl,
  commDetailUrl,
  insertComm2CartUrl,
  findorderUrl
} from '../config';

const TYPES = {
  login: Symbol('login'),
  getAllCommodityList: Symbol('getAllCommodityList'),
  getCartInfo: Symbol('getCartInfo'),
  settleAccount: Symbol('settleAccount'),
  searchAllCommodityList: Symbol('searchAllCommodityList'),
  searchCartInfo: Symbol('searchCartInfo'),
  searchCommDetail: Symbol('searchCommDetail'),
  getCommDetail: Symbol('getCommDetail'),
  releaseComm: Symbol('releaseComm'),
  insertComm2Cart: Symbol('insertComm2Cart'),
  getInsertCartData: Symbol('getInsertCartData'),
  searchfinance: Symbol('searchfinance'),
  getfinance: Symbol('getfinance')
};

const initialState = {
  role: '', // 角色
  userId: '',
  orderData: [], // 订单信息
  userInfo: [], // 用户信息
  commData: [], // 所有产品信息
  unBuyCommData: [], // 未购买商品信息
  singlecommDetail: [], // 查找单个商品信息
  insertCartData: [],
  financeData: []
};

const actions = {
  login: (dispatch) => (data)=> { //登录
    getUrl(loginUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '登录成功',
        });
        // console.log(data);
        return dispatch({
          type: TYPES.getAllCommodityList,
          payload: {
            // userInfo: data,
            userId: data.userId,
            role: data.userType
          }
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  logout: () => { // 退出
    getUrl(logoutUrl)
      .then(res => {
        const { error} = res;
        if(error){
          notification.open({
            message: '退出失败',
          });
        }else{
          notification.open({
            message: '退出成功',
          });
        }
      }).catch(() => {
        notification.open({
          message: '无法连接到后台服务器',
        });
      });
  },
  searchAllCommodityList: () => (dispatch) => {// 获取所有商品信息
    getUrl(getAllcommListUrl)
      .then(res=>{
        const { data, success, error} = res;
        if(error){
          notification.open({
            message: error,
          });
        }else if(data && success === 'OK'){
          dispatch(actions.getAllCommodityList(data));
        }
      }).catch(() => {
        notification.open({
          message: '后台请求失败',
        });
      });
  },
  searchCartInfo: (data) => (dispatch) => { // 查询用户购物车
    getUrl(getCartInfoUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res=>{
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        dispatch(actions.getCartInfo(data));
      }
    }).catch(() => {
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  searchCommDetail: (data, callback) => (dispatch) => { // 获取商品详情
    getUrl(commDetailUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res=>{
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        callback();
        dispatch(actions.getCommDetail(data));
      }
    }).catch(() => {
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getAllCommodityList: (data) => { 
    return {
      type: TYPES.getAllCommodityList,
      payload: {
        commData: data
      }
    };
  },
  addCommInfo: (data) => { //新增商品信息
    getUrl(addCommInfoUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '添加成功',
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getCartInfo: (data) => { //查询用户购物车
    return {
      type: TYPES.getCartInfo,
      payload: {
        orderData: data
      }
    };
  },
  getCommDetail: (data) => {
    return {
      type: TYPES.getCommDetail,
      payload: {
        singlecommDetail: data
      }
    };
  },
  settleAccount: (data,callback) => { //结算
    getUrl(settleAccountUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '添加成功',
        });
        callback();
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  releaseComm: (data) => {
    getUrl(releaseCommUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        notification.open({
          message: '发布成功',
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  insertComm2Cart: (data) => (dispatch) =>{ // 添加购物车
    getUrl(insertComm2CartUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res => {
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        dispatch(actions.getInsertCartData(data));
        notification.open({
          message: '添加成功',
        });
      }
    }).catch( () =>{
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getInsertCartData: (data) => {
    return {
      type: TYPES.getCommDetail,
      payload: {
        insertCartData: data
      }
    };
  },
  searchfinance: (data) => (dispatch) =>{
    getUrl(findorderUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data), 
      method: 'POST'
    }).then(res=>{
      const { data, success, error} = res;
      if(error){
        notification.open({
          message: error,
        });
      }else if(data && success){
        dispatch(actions.getfinance(data));
      }
    }).catch(() => {
      notification.open({
        message: '后台请求失败',
      });
    });
  },
  getfinance: (data) => {
    return {
      type: TYPES.getCommDetail,
      payload: {
        financeData: data
      }
    };
  }

};

exports.actions = actions;
exports.TYPES = TYPES;
export default (state = initialState, { type, payload }) => {
  if(type === TYPES.login){
    return {...state,...payload};
  }
  if(type === TYPES.getAllCommodityList){
    return {...state,...payload};
  }
  if(type === TYPES.getCartInfo){
    return {...state,...payload};
  }
  if(type === TYPES.getCommDetail){
    return {...state,...payload};
  }
  if(type === TYPES.settleAccount){
    return {...state,...payload};
  }
  if(type === TYPES.getInsertCartData){
    return {...state,...payload};
  }
  if(type === TYPES.getfinance){
    return {...state,...payload};
  }
  if(type === TYPES.releaseComm){
    return {...state};
  }
  return state;
};

function getUrl(url, options){
  options = options || {};
  // if (!options.credentials) {
  //   options.credentials = 'include';
  // }
  return fetch(url, options)
    .then(res => res.json())
    .then(data => {
      return data;
    })
    .catch(e=>{
      throw new Error(e);
    });
}
