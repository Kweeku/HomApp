'use strict';
/* Unit list
  Generated from FIESTA IoT ontology with this Jena SPARQL script:
  1 PREFIX qu:<http://purl.org/NET/ssnx/qu/qu#>
  2 PREFIX rdfs:<http://www.w3.org/2000/01/rdf-schema#>
  3 PREFIX ssn:<http://purl.oclc.org/NET/ssnx/ssn#>
  4 SELECT (strafter(str(?subClass), "#") AS ?quantityKind)
  5 WHERE { ?subClass rdfs:subClassOf* ssn:SensorKind. } 
  $ bin/sparql --data=http://ontology.fiesta-iot.eu/ontologyDocs/fiesta-iot.owl --query=./rq --results=TSV
  Reference paper: R. Agarwal, D. Farnandez, T. Elsaleh, A.Gyrard, J. Lanza, L. Sanchez, N. Georgantas, V. Issarny, "Unified IoT Ontology to Enable Interoperability and Federation of Testbeds", 3rd IEEE WF-IoT, pp. 70-75, Reston USA, 12-14 December 2016
*/

Object.defineProperty(exports, "__esModule", {
  value: true
});
var dic = [{ id: "Ampere", label: "A" }, { id: "Bar", label: "bar" }, { id: "BeatPerMinute", label: "BeatPerMinute" }, { id: "Candela", label: "cd" }, { id: "Centibar", label: "centibar" }, { id: "Centimetre", label: "cm" }, { id: "Coulomb", label: "C" }, { id: "Day", label: "d" }, { id: "Decibel", label: "dB" }, { id: "DecibelA", label: "dB(A)" }, { id: "DecibelMilliwatt", label: "dBm" }, { id: "DegreeAngle", label: "°" }, { id: "DegreeAnglePerSecond", label: "°/s" }, { id: "DegreeCelsius", label: "°C" }, { id: "DegreeFahrenheit", label: "°F" }, { id: "Dimensionless", label: "" }, { id: "EAQI", label: "EAQI" }, { id: "Farad", label: "F" }, { id: "Gauss", label: "G" }, { id: "Gram", label: "g" }, { id: "GramPerCubicMetre", label: "g/m³" }, { id: "GramPerLitre", label: "g/L" }, { id: "Hertz", label: "Hz" }, { id: "Hour", label: "h" }, { id: "Joule", label: "J" }, { id: "Kelvin", label: "K" }, { id: "KilobitsPerSecond", label: "Kbit/s" }, { id: "Kilogram", label: "kg" }, { id: "KilogramPerCubicMetre", label: "kg/m³" }, { id: "Kilometre", label: "km" }, { id: "KilometrePerHour", label: "km/h" }, { id: "KiloPascal", label: "kPa" }, { id: "KiloWattHour", label: "kWh" }, { id: "Litre", label: "L" }, { id: "LitrePer100Kilometres", label: "L/100km" }, { id: "Lumen", label: "lm" }, { id: "Lux", label: "lx" }, { id: "Metre", label: "m" }, { id: "MetrePerSecond", label: "m/s" }, { id: "MetrePerSecondSquare", label: "m/s²" }, { id: "Microampere", label: "μA" }, { id: "Microgram", label: "μg" }, { id: "MicrogramPerCubicMetre", label: "μg/m³" }, { id: "MicroSiemens", label: "μS" }, { id: "Microvolt", label: "μV" }, { id: "Microwatt", label: "μW" }, { id: "MicrowattPerSquareCentimetre", label: "μW/cm²" }, { id: "Milliampere", label: "mA" }, { id: "Millibar", label: "mbar" }, { id: "Milligram", label: "mg" }, { id: "MilligramPerCubicMetre", label: "mg/m³" }, { id: "MilligramPerLitre", label: "mg/L" }, { id: "MilligramPerDecilitre", label: "mg/dL" }, { id: "MilligramPerSquareMetre", label: "mg/m²" }, { id: "Millilitre", label: "mL" }, { id: "Millimetre", label: "mm" }, { id: "MillimetreMercure", label: "mmHg" }, { id: "MillimetrePerHour", label: "mm/h" }, { id: "MilliMolPerLitre", label: "mmol/L" }, { id: "Millisecond", label: "ms" }, { id: "Millivolt", label: "mV" }, { id: "MillivoltPerMetre", label: "mV/m" }, { id: "Milliwatt", label: "mW" }, { id: "MinuteAngle", label: "arcmin" }, { id: "MinuteTime", label: "min" }, { id: "Ohm", label: "Ω" }, { id: "Okta", label: "Okta" }, { id: "Other", label: "" }, { id: "PartsPerBillion", label: "ppb" }, { id: "PartsPerMillion", label: "ppm" }, { id: "Pascal", label: "P" }, { id: "Percent", label: "%" }, { id: "Radian", label: "rad" }, { id: "RadianPerSecond", label: "rad/s" }, { id: "RadiationParticlesPerMinute", label: "cpm" }, { id: "RevolutionsPerMinute", label: "rpm" }, { id: "SecondAngle", label: "secarc" }, { id: "SecondTime", label: "s" }, { id: "Siemens", label: "S" }, { id: "SiemensPerMetre", label: "S/m" }, { id: "Tesla", label: "T" }, { id: "Tonne", label: "t" }, { id: "Volt", label: "V" }, { id: "VoltAmpereReactive", label: "var" }, { id: "VoltPerMeter", label: "V/m" }, { id: "Watt", label: "W" }, { id: "WattPerSquareMetre", label: "W/m²" }, { id: "Weber", label: "Wb" }, { id: "Year", label: "a" }];

function getAll() {
  return dic;
}

function getUnit(id) {
  return dic.find(function (u) {
    return u.id == id;
  });
}

function getLabel(id) {
  var u = dic.find(function (u) {
    return u.id == id;
  });
  return u ? u.label : "";
}

var _exports = { getAll: getAll, getUnit: getUnit, getLabel: getLabel };
exports.default = _exports;