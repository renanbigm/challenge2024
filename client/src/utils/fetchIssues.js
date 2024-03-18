const BASE_URL = 'http://localhost:3010'; // Altere conforme necessário

export const getIssues = async () => {
    try {
        const response = await fetch(`${BASE_URL}/issues`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            },
        });
        if (!response.ok) {
        throw new Error('Error to get issues');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const createIssue = async (issueData) => {
    try {
        const response = await fetch(`${BASE_URL}/issues`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issueData),
        });
        if (!response.ok) {
        throw new Error('Error to create an issue');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateIssue = async (id, issueData) => {
    try {
        const response = await fetch(`${BASE_URL}/issues/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(issueData),
        });
        if (!response.ok) {
        throw new Error('Error to update an issue');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const deleteIssue = async (id) => {
    try {
        const response = await fetch(`${BASE_URL}/issues/${id}`, {
        method: 'DELETE',
        });
        if (!response.ok) {
        throw new Error('Erro to delet issue');
        }
        return;
    } catch (error) {
        console.error(error);
        throw error;
    }
};
