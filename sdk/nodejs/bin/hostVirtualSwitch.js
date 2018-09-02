"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The `vsphere_host_virtual_switch` resource can be used to manage vSphere
 * standard switches on an ESXi host. These switches can be used as a backing for
 * standard port groups, which can be managed by the
 * [`vsphere_host_port_group`][host-port-group] resource.
 *
 * For an overview on vSphere networking concepts, see [this
 * page][ref-vsphere-net-concepts].
 *
 * [host-port-group]: /docs/providers/vsphere/r/host_port_group.html
 * [ref-vsphere-net-concepts]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.networking.doc/GUID-2B11DBB8-CB3C-4AFF-8885-EFEA0FC562F4.html
 */
class HostVirtualSwitch extends pulumi.CustomResource {
    /**
     * Get an existing HostVirtualSwitch resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name, id, state) {
        return new HostVirtualSwitch(name, state, { id });
    }
    constructor(name, argsOrState, opts) {
        let inputs = {};
        if (opts && opts.id) {
            const state = argsOrState;
            inputs["activeNics"] = state ? state.activeNics : undefined;
            inputs["allowForgedTransmits"] = state ? state.allowForgedTransmits : undefined;
            inputs["allowMacChanges"] = state ? state.allowMacChanges : undefined;
            inputs["allowPromiscuous"] = state ? state.allowPromiscuous : undefined;
            inputs["beaconInterval"] = state ? state.beaconInterval : undefined;
            inputs["checkBeacon"] = state ? state.checkBeacon : undefined;
            inputs["failback"] = state ? state.failback : undefined;
            inputs["hostSystemId"] = state ? state.hostSystemId : undefined;
            inputs["linkDiscoveryOperation"] = state ? state.linkDiscoveryOperation : undefined;
            inputs["linkDiscoveryProtocol"] = state ? state.linkDiscoveryProtocol : undefined;
            inputs["mtu"] = state ? state.mtu : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["networkAdapters"] = state ? state.networkAdapters : undefined;
            inputs["notifySwitches"] = state ? state.notifySwitches : undefined;
            inputs["numberOfPorts"] = state ? state.numberOfPorts : undefined;
            inputs["shapingAverageBandwidth"] = state ? state.shapingAverageBandwidth : undefined;
            inputs["shapingBurstSize"] = state ? state.shapingBurstSize : undefined;
            inputs["shapingEnabled"] = state ? state.shapingEnabled : undefined;
            inputs["shapingPeakBandwidth"] = state ? state.shapingPeakBandwidth : undefined;
            inputs["standbyNics"] = state ? state.standbyNics : undefined;
            inputs["teamingPolicy"] = state ? state.teamingPolicy : undefined;
        }
        else {
            const args = argsOrState;
            if (!args || args.activeNics === undefined) {
                throw new Error("Missing required property 'activeNics'");
            }
            if (!args || args.hostSystemId === undefined) {
                throw new Error("Missing required property 'hostSystemId'");
            }
            if (!args || args.networkAdapters === undefined) {
                throw new Error("Missing required property 'networkAdapters'");
            }
            if (!args || args.standbyNics === undefined) {
                throw new Error("Missing required property 'standbyNics'");
            }
            inputs["activeNics"] = args ? args.activeNics : undefined;
            inputs["allowForgedTransmits"] = args ? args.allowForgedTransmits : undefined;
            inputs["allowMacChanges"] = args ? args.allowMacChanges : undefined;
            inputs["allowPromiscuous"] = args ? args.allowPromiscuous : undefined;
            inputs["beaconInterval"] = args ? args.beaconInterval : undefined;
            inputs["checkBeacon"] = args ? args.checkBeacon : undefined;
            inputs["failback"] = args ? args.failback : undefined;
            inputs["hostSystemId"] = args ? args.hostSystemId : undefined;
            inputs["linkDiscoveryOperation"] = args ? args.linkDiscoveryOperation : undefined;
            inputs["linkDiscoveryProtocol"] = args ? args.linkDiscoveryProtocol : undefined;
            inputs["mtu"] = args ? args.mtu : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["networkAdapters"] = args ? args.networkAdapters : undefined;
            inputs["notifySwitches"] = args ? args.notifySwitches : undefined;
            inputs["numberOfPorts"] = args ? args.numberOfPorts : undefined;
            inputs["shapingAverageBandwidth"] = args ? args.shapingAverageBandwidth : undefined;
            inputs["shapingBurstSize"] = args ? args.shapingBurstSize : undefined;
            inputs["shapingEnabled"] = args ? args.shapingEnabled : undefined;
            inputs["shapingPeakBandwidth"] = args ? args.shapingPeakBandwidth : undefined;
            inputs["standbyNics"] = args ? args.standbyNics : undefined;
            inputs["teamingPolicy"] = args ? args.teamingPolicy : undefined;
        }
        super("vsphere:index/hostVirtualSwitch:HostVirtualSwitch", name, inputs, opts);
    }
}
exports.HostVirtualSwitch = HostVirtualSwitch;
//# sourceMappingURL=hostVirtualSwitch.js.map