import Xray from 'x-ray';

export default class {
    get (url, data) {
        return new Promise((resolve, reject) => {
            let xray = Xray();

            xray(url, data)((error, result) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(result);
                }
            });
        });
    }
}
