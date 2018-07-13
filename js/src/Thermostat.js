'use strict';

var Thermostat = function() {
  this.STARTING_TEMP = 20;
  this.temperature = this.STARTING_TEMP;
  this.powerSaving = true;
};

Thermostat.prototype.currentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.powerSavingStatus = function() {
  return this.powerSaving;
};

Thermostat.prototype.upFunction = function() {
  if (this.powerSavingStatus() === true && this.currentTemperature() >= 25) {
    throw new Error ('Maximum temperature reached.');
  } else if (this.powerSavingStatus() === false && this.currentTemperature() >= 32) {
      throw new Error ('Maximum temperature reached.');
  } else {
      this.temperature ++;
  }
};

Thermostat.prototype.downFunction = function() {
  if(this.currentTemperature() <= 10) throw new Error ('Minimum temperature reached.');
  this.temperature --;
};

Thermostat.prototype.resetTemp = function() {
  this.temperature = 20;
};

Thermostat.prototype.powerSavingOn = function() {
  this.powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this.powerSaving = false;
  if (this.currentTemperature() > 25) {
    this.temperature = 25;
  }
};

Thermostat.prototype.energyUsage = function() {
  if (this.currentTemperature() < 18) {
    return 'low-usage';
  } else if (this.currentTemperature() > 25) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  }
};
