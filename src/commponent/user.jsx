import React, { useState, useEffect } from "react";
import ServicesStore from "../store/servicesStore";
import ViewDetails from "./viewDetails";
import AddMeeting from "./addMeeting"
import { observer } from "mobx-react";
import BusinessStore from "../store/businessStore";

const User = observer(() => {
  const [service, setService] = useState({});
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    BusinessStore.initBusinessData();
    ServicesStore.initServices();
  }, []);

  const handleClick = (service) => {
    setService(service);
    setShowForm(true);
  };

  return (<>
    <div>
      {Object.entries(BusinessStore.business).map(([key, value]) => (
        <div key={key}>{key}: {value}</div>
      ))}
    </div>
    <div>
      {ServicesStore.servicesList.map((s) => (
        <button
          // key={s.id}
          onClick={() => handleClick(s)
          }
        >
          <ViewDetails  data={{
            name: s.name,
            description: s.description
          }} />
        </button>
      ))}
      {showForm && (
        <AddMeeting serviceType={service.description} />
       
      )}
    </div>

  </>);
});

export default User;
