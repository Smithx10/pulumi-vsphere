"use strict";
// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***
Object.defineProperty(exports, "__esModule", { value: true });
const pulumi = require("@pulumi/pulumi");
/**
 * The provider type for the vsphere package
 */
class Provider extends pulumi.ProviderResource {
    /**
     * Create a Provider resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name, args, opts) {
        let inputs = {};
        {
            if (!args || args.password === undefined) {
                throw new Error("Missing required property 'password'");
            }
            if (!args || args.user === undefined) {
                throw new Error("Missing required property 'user'");
            }
            inputs["allowUnverifiedSsl"] = args ? args.allowUnverifiedSsl : undefined;
            inputs["clientDebug"] = args ? args.clientDebug : undefined;
            inputs["clientDebugPath"] = args ? args.clientDebugPath : undefined;
            inputs["clientDebugPathRun"] = args ? args.clientDebugPathRun : undefined;
            inputs["password"] = args ? args.password : undefined;
            inputs["persistSession"] = args ? args.persistSession : undefined;
            inputs["restSessionPath"] = args ? args.restSessionPath : undefined;
            inputs["user"] = args ? args.user : undefined;
            inputs["vcenterServer"] = args ? args.vcenterServer : undefined;
            inputs["vimSessionPath"] = args ? args.vimSessionPath : undefined;
            inputs["vsphereServer"] = args ? args.vsphereServer : undefined;
        }
        super("vsphere", name, inputs, opts);
    }
}
exports.Provider = Provider;
//# sourceMappingURL=provider.js.map