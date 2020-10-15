exports.userSingupValidator =  ( req, res ) => {
    req.check('name', 'Name is required').notEmpty()
    req.check('email', 'Email must be between 3 to 32 characters')
        .matches(/.+\@.+\..+/)
        .withMessage('Email must contain @')
        .isLength({
            min: 4,
            max: 32
        })

    req.check('password','Passowrd is required')
        .notEmpty()
        .isLength({
            min:6
        }).withMessage('Password must contain 6 character')
        .matches(/\d/)
        .withMessage("Password must Contain a number")

    const errors = req.validationErrors();

    if( errors ) {
        const firstError = errors.map( error => error.msg)[0];
        return res.status(400).json({ error: firstError })
    }
    next();
}