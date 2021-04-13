export const getCookieUtil = (cookieName) => {
    const cookieValue = document.cookie.match('(^|;)\\s*' + cookieName + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
}