export class DatabaseService{
    static async getResource(url) {
        let result = await $.ajax({
            url,
            method: 'get',
            dataType: 'html',
            cache: false
        })

        return result;
    }
    static async postResurce(url, data) {
        let result = await $.ajax({
            url,
            method: 'post',
            dataType: 'text',
            data
        })

        return result;
    }
}