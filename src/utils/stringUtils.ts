export const extractParameterFromUrl = (url: string, parameter: string) => {
    const match = url.match(new RegExp(`[?&]${parameter}=(\\d+)`));
    
    return match ? Number(match[1]) : null;
}