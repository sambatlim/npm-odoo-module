exports.generateSecurity = (moduleName) => {
    return new Promise((resolve, reject) => {
        let templateToExport =
`id,name,model_id:id,group_id:id,perm_read,perm_write,perm_create,perm_unlink
access_${moduleName}_${moduleName},${moduleName}.${moduleName},model_${moduleName}_${moduleName},,1,0,0,0`;
        resolve(templateToExport)
    })
}