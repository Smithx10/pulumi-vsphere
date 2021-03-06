# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class VirtualMachineSnapshot(pulumi.CustomResource):
    """
    The `vsphere_virtual_machine_snapshot` resource can be used to manage snapshots
    for a virtual machine.
    
    For more information on managing snapshots and how they work in VMware, see
    [here][ext-vm-snapshot-management].
    
    [ext-vm-snapshot-management]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-CA948C69-7F58-4519-AEB1-739545EA94E5.html
    
    ~> **NOTE:** A snapshot in VMware differs from traditional disk snapshots, and
    can contain the actual running state of the virtual machine, data for all disks
    that have not been set to be independent from the snapshot (including ones that
    have been attached via the [attach][docs-vsphere-virtual-machine-disk-attach]
    parameter to the `vsphere_virtual_machine` `disk` block), and even the
    configuration of the virtual machine at the time of the snapshot. Virtual
    machine, disk activity, and configuration changes post-snapshot are not
    included in the original state. Use this resource with care! Neither VMware nor
    HashiCorp recommends retaining snapshots for a extended period of time and does
    NOT recommend using them as as backup feature. For more information on the
    limitation of virtual machine snapshots, see [here][ext-vm-snap-limitations].
    
    [docs-vsphere-virtual-machine-disk-attach]: /docs/providers/vsphere/r/virtual_machine.html#attach
    [ext-vm-snap-limitations]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.vm_admin.doc/GUID-53F65726-A23B-4CF0-A7D5-48E584B88613.html
    """
    def __init__(__self__, __name__, __opts__=None, consolidate=None, description=None, memory=None, quiesce=None, remove_children=None, snapshot_name=None, virtual_machine_uuid=None):
        """Create a VirtualMachineSnapshot resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if consolidate and not isinstance(consolidate, bool):
            raise TypeError('Expected property consolidate to be a bool')
        __self__.consolidate = consolidate
        """
        If set to `true`, the delta disks involved in this
        snapshot will be consolidated into the parent when this resource is
        destroyed.
        """
        __props__['consolidate'] = consolidate

        if not description:
            raise TypeError('Missing required property description')
        elif not isinstance(description, basestring):
            raise TypeError('Expected property description to be a basestring')
        __self__.description = description
        """
        A description for the snapshot.
        """
        __props__['description'] = description

        if not memory:
            raise TypeError('Missing required property memory')
        elif not isinstance(memory, bool):
            raise TypeError('Expected property memory to be a bool')
        __self__.memory = memory
        """
        If set to `true`, a dump of the internal state of the
        virtual machine is included in the snapshot.
        """
        __props__['memory'] = memory

        if not quiesce:
            raise TypeError('Missing required property quiesce')
        elif not isinstance(quiesce, bool):
            raise TypeError('Expected property quiesce to be a bool')
        __self__.quiesce = quiesce
        """
        If set to `true`, and the virtual machine is powered
        on when the snapshot is taken, VMware Tools is used to quiesce the file
        system in the virtual machine.
        """
        __props__['quiesce'] = quiesce

        if remove_children and not isinstance(remove_children, bool):
            raise TypeError('Expected property remove_children to be a bool')
        __self__.remove_children = remove_children
        """
        If set to `true`, the entire snapshot subtree
        is removed when this resource is destroyed.
        """
        __props__['removeChildren'] = remove_children

        if not snapshot_name:
            raise TypeError('Missing required property snapshot_name')
        elif not isinstance(snapshot_name, basestring):
            raise TypeError('Expected property snapshot_name to be a basestring')
        __self__.snapshot_name = snapshot_name
        """
        The name of the snapshot.
        """
        __props__['snapshotName'] = snapshot_name

        if not virtual_machine_uuid:
            raise TypeError('Missing required property virtual_machine_uuid')
        elif not isinstance(virtual_machine_uuid, basestring):
            raise TypeError('Expected property virtual_machine_uuid to be a basestring')
        __self__.virtual_machine_uuid = virtual_machine_uuid
        """
        The virtual machine UUID.
        """
        __props__['virtualMachineUuid'] = virtual_machine_uuid

        super(VirtualMachineSnapshot, __self__).__init__(
            'vsphere:index/virtualMachineSnapshot:VirtualMachineSnapshot',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'consolidate' in outs:
            self.consolidate = outs['consolidate']
        if 'description' in outs:
            self.description = outs['description']
        if 'memory' in outs:
            self.memory = outs['memory']
        if 'quiesce' in outs:
            self.quiesce = outs['quiesce']
        if 'removeChildren' in outs:
            self.remove_children = outs['removeChildren']
        if 'snapshotName' in outs:
            self.snapshot_name = outs['snapshotName']
        if 'virtualMachineUuid' in outs:
            self.virtual_machine_uuid = outs['virtualMachineUuid']
