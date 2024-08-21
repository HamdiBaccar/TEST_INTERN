const Event = require('../models/event')

const express = require('express');
const eventController = express.Router();

eventController.use(express.json())

eventController.post('/create-event', async (req,res)=>{
    try{
        data = req.body;
        even = new Event(data);
        savedEvent = await even.save();

        res.send(savedEvent);
    } catch (error){
        res.send(error);
    }
})

eventController.get('/get-all',async (req,res)=>{
    Event.find()
        .then(
            (events) => {
                res.send(events);
            }
        )
        .catch(
            (err)=>{
                res.send(err);
            }
        )
})

eventController.get('/get-by-id/:id', async(req,res)=>{
    try{
        id = req.params.id;
        even = await Event.findById({_id:id})
        res.send(even);
    } catch (error){
        res.send(error);
    }
})

eventController.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const event = await Event.findByIdAndDelete(id);
        
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json({ message: 'Event deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


eventController.put('/update/:id', async (req,res)=>{
    try {
        const id = req.params.id;
        const even = req.body
        const oldEvent = await Event.findByIdAndUpdate({_id:id},even);

        if(!oldEvent){
            return res.status(404).json({message : 'Event not found !'});
        }

        res.status(200).json({message : 'Event modified successfully !'});

    } catch(error){
        res.status(500).json({message : error.message});
    }
})

module.exports = eventController;