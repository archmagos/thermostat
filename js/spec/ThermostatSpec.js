describe('Thermostat', function () {

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat temperature profile', function() {
    it('has a starting temperature of 20 degrees', function() {
      expect(thermostat._temperature).toEqual(20);
    });
    it('has a minimum temperature of 10 degrees', function() {
      thermostat._temperature = 10;
      expect( function(){ thermostat.downFunction(); }).toThrowError('Minimum temperature reached.');
    });
  });

  describe('temperature control', function() {
    it('can be increased with an up function', function() {
      thermostat.upFunction();
      expect(thermostat._temperature).toEqual(21);
    });
    it('can be decreased with a down function', function() {
      thermostat.downFunction();
      expect(thermostat._temperature).toEqual(19);
    });
    it('can be reset to 20', function() {
      thermostat.downFunction();
      thermostat.resetTemp();
      expect(thermostat._temperature).toEqual(20);
    });
  });

  describe('power saving', function() {
    it('is set to on as a default', function() {
      expect(thermostat._powerSaving).toEqual(true);
    });
    it('can be turned off', function() {
      thermostat.powerSavingOff();
      expect(thermostat._powerSaving).toEqual(false);
    });
    it('can be turned on', function() {
      thermostat.powerSavingOff();
      thermostat.powerSavingOn();
      expect(thermostat._powerSaving).toEqual(true);
    });
    it('has a maximum temperature of 25 if power saving is on', function() {
      thermostat._temperature = 25;
      expect( function(){ thermostat.upFunction(); }).toThrowError('Maximum temperature reached.');
    });
    it('has a maximum temperature of 32 if power saving is off', function() {
      thermostat._temperature = 32;
      thermostat.powerSavingOff();
      expect( function(){ thermostat.upFunction(); }).toThrowError('Maximum temperature reached.');
    });
  });

  describe('temperature display', function() {
    it('displays temperature < 18 as low-usage', function() {
      thermostat._temperature = 15;
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });
    it('displays temperature 19-25 as medium-usage', function() {
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });
    it('displays temperature 26+ as high-usage', function() {
      thermostat._temperature = 30;
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });

  });
});
