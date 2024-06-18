export function delayInSec(seconds = 3000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({});
        }, seconds);
    });
}

let cache = new Map();
export function apiFetcher(url: string) {
    if (!cache.has(url)) {
        cache.set(url, getData(url));
    }
    return cache.get(url);
}

async function getData(url: string) {
    const res = await fetch(url);
    return await res.json()
}