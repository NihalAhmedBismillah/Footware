// JScript source code

module.exports.PrintA = function (para1, para2, callback) {

    // To Do : do any api call or db call.

    setTimeout(function () {
        callback({ name: para1, address: para2 });
    }, 5000);
};
    