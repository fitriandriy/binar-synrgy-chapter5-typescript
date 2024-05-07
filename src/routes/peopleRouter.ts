import { Router } from 'express';
const router = Router();
import { getPeople, getPeopleById, createData, updateData, deleteData } from '../services/peopleService'

router.get('/', getPeople);
router.post('/', createData);
router.get('/:id', getPeopleById);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

export default router;
// module.exports = router;