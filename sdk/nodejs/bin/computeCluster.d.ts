import * as pulumi from "@pulumi/pulumi";
/**
 * -> **A note on the naming of this resource:** VMware refers to clusters of
 * hosts in the UI and documentation as _clusters_, _HA clusters_, or _DRS
 * clusters_. All of these refer to the same kind of resource (with the latter two
 * referring to specific features of clustering). In Terraform, we use
 * `vsphere_compute_cluster` to differentiate host clusters from _datastore
 * clusters_, which are clusters of datastores that can be used to distribute load
 * and ensure fault tolerance via distribution of virtual machines. Datastore
 * clusters can also be managed through Terraform, via the
 * [`vsphere_datastore_cluster` resource][docs-r-vsphere-datastore-cluster].
 *
 * [docs-r-vsphere-datastore-cluster]: /docs/providers/vsphere/r/datastore_cluster.html
 *
 * The `vsphere_compute_cluster` resource can be used to create and manage
 * clusters of hosts allowing for resource control of compute resources, load
 * balancing through DRS, and high availability through vSphere HA.
 *
 * For more information on vSphere clusters and DRS, see [this
 * page][ref-vsphere-drs-clusters]. For more information on vSphere HA, see [this
 * page][ref-vsphere-ha-clusters].
 *
 * [ref-vsphere-drs-clusters]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.resmgmt.doc/GUID-8ACF3502-5314-469F-8CC9-4A9BD5925BC2.html
 * [ref-vsphere-ha-clusters]: https://docs.vmware.com/en/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-5432CA24-14F1-44E3-87FB-61D937831CF6.html
 *
 * ~> **NOTE:** This resource requires vCenter and is not available on direct ESXi
 * connections.
 *
 * ~> **NOTE:** vSphere DRS requires a vSphere Enterprise Plus license.
 */
export declare class ComputeCluster extends pulumi.CustomResource {
    /**
     * Get an existing ComputeCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     */
    static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputeClusterState): ComputeCluster;
    /**
     * A map of custom attribute ids to attribute
     * value strings to set for the datastore cluster. See
     * [here][docs-setting-custom-attributes] for a reference on how to set values
     * for custom attributes.
     */
    readonly customAttributes: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The [managed object ID][docs-about-morefs] of
     * the datacenter to create the cluster in. Forces a new resource if changed.
     */
    readonly datacenterId: pulumi.Output<string>;
    /**
     * The automation level for host power
     * operations in this cluster. Can be one of `manual` or `automated`. Default:
     * `manual`.
     */
    readonly dpmAutomationLevel: pulumi.Output<string | undefined>;
    /**
     * Enable DPM support for DRS in this cluster.
     * Requires `drs_enabled` to be `true` in order to be effective.
     * Default: `false`.
     */
    readonly dpmEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A value between `1` and `5` indicating the
     * threshold of load within the cluster that influences host power operations.
     * This affects both power on and power off operations - a lower setting will
     * tolerate more of a surplus/deficit than a higher setting. Default: `3`.
     */
    readonly dpmThreshold: pulumi.Output<number | undefined>;
    /**
     * A key/value map that specifies advanced
     * options for DRS and DPM.
     */
    readonly drsAdvancedOptions: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * The default automation level for all
     * virtual machines in this cluster. Can be one of `manual`,
     * `partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
     */
    readonly drsAutomationLevel: pulumi.Output<string | undefined>;
    /**
     * When `true`, enables DRS to use data
     * from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
     * recommendations. <sup>\*</sup>
     */
    readonly drsEnablePredictiveDrs: pulumi.Output<boolean | undefined>;
    /**
     * Allow individual DRS overrides to be
     * set for virtual machines in the cluster. Default: `true`.
     */
    readonly drsEnableVmOverrides: pulumi.Output<boolean | undefined>;
    /**
     * Enable DRS for this cluster. Default: `false`.
     */
    readonly drsEnabled: pulumi.Output<boolean | undefined>;
    /**
     * A value between `1` and `5` indicating
     * the threshold of imbalance tolerated between hosts. A lower setting will
     * tolerate more imbalance while a higher setting will tolerate less. Default:
     * `3`.
     */
    readonly drsMigrationThreshold: pulumi.Output<number | undefined>;
    /**
     * The relative path to a folder to put this cluster in.
     * This is a path relative to the datacenter you are deploying the cluster to.
     * Example: for the `dc1` datacenter, and a provided `folder` of `foo/bar`,
     * Terraform will place a cluster named `terraform-compute-cluster-test` in a
     * host folder located at `/dc1/host/foo/bar`, with the final inventory path
     * being `/dc1/host/foo/bar/terraform-datastore-cluster-test`.
     */
    readonly folder: pulumi.Output<string | undefined>;
    /**
     * When destroying the resource, setting this to
     * `true` will auto-remove any hosts that are currently a member of the cluster,
     * as if they were removed by taking their entry out of `host_system_ids` (see
     * below). This is an advanced
     * option and should only be used for testing. Default: `false`.
     */
    readonly forceEvacuateOnDestroy: pulumi.Output<boolean | undefined>;
    /**
     * Defines the
     * [managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
     * hosts. These hosts are kept as available as possible - admission control will
     * block access to the host, and DRS will ignore the host when making
     * recommendations.
     */
    readonly haAdmissionControlFailoverHostSystemIds: pulumi.Output<string[] | undefined>;
    /**
     * The maximum number
     * of failed hosts that admission control tolerates when making decisions on
     * whether to permit virtual machine operations. The maximum is one less than
     * the number of hosts in the cluster. Default: `1`.
     * <sup>\*</sup>
     */
    readonly haAdmissionControlHostFailureTolerance: pulumi.Output<number | undefined>;
    /**
     * The percentage of
     * resource reduction that a cluster of virtual machines can tolerate in case of
     * a failover. A value of 0 produces warnings only, whereas a value of 100
     * disables the setting. Default: `100` (disabled).
     */
    readonly haAdmissionControlPerformanceTolerance: pulumi.Output<number | undefined>;
    /**
     * The type of admission control
     * policy to use with vSphere HA. Can be one of `resourcePercentage`,
     * `slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
     */
    readonly haAdmissionControlPolicy: pulumi.Output<string | undefined>;
    /**
     *
     * Automatically determine available resource percentages by subtracting the
     * average number of host resources represented by the
     * `ha_admission_control_host_failure_tolerance`
     * setting from the total amount of resources in the cluster. Disable to supply
     * user-defined values. Default: `true`.
     * <sup>\*</sup>
     */
    readonly haAdmissionControlResourcePercentageAutoCompute: pulumi.Output<boolean | undefined>;
    /**
     * Controls the
     * user-defined percentage of CPU resources in the cluster to reserve for
     * failover. Default: `100`.
     */
    readonly haAdmissionControlResourcePercentageCpu: pulumi.Output<number | undefined>;
    /**
     * Controls the
     * user-defined percentage of memory resources in the cluster to reserve for
     * failover. Default: `100`.
     */
    readonly haAdmissionControlResourcePercentageMemory: pulumi.Output<number | undefined>;
    /**
     * Controls the
     * user-defined CPU slot size, in MHz. Default: `32`.
     */
    readonly haAdmissionControlSlotPolicyExplicitCpu: pulumi.Output<number | undefined>;
    /**
     * Controls the
     * user-defined memory slot size, in MB. Default: `100`.
     */
    readonly haAdmissionControlSlotPolicyExplicitMemory: pulumi.Output<number | undefined>;
    /**
     * Controls
     * whether or not you wish to supply explicit values to CPU and memory slot
     * sizes. The default is `false`, which tells vSphere to gather a automatic
     * average based on all powered-on virtual machines currently in the cluster.
     */
    readonly haAdmissionControlSlotPolicyUseExplicitSize: pulumi.Output<boolean | undefined>;
    /**
     * A key/value map that specifies advanced
     * options for vSphere HA.
     */
    readonly haAdvancedOptions: pulumi.Output<{
        [key: string]: any;
    } | undefined>;
    /**
     * Controls the action to take
     * on virtual machines if an APD status on an affected datastore clears in the
     * middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
     * <sup>\*</sup>
     */
    readonly haDatastoreApdRecoveryAction: pulumi.Output<string | undefined>;
    /**
     * Controls the action to take on
     * virtual machines when the cluster has detected loss to all paths to a
     * relevant datastore. Can be one of `disabled`, `warning`,
     * `restartConservative`, or `restartAggressive`.  Default: `disabled`.
     * <sup>\*</sup>
     */
    readonly haDatastoreApdResponse: pulumi.Output<string | undefined>;
    /**
     * Controls the delay in minutes
     * to wait after an APD timeout event to execute the response action defined in
     * `ha_datastore_apd_response`. Default: `3`
     * minutes. <sup>\*</sup>
     */
    readonly haDatastoreApdResponseDelay: pulumi.Output<number | undefined>;
    /**
     * Controls the action to take on
     * virtual machines when the cluster has detected a permanent device loss to a
     * relevant datastore. Can be one of `disabled`, `warning`, or
     * `restartAggressive`. Default: `disabled`.
     * <sup>\*</sup>
     */
    readonly haDatastorePdlResponse: pulumi.Output<string | undefined>;
    /**
     * Enable vSphere HA for this cluster. Default:
     * `false`.
     */
    readonly haEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The list of managed object IDs for
     * preferred datastores to use for HA heartbeating. This setting is only useful
     * when `ha_heartbeat_datastore_policy` is set
     * to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
     */
    readonly haHeartbeatDatastoreIds: pulumi.Output<string[] | undefined>;
    /**
     * The selection policy for HA
     * heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
     * `allFeasibleDsWithUserPreference`. Default:
     * `allFeasibleDsWithUserPreference`.
     */
    readonly haHeartbeatDatastorePolicy: pulumi.Output<string | undefined>;
    /**
     * The action to take on virtual
     * machines when a host has detected that it has been isolated from the rest of
     * the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
     * `none`.
     */
    readonly haHostIsolationResponse: pulumi.Output<string | undefined>;
    /**
     * Global setting that controls whether
     * vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
     * or `disabled`. Default: `enabled`.
     */
    readonly haHostMonitoring: pulumi.Output<string | undefined>;
    /**
     * Controls vSphere VM component
     * protection for virtual machines in this cluster. Can be one of `enabled` or
     * `disabled`. Default: `enabled`.
     * <sup>\*</sup>
     */
    readonly haVmComponentProtection: pulumi.Output<string | undefined>;
    /**
     * The condition used to
     * determine whether or not virtual machines in a certain restart priority class
     * are online, allowing HA to move on to restarting virtual machines on the next
     * priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
     * `appHbStatusGreen`. The default is `none`, which means that a virtual machine
     * is considered ready immediately after a host is found to start it on.
     * <sup>\*</sup>
     */
    readonly haVmDependencyRestartCondition: pulumi.Output<string | undefined>;
    /**
     * If a heartbeat from a virtual machine
     * is not received within this configured interval, the virtual machine is
     * marked as failed. The value is in seconds. Default: `30`.
     */
    readonly haVmFailureInterval: pulumi.Output<number | undefined>;
    /**
     * The length of the reset window in
     * which `ha_vm_maximum_resets` can operate. When this
     * window expires, no more resets are attempted regardless of the setting
     * configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
     * unlimited reset time is allotted. The value is specified in seconds. Default:
     * `-1` (no window).
     */
    readonly haVmMaximumFailureWindow: pulumi.Output<number | undefined>;
    /**
     * The maximum number of resets that HA will
     * perform to a virtual machine when responding to a failure event. Default: `3`
     */
    readonly haVmMaximumResets: pulumi.Output<number | undefined>;
    /**
     * The time, in seconds, that HA waits after
     * powering on a virtual machine before monitoring for heartbeats. Default:
     * `120` (2 minutes).
     */
    readonly haVmMinimumUptime: pulumi.Output<number | undefined>;
    /**
     * The type of virtual machine monitoring to use
     * when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
     * `vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
     */
    readonly haVmMonitoring: pulumi.Output<string | undefined>;
    /**
     * Additional delay in seconds
     * after ready condition is met. A VM is considered ready at this point.
     * Default: `0` (no delay). <sup>\*</sup>
     */
    readonly haVmRestartAdditionalDelay: pulumi.Output<number | undefined>;
    /**
     * The default restart priority
     * for affected virtual machines when vSphere detects a host failure. Can be one
     * of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
     */
    readonly haVmRestartPriority: pulumi.Output<string | undefined>;
    /**
     * The maximum time, in seconds,
     * that vSphere HA will wait for virtual machines in one priority to be ready
     * before proceeding with the next priority. Default: `600` (10 minutes).
     * <sup>\*</sup>
     */
    readonly haVmRestartTimeout: pulumi.Output<number | undefined>;
    /**
     * The timeout for each host maintenance mode
     * operation when removing hosts from a cluster. The value is specified in
     * seconds. Default: `3600` (1 hour).
     */
    readonly hostClusterExitTimeout: pulumi.Output<number | undefined>;
    /**
     * The [managed object IDs][docs-about-morefs] of
     * the hosts to put in the cluster.
     */
    readonly hostSystemIds: pulumi.Output<string[] | undefined>;
    /**
     * The name of the cluster.
     */
    readonly name: pulumi.Output<string>;
    /**
     * Determines how the host
     * quarantine, maintenance mode, or virtual machine migration recommendations
     * made by proactive HA are to be handled. Can be one of `Automated` or
     * `Manual`. Default: `Manual`. <sup>\*</sup>
     */
    readonly proactiveHaAutomationLevel: pulumi.Output<string | undefined>;
    /**
     * Enables Proactive HA. Default: `false`.
     * <sup>\*</sup>
     */
    readonly proactiveHaEnabled: pulumi.Output<boolean | undefined>;
    /**
     * The configured remediation
     * for moderately degraded hosts. Can be one of `MaintenanceMode` or
     * `QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
     * `proactive_ha_severe_remediation` is set
     * to `QuarantineMode`. Default: `QuarantineMode`.
     * <sup>\*</sup>
     */
    readonly proactiveHaModerateRemediation: pulumi.Output<string | undefined>;
    /**
     * The list of IDs for health update
     * providers configured for this cluster.
     * <sup>\*</sup>
     */
    readonly proactiveHaProviderIds: pulumi.Output<string[] | undefined>;
    /**
     * The configured remediation for
     * severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
     * Note that this cannot be set to `QuarantineMode` when
     * `proactive_ha_moderate_remediation` is
     * set to `MaintenanceMode`. Default: `QuarantineMode`.
     * <sup>\*</sup>
     */
    readonly proactiveHaSevereRemediation: pulumi.Output<string | undefined>;
    /**
     * The managed object ID of the cluster's root resource pool.
     */
    readonly resourcePoolId: pulumi.Output<string>;
    /**
     * The IDs of any tags to attach to this resource. See
     * [here][docs-applying-tags] for a reference on how to apply tags.
     */
    readonly tags: pulumi.Output<string[] | undefined>;
    /**
     * Create a ComputeCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputeClusterArgs, opts?: pulumi.CustomResourceOptions);
}
/**
 * Input properties used for looking up and filtering ComputeCluster resources.
 */
export interface ComputeClusterState {
    /**
     * A map of custom attribute ids to attribute
     * value strings to set for the datastore cluster. See
     * [here][docs-setting-custom-attributes] for a reference on how to set values
     * for custom attributes.
     */
    readonly customAttributes?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The [managed object ID][docs-about-morefs] of
     * the datacenter to create the cluster in. Forces a new resource if changed.
     */
    readonly datacenterId?: pulumi.Input<string>;
    /**
     * The automation level for host power
     * operations in this cluster. Can be one of `manual` or `automated`. Default:
     * `manual`.
     */
    readonly dpmAutomationLevel?: pulumi.Input<string>;
    /**
     * Enable DPM support for DRS in this cluster.
     * Requires `drs_enabled` to be `true` in order to be effective.
     * Default: `false`.
     */
    readonly dpmEnabled?: pulumi.Input<boolean>;
    /**
     * A value between `1` and `5` indicating the
     * threshold of load within the cluster that influences host power operations.
     * This affects both power on and power off operations - a lower setting will
     * tolerate more of a surplus/deficit than a higher setting. Default: `3`.
     */
    readonly dpmThreshold?: pulumi.Input<number>;
    /**
     * A key/value map that specifies advanced
     * options for DRS and DPM.
     */
    readonly drsAdvancedOptions?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The default automation level for all
     * virtual machines in this cluster. Can be one of `manual`,
     * `partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
     */
    readonly drsAutomationLevel?: pulumi.Input<string>;
    /**
     * When `true`, enables DRS to use data
     * from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
     * recommendations. <sup>\*</sup>
     */
    readonly drsEnablePredictiveDrs?: pulumi.Input<boolean>;
    /**
     * Allow individual DRS overrides to be
     * set for virtual machines in the cluster. Default: `true`.
     */
    readonly drsEnableVmOverrides?: pulumi.Input<boolean>;
    /**
     * Enable DRS for this cluster. Default: `false`.
     */
    readonly drsEnabled?: pulumi.Input<boolean>;
    /**
     * A value between `1` and `5` indicating
     * the threshold of imbalance tolerated between hosts. A lower setting will
     * tolerate more imbalance while a higher setting will tolerate less. Default:
     * `3`.
     */
    readonly drsMigrationThreshold?: pulumi.Input<number>;
    /**
     * The relative path to a folder to put this cluster in.
     * This is a path relative to the datacenter you are deploying the cluster to.
     * Example: for the `dc1` datacenter, and a provided `folder` of `foo/bar`,
     * Terraform will place a cluster named `terraform-compute-cluster-test` in a
     * host folder located at `/dc1/host/foo/bar`, with the final inventory path
     * being `/dc1/host/foo/bar/terraform-datastore-cluster-test`.
     */
    readonly folder?: pulumi.Input<string>;
    /**
     * When destroying the resource, setting this to
     * `true` will auto-remove any hosts that are currently a member of the cluster,
     * as if they were removed by taking their entry out of `host_system_ids` (see
     * below). This is an advanced
     * option and should only be used for testing. Default: `false`.
     */
    readonly forceEvacuateOnDestroy?: pulumi.Input<boolean>;
    /**
     * Defines the
     * [managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
     * hosts. These hosts are kept as available as possible - admission control will
     * block access to the host, and DRS will ignore the host when making
     * recommendations.
     */
    readonly haAdmissionControlFailoverHostSystemIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum number
     * of failed hosts that admission control tolerates when making decisions on
     * whether to permit virtual machine operations. The maximum is one less than
     * the number of hosts in the cluster. Default: `1`.
     * <sup>\*</sup>
     */
    readonly haAdmissionControlHostFailureTolerance?: pulumi.Input<number>;
    /**
     * The percentage of
     * resource reduction that a cluster of virtual machines can tolerate in case of
     * a failover. A value of 0 produces warnings only, whereas a value of 100
     * disables the setting. Default: `100` (disabled).
     */
    readonly haAdmissionControlPerformanceTolerance?: pulumi.Input<number>;
    /**
     * The type of admission control
     * policy to use with vSphere HA. Can be one of `resourcePercentage`,
     * `slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
     */
    readonly haAdmissionControlPolicy?: pulumi.Input<string>;
    /**
     *
     * Automatically determine available resource percentages by subtracting the
     * average number of host resources represented by the
     * `ha_admission_control_host_failure_tolerance`
     * setting from the total amount of resources in the cluster. Disable to supply
     * user-defined values. Default: `true`.
     * <sup>\*</sup>
     */
    readonly haAdmissionControlResourcePercentageAutoCompute?: pulumi.Input<boolean>;
    /**
     * Controls the
     * user-defined percentage of CPU resources in the cluster to reserve for
     * failover. Default: `100`.
     */
    readonly haAdmissionControlResourcePercentageCpu?: pulumi.Input<number>;
    /**
     * Controls the
     * user-defined percentage of memory resources in the cluster to reserve for
     * failover. Default: `100`.
     */
    readonly haAdmissionControlResourcePercentageMemory?: pulumi.Input<number>;
    /**
     * Controls the
     * user-defined CPU slot size, in MHz. Default: `32`.
     */
    readonly haAdmissionControlSlotPolicyExplicitCpu?: pulumi.Input<number>;
    /**
     * Controls the
     * user-defined memory slot size, in MB. Default: `100`.
     */
    readonly haAdmissionControlSlotPolicyExplicitMemory?: pulumi.Input<number>;
    /**
     * Controls
     * whether or not you wish to supply explicit values to CPU and memory slot
     * sizes. The default is `false`, which tells vSphere to gather a automatic
     * average based on all powered-on virtual machines currently in the cluster.
     */
    readonly haAdmissionControlSlotPolicyUseExplicitSize?: pulumi.Input<boolean>;
    /**
     * A key/value map that specifies advanced
     * options for vSphere HA.
     */
    readonly haAdvancedOptions?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Controls the action to take
     * on virtual machines if an APD status on an affected datastore clears in the
     * middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
     * <sup>\*</sup>
     */
    readonly haDatastoreApdRecoveryAction?: pulumi.Input<string>;
    /**
     * Controls the action to take on
     * virtual machines when the cluster has detected loss to all paths to a
     * relevant datastore. Can be one of `disabled`, `warning`,
     * `restartConservative`, or `restartAggressive`.  Default: `disabled`.
     * <sup>\*</sup>
     */
    readonly haDatastoreApdResponse?: pulumi.Input<string>;
    /**
     * Controls the delay in minutes
     * to wait after an APD timeout event to execute the response action defined in
     * `ha_datastore_apd_response`. Default: `3`
     * minutes. <sup>\*</sup>
     */
    readonly haDatastoreApdResponseDelay?: pulumi.Input<number>;
    /**
     * Controls the action to take on
     * virtual machines when the cluster has detected a permanent device loss to a
     * relevant datastore. Can be one of `disabled`, `warning`, or
     * `restartAggressive`. Default: `disabled`.
     * <sup>\*</sup>
     */
    readonly haDatastorePdlResponse?: pulumi.Input<string>;
    /**
     * Enable vSphere HA for this cluster. Default:
     * `false`.
     */
    readonly haEnabled?: pulumi.Input<boolean>;
    /**
     * The list of managed object IDs for
     * preferred datastores to use for HA heartbeating. This setting is only useful
     * when `ha_heartbeat_datastore_policy` is set
     * to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
     */
    readonly haHeartbeatDatastoreIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The selection policy for HA
     * heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
     * `allFeasibleDsWithUserPreference`. Default:
     * `allFeasibleDsWithUserPreference`.
     */
    readonly haHeartbeatDatastorePolicy?: pulumi.Input<string>;
    /**
     * The action to take on virtual
     * machines when a host has detected that it has been isolated from the rest of
     * the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
     * `none`.
     */
    readonly haHostIsolationResponse?: pulumi.Input<string>;
    /**
     * Global setting that controls whether
     * vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
     * or `disabled`. Default: `enabled`.
     */
    readonly haHostMonitoring?: pulumi.Input<string>;
    /**
     * Controls vSphere VM component
     * protection for virtual machines in this cluster. Can be one of `enabled` or
     * `disabled`. Default: `enabled`.
     * <sup>\*</sup>
     */
    readonly haVmComponentProtection?: pulumi.Input<string>;
    /**
     * The condition used to
     * determine whether or not virtual machines in a certain restart priority class
     * are online, allowing HA to move on to restarting virtual machines on the next
     * priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
     * `appHbStatusGreen`. The default is `none`, which means that a virtual machine
     * is considered ready immediately after a host is found to start it on.
     * <sup>\*</sup>
     */
    readonly haVmDependencyRestartCondition?: pulumi.Input<string>;
    /**
     * If a heartbeat from a virtual machine
     * is not received within this configured interval, the virtual machine is
     * marked as failed. The value is in seconds. Default: `30`.
     */
    readonly haVmFailureInterval?: pulumi.Input<number>;
    /**
     * The length of the reset window in
     * which `ha_vm_maximum_resets` can operate. When this
     * window expires, no more resets are attempted regardless of the setting
     * configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
     * unlimited reset time is allotted. The value is specified in seconds. Default:
     * `-1` (no window).
     */
    readonly haVmMaximumFailureWindow?: pulumi.Input<number>;
    /**
     * The maximum number of resets that HA will
     * perform to a virtual machine when responding to a failure event. Default: `3`
     */
    readonly haVmMaximumResets?: pulumi.Input<number>;
    /**
     * The time, in seconds, that HA waits after
     * powering on a virtual machine before monitoring for heartbeats. Default:
     * `120` (2 minutes).
     */
    readonly haVmMinimumUptime?: pulumi.Input<number>;
    /**
     * The type of virtual machine monitoring to use
     * when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
     * `vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
     */
    readonly haVmMonitoring?: pulumi.Input<string>;
    /**
     * Additional delay in seconds
     * after ready condition is met. A VM is considered ready at this point.
     * Default: `0` (no delay). <sup>\*</sup>
     */
    readonly haVmRestartAdditionalDelay?: pulumi.Input<number>;
    /**
     * The default restart priority
     * for affected virtual machines when vSphere detects a host failure. Can be one
     * of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
     */
    readonly haVmRestartPriority?: pulumi.Input<string>;
    /**
     * The maximum time, in seconds,
     * that vSphere HA will wait for virtual machines in one priority to be ready
     * before proceeding with the next priority. Default: `600` (10 minutes).
     * <sup>\*</sup>
     */
    readonly haVmRestartTimeout?: pulumi.Input<number>;
    /**
     * The timeout for each host maintenance mode
     * operation when removing hosts from a cluster. The value is specified in
     * seconds. Default: `3600` (1 hour).
     */
    readonly hostClusterExitTimeout?: pulumi.Input<number>;
    /**
     * The [managed object IDs][docs-about-morefs] of
     * the hosts to put in the cluster.
     */
    readonly hostSystemIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the cluster.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Determines how the host
     * quarantine, maintenance mode, or virtual machine migration recommendations
     * made by proactive HA are to be handled. Can be one of `Automated` or
     * `Manual`. Default: `Manual`. <sup>\*</sup>
     */
    readonly proactiveHaAutomationLevel?: pulumi.Input<string>;
    /**
     * Enables Proactive HA. Default: `false`.
     * <sup>\*</sup>
     */
    readonly proactiveHaEnabled?: pulumi.Input<boolean>;
    /**
     * The configured remediation
     * for moderately degraded hosts. Can be one of `MaintenanceMode` or
     * `QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
     * `proactive_ha_severe_remediation` is set
     * to `QuarantineMode`. Default: `QuarantineMode`.
     * <sup>\*</sup>
     */
    readonly proactiveHaModerateRemediation?: pulumi.Input<string>;
    /**
     * The list of IDs for health update
     * providers configured for this cluster.
     * <sup>\*</sup>
     */
    readonly proactiveHaProviderIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The configured remediation for
     * severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
     * Note that this cannot be set to `QuarantineMode` when
     * `proactive_ha_moderate_remediation` is
     * set to `MaintenanceMode`. Default: `QuarantineMode`.
     * <sup>\*</sup>
     */
    readonly proactiveHaSevereRemediation?: pulumi.Input<string>;
    /**
     * The managed object ID of the cluster's root resource pool.
     */
    readonly resourcePoolId?: pulumi.Input<string>;
    /**
     * The IDs of any tags to attach to this resource. See
     * [here][docs-applying-tags] for a reference on how to apply tags.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
}
/**
 * The set of arguments for constructing a ComputeCluster resource.
 */
export interface ComputeClusterArgs {
    /**
     * A map of custom attribute ids to attribute
     * value strings to set for the datastore cluster. See
     * [here][docs-setting-custom-attributes] for a reference on how to set values
     * for custom attributes.
     */
    readonly customAttributes?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The [managed object ID][docs-about-morefs] of
     * the datacenter to create the cluster in. Forces a new resource if changed.
     */
    readonly datacenterId: pulumi.Input<string>;
    /**
     * The automation level for host power
     * operations in this cluster. Can be one of `manual` or `automated`. Default:
     * `manual`.
     */
    readonly dpmAutomationLevel?: pulumi.Input<string>;
    /**
     * Enable DPM support for DRS in this cluster.
     * Requires `drs_enabled` to be `true` in order to be effective.
     * Default: `false`.
     */
    readonly dpmEnabled?: pulumi.Input<boolean>;
    /**
     * A value between `1` and `5` indicating the
     * threshold of load within the cluster that influences host power operations.
     * This affects both power on and power off operations - a lower setting will
     * tolerate more of a surplus/deficit than a higher setting. Default: `3`.
     */
    readonly dpmThreshold?: pulumi.Input<number>;
    /**
     * A key/value map that specifies advanced
     * options for DRS and DPM.
     */
    readonly drsAdvancedOptions?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * The default automation level for all
     * virtual machines in this cluster. Can be one of `manual`,
     * `partiallyAutomated`, or `fullyAutomated`. Default: `manual`.
     */
    readonly drsAutomationLevel?: pulumi.Input<string>;
    /**
     * When `true`, enables DRS to use data
     * from [vRealize Operations Manager][ref-vsphere-vro] to make proactive DRS
     * recommendations. <sup>\*</sup>
     */
    readonly drsEnablePredictiveDrs?: pulumi.Input<boolean>;
    /**
     * Allow individual DRS overrides to be
     * set for virtual machines in the cluster. Default: `true`.
     */
    readonly drsEnableVmOverrides?: pulumi.Input<boolean>;
    /**
     * Enable DRS for this cluster. Default: `false`.
     */
    readonly drsEnabled?: pulumi.Input<boolean>;
    /**
     * A value between `1` and `5` indicating
     * the threshold of imbalance tolerated between hosts. A lower setting will
     * tolerate more imbalance while a higher setting will tolerate less. Default:
     * `3`.
     */
    readonly drsMigrationThreshold?: pulumi.Input<number>;
    /**
     * The relative path to a folder to put this cluster in.
     * This is a path relative to the datacenter you are deploying the cluster to.
     * Example: for the `dc1` datacenter, and a provided `folder` of `foo/bar`,
     * Terraform will place a cluster named `terraform-compute-cluster-test` in a
     * host folder located at `/dc1/host/foo/bar`, with the final inventory path
     * being `/dc1/host/foo/bar/terraform-datastore-cluster-test`.
     */
    readonly folder?: pulumi.Input<string>;
    /**
     * When destroying the resource, setting this to
     * `true` will auto-remove any hosts that are currently a member of the cluster,
     * as if they were removed by taking their entry out of `host_system_ids` (see
     * below). This is an advanced
     * option and should only be used for testing. Default: `false`.
     */
    readonly forceEvacuateOnDestroy?: pulumi.Input<boolean>;
    /**
     * Defines the
     * [managed object IDs][docs-about-morefs] of hosts to use as dedicated failover
     * hosts. These hosts are kept as available as possible - admission control will
     * block access to the host, and DRS will ignore the host when making
     * recommendations.
     */
    readonly haAdmissionControlFailoverHostSystemIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The maximum number
     * of failed hosts that admission control tolerates when making decisions on
     * whether to permit virtual machine operations. The maximum is one less than
     * the number of hosts in the cluster. Default: `1`.
     * <sup>\*</sup>
     */
    readonly haAdmissionControlHostFailureTolerance?: pulumi.Input<number>;
    /**
     * The percentage of
     * resource reduction that a cluster of virtual machines can tolerate in case of
     * a failover. A value of 0 produces warnings only, whereas a value of 100
     * disables the setting. Default: `100` (disabled).
     */
    readonly haAdmissionControlPerformanceTolerance?: pulumi.Input<number>;
    /**
     * The type of admission control
     * policy to use with vSphere HA. Can be one of `resourcePercentage`,
     * `slotPolicy`, `failoverHosts`, or `disabled`. Default: `resourcePercentage`.
     */
    readonly haAdmissionControlPolicy?: pulumi.Input<string>;
    /**
     *
     * Automatically determine available resource percentages by subtracting the
     * average number of host resources represented by the
     * `ha_admission_control_host_failure_tolerance`
     * setting from the total amount of resources in the cluster. Disable to supply
     * user-defined values. Default: `true`.
     * <sup>\*</sup>
     */
    readonly haAdmissionControlResourcePercentageAutoCompute?: pulumi.Input<boolean>;
    /**
     * Controls the
     * user-defined percentage of CPU resources in the cluster to reserve for
     * failover. Default: `100`.
     */
    readonly haAdmissionControlResourcePercentageCpu?: pulumi.Input<number>;
    /**
     * Controls the
     * user-defined percentage of memory resources in the cluster to reserve for
     * failover. Default: `100`.
     */
    readonly haAdmissionControlResourcePercentageMemory?: pulumi.Input<number>;
    /**
     * Controls the
     * user-defined CPU slot size, in MHz. Default: `32`.
     */
    readonly haAdmissionControlSlotPolicyExplicitCpu?: pulumi.Input<number>;
    /**
     * Controls the
     * user-defined memory slot size, in MB. Default: `100`.
     */
    readonly haAdmissionControlSlotPolicyExplicitMemory?: pulumi.Input<number>;
    /**
     * Controls
     * whether or not you wish to supply explicit values to CPU and memory slot
     * sizes. The default is `false`, which tells vSphere to gather a automatic
     * average based on all powered-on virtual machines currently in the cluster.
     */
    readonly haAdmissionControlSlotPolicyUseExplicitSize?: pulumi.Input<boolean>;
    /**
     * A key/value map that specifies advanced
     * options for vSphere HA.
     */
    readonly haAdvancedOptions?: pulumi.Input<{
        [key: string]: any;
    }>;
    /**
     * Controls the action to take
     * on virtual machines if an APD status on an affected datastore clears in the
     * middle of an APD event. Can be one of `none` or `reset`. Default: `none`.
     * <sup>\*</sup>
     */
    readonly haDatastoreApdRecoveryAction?: pulumi.Input<string>;
    /**
     * Controls the action to take on
     * virtual machines when the cluster has detected loss to all paths to a
     * relevant datastore. Can be one of `disabled`, `warning`,
     * `restartConservative`, or `restartAggressive`.  Default: `disabled`.
     * <sup>\*</sup>
     */
    readonly haDatastoreApdResponse?: pulumi.Input<string>;
    /**
     * Controls the delay in minutes
     * to wait after an APD timeout event to execute the response action defined in
     * `ha_datastore_apd_response`. Default: `3`
     * minutes. <sup>\*</sup>
     */
    readonly haDatastoreApdResponseDelay?: pulumi.Input<number>;
    /**
     * Controls the action to take on
     * virtual machines when the cluster has detected a permanent device loss to a
     * relevant datastore. Can be one of `disabled`, `warning`, or
     * `restartAggressive`. Default: `disabled`.
     * <sup>\*</sup>
     */
    readonly haDatastorePdlResponse?: pulumi.Input<string>;
    /**
     * Enable vSphere HA for this cluster. Default:
     * `false`.
     */
    readonly haEnabled?: pulumi.Input<boolean>;
    /**
     * The list of managed object IDs for
     * preferred datastores to use for HA heartbeating. This setting is only useful
     * when `ha_heartbeat_datastore_policy` is set
     * to either `userSelectedDs` or `allFeasibleDsWithUserPreference`.
     */
    readonly haHeartbeatDatastoreIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The selection policy for HA
     * heartbeat datastores. Can be one of `allFeasibleDs`, `userSelectedDs`, or
     * `allFeasibleDsWithUserPreference`. Default:
     * `allFeasibleDsWithUserPreference`.
     */
    readonly haHeartbeatDatastorePolicy?: pulumi.Input<string>;
    /**
     * The action to take on virtual
     * machines when a host has detected that it has been isolated from the rest of
     * the cluster. Can be one of `none`, `powerOff`, or `shutdown`. Default:
     * `none`.
     */
    readonly haHostIsolationResponse?: pulumi.Input<string>;
    /**
     * Global setting that controls whether
     * vSphere HA remediates virtual machines on host failure. Can be one of `enabled`
     * or `disabled`. Default: `enabled`.
     */
    readonly haHostMonitoring?: pulumi.Input<string>;
    /**
     * Controls vSphere VM component
     * protection for virtual machines in this cluster. Can be one of `enabled` or
     * `disabled`. Default: `enabled`.
     * <sup>\*</sup>
     */
    readonly haVmComponentProtection?: pulumi.Input<string>;
    /**
     * The condition used to
     * determine whether or not virtual machines in a certain restart priority class
     * are online, allowing HA to move on to restarting virtual machines on the next
     * priority. Can be one of `none`, `poweredOn`, `guestHbStatusGreen`, or
     * `appHbStatusGreen`. The default is `none`, which means that a virtual machine
     * is considered ready immediately after a host is found to start it on.
     * <sup>\*</sup>
     */
    readonly haVmDependencyRestartCondition?: pulumi.Input<string>;
    /**
     * If a heartbeat from a virtual machine
     * is not received within this configured interval, the virtual machine is
     * marked as failed. The value is in seconds. Default: `30`.
     */
    readonly haVmFailureInterval?: pulumi.Input<number>;
    /**
     * The length of the reset window in
     * which `ha_vm_maximum_resets` can operate. When this
     * window expires, no more resets are attempted regardless of the setting
     * configured in `ha_vm_maximum_resets`. `-1` means no window, meaning an
     * unlimited reset time is allotted. The value is specified in seconds. Default:
     * `-1` (no window).
     */
    readonly haVmMaximumFailureWindow?: pulumi.Input<number>;
    /**
     * The maximum number of resets that HA will
     * perform to a virtual machine when responding to a failure event. Default: `3`
     */
    readonly haVmMaximumResets?: pulumi.Input<number>;
    /**
     * The time, in seconds, that HA waits after
     * powering on a virtual machine before monitoring for heartbeats. Default:
     * `120` (2 minutes).
     */
    readonly haVmMinimumUptime?: pulumi.Input<number>;
    /**
     * The type of virtual machine monitoring to use
     * when HA is enabled in the cluster. Can be one of `vmMonitoringDisabled`,
     * `vmMonitoringOnly`, or `vmAndAppMonitoring`. Default: `vmMonitoringDisabled`.
     */
    readonly haVmMonitoring?: pulumi.Input<string>;
    /**
     * Additional delay in seconds
     * after ready condition is met. A VM is considered ready at this point.
     * Default: `0` (no delay). <sup>\*</sup>
     */
    readonly haVmRestartAdditionalDelay?: pulumi.Input<number>;
    /**
     * The default restart priority
     * for affected virtual machines when vSphere detects a host failure. Can be one
     * of `lowest`, `low`, `medium`, `high`, or `highest`. Default: `medium`.
     */
    readonly haVmRestartPriority?: pulumi.Input<string>;
    /**
     * The maximum time, in seconds,
     * that vSphere HA will wait for virtual machines in one priority to be ready
     * before proceeding with the next priority. Default: `600` (10 minutes).
     * <sup>\*</sup>
     */
    readonly haVmRestartTimeout?: pulumi.Input<number>;
    /**
     * The timeout for each host maintenance mode
     * operation when removing hosts from a cluster. The value is specified in
     * seconds. Default: `3600` (1 hour).
     */
    readonly hostClusterExitTimeout?: pulumi.Input<number>;
    /**
     * The [managed object IDs][docs-about-morefs] of
     * the hosts to put in the cluster.
     */
    readonly hostSystemIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the cluster.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * Determines how the host
     * quarantine, maintenance mode, or virtual machine migration recommendations
     * made by proactive HA are to be handled. Can be one of `Automated` or
     * `Manual`. Default: `Manual`. <sup>\*</sup>
     */
    readonly proactiveHaAutomationLevel?: pulumi.Input<string>;
    /**
     * Enables Proactive HA. Default: `false`.
     * <sup>\*</sup>
     */
    readonly proactiveHaEnabled?: pulumi.Input<boolean>;
    /**
     * The configured remediation
     * for moderately degraded hosts. Can be one of `MaintenanceMode` or
     * `QuarantineMode`. Note that this cannot be set to `MaintenanceMode` when
     * `proactive_ha_severe_remediation` is set
     * to `QuarantineMode`. Default: `QuarantineMode`.
     * <sup>\*</sup>
     */
    readonly proactiveHaModerateRemediation?: pulumi.Input<string>;
    /**
     * The list of IDs for health update
     * providers configured for this cluster.
     * <sup>\*</sup>
     */
    readonly proactiveHaProviderIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The configured remediation for
     * severely degraded hosts. Can be one of `MaintenanceMode` or `QuarantineMode`.
     * Note that this cannot be set to `QuarantineMode` when
     * `proactive_ha_moderate_remediation` is
     * set to `MaintenanceMode`. Default: `QuarantineMode`.
     * <sup>\*</sup>
     */
    readonly proactiveHaSevereRemediation?: pulumi.Input<string>;
    /**
     * The IDs of any tags to attach to this resource. See
     * [here][docs-applying-tags] for a reference on how to apply tags.
     */
    readonly tags?: pulumi.Input<pulumi.Input<string>[]>;
}
