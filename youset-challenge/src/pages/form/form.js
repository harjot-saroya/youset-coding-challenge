export const Form = () => {
    const search = window.location.search;
    const params = new URLSearchParams(search);
    console.log(params, search)
    return (<h1>TEST123</h1>)
}
