var Thermostat = function() {
  const STARTING_TEMP = 20;
  this._temperature = STARTING_TEMP;
  this._powerSaving = true;
};

Thermostat.prototype.upFunction = function() {
  if (this._powerSaving === true && this._temperature >= 25) {
    throw new Error ('Maximum temperature reached.');
  } else if (this._powerSaving === false && this._temperature >= 32) {
      throw new Error ('Maximum temperature reached.');
  } else {
      this._temperature ++;
  }
};

Thermostat.prototype.downFunction = function() {
  if(this._temperature <= 10) throw new Error ('Minimum temperature reached.');
  this._temperature --;
};

Thermostat.prototype.resetTemp = function() {
  this._temperature = 20;
};

Thermostat.prototype.powerSavingOn = function() {
  this._powerSaving = true;
};

Thermostat.prototype.powerSavingOff = function() {
  this._powerSaving = false;
};

Thermostat.prototype.energyUsage = function() {
  if (this._temperature < 18) {
    return 'low-usage';
  } else if (this._temperature > 25) {
    return 'high-usage';
  } else {
    return 'medium-usage';
  };
};
