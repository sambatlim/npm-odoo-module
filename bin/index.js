#! /usr/bin/env node
const chalk = require('chalk')
const inquirer = require('inquirer');
const yargs = require("yargs");
const fs = require('fs')

/// import template generator
const templateController = require('./templates/controller');
const templateDemo = require('./templates/demo');
const templateInit = require('./templates/init');
const templateManifest = require('./templates/manifest');
const templateModel = require('./templates/model');
const templateSecurity = require('./templates/security');
const templateView = require('./templates/view');

/// GENERATE MODULE ///
const generateModule = async () => {
    const answers = await inquirer.prompt([
        {
            message: 'What is your module name? Example: my_module : ',
            name: 'name',
            type: 'string'
        }
    ]);
    try {
        const moduleName = answers.name
        const module_dir = `./${answers.name}`;
        if (!fs.existsSync(module_dir)) {
            fs.mkdirSync(module_dir);
        }

        /// Create Controller ///
        if (!fs.existsSync(`${module_dir}/controllers`)) {
            fs.mkdirSync(`${module_dir}/controllers`);
        }

        let mainControllerTemplate = await templateController.generateController(moduleName);
        fs.writeFile(`${module_dir}/controllers/controllers.py`, mainControllerTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        let intControllerTemplate = await templateController.generateControllerInit();
        fs.writeFile(`${module_dir}/controllers/__init__.py`, intControllerTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        /// END Create Controller ///

        /// Create demo ///

        if (!fs.existsSync(`${module_dir}/demo`)) {
            fs.mkdirSync(`${module_dir}/demo`);
        }

        let demoTemplate = await templateDemo.generateDemo(moduleName);
        fs.writeFile(`${module_dir}/demo/demo.xml`, demoTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        /// END Create demo ///

        /// Create models ///

        if (!fs.existsSync(`${module_dir}/models`)) {
            fs.mkdirSync(`${module_dir}/models`);
        }

        let modelsTemplate = await templateModel.generateModel(moduleName);
        fs.writeFile(`${module_dir}/models/models.py`, modelsTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        let modelsTemplateInit = await templateModel.generateModelInit();
        fs.writeFile(`${module_dir}/models/__init__.py`, modelsTemplateInit, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        /// END Create models ///

        /// Create security ///

        if (!fs.existsSync(`${module_dir}/security`)) {
            fs.mkdirSync(`${module_dir}/security`);
        }

        let securityTemplate = await templateSecurity.generateSecurity(moduleName);
        fs.writeFile(`${module_dir}/security/ir.model.access.csv`, securityTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        /// END Create security ///

        /// Create view ///

        if (!fs.existsSync(`${module_dir}/views`)) {
            fs.mkdirSync(`${module_dir}/views`);
        }

        let viewTemplate = await templateView.generateTemplate();
        fs.writeFile(`${module_dir}/views/templates.xml`, viewTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        let viewTemplateView = await templateView.generateView(moduleName);
        fs.writeFile(`${module_dir}/views/views.xml`, viewTemplateView, function (err) {
            if (err) {
                return console.log(err);
            }
        });

        /// END Create view ///

        /// create manifest ///
        let manifestTemplate = await templateManifest.generateManifest(moduleName);
        fs.writeFile(`${module_dir}/__manifest__.py`, manifestTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        /// END create manifest ///

        /// create manifest ///
        let initTemplate = await templateInit.generateInit();
        fs.writeFile(`${module_dir}/__init__.py`, initTemplate, function (err) {
            if (err) {
                return console.log(err);
            }
        });
        /// END create manifest ///

        console.log(`🎉 Your module (${moduleName}) has been created. 🎉`)
        return;

    } catch (e) {
        console.log(e);
        return;
    }
};
/// END GENERATE MODULE ///

const usage = chalk.keyword('violet')("\nUsage: npm-odoo-module init \n")
yargs
    .usage(usage)
    .command('init', 'create your new odoo module', () => { }, generateModule)
    .demandCommand()
    .help(true)
    .parse();