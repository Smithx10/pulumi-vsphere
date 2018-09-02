import * as pulumi from "@pulumi/pulumi";
/**
 * The `vsphere_custom_attribute` data source can be used to reference custom
 * attributes that are not managed by Terraform. Its attributes are exactly the
 * same as the [`vsphere_custom_attribute` resource][resource-custom-attribute],
 * and, like importing, the data source takes a name to search on. The `id` and
 * other attributes are then populated with the data found by the search.
 *
 * [resource-custom-attribute]: /docs/providers/vsphere/r/custom_attribute.html
 *
 * ~> **NOTE:** Custom attributes are unsupported on direct ESXi connections
 * and require vCenter.
 */
export declare function getCustomAttribute(args: GetCustomAttributeArgs, opts?: pulumi.InvokeOptions): Promise<GetCustomAttributeResult>;
/**
 * A collection of arguments for invoking getCustomAttribute.
 */
export interface GetCustomAttributeArgs {
    /**
     * The name of the custom attribute.
     */
    readonly name: string;
}
/**
 * A collection of values returned by getCustomAttribute.
 */
export interface GetCustomAttributeResult {
    readonly managedObjectType: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
