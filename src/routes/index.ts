import { Router } from 'express';
import PeopleRouter from './peopleRouter'
const router = Router();

router.use('/people', PeopleRouter)

// export default router;
module.exports = router;