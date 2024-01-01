import {observable,makeObservable,action, observe} from 'mobx';
class ServiceStore
{
    // is better in useState
   servicesList=[]


  constructor(){
    makeObservable(this,{
        servicesList:observable,
        editServices:action,
        initServices:action,
    });
  }



editServices=async(dataForm)=>{
  const response = await fetch("http://localhost:8787/service", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {"Content-Type": "application/json"},
  });
  console.log("200: ",response.status)
  if(response.status===200){
      const newList = this.servicesList.concat(dataForm);
      this.servicesList=newList;
  }

  //this.initServices();
}

  initServices=async()=>{
    const response = await fetch("http://localhost:8787/services")
    const jsData= await response.json();
    this.servicesList=jsData;
    //this.servicesList=response?
  }
}
//יצירת מופע יחיד שאליו תמיד נפנה
export default new ServiceStore();
