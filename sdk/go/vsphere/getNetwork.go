// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package vsphere

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The `vsphere_network` data source can be used to discover the ID of a network
// in vSphere. This can be any network that can be used as the backing for a
// network interface for `vsphere_virtual_machine` or any other vSphere resource
// that requires a network. This includes standard (host-based) port groups, DVS
// port groups, or opaque networks such as those managed by NSX.
func LookupNetwork(ctx *pulumi.Context, args *GetNetworkArgs) (*GetNetworkResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["datacenterId"] = args.DatacenterId
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("vsphere:index/getNetwork:getNetwork", inputs)
	if err != nil {
		return nil, err
	}
	return &GetNetworkResult{
		Type: outputs["type"],
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getNetwork.
type GetNetworkArgs struct {
	// The [managed object reference
	// ID][docs-about-morefs] of the datacenter the network is located in. This can
	// be omitted if the search path used in `name` is an absolute path. For default
	// datacenters, use the id attribute from an empty `vsphere_datacenter` data
	// source.
	DatacenterId interface{}
	// The name of the network. This can be a name or path.
	Name interface{}
}

// A collection of values returned by getNetwork.
type GetNetworkResult struct {
	Type interface{}
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
