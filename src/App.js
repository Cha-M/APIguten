import { useState, useEffect } from "react";

const arrayList = (props) => {
  const items = props;
  const listItems = items.map((item) =>
    <li>{item}</li>
  )
  return (
    <ul>{listItems}</ul>
  )
}


const App = () => {

  const [book, setBook] = useState("");
  const [error, setError] = useState({
    error: false,
    message: ""
  })

  const collect = async () => {
    try {
      // const response = await fetch("https://api.adviceslip.com/advice");
      const randID = Math.floor(Math.random() * 60000);
      const apiStr = "http://gutendex.com/books/" + randID;
      // const response = await fetch("http://gutendex.com/books/84");
      const response = await fetch(apiStr);

      console.log(response);
      if (response.status !== 200) {
        console.log("error !200");
        throw new Error("Oops");
      }  
      const data = await response.json();
      console.log(data);

      setBook(data);
    } catch (error) {
      setError({error: true, message: error.message})
      console.log("error is", error);
    }    
  }

  // useEffect(() => {
  //   console.log("useEffect hello")
  // }, [advice]);

  useEffect(() => {
    collect()
  }, []);

  //[] means it runs on mounting component
  //[advice] it runs on change of advice

  if (error.error) {
    return <h1>an error is occurred: {error.message}</h1>
  }

  return (
    <div>
      <h1>Title: {book.title}</h1>
      <div>Subjects: {arrayList(book.subjects)}</div>
      <button onClick={collect}>Fetch</button>
    </div>
  )
}

export default App