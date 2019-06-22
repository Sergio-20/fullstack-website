$( document ).ready( () => {

  $( document ).scroll( () => {

    if( $( document ).width() >= 1024 )
    {
      $ ("header" ).css( { position: "fixed", top: "0rem" } );
      $( ".trending-section" ).css( "margin-top", "8rem" );
    }

  });

});
