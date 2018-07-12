$( document ).ready(function() {

    thermostat = new Thermostat();

    thermostat.updateTemp = function() {
      $( ".temperature_readout" ).text(thermostat.temperature + '°C');
    };

    thermostat.powerDisplay = function() {
      if (thermostat.powerSavingStatus() === true) {
        return 'Power Saving Mode: ON';
      } else {
        return 'Power Saving Mode: OFF';
      }
    };

    thermostat.updatePowerDisplay = function() {
      $( ".power_readout").text(thermostat.powerDisplay);
    };

    $( ".temperature_readout" ).text(thermostat.temperature + '°C');

    $( ".power_readout").text(thermostat.powerDisplay);

    $( "#up_temperature_button" ).click(function( event ) {
        thermostat.upFunction();
        thermostat.updateTemp();
    });
    $( "#down_temperature_button" ).click(function( event ) {
      thermostat.downFunction();
      thermostat.updateTemp();
    });
    $( "#reset_temperature_button" ).click(function( event ) {
      thermostat.resetTemp();
      thermostat.updateTemp();
    });
    $( "#power_on_button" ).click(function( event ) {
      thermostat.powerSavingOn();
      thermostat.updatePowerDisplay();
    });
    $( "#power_off_button" ).click(function( event ) {
      thermostat.powerSavingOff();
      thermostat.updatePowerDisplay();
    });

});
