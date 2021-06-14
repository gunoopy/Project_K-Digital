var db = require('./db')


exports.login = function(request, response){
    var post = request.body; // post = {userID : <...>, userPW : <...>}
    db.query('select * from user where id = ?', [post.userID], function(err, user){
        if (err) next(err);
        if (user.length === 0) {
            response.send('<script>alert("사용자가 존재하지 않습니다.");window.location="/login";</script>');
        } else {
            // user = {id, password, name, latitude, longitude, location}
            if (post.userPW === user[0].password){
                response.redirect(`/service/${post.userID}`);
            } else {
                response.send('<script>alert("비밀번호가 일치하지 않습니다.");window.location="/login";</script>');
            }
        }
    })
}