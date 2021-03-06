# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetResourcePoolResult(object):
    """
    A collection of values returned by getResourcePool.
    """
    def __init__(__self__, id=None):
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_resource_pool(datacenter_id=None, name=None):
    """
    The `vsphere_resource_pool` data source can be used to discover the ID of a
    resource pool in vSphere. This is useful to fetch the ID of a resource pool
    that you want to use to create virtual machines in using the
    [`vsphere_virtual_machine`][docs-virtual-machine-resource] resource. 
    
    [docs-virtual-machine-resource]: /docs/providers/vsphere/r/virtual_machine.html
    """
    __args__ = dict()

    __args__['datacenterId'] = datacenter_id
    __args__['name'] = name
    __ret__ = pulumi.runtime.invoke('vsphere:index/getResourcePool:getResourcePool', __args__)

    return GetResourcePoolResult(
        id=__ret__.get('id'))
