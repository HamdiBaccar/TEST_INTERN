const Group = require('../models/groupModel');


const createGroup = async (req, res) => {
    try {
        const group = new Group({
            GroupName: req.body.GroupName,
            GroupTopic: req.body.GroupTopic,
            GroupDescription: req.body.GroupDescription,
            GroupLocation: req.body.GroupLocation,
            GroupImage: req.body.GroupImage
        });
        const groupData = await group.save();
        res.status(200).send({ success: true, msg: 'Group Data', data: groupData });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }

}
const getGroups = async (req, res) => {
    try {
        const groups = await Group.find({});
        res.status(200).send({ success: true, msg: 'Groups Data', data: groups });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const getGroupById = async (req, res) => {
    try {
        const id = req.params.id;
        const group = await Group.findById({_id:id});

        if (!group) {
            return res.status(404).send({ success: false, msg: 'Group not found' });
        }

        res.status(200).send({ success: true, msg: 'Group Data', data: group });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}




const deleteGroup = async (req, res) => {
    try {
        const id = req.params.id;

        await Group.deleteOne({ _id: id });
        res.status(200).send({ success: true, msg: 'Group deleted Successfully !' });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

const updateGroup = async(req,res)=>{
    try{
        const id = req.params.id;
        const updateData = {
            GroupName: req.body.GroupName,
            GroupTopic: req.body.GroupTopic,
            GroupDescription: req.body.GroupDescription,
            GroupImage: req.body.GroupImage,
            GroupLocation: req.body.GroupLocation,
           
        };

        const group = await Group.findOneAndUpdate({ _id: id }, updateData, { new: true });

        if (!group) {
            return res.status(404).send({ success: false, msg: 'Group not found' });
        }

        res.status(200).send({ success: true, msg: 'Group updated successfully', data: group });
    } catch (error) {
        res.status(400).send({ success: false, msg: error.message });
    }
}

module.exports = {
    createGroup,
    getGroups,
    deleteGroup,
    updateGroup,
    getGroupById
}