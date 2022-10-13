const EmployeeFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Employee Filter");
};
const EmployeeTable = ({
  emps
}) => {
  const EmpRow = props => {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props._id), /*#__PURE__*/React.createElement("td", null, props.firstname), /*#__PURE__*/React.createElement("td", null, props.lastname), /*#__PURE__*/React.createElement("td", null, props.age), /*#__PURE__*/React.createElement("td", null, props.dateofjoining), /*#__PURE__*/React.createElement("td", null, props.title), /*#__PURE__*/React.createElement("td", null, props.department), /*#__PURE__*/React.createElement("td", null, props.employeetype), /*#__PURE__*/React.createElement("td", null, props.currentstatus));
  };
  const empRow = emps.map((e, key) => /*#__PURE__*/React.createElement(EmpRow, {
    _id: e._id,
    firstname: e.firstname,
    lastname: e.lastname,
    age: e.age,
    dateofjoining: e.dateofjoining,
    title: e.title,
    department: e.department,
    employeetype: e.employeetype,
    currentstatus: e.currentstatus,
    key: key
  }));
  const container = {
    color: "black",
    backgroundColor: "#9CC4B0",
    padding: "2rem",
    fontFamily: "Sans-Serif"
  };
  const table = {
    border: "1px solid black"
  };
  const tblCell = {
    padding: "2rem"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h1", null, "Employee Table"), /*#__PURE__*/React.createElement("table", {
    style: table
  }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", {
    style: tblCell
  }, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "FirstName"), /*#__PURE__*/React.createElement("th", null, "LastName"), /*#__PURE__*/React.createElement("th", null, "Age"), /*#__PURE__*/React.createElement("th", null, "DateOfJoining"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Department"), /*#__PURE__*/React.createElement("th", null, "EmployeeType"), /*#__PURE__*/React.createElement("th", null, "CurrentStatus"))), /*#__PURE__*/React.createElement("tbody", null, empRow)));
};
const AddEmp = ({
  AddSingleEmp
}) => {
  const query = `mutation storeEmployeeToDatabase($firstname:String,$lastname: String!,$age:Int!,$dateofjoining:String,$title:String,$department:String,$employeetype:String,$currentstatus:Int) {storeEmployeeToDatabase(firstname: $firstname, lastname: $lastname, age: $age,title:$title,department:$department, employeetype: $employeetype, currentstatus: $currentstatus, dateofjoining: $dateofjoining) { _id firstname lastname age title department dateofjoining employeetype currentstatus }}`;
  const handleSubmit = async event => {
    event.preventDefault();
    let form = document.forms.addForm;
    let newEmp = {
      firstname: form.firstname.value,
      lastname: form.lastname.value,
      age: parseInt(form.age.value),
      dateofjoining: form.dateofjoining.value,
      title: form.title.value,
      employeetype: form.employeetype.value,
      currentstatus: parseInt(form.currentstatus.value),
      department: form.department.value
    };
    // console.log('id',form.id +1);

    var firstname = newEmp.firstname;
    var lastname = newEmp.lastname;
    var age = newEmp.age;
    var dateofjoining = newEmp.dateofjoining;
    var title = newEmp.title;
    var employeetype = newEmp.employeetype;
    var currentstatus = newEmp.currentstatus;
    var department = newEmp.department;
    console.log('newEmp ', lastname);
    fetch("/graphql", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        query,
        variables: newEmp
      })
    }).then(response => response.json()).then(laptop => {
      console.log(laptop);
    }).catch(err => {
      console.log(err);
    })

    // AddSingleEmp(newEmp);
    ;

    setTimeout(() => {
      window.location.reload();
    }, 3000);
  };
  const container = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "2rem",
    fontFamily: "Sans-Serif"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: container
  }, /*#__PURE__*/React.createElement("h1", null, "This is placeholder for Adding Employee"), /*#__PURE__*/React.createElement("form", {
    name: "addForm",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("input", {
    name: "firstname",
    placeholder: "firstname",
    type: "text",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "lastname",
    placeholder: "lastname",
    type: "text",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "age",
    size: "4",
    max: "70",
    min: "4",
    placeholder: "age",
    type: "number",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "dateofjoining",
    placeholder: "dateofjoining",
    type: "date",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "title",
    placeholder: "title",
    type: "text"
  }), /*#__PURE__*/React.createElement("input", {
    name: "department",
    placeholder: "department",
    type: "text",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "employeetype",
    placeholder: "employeetype",
    type: "text",
    required: true
  }), /*#__PURE__*/React.createElement("input", {
    name: "currentstatus",
    placeholder: "currentstatus",
    type: "text",
    required: true
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, "Submit")));
};
const EmployeeList = () => {
  const [emps, setEmps] = React.useState([]);
  const query = `
    query EmpList {
      empList {
       _id
        firstname
        lastname
        age
        dateofjoining
        title
        employeetype
        currentstatus
        department
      }
    }`;
  React.useEffect(() => {
    fetch('/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    }).then(async function (response) {
      let empData = await response.json();
      console.log('data-fetch', empData.data.empList);
      setEmps(empData.data.empList);
    });
  }, []);
  const AddSingleEmp = newEmp => {
    newEmp._id = emps.length + 1;
    let EmpList = emps.slice();
    EmpList.push(newEmp);
    setEmps(EmpList);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(EmployeeFilter, null), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(EmployeeTable, {
    emps: emps
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddEmp, {
    AddSingleEmp: AddSingleEmp
  }));
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(EmployeeList, null));