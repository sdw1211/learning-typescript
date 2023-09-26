function createDate(timestamp: number): Date;
function createDate(month: number, day: number, year: number): Date;
function createDate(monthOrTimestamp:number, day?: number, year?:number) {
    return day === undefined || year === undefined ?
        new Date(monthOrTimestamp) :
        new Date(year, monthOrTimestamp, day);
}

createDate(554356800);
createDate(7,27,1987);

createDate(1,2);


function format(data: string): string;
function format(data: string, needle: string, haystack: string): string;
function format(getData: () => string): string;
function format(data: string | (() => string), needle?: string, haystack?: string): string {
    const value = typeof data === 'function' ? data() : data;
    return needle && haystack ? value.replace(needle, haystack) : value;
}

export {};
