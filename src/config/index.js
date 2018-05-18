// const protocol = 'http:';
// const severUrl = '//10.84.144.229';
// const port = ':8051/';
// const catalog = 'api/';
// const url = `${protocol}${severUrl}${port}${catalog}`;
// const url = 'http://zichu.tunnel.qydev.com/';
const url = 'http://zichu.free.ngrok.cc/';
const json = '.json';

const loginUrl = `${url}login${json}`;  // 登录
const logoutUrl = `${url}logout${json}`; // 退出
const getAllcommListUrl = `${url}commodity/listAllCommodity${json}`;  // 获取所有商品信息
const addCommInfoUrl = `${url}commodity/addComm${json}`; // 新增商品信息
const getCartInfoUrl = `${url}order/findShoppingCarByUser${json}`; // 查找用户购物车
const settleAccountUrl = `${url}order/settleAccount${json}`; // 结算所有购物车
const uploadImgUrl = `${url}commodity/uploadImage${json}`; // 图片上传
const releaseCommUrl = `${url}commodity/addComm${json}`;
const commDetailUrl = `${url}commodity/commInfo${json}`;
const insertComm2CartUrl = `${url}/order/insert${json}`;
const findorderUrl = `${url}//order/findOrder${json}`;

export {
  loginUrl,
  logoutUrl,
  getAllcommListUrl,
  addCommInfoUrl,
  getCartInfoUrl,
  settleAccountUrl,
  uploadImgUrl,
  releaseCommUrl,
  commDetailUrl,
  insertComm2CartUrl,
  findorderUrl
};
