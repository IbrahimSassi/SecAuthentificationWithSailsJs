/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {




    //checkUser Func

    checkUser: function (req,res) {

        if(!req.session.me){
            return res.view('login');
        }
        else{
            return res.view('dashboard');
        }
    },
    
    getUser: function (req,res) {
        console.log('Running GetUser');
        User.findOne({
            id :req.session.me
        }, function (err,user) {
            if(err)
            {
                return res.negotiate(err);
            }
            return res.send(user);
        })
    }












};

