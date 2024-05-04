import { Fragment, useState } from "react";

//in react a component cannot return more than one element

// adding empty angle brackets tells react we are using Fragments and thus dont have to import

// {items:[], heading:string} using an interface
//using props we can pass data to our components dynamically

interface Props {
  items: string[];
  heading: string;
  //(item:string)=> void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //state hook - it is a function that allows us to tap into built in features
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
            key={item}
          >
            {item}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}
export default ListGroup;
