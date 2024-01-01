import { useState } from "react"
import { observer } from "mobx-react"
import FormEditDetails from "./formEditDetails"
import ViewDetails from "./AdminDetails"


const BusinessData = (observer(() => {
    const [editForm, setEditForm] = useState(false)
   
    return (
        <>
            {editForm ? <FormEditDetails setEditForm={setEditForm} /> : <ViewDetails setEditForm={setEditForm}  />}
        </>
    )
}))

export default BusinessData
