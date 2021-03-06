# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetDistributedVirtualSwitchResult(object):
    """
    A collection of values returned by getDistributedVirtualSwitch.
    """
    def __init__(__self__, uplinks=None, id=None):
        if uplinks and not isinstance(uplinks, list):
            raise TypeError('Expected argument uplinks to be a list')
        __self__.uplinks = uplinks
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_distributed_virtual_switch(datacenter_id=None, name=None):
    """
    The `vsphere_distributed_virtual_switch` data source can be used to discover
    the ID and uplink data of a of a vSphere distributed virtual switch (DVS). This
    can then be used with resources or data sources that require a DVS, such as the
    [`vsphere_distributed_port_group`][distributed-port-group] resource, for which
    an example is shown below.
    
    [distributed-port-group]: /docs/providers/vsphere/r/distributed_port_group.html
    
    ~> **NOTE:** This data source requires vCenter and is not available on direct
    ESXi connections.
    """
    __args__ = dict()

    __args__['datacenterId'] = datacenter_id
    __args__['name'] = name
    __ret__ = pulumi.runtime.invoke('vsphere:index/getDistributedVirtualSwitch:getDistributedVirtualSwitch', __args__)

    return GetDistributedVirtualSwitchResult(
        uplinks=__ret__.get('uplinks'),
        id=__ret__.get('id'))
