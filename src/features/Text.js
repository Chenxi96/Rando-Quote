export function Text() {
    const request = new Request('https://api.quotable.io')

    fetch(request).then((response) => {
        console.log(response.ok);
    })

}