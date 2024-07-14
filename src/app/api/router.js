export async function GET(request) {
    let url = "https://dummyjson.com/todos?limit=204skip=0";
    todos = [];

    await fetch(url)
        .then((response) => response.json())
        .then(result => todos = result.todos);


        return Response.json((todos));
}