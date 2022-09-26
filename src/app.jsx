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
        <td>{props.Owner}</td>
        <td>{props.Created.toDateString()}</td>

        <td>{props.Due.toDateString()}</td>


        <td>{props.Status}</td>


      </tr>
    )
  }

  const issueRow = issues.map((issue, key) => (
    <IssueRow Id={issue.Id} Title={issue.Title} Owner={issue.Owner} Created={issue.Created} Due={issue.Due} Status={issue.Status} key={key} />
  ))

  return (<div>
    <h1>Issue Table</h1>
    <table >
      <thead>
        <tr>
          <th>ID</th>

          <th>Title</th>
          <th>Owner</th>
          <th>Created</th>
          <th>Due</th>
          <th>Status</th>


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
  const newIssue = {  Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" };
  React.useEffect(()=>{
    // console.log('hello',counter);
    
      AddSingleIssue(newIssue);      
  
    // counter++;
  },[]);

  return <h1>Add Issue</h1>;
};





  const IssueList=()=>{
    const tempIssues = [{ Id: 1, Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }, { Id: 2, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-22"), Status: "Resolved", Title: "this is 2nd issue" }, { Id: 3, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 3rd issue" }, { Id: 4, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 4th issue" }, { Id: 5, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 5th issue" }, { Id: 6, Owner: "Person-A", Created: new Date('2022-09-18'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 6th issue" }]
  // const newIssue = {  Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }
    
    const [issues, setIssues] = React.useState(tempIssues);

    const AddSingleIssue=({newIssue})=>{
      // newIssue.Id = issues.length +1;
      let issueList= issues;
      issueList.push(newIssue);
      setIssues(issueList);
        }
    
    return(<>
      <IssueFilter />¸
    <hr />
    <IssueTable issues={issues} />
    <hr />
    <AddIssue AddSingleIssue={AddSingleIssue} />
      </>)
  };
  const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <IssueList />
  </>
);
