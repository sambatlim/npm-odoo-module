exports.generateController = (moduleName) => {
    return new Promise((resolve, reject) => {
        let templateToExport =
`# -*- coding: utf-8 -*-
from odoo import http

# class MyModule(http.Controller):
#     @http.route('/${moduleName}/${moduleName}/', auth='public')
#     def index(self, **kw):
#         return "Hello, world"

#     @http.route('/${moduleName}/${moduleName}/objects/', auth='public')
#     def list(self, **kw):
#         return http.request.render('${moduleName}.listing', {
#             'root': '/${moduleName}/${moduleName}',
#             'objects': http.request.env['${moduleName}.${moduleName}'].search([]),
#         })

#     @http.route('/${moduleName}/${moduleName}/objects/<model("${moduleName}.${moduleName}"):obj>/', auth='public')
#     def object(self, obj, **kw):
#         return http.request.render('${moduleName}.object', {
#             'object': obj
#         })`;
        resolve(templateToExport)
    })
}

exports.generateControllerInit = () => {
    return new Promise((resolve, reject) => {
        let templateToExport =
            `
# -*- coding: utf-8 -*-

from . import controllers
    `;
        resolve(templateToExport)
    })
}