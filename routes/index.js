import { Router } from '../node_modules/express';
const router = Router();

router.get('/', (req, res) =>{
    res.send('It works');
})

export default router;