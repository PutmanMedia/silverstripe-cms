(function($) {

	$.entwine('ss.tree', function($){
		$('.cms-tree').entwine({
			getTreeConfig: function() {
				var self = this, config = this._super(), hints = this.getHints();
				config.plugins.push('contextmenu');
				config.contextmenu = {
					'items': function(node) {
						
						// Build a list for allowed children as submenu entries
						var pagetype = node.data('pagetype');
						var id = node.data('id');

						var allowedChildren = new Object;
						$(hints[pagetype].allowedChildren).each(
							function(key, val){
								allowedChildren["allowedchildren-" + key ] = {
									'label': '<span class="jstree-pageicon"></span>' + val.ssname,
									'_class': 'class-' + val.ssclass,
								'action': function(obj) {
									$('.cms-container').entwine('.ss').loadPanel(ss.i18n.sprintf(
											self.data('urlAddpage'), id, val.ssclass
									));
								}
							};
						}				
						);
						var menuitems = 
								{
								'edit': {
									'label': ss.i18n._t('Tree.EditPage'),
									'action': function(obj) {
										$('.cms-container').entwine('.ss').loadPanel(ss.i18n.sprintf(
											self.data('urlEditpage'), obj.data('id')
										));
									}
									}
						};

						// Add "show as list"
						if(!node.hasClass('nochildren')) {
							menuitems['showaslist'] = {
								'label': ss.i18n._t('Tree.ShowAsList'),
								'action': function(obj) {
									$('.cms-container').entwine('.ss').loadPanel(
										self.data('urlListview') + '&ParentID=' + obj.data('id'),
										null,
										// Default to list view tab
										{tabState: {'pages-controller-cms-content': {'tabSelector': '.content-listview'}}}
									);
								}
							};
						}

						// Add "show as list"
						if(!node.hasClass('nochildren')) {
							menuitems['showaslist'] = {
								'label': ss.i18n._t('Tree.ShowAsList'),
								'action': function(obj) {
									$('.cms-container').entwine('.ss').loadPanel(
										self.data('urlListview') + '&ParentID=' + obj.data('id'),
										null,
										// Default to list view tab
										{tabState: {'pages-controller-cms-content': {'tabSelector': '.content-listview'}}}
									);
								}
							};
						}

						// Test if there are any allowed Children and thus the possibility of adding some 
						if(allowedChildren.hasOwnProperty('allowedchildren-0')) {
							menuitems['addsubpage'] = {
									'label': ss.i18n._t('Tree.AddSubPage'),
									'submenu': allowedChildren
								};
						}				
						return menuitems;
					} 
				};
				return config;
			}
		});
	});

}(jQuery));
