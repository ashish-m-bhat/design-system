export const INCLUDES = 'includes';
export const STARTS_WITH = 'startsWith';

export const customSearch = (input, list, searchType) => {
    if (searchType === INCLUDES) {
        return list.filter((data) => data.toLowerCase().includes(input.toLowerCase()));
    } else if (searchType === STARTS_WITH) {
        return list.filter((data) => data.toLowerCase().startsWith(input.toLowerCase()));
    }
};
