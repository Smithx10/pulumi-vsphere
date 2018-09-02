# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class HostPortGroup(pulumi.CustomResource):
    """
    The `vsphere_host_port_group` resource can be used to manage vSphere standard
    port groups on an ESXi host. These port groups are connected to standard
    virtual switches, which can be managed by the
    [`vsphere_host_virtual_switch`][host-virtual-switch] resource.
    
    For an overview on vSphere networking concepts, see [this page][ref-vsphere-net-concepts].
    
    [host-virtual-switch]: /docs/providers/vsphere/r/host_virtual_switch.html
    [ref-vsphere-net-concepts]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-2B11DBB8-CB3C-4AFF-8885-EFEA0FC562F4.html
    """
    def __init__(__self__, __name__, __opts__=None, active_nics=None, allow_forged_transmits=None, allow_mac_changes=None, allow_promiscuous=None, check_beacon=None, failback=None, host_system_id=None, name=None, notify_switches=None, shaping_average_bandwidth=None, shaping_burst_size=None, shaping_enabled=None, shaping_peak_bandwidth=None, standby_nics=None, teaming_policy=None, virtual_switch_name=None, vlan_id=None):
        """Create a HostPortGroup resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if active_nics and not isinstance(active_nics, list):
            raise TypeError('Expected property active_nics to be a list')
        __self__.active_nics = active_nics
        """
        List of active network adapters used for load balancing.
        """
        __props__['activeNics'] = active_nics

        if allow_forged_transmits and not isinstance(allow_forged_transmits, bool):
            raise TypeError('Expected property allow_forged_transmits to be a bool')
        __self__.allow_forged_transmits = allow_forged_transmits
        """
        Controls whether or not the virtual network adapter is allowed to send network traffic with a different MAC
        address than that of its own.
        """
        __props__['allowForgedTransmits'] = allow_forged_transmits

        if allow_mac_changes and not isinstance(allow_mac_changes, bool):
            raise TypeError('Expected property allow_mac_changes to be a bool')
        __self__.allow_mac_changes = allow_mac_changes
        """
        Controls whether or not the Media Access Control (MAC) address can be changed.
        """
        __props__['allowMacChanges'] = allow_mac_changes

        if allow_promiscuous and not isinstance(allow_promiscuous, bool):
            raise TypeError('Expected property allow_promiscuous to be a bool')
        __self__.allow_promiscuous = allow_promiscuous
        """
        Enable promiscuous mode on the network. This flag indicates whether or not all traffic is seen on a given port.
        """
        __props__['allowPromiscuous'] = allow_promiscuous

        if check_beacon and not isinstance(check_beacon, bool):
            raise TypeError('Expected property check_beacon to be a bool')
        __self__.check_beacon = check_beacon
        """
        Enable beacon probing. Requires that the vSwitch has been configured to use a beacon. If disabled, link status
        is used only.
        """
        __props__['checkBeacon'] = check_beacon

        if failback and not isinstance(failback, bool):
            raise TypeError('Expected property failback to be a bool')
        __self__.failback = failback
        """
        If true, the teaming policy will re-activate failed interfaces higher in precedence when they come back up.
        """
        __props__['failback'] = failback

        if not host_system_id:
            raise TypeError('Missing required property host_system_id')
        elif not isinstance(host_system_id, basestring):
            raise TypeError('Expected property host_system_id to be a basestring')
        __self__.host_system_id = host_system_id
        """
        The [managed object ID][docs-about-morefs] of
        the host to set the port group up on. Forces a new resource if changed.
        """
        __props__['hostSystemId'] = host_system_id

        if name and not isinstance(name, basestring):
            raise TypeError('Expected property name to be a basestring')
        __self__.name = name
        """
        The name of the port group.  Forces a new resource if
        changed.
        """
        __props__['name'] = name

        if notify_switches and not isinstance(notify_switches, bool):
            raise TypeError('Expected property notify_switches to be a bool')
        __self__.notify_switches = notify_switches
        """
        If true, the teaming policy will notify the broadcast network of a NIC failover, triggering cache updates.
        """
        __props__['notifySwitches'] = notify_switches

        if shaping_average_bandwidth and not isinstance(shaping_average_bandwidth, int):
            raise TypeError('Expected property shaping_average_bandwidth to be a int')
        __self__.shaping_average_bandwidth = shaping_average_bandwidth
        """
        The average bandwidth in bits per second if traffic shaping is enabled.
        """
        __props__['shapingAverageBandwidth'] = shaping_average_bandwidth

        if shaping_burst_size and not isinstance(shaping_burst_size, int):
            raise TypeError('Expected property shaping_burst_size to be a int')
        __self__.shaping_burst_size = shaping_burst_size
        """
        The maximum burst size allowed in bytes if traffic shaping is enabled.
        """
        __props__['shapingBurstSize'] = shaping_burst_size

        if shaping_enabled and not isinstance(shaping_enabled, bool):
            raise TypeError('Expected property shaping_enabled to be a bool')
        __self__.shaping_enabled = shaping_enabled
        """
        Enable traffic shaping on this virtual switch or port group.
        """
        __props__['shapingEnabled'] = shaping_enabled

        if shaping_peak_bandwidth and not isinstance(shaping_peak_bandwidth, int):
            raise TypeError('Expected property shaping_peak_bandwidth to be a int')
        __self__.shaping_peak_bandwidth = shaping_peak_bandwidth
        """
        The peak bandwidth during bursts in bits per second if traffic shaping is enabled.
        """
        __props__['shapingPeakBandwidth'] = shaping_peak_bandwidth

        if standby_nics and not isinstance(standby_nics, list):
            raise TypeError('Expected property standby_nics to be a list')
        __self__.standby_nics = standby_nics
        """
        List of standby network adapters used for failover.
        """
        __props__['standbyNics'] = standby_nics

        if teaming_policy and not isinstance(teaming_policy, basestring):
            raise TypeError('Expected property teaming_policy to be a basestring')
        __self__.teaming_policy = teaming_policy
        """
        The network adapter teaming policy. Can be one of loadbalance_ip, loadbalance_srcmac, loadbalance_srcid, or
        failover_explicit.
        """
        __props__['teamingPolicy'] = teaming_policy

        if not virtual_switch_name:
            raise TypeError('Missing required property virtual_switch_name')
        elif not isinstance(virtual_switch_name, basestring):
            raise TypeError('Expected property virtual_switch_name to be a basestring')
        __self__.virtual_switch_name = virtual_switch_name
        """
        The name of the virtual switch to bind
        this port group to. Forces a new resource if changed.
        """
        __props__['virtualSwitchName'] = virtual_switch_name

        if vlan_id and not isinstance(vlan_id, int):
            raise TypeError('Expected property vlan_id to be a int')
        __self__.vlan_id = vlan_id
        """
        The VLAN ID/trunk mode for this port group.  An ID of
        `0` denotes no tagging, an ID of `1`-`4094` tags with the specific ID, and an
        ID of `4095` enables trunk mode, allowing the guest to manage its own
        tagging. Default: `0`.
        """
        __props__['vlanId'] = vlan_id

        __self__.computed_policy = pulumi.runtime.UNKNOWN
        """
        A map with a full set of the [policy
        options][host-vswitch-policy-options] computed from defaults and overrides,
        explaining the effective policy for this port group.
        """
        __self__.key = pulumi.runtime.UNKNOWN
        """
        The key for this port group as returned from the vSphere API.
        """
        __self__.ports = pulumi.runtime.UNKNOWN
        """
        A list of ports that currently exist and are used on this port group.
        """

        super(HostPortGroup, __self__).__init__(
            'vsphere:index/hostPortGroup:HostPortGroup',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'activeNics' in outs:
            self.active_nics = outs['activeNics']
        if 'allowForgedTransmits' in outs:
            self.allow_forged_transmits = outs['allowForgedTransmits']
        if 'allowMacChanges' in outs:
            self.allow_mac_changes = outs['allowMacChanges']
        if 'allowPromiscuous' in outs:
            self.allow_promiscuous = outs['allowPromiscuous']
        if 'checkBeacon' in outs:
            self.check_beacon = outs['checkBeacon']
        if 'computedPolicy' in outs:
            self.computed_policy = outs['computedPolicy']
        if 'failback' in outs:
            self.failback = outs['failback']
        if 'hostSystemId' in outs:
            self.host_system_id = outs['hostSystemId']
        if 'key' in outs:
            self.key = outs['key']
        if 'name' in outs:
            self.name = outs['name']
        if 'notifySwitches' in outs:
            self.notify_switches = outs['notifySwitches']
        if 'ports' in outs:
            self.ports = outs['ports']
        if 'shapingAverageBandwidth' in outs:
            self.shaping_average_bandwidth = outs['shapingAverageBandwidth']
        if 'shapingBurstSize' in outs:
            self.shaping_burst_size = outs['shapingBurstSize']
        if 'shapingEnabled' in outs:
            self.shaping_enabled = outs['shapingEnabled']
        if 'shapingPeakBandwidth' in outs:
            self.shaping_peak_bandwidth = outs['shapingPeakBandwidth']
        if 'standbyNics' in outs:
            self.standby_nics = outs['standbyNics']
        if 'teamingPolicy' in outs:
            self.teaming_policy = outs['teamingPolicy']
        if 'virtualSwitchName' in outs:
            self.virtual_switch_name = outs['virtualSwitchName']
        if 'vlanId' in outs:
            self.vlan_id = outs['vlanId']