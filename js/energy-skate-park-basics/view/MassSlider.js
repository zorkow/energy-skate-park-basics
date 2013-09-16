// Copyright 2002-2013, University of Colorado Boulder

/**
 * Scenery node for the mass slider.
 * @author Sam Reid
 */
define( function( require ) {
  'use strict';

  var inherit = require( 'PHET_CORE/inherit' );
  var Node = require( 'SCENERY/nodes/Node' );
  var VBox = require( 'SCENERY/nodes/VBox' );
  var Panel = require( 'SUN/Panel' );
  var CheckBox = require( 'SUN/CheckBox' );
  var Text = require( 'SCENERY/nodes/Text' );
  var images = require( 'ENERGY_SKATE_PARK/energy-skate-park-basics-images' );
  var PhetFont = require( 'SCENERY_PHET/PhetFont' );
  var HSlider = require( 'SUN/HSlider' );
  var Range = require( 'DOT/Range' );
  var Dimension2 = require( 'DOT/Dimension2' );
  var Property = require( 'AXON/Property' );

  function MassSlider( model, view ) {
    var slider = new HSlider( new Range( 10, 110 ), new Dimension2( 100, 4 ), model.skater.massProperty, new Property( true ), {} );
    var tickFont = new PhetFont( 10 );
    slider.addMajorTick( 10, new Text( 'Small', { font: tickFont } ) );
    slider.addMajorTick( 110, new Text( 'Large', { font: tickFont } ) );
    VBox.call( this, {children: [new Text( "Skater Mass", new PhetFont( 14 ) ), slider]} );
  }

  return inherit( VBox, MassSlider );
} );