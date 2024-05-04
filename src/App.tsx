import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
import Button from "./components/Button";
import { useState } from "react";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Shibuya", "London"];

  //event handler
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  //state hook
  const [alertVisibility, setAlertVisibility] = useState(false);

  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      ></ListGroup>
      {alertVisibility && (
        <Alert onClose={() => setAlertVisibility(false)}>Hello World</Alert>
      )}
      <Button
        onClick={() => setAlertVisibility(true)}
        children="Click me "
        color="secondary"
      ></Button>
    </div>
  ); //return <div><Message /></div>
}

export default App;
