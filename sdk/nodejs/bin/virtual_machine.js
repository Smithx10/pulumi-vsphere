"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_virtual_machine` data source can be used to find the UUID of an
 * existing virtual machine or template. Its most relevant purpose is for finding
 * the UUID of a template to be used as the source for cloning into a new
 * [`vsphere_virtual_machine`][docs-virtual-machine-resource] resource. It also
 * reads the guest ID so that can be supplied as well.
 *
 * [docs-virtual-machine-resource]: /docs/providers/vsphere/r/virtual_machine.html
 */
function Virtual_machine(args, opts) {
    return pulumi.runtime.invoke("vsphere:index/virtual_machine:Virtual_machine", {
        "datacenterId": args.datacenterId,
        "name": args.name,
        "scsiControllerScanCount": args.scsiControllerScanCount,
    }, opts);
}
exports.Virtual_machine = Virtual_machine;
//# sourceMappingURL=virtual_machine.js.map