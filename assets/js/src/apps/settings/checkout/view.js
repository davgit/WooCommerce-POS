var SettingsView = require('lib/config/settings-view');
var $ = require('jquery');
var App = require('lib/config/application');
var Tooltip = require('lib/behaviors/tooltip');
var Sortable = require('lib/behaviors/sortable');

var View = SettingsView.extend({

  onRender: function(){
    var self = this;
    this.$('input, select, textarea').each(function(){
      var name = $(this).attr('name');
      if(name){
        self.addBinding(null, '*[name="' + name + '"]', name);
      }
    });
    this.modalTmpl = this.$('#tmpl-gateway-settings-modal').html();
  },

  ui: {
    settings: '.gateway-settings'
  },

  events: {
    'click @ui.settings': 'openGatewaySettingsModal'
  },

  behaviors: {
    Tooltip: {
      behaviorClass: Tooltip
    },
    Sortable: {
      behaviorClass: Sortable
    }
  },

  openGatewaySettingsModal: function(e){
    e.preventDefault();
    var gateway = $(e.target).data('gateway');
    this.trigger('open:modal', gateway, this);
  }

});

module.exports = View;
App.prototype.set('SettingsApp.Checkout.View');