// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";

/**
 * The `vsphere_file` resource can be used to upload files (such as virtual disk
 * files) from the host machine that Terraform is running on to a target
 * datastore.  The resource can also be used to copy files between datastores, or
 * from one location to another on the same datastore.
 * 
 * Updates to destination parameters such as `datacenter`, `datastore`, or
 * `destination_file` will move the managed file a new destination based on the
 * values of the new settings.  If any source parameter is changed, such as
 * `source_datastore`, `source_datacenter` or `source_file`), the resource will be
 * re-created. Depending on if destination parameters are being changed as well,
 * this may result in the destination file either being overwritten or deleted at
 * the old location.
 */
export class File extends pulumi.CustomResource {
    /**
     * Get an existing File resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FileState): File {
        return new File(name, <any>state, { id });
    }

    /**
     * Create directories in `destination_file`
     * path parameter if any missing for copy operation.
     */
    public readonly createDirectories: pulumi.Output<boolean | undefined>;
    /**
     * The name of a datacenter in which the file will be
     * uploaded to.
     */
    public readonly datacenter: pulumi.Output<string | undefined>;
    /**
     * The name of the datastore in which to upload the
     * file to.
     */
    public readonly datastore: pulumi.Output<string>;
    /**
     * The path to where the file should be uploaded
     * or copied to on vSphere.
     */
    public readonly destinationFile: pulumi.Output<string>;
    /**
     * The name of a datacenter in which the file
     * will be copied from. Forces a new resource if changed.
     */
    public readonly sourceDatacenter: pulumi.Output<string | undefined>;
    /**
     * The name of the datastore in which file will
     * be copied from. Forces a new resource if changed.
     */
    public readonly sourceDatastore: pulumi.Output<string | undefined>;
    /**
     * The path to the file being uploaded from the
     * Terraform host to vSphere or copied within vSphere. Forces a new resource if
     * changed.
     */
    public readonly sourceFile: pulumi.Output<string>;

    /**
     * Create a File resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FileArgs | FileState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        if (opts && opts.id) {
            const state: FileState = argsOrState as FileState | undefined;
            inputs["createDirectories"] = state ? state.createDirectories : undefined;
            inputs["datacenter"] = state ? state.datacenter : undefined;
            inputs["datastore"] = state ? state.datastore : undefined;
            inputs["destinationFile"] = state ? state.destinationFile : undefined;
            inputs["sourceDatacenter"] = state ? state.sourceDatacenter : undefined;
            inputs["sourceDatastore"] = state ? state.sourceDatastore : undefined;
            inputs["sourceFile"] = state ? state.sourceFile : undefined;
        } else {
            const args = argsOrState as FileArgs | undefined;
            if (!args || args.datastore === undefined) {
                throw new Error("Missing required property 'datastore'");
            }
            if (!args || args.destinationFile === undefined) {
                throw new Error("Missing required property 'destinationFile'");
            }
            if (!args || args.sourceFile === undefined) {
                throw new Error("Missing required property 'sourceFile'");
            }
            inputs["createDirectories"] = args ? args.createDirectories : undefined;
            inputs["datacenter"] = args ? args.datacenter : undefined;
            inputs["datastore"] = args ? args.datastore : undefined;
            inputs["destinationFile"] = args ? args.destinationFile : undefined;
            inputs["sourceDatacenter"] = args ? args.sourceDatacenter : undefined;
            inputs["sourceDatastore"] = args ? args.sourceDatastore : undefined;
            inputs["sourceFile"] = args ? args.sourceFile : undefined;
        }
        super("vsphere:index/file:File", name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering File resources.
 */
export interface FileState {
    /**
     * Create directories in `destination_file`
     * path parameter if any missing for copy operation.
     */
    readonly createDirectories?: pulumi.Input<boolean>;
    /**
     * The name of a datacenter in which the file will be
     * uploaded to.
     */
    readonly datacenter?: pulumi.Input<string>;
    /**
     * The name of the datastore in which to upload the
     * file to.
     */
    readonly datastore?: pulumi.Input<string>;
    /**
     * The path to where the file should be uploaded
     * or copied to on vSphere.
     */
    readonly destinationFile?: pulumi.Input<string>;
    /**
     * The name of a datacenter in which the file
     * will be copied from. Forces a new resource if changed.
     */
    readonly sourceDatacenter?: pulumi.Input<string>;
    /**
     * The name of the datastore in which file will
     * be copied from. Forces a new resource if changed.
     */
    readonly sourceDatastore?: pulumi.Input<string>;
    /**
     * The path to the file being uploaded from the
     * Terraform host to vSphere or copied within vSphere. Forces a new resource if
     * changed.
     */
    readonly sourceFile?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a File resource.
 */
export interface FileArgs {
    /**
     * Create directories in `destination_file`
     * path parameter if any missing for copy operation.
     */
    readonly createDirectories?: pulumi.Input<boolean>;
    /**
     * The name of a datacenter in which the file will be
     * uploaded to.
     */
    readonly datacenter?: pulumi.Input<string>;
    /**
     * The name of the datastore in which to upload the
     * file to.
     */
    readonly datastore: pulumi.Input<string>;
    /**
     * The path to where the file should be uploaded
     * or copied to on vSphere.
     */
    readonly destinationFile: pulumi.Input<string>;
    /**
     * The name of a datacenter in which the file
     * will be copied from. Forces a new resource if changed.
     */
    readonly sourceDatacenter?: pulumi.Input<string>;
    /**
     * The name of the datastore in which file will
     * be copied from. Forces a new resource if changed.
     */
    readonly sourceDatastore?: pulumi.Input<string>;
    /**
     * The path to the file being uploaded from the
     * Terraform host to vSphere or copied within vSphere. Forces a new resource if
     * changed.
     */
    readonly sourceFile: pulumi.Input<string>;
}
