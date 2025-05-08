import mongoose from 'mongoose';
import command from './models/command.js';
import chalk from 'chalk';

mongoose.connect('mongodb://localhost:27017/commandDB')
    .then(() => {
        console.log(chalk.green`Connected to MongoDB`);
    })
    .catch((err) => {
        console.log(chalk.yellow`Error connecting to MongoDB: ${err}`);
    });

const keyword = process.argv.slice(2).join(" ").toLowerCase();
command.find({
    $or: [
        { command: { $regex: keyword, $options: "i" } },
        { description: { $regex: keyword, $options: "i" } },
    ]
})
    .then((result) => {
        if (result.length === 0) {
            console.log(chalk.yellow`No commands found`);
        } else {
            console.log(chalk.green`Commands found:`);
            result.forEach((command) => {
                console.log(chalk.green`${command.command}` + " : " + chalk.gray`${command.description}`);
            });
        }
        mongoose.disconnect();
    })
    .catch((err) => {
        console.log(chalk.red`Error finding commands: ${err}`);
        mongoose.disconnect();
    });

