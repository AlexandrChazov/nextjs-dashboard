import {Inter} from "next/font/google";
import {Lusitana} from "next/font/google";

// Во время билда шрифты загрузятся с сайта и автоматически будут положены в папку assets
// При вызове функции создаётся инстанс шрифта на хостинге, если выполнить вызов функции несколько раз, то создастся
// несколько инстансов, поэтому функцию нужно вызывать один раз и импортировать переменную в других файлах
export const inter = Inter({subsets: ['latin']})
export const lusitana = Lusitana({subsets: ['latin'], weight: ["400", "700"]})