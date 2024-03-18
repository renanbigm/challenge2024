const fs = require('fs');
const dataFilePath = './data/data.json';

const getAllIssues = () => {
    try {
        const data = fs.readFileSync(dataFilePath, 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading data file:', error);
        return [];
    }
};

const saveDataToFile = (data) => {
    try {
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
    } catch (error) {
        console.error('Error writing data to file:', error);
    }
};

const createIssue = (title, description) => {
    const issues = getAllIssues();
    const issueID = issues.length + 1;
    const newIssue = { id: issueID, title, description };

    issues.push(newIssue);
    saveDataToFile(issues);

    return newIssue;
};

const updateIssue = (id, title, description) => {
    let issues = getAllIssues();
    const index = issues.findIndex(issue => issue.id === id);

    if (index === -1) {
        throw new Error('Issue not found');
    }

    issues[index].title = title || issues[index].title;
    issues[index].description = description || issues[index].description;
    saveDataToFile(issues);

    return issues[index];
};

const deleteIssue = (id) => {
    let issues = getAllIssues();
    const index = issues.findIndex(issue => issue.id === id);

    if (index === -1) {
        throw new Error('Issue not found');
    }

    const deletedIssue = issues.splice(index, 1)[0];
    saveDataToFile(issues);

    return deletedIssue;
};

module.exports = {
    getAllIssues,
    createIssue,
    updateIssue,
    deleteIssue,
};
