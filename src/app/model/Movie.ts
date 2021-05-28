import {AudioVisualProd} from "./audio-visual-prod";

export interface Movie extends AudioVisualProd{
  plot?: string;
  seen?: boolean;
}
