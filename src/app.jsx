const EmployeeFilter = () => {
  return <h1>Employee Filter</h1>;
};

const EmployeeTable = ({emps}) => {



  const EmpRow = (props) => {
    return (
      <tr>
         <td>{props._id}</td>
        <td>{props.firstname}</td>
        <td>{props.lastname}</td>
        <td>{props.age}</td>
        <td>{props.dateofjoining}</td>
        <td>{props.title}</td>
        <td>{props.department}</td>
        <td>{props.employeetype}</td>
        <td>{props.currentstatus}</td>
   

      </tr>
    )
  }

  const empRow = emps.map((e, key) => (
    <EmpRow _id={e._id} firstname={e.firstname} lastname={e.lastname} age={e.age} dateofjoining={e.dateofjoining} title={e.title} department={e.department} employeetype={e.employeetype} currentstatus={e.currentstatus} key={key} />
  ))
  const container = {
    color: "black",
    backgroundColor: "#9CC4B0",
    padding: "2rem",
    fontFamily: "Sans-Serif"
  };
  const table = {
    border:"1px solid black"
  };
  const tblCell = {
    padding: "2rem"
  }
  return (<div style={container}>
    <h1>Employee Table</h1>
    <table style={table}>
      <thead >
        <tr style={tblCell}>
          <th>ID</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>Age</th>
          <th>DateOfJoining</th>
          <th>Title</th>
          <th>Department</th>
          <th>EmployeeType</th>
          <th>CurrentStatus</th>
          


        </tr>
      </thead>
      <tbody>
        {empRow}
      </tbody>
    </table>
  </div>);
};

const AddEmp = ({AddSingleEmp}) => {
  const query = `mutation storeEmployeeToDatabase($firstname:String,$lastname: String!,$age:Int!,$dateofjoining:String,$title:String,$department:String,$employeetype:String,$currentstatus:Int) {storeEmployeeToDatabase(firstname: $firstname, lastname: $lastname, age: $age,title:$title,department:$department, employeetype: $employeetype, currentstatus: $currentstatus, dateofjoining: $dateofjoining) { _id firstname lastname age title department dateofjoining employeetype currentstatus }}`;
const handleSubmit=async (event)=>{
 event.preventDefault();



 let form= document.forms.addForm;

  let newEmp = {
      
    
      firstname:form.firstname.value,
      lastname:form.lastname.value,
      age:parseInt(form.age.value),
      dateofjoining:form.dateofjoining.value,
      title:form.title.value,
      employeetype:form.employeetype.value,
      currentstatus:parseInt(form.currentstatus.value),
      department:form.department.value,
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


  console.log('newEmp ',lastname);

  
  fetch("/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables: newEmp })
  }).then((response) => response.json())
    .then((laptop) => {
      console.log(laptop)
    })
    .catch((err) => {
      console.log(err)
    })




  // AddSingleEmp(newEmp);
 

;
setTimeout(() => {
  window.location.reload();
}, 3000);

}
const container = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "2rem",
  fontFamily: "Sans-Serif"
};
  return ( <div style={container}> 
    <h1>This is placeholder for Adding Employee</h1>
    <form name="addForm" onSubmit={handleSubmit} >
    <input name="firstname" placeholder="firstname" type="text" required/>
    <input name="lastname" placeholder="lastname" type="text" required />
    <input name="age" size="4" max="70" min="4" placeholder="age" type="number" required/>
    <input name="dateofjoining" placeholder="dateofjoining" type="date" required />
    <input name="title" placeholder="title" type="text" />
    <input name="department" placeholder="department" type="text" required />
    <input name="employeetype" placeholder="employeetype" type="text" required />
    <input name="currentstatus" placeholder="currentstatus" type="text"required />
    
      <button type="submit">Submit</button>
    </form>
  </div>
  
)};





  const EmployeeList=()=>{
 
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
    }`
    React.useEffect(()=>{
       fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
      }).then(async function(response){
        let empData = await response.json();
        console.log('data-fetch',empData.data.empList);
        setEmps(empData.data.empList);
        
      })
    },[])

  

        
  const AddSingleEmp = (newEmp) => {
    newEmp._id = emps.length + 1;
    let EmpList = emps.slice();
    EmpList.push(newEmp);
    setEmps(EmpList);
  };
    
    return (<>
    <EmployeeFilter />
    <hr />
  
    <EmployeeTable emps={emps} />
    <hr />
    <AddEmp AddSingleEmp={AddSingleEmp} />
      </>
      )
    };

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <EmployeeList />
);
