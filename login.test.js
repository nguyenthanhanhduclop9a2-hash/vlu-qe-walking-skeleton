const { login } = require('./login');

describe('Hàm login()', () => {

    test('Trả về true khi username="admin" và password="123"', () => {
        expect(login('admin', '123')).toBe(true);
    });

    test('Trả về false khi sai username', () => {
        expect(login('user', '123')).toBe(false);
    });

    test('Trả về false khi sai password', () => {
        expect(login('admin', 'wrong')).toBe(false);
    });

    test('Trả về false khi sai cả username và password', () => {
        expect(login('user', 'wrong')).toBe(false);
    });

    test('Trả về false khi để trống username và password', () => {
        expect(login('', '')).toBe(false);
    });

    test('Trả về false khi username null', () => {
        expect(login(null, '123')).toBe(false);
    });

    test('Trả về false khi password null', () => {
        expect(login('admin', null)).toBe(false);
    });

    test('Trả về false khi nhập khoảng trắng', () => {
        expect(login('admin ', '123')).toBe(false);
    });
});
