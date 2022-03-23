import instaTouch from 'instatouch';
import dotenv from 'dotenv';
import fs from 'fs';

dotenv.config();

/**
 * This function is responsible of writing the content of the golden ticket
 * to a file in the system
 * @property {string} postId - The post id to search for
 * @property {object} content - Content of the golden ticket
 */
async function getAllParticipants(postId) {
  try {
    const options = {
      count: 100,
      session: process.env.INSTAGRAM_SESSION_ID,
    };

    const comments = await instaTouch.comments(postId, options);
    return comments.collector;
  } catch (error) {
    console.log(error);
  }
}

/**
 * This function picks a winner between all the commenting participants
 *
 * @property {array} participants - Array of objects with participants infos
 * @returns {object} - Info about the winner of the raffle and the golden ticket number
 */
function pickWinner(participants) {
  const allParticipants = participants.length;
  const pickedTicket = Math.floor(Math.random() * allParticipants);

  const pickedWinner = participants[pickedTicket];
  return pickedWinner;
}

/**
 * This function searchs for all the comments in a specified post
 *
 * @property {string} postId - The post id to search for
 * @returns {array} - All the comments found in the specified post
 */
function writeGoldenTicket(winner) {
  fs.writeFile('goldenTicket.json', JSON.stringify(winner, null, 2), err => {
    if (err) {
      console.log(err);
    }
  })
}

/**
 * Main execution function
 *
 * Use: node index.js [postId]
 * Exemple: node index.js CbcifAYO9uQ
 */
async function main() {
  const args = process.argv.slice(2);
  const postId = args[0];

  const participants = await getAllParticipants(postId);
  const goldenTicket = pickWinner(participants);
  writeGoldenTicket(goldenTicket);
}

main();
