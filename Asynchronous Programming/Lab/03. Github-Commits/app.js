async function loadCommits() {
    const username = document.getElementById('username').value.trim();
    const repo = document.getElementById('repo').value.trim();
    const commitsList = document.getElementById('commits');

    commitsList.innerHTML = '';
    const url = `https://api.github.com/repos/${username}/${repo}/commits`;
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw { status: response.status, statusText: response.statusText };
        }

        const data = await response.json();

        data.forEach(entry => {
            const li = document.createElement('li');
            li.textContent = `${entry.commit.author.name}: ${entry.commit.message}`;
            commitsList.appendChild(li);
        });

    } catch (error) {
        const li = document.createElement('li');
        li.textContent = `Error: ${error.status} (Not Found)`;
        commitsList.appendChild(li);
    }
}