function bind(callback, context) {
    return function () {
        return callback.apply(context, arguments);
    };
}
let user = {
    name: "Till Lindemann",
    say: function (word) {
        console.log(word + ', ' + this.name);
    }
};
let say = user.say.bind(user);
say("Hi");