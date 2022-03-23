import instaTouch from 'instatouch';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

(async () => {
    try {
        const options = {
            count: 100,
            session: process.env.INSTAGRAM_SESSION_ID,
        };

        const comments = await instaTouch.comments('CbcifAYO9uQ', options);
        pickWinner(comments.collector);
    } catch (error) {
        console.log(error);
    }
})();

function pickWinner(participants) {
    const allParticipants = participants.length;
    const pickedTicket = Math.floor(Math.random() * allParticipants);

    const pickedWinner = participants[pickedTicket];
    writeGoldenTicket(pickWinner);
}

function writeGoldenTicket(winner) {
    fs.writeFile('goldenTicket.json', JSON.stringify(winner, null, 2), err => {
        if (err) {
            console.log(err);
        }
    })
}
