export function delayInSec(seconds = 3000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({});
        }, seconds);
    });
}

// Cache api data
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

// Sort
export function sortArrayByKey(array: any[], key: string, order: 'asc' | 'desc' = 'asc') {
    return array?.sort((a, b) => {
        if (order === 'asc') {
            if (typeof a[key] === 'string') {
                return a[key].localeCompare(b[key]);
            }
            return a[key] - b[key];
        } else if (order === 'desc') {
            if (typeof a[key] === 'string') {
                return b[key].localeCompare(a[key]);
            }
            return b[key] - a[key];
        }
    });
}

export function sortByMultipleKeys(array: any[], keys: { name: string, direction: 'asc' | 'desc' }[]) {
    return array?.sort((a, b) => {
        for (let key of keys) {
            const direction = key.direction === 'desc' ? -1 : 1;
            if (a[key.name] < b[key.name]) return -1 * direction;
            if (a[key.name] > b[key.name]) return 1 * direction;
        }
        return 0;
    });
}

export function groupArrayBy(array: any[], key: string) {
    if(!array?.length) return [];
    return array.reduce((result, item) => {
        // Get the key value
        const keyValue = item[key];
        // If the key doesn't exist in the result, create an array for it
        if (!result[keyValue]) {
            result[keyValue] = [];
        }
        // Push the item into the array for this key
        result[keyValue].push(item);
        return result;
    }, {});
}

// Date time
export function getRelativeDate(dateString: string) {
    const inputDate = new Date(dateString);
    const today = new Date();

    // Reset time part for comparison
    today.setHours(0, 0, 0, 0);
    inputDate.setHours(0, 0, 0, 0);

    const timeDiff = inputDate.getTime() - today.getTime();
    const dayDiff = timeDiff / (1000 * 3600 * 24);

    if (dayDiff === 0) {
        return 'Today';
    } else if (dayDiff === -1) {
        return 'Yesterday';
    } else if (dayDiff === 1) {
        return 'Tomorrow';
    } else {
        return isoToShortDate(dateString);
    }
}

export function isoToShortDate(isoDateStr: string, format = 'MM/DD/YYYY') {
    const date = new Date(isoDateStr);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = date.getFullYear();

    if (format === 'MM/DD/YYYY') {
        return `${month}/${day}/${year}`;
    } else if (format === 'DD/MM/YYYY') {
        return `${day}/${month}/${year}`;
    } else {
        throw new Error('Unsupported format');
    }
}

export function formatIsoToHourMinutes(isoString: string) {
    const date = new Date(isoString);

    // Extract hours and minutes
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    // Return the formatted time string
    return `${hours}:${minutes}`;
}

// String
export function capitalizeFirstLetter(string: string) {
    if (!string) return string; // Handle empty strings
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function capitalizeEachWord(string: string) {
    if (!string) return string; // Handle empty strings
    return string.split(' ').map(word => capitalizeFirstLetter(word)).join(' ');
}