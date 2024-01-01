import {observable,makeObservable,action, observe} from 'mobx';
class MeetingSrore
{
    // is better in useState
    meetingList=[]


  constructor(){
    makeObservable(this,{
        meetingList:observable,
        editMeeting:action,
        initMeeting:action,
    });
  }



editMeeting=async(dataForm)=>{
  const response = await fetch("http://localhost:8787/appointment", {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {"Content-Type": "application/json"},
  });
  console.log("200: ",response.status)
  if(response.status===200){
      const newList = this.meetingList.concat(dataForm);
      this.meetingList=newList;
  }

  //this.initServices();
}

  initMeeting=async()=>{
    const response = await fetch("http://localhost:8787/appointments")
    const jsData= await response.json();
    this.servicesList=jsData;
    //this.servicesList=response?
  }
}
//יצירת מופע יחיד שאליו תמיד נפנה
export default new MeetingSrore();
