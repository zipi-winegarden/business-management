import { observable, action, computed, makeObservable, runInAction } from 'mobx';
class BusinessStore {
    business = {
        id: "***",
        name: "***",
        address: "***",
        phone: "***",
        owner: "***",
        logo: "***",
        description: "***",
    };
    constructor() {
        makeObservable(this, {
            business: observable,
            EditBusiness: action,
            initBusinessData:action,
        });
    }
    EditBusiness = async ({id, name, address, phone, owner, logo, description}) => {
        const response = await fetch("http://localhost:8787/businessData", {
            method: "POST",
            body: JSON.stringify({ id, name, address, phone, owner, logo, description }),
            headers: { 'Content-Type': 'application/json' },
        })

        this.business = {id, name, address, phone, owner, logo, description}
    }

    initBusinessData=async ()=>{
        const responseData = await fetch("http://localhost:8787/businessData")
        const jsData = await responseData.json()
        this.business=jsData;
    }
}

export default new BusinessStore();
