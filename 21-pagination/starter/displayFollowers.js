const displayUsers = (followers, container) => {
    const newFollowers = followers.map((eachFollower) => {

        const {id, avatar_url, login, html_url} = eachFollower;

        return `<article class="card">
        <img src="${avatar_url}" alt="${id}" />
        <h4>${login}</h4>
        <a href="${html_url}" class="btn">view profile</a>
    </article>`
    }).join("")
    container.innerHTML = newFollowers;
}

export default displayUsers;
