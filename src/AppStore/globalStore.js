import {observable,makeObservable,action} from 'mobx';
class GlobalStore
{
    //----------------------------------LOGIN-PAGE:
    //מעדכנת  אותו action/והפונקציה שהיא observable/יצרנו מחלקה שמכילה משתנה 
    isLogin=false;
    constructor(){
        //observable יצירת
        makeObservable(this,{
            isLogin:observable,
            setIsLogin:action,
        })
    }
    setIsLogin=(val)=>{
        this.isLogin=val;
    }

    
}
//יצירת מופע יחיד שאליו תמיד נפנה
export default new GlobalStore();
