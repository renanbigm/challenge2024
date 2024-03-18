import React, { useState, useEffect } from 'react';
import { getIssues, createIssue, updateIssue, deleteIssue } from './utils/fetchIssues';

function App() {
  const [issues, setIssues] = useState([]);
  const [newIssue, setNewIssue] = useState({ title: '', description: '' });
  const [updatedIssue, setUpdatedIssue] = useState({ id: null, title: '', description: '' });

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    try {
      const data = await getIssues();
      setIssues(data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const handleCreateIssue = async () => {
    try {
      await createIssue(newIssue);
      fetchIssues();
      setNewIssue({ title: '', description: '' });
    } catch (error) {
      console.error('Error creating issue:', error);
    }
  };

  const handleUpdateIssue = async () => {
    try {
      await updateIssue(updatedIssue.id, updatedIssue);
      fetchIssues();
      setUpdatedIssue({ id: null, title: '', description: '' });
    } catch (error) {
      console.error('Error updating issue:', error);
    }
  };

  const handleDeleteIssue = async (id) => {
    try {
      await deleteIssue(id);
      fetchIssues();
    } catch (error) {
      console.error('Error deleting issue:', error);
    }
  };

  const handleEditClick = (issue) => {
    setUpdatedIssue({ id: issue.id, title: issue.title, description: issue.description });
  };

  return (
    <div>
      <h1>Issues</h1>
      <ul>
        {issues.map((issue) => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p>{issue.description}</p>
            <button onClick={() => handleEditClick(issue)}>Edit</button>
            <button onClick={() => handleDeleteIssue(issue.id)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Create Issue</h2>
      <input
        type="text"
        placeholder="Title"
        value={newIssue.title}
        onChange={(e) => setNewIssue({ ...newIssue, title: e.target.value })}
      />
      <input
        type="text"
        placeholder="Description"
        value={newIssue.description}
        onChange={(e) => setNewIssue({ ...newIssue, description: e.target.value })}
      />
      <button onClick={handleCreateIssue}>Create Issue</button>
      {updatedIssue.id && (
        <div>
          <h2>Edit Issue</h2>
          <input
            type="text"
            placeholder="Title"
            value={updatedIssue.title}
            onChange={(e) => setUpdatedIssue({ ...updatedIssue, title: e.target.value })}
          />
          <input
            type="text"
            placeholder="Description"
            value={updatedIssue.description}
            onChange={(e) => setUpdatedIssue({ ...updatedIssue, description: e.target.value })}
          />
          <button onClick={handleUpdateIssue}>Update Issue</button>
        </div>
      )}
    </div>
  );
}

export default App;
