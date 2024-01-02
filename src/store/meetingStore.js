import { observable, action, computed, makeObservable, runInAction } from 'mobx';


class MeetingStore {
    meetingList = [];
   
   id=1;
    isAdd = false;

    constructor() {
        makeObservable(this, {
            meetingList: observable,
            isAdd:observable,
            id:observable,
            editMeeting: action,
            initMeeting: action,
        });

    }

    editMeeting = async (dataForm) => {

        dataForm.id = this.id;
        const response = await fetch("http://localhost:8787/appointment", {
            method: "POST",
            body: JSON.stringify(dataForm),
            headers: { 'Content-Type': 'application/json' },
        })

        if (response.status === 200) {
            this.meetingList.push(dataForm)
            this.id += 1;
            this.isAdd = true;
        }
        else{
            this.isAdd=false;
        }

        console.log("id post", this.id)
    }

    initMeeting = async () => {
        const responseData = await fetch("http://localhost:8787/appointments")
        const jsData = await responseData.json()
        this.meetingList = jsData;
    }

    setIsAdd=(val) =>{
        this.isLogin = val;
    }
   
}


export default new MeetingStore();