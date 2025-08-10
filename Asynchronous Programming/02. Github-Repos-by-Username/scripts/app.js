function loadRepos() {
	const usernameInputEl = document.querySelector('#username');
	const reposUlEl = document.querySelector('#repos');
	reposUlEl.innerHTML = '';

	const username = usernameInputEl.value.trim();
	fetch(`https://api.github.com/users/${username}/repos`)
		.then(res => {
			if (!res.ok) {
				throw new Error(res.status)
			} 
				return res.json();
		})
		.then(allRepos => {
			allRepos.forEach(repoObj => {
				const liEl = document.createElement('li');
				const aEl = document.createElement('a');
				aEl.href = repoObj.html_url;
				aEl.textContent = repoObj.full_name;
				liEl.appendChild(aEl);
				reposUlEl.appendChild(liEl);
			});
		})
		.catch(err => {
			const liEl = document.createElement('li');
			liEl.textContent = `${err} (Not Found)`;
			reposUlEl.appendChild(liEl);
		})
}