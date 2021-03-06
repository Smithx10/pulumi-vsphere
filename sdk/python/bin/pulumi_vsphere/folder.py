# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class Folder(pulumi.CustomResource):
    """
    The `vsphere_folder` resource can be used to manage vSphere inventory folders.
    The resource supports creating folders of the 5 major types - datacenter
    folders, host and cluster folders, virtual machine folders, datastore folders,
    and network folders.
    
    Paths are always relative to the specific type of folder you are creating.
    Subfolders are discovered by parsing the relative path specified in `path`, so
    `foo/bar` will create a folder named `bar` in the parent folder `foo`, as long
    as that folder exists.
    """
    def __init__(__self__, __name__, __opts__=None, custom_attributes=None, datacenter_id=None, path=None, tags=None, type=None):
        """Create a Folder resource with the given unique name, props, and options."""
        if not __name__:
            raise TypeError('Missing resource name argument (for URN creation)')
        if not isinstance(__name__, basestring):
            raise TypeError('Expected resource name to be a string')
        if __opts__ and not isinstance(__opts__, pulumi.ResourceOptions):
            raise TypeError('Expected resource options to be a ResourceOptions instance')

        __props__ = dict()

        if custom_attributes and not isinstance(custom_attributes, dict):
            raise TypeError('Expected property custom_attributes to be a dict')
        __self__.custom_attributes = custom_attributes
        """
        Map of custom attribute ids to attribute 
        value strings to set for folder. See [here][docs-setting-custom-attributes]
        for a reference on how to set values for custom attributes.
        """
        __props__['customAttributes'] = custom_attributes

        if datacenter_id and not isinstance(datacenter_id, basestring):
            raise TypeError('Expected property datacenter_id to be a basestring')
        __self__.datacenter_id = datacenter_id
        """
        The ID of the datacenter the folder will be created in.
        Required for all folder types except for datacenter folders. Forces a new
        resource if changed.
        """
        __props__['datacenterId'] = datacenter_id

        if not path:
            raise TypeError('Missing required property path')
        elif not isinstance(path, basestring):
            raise TypeError('Expected property path to be a basestring')
        __self__.path = path
        """
        The path of the folder to be created. This is relative to
        the root of the type of folder you are creating, and the supplied datacenter.
        For example, given a default datacenter of `default-dc`, a folder of type
        `vm` (denoting a virtual machine folder), and a supplied folder of
        `terraform-test-folder`, the resulting path would be
        `/default-dc/vm/terraform-test-folder`.
        """
        __props__['path'] = path

        if tags and not isinstance(tags, list):
            raise TypeError('Expected property tags to be a list')
        __self__.tags = tags
        """
        The IDs of any tags to attach to this resource. See
        [here][docs-applying-tags] for a reference on how to apply tags.
        """
        __props__['tags'] = tags

        if not type:
            raise TypeError('Missing required property type')
        elif not isinstance(type, basestring):
            raise TypeError('Expected property type to be a basestring')
        __self__.type = type
        """
        The type of folder to create. Allowed options are
        `datacenter` for datacenter folders, `host` for host and cluster folders,
        `vm` for virtual machine folders, `datastore` for datastore folders, and
        `network` for network folders. Forces a new resource if changed.
        """
        __props__['type'] = type

        super(Folder, __self__).__init__(
            'vsphere:index/folder:Folder',
            __name__,
            __props__,
            __opts__)

    def set_outputs(self, outs):
        if 'customAttributes' in outs:
            self.custom_attributes = outs['customAttributes']
        if 'datacenterId' in outs:
            self.datacenter_id = outs['datacenterId']
        if 'path' in outs:
            self.path = outs['path']
        if 'tags' in outs:
            self.tags = outs['tags']
        if 'type' in outs:
            self.type = outs['type']
