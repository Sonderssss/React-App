//function based components

function Message(){
    //JSX JavaScript XML under the hood it is converted to JavaScript

    const name = "Wesley";
    if(name)
        return <h1>Hello {name}</h1>;
    return <h1>Hello World</h1>
}

export default Message;