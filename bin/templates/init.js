exports.generateInit = () => {
    return new Promise((resolve, reject) => {
        let templateToExport =
`# -*- coding: utf-8 -*-

from . import controllers
from . import models`;
        resolve(templateToExport)
    })
}