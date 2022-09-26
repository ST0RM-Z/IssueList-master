const IssueFilter = () => {
  return /*#__PURE__*/React.createElement("h1", null, "Issue Filter");
};

const IssueTable = ({
  issues
}) => {
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
  const IssueRow = props => {
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, props.Id), /*#__PURE__*/React.createElement("td", null, props.Title), /*#__PURE__*/React.createElement("td", null, props.Owner), /*#__PURE__*/React.createElement("td", null, props.Created.toDateString()), /*#__PURE__*/React.createElement("td", null, props.Due.toDateString()), /*#__PURE__*/React.createElement("td", null, props.Status));
  };

  const issueRow = issues.map((issue, key) => /*#__PURE__*/React.createElement(IssueRow, {
    Id: issue.Id,
    Title: issue.Title,
    Owner: issue.Owner,
    Created: issue.Created,
    Due: issue.Due,
    Status: issue.Status,
    key: key
  }));
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Issue Table"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Title"), /*#__PURE__*/React.createElement("th", null, "Owner"), /*#__PURE__*/React.createElement("th", null, "Created"), /*#__PURE__*/React.createElement("th", null, "Due"), /*#__PURE__*/React.createElement("th", null, "Status"))), /*#__PURE__*/React.createElement("tbody", null, issueRow)));
};

const AddIssue = ({
  AddSingleIssue
}) => {
  // let counter=0;
  const newIssue = {
    Owner: "Person-B",
    Created: new Date('2022-09-19'),
    Due: new Date("2022-09-21"),
    Status: "Assigned",
    Title: "this is 1st issue"
  };
  React.useEffect(() => {
    // console.log('hello',counter);
    AddSingleIssue(newIssue); // counter++;
  }, []);
  return /*#__PURE__*/React.createElement("h1", null, "Add Issue");
};

const IssueList = () => {
  const tempIssues = [{
    Id: 1,
    Owner: "Person-B",
    Created: new Date('2022-09-19'),
    Due: new Date("2022-09-21"),
    Status: "Assigned",
    Title: "this is 1st issue"
  }, {
    Id: 2,
    Owner: "Person-A",
    Created: new Date('2022-09-18'),
    Due: new Date("2022-09-22"),
    Status: "Resolved",
    Title: "this is 2nd issue"
  }, {
    Id: 3,
    Owner: "Person-A",
    Created: new Date('2022-09-18'),
    Due: new Date("2022-09-21"),
    Status: "Assigned",
    Title: "this is 3rd issue"
  }, {
    Id: 4,
    Owner: "Person-A",
    Created: new Date('2022-09-18'),
    Due: new Date("2022-09-21"),
    Status: "Assigned",
    Title: "this is 4th issue"
  }, {
    Id: 5,
    Owner: "Person-A",
    Created: new Date('2022-09-18'),
    Due: new Date("2022-09-21"),
    Status: "Assigned",
    Title: "this is 5th issue"
  }, {
    Id: 6,
    Owner: "Person-A",
    Created: new Date('2022-09-18'),
    Due: new Date("2022-09-21"),
    Status: "Assigned",
    Title: "this is 6th issue"
  }]; // const newIssue = {  Owner: "Person-B", Created: new Date('2022-09-19'), Due: new Date("2022-09-21"), Status: "Assigned", Title: "this is 1st issue" }

  const [issues, setIssues] = React.useState(tempIssues);

  const AddSingleIssue = ({
    newIssue
  }) => {
    // newIssue.Id = issues.length +1;
    let issueList = issues;
    issueList.push(newIssue);
    setIssues(issueList);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IssueFilter, null), "\xB8", /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(IssueTable, {
    issues: issues
  }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(AddIssue, {
    AddSingleIssue: AddSingleIssue
  }));
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IssueList, null)));