import { Fragment, useState } from "react";
import Card from "../Card/Card";
import styles from "./App.module.css";

function App() {
  const [data, setData] = useState([
    {
      gender: "male",
      firstName: "John",
      lastName: "Doe",
      age: 30,
      address: "London, United Kingdom",
      phone: "+44 20 7123 4567",
    },
    {
      gender: "male",
      firstName: "Abdallah",
      lastName: "Atif",
      age: 18,
      address: "Cairo, Egypt",
      phone: "+20 010 1217 4769",
    },
    {
      gender: "male",
      firstName: "Mohamed",
      lastName: "Ali",
      age: 25,
      address: "Dubai, UAE",
      phone: "+971 55 123 4567",
    },
    {
      gender: "male",
      firstName: "Nicolas",
      lastName: "Cage",
      age: 55,
      address: "Beverly Hills, California, USA",
      phone: "+1-800-555-1212",
    },
    {
      gender: "male",
      firstName: "Leonardo",
      lastName: "DiCaprio",
      age: 45,
      address: "Rome, Italy",
      phone: "+39 02 3981 3981",
    },
    {
      gender: "male",
      firstName: "Tom",
      lastName: "Hanks",
      age: 60,
      address: "Wilmington, North Carolina, USA",
      phone: "+1-704-333-1212",
    },
    {
      gender: "female",
      firstName: "Jane",
      lastName: "Smith",
      age: 28,
      address: "New York City, USA",
      phone: "+1-917-111-0000",
    },
    {
      gender: "female",
      firstName: "Sara",
      lastName: "Al-Zayani",
      age: 35,
      address: "Muscat, Oman",
      phone: "+968 111 222 3333",
    },
    {
      gender: "female",
      firstName: "Amanda",
      lastName: "Seymour",
      age: 42,
      address: "London, United Kingdom",
      phone: "+44 (0) 20 7123 123456",
    },
    {
      gender: "female",
      firstName: "Zeinab",
      lastName: "Bakri",
      age: 30,
      address: "Dubai, UAE",
      phone: "+971 55 555 5555",
    },
    {
      gender: "female",
      firstName: "Maraim",
      lastName: "Khalid",
      age: 25,
      address: "Cairo, Egypt",
      phone: "+20 010 1213 145",
    },
    {
      gender: "female",
      firstName: "Jennifer",
      lastName: "Aniston",
      age: 55,
      address: "Los Angeles, California, USA",
      phone: "(310) 111-0000",
    },
  ]);

  // const data = [
  //   {
  //     gender: "male",
  //     firstName: "John",
  //     lastName: "Doe",
  //     age: 30,
  //     address: "London, United Kingdom",
  //     phone: "+44 20 7123 4567",
  //   },
  //   {
  //     gender: "male",
  //     firstName: "Abdallah",
  //     lastName: "Atif",
  //     age: 18,
  //     address: "Cairo, Egypt",
  //     phone: "+20 010 1217 4769",
  //   },
  //   {
  //     gender: "male",
  //     firstName: "Mohamed",
  //     lastName: "Ali",
  //     age: 25,
  //     address: "Dubai, UAE",
  //     phone: "+971 55 123 4567",
  //   },
  //   {
  //     gender: "male",
  //     firstName: "Nicolas",
  //     lastName: "Cage",
  //     age: 55,
  //     address: "Beverly Hills, California, USA",
  //     phone: "+1-800-555-1212",
  //   },
  //   {
  //     gender: "male",
  //     firstName: "Leonardo",
  //     lastName: "DiCaprio",
  //     age: 45,
  //     address: "Rome, Italy",
  //     phone: "+39 02 3981 3981",
  //   },
  //   {
  //     gender: "male",
  //     firstName: "Tom",
  //     lastName: "Hanks",
  //     age: 60,
  //     address: "Wilmington, North Carolina, USA",
  //     phone: "+1-704-333-1212",
  //   },
  //   {
  //     gender: "female",
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     age: 28,
  //     address: "New York City, USA",
  //     phone: "+1-917-111-0000",
  //   },
  //   {
  //     gender: "female",
  //     firstName: "Sara",
  //     lastName: "Al-Zayani",
  //     age: 35,
  //     address: "Muscat, Oman",
  //     phone: "+968 111 222 3333",
  //   },
  //   {
  //     gender: "female",
  //     firstName: "Amanda",
  //     lastName: "Seymour",
  //     age: 42,
  //     address: "London, United Kingdom",
  //     phone: "+44 (0) 20 7123 123456",
  //   },
  //   {
  //     gender: "female",
  //     firstName: "Zeinab",
  //     lastName: "Bakri",
  //     age: 30,
  //     address: "Dubai, UAE",
  //     phone: "+971 55 555 5555",
  //   },
  //   {
  //     gender: "female",
  //     firstName: "Maraim",
  //     lastName: "Khalid",
  //     age: 25,
  //     address: "Cairo, Egypt",
  //     phone: "+20 010 1213 145",
  //   },
  //   {
  //     gender: "female",
  //     firstName: "Jennifer",
  //     lastName: "Aniston",
  //     age: 55,
  //     address: "Los Angeles, California, USA",
  //     phone: "(310) 111-0000",
  //   },
  // ];
  // const femaleData = [
  //   {
  //     firstName: "Jane",
  //     lastName: "Smith",
  //     age: 28,
  //     address: "New York City, USA",
  //     phone: "+1-917-111-0000",
  //   },
  //   {
  //     firstName: "Sara",
  //     lastName: "Al-Zayani",
  //     age: 35,
  //     address: "Muscat, Oman",
  //     phone: "+968 111 222 3333",
  //   },
  //   {
  //     firstName: "Amanda",
  //     lastName: "Seymour",
  //     age: 42,
  //     address: "London, United Kingdom",
  //     phone: "+44 (0) 20 7123 123456",
  //   },
  //   {
  //     firstName: "Zeinab",
  //     lastName: "Bakri",
  //     age: 30,
  //     address: "Dubai, UAE",
  //     phone: "+971 55 555 5555",
  //   },
  //   {
  //     firstName: "Maraim",
  //     lastName: "Khalid",
  //     age: 25,
  //     address: "Cairo, Egypt",
  //     phone: "+20 010 1213 145",
  //   },
  //   {
  //     firstName: "Jennifer",
  //     lastName: "Aniston",
  //     age: 55,
  //     address: "Los Angeles, California, USA",
  //     phone: "(310) 111-0000",
  //   },
  // ];

  return (
    <div className={styles.mainContainer}>
      <h1>Data List</h1>
      <div className={styles.cards}>
        <Card namesList={data} />
      </div>
    </div>
  );
}

export default App;

// const blackTheme = { backgroundColor: "#000000d4", color: "#fff" };
// const whiteTheme = { backgroundColor: "#fff" };
// const theme = true;
// const pStyles = { color: "red", fontFamily: "cursive" };
// const names = ["Abdallah", "Yousif", "Ahmed"];

//  theme === true ? (
//   <div className="App" style={blackTheme}>
//     <Fragment>
//       <h1>Welcome to our website!</h1>
//       <p style={pStyles}>
//         Please log in or register if you don't have an account.
//       </p>
//       {/* <p style={{ color: "red", fontFamily: "cursive" }}>
//         Please log in or register if you don't have an account.
//       </p> */}
//       {
//         //! We can use map function to iterate over the array of names and create a new array of
//         //! elements using JSX. Each element will be displayed next to each other because they are all
//         //! wrapped inside a div tag.
//         names.map((name) => (
//           <h4 key={name}>Hello, {name}!</h4>
//         ))
//       }
//       <button onClick={() => (window.location = "/login")}>Log In</button>
//       <button onClick={() => (window.location = "/register")}>
//         Register
//       </button>
//       <br />
//       <br />
//       <h2>Here are some of the products we offer:</h2>
//     </Fragment>
//   </div>
// ) : (
//   <div className="App" style={whiteTheme}>
//     <Fragment>
//       <h1>Welcome to our website!</h1>
//       <p style={pStyles}>
//         Please log in or register if you don't have an account.
//       </p>
//       {/* <p style={{ color: "red", fontFamily: "cursive" }}>
//         Please log in or register if you don't have an account.
//       </p> */}
//       {
//         //! We can use map function to iterate over the array of names and create a new array of
//         //! elements using JSX. Each element will be displayed next to each other because they are all
//         //! wrapped inside a div tag.
//         names.map((name) => (
//           <h4 key={name}>Hello, {name}!</h4>
//         ))
//       }
//       <button onClick={() => (window.location = "/login")}>Log In</button>
//       <button onClick={() => (window.location = "/register")}>
//         Register
//       </button>
//       <br />
//       <br />
//       <h2>Here are some of the products we offer:</h2>
//     </Fragment>
//   </div>
// );
