/* scrape_itch.js
 * Fetches the content of an Itch game jam, to prepare a template for rating.
 * I keep private notes of each rating given during a jam, starting from this.
 */
 
const fs = require("fs");
const http = require("https");

/* Jam ID can be got from your submission's page, look at the "Edit this submission" button.
 * It's a decimal number, in the 400k range today.
 */
const jamId = "";

/* Set to anything true to save the entries there, in case you want to review more fully later.
 */
const savePath = "";

/* Set to anything true to read entries from a JSON file (eg output from a previous run).
 */
const sourcePath = "";

/* Arrange to acquire entries, if they aren't pasted above.
 */

new Promise((resolve, reject) => {
  if (sourcePath) {
    console.log(`From file ${JSON.stringify(sourcePath)}`);
    fs.readFile(sourcePath, (err, rsp) => {
      if (err) reject(err);
      else resolve(JSON.parse(rsp));
    });
  } else if (jamId) {
    const url = `https://itch.io/jam/${jamId}/entries.json`;
    console.log(`From URL ${JSON.stringify(url)}`);
    http.get(url, res => {
      if (res.statusCode !== 200) {
        return reject(res);
      }
      let body = "";
      res.on("data", d => body += d);
      res.on("end", () => resolve(JSON.parse(body)));
    });
  } else {
    reject(new Error("Please set jamId first! Edit this script."));
  }
}).then((entries) => {
  // Games are initially sorted by Itch's Popularity score, which I have no idea what it means.
  // Sort them by submission time, so it's repeatable.
  entries.jam_games.sort((a, b) => {
    if (a.created_at < b.created_at) return -1;
    if (a.created_at > b.created_at) return 1;
    return 0;
  });
  let dst = "";
  for (const game of entries.jam_games) {
    // Sanitize title. Sometimes there's emoji, or it's hundreds of bytes long...
    let saneTitle = game.game.title.replace(/[^a-zA-Z0-9_ .,-]/g, "").trim();
    if (saneTitle.length > 40) saneTitle = saneTitle.substring(0, 40);
    if (!saneTitle) saneTitle = "(odd title)";
    // Enough spaces in front for whatever ratings we're going to write there:
    dst += `       ${saneTitle} : \n`;
  }
  console.log(dst);
  if (savePath) {
    fs.writeFileSync(savePath, JSON.stringify(entries) + "\n");
    console.log(`Saved full response to ${JSON.stringify(savePath)}`);
  }
}).catch(e => console.error(e));
