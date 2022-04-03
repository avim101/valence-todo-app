const fetcher = (input: RequestInfo, init?: RequestInit) => fetch(input, {
    ...init,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}).then((res) => res.json());

export default fetcher;
