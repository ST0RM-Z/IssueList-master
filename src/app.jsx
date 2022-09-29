const IssueFilter = () => {
  return <h1>Issue Filter</h1>;
};

const IssueTable = ({issues}) => {
  // const rowStyle = {
  //   "border": "1px solid"
  // };
  // const tempIssues = [];
  // const tempIssues = [{ Id: 1, Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }, { Id: 2, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-22"), Status: "Resolved", Title: "this is 2nd issue" }, { Id: 3, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 3rd issue" }, { Id: 4, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 4th issue" }, { Id: 5, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 5th issue" }, { Id: 6, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 6th issue" }]
  // const newIssue = {  Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }

  // const [issues, setIssues] = React.useState(tempIssues);

  // const issues = [{ Id: 1, Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }, { Id: 2, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-22"), Status: "Resolved", Title: "this is 2nd issue" }, { Id: 3, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 3rd issue" }, { Id: 4, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 4th issue" }, { Id: 5, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 5th issue" }, { Id: 6, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 6th issue" }]
  // setTimeout(() => {
  //   setIssues(tempIssues);
  // }, 3000);

  // let counter=0;



  const IssueRow = (props) => {
    return (
      <tr>
        <td>{props.Id}</td>
        <td>{props.Title}</td>
        <td>{props.effort}</td>
        <td>{props.Owner}</td>
        <td>{props.Created.toString()}</td>
        <td>{props.Due.toString()}</td>
        <td>{props.Status}</td>


      </tr>
    )
  }

  const issueRow = issues.map((issue, key) => (
    <IssueRow Id={issue.Id} Title={issue.Title} Owner={issue.Owner} effort={issue.effort} Created={issue.Created} Due={issue.Due} Status={issue.Status} key={key} />
  ))

  return (<div>
    <h1>Issue Table</h1>
    <table >
      <thead>
        <tr>
          <th>ID</th>
          <th>Status</th>
          <th>Owner</th>
          <th>effort</th>
          <th>Created</th>
          <th>Due</th>
          <th>Title</th>
          


        </tr>
      </thead>
      <tbody>
        {issueRow}
      </tbody>
    </table>
  </div>);
};

const AddIssue = ({AddSingleIssue}) => {
  // let counter=0;
  // const newIssue = {  Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" };
  // React.useEffect(()=>{
  //   // console.log('hello',counter);
    
  //     AddSingleIssue(newIssue);      
  
  //   // counter++;
  // },[]);
const handleSubmit=(event)=>{
 event.preventDefault();
 let form= document.forms.addForm;

  let newIssue = {
      Status: form.Status.value,
      Owner: form.Owner.value,
      effort: form.effort.value,
      Created:new Date (form.Created.value),
      Due: new Date(form.Due.value),
      Title: form.Title.value,
  };
  AddSingleIssue(newIssue);
  console.log('form',newIssue);
  // form.reset();
}
  return ( <div>
    <h1>This is placeholder for AddIssue</h1>
    <form name="addForm" onSubmit={handleSubmit}>
    <input name="Status" placeholder="Status" type="text" />
      <input name="Owner" placeholder="Owner" type="text" />
      <input name="effort" placeholder="Effort" type="text" />
      <input name="Created" placeholder="Created" type="text" />
      <input name="Due" placeholder="Due" type="text" />
      <input name="Title" placeholder="Title" type="text" />
      <button type="submit">Submit</button>
    </form>
  </div>
  
)};





  const IssueList=()=>{
    // const tempIssues = [{ Id: 1, Owner: "Person-B", effort: 10, Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }, { Id: 2, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-22"), Status: "Resolved", Title: "this is 2nd issue" }, { Id: 3, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 3rd issue" }, { Id: 4, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 4th issue" }, { Id: 5, Owner: "Person-A",effort: 10, Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 5th issue" }, { Id: 6, Owner: "Person-A", effort: 10,Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 6th issue" }]
  // const newIssue = {  Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }
    
    const [issues, setIssues] = React.useState([]);
    const query = `
    query IssueList {
      issueList {
        Id
        Status
        Owner
        effort
        Created
        Due
        Title
      }
    }`
    React.useEffect(()=>{
       fetch('/graphql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ query })
      }).then(async function(response){
        let issueData = await response.json();
        console.log('issuedata-fetch',issueData.data.issueList);
        setIssues(issueData.data.issueList)
      })
    },[])

    // const AddSingleIssue=({newIssue})=>{
    //   // newIssue.Id = issues.length +1;
    //   let issueList= issues;
    //   issueList.push(newIssue);
    //   setIssues(issueList);
    //     }

        
  const AddSingleIssue = (newIssues) => {
    newIssues.id = issues.length + 1;
    let IssueList = issues.slice();
    IssueList.push(newIssues);
    setIssues(IssueList);
  };
    
    return (<>
      <IssueFilter />
    <hr />
    <IssueTable issues={issues} />
    <hr />
    <AddIssue AddSingleIssue={AddSingleIssue} />
      </>
      )
    };

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <IssueList />
);
