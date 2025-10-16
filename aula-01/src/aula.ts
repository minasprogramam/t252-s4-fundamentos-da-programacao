
import videosJson from "../data/videos.json";

export interface Video {
  titulo: string;
  canal: string;
  canalVerificado: boolean;
  duracaoSeg: number;
  views: number;
  like: number;
  dislike: number;
  categoria: string;
  tags: string[];
  descricao: string;
  url: string;
}

const videos: Video[] = videosJson as Video[];

console.log(videos);
