/* eslint-disable no-undef */
import React, { useState } from "react";
import { CSVLink } from "react-csv";
import AsyncCSV from "./AsyncCSV";
import Pdf from "react-to-pdf";
import {
  exportComponentAsJPEG,
  exportComponentAsPNG,
} from "react-component-export-image";

function App() {
  const [data, setData] = useState([
    {
      firstName: "Warren",
      lastName: "Morrow",
      email: "sokyt@mailinator.com",
      age: "36",
    },
    {
      firstName: "Gwendolyn",
      lastName: "Galloway",
      email: "weciz@mailinator.com",
      age: "76",
    },
    {
      firstName: "Astra",
      lastName: "Wyatt",
      email: "quvyn@mailinator.com",
      age: "57",
    },
    {
      firstName: "Jasmine",
      lastName: "Wong",
      email: "toxazoc@mailinator.com",
      age: "42",
    },
    {
      firstName: "Brooke",
      lastName: "Mcconnell",
      email: "vyry@mailinator.com",
      age: "56",
    },
    {
      firstName: "Christen",
      lastName: "Haney",
      email: "pagevolal@mailinator.com",
      age: "23",
    },
    {
      firstName: "Tate",
      lastName: "Vega",
      email: "dycubo@mailinator.com",
      age: "87",
    },
    {
      firstName: "Warren",
      lastName: "Morrow",
      email: "sokyt@mailinator.com",
      age: "36",
    },
    {
      firstName: "Gwendolyn",
      lastName: "Galloway",
      email: "weciz@mailinator.com",
      age: "76",
    },
    {
      firstName: "Astra",
      lastName: "Wyatt",
      email: "quvyn@mailinator.com",
      age: "57",
    },
    {
      firstName: "Jasmine",
      lastName: "Wong",
      email: "toxazoc@mailinator.com",
      age: "42",
    },
    {
      firstName: "Brooke",
      lastName: "Mcconnell",
      email: "vyry@mailinator.com",
      age: "56",
    },
    {
      firstName: "Christen",
      lastName: "Haney",
      email: "pagevolal@mailinator.com",
      age: "23",
    },
    {
      firstName: "Tate",
      lastName: "Vega",
      email: "dycubo@mailinator.com",
      age: "87",
    },
  ]);

  const [firstName, setFirstName] = useState("Lucifer");
  const [lastName, setLastName] = useState("Morning Star");
  const [email, setEmail] = useState("luci@gmail.com");
  const [age, setAge] = useState("100");

  const headers = [
    { label: "First Name", key: "firstName" },
    { label: "Last Name", key: "lastName" },
    { label: "Email", key: "email" },
    { label: "Age", key: "age" },
  ];

  const csvReport = {
    data: data,
    headers: headers,
    filename: "Demo.csv",
  };

  const ref = React.createRef();

  const options = {
    orientation: "landscape",
    unit: "in",
    format: [14, 8],
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      firstName,
      lastName,
      email,
      age,
    };

    let demo = data.concat(formData);
    setData(demo);
    setFirstName("");
    setLastName("");
    setEmail("");
    setAge("");
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Add Data & Export</h1>
      <div style={{ display: "flex", gap: 10 }}>
        <div>
          <form>
            <label htmlFor="firstName">First name: </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Lucifer"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
            />
            <label htmlFor="lastName">Last name: </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Morning Star"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
            />
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="luci@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label htmlFor="age">Age: </label>
            <input
              type="age"
              id="age"
              name="age"
              placeholder="100"
              onChange={(e) => setAge(e.target.value)}
              value={age}
            />
            <button onClick={handleSubmit}> Submit </button>
          </form>
          <div style={{ display: "flex", gap: 10, marginTop: 10 }}>
            <button>
              <CSVLink {...csvReport}>Export as CSV</CSVLink>
            </button>
            <Pdf targetRef={ref} filename="demo.pdf" options={options}>
              {({ toPdf }) => <button onClick={toPdf}>Generate PDF</button>}
            </Pdf>
            <button onClick={() => exportComponentAsPNG(ref)}>
              Export as PNG
            </button>
            <button onClick={() => exportComponentAsJPEG(ref)}>
              Export as JPEG
            </button>
          </div>
          <div style={{ marginTop: 20 }}>Created by Jatinder Kaur</div>
        </div>

        <table ref={ref}>
          <thead>
            <tr>
              {headers?.map((head, index) => (
                <th key={index}>{head?.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Array.isArray(data)
              ? data.map((dat, index) => (
                  <tr key={index}>
                    <td>{dat?.firstName}</td>
                    <td>{dat?.lastName}</td>
                    <td>{dat?.email}</td>
                    <td>{dat?.age}</td>
                  </tr>
                ))
              : ""}
          </tbody>
        </table>
      </div>
      {/* <AsyncCSV /> */}
    </div>
  );
}

export default App;
