import {observable, action, makeObservable} from 'mobx';
class GlobalStore {
    isLogin=false;

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            setIsLogin:action,
            
        });
       
    }

     setIsLogin=(val) =>{
        this.isLogin = val;
    }
   

}
export default new GlobalStore();//יצירת מופע יחיד שאליו תמיד נפנה
