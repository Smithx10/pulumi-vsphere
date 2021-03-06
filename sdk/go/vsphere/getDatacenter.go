// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package vsphere

import (
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The `vsphere_datacenter` data source can be used to discover the ID of a
// vSphere datacenter. This can then be used with resources or data sources that
// require a datacenter, such as the [`vsphere_host`][data-source-vsphere-host]
// data source.
// 
// [data-source-vsphere-host]: /docs/providers/vsphere/d/host.html
func LookupDatacenter(ctx *pulumi.Context, args *GetDatacenterArgs) (*GetDatacenterResult, error) {
	inputs := make(map[string]interface{})
	if args != nil {
		inputs["name"] = args.Name
	}
	outputs, err := ctx.Invoke("vsphere:index/getDatacenter:getDatacenter", inputs)
	if err != nil {
		return nil, err
	}
	return &GetDatacenterResult{
		Id: outputs["id"],
	}, nil
}

// A collection of arguments for invoking getDatacenter.
type GetDatacenterArgs struct {
	// The name of the datacenter. This can be a name or path.
	// Can be omitted if there is only one datacenter in your inventory.
	Name interface{}
}

// A collection of values returned by getDatacenter.
type GetDatacenterResult struct {
	// id is the provider-assigned unique ID for this managed resource.
	Id interface{}
}
