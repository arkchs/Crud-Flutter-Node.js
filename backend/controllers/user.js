import {userModel} from '../models/user.js';
export async function handleGETName(req,res) {
    console.log('Get req completed!');
    return res.send(userModel.listNames);
}

export async function handlePOSTName(req,res) {
    const body = req.body;
    const name = body.name;
    const email = body.email;
    userModel.listNames.push({id: userModel.listNames.length+1,name: name, email: email});
    res.json({msg: `User with the name ${name} and ${email} has been created and given an id of ${userModel.listNames.length}`});
}