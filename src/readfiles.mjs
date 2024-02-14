import fs from 'node:fs/promises';
import path from 'path';

async function extractInfoFromFile(filePath) {
    const text = await fs.readFile(filePath, { encoding: 'utf8' });
    const indexOfFirst = text.indexOf('\n');
    const title = text.substring(0, indexOfFirst);
    const description = text.substring(indexOfFirst + 1);

    return [title, description];
}

async function example() {
    const BASE_DIR = './planning';
    const FRAMEWORK = 'react';

    const initialPath = path.join(BASE_DIR, FRAMEWORK);
    try {
        const userStoryFolders = await fs.readdir(initialPath);
        for (const userStoryFolder of userStoryFolders) {
            //process HU File
            try {
                const filePath = path.join(initialPath, userStoryFolder, `${userStoryFolder}.md`);
                const [title, description] = await extractInfoFromFile(filePath);
                console.log(title);
                console.log(description);
            } catch (err) {
                console.log(err);
            }

            //process tasks files
            const taskFiles = await fs.readdir(path.join(initialPath, userStoryFolder));
            for (const taskFile of taskFiles) {
                if(taskFile.startsWith('Task')){
                    try {
                        const filePath = path.join(initialPath, userStoryFolder, taskFile);
                        const [title, description] = await extractInfoFromFile(filePath);
                        console.log(title);
                        console.log(description);
                    } catch (err) {
                        console.log(err);
                    }
                }
            }
        }

    } catch (err) {
        console.log(err);
    }
}
example();



