// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

package vsphere

import (
	"github.com/pkg/errors"
	"github.com/pulumi/pulumi/sdk/go/pulumi"
)

// The `vsphere_datastore_cluster` resource can be used to create and manage
// datastore clusters. This can be used to create groups of datastores with a
// shared management interface, allowing for resource control and load balancing
// through Storage DRS.
// 
// For more information on vSphere datastore clusters and Storage DRS, see [this
// page][ref-vsphere-datastore-clusters].
// 
// [ref-vsphere-datastore-clusters]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-598DF695-107E-406B-9C95-0AF961FC227A.html
// 
// ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
// connections.
// 
// ~> **NOTE:** Storage DRS requires a vSphere Enterprise Plus license.
type DatastoreCluster struct {
	s *pulumi.ResourceState
}

// NewDatastoreCluster registers a new resource with the given unique name, arguments, and options.
func NewDatastoreCluster(ctx *pulumi.Context,
	name string, args *DatastoreClusterArgs, opts ...pulumi.ResourceOpt) (*DatastoreCluster, error) {
	if args == nil || args.DatacenterId == nil {
		return nil, errors.New("missing required argument 'DatacenterId'")
	}
	inputs := make(map[string]interface{})
	if args == nil {
		inputs["customAttributes"] = nil
		inputs["datacenterId"] = nil
		inputs["folder"] = nil
		inputs["name"] = nil
		inputs["sdrsAdvancedOptions"] = nil
		inputs["sdrsAutomationLevel"] = nil
		inputs["sdrsDefaultIntraVmAffinity"] = nil
		inputs["sdrsEnabled"] = nil
		inputs["sdrsFreeSpaceThreshold"] = nil
		inputs["sdrsFreeSpaceThresholdMode"] = nil
		inputs["sdrsFreeSpaceUtilizationDifference"] = nil
		inputs["sdrsIoBalanceAutomationLevel"] = nil
		inputs["sdrsIoLatencyThreshold"] = nil
		inputs["sdrsIoLoadBalanceEnabled"] = nil
		inputs["sdrsIoLoadImbalanceThreshold"] = nil
		inputs["sdrsIoReservableIopsThreshold"] = nil
		inputs["sdrsIoReservablePercentThreshold"] = nil
		inputs["sdrsIoReservableThresholdMode"] = nil
		inputs["sdrsLoadBalanceInterval"] = nil
		inputs["sdrsPolicyEnforcementAutomationLevel"] = nil
		inputs["sdrsRuleEnforcementAutomationLevel"] = nil
		inputs["sdrsSpaceBalanceAutomationLevel"] = nil
		inputs["sdrsSpaceUtilizationThreshold"] = nil
		inputs["sdrsVmEvacuationAutomationLevel"] = nil
		inputs["tags"] = nil
	} else {
		inputs["customAttributes"] = args.CustomAttributes
		inputs["datacenterId"] = args.DatacenterId
		inputs["folder"] = args.Folder
		inputs["name"] = args.Name
		inputs["sdrsAdvancedOptions"] = args.SdrsAdvancedOptions
		inputs["sdrsAutomationLevel"] = args.SdrsAutomationLevel
		inputs["sdrsDefaultIntraVmAffinity"] = args.SdrsDefaultIntraVmAffinity
		inputs["sdrsEnabled"] = args.SdrsEnabled
		inputs["sdrsFreeSpaceThreshold"] = args.SdrsFreeSpaceThreshold
		inputs["sdrsFreeSpaceThresholdMode"] = args.SdrsFreeSpaceThresholdMode
		inputs["sdrsFreeSpaceUtilizationDifference"] = args.SdrsFreeSpaceUtilizationDifference
		inputs["sdrsIoBalanceAutomationLevel"] = args.SdrsIoBalanceAutomationLevel
		inputs["sdrsIoLatencyThreshold"] = args.SdrsIoLatencyThreshold
		inputs["sdrsIoLoadBalanceEnabled"] = args.SdrsIoLoadBalanceEnabled
		inputs["sdrsIoLoadImbalanceThreshold"] = args.SdrsIoLoadImbalanceThreshold
		inputs["sdrsIoReservableIopsThreshold"] = args.SdrsIoReservableIopsThreshold
		inputs["sdrsIoReservablePercentThreshold"] = args.SdrsIoReservablePercentThreshold
		inputs["sdrsIoReservableThresholdMode"] = args.SdrsIoReservableThresholdMode
		inputs["sdrsLoadBalanceInterval"] = args.SdrsLoadBalanceInterval
		inputs["sdrsPolicyEnforcementAutomationLevel"] = args.SdrsPolicyEnforcementAutomationLevel
		inputs["sdrsRuleEnforcementAutomationLevel"] = args.SdrsRuleEnforcementAutomationLevel
		inputs["sdrsSpaceBalanceAutomationLevel"] = args.SdrsSpaceBalanceAutomationLevel
		inputs["sdrsSpaceUtilizationThreshold"] = args.SdrsSpaceUtilizationThreshold
		inputs["sdrsVmEvacuationAutomationLevel"] = args.SdrsVmEvacuationAutomationLevel
		inputs["tags"] = args.Tags
	}
	s, err := ctx.RegisterResource("vsphere:index/datastoreCluster:DatastoreCluster", name, true, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DatastoreCluster{s: s}, nil
}

// GetDatastoreCluster gets an existing DatastoreCluster resource's state with the given name, ID, and optional
// state properties that are used to uniquely qualify the lookup (nil if not required).
func GetDatastoreCluster(ctx *pulumi.Context,
	name string, id pulumi.ID, state *DatastoreClusterState, opts ...pulumi.ResourceOpt) (*DatastoreCluster, error) {
	inputs := make(map[string]interface{})
	if state != nil {
		inputs["customAttributes"] = state.CustomAttributes
		inputs["datacenterId"] = state.DatacenterId
		inputs["folder"] = state.Folder
		inputs["name"] = state.Name
		inputs["sdrsAdvancedOptions"] = state.SdrsAdvancedOptions
		inputs["sdrsAutomationLevel"] = state.SdrsAutomationLevel
		inputs["sdrsDefaultIntraVmAffinity"] = state.SdrsDefaultIntraVmAffinity
		inputs["sdrsEnabled"] = state.SdrsEnabled
		inputs["sdrsFreeSpaceThreshold"] = state.SdrsFreeSpaceThreshold
		inputs["sdrsFreeSpaceThresholdMode"] = state.SdrsFreeSpaceThresholdMode
		inputs["sdrsFreeSpaceUtilizationDifference"] = state.SdrsFreeSpaceUtilizationDifference
		inputs["sdrsIoBalanceAutomationLevel"] = state.SdrsIoBalanceAutomationLevel
		inputs["sdrsIoLatencyThreshold"] = state.SdrsIoLatencyThreshold
		inputs["sdrsIoLoadBalanceEnabled"] = state.SdrsIoLoadBalanceEnabled
		inputs["sdrsIoLoadImbalanceThreshold"] = state.SdrsIoLoadImbalanceThreshold
		inputs["sdrsIoReservableIopsThreshold"] = state.SdrsIoReservableIopsThreshold
		inputs["sdrsIoReservablePercentThreshold"] = state.SdrsIoReservablePercentThreshold
		inputs["sdrsIoReservableThresholdMode"] = state.SdrsIoReservableThresholdMode
		inputs["sdrsLoadBalanceInterval"] = state.SdrsLoadBalanceInterval
		inputs["sdrsPolicyEnforcementAutomationLevel"] = state.SdrsPolicyEnforcementAutomationLevel
		inputs["sdrsRuleEnforcementAutomationLevel"] = state.SdrsRuleEnforcementAutomationLevel
		inputs["sdrsSpaceBalanceAutomationLevel"] = state.SdrsSpaceBalanceAutomationLevel
		inputs["sdrsSpaceUtilizationThreshold"] = state.SdrsSpaceUtilizationThreshold
		inputs["sdrsVmEvacuationAutomationLevel"] = state.SdrsVmEvacuationAutomationLevel
		inputs["tags"] = state.Tags
	}
	s, err := ctx.ReadResource("vsphere:index/datastoreCluster:DatastoreCluster", name, id, inputs, opts...)
	if err != nil {
		return nil, err
	}
	return &DatastoreCluster{s: s}, nil
}

// URN is this resource's unique name assigned by Pulumi.
func (r *DatastoreCluster) URN() *pulumi.URNOutput {
	return r.s.URN
}

// ID is this resource's unique identifier assigned by its provider.
func (r *DatastoreCluster) ID() *pulumi.IDOutput {
	return r.s.ID
}

// A map of custom attribute ids to attribute
// value strings to set for the datastore cluster. See
// [here][docs-setting-custom-attributes] for a reference on how to set values
// for custom attributes.
func (r *DatastoreCluster) CustomAttributes() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["customAttributes"])
}

// The [managed object ID][docs-about-morefs] of
// the datacenter to create the datastore cluster in. Forces a new resource if
// changed.
func (r *DatastoreCluster) DatacenterId() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["datacenterId"])
}

// The relative path to a folder to put this datastore
// cluster in.  This is a path relative to the datacenter you are deploying the
// datastore to.  Example: for the `dc1` datacenter, and a provided `folder` of
// `foo/bar`, Terraform will place a datastore cluster named
// `terraform-datastore-cluster-test` in a datastore folder located at
// `/dc1/datastore/foo/bar`, with the final inventory path being
// `/dc1/datastore/foo/bar/terraform-datastore-cluster-test`.
func (r *DatastoreCluster) Folder() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["folder"])
}

// The name of the datastore cluster.
func (r *DatastoreCluster) Name() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["name"])
}

// A key/value map of advanced Storage DRS
// settings that are not exposed via Terraform or the vSphere client.
func (r *DatastoreCluster) SdrsAdvancedOptions() *pulumi.MapOutput {
	return (*pulumi.MapOutput)(r.s.State["sdrsAdvancedOptions"])
}

// The global automation level for all
// virtual machines in this datastore cluster. Default: `manual`.
func (r *DatastoreCluster) SdrsAutomationLevel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsAutomationLevel"])
}

// When `true`, all disks in a
// single virtual machine will be kept on the same datastore. Default: `true`.
func (r *DatastoreCluster) SdrsDefaultIntraVmAffinity() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["sdrsDefaultIntraVmAffinity"])
}

// Enable Storage DRS for this datastore cluster.
// Default: `false`.
func (r *DatastoreCluster) SdrsEnabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["sdrsEnabled"])
}

// The free space threshold to use.
// When set to `utilization`, `drs_space_utilization_threshold` is used, and
// when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
// `utilization`.
func (r *DatastoreCluster) SdrsFreeSpaceThreshold() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsFreeSpaceThreshold"])
}

// The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
// freeSpace, drs_free_space_threshold is used.
func (r *DatastoreCluster) SdrsFreeSpaceThresholdMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsFreeSpaceThresholdMode"])
}

// The threshold, in
// percent, of difference between space utilization in datastores before storage
// DRS makes decisions to balance the space. Default: `5` percent.
func (r *DatastoreCluster) SdrsFreeSpaceUtilizationDifference() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsFreeSpaceUtilizationDifference"])
}

// Overrides the default
// automation settings when correcting I/O load imbalances.
func (r *DatastoreCluster) SdrsIoBalanceAutomationLevel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsIoBalanceAutomationLevel"])
}

// The I/O latency threshold, in
// milliseconds, that storage DRS uses to make recommendations to move disks
// from this datastore. Default: `15` seconds.
func (r *DatastoreCluster) SdrsIoLatencyThreshold() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsIoLatencyThreshold"])
}

// Enable I/O load balancing for
// this datastore cluster. Default: `true`.
func (r *DatastoreCluster) SdrsIoLoadBalanceEnabled() *pulumi.BoolOutput {
	return (*pulumi.BoolOutput)(r.s.State["sdrsIoLoadBalanceEnabled"])
}

// The difference between load
// in datastores in the cluster before storage DRS makes recommendations to
// balance the load. Default: `5` percent.
func (r *DatastoreCluster) SdrsIoLoadImbalanceThreshold() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsIoLoadImbalanceThreshold"])
}

// The threshold of reservable
// IOPS of all virtual machines on the datastore before storage DRS makes
// recommendations to move VMs off of a datastore. Note that this setting should
// only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
// estimate of the capacity of the datastores in your cluster, and should be set
// to roughly 50-60% of the worst case peak performance of the backing LUNs.
func (r *DatastoreCluster) SdrsIoReservableIopsThreshold() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsIoReservableIopsThreshold"])
}

// The threshold, in
// percent, of actual estimated performance of the datastore (in IOPS) that
// storage DRS uses to make recommendations to move VMs off of a datastore when
// the total reservable IOPS exceeds the threshold. Default: `60` percent.
func (r *DatastoreCluster) SdrsIoReservablePercentThreshold() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsIoReservablePercentThreshold"])
}

// The reservable IOPS
// threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
// of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
// `manual`. Default: `automatic`.
func (r *DatastoreCluster) SdrsIoReservableThresholdMode() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsIoReservableThresholdMode"])
}

// The storage DRS poll interval, in
// minutes. Default: `480` minutes.
func (r *DatastoreCluster) SdrsLoadBalanceInterval() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsLoadBalanceInterval"])
}

// Overrides the default
// automation settings when correcting storage and VM policy violations.
func (r *DatastoreCluster) SdrsPolicyEnforcementAutomationLevel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsPolicyEnforcementAutomationLevel"])
}

// Overrides the default
// automation settings when correcting affinity rule violations.
func (r *DatastoreCluster) SdrsRuleEnforcementAutomationLevel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsRuleEnforcementAutomationLevel"])
}

// Overrides the default
// automation settings when correcting disk space imbalances.
func (r *DatastoreCluster) SdrsSpaceBalanceAutomationLevel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsSpaceBalanceAutomationLevel"])
}

// The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
func (r *DatastoreCluster) SdrsSpaceUtilizationThreshold() *pulumi.IntOutput {
	return (*pulumi.IntOutput)(r.s.State["sdrsSpaceUtilizationThreshold"])
}

// Overrides the default
// automation settings when generating recommendations for datastore evacuation.
func (r *DatastoreCluster) SdrsVmEvacuationAutomationLevel() *pulumi.StringOutput {
	return (*pulumi.StringOutput)(r.s.State["sdrsVmEvacuationAutomationLevel"])
}

// The IDs of any tags to attach to this resource. See
// [here][docs-applying-tags] for a reference on how to apply tags.
func (r *DatastoreCluster) Tags() *pulumi.ArrayOutput {
	return (*pulumi.ArrayOutput)(r.s.State["tags"])
}

// Input properties used for looking up and filtering DatastoreCluster resources.
type DatastoreClusterState struct {
	// A map of custom attribute ids to attribute
	// value strings to set for the datastore cluster. See
	// [here][docs-setting-custom-attributes] for a reference on how to set values
	// for custom attributes.
	CustomAttributes interface{}
	// The [managed object ID][docs-about-morefs] of
	// the datacenter to create the datastore cluster in. Forces a new resource if
	// changed.
	DatacenterId interface{}
	// The relative path to a folder to put this datastore
	// cluster in.  This is a path relative to the datacenter you are deploying the
	// datastore to.  Example: for the `dc1` datacenter, and a provided `folder` of
	// `foo/bar`, Terraform will place a datastore cluster named
	// `terraform-datastore-cluster-test` in a datastore folder located at
	// `/dc1/datastore/foo/bar`, with the final inventory path being
	// `/dc1/datastore/foo/bar/terraform-datastore-cluster-test`.
	Folder interface{}
	// The name of the datastore cluster.
	Name interface{}
	// A key/value map of advanced Storage DRS
	// settings that are not exposed via Terraform or the vSphere client.
	SdrsAdvancedOptions interface{}
	// The global automation level for all
	// virtual machines in this datastore cluster. Default: `manual`.
	SdrsAutomationLevel interface{}
	// When `true`, all disks in a
	// single virtual machine will be kept on the same datastore. Default: `true`.
	SdrsDefaultIntraVmAffinity interface{}
	// Enable Storage DRS for this datastore cluster.
	// Default: `false`.
	SdrsEnabled interface{}
	// The free space threshold to use.
	// When set to `utilization`, `drs_space_utilization_threshold` is used, and
	// when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
	// `utilization`.
	SdrsFreeSpaceThreshold interface{}
	// The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
	// freeSpace, drs_free_space_threshold is used.
	SdrsFreeSpaceThresholdMode interface{}
	// The threshold, in
	// percent, of difference between space utilization in datastores before storage
	// DRS makes decisions to balance the space. Default: `5` percent.
	SdrsFreeSpaceUtilizationDifference interface{}
	// Overrides the default
	// automation settings when correcting I/O load imbalances.
	SdrsIoBalanceAutomationLevel interface{}
	// The I/O latency threshold, in
	// milliseconds, that storage DRS uses to make recommendations to move disks
	// from this datastore. Default: `15` seconds.
	SdrsIoLatencyThreshold interface{}
	// Enable I/O load balancing for
	// this datastore cluster. Default: `true`.
	SdrsIoLoadBalanceEnabled interface{}
	// The difference between load
	// in datastores in the cluster before storage DRS makes recommendations to
	// balance the load. Default: `5` percent.
	SdrsIoLoadImbalanceThreshold interface{}
	// The threshold of reservable
	// IOPS of all virtual machines on the datastore before storage DRS makes
	// recommendations to move VMs off of a datastore. Note that this setting should
	// only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
	// estimate of the capacity of the datastores in your cluster, and should be set
	// to roughly 50-60% of the worst case peak performance of the backing LUNs.
	SdrsIoReservableIopsThreshold interface{}
	// The threshold, in
	// percent, of actual estimated performance of the datastore (in IOPS) that
	// storage DRS uses to make recommendations to move VMs off of a datastore when
	// the total reservable IOPS exceeds the threshold. Default: `60` percent.
	SdrsIoReservablePercentThreshold interface{}
	// The reservable IOPS
	// threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
	// of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
	// `manual`. Default: `automatic`.
	SdrsIoReservableThresholdMode interface{}
	// The storage DRS poll interval, in
	// minutes. Default: `480` minutes.
	SdrsLoadBalanceInterval interface{}
	// Overrides the default
	// automation settings when correcting storage and VM policy violations.
	SdrsPolicyEnforcementAutomationLevel interface{}
	// Overrides the default
	// automation settings when correcting affinity rule violations.
	SdrsRuleEnforcementAutomationLevel interface{}
	// Overrides the default
	// automation settings when correcting disk space imbalances.
	SdrsSpaceBalanceAutomationLevel interface{}
	// The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
	SdrsSpaceUtilizationThreshold interface{}
	// Overrides the default
	// automation settings when generating recommendations for datastore evacuation.
	SdrsVmEvacuationAutomationLevel interface{}
	// The IDs of any tags to attach to this resource. See
	// [here][docs-applying-tags] for a reference on how to apply tags.
	Tags interface{}
}

// The set of arguments for constructing a DatastoreCluster resource.
type DatastoreClusterArgs struct {
	// A map of custom attribute ids to attribute
	// value strings to set for the datastore cluster. See
	// [here][docs-setting-custom-attributes] for a reference on how to set values
	// for custom attributes.
	CustomAttributes interface{}
	// The [managed object ID][docs-about-morefs] of
	// the datacenter to create the datastore cluster in. Forces a new resource if
	// changed.
	DatacenterId interface{}
	// The relative path to a folder to put this datastore
	// cluster in.  This is a path relative to the datacenter you are deploying the
	// datastore to.  Example: for the `dc1` datacenter, and a provided `folder` of
	// `foo/bar`, Terraform will place a datastore cluster named
	// `terraform-datastore-cluster-test` in a datastore folder located at
	// `/dc1/datastore/foo/bar`, with the final inventory path being
	// `/dc1/datastore/foo/bar/terraform-datastore-cluster-test`.
	Folder interface{}
	// The name of the datastore cluster.
	Name interface{}
	// A key/value map of advanced Storage DRS
	// settings that are not exposed via Terraform or the vSphere client.
	SdrsAdvancedOptions interface{}
	// The global automation level for all
	// virtual machines in this datastore cluster. Default: `manual`.
	SdrsAutomationLevel interface{}
	// When `true`, all disks in a
	// single virtual machine will be kept on the same datastore. Default: `true`.
	SdrsDefaultIntraVmAffinity interface{}
	// Enable Storage DRS for this datastore cluster.
	// Default: `false`.
	SdrsEnabled interface{}
	// The free space threshold to use.
	// When set to `utilization`, `drs_space_utilization_threshold` is used, and
	// when set to `freeSpace`, `drs_free_space_threshold` is used. Default:
	// `utilization`.
	SdrsFreeSpaceThreshold interface{}
	// The free space threshold to use. When set to utilization, drs_space_utilization_threshold is used, and when set to
	// freeSpace, drs_free_space_threshold is used.
	SdrsFreeSpaceThresholdMode interface{}
	// The threshold, in
	// percent, of difference between space utilization in datastores before storage
	// DRS makes decisions to balance the space. Default: `5` percent.
	SdrsFreeSpaceUtilizationDifference interface{}
	// Overrides the default
	// automation settings when correcting I/O load imbalances.
	SdrsIoBalanceAutomationLevel interface{}
	// The I/O latency threshold, in
	// milliseconds, that storage DRS uses to make recommendations to move disks
	// from this datastore. Default: `15` seconds.
	SdrsIoLatencyThreshold interface{}
	// Enable I/O load balancing for
	// this datastore cluster. Default: `true`.
	SdrsIoLoadBalanceEnabled interface{}
	// The difference between load
	// in datastores in the cluster before storage DRS makes recommendations to
	// balance the load. Default: `5` percent.
	SdrsIoLoadImbalanceThreshold interface{}
	// The threshold of reservable
	// IOPS of all virtual machines on the datastore before storage DRS makes
	// recommendations to move VMs off of a datastore. Note that this setting should
	// only be set if `sdrs_io_reservable_percent_threshold` cannot make an accurate
	// estimate of the capacity of the datastores in your cluster, and should be set
	// to roughly 50-60% of the worst case peak performance of the backing LUNs.
	SdrsIoReservableIopsThreshold interface{}
	// The threshold, in
	// percent, of actual estimated performance of the datastore (in IOPS) that
	// storage DRS uses to make recommendations to move VMs off of a datastore when
	// the total reservable IOPS exceeds the threshold. Default: `60` percent.
	SdrsIoReservablePercentThreshold interface{}
	// The reservable IOPS
	// threshold setting to use, `sdrs_io_reservable_percent_threshold` in the event
	// of `automatic`, or `sdrs_io_reservable_iops_threshold` in the event of
	// `manual`. Default: `automatic`.
	SdrsIoReservableThresholdMode interface{}
	// The storage DRS poll interval, in
	// minutes. Default: `480` minutes.
	SdrsLoadBalanceInterval interface{}
	// Overrides the default
	// automation settings when correcting storage and VM policy violations.
	SdrsPolicyEnforcementAutomationLevel interface{}
	// Overrides the default
	// automation settings when correcting affinity rule violations.
	SdrsRuleEnforcementAutomationLevel interface{}
	// Overrides the default
	// automation settings when correcting disk space imbalances.
	SdrsSpaceBalanceAutomationLevel interface{}
	// The threshold, in percent of used space, that storage DRS uses to make decisions to migrate VMs out of a datastore.
	SdrsSpaceUtilizationThreshold interface{}
	// Overrides the default
	// automation settings when generating recommendations for datastore evacuation.
	SdrsVmEvacuationAutomationLevel interface{}
	// The IDs of any tags to attach to this resource. See
	// [here][docs-applying-tags] for a reference on how to apply tags.
	Tags interface{}
}
