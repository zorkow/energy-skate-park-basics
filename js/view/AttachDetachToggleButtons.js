// Copyright 2002-2013, University of Colorado Boulder

/**
 * Scenery node for the control panel, with view settings and controls.
 *
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var HBox = require( 'SCENERY/nodes/HBox' );
  var Image = require( 'SCENERY/nodes/Image' );
  var Panel = require( 'SUN/Panel' );
  var detachIcon = require( 'image!ENERGY_SKATE_PARK_BASICS/detach.png' );
  var attachIcon = require( 'image!ENERGY_SKATE_PARK_BASICS/attach.png' );
  var RadioButton = require( 'SUN/RadioButton' );

  function AttachDetachToggleButtons( model ) {
    var scale = 0.060;
    var selectedStroke = 'black';
    var deselectedStroke = 'white';
    var attachButton = new RadioButton( model.property( 'detachable' ), false, new Panel( new Image( attachIcon, {scale: scale} ), {stroke: selectedStroke} ), new Panel( new Image( attachIcon, {scale: scale} ), {stroke: deselectedStroke} ) );
    var detachButton = new RadioButton( model.property( 'detachable' ), true, new Panel( new Image( detachIcon, {scale: scale} ), {stroke: selectedStroke} ), new Panel( new Image( detachIcon, {scale: scale} ), {stroke: deselectedStroke} ) );
    var hbox = new HBox( {spacing: 20, align: 'top', children: [attachButton, detachButton]} );
    Panel.call( this, hbox, {fill: '#dddddd', stroke: null} );
  }

  return inherit( Panel, AttachDetachToggleButtons, {
  } );
} );