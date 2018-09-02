import * as pulumi from "@pulumi/pulumi";
/**
 * The `vsphere_tag_category` data source can be used to reference tag categories
 * that are not managed by Terraform. Its attributes are exactly the same as the
 * [`vsphere_tag_category` resource][resource-tag-category], and, like importing,
 * the data source takes a name to search on. The `id` and other attributes are
 * then populated with the data found by the search.
 *
 * [resource-tag-category]: /docs/providers/vsphere/r/tag_category.html
 *
 * ~> **NOTE:** Tagging support is unsupported on direct ESXi connections and
 * requires vCenter 6.0 or higher.
 */
export declare function getTagCategory(args: GetTagCategoryArgs, opts?: pulumi.InvokeOptions): Promise<GetTagCategoryResult>;
/**
 * A collection of arguments for invoking getTagCategory.
 */
export interface GetTagCategoryArgs {
    /**
     * The name of the tag category.
     */
    readonly name: string;
}
/**
 * A collection of values returned by getTagCategory.
 */
export interface GetTagCategoryResult {
    readonly associableTypes: string[];
    readonly cardinality: string;
    readonly description: string;
    /**
     * id is the provider-assigned unique ID for this managed resource.
     */
    readonly id: string;
}
