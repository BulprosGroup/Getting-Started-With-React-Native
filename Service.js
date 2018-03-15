export class Service {
    url = 'https://todoapiapp.azurewebsites.net/api/lists';


    constructor() {

    }

    getTodos() {
        return fetch(this.url).then(resp => resp.json());
    }

    postTodoList() {
        let todoList = {
            "Id": 0,
            "Name": "Icecream",
            "Items": [
                {
                    "Id": 0,
                    "Text": "Buy icecream",
                    "IsCompleted": true
                }
            ]
        };

        return fetch(this.url, {
            method: 'post',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todoList)
        }).then(function (response) {
            return response.json();
        });
    }
}