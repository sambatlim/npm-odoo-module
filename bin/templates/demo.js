exports.generateDemo = (moduleName) => {
    return new Promise((resolve, reject) => {
        let templateToExport =
            `
<odoo>
    <data>
        <!--  -->
        <!--   <record id="object0" model="${moduleName}.${moduleName}"> -->
        <!--     <field name="name">Object 0</field> -->
        <!--     <field name="value">0</field> -->
        <!--   </record> -->
        <!--  -->
        <!--   <record id="object1" model="${moduleName}.${moduleName}"> -->
        <!--     <field name="name">Object 1</field> -->
        <!--     <field name="value">10</field> -->
        <!--   </record> -->
        <!--  -->
        <!--   <record id="object2" model="${moduleName}.${moduleName}"> -->
        <!--     <field name="name">Object 2</field> -->
        <!--     <field name="value">20</field> -->
        <!--   </record> -->
        <!--  -->
        <!--   <record id="object3" model="${moduleName}.${moduleName}"> -->
        <!--     <field name="name">Object 3</field> -->
        <!--     <field name="value">30</field> -->
        <!--   </record> -->
        <!--  -->
        <!--   <record id="object4" model="${moduleName}.${moduleName}"> -->
        <!--     <field name="name">Object 4</field> -->
        <!--     <field name="value">40</field> -->
        <!--   </record> -->
        <!--  -->
    </data>
</odoo>
    `;
        resolve(templateToExport)
    })
}