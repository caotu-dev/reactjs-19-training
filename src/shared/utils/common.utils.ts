export function delayInSec(seconds = 3000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({});
        }, seconds);
    });
}