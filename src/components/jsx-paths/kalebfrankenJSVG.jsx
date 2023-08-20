export const kalebfrankenJSVG = 
<svg width="100%"  xmlns="http://www.w3.org/2000/svg" 
viewBox="-200 -5 900 150"  
>
<defs>
  <filter id="editing-neon" x="-100%" y="-100%" width="300%" height="300%">
    <feFlood flood-color="#00afff" result="flood"></feFlood>
    <feComposite operator="in" in="flood" in2="SourceAlpha" result="color"></feComposite>
    <feFlood flood-color="#00afff" result="flood2"></feFlood><feComposite operator="in" in="flood2" in2="SourceAlpha" result="color2"></feComposite>
    <feMorphology operator="dilate" radius="2" in="color" result="dilate"></feMorphology>
    <feGaussianBlur stdDeviation="6" in="color" result="blur1"></feGaussianBlur>
    <feGaussianBlur stdDeviation="2.5" in="color" result="blur2"></feGaussianBlur>
    <feGaussianBlur stdDeviation="1" in="SourceAlpha" result="blur3"></feGaussianBlur>
    <feGaussianBlur stdDeviation="6" in="dilate" result="blur4"></feGaussianBlur>
    <feConvolveMatrix in="color2" result="conv" order="3,3" divisor="1" kernelMatrix="1 1 1  1 1 1  1 1 1"></feConvolveMatrix>
    <feMerge><feMergeNode in="blur1"></feMergeNode>
    <feMergeNode in="blur2"></feMergeNode>
    <feMergeNode in="blur4"></feMergeNode>
    <feMergeNode in="blur3"></feMergeNode>
    <feMergeNode in="blur3"></feMergeNode>
    <feMergeNode in="blur3"></feMergeNode>
    <feMergeNode in="blur3"></feMergeNode>
    <feMergeNode in="conv"></feMergeNode>
    <feMergeNode in="SourceGraphic"></feMergeNode>
  </feMerge>
  </filter>
</defs>
<g filter="url(#editing-neon)">
<g transform="translate(-52.43504476547241, 103.16000175476074)">

<path d="M33.58-26.26L60.57 0L47.06 0L25.63-21.46L18.93-21.46L18.93-31.05L25.63-31.05L47.06-52.51L60.57-52.51L33.58-26.26ZM15.12-52.51L15.12 0L5.60 0L5.60-52.51L15.12-52.51ZM106.02-26.48L106.02-13.11L106.02-13.11Q106.02-11.13 105.32-8.84L105.32-8.84L105.32-8.84Q104.63-6.56 103.07-4.60L103.07-4.60L103.07-4.60Q101.51-2.64 99.01-1.32L99.01-1.32L99.01-1.32Q96.50 0 92.91 0L92.91 0L75.73 0L75.73 0Q73.75 0 71.47-0.70L71.47-0.70L71.47-0.70Q69.18-1.39 67.22-2.95L67.22-2.95L67.22-2.95Q65.26-4.50 63.94-7.01L63.94-7.01L63.94-7.01Q62.62-9.52 62.62-13.11L62.62-13.11L62.62-13.11Q62.62-15.09 63.32-17.40L63.32-17.40L63.32-17.40Q64.01-19.70 65.57-21.66L65.57-21.66L65.57-21.66Q67.13-23.62 69.64-24.94L69.64-24.94L69.64-24.94Q72.14-26.26 75.73-26.26L75.73-26.26L92.91-26.26L92.91-17.18L75.73-17.18L75.73-17.18Q73.79-17.18 72.73-15.99L72.73-15.99L72.73-15.99Q71.67-14.79 71.67-13.04L71.67-13.04L71.67-13.04Q71.67-11.17 72.89-10.13L72.89-10.13L72.89-10.13Q74.12-9.08 75.81-9.08L75.81-9.08L92.91-9.08L92.91-9.08Q94.85-9.08 95.91-10.25L95.91-10.25L95.91-10.25Q96.97-11.43 96.97-13.18L96.97-13.18L96.97-26.48L96.97-26.48Q96.97-28.34 95.82-29.44L95.82-29.44L95.82-29.44Q94.67-30.54 92.91-30.54L92.91-30.54L72.00-30.54L72.00-39.59L92.91-39.59L92.91-39.59Q94.89-39.59 97.17-38.89L97.17-38.89L97.17-38.89Q99.46-38.20 101.42-36.64L101.42-36.64L101.42-36.64Q103.38-35.08 104.70-32.57L104.70-32.57L104.70-32.57Q106.02-30.07 106.02-26.48L106.02-26.48ZM131.54-9.52L131.54 0L127.29 0L127.29 0Q125.24 0 122.92-0.70L122.92-0.70L122.92-0.70Q120.59-1.39 118.58-2.98L118.58-2.98L118.58-2.98Q116.56-4.58 115.25-7.12L115.25-7.12L115.25-7.12Q113.93-9.67 113.93-13.37L113.93-13.37L113.93-56.32L123.45-56.32L123.45-13.37L123.45-13.37Q123.45-11.61 124.55-10.57L124.55-10.57L124.55-10.57Q125.65-9.52 127.29-9.52L127.29-9.52L131.54-9.52ZM180.25-26.48L180.25-26.48L180.25-26.48Q180.25-24.50 179.55-22.21L179.55-22.21L179.55-22.21Q178.86-19.92 177.30-17.96L177.30-17.96L177.30-17.96Q175.74-16.00 173.24-14.69L173.24-14.69L173.24-14.69Q170.73-13.37 167.14-13.37L167.14-13.37L149.96-13.37L149.96-22.41L167.14-22.41L167.14-22.41Q169.08-22.41 170.14-23.60L170.14-23.60L170.14-23.60Q171.20-24.79 171.20-26.55L171.20-26.55L171.20-26.55Q171.20-28.42 170.01-29.48L170.01-29.48L170.01-29.48Q168.82-30.54 167.14-30.54L167.14-30.54L149.96-30.54L149.96-30.54Q148.02-30.54 146.96-29.35L146.96-29.35L146.96-29.35Q145.90-28.16 145.90-26.40L145.90-26.40L145.90-13.11L145.90-13.11Q145.90-11.21 147.09-10.14L147.09-10.14L147.09-10.14Q148.28-9.08 150.04-9.08L150.04-9.08L167.14-9.08L167.14 0L149.96 0L149.96 0Q147.99 0 145.70-0.70L145.70-0.70L145.70-0.70Q143.41-1.39 141.45-2.95L141.45-2.95L141.45-2.95Q139.49-4.50 138.17-7.01L138.17-7.01L138.17-7.01Q136.85-9.52 136.85-13.11L136.85-13.11L136.85-26.48L136.85-26.48Q136.85-28.45 137.55-30.74L137.55-30.74L137.55-30.74Q138.24-33.03 139.80-34.99L139.80-34.99L139.80-34.99Q141.36-36.95 143.87-38.27L143.87-38.27L143.87-38.27Q146.37-39.59 149.96-39.59L149.96-39.59L167.14-39.59L167.14-39.59Q169.12-39.59 171.41-38.89L171.41-38.89L171.41-38.89Q173.69-38.20 175.65-36.64L175.65-36.64L175.65-36.64Q177.61-35.08 178.93-32.57L178.93-32.57L178.93-32.57Q180.25-30.07 180.25-26.48ZM230.31-26.26L230.31-13.37L230.31-13.37Q230.31-12.01 230.00-10.51L230.00-10.51L230.00-10.51Q229.69-9.01 229.03-7.53L229.03-7.53L229.03-7.53Q228.37-6.04 227.33-4.69L227.33-4.69L227.33-4.69Q226.28-3.33 224.80-2.29L224.80-2.29L224.80-2.29Q223.32-1.25 221.37-0.62L221.37-0.62L221.37-0.62Q219.43 0 216.98 0L216.98 0L199.80 0L199.80 0Q198.45 0 196.95-0.31L196.95-0.31L196.95-0.31Q195.45-0.62 193.96-1.28L193.96-1.28L193.96-1.28Q192.48-1.94 191.13-2.98L191.13-2.98L191.13-2.98Q189.77-4.03 188.73-5.51L188.73-5.51L188.73-5.51Q187.68-6.99 187.06-8.95L187.06-8.95L187.06-8.95Q186.44-10.91 186.44-13.37L186.44-13.37L186.44-56.32L195.96-56.32L195.96-13.37L195.96-13.37Q195.96-11.61 197.06-10.57L197.06-10.57L197.06-10.57Q198.16-9.52 199.80-9.52L199.80-9.52L216.98-9.52L216.98-9.52Q218.77-9.52 219.78-10.58L219.78-10.58L219.78-10.58Q220.79-11.65 220.79-13.37L220.79-13.37L220.79-26.26L220.79-26.26Q220.79-28.05 219.73-29.06L219.73-29.06L219.73-29.06Q218.66-30.07 216.98-30.07L216.98-30.07L199.80-30.07L199.80-39.59L216.98-39.59L216.98-39.59Q218.33-39.59 219.84-39.28L219.84-39.28L219.84-39.28Q221.34-38.96 222.82-38.31L222.82-38.31L222.82-38.31Q224.30-37.65 225.66-36.60L225.66-36.60L225.66-36.60Q227.01-35.56 228.04-34.08L228.04-34.08L228.04-34.08Q229.06-32.59 229.69-30.65L229.69-30.65L229.69-30.65Q230.31-28.71 230.31-26.26L230.31-26.26ZM307.32-31.05L307.32-21.46L277.22-21.46L277.22-31.05L307.32-31.05ZM311.57-52.51L311.57-42.99L273.41-42.99L273.41 0L263.89 0L263.89-47.72L263.89-47.72Q263.89-48.71 264.26-49.58L264.26-49.58L264.26-49.58Q264.62-50.46 265.26-51.12L265.26-51.12L265.26-51.12Q265.91-51.78 266.78-52.15L266.78-52.15L266.78-52.15Q267.66-52.51 268.69-52.51L268.69-52.51L311.57-52.51ZM351.42-39.59L351.42-30.07L329.99-30.07L329.99-30.07Q328.05-30.07 327.06-29.10L327.06-29.10L327.06-29.10Q326.07-28.13 326.07-26.26L326.07-26.26L326.07 0L316.55 0L316.55-26.26L316.55-26.26Q316.55-28.71 317.18-30.65L317.18-30.65L317.18-30.65Q317.80-32.59 318.84-34.08L318.84-34.08L318.84-34.08Q319.89-35.56 321.24-36.60L321.24-36.60L321.24-36.60Q322.60-37.65 324.08-38.31L324.08-38.31L324.08-38.31Q325.56-38.96 327.08-39.28L327.08-39.28L327.08-39.28Q328.60-39.59 329.92-39.59L329.92-39.59L351.42-39.59ZM395.47-26.48L395.47-13.11L395.47-13.11Q395.47-11.13 394.78-8.84L394.78-8.84L394.78-8.84Q394.08-6.56 392.52-4.60L392.52-4.60L392.52-4.60Q390.97-2.64 388.46-1.32L388.46-1.32L388.46-1.32Q385.95 0 382.36 0L382.36 0L365.19 0L365.19 0Q363.21 0 360.92-0.70L360.92-0.70L360.92-0.70Q358.63-1.39 356.67-2.95L356.67-2.95L356.67-2.95Q354.71-4.50 353.39-7.01L353.39-7.01L353.39-7.01Q352.08-9.52 352.08-13.11L352.08-13.11L352.08-13.11Q352.08-15.09 352.77-17.40L352.77-17.40L352.77-17.40Q353.47-19.70 355.02-21.66L355.02-21.66L355.02-21.66Q356.58-23.62 359.09-24.94L359.09-24.94L359.09-24.94Q361.60-26.26 365.19-26.26L365.19-26.26L382.36-26.26L382.36-17.18L365.19-17.18L365.19-17.18Q363.24-17.18 362.18-15.99L362.18-15.99L362.18-15.99Q361.12-14.79 361.12-13.04L361.12-13.04L361.12-13.04Q361.12-11.17 362.35-10.13L362.35-10.13L362.35-10.13Q363.57-9.08 365.26-9.08L365.26-9.08L382.36-9.08L382.36-9.08Q384.30-9.08 385.36-10.25L385.36-10.25L385.36-10.25Q386.43-11.43 386.43-13.18L386.43-13.18L386.43-26.48L386.43-26.48Q386.43-28.34 385.27-29.44L385.27-29.44L385.27-29.44Q384.12-30.54 382.36-30.54L382.36-30.54L361.45-30.54L361.45-39.59L382.36-39.59L382.36-39.59Q384.34-39.59 386.63-38.89L386.63-38.89L386.63-38.89Q388.92-38.20 390.88-36.64L390.88-36.64L390.88-36.64Q392.83-35.08 394.15-32.57L394.15-32.57L394.15-32.57Q395.47-30.07 395.47-26.48L395.47-26.48ZM447.47-21.97L447.47 0L437.95 0L437.95-21.97L437.95-21.97Q437.95-23.84 437.31-25.32L437.31-25.32L437.31-25.32Q436.67-26.81 435.57-27.87L435.57-27.87L435.57-27.87Q434.47-28.93 432.99-29.50L432.99-29.50L432.99-29.50Q431.51-30.07 429.79-30.07L429.79-30.07L413.12-30.07L413.12 0L403.60 0L403.60-34.86L403.60-34.86Q403.60-35.85 403.97-36.71L403.97-36.71L403.97-36.71Q404.33-37.57 404.99-38.21L404.99-38.21L404.99-38.21Q405.65-38.85 406.53-39.22L406.53-39.22L406.53-39.22Q407.41-39.59 408.40-39.59L408.40-39.59L429.86-39.59L429.86-39.59Q431.65-39.59 433.65-39.18L433.65-39.18L433.65-39.18Q435.64-38.78 437.60-37.88L437.60-37.88L437.60-37.88Q439.56-36.99 441.34-35.61L441.34-35.61L441.34-35.61Q443.12-34.24 444.49-32.28L444.49-32.28L444.49-32.28Q445.86-30.32 446.67-27.76L446.67-27.76L446.67-27.76Q447.47-25.20 447.47-21.97L447.47-21.97ZM479.92-21.61L502.33 0L488.60 0L469.41-18.53L469.41-18.53Q467.80-20.00 467.91-22.19L467.91-22.19L467.91-22.19Q467.98-23.22 468.44-24.11L468.44-24.11L468.44-24.11Q468.90-25.01 469.70-25.63L469.70-25.63L487.10-39.66L502.33-39.66L479.92-21.61ZM465.49-56.32L465.49 0L455.97 0L455.97-56.32L465.49-56.32ZM548.99-26.48L548.99-26.48L548.99-26.48Q548.99-24.50 548.29-22.21L548.29-22.21L548.29-22.21Q547.60-19.92 546.04-17.96L546.04-17.96L546.04-17.96Q544.48-16.00 541.97-14.69L541.97-14.69L541.97-14.69Q539.47-13.37 535.88-13.37L535.88-13.37L518.70-13.37L518.70-22.41L535.88-22.41L535.88-22.41Q537.82-22.41 538.88-23.60L538.88-23.60L538.88-23.60Q539.94-24.79 539.94-26.55L539.94-26.55L539.94-26.55Q539.94-28.42 538.75-29.48L538.75-29.48L538.75-29.48Q537.56-30.54 535.88-30.54L535.88-30.54L518.70-30.54L518.70-30.54Q516.76-30.54 515.70-29.35L515.70-29.35L515.70-29.35Q514.64-28.16 514.64-26.40L514.64-26.40L514.64-13.11L514.64-13.11Q514.64-11.21 515.83-10.14L515.83-10.14L515.83-10.14Q517.02-9.08 518.77-9.08L518.77-9.08L535.88-9.08L535.88 0L518.70 0L518.70 0Q516.72 0 514.43-0.70L514.43-0.70L514.43-0.70Q512.15-1.39 510.19-2.95L510.19-2.95L510.19-2.95Q508.23-4.50 506.91-7.01L506.91-7.01L506.91-7.01Q505.59-9.52 505.59-13.11L505.59-13.11L505.59-26.48L505.59-26.48Q505.59-28.45 506.29-30.74L506.29-30.74L506.29-30.74Q506.98-33.03 508.54-34.99L508.54-34.99L508.54-34.99Q510.10-36.95 512.60-38.27L512.60-38.27L512.60-38.27Q515.11-39.59 518.70-39.59L518.70-39.59L535.88-39.59L535.88-39.59Q537.85-39.59 540.14-38.89L540.14-38.89L540.14-38.89Q542.43-38.20 544.39-36.64L544.39-36.64L544.39-36.64Q546.35-35.08 547.67-32.57L547.67-32.57L547.67-32.57Q548.99-30.07 548.99-26.48ZM599.27-21.97L599.27 0L589.75 0L589.75-21.97L589.75-21.97Q589.75-23.84 589.11-25.32L589.11-25.32L589.11-25.32Q588.46-26.81 587.37-27.87L587.37-27.87L587.37-27.87Q586.27-28.93 584.78-29.50L584.78-29.50L584.78-29.50Q583.30-30.07 581.58-30.07L581.58-30.07L564.92-30.07L564.92 0L555.40 0L555.40-34.86L555.40-34.86Q555.40-35.85 555.76-36.71L555.76-36.71L555.76-36.71Q556.13-37.57 556.79-38.21L556.79-38.21L556.79-38.21Q557.45-38.85 558.33-39.22L558.33-39.22L558.33-39.22Q559.20-39.59 560.19-39.59L560.19-39.59L581.65-39.59L581.65-39.59Q583.45-39.59 585.44-39.18L585.44-39.18L585.44-39.18Q587.44-38.78 589.40-37.88L589.40-37.88L589.40-37.88Q591.36-36.99 593.13-35.61L593.13-35.61L593.13-35.61Q594.91-34.24 596.28-32.28L596.28-32.28L596.28-32.28Q597.66-30.32 598.46-27.76L598.46-27.76L598.46-27.76Q599.27-25.20 599.27-21.97L599.27-21.97Z" fill="none" stroke="#dcffff" strokeWidth="2"></path></g></g><style>
</style>
</svg>