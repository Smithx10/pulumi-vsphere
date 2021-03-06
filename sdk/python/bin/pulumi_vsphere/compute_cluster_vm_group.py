# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class ComputeClusterVmGroup(pulumi.CustomResource):
    """
    The `vsphere_compute_cluster_vm_group` resource can be used to manage groups of
    virtual machines in a cluster, either created by the
    [`vsphere_compute_cluster`][tf-vsphere-cluster-resource] resource or looked up
    by the [`vsphere_compute_cluster`][tf-vsphere-cluster-data-source] data source.
    
    [tf-vsphere-cluster-resource]: /docs/providers/vsphere/r/compute_cluster.html
    [tf-vsphere-cluster-data-source]: /docs/providers/vsphere/d/compute_cluster.html
    
    This resource mainly serves as an input to the
    [`vsphere_compute_cluster_vm_dependency_rule`][tf-vsphere-cluster-vm-dependency-rule-resource]
    and
    [`vsphere_compute_cluster_vm_host_rule`][tf-vsphere-cluster-vm-host-rule-resource]
    resources. See the individual resource documentation pages for more information.
    
    [tf-vsphere-cluster-vm-dependency-rule-resource]: /docs/providers/vsphere/r/compute_cluster_vm_dependency_rule.html
    [tf-vsphere-cluster-vm-host-rule-resource]: /docs/providers/vsphere/r/compute_cluster_vm_host_rule.html
    
    ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
    connections.
    
    ~> **NOTE:** vSphere DRS requires a vSphere Enterprise Plus license.
    """
    def __init__(__self__, __name__, __opts__=None, compute_cluster_id=None, name=None, virtual_machine_ids=None):
        """Create a ComputeClusterVmGroup resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if not compute_cluster_id:
            raise TypeError('Missing required property compute_cluster_id')
        elif not isinstance(compute_cluster_id, basestring):
            raise TypeError('Expected property compute_cluster_id to be a basestring')
        __self__.compute_cluster_id = compute_cluster_id
        """
        The [managed object reference
        ID][docs-about-morefs] of the cluster to put the group in.  Forces a new
        resource if changed.
        """
        __props__['computeClusterId'] = compute_cluster_id

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the VM group. This must be unique in the
        cluster. Forces a new resource if changed.
        """
        __props__['name'] = name

        if virtual_machine_ids and not isinstance(virtual_machine_ids, list):
            raise TypeError('Expected property virtual_machine_ids to be a list')
        __self__.virtual_machine_ids = virtual_machine_ids
        """
        The UUIDs of the virtual machines in this
        group.
        """
        __props__['virtualMachineIds'] = virtual_machine_ids

        super(ComputeClusterVmGroup, __self__).__init__(
            'vsphere:index/computeClusterVmGroup:ComputeClusterVmGroup',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'computeClusterId' in outs:
            self.compute_cluster_id = outs['computeClusterId']
        if 'name' in outs:
            self.name = outs['name']
        if 'virtualMachineIds' in outs:
            self.virtual_machine_ids = outs['virtualMachineIds']
