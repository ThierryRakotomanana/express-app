import { listen } from 'app';

const server = listen(3000, ()=> {
    console.log(`Express is running on port ${server.address().port}`);
})