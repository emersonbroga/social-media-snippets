const band = {
  vocals: "Kiedis",
  bass: "Flea",
  drums: "Smith",
  guitar: "frusciante",
};

const selected = ["bass", "guitar"];

const selectedBandMembers = JSON.stringify(band, selected);

// "{\"bass\":\"Flea\",\"guitar\":\"frusciante\"}"
