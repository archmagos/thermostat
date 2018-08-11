$( document ).ready(function() {

  retrieveWeather = function(city) {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather",
      data: {
          APPID: "2ec18a0fcd2565ed36b99ed465e203da",
          q: city || "London",
          units: "metric"
      },
      type: "GET",
      dataType : "json",
      })
      .done(function( json ) {
         $( ".weather_readout" ).text( 'Temperature in ' + json.name + ' is ' + json.main.temp + '°C' );
      })
      .fail(function( xhr, status, errorThrown ) {
        alert( "There was a problem loading weather information!" );
    });
  };

  window.onload = retrieveWeather();

  thermostat = new Thermostat();
  var city;

  thermostat.updateTemp = function() {
    $( ".temperature_readout" ).text(thermostat.temperature + '°C');
  };

  thermostat.updatePowerDisplay = function() {
    $( ".power_readout").text(thermostat.powerDisplay);
  };

  thermostat.powerDisplay = function() {
    if (thermostat.powerSavingStatus() === true) {
      return 'Power Saving Mode: ON';
    } else {
      return 'Power Saving Mode: OFF';
    }
  };

  thermostat.updateLight = function() {
    if (thermostat.energyUsage() === 'high-usage') {
      $('.energy_light').css({'background':'#DC6C66','box-shadow':'0 0 25px #DC291E'});
    } else if (thermostat.energyUsage() === 'low-usage') {
      $('.energy_light').css({'background':'#57D351','box-shadow':'0 0 25px #00EA00'});
    } else if (thermostat.energyUsage() === 'medium-usage') {
      $('.energy_light').css({'background':'#FEB85E','box-shadow':'0 0 25px #FF9D3B'});
    }
  };

  $( ".temperature_readout" ).text(thermostat.temperature + '°C');

  $( ".power_readout").text(thermostat.powerDisplay);

  $( "#up_temperature_button" ).click(function( event ) {
    thermostat.upFunction();
    thermostat.updateTemp();
    thermostat.updateLight();
  });

  $( "#down_temperature_button" ).click(function( event ) {
    thermostat.downFunction();
    thermostat.updateTemp();
    thermostat.updateLight();
  });

  $( "#reset_temperature_button" ).click(function( event ) {
    thermostat.resetTemp();
    thermostat.updateTemp();
    thermostat.updateLight();
  });

  $( "#power_on_button" ).click(function( event ) {
    thermostat.powerSavingOn();
    thermostat.updatePowerDisplay();
  });

  $( "#power_off_button" ).click(function( event ) {
    thermostat.powerSavingOff();
    thermostat.updatePowerDisplay();
  });

  $( "#city_select").change(function( event ) {
    retrieveWeather(this.value);
  });

});
