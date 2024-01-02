
import { observer } from "mobx-react"


const ViewDetails = observer((props) => {
  const { data } = props;

  return (<>
    {Object.entries(data)?.map(([key, value]) => (
      <>
        <div key={key}>{key}: {value}</div>
        <br/>
      </>

    ))}

      </>)
});

    export default ViewDetails;