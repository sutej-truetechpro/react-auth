export default class UtilityService {
    static getUserData() {
        const temp = localStorage.getItem('userData');
        let userData = {};
        if (typeof temp === "string") {
            userData = JSON.parse(temp);
        }
        return userData
    }
}
