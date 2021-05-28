import {AudioVisualProd} from "./audio-visual-prod";

export interface TVShow extends AudioVisualProd{
  overview?: string;
  status?: boolean;
}
