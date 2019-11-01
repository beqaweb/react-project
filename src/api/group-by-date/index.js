export const groupByDate = arrArg => {
    return (arr => {
        const isToday = date => date.toDateString() === (new Date()).toDateString();
        const isYesterday = date => (new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1))
            .toDateString() === (new Date()).toDateString();
        const isThisMonth = date => {
            const d = new Date();
            return date.getFullYear() === d.getFullYear() && date.getMonth() === d.getMonth();
        };

        const setEl = (map, key, value) => map.set(key, [
            ...(map.get(key) || []),
            value
        ]);

        const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'
        ];

        const getKey = date => {
            switch (true) {
                case isToday(date):
                    return 'Today';
                case isYesterday(date):
                    return 'Yesterday';
                case isThisMonth(date):
                    return 'This Month';
                default:
                    return `${monthNames[date.getMonth()]} ${date.getFullYear()}`;
            }
        };

        const keyToDate = key => {
            const today = new Date();
            switch (key) {
                case 'Today':
                    return today;
                case 'Yesterday':
                    return new Date(`${today.getDate() - 1} ${monthNames[today.getMonth()]} ${today.getFullYear()}`);
                case 'This Month':
                    return new Date(`${monthNames[today.getMonth()]} ${today.getFullYear()}`);
                case 'Other':
                    return new Date('dec 1000');
                default:
                    return new Date(key);
            }
        };

        const map = arr.reduce((acc, cur) => {
            const date = cur.date instanceof Date ? cur.date : cur.date.toDate();
            if (!date || !(date instanceof Date)) {
                return setEl(acc, 'Other', cur);
            }
            return setEl(acc, getKey(date), cur);
        }, new Map());

        return [...map.entries()].sort((a, b) => {
            return keyToDate(b[0]) - keyToDate(a[0]);
        });
    })(arrArg);
};
