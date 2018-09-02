import * as pulumi from "@pulumi/pulumi";
/**
 * The `vsphere_virtual_machine_snapshot` resource can be used to manage snapshots
 * for a virtual machine.
 *
 * For more information on managing snapshots and how they work in VMware, see
 * [here][ext-vm-snapshot-management].
 *
 * [ext-vm-snapshot-management]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-CA948C69-7F58-4519-AEB1-739545EA94E5.html
 *
 * ~> **NOTE:** A snapshot in VMware differs from traditional disk snapshots, and
 * can contain the actual running state of the virtual machine, data for all disks
 * that have not been set to be independent from the snapshot (including ones that
 * have been attached via the [attach][docs-vsphere-virtual-machine-disk-attach]
 * parameter to the `vsphere_virtual_machine` `disk` block), and even the
 * configuration of the virtual machine at the time of the snapshot. Virtual
 * machine, disk activity, and configuration changes post-snapshot are not
 * included in the original state. Use this resource with care! Neither VMware nor
 * HashiCorp recommends retaining snapshots for a extended period of time and does
 * NOT recommend using them as as backup feature. For more information on the
 * limitation of virtual machine snapshots, see [here][ext-vm-snap-limitations].
 *
 * [docs-vsphere-virtual-machine-disk-attach]: /docs/providers/vsphere/r/virtual_machine.html#attach
 * [ext-vm-snap-limitations]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-53F65726-A23B-4CF0-A7D5-48E584B88613.html
 */
export declare class VirtualMachineSnapshot extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMachineSnapshot resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualMachineSnapshotState): VirtualMachineSnapshot;
    /**
     * If set to `true`, the delta disks involved in this
     * snapshot will be consolidated into the parent when this resource is
     * destroyed.
     */
    readonly consolidate: pulumi.Output<boolean | undefined>;
    /**
     * A description for the snapshot.
     */
    readonly description: pulumi.Output<string>;
    /**
     * If set to `true`, a dump of the internal state of the
     * virtual machine is included in the snapshot.
     */
    readonly memory: pulumi.Output<boolean>;
    /**
     * If set to `true`, and the virtual machine is powered
     * on when the snapshot is taken, VMware Tools is used to quiesce the file
     * system in the virtual machine.
     */
    readonly quiesce: pulumi.Output<boolean>;
    /**
     * If set to `true`, the entire snapshot subtree
     * is removed when this resource is destroyed.
     */
    readonly removeChildren: pulumi.Output<boolean | undefined>;
    /**
     * The name of the snapshot.
     */
    readonly snapshotName: pulumi.Output<string>;
    /**
     * The virtual machine UUID.
     */
    readonly virtualMachineUuid: pulumi.Output<string>;
    /**
     * Create a VirtualMachineSnapshot resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMachineSnapshotArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering VirtualMachineSnapshot resources.
 */
export interface VirtualMachineSnapshotState {
    /**
     * If set to `true`, the delta disks involved in this
     * snapshot will be consolidated into the parent when this resource is
     * destroyed.
     */
    readonly consolidate?: pulumi.Input<boolean>;
    /**
     * A description for the snapshot.
     */
    readonly description?: pulumi.Input<string>;
    /**
     * If set to `true`, a dump of the internal state of the
     * virtual machine is included in the snapshot.
     */
    readonly memory?: pulumi.Input<boolean>;
    /**
     * If set to `true`, and the virtual machine is powered
     * on when the snapshot is taken, VMware Tools is used to quiesce the file
     * system in the virtual machine.
     */
    readonly quiesce?: pulumi.Input<boolean>;
    /**
     * If set to `true`, the entire snapshot subtree
     * is removed when this resource is destroyed.
     */
    readonly removeChildren?: pulumi.Input<boolean>;
    /**
     * The name of the snapshot.
     */
    readonly snapshotName?: pulumi.Input<string>;
    /**
     * The virtual machine UUID.
     */
    readonly virtualMachineUuid?: pulumi.Input<string>;
}
/**
 * The set of arguments for constructing a VirtualMachineSnapshot resource.
 */
export interface VirtualMachineSnapshotArgs {
    /**
     * If set to `true`, the delta disks involved in this
     * snapshot will be consolidated into the parent when this resource is
     * destroyed.
     */
    readonly consolidate?: pulumi.Input<boolean>;
    /**
     * A description for the snapshot.
     */
    readonly description: pulumi.Input<string>;
    /**
     * If set to `true`, a dump of the internal state of the
     * virtual machine is included in the snapshot.
     */
    readonly memory: pulumi.Input<boolean>;
    /**
     * If set to `true`, and the virtual machine is powered
     * on when the snapshot is taken, VMware Tools is used to quiesce the file
     * system in the virtual machine.
     */
    readonly quiesce: pulumi.Input<boolean>;
    /**
     * If set to `true`, the entire snapshot subtree
     * is removed when this resource is destroyed.
     */
    readonly removeChildren?: pulumi.Input<boolean>;
    /**
     * The name of the snapshot.
     */
    readonly snapshotName: pulumi.Input<string>;
    /**
     * The virtual machine UUID.
     */
    readonly virtualMachineUuid: pulumi.Input<string>;
}
