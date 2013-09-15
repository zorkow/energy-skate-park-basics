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
    VBox.call( this, {children: [new Text( "Skater Mass", new PhetFont( 14 ) ),
      new HSlider( new Range( 0.01, 30 ), new Dimension2( 100, 4 ), model.skater.massProperty, new Property( true ), {} )]} );
  }

  return inherit( VBox, MassSlider );
} );