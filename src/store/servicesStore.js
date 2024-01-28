import { observable, action, computed, makeObservable, runInAction } from 'mobx';
class ServicesStore {

    servicesList = [];

    constructor() {
        makeObservable(this, {
            servicesList: observable,
            EditServices: action,
            initServices: action,
        });

    }


    
    EditServices = async (dataForm) => {
        const response = await fetch("http://localhost:8787/service", {
            method: "POST",
            body: JSON.stringify(dataForm),
            headers: { 'Content-Type': 'application/json' },
        })
        //add an item to mobx list
        if (response.status === 200) {
            const newlist = this.servicesList.concat(dataForm)
            this.servicesList = newlist;
        }
    }

    initServices = async () => {
        const responseData = await fetch("http://localhost:8787/services")
        const jsData = await responseData.json()
        this.servicesList = jsData;


    }
}
export default new ServicesStore();