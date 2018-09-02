"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_compute_cluster_host_group` resource can be used to manage groups
 * of hosts in a cluster, either created by the
 * [`vsphere_compute_cluster`][tf-vsphere-cluster-resource] resource or looked up
 * by the [`vsphere_compute_cluster`][tf-vsphere-cluster-data-source] data source.
 *
 * [tf-vsphere-cluster-resource]: /docs/providers/vsphere/r/compute_cluster.html
 * [tf-vsphere-cluster-data-source]: /docs/providers/vsphere/d/compute_cluster.html
 *
 * This resource mainly serves as an input to the
 * [`vsphere_compute_cluster_vm_host_rule`][tf-vsphere-cluster-vm-host-rule-resource]
 * resource - see the documentation for that resource for further details on how
 * to use host groups.
 *
 * [tf-vsphere-cluster-vm-host-rule-resource]: /docs/providers/vsphere/r/compute_cluster_vm_host_rule.html
 *
 * ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
 * connections.
 *
 * ~> **NOTE:** vSphere DRS requires a vSphere Enterprise Plus license.
 */
class ComputeClusterHostGroup extends pulumi.CustomResource {
    /**
     * Get an existing ComputeClusterHostGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new ComputeClusterHostGroup(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["computeClusterId"] = state ? state.computeClusterId : undefined;
            inputs["hostSystemIds"] = state ? state.hostSystemIds : undefined;
            inputs["name"] = state ? state.name : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.computeClusterId === undefined) {
                throw new Error("Missing required property 'computeClusterId'");
            }
            inputs["computeClusterId"] = args ? args.computeClusterId : undefined;
            inputs["hostSystemIds"] = args ? args.hostSystemIds : undefined;
            inputs["name"] = args ? args.name : undefined;
        }
        super("vsphere:index/computeClusterHostGroup:ComputeClusterHostGroup", name, inputs, opts);
    }
}
exports.ComputeClusterHostGroup = ComputeClusterHostGroup;
//# sourceMappingURL=computeClusterHostGroup.js.map