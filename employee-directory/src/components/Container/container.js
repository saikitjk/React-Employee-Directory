// import React, { Component } from "react";
// import TableData from "../DataTable/dataTable";

// import SearchBar from "../SearchBar/searchBar";
// import "./style.css";
// import API from "../../utils/API";

// class Container extends Component {
//   state = {
//     search: "",
//     employees: [],
//     filteredEmp: [],
//     order: "",
//   };

//   componentDidMount() {
//     API.getUsers()
//       .then((res) =>
//         this.setState({
//           employees: res.data.results,
//           filteredEmp: res.data.results,
//         })
//       )
//       .catch((err) => console.log(err));
//   }

//   sortByName = () => {
//     const filtered = this.state.filteredEmp;
//     if (this.state.order === "asc") {
//       const sorted = filtered.sort((a, b) =>
//         a.name.first > b.name.first ? 1 : -1
//       );
//       console.log(sorted);

//       this.setState({
//         filteredEmp: sorted,
//         order: "desc",
//       });
//     } else {
//       const sorted = filtered.sort((a, b) =>
//         a.name.first > b.name.first ? -1 : 1
//       );
//       console.log(sorted);

//       this.setState({
//         filteredEmp: sorted,
//         order: "asc",
//       });
//     }
//   };

//   handleInputChange = (event) => {
//     const employees = this.state.employees;
//     const UserInput = event.target.value;
//     const filteredEmp = employees.filter(
//       (employee) =>
//         employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
//     );
//     this.setState({
//       filteredEmp,
//     });
//   };

//   employeeSearch = () => {
//     API.getUsers()
//       .then((res) =>
//         this.setState({
//           filteredEmp: res.data.results,
//           employees: res.data.results,
//         })
//       )
//       .catch((err) => console.log(err));
//   };

//   //when button search it's clicked
//   handleSearch = (event) => {
//     event.preventDefault();
//     if (!this.state.search) {
//       alert("Please enter an employee name");
//     }
//     const { employees, search } = this.state;

//     //filters the object looking for the value that matches the value entered in the input box by the user  (search.this.state)
//     const filteredEmp = employees.filter((employee) =>
//       employee.name.first.toLowerCase().includes(search.toLowerCase())
//     );

//     this.setState({
//       filteredEmp,
//     });
//   };

//   render() {
//     return (
//       <div>
//         <SearchBar
//           employee={this.state.employees}
//           handleSearch={this.handleSearch}
//           handleInputChange={this.handleInputChange}
//         />

//         <TableData
//           results={this.state.filteredEmp}
//           sortByName={this.sortByName}
//         />
//       </div>
//     );
//   }
// }

// export default Container;

import React, { useEffect, useState } from "react";
import Table from "../DataTable/dataTable";
import EmployeeContext from "../../utils/EmployeeContext";
import SearchBar from "../SearchBar/searchBar";
import "./style.css";
import API from "../../utils/API";

function Container() {
  const [empState, setEmpState] = useState({
    employees: [],
    order: "",
    filteredEmp: [],
    search: "",
  });

  useEffect(() => {
    API.getUsers().then((results) => {
      //console.log("console test 1" + results.data.results);
      setEmpState({
        ...empState,
        employees: results.data.results,
        filteredEmp: results.data.results,
      });
    });
  });

  function sortByName() {
    const filtered = empState.filteredEmp;
    if (empState.order === "asc") {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? 1 : -1
      );
      setEmpState({
        filteredEmp: sorted,
        order: "desc",
      });
    } else {
      const sorted = filtered.sort((a, b) =>
        a.name.first > b.name.first ? -1 : 1
      );
      setEmpState({
        filteredEmp: sorted,
        order: "asc",
      });
    }
  }

  const handleInputChange = (event) => {
    const employees = empState.employees;
    const UserInput = event.target.value;
    const filteredEmp = employees.filter(
      (employee) =>
        employee.name.first.toLowerCase().indexOf(UserInput.toLowerCase()) > -1
    );
    setEmpState({
      filteredEmp,
    });
  };

  API.getUsers()
    .then((res) =>
      setEmpState({
        filteredEmp: res.data.results,
        employees: res.data.results,
      })
    )
    .catch((err) => console.log(err));

  const handleSearch = (event) => {
    event.preventDefault();
    if (!empState.search) {
      alert("Please enter an employee's name.");
    }
    //const { employees, search } = this.empState;
    const employees = empState.employees;
    const search = empState.search;
    const filteredEmp = employees.filter((employee) =>
      employee.name.first.toLowerCase().includes(search.toLowerCase())
    );

    setEmpState({
      filteredEmp,
    });
  };

  return (
    <EmployeeContext.Provider
    //value={{ ...empState, sortByName, handleInputChange }}
    >
      <div>
        <SearchBar
          employee={empState.employees}
          handleInputChange={handleInputChange}
          handleSearch={handleSearch}
        />
        <Table results={empState.filteredEmp} sortByName={sortByName} />
      </div>
    </EmployeeContext.Provider>
  );
}

export default Container;

///
