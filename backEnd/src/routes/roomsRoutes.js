import express from 'express';
import { getAllTasks,createTask, deleteTask, updateTask } from '../controllers/roomsController.js';
const router=express.Router();

router.get('/',getAllRooms);

router.post('/',createRoom);

router.put('/:id',updateRoom);

router.delete('/:id',deleteRoom);
export default router;
