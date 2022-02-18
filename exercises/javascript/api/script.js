const resList = document.querySelector('.res')

const usersURL = "https://reqres.in/api/users?page=1"

function displayUsers() {
    axios.get(usersURL).then(response => {

        const d = response.data.data;
        console.log(d)
        d.forEach((user) => {
            resList.innerHTML +=
                `
                <ul class="res-users">
                    <li>
                        <img src="${user.avatar}" />
                        <p>${user.first_name}</p>
                        <p>${user.email}</p>
                    </li>
                </ul>
                `
        })
    })
};


displayUsers();