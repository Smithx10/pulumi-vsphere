"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_vmfs_disks` data source can be used to discover the storage
 * devices available on an ESXi host. This data source can be combined with the
 * [`vsphere_vmfs_datastore`][data-source-vmfs-datastore] resource to create VMFS
 * datastores based off a set of discovered disks.
 *
 * [data-source-vmfs-datastore]: /docs/providers/vsphere/r/vmfs_datastore.html
 */
function getVmfsDisks(args, opts) {
    return pulumi.runtime.invoke("vsphere:index/getVmfsDisks:getVmfsDisks", {
        "filter": args.filter,
        "hostSystemId": args.hostSystemId,
        "rescan": args.rescan,
    }, opts);
}
exports.getVmfsDisks = getVmfsDisks;
//# sourceMappingURL=getVmfsDisks.js.map