export const USER_URL = 'https://stgapiuserservice.jobr.com/api/v1/';
// export const SUPPORT_URL = 'https://apisupport.jobr.com/api/v1/';
export const ORDER_URL = 'https://stgdapiorder.jobr.com:8024/api/v1/';
export const PRODUCT_URL = 'https://stgapiproductmgmt.jobr.com/api/v1/';
export const WALLET_URL = 'https://stgbewalletmanagement.jobr.com/api/v1/'

export const ApiUserInventory = {
    verifyPhone:'user_phones/',
    login: 'users/login/',
    getProfile:'users/',
    getUserDetail:'users/get_users/by_phone',
    sendInvitation:'users/send_invitation'
};

export const ApiProductInventory = {
    getCategory:'categories',
    getSubCategory:'categories',
    getBrand:'brands',
    getProduct:'products'
};

// export const ApiSupportInventory = {

// }

export const ApiOrderInventory = {
    getAllCart:'poscarts/user',
    clearAllCart:'poscarts',
    addNotes:'poscarts',
    addDiscountToCart:'poscarts/add_discount',
    getProductBundle:'bundle_products',
    getOrders:'orders',
    acceptOrder: 'orders/status',
    createOrder:'orders/pos',
    getOrderCount:'orders/pos/statistics'
};

export const ApiWalletInventory = {
    getWallet:'wallets/user/',
   
}