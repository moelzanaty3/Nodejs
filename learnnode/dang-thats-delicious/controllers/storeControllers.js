exports.myMiddleWare = (req, res, next) => {
    const name = 'zanaty';
    res.cookie('name', `${name} is cool`, {maxAge: 9000000});
    next();
}

exports.homePage = (req, res) => {
    
    res.render('index');
}

