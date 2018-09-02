import * as pulumi from "@pulumi/pulumi";
/**
 * The `vsphere_datastore_cluster` data source can be used to discover the ID of a
 * datastore cluster in vSphere. This is useful to fetch the ID of a datastore
 * cluster that you want to use to assign datastores to using the
 * [`vsphere_nas_datastore`][docs-nas-datastore-resource] or
 * [`vsphere_vmfs_datastore`][docs-vmfs-datastore-resource] resources, or create
 * virtual machines in using the
 * [`vsphere_virtual_machine`][docs-virtual-machine-resource] resource.
 *
 * [docs-nas-datastore-resource]: /docs/providers/vsphere/r/nas_datastore.html
 * [docs-vmfs-datastore-resource]: /docs/providers/vsphere/r/vmfs_datastore.html
 * [docs-virtual-machine-resource]: /docs/providers/vsphere/r/virtual_machine.html
 */
export declare function getDatastoreCluster(args: GetDatastoreClusterArgs, opts?: pulumi.InvokeOptions): Promise<GetDatastoreClusterResult>;
/**
 * A collection of arguments for invoking getDatastoreCluster.
 */
export interface GetDatastoreClusterArgs {
    /**
     * The [managed object reference
     * ID][docs-about-morefs] of the datacenter the datastore cluster is located in.
     * This can be omitted if the search path used in `name` is an absolute path.
     * For default datacenters, use the id attribute from an empty
     * `vsphere_datacenter` data source.
     */
    readonly datacenterId?: string;
    /**
     * The name or absolute path to the datastore cluster.
     */
    readonly name: string;
}
/**
 * A collection of values returned by getDatastoreCluster.
 */
export interface GetDatastoreClusterResult {
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
