/**
 * Hàm kiểm tra đăng nhập
 * @param {string} username - Tên đăng nhập
 * @param {string} password - Mật khẩu
 * @returns {boolean} - true nếu đúng thông tin đăng nhập, ngược lại false
 */
function login(username, password) {
    return username === 'admin' && password === '1234';
}

// Export để sử dụng trong Jest (CommonJS)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { login };
}
