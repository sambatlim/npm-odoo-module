exports.generateModel = (moduleName) => {
    return new Promise((resolve, reject) => {
        let templateToExport =
            `
# -*- coding: utf-8 -*-

from odoo import models, fields, api

# class ${moduleName}(models.Model):
#     _name = '${moduleName}.${moduleName}'

#     name = fields.Char()
#     value = fields.Integer()
#     value2 = fields.Float(compute="_value_pc", store=True)
#     description = fields.Text()
#
#     @api.depends('value')
#     def _value_pc(self):
#         self.value2 = float(self.value) / 100
    `;
        resolve(templateToExport)
    })
}

exports.generateModelInit = () => {
    return new Promise((resolve, reject) => {
        let templateToExport =
            `
# -*- coding: utf-8 -*-

from . import models
    `;
        resolve(templateToExport)
    })
}