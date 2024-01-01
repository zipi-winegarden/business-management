import {observable,makeObservable,action, observe} from 'mobx';
class BusinessStore
{
   business = {
    id: "123",
    name: "Coding Academy",
    address: "Rothschild 60 Tel Aviv",
    phone: "03-1234567",
    owner: "Yariv Katz",
    logo: "https://coding-academy.org/images/ca_logo.png",
    description: "The best coding academy in the world",
  };
  constructor(){
    makeObservable(this,{
      business:observable,
      editBusiness:action,
      initBusinessData:action
    })
  }

  editBusiness=async({id, name, addredd, phone, owner, logo, description})=>{

    const response =  fetch("http://localhost:8787/businessData", {
        method: "POST",
        body: JSON.stringify({id, name, addredd, phone, owner, logo, description}),
        headers: {"Content-Type": "application/json",},
    });
    this.business={id, name, addredd, phone, owner, logo, description}
    console.log("business: ",this.business)
  }

  initBusinessData=async()=>{
    const response = await fetch("http://localhost:8787/businessData")
    const jsData=(await response).json();
    this.business=jsData;
  }
}
//יצירת מופע יחיד שאליו תמיד נפנה
export default new BusinessStore();
