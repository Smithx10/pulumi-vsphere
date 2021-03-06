# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class License(pulumi.CustomResource):
    """
    Provides a VMware vSphere license resource. This can be used to add and remove license keys.
    """
    def __init__(__self__, __name__, __opts__=None, labels=None, license_key=None):
        """Create a License resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if labels and not isinstance(labels, dict):
            raise TypeError('Expected property labels to be a dict')
        __self__.labels = labels
        """
        A map of key/value pairs to be attached as labels (tags) to the license key.
        """
        __props__['labels'] = labels

        if not license_key:
            raise TypeError('Missing required property license_key')
        elif not isinstance(license_key, basestring):
            raise TypeError('Expected property license_key to be a basestring')
        __self__.license_key = license_key
        """
        The license key to add.
        """
        __props__['licenseKey'] = license_key

        __self__.edition_key = pulumi.runtime.UNKNOWN
        """
        The product edition of the license key.
        """
        __self__.name = pulumi.runtime.UNKNOWN
        """
        The display name for the license.
        """
        __self__.total = pulumi.runtime.UNKNOWN
        """
        Total number of units (example: CPUs) contained in the license.
        """
        __self__.used = pulumi.runtime.UNKNOWN
        """
        The number of units (example: CPUs) assigned to this license.
        """

        super(License, __self__).__init__(
            'vsphere:index/license:License',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'editionKey' in outs:
            self.edition_key = outs['editionKey']
        if 'labels' in outs:
            self.labels = outs['labels']
        if 'licenseKey' in outs:
            self.license_key = outs['licenseKey']
        if 'name' in outs:
            self.name = outs['name']
        if 'total' in outs:
            self.total = outs['total']
        if 'used' in outs:
            self.used = outs['used']
