# coding=utf-8
# *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
# *** Do not edit by hand unless you're certain you know what you are doing! ***

import pulumi
import pulumi.runtime

class GetTagResult(object):
    """
    A collection of values returned by getTag.
    """
    def __init__(__self__, description=None, id=None):
        if description and not isinstance(description, basestring):
            raise TypeError('Expected argument description to be a basestring')
        __self__.description = description
        if id and not isinstance(id, basestring):
            raise TypeError('Expected argument id to be a basestring')
        __self__.id = id
        """
        id is the provider-assigned unique ID for this managed resource.
        """

def get_tag(category_id=None, name=None):
    """
    The `vsphere_tag` data source can be used to reference tags that are not
    managed by Terraform. Its attributes are exactly the same as the [`vsphere_tag`
    resource][resource-tag], and, like importing, the data source takes a name and
    category to search on. The `id` and other attributes are then populated with
    the data found by the search.
    
    [resource-tag]: /docs/providers/vsphere/r/tag.html
    
    ~> **NOTE:** Tagging support is unsupported on direct ESXi connections and
    requires vCenter 6.0 or higher.
    """
    __args__ = dict()

    __args__['categoryId'] = category_id
    __args__['name'] = name
    __ret__ = pulumi.runtime.invoke('vsphere:index/getTag:getTag', __args__)

    return GetTagResult(
        description=__ret__.get('description'),
        id=__ret__.get('id'))
