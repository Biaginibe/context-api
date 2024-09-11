import iCamera from "./camera.png";
import iEmf from "./emf.png";
import iFlashlight from "./flashlight.png";
import iGhostDiary from "./ghost-diary.png";
import iGhostTrap from "./ghost-trap.png";
import iProtectionAmule from "./protection-amule.png";
import iSalt from "./salt.png";
import iSpiritBox from "./spirit-box.png";
import iThermo from "./termometro.png";

type Images = {
  emf: string;
  termometro: string;
  camera: string;
  ghostDiary: string;
  ghostTrap: string;
  spiritBox: string;
  salt: string;
  flashlight: string;
  protectionAmule: string;
};

export const images: Images = {
  emf: iEmf,
  termometro: iThermo,
  camera: iCamera,
  ghostDiary: iGhostDiary,
  ghostTrap: iGhostTrap,
  spiritBox: iSpiritBox,
  salt: iSalt,
  flashlight: iFlashlight,
  protectionAmule: iProtectionAmule,
};
