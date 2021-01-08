# my-project
newest project upadate to 6/1/2020
only has client side. now starting server. goodluck!


 let newUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
   
    });
    await newUser.save();
    console.log(newUser);
    res.status(200).json({
            newUser,
            message: "Created new User"
        }).catch(err=> {
     res.status(500).json({ err })
})
})
/////////////////////////////////////////////
 let newUser =  new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        userName: req.body.userName,
        password: req.body.password,
    })
    
    await newUser.save()
    console.log(newUser)
    .then(data => {
        res.json(data)
    })
.catch(error => {
    res.json(error)
})
})
