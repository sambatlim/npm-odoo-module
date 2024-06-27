exports.generateTemplate = () => {
    return new Promise((resolve, reject) => {
        let templateToExport =
`<odoo>
    <data>
        <!-- <template id="listing"> -->
        <!--   <ul> -->
        <!--     <li t-foreach="objects" t-as="object"> -->
        <!--       <a t-attf-href="#{ root }/objects/#{ object.id }"> -->
        <!--         <t t-esc="object.display_name"/> -->
        <!--       </a> -->
        <!--     </li> -->
        <!--   </ul> -->
        <!-- </template> -->
        <!-- <template id="object"> -->
        <!--   <h1><t t-esc="object.display_name"/></h1> -->
        <!--   <dl> -->
        <!--     <t t-foreach="object._fields" t-as="field"> -->
        <!--       <dt><t t-esc="field"/></dt> -->
        <!--       <dd><t t-esc="object[field]"/></dd> -->
        <!--     </t> -->
        <!--   </dl> -->
        <!-- </template> -->
    </data>
</odoo>
    `;
        resolve(templateToExport)
    })
}

exports.generateView = (moduleName) => {
    return new Promise((resolve, reject) => {
        let templateToExport =
            `
<odoo>
  <data>
    <!-- explicit list view definition -->
    <!--
    <record model="ir.ui.view" id="${moduleName}.list">
      <field name="name">${moduleName} list</field>
      <field name="model">${moduleName}.${moduleName}</field>
      <field name="arch" type="xml">
        <tree>
          <field name="name"/>
          <field name="value"/>
          <field name="value2"/>
        </tree>
      </field>
    </record>
    -->

    <!-- actions opening views on models -->
    <!--
    <record model="ir.actions.act_window" id="${moduleName}.action_window">
      <field name="name">${moduleName} window</field>
      <field name="res_model">${moduleName}.${moduleName}</field>
      <field name="view_mode">tree,form</field>
    </record>
    -->

    <!-- server action to the one above -->
    <!--
    <record model="ir.actions.server" id="${moduleName}.action_server">
      <field name="name">${moduleName} server</field>
      <field name="model_id" ref="model_${moduleName}_${moduleName}"/>
      <field name="state">code</field>
      <field name="code">
        action = {
          "type": "ir.actions.act_window",
          "view_mode": "tree,form",
          "res_model": self._name,
        }
      </field>
    </record>
    -->

    <!-- Top menu item -->
    <!--
    <menuitem name="${moduleName}" id="${moduleName}.menu_root"/>
    -->
    <!-- menu categories -->
    <!--
    <menuitem name="Menu 1" id="${moduleName}.menu_1" parent="${moduleName}.menu_root"/>
    <menuitem name="Menu 2" id="${moduleName}.menu_2" parent="${moduleName}.menu_root"/>
    -->
    <!-- actions -->
    <!--
    <menuitem name="List" id="${moduleName}.menu_1_list" parent="${moduleName}.menu_1"
              action="${moduleName}.action_window"/>
    <menuitem name="Server to list" id="${moduleName}" parent="${moduleName}.menu_2"
              action="${moduleName}.action_server"/>
    -->
  </data>
</odoo>`;
        resolve(templateToExport)
    })
}