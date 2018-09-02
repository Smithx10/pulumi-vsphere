# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class ComputeClusterVmAffinityRule(pulumi.CustomResource):
    """
    The `vsphere_compute_cluster_vm_affinity_rule` resource can be used to manage
    VM affinity rules in a cluster, either created by the
    [`vsphere_compute_cluster`][tf-vsphere-cluster-resource] resource or looked up
    by the [`vsphere_compute_cluster`][tf-vsphere-cluster-data-source] data source.
    
    [tf-vsphere-cluster-resource]: /docs/providers/vsphere/r/compute_cluster.html
    [tf-vsphere-cluster-data-source]: /docs/providers/vsphere/d/compute_cluster.html
    
    This rule can be used to tell a set to virtual machines to run together on a
    single host within a cluster. When configured, DRS will make a best effort to
    ensure that the virtual machines run on the same host, or prevent any operation
    that would keep that from happening, depending on the value of the
    `mandatory` flag.
    
    -> Keep in mind that this rule can only be used to tell VMs to run together on
    a _non-specific_ host - it can't be used to pin VMs to a host. For that, see
    the
    [`vsphere_compute_cluster_vm_host_rule`][tf-vsphere-cluster-vm-host-rule-resource]
    resource.
    
    [tf-vsphere-cluster-vm-host-rule-resource]: /docs/providers/vsphere/r/compute_cluster_vm_host_rule.html
    
    ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
    connections.
    
    ~> **NOTE:** vSphere DRS requires a vSphere Enterprise Plus license.
    """
    def __init__(__self__, __name__, __opts__=None, compute_cluster_id=None, enabled=None, mandatory=None, name=None, virtual_machine_ids=None):
        """Create a ComputeClusterVmAffinityRule resource with the given unique name, props, and options."""
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

        if enabled and not isinstance(enabled, bool):
            raise TypeError('Expected property enabled to be a bool')
        __self__.enabled = enabled
        """
        Enable this rule in the cluster. Default: `true`.
        """
        __props__['enabled'] = enabled

        if mandatory and not isinstance(mandatory, bool):
            raise TypeError('Expected property mandatory to be a bool')
        __self__.mandatory = mandatory
        """
        When this value is `true`, prevents any virtual
        machine operations that may violate this rule. Default: `false`.
        """
        __props__['mandatory'] = mandatory

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the rule. This must be unique in the cluster.
        """
        __props__['name'] = name

        if not virtual_machine_ids:
            raise TypeError('Missing required property virtual_machine_ids')
        elif not isinstance(virtual_machine_ids, list):
            raise TypeError('Expected property virtual_machine_ids to be a list')
        __self__.virtual_machine_ids = virtual_machine_ids
        """
        The UUIDs of the virtual machines to run
        on the same host together.
        """
        __props__['virtualMachineIds'] = virtual_machine_ids

        super(ComputeClusterVmAffinityRule, __self__).__init__(
            'vsphere:index/computeClusterVmAffinityRule:ComputeClusterVmAffinityRule',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'computeClusterId' in outs:
            self.compute_cluster_id = outs['computeClusterId']
        if 'enabled' in outs:
            self.enabled = outs['enabled']
        if 'mandatory' in outs:
            self.mandatory = outs['mandatory']
        if 'name' in outs:
            self.name = outs['name']
        if 'virtualMachineIds' in outs:
            self.virtual_machine_ids = outs['virtualMachineIds']
