export class Validator {
    static isRequired(value) {
        return {
            check: value,
            error: 'Поле должно быть заполнено'
        };
    }

    static isEmail(value) {
        return {
            check: value.match(/\w+@\w+\.\w{2,3}/),
            error: 'Необходимо указать корректный адрес'
        }
    }

    static isMinLength(value) {
        return {
            check: value.length > 10,
            error: 'Введите не менее 10 символов'
        }
    }
}
