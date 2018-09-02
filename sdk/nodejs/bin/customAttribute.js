"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_custom_attribute` resource can be used to create and manage custom
 * attributes, which allow users to associate user-specific meta-information with
 * vSphere managed objects. Custom attribute values must be strings and are stored
 * on the vCenter Server and not the managed object.
 *
 * For more information about custom attributes, click [here][ext-custom-attributes].
 *
 * [ext-custom-attributes]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vcenterhost.doc/GUID-73606C4C-763C-4E27-A1DA-032E4C46219D.html
 *
 * ~> **NOTE:** Custom attributes are unsupported on direct ESXi connections
 * and require vCenter.
 */
class CustomAttribute extends pulumi.CustomResource {
    /**
     * Get an existing CustomAttribute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new CustomAttribute(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["managedObjectType"] = state ? state.managedObjectType : undefined;
            inputs["name"] = state ? state.name : undefined;
        }
        else {
            const args = argsOrState;
            inputs["managedObjectType"] = args ? args.managedObjectType : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super("vsphere:index/customAttribute:CustomAttribute", name, inputs, opts);
    }
}
exports.CustomAttribute = CustomAttribute;
//# sourceMappingURL=customAttribute.js.map