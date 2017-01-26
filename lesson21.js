var user = {
    name: 'pers1307',
    id: 44,
    toJSON: function () {
        return {
            name: this.name
        }
    }
};

var userDate = JSON.stringify(user);

console.log(userDate);

console.log(JSON.parse(userDate));