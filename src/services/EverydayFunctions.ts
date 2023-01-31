export const CapitaliseEachWord = (text : string) => {
    return text.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join('');
}