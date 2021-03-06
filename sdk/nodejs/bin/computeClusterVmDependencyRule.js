"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_compute_cluster_vm_dependency_rule` resource can be used to manage
 * VM dependency rules in a cluster, either created by the
 * [`vsphere_compute_cluster`][tf-vsphere-cluster-resource] resource or looked up
 * by the [`vsphere_compute_cluster`][tf-vsphere-cluster-data-source] data source.
 *
 * [tf-vsphere-cluster-resource]: /docs/providers/vsphere/r/compute_cluster.html
 * [tf-vsphere-cluster-data-source]: /docs/providers/vsphere/d/compute_cluster.html
 *
 * A virtual machine dependency rule applies to vSphere HA, and allows
 * user-defined startup orders for virtual machines in the case of host failure.
 * Virtual machines are supplied via groups, which can be managed via the
 * [`vsphere_compute_cluster_vm_group`][tf-vsphere-cluster-vm-group-resource]
 * resource.
 *
 * [tf-vsphere-cluster-vm-group-resource]: /docs/providers/vsphere/r/compute_cluster_vm_group.html
 *
 * ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
 * connections.
 */
class ComputeClusterVmDependencyRule extends pulumi.CustomResource {
    /**
     * Get an existing ComputeClusterVmDependencyRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new ComputeClusterVmDependencyRule(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["computeClusterId"] = state ? state.computeClusterId : undefined;
            inputs["dependencyVmGroupName"] = state ? state.dependencyVmGroupName : undefined;
            inputs["enabled"] = state ? state.enabled : undefined;
            inputs["mandatory"] = state ? state.mandatory : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["vmGroupName"] = state ? state.vmGroupName : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.computeClusterId === undefined) {
                throw new Error("Missing required property 'computeClusterId'");
            }
            if (!args || args.dependencyVmGroupName === undefined) {
                throw new Error("Missing required property 'dependencyVmGroupName'");
            }
            if (!args || args.vmGroupName === undefined) {
                throw new Error("Missing required property 'vmGroupName'");
            }
            inputs["computeClusterId"] = args ? args.computeClusterId : undefined;
            inputs["dependencyVmGroupName"] = args ? args.dependencyVmGroupName : undefined;
            inputs["enabled"] = args ? args.enabled : undefined;
            inputs["mandatory"] = args ? args.mandatory : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["vmGroupName"] = args ? args.vmGroupName : undefined;
        }
        super("vsphere:index/computeClusterVmDependencyRule:ComputeClusterVmDependencyRule", name, inputs, opts);
    }
}
exports.ComputeClusterVmDependencyRule = ComputeClusterVmDependencyRule;
//# sourceMappingURL=computeClusterVmDependencyRule.js.map