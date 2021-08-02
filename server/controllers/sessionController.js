import userInfo from "../models/session.js";


class sessionController{
//signup

static sessionRequest = async(req,res)=>{
    const user = await userInfo.create(req.body);

    if (!user) {
        return res.status(400).json({
            status:400,
            message:"failed to register!"
        })

    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:user
    })
}

static getAllsessions = async(req,res)=>{
    const session= await sessionInfo.find();

    if (!users) {
        return res.status(404).json({
            status:404,
            message:"failed to get all users!"
            
        })

    }

    return res.status(200).json({
        status:200,
        message:"success!",
        data:session
    })
}
static deletesession = async(req,res)=>{
    const session = await sessionInfo.findByIdAndDelete(req.params.id);

    if (!session) {
        return res.status(404).json({
            status:404,
            message:"failed!"
            
        })

    }

    return res.status(200).json({
        status:200,
        message:"deleted well!",
        data:session
    })
}


}
export default sessionController;