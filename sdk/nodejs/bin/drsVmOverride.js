"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_drs_vm_override` resource can be used to add a DRS override to a
 * cluster for a specific virtual machine. With this resource, one can enable or
 * disable DRS and control the automation level for a single virtual machine
 * without affecting the rest of the cluster.
 *
 * For more information on vSphere clusters and DRS, see [this
 * page][ref-vsphere-drs-clusters].
 *
 * [ref-vsphere-drs-clusters]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-8ACF3502-5314-469F-8CC9-4A9BD5925BC2.html
 *
 * ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
 * connections.
 *
 * ~> **NOTE:** vSphere DRS requires a vSphere Enterprise Plus license.
 */
class DrsVmOverride extends pulumi.CustomResource {
    /**
     * Get an existing DrsVmOverride resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new DrsVmOverride(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["computeClusterId"] = state ? state.computeClusterId : undefined;
            inputs["drsAutomationLevel"] = state ? state.drsAutomationLevel : undefined;
            inputs["drsEnabled"] = state ? state.drsEnabled : undefined;
            inputs["virtualMachineId"] = state ? state.virtualMachineId : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.computeClusterId === undefined) {
                throw new Error("Missing required property 'computeClusterId'");
            }
            if (!args || args.virtualMachineId === undefined) {
                throw new Error("Missing required property 'virtualMachineId'");
            }
            inputs["computeClusterId"] = args ? args.computeClusterId : undefined;
            inputs["drsAutomationLevel"] = args ? args.drsAutomationLevel : undefined;
            inputs["drsEnabled"] = args ? args.drsEnabled : undefined;
            inputs["virtualMachineId"] = args ? args.virtualMachineId : undefined;
        }
        super("vsphere:index/drsVmOverride:DrsVmOverride", name, inputs, opts);
    }
}
exports.DrsVmOverride = DrsVmOverride;
//# sourceMappingURL=drsVmOverride.js.map