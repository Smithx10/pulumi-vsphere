// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package vsphere

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The `vsphere_vmfs_datastore` resource can be used to create and manage VMFS
// datastores on an ESXi host or a set of hosts. The resource supports using any
// SCSI device that can generally be used in a datastore, such as local disks, or
// disks presented to a host or multiple hosts over Fibre Channel or iSCSI.
// Devices can be specified manually, or discovered using the
// [`vsphere_vmfs_disks`][data-source-vmfs-disks] data source.
// 
// [data-source-vmfs-disks]: /docs/providers/vsphere/d/vmfs_disks.html 
type VmfsDatastore struct {
	s *pulumi.ResourceState
}

// NewVmfsDatastore registers a new resource with the given unique name, arguments, and options.
func NewVmfsDatastore(ctx *pulumi.Context,
	name string, args *VmfsDatastoreArgs, opts ...pulumi.ResourceOpt) (*VmfsDatastore, error) {
	if args == nil || args.Disks == nil {
		return nil, errors.New("missing required argument 'Disks'")
	}
	if args == nil || args.HostSystemId == nil {
		return nil, errors.New("missing required argument 'HostSystemId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["customAttributes"] = nil
		inputs["datastoreClusterId"] = nil
		inputs["disks"] = nil
		inputs["folder"] = nil
		inputs["hostSystemId"] = nil
		inputs["name"] = nil
		inputs["tags"] = nil
	} else {
		inputs["customAttributes"] = args.CustomAttributes
		inputs["datastoreClusterId"] = args.DatastoreClusterId
		inputs["disks"] = args.Disks
		inputs["folder"] = args.Folder
		inputs["hostSystemId"] = args.HostSystemId
		inputs["name"] = args.Name
		inputs["tags"] = args.Tags
	}
	inputs["accessible"] = nil
	inputs["capacity"] = nil
	inputs["freeSpace"] = nil
	inputs["maintenanceMode"] = nil
	inputs["multipleHostAccess"] = nil
	inputs["uncommittedSpace"] = nil
	inputs["url"] = nil
	s, err := ctx.RegisterResource("vsphere:index/vmfsDatastore:VmfsDatastore", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VmfsDatastore{s: s}, nil
}

// GetVmfsDatastore gets an existing VmfsDatastore resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetVmfsDatastore(ctx *pulumi.Context,
	name string, id pulumi.ID, state *VmfsDatastoreState, opts ...pulumi.ResourceOpt) (*VmfsDatastore, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["accessible"] = state.Accessible
		inputs["capacity"] = state.Capacity
		inputs["customAttributes"] = state.CustomAttributes
		inputs["datastoreClusterId"] = state.DatastoreClusterId
		inputs["disks"] = state.Disks
		inputs["folder"] = state.Folder
		inputs["freeSpace"] = state.FreeSpace
		inputs["hostSystemId"] = state.HostSystemId
		inputs["maintenanceMode"] = state.MaintenanceMode
		inputs["multipleHostAccess"] = state.MultipleHostAccess
		inputs["name"] = state.Name
		inputs["tags"] = state.Tags
		inputs["uncommittedSpace"] = state.UncommittedSpace
		inputs["url"] = state.Url
	}
	s, err := ctx.ReadResource("vsphere:index/vmfsDatastore:VmfsDatastore", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &VmfsDatastore{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *VmfsDatastore) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *VmfsDatastore) ID() *pulumi.IDOutput {
	return r.s.ID
}

// The connectivity status of the datastore. If this is `false`,
// some other computed attributes may be out of date.
func (r *VmfsDatastore) Accessible() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["accessible"])
}

// Maximum capacity of the datastore, in megabytes.
func (r *VmfsDatastore) Capacity() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["capacity"])
}

// Map of custom attribute ids to attribute 
// value string to set on datastore resource. See
// [here][docs-setting-custom-attributes] for a reference on how to set values
// for custom attributes.
func (r *VmfsDatastore) CustomAttributes() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["customAttributes"])
}

// The [managed object
// ID][docs-about-morefs] of a datastore cluster to put this datastore in.
// Conflicts with `folder`.
func (r *VmfsDatastore) DatastoreClusterId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["datastoreClusterId"])
}

// The disks to use with the datastore.
func (r *VmfsDatastore) Disks() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["disks"])
}

// The relative path to a folder to put this datastore in.
// This is a path relative to the datacenter you are deploying the datastore to.
// Example: for the `dc1` datacenter, and a provided `folder` of `foo/bar`,
// Terraform will place a datastore named `terraform-test` in a datastore folder
// located at `/dc1/datastore/foo/bar`, with the final inventory path being
// `/dc1/datastore/foo/bar/terraform-test`. Conflicts with
// `datastore_cluster_id`.
func (r *VmfsDatastore) Folder() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["folder"])
}

// Available space of this datastore, in megabytes.
func (r *VmfsDatastore) FreeSpace() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["freeSpace"])
}

// The [managed object ID][docs-about-morefs] of
// the host to set the datastore up on. Note that this is not necessarily the
// only host that the datastore will be set up on - see
// here for more info. Forces a
// new resource if changed.
func (r *VmfsDatastore) HostSystemId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["hostSystemId"])
}

// The current maintenance mode state of the datastore.
func (r *VmfsDatastore) MaintenanceMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["maintenanceMode"])
}

// If `true`, more than one host in the datacenter has
// been configured with access to the datastore.
func (r *VmfsDatastore) MultipleHostAccess() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["multipleHostAccess"])
}

// The name of the datastore. Forces a new resource if
// changed.
func (r *VmfsDatastore) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// The IDs of any tags to attach to this resource. See
// [here][docs-applying-tags] for a reference on how to apply tags.
func (r *VmfsDatastore) Tags() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["tags"])
}

// Total additional storage space, in megabytes,
// potentially used by all virtual machines on this datastore.
func (r *VmfsDatastore) UncommittedSpace() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["uncommittedSpace"])
}

// The unique locator for the datastore.
func (r *VmfsDatastore) Url() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["url"])
}

// Input properties used for looking up and filtering VmfsDatastore resources.
type VmfsDatastoreState struct {
	// The connectivity status of the datastore. If this is `false`,
	// some other computed attributes may be out of date.
	Accessible interface{}
	// Maximum capacity of the datastore, in megabytes.
	Capacity interface{}
	// Map of custom attribute ids to attribute 
	// value string to set on datastore resource. See
	// [here][docs-setting-custom-attributes] for a reference on how to set values
	// for custom attributes.
	CustomAttributes interface{}
	// The [managed object
	// ID][docs-about-morefs] of a datastore cluster to put this datastore in.
	// Conflicts with `folder`.
	DatastoreClusterId interface{}
	// The disks to use with the datastore.
	Disks interface{}
	// The relative path to a folder to put this datastore in.
	// This is a path relative to the datacenter you are deploying the datastore to.
	// Example: for the `dc1` datacenter, and a provided `folder` of `foo/bar`,
	// Terraform will place a datastore named `terraform-test` in a datastore folder
	// located at `/dc1/datastore/foo/bar`, with the final inventory path being
	// `/dc1/datastore/foo/bar/terraform-test`. Conflicts with
	// `datastore_cluster_id`.
	Folder interface{}
	// Available space of this datastore, in megabytes.
	FreeSpace interface{}
	// The [managed object ID][docs-about-morefs] of
	// the host to set the datastore up on. Note that this is not necessarily the
	// only host that the datastore will be set up on - see
	// here for more info. Forces a
	// new resource if changed.
	HostSystemId interface{}
	// The current maintenance mode state of the datastore.
	MaintenanceMode interface{}
	// If `true`, more than one host in the datacenter has
	// been configured with access to the datastore.
	MultipleHostAccess interface{}
	// The name of the datastore. Forces a new resource if
	// changed.
	Name interface{}
	// The IDs of any tags to attach to this resource. See
	// [here][docs-applying-tags] for a reference on how to apply tags.
	Tags interface{}
	// Total additional storage space, in megabytes,
	// potentially used by all virtual machines on this datastore.
	UncommittedSpace interface{}
	// The unique locator for the datastore.
	Url interface{}
}

// The set of arguments for constructing a VmfsDatastore resource.
type VmfsDatastoreArgs struct {
	// Map of custom attribute ids to attribute 
	// value string to set on datastore resource. See
	// [here][docs-setting-custom-attributes] for a reference on how to set values
	// for custom attributes.
	CustomAttributes interface{}
	// The [managed object
	// ID][docs-about-morefs] of a datastore cluster to put this datastore in.
	// Conflicts with `folder`.
	DatastoreClusterId interface{}
	// The disks to use with the datastore.
	Disks interface{}
	// The relative path to a folder to put this datastore in.
	// This is a path relative to the datacenter you are deploying the datastore to.
	// Example: for the `dc1` datacenter, and a provided `folder` of `foo/bar`,
	// Terraform will place a datastore named `terraform-test` in a datastore folder
	// located at `/dc1/datastore/foo/bar`, with the final inventory path being
	// `/dc1/datastore/foo/bar/terraform-test`. Conflicts with
	// `datastore_cluster_id`.
	Folder interface{}
	// The [managed object ID][docs-about-morefs] of
	// the host to set the datastore up on. Note that this is not necessarily the
	// only host that the datastore will be set up on - see
	// here for more info. Forces a
	// new resource if changed.
	HostSystemId interface{}
	// The name of the datastore. Forces a new resource if
	// changed.
	Name interface{}
	// The IDs of any tags to attach to this resource. See
	// [here][docs-applying-tags] for a reference on how to apply tags.
	Tags interface{}
}
