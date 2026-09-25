/* ==========================================================================
   Prakruti Patel — Visual Artist
   Vanilla JS · GSAP + ScrollTrigger + SplitText · Lenis
   ========================================================================== */
(() => {
  'use strict';

  /* ------------------------------------------------------------------------
     CONTENT — edit these two lists to add real work
     ------------------------------------------------------------------------ */

  // Artwork projects (generated from Media/ → assets/work/). Each project opens in the lightbox with all its images.
  // images[0] is the cover. To add work: export images into assets/work/ and add an entry here.
  const WORKS = [
    {title:"Geometric Living Room Wall",category:"Murals",medium:"Acrylic on interior wall · Client home",year:"2019",desc:"A geometric mural in layered blues that I designed and painted for a client’s living room: taped out, painted by hand, and finished around the room’s furniture and fittings.",images:[{src:"assets/work/geometric-living-room-1.webp",sm:"assets/work/geometric-living-room-1-sm.webp",w:2000,h:1500},{src:"assets/work/geometric-living-room-2.webp",sm:"assets/work/geometric-living-room-2-sm.webp",w:2000,h:1500},{src:"assets/work/geometric-living-room-3.webp",sm:"assets/work/geometric-living-room-3-sm.webp",w:2000,h:1500},{src:"assets/work/geometric-living-room-4.webp",sm:"assets/work/geometric-living-room-4-sm.webp",w:2000,h:1500},{src:"assets/work/geometric-living-room-5.webp",sm:"assets/work/geometric-living-room-5-sm.webp",w:2000,h:1500}]},
    {title:"And Me Café",category:"Murals",medium:"Acrylic on interior walls · Solo mural artist",year:"2018",desc:"Client: And Me Café. I independently painted several large-scale murals across the café, from layout and preparation through to the finished walls, designed to match the character of the space.",images:[{src:"assets/work/and-me-cafe-1.webp",sm:"assets/work/and-me-cafe-1-sm.webp",w:1080,h:1616},{src:"assets/work/and-me-cafe-2.webp",sm:"assets/work/and-me-cafe-2-sm.webp",w:1152,h:648},{src:"assets/work/and-me-cafe-3.webp",sm:"assets/work/and-me-cafe-3-sm.webp",w:1500,h:2000},{src:"assets/work/and-me-cafe-4.webp",sm:"assets/work/and-me-cafe-4-sm.webp",w:982,h:2000},{src:"assets/work/and-me-cafe-5.webp",sm:"assets/work/and-me-cafe-5-sm.webp",w:710,h:1027},{src:"assets/work/and-me-cafe-6.webp",sm:"assets/work/and-me-cafe-6-sm.webp",w:1616,h:1080},{src:"assets/work/and-me-cafe-7.webp",sm:"assets/work/and-me-cafe-7-sm.webp",w:921,h:1378},{src:"assets/work/and-me-cafe-8.webp",sm:"assets/work/and-me-cafe-8-sm.webp",w:1568,h:1048},{src:"assets/work/and-me-cafe-9.webp",sm:"assets/work/and-me-cafe-9-sm.webp",w:1080,h:1616},{src:"assets/work/and-me-cafe-10.webp",sm:"assets/work/and-me-cafe-10-sm.webp",w:1080,h:1616},{src:"assets/work/and-me-cafe-11.webp",sm:"assets/work/and-me-cafe-11-sm.webp",w:1616,h:1080}]},
    {title:"Lotus Compound Wall",category:"Murals",medium:"Acrylic on exterior wall",year:"2020",desc:"A very large outdoor mural painted on the compound wall of a client’s home: chalk layout, blocked-in lotus forms, then layered detail. The photos with me beside it show the scale.",images:[{src:"assets/work/compound-wall-1.webp",sm:"assets/work/compound-wall-1-sm.webp",w:2000,h:944},{src:"assets/work/compound-wall-2.webp",sm:"assets/work/compound-wall-2-sm.webp",w:1152,h:544},{src:"assets/work/compound-wall-3.webp",sm:"assets/work/compound-wall-3-sm.webp",w:2000,h:944},{src:"assets/work/compound-wall-4.webp",sm:"assets/work/compound-wall-4-sm.webp",w:768,h:1024},{src:"assets/work/compound-wall-5.webp",sm:"assets/work/compound-wall-5-sm.webp",w:768,h:1024},{src:"assets/work/compound-wall-6.webp",sm:"assets/work/compound-wall-6-sm.webp",w:944,h:2000},{src:"assets/work/compound-wall-7.webp",sm:"assets/work/compound-wall-7-sm.webp",w:2000,h:944}]},
    {title:"Desert Sunset, Smokin Pizza",category:"Murals",medium:"Acrylic wall painting",year:"",desc:"An acrylic wall painting for the Smokin Pizza store, painted directly on the interior wall to give the space a warm, distinctive focal point.",images:[{src:"assets/work/smokin-pizza-1.webp",sm:"assets/work/smokin-pizza-1-sm.webp",w:1080,h:1592},{src:"assets/work/smokin-pizza-2.webp",sm:"assets/work/smokin-pizza-2-sm.webp",w:653,h:1160},{src:"assets/work/smokin-pizza-3.webp",sm:"assets/work/smokin-pizza-3-sm.webp",w:653,h:1160},{src:"assets/work/smokin-pizza-4.webp",sm:"assets/work/smokin-pizza-4-sm.webp",w:653,h:1160},{src:"assets/work/smokin-pizza-5.webp",sm:"assets/work/smokin-pizza-5-sm.webp",w:653,h:1160},{src:"assets/work/smokin-pizza-6.webp",sm:"assets/work/smokin-pizza-6-sm.webp",w:653,h:1160},{src:"assets/work/smokin-pizza-7.webp",sm:"assets/work/smokin-pizza-7-sm.webp",w:1125,h:2000}]},
    {title:"IdeaPad Wall, IIM Ahmedabad",category:"Murals",medium:"Acrylic on wall · On-site project",year:"2019",desc:"An on-site acrylic painting completed at the Indian Institute of Management Ahmedabad (IIMA), turning a blank concrete column into an illustrated ideas wall.",images:[{src:"assets/work/iim-ahmedabad-1.webp",sm:"assets/work/iim-ahmedabad-1-sm.webp",w:1500,h:2000},{src:"assets/work/iim-ahmedabad-2.webp",sm:"assets/work/iim-ahmedabad-2-sm.webp",w:1500,h:2000},{src:"assets/work/iim-ahmedabad-3.webp",sm:"assets/work/iim-ahmedabad-3-sm.webp",w:972,h:1280},{src:"assets/work/iim-ahmedabad-4.webp",sm:"assets/work/iim-ahmedabad-4-sm.webp",w:774,h:1280},{src:"assets/work/iim-ahmedabad-5.webp",sm:"assets/work/iim-ahmedabad-5-sm.webp",w:944,h:2000}]},
    {title:"Office Wall Mural",category:"Murals",medium:"Acrylic on interior walls",year:"",desc:"A wall mural created for an office based on the client’s brief: line illustration first, then bold colour, designed to suit the workspace.",images:[{src:"assets/work/office-mural-1.webp",sm:"assets/work/office-mural-1-sm.webp",w:2000,h:944},{src:"assets/work/office-mural-2.webp",sm:"assets/work/office-mural-2-sm.webp",w:2000,h:944},{src:"assets/work/office-mural-3.webp",sm:"assets/work/office-mural-3-sm.webp",w:944,h:2000},{src:"assets/work/office-mural-4.webp",sm:"assets/work/office-mural-4-sm.webp",w:944,h:2000},{src:"assets/work/office-mural-5.webp",sm:"assets/work/office-mural-5-sm.webp",w:944,h:2000},{src:"assets/work/office-mural-6.webp",sm:"assets/work/office-mural-6-sm.webp",w:1125,h:2000},{src:"assets/work/office-mural-7.webp",sm:"assets/work/office-mural-7-sm.webp",w:944,h:2000},{src:"assets/work/office-mural-8.webp",sm:"assets/work/office-mural-8-sm.webp",w:906,h:524}]},
    {title:"Forest Stream",category:"Painting",medium:"Oil painting",year:"",desc:"A detailed landscape study in oil: light through the trees, moving water and layered foliage.",images:[{src:"assets/work/forest-stream-1.webp",sm:"assets/work/forest-stream-1-sm.webp",w:2000,h:1500},{src:"assets/work/forest-stream-2.webp",sm:"assets/work/forest-stream-2-sm.webp",w:1024,h:768}]},
    {title:"Dance Series",category:"Painting",medium:"Painting · BA Visual Arts",year:"",desc:"A series celebrating classical Indian dance: gesture, costume and colour.",images:[{src:"assets/work/dance-1.webp",sm:"assets/work/dance-1-sm.webp",w:2000,h:1668},{src:"assets/work/dance-2.webp",sm:"assets/work/dance-2-sm.webp",w:1557,h:2000},{src:"assets/work/dance-3.webp",sm:"assets/work/dance-3-sm.webp",w:1602,h:2000}]},
    {title:"Colour Studies: Urban Tropics",category:"Painting",medium:"Colour theory series · paint on paper",year:"",desc:"A colour-theory series pairing flat architectural planes with tropical foliage, exploring harmony, contrast and temperature.",images:[{src:"assets/work/colour-studies-1.webp",sm:"assets/work/colour-studies-1-sm.webp",w:1143,h:1201},{src:"assets/work/colour-studies-2.webp",sm:"assets/work/colour-studies-2-sm.webp",w:1813,h:1910},{src:"assets/work/colour-studies-3.webp",sm:"assets/work/colour-studies-3-sm.webp",w:1457,h:1510},{src:"assets/work/colour-studies-4.webp",sm:"assets/work/colour-studies-4-sm.webp",w:1362,h:1376},{src:"assets/work/colour-studies-5.webp",sm:"assets/work/colour-studies-5-sm.webp",w:1030,h:1020},{src:"assets/work/colour-studies-6.webp",sm:"assets/work/colour-studies-6-sm.webp",w:1439,h:1486},{src:"assets/work/colour-studies-7.webp",sm:"assets/work/colour-studies-7-sm.webp",w:1238,h:1258},{src:"assets/work/colour-studies-8.webp",sm:"assets/work/colour-studies-8-sm.webp",w:1400,h:1479},{src:"assets/work/colour-studies-9.webp",sm:"assets/work/colour-studies-9-sm.webp",w:1227,h:1276},{src:"assets/work/colour-studies-10.webp",sm:"assets/work/colour-studies-10-sm.webp",w:1316,h:1351},{src:"assets/work/colour-studies-11.webp",sm:"assets/work/colour-studies-11-sm.webp",w:2000,h:1401},{src:"assets/work/colour-studies-12.webp",sm:"assets/work/colour-studies-12-sm.webp",w:1432,h:2000}]},
    {title:"After Frida",category:"Painting",medium:"Painting · BA Visual Arts",year:"",desc:"A textured portrait study inspired by Frida Kahlo.",images:[{src:"assets/work/frida-1.webp",sm:"assets/work/frida-1-sm.webp",w:1454,h:2000}]},
    {title:"Women of Rajasthan",category:"Painting",medium:"Painting · BA Visual Arts",year:"",desc:"A richly patterned figurative painting of two women in traditional Rajasthani dress.",images:[{src:"assets/work/rajasthan-1.webp",sm:"assets/work/rajasthan-1-sm.webp",w:2000,h:1625}]},
    {title:"Heritage Streets",category:"Painting",medium:"Watercolour & ink",year:"",desc:"Watercolour and ink studies of temples, old streets and harbours: architecture, texture and everyday life.",images:[{src:"assets/work/heritage-1.webp",sm:"assets/work/heritage-1-sm.webp",w:612,h:844},{src:"assets/work/heritage-2.webp",sm:"assets/work/heritage-2-sm.webp",w:2000,h:1350},{src:"assets/work/heritage-3.webp",sm:"assets/work/heritage-3-sm.webp",w:1524,h:2000},{src:"assets/work/heritage-4.webp",sm:"assets/work/heritage-4-sm.webp",w:687,h:1023},{src:"assets/work/heritage-5.webp",sm:"assets/work/heritage-5-sm.webp",w:1516,h:2000},{src:"assets/work/heritage-6.webp",sm:"assets/work/heritage-6-sm.webp",w:2000,h:1417}]},
    {title:"Still Life with Drapery",category:"Painting",medium:"Painting · BA Visual Arts",year:"",desc:"Still life studies focused on drapery, reflective surfaces and bold colour.",images:[{src:"assets/work/still-life-1.webp",sm:"assets/work/still-life-1-sm.webp",w:1357,h:2000},{src:"assets/work/still-life-2.webp",sm:"assets/work/still-life-2-sm.webp",w:1459,h:2000}]},
    {title:"Studies in Blue",category:"Painting",medium:"Painting · BA Visual Arts",year:"",desc:"Monochrome studies in blue, exploring value and form.",images:[{src:"assets/work/blue-studies-1.webp",sm:"assets/work/blue-studies-1-sm.webp",w:1467,h:1570},{src:"assets/work/blue-studies-2.webp",sm:"assets/work/blue-studies-2-sm.webp",w:1289,h:2000},{src:"assets/work/blue-studies-3.webp",sm:"assets/work/blue-studies-3-sm.webp",w:2000,h:1333}]},
    {title:"Small Canvases",category:"Painting",medium:"Mixed media · BA Visual Arts",year:"",desc:"A set of small mixed-media canvases: texture, collage and bold symbolic imagery.",images:[{src:"assets/work/mixed-media-1.webp",sm:"assets/work/mixed-media-1-sm.webp",w:430,h:543},{src:"assets/work/mixed-media-2.webp",sm:"assets/work/mixed-media-2-sm.webp",w:730,h:717},{src:"assets/work/mixed-media-3.webp",sm:"assets/work/mixed-media-3-sm.webp",w:874,h:589},{src:"assets/work/mixed-media-4.webp",sm:"assets/work/mixed-media-4-sm.webp",w:470,h:589},{src:"assets/work/mixed-media-5.webp",sm:"assets/work/mixed-media-5-sm.webp",w:480,h:563},{src:"assets/work/mixed-media-6.webp",sm:"assets/work/mixed-media-6-sm.webp",w:538,h:435},{src:"assets/work/mixed-media-7.webp",sm:"assets/work/mixed-media-7-sm.webp",w:470,h:538}]},
    {title:"Sky Canvases",category:"Painting",medium:"Painting on canvas",year:"",desc:"Soft sunset and night-sky canvases.",images:[{src:"assets/work/sky-canvases-1.webp",sm:"assets/work/sky-canvases-1-sm.webp",w:490,h:640},{src:"assets/work/sky-canvases-2.webp",sm:"assets/work/sky-canvases-2-sm.webp",w:413,h:525}]},
    {title:"Pointillism & Colour Fields",category:"Painting",medium:"Painting · BA Visual Arts",year:"",desc:"Studies in dotted texture and overlapping transparent colour.",images:[{src:"assets/work/pointillism-1.webp",sm:"assets/work/pointillism-1-sm.webp",w:1526,h:2000},{src:"assets/work/pointillism-2.webp",sm:"assets/work/pointillism-2-sm.webp",w:2000,h:1368},{src:"assets/work/pointillism-3.webp",sm:"assets/work/pointillism-3-sm.webp",w:1254,h:2000}]},
    {title:"Life Drawing",category:"Drawing",medium:"Graphite · Seneca College",year:"2021",desc:"Figure, gesture, anatomy and portrait studies from life drawing classes at Seneca College.",images:[{src:"assets/work/life-drawing-1.webp",sm:"assets/work/life-drawing-1-sm.webp",w:1765,h:2000},{src:"assets/work/life-drawing-2.webp",sm:"assets/work/life-drawing-2-sm.webp",w:1718,h:2000},{src:"assets/work/life-drawing-3.webp",sm:"assets/work/life-drawing-3-sm.webp",w:1305,h:2000},{src:"assets/work/life-drawing-4.webp",sm:"assets/work/life-drawing-4-sm.webp",w:1417,h:2000},{src:"assets/work/life-drawing-5.webp",sm:"assets/work/life-drawing-5-sm.webp",w:1510,h:2000},{src:"assets/work/life-drawing-6.webp",sm:"assets/work/life-drawing-6-sm.webp",w:1470,h:2000},{src:"assets/work/life-drawing-7.webp",sm:"assets/work/life-drawing-7-sm.webp",w:1539,h:2000},{src:"assets/work/life-drawing-8.webp",sm:"assets/work/life-drawing-8-sm.webp",w:1821,h:1700},{src:"assets/work/life-drawing-9.webp",sm:"assets/work/life-drawing-9-sm.webp",w:944,h:2000}]},
    {title:"White on Black",category:"Drawing",medium:"White ink on black paper",year:"",desc:"Line drawings in white ink on black paper: botanicals, hands and figures in traditional dress.",images:[{src:"assets/work/white-on-black-1.webp",sm:"assets/work/white-on-black-1-sm.webp",w:1500,h:2000},{src:"assets/work/white-on-black-2.webp",sm:"assets/work/white-on-black-2-sm.webp",w:1375,h:2000},{src:"assets/work/white-on-black-3.webp",sm:"assets/work/white-on-black-3-sm.webp",w:1258,h:2000},{src:"assets/work/white-on-black-4.webp",sm:"assets/work/white-on-black-4-sm.webp",w:2000,h:1612}]},
    {title:"Ink Sketchbook",category:"Drawing",medium:"Pen & ink on paper",year:"",desc:"Pages from my sketchbooks: streets, harbours, plants and still life in pen and ink.",images:[{src:"assets/work/ink-sketchbook-1.webp",sm:"assets/work/ink-sketchbook-1-sm.webp",w:2000,h:1255},{src:"assets/work/ink-sketchbook-2.webp",sm:"assets/work/ink-sketchbook-2-sm.webp",w:866,h:567},{src:"assets/work/ink-sketchbook-3.webp",sm:"assets/work/ink-sketchbook-3-sm.webp",w:1195,h:2000},{src:"assets/work/ink-sketchbook-4.webp",sm:"assets/work/ink-sketchbook-4-sm.webp",w:1452,h:2000},{src:"assets/work/ink-sketchbook-5.webp",sm:"assets/work/ink-sketchbook-5-sm.webp",w:1414,h:2000},{src:"assets/work/ink-sketchbook-6.webp",sm:"assets/work/ink-sketchbook-6-sm.webp",w:1406,h:2000},{src:"assets/work/ink-sketchbook-7.webp",sm:"assets/work/ink-sketchbook-7-sm.webp",w:1063,h:1889},{src:"assets/work/ink-sketchbook-8.webp",sm:"assets/work/ink-sketchbook-8-sm.webp",w:1205,h:2000}]},
    {title:"Characters I Created",category:"Digital",medium:"Character sketches → digital illustration",year:"",desc:"Original characters I designed, from pencil exploration pages and expression studies to a finished digital illustration.",images:[{src:"assets/work/characters-1.webp",sm:"assets/work/characters-1-sm.webp",w:2000,h:2000},{src:"assets/work/characters-2.webp",sm:"assets/work/characters-2-sm.webp",w:1935,h:2000},{src:"assets/work/characters-3.webp",sm:"assets/work/characters-3-sm.webp",w:1500,h:2000},{src:"assets/work/characters-4.webp",sm:"assets/work/characters-4-sm.webp",w:1500,h:2000},{src:"assets/work/characters-5.webp",sm:"assets/work/characters-5-sm.webp",w:1500,h:2000},{src:"assets/work/characters-6.webp",sm:"assets/work/characters-6-sm.webp",w:1500,h:2000},{src:"assets/work/characters-7.webp",sm:"assets/work/characters-7-sm.webp",w:1530,h:2000},{src:"assets/work/characters-8.webp",sm:"assets/work/characters-8-sm.webp",w:1049,h:2000},{src:"assets/work/characters-9.webp",sm:"assets/work/characters-9-sm.webp",w:1500,h:2000}]},
    {title:"White Horse",category:"Digital",medium:"Digital painting · Procreate",year:"",desc:"A digital painting made in Procreate.",images:[{src:"assets/work/procreate-horse-1.webp",sm:"assets/work/procreate-horse-1-sm.webp",w:2000,h:1414}]},
    {title:"Custom Painted Furniture",category:"Custom",medium:"Acrylic on wood · Client commission",year:"2020",desc:"Furniture custom-painted in acrylic based on the client’s request: graphic patterns designed to add a personal artistic element to the home.",images:[{src:"assets/work/painted-furniture-1.webp",sm:"assets/work/painted-furniture-1-sm.webp",w:994,h:648},{src:"assets/work/painted-furniture-2.webp",sm:"assets/work/painted-furniture-2-sm.webp",w:1500,h:2000},{src:"assets/work/painted-furniture-3.webp",sm:"assets/work/painted-furniture-3-sm.webp",w:2000,h:1520},{src:"assets/work/painted-furniture-4.webp",sm:"assets/work/painted-furniture-4-sm.webp",w:2000,h:1500},{src:"assets/work/painted-furniture-5.webp",sm:"assets/work/painted-furniture-5-sm.webp",w:988,h:648},{src:"assets/work/painted-furniture-6.webp",sm:"assets/work/painted-furniture-6-sm.webp",w:994,h:648}]},
    {title:"Custom Painted Planters",category:"Custom",medium:"Hand-painted planters · Client commission",year:"2019",desc:"Planters hand-painted for a residential client, each customised to create a cohesive, personal decorative element across the terrace.",images:[{src:"assets/work/painted-planters-1.webp",sm:"assets/work/painted-planters-1-sm.webp",w:2000,h:944},{src:"assets/work/painted-planters-2.webp",sm:"assets/work/painted-planters-2-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-3.webp",sm:"assets/work/painted-planters-3-sm.webp",w:1125,h:2000},{src:"assets/work/painted-planters-4.webp",sm:"assets/work/painted-planters-4-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-5.webp",sm:"assets/work/painted-planters-5-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-6.webp",sm:"assets/work/painted-planters-6-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-7.webp",sm:"assets/work/painted-planters-7-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-8.webp",sm:"assets/work/painted-planters-8-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-9.webp",sm:"assets/work/painted-planters-9-sm.webp",w:944,h:2000},{src:"assets/work/painted-planters-10.webp",sm:"assets/work/painted-planters-10-sm.webp",w:2000,h:944}]},
    {title:"Hand-Painted Bottles",category:"Custom",medium:"Paint on glass · Commissions",year:"",desc:"Individually hand-painted bottles, each customised to the customer’s preferred design, colours and style.",images:[{src:"assets/work/painted-bottles-1.webp",sm:"assets/work/painted-bottles-1-sm.webp",w:887,h:811},{src:"assets/work/painted-bottles-2.webp",sm:"assets/work/painted-bottles-2-sm.webp",w:1500,h:2000},{src:"assets/work/painted-bottles-3.webp",sm:"assets/work/painted-bottles-3-sm.webp",w:1500,h:2000},{src:"assets/work/painted-bottles-4.webp",sm:"assets/work/painted-bottles-4-sm.webp",w:867,h:1004},{src:"assets/work/painted-bottles-5.webp",sm:"assets/work/painted-bottles-5-sm.webp",w:840,h:2000},{src:"assets/work/painted-bottles-6.webp",sm:"assets/work/painted-bottles-6-sm.webp",w:940,h:2000},{src:"assets/work/painted-bottles-7.webp",sm:"assets/work/painted-bottles-7-sm.webp",w:1260,h:2000}]},
    {title:"Hand-Painted Ceramics",category:"Custom",medium:"Paint on ceramic",year:"",desc:"Hand-painted cups and vases.",images:[{src:"assets/work/painted-ceramics-1.webp",sm:"assets/work/painted-ceramics-1-sm.webp",w:1335,h:2000},{src:"assets/work/painted-ceramics-2.webp",sm:"assets/work/painted-ceramics-2-sm.webp",w:1335,h:2000},{src:"assets/work/painted-ceramics-3.webp",sm:"assets/work/painted-ceramics-3-sm.webp",w:2000,h:1335},{src:"assets/work/painted-ceramics-4.webp",sm:"assets/work/painted-ceramics-4-sm.webp",w:1335,h:2000}]},
    {title:"Carved Wood Panel",category:"Custom",medium:"Wood carving",year:"",desc:"A carved and engraved wood panel.",images:[{src:"assets/work/wood-engraving-1.webp",sm:"assets/work/wood-engraving-1-sm.webp",w:2000,h:1500}]},
    {title:"Clay Relief & Sculpture",category:"Custom",medium:"Clay · BA Visual Arts",year:"",desc:"A sculpted relief mask and figurative form.",images:[{src:"assets/work/clay-relief-1.webp",sm:"assets/work/clay-relief-1-sm.webp",w:1125,h:2000},{src:"assets/work/clay-relief-2.webp",sm:"assets/work/clay-relief-2-sm.webp",w:1125,h:2000}]},
    {title:"Elephant Character Sculpt",category:"3D/VFX",medium:"3D sculpting · Seneca College",year:"",desc:"A stylised elephant character sculpted in 3D, shown from multiple angles.",images:[{src:"assets/work/elephant-sculpt-1.webp",sm:"assets/work/elephant-sculpt-1-sm.webp",w:1273,h:1195},{src:"assets/work/elephant-sculpt-2.webp",sm:"assets/work/elephant-sculpt-2-sm.webp",w:1481,h:1195},{src:"assets/work/elephant-sculpt-3.webp",sm:"assets/work/elephant-sculpt-3-sm.webp",w:1361,h:1198},{src:"assets/work/elephant-sculpt-4.webp",sm:"assets/work/elephant-sculpt-4-sm.webp",w:1273,h:1195},{src:"assets/work/elephant-sculpt-5.webp",sm:"assets/work/elephant-sculpt-5-sm.webp",w:1273,h:1195}]},
    {title:"Kitchen Set: Lighting & Rendering",category:"3D/VFX",medium:"Texturing, lighting & rendering · Seneca College",year:"",desc:"A 3D kitchen environment focused on texturing, lighting and rendering, shown in a finished render and progress frames.",images:[{src:"assets/work/kitchen-lighting-1.webp",sm:"assets/work/kitchen-lighting-1-sm.webp",w:1280,h:1024},{src:"assets/work/kitchen-lighting-2.webp",sm:"assets/work/kitchen-lighting-2-sm.webp",w:1920,h:1080},{src:"assets/work/kitchen-lighting-3.webp",sm:"assets/work/kitchen-lighting-3-sm.webp",w:1920,h:1080},{src:"assets/work/kitchen-lighting-4.webp",sm:"assets/work/kitchen-lighting-4-sm.webp",w:1920,h:1080}]},
    {title:"Bus Model",category:"3D/VFX",medium:"3D modelling · Seneca College",year:"",desc:"A hard-surface vehicle model, presented in clay render and on location.",images:[{src:"assets/work/bus-model-1.webp",sm:"assets/work/bus-model-1-sm.webp",w:1920,h:1080},{src:"assets/work/bus-model-2.webp",sm:"assets/work/bus-model-2-sm.webp",w:1920,h:1080},{src:"assets/work/bus-model-3.webp",sm:"assets/work/bus-model-3-sm.webp",w:1920,h:1080}]},
    {title:"VFX & Animation Shots",category:"3D/VFX",medium:"FX & character animation · Seneca College",year:"",desc:"A simulated fire and smoke effects shot and a character animation test.",images:[{src:"assets/work/vfx-shot-1.webp",sm:"assets/work/vfx-shot-1-sm.webp",video:"assets/work/vfx-shot-1.mp4",w:1369,h:1024},{src:"assets/work/vfx-shot-2.webp",sm:"assets/work/vfx-shot-2-sm.webp",video:"assets/work/vfx-shot-2.mp4",w:1920,h:1080}]},
    {title:"Creative Painting for Kids",category:"Teaching",medium:"My original paintings · Ready-to-teach projects",year:"",desc:"Paintings I created to teach kids: folk-inspired patterns, animals and landscapes, each designed to be broken into simple, confidence-building steps with bold colour.",images:[{src:"assets/work/kids-painting-1.webp",sm:"assets/work/kids-painting-1-sm.webp",w:2000,h:1455},{src:"assets/work/kids-painting-2.webp",sm:"assets/work/kids-painting-2-sm.webp",w:2000,h:1601},{src:"assets/work/kids-painting-3.webp",sm:"assets/work/kids-painting-3-sm.webp",w:2000,h:1619},{src:"assets/work/kids-painting-4.webp",sm:"assets/work/kids-painting-4-sm.webp",w:2000,h:1635},{src:"assets/work/kids-painting-5.webp",sm:"assets/work/kids-painting-5-sm.webp",w:2000,h:1691},{src:"assets/work/kids-painting-6.webp",sm:"assets/work/kids-painting-6-sm.webp",w:2000,h:1613},{src:"assets/work/kids-painting-7.webp",sm:"assets/work/kids-painting-7-sm.webp",w:2000,h:1590},{src:"assets/work/kids-painting-8.webp",sm:"assets/work/kids-painting-8-sm.webp",w:2000,h:1497}]}
  ];

  // Websites for the Web Studio playground.
  // thumb: hero screenshot (~1200×750) · full: full-page screenshot (1440px wide) · url: live site.
  const WEBSITES = [
    { title: 'Project 01', role: 'Design & Build', year: 2026, url: null, host: 'project-01.in-the-studio', thumb: null, full: null, palette: ['#F7F3EC', '#1C1A18', '#B8643F'] },
    { title: 'Project 02', role: 'Design & Build', year: 2026, url: null, host: 'project-02.in-the-studio', thumb: null, full: null, palette: ['#F7F3EC', '#1C1A18', '#C99A4B'] },
    { title: 'Project 03', role: 'Design & Build', year: 2026, url: null, host: 'project-03.in-the-studio', thumb: null, full: null, palette: ['#F7F3EC', '#1C1A18', '#8C9A82'] },
    { title: 'Project 04', role: 'Design & Build', year: 2026, url: null, host: 'project-04.in-the-studio', thumb: null, full: null, palette: ['#F7F3EC', '#1C1A18', '#C99289'] },
    { title: 'Project 05', role: 'Design & Build', year: 2026, url: null, host: 'project-05.in-the-studio', thumb: null, full: null, palette: ['#F7F3EC', '#1C1A18', '#9A4F2F'] }
  ];

  const EMAIL = 'artethereal23@gmail.com';

  // Scroll films use their animated stand-ins. Set to true only if clips are added to
  // assets/video/scene-N.mp4 (or frame sequences to assets/seq/) — otherwise no files are requested.
  const USE_FILM_MEDIA = false;

  // Categories kept in WORKS but left out of the public portfolio gallery (the site is art-first).
  // Teaching projects can still be opened from elsewhere with data-open-work.
  const HIDDEN_CATEGORIES = ['3D/VFX', 'Teaching'];

  /* ------------------------------------------------------------------------
     Helpers & environment
     ------------------------------------------------------------------------ */
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const range = (p, a, b) => clamp((p - a) / (b - a), 0, 1);
  const easeOut = t => 1 - Math.pow(1 - t, 3);

  const html = document.documentElement;
  const body = document.body;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const isMobile = () => innerWidth < 768;
  const hasGSAP = !!(window.gsap && window.ScrollTrigger);
  const ANIM = hasGSAP && !reduced;

  if (!ANIM) html.classList.add('no-anim');
  if (hasGSAP) gsap.registerPlugin(ScrollTrigger, ...(window.SplitText ? [SplitText] : []));
  if (finePointer) body.classList.add('has-cursor');

  let lenis = null;
  let studioTrigger = null;
  let workTrigger = null;

  /* ------------------------------------------------------------------------
     Smooth scroll
     ------------------------------------------------------------------------ */
  function initLenis() {
    if (!ANIM || !window.Lenis) return;
    lenis = new Lenis({ lerp: 0.09, smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(t => lenis.raf(t * 1000));
    gsap.ticker.lagSmoothing(0);
    lenis.stop(); // resumed after the preloader
  }

  function scrollToTarget(target) {
    let y = target;
    // Web Studio: land on the finished handoff (browser visible), not the start of the film
    if (target && target.id === 'web' && studioTrigger) y = studioTrigger.end;
    if (lenis) lenis.scrollTo(y, { duration: 1.6 });
    else if (typeof y === 'number') scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
    else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
  }

  function initAnchors() {
    document.addEventListener('click', e => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;
      const id = a.getAttribute('href');
      if (id.length < 2) return;
      const el = document.getElementById(id.slice(1));
      if (!el) return;
      e.preventDefault();
      closeMenu();
      scrollToTarget(el);
      history.replaceState(null, '', id);
    });
  }

  /* ------------------------------------------------------------------------
     Film — scroll-scrubbed scene with 3 sources, in order of preference:
     1. image sequence  assets/seq/scene-N/{desktop|mobile}/0001.webp …
     2. video           assets/video/scene-N(-mobile).mp4  (currentTime scrub)
     3. placeholder     procedural animation (until Higgsfield clips exist)
     ------------------------------------------------------------------------ */
  class Film {
    constructor(section, id, placeholder, frames = { desktop: 120, mobile: 72 }) {
      this.section = section;
      this.id = id;
      this.placeholder = placeholder;
      this.canvas = $('.film__canvas', section);
      this.ctx = this.canvas.getContext('2d');
      this.mode = 'placeholder';
      this.p = 0;
      this.count = isMobile() ? frames.mobile : frames.desktop;
      this.frames = [];
      this.lastIndex = -1;
      this.resize = this.resize.bind(this);
      addEventListener('resize', this.resize);
      this.resize();
      if (USE_FILM_MEDIA) this.detect();
      else this.setProgress(0);
    }

    detect() {
      const dir = `assets/seq/scene-${this.id}/${isMobile() ? 'mobile' : 'desktop'}/`;
      const probe = new Image();
      probe.onload = () => this.useSequence(dir, probe);
      probe.onerror = () => this.tryVideo([
        ...(isMobile() ? [`assets/video/scene-${this.id}-mobile.mp4`] : []),
        `assets/video/scene-${this.id}.mp4`
      ]);
      probe.src = dir + '0001.webp';
    }

    useSequence(dir, first) {
      this.mode = 'seq';
      this.section.classList.add('has-media');
      this.frames[0] = first;
      const load = i => {
        if (this.frames[i]) return;
        const img = new Image();
        img.decoding = 'async';
        img.onload = () => { this.frames[i] = img; if (Math.abs(i - this.target()) < 3) this.render(true); };
        img.src = dir + String(i + 1).padStart(4, '0') + '.webp';
        this.frames[i] = null;
      };
      // progressive: every 8th → 4th → 2nd → all
      const start = () => { for (const step of [8, 4, 2, 1]) for (let i = 0; i < this.count; i += step) if (this.frames[i] === undefined) load(i); };
      if (this.id === 1) start();
      else new IntersectionObserver((entries, io) => {
        if (entries[0].isIntersecting) { start(); io.disconnect(); }
      }, { rootMargin: '150% 0px' }).observe(this.section);
      this.render(true);
    }

    tryVideo(list) {
      if (!list.length) { this.setProgress(this.p); return; }
      const v = document.createElement('video');
      v.muted = true; v.playsInline = true; v.preload = 'auto';
      v.addEventListener('loadeddata', () => {
        this.mode = 'video';
        this.video = v;
        this.section.classList.add('has-media');
        v.addEventListener('seeked', () => {
          this.drawSource(v, v.videoWidth, v.videoHeight);
          this.seeking = false;
          if (this.pending != null) { const t = this.pending; this.pending = null; this.seek(t); }
        });
        this.seek(this.p * (v.duration - 0.05));
      }, { once: true });
      v.addEventListener('error', () => this.tryVideo(list.slice(1)), { once: true });
      v.src = list[0];
    }

    seek(t) {
      if (this.seeking) { this.pending = t; return; }
      this.seeking = true;
      this.video.currentTime = t;
    }

    target() { return Math.round(this.p * (this.count - 1)); }

    setProgress(p) {
      this.p = clamp(p, 0, 1);
      if (this.mode === 'seq') this.render();
      else if (this.mode === 'video') this.seek(this.p * (this.video.duration - 0.05));
      else if (this.placeholder) this.placeholder(this.p);
    }

    render(force) {
      const i = this.target();
      if (!force && i === this.lastIndex) return;
      // nearest loaded frame
      for (let d = 0; d < this.count; d++) {
        const img = this.frames[i - d] || this.frames[i + d];
        if (img && img.complete && img.naturalWidth) {
          this.drawSource(img, img.naturalWidth, img.naturalHeight);
          this.lastIndex = i;
          return;
        }
      }
    }

    resize() {
      const dpr = Math.min(devicePixelRatio || 1, 2);
      const w = this.canvas.clientWidth, h = this.canvas.clientHeight;
      if (!w || !h) return;
      this.canvas.width = Math.round(w * dpr);
      this.canvas.height = Math.round(h * dpr);
      this.lastSrc && this.drawSource(...this.lastSrc);
    }

    drawSource(src, sw, sh) {
      this.lastSrc = [src, sw, sh];
      const cw = this.canvas.width, ch = this.canvas.height;
      const s = Math.max(cw / sw, ch / sh);
      const w = sw * s, h = sh * s;
      this.ctx.drawImage(src, (cw - w) / 2, (ch - h) / 2, w, h);
    }
  }

  // Inline the shared botanical <symbol> so each path can be drawn individually
  function inlineBotanical(useEl) {
    const g = $('#botanical g').cloneNode(true);
    const cls = useEl.getAttribute('class');
    if (cls) g.setAttribute('class', cls);
    useEl.replaceWith(g);
    const paths = $$('path', g);
    const lens = paths.map(p => p.getTotalLength());
    paths.forEach((p, i) => { p.style.strokeDasharray = lens[i]; p.style.strokeDashoffset = lens[i]; });
    return { paths, lens, total: lens.reduce((a, b) => a + b, 0) };
  }

  // Draw paths sequentially to progress p. Returns the path/length currently being drawn.
  function drawPaths(set, p) {
    const target = p * set.total;
    let acc = 0, active = null;
    set.paths.forEach((path, i) => {
      const len = set.lens[i];
      const local = clamp((target - acc) / len, 0, 1);
      path.style.strokeDashoffset = len * (1 - local);
      if (local > 0 && local < 1) active = { path, at: local * len };
      acc += len;
    });
    return active;
  }

  /* ------------------------------------------------------------------------
     Scene placeholders
     ------------------------------------------------------------------------ */
  function heroPlaceholder() {
    const svg = $('.hero__drawing');
    const set = inlineBotanical($('use', svg));
    const tip = $('.hero__tip');
    const stage = $('.hero .film__stage');
    return p => {
      const active = drawPaths(set, p);
      svg.style.transform = `translateY(-46%) scale(${1 + p * 0.05})`;
      if (isMobile()) svg.style.transform = `translate(50%, -44%) scale(${1 + p * 0.05})`;
      if (active) {
        const pt = active.path.getPointAtLength(active.at).matrixTransform(active.path.getScreenCTM());
        const r = stage.getBoundingClientRect();
        tip.style.opacity = 1;
        tip.style.transform = `translate(${pt.x - r.left}px, ${pt.y - r.top}px)`;
      } else tip.style.opacity = 0;
    };
  }

  function studioPlaceholder() {
    const rings = $$('.orbit__ring');
    const glow = $('.studio__glow');
    const orbit = $('.orbit');
    return p => {
      rings[0].style.setProperty('--r', `${p * 320}deg`);
      rings[1].style.setProperty('--r', `${-p * 220 + 40}deg`);
      rings[2].style.setProperty('--r', `${p * 140 + 110}deg`);
      orbit.style.transform = `scale(${1 + p * 0.5})`;
      glow.style.transform = `translate(-50%, -50%) scale(${1 + p * 0.8})`;
      glow.style.opacity = 0.6 + p * 0.4;
    };
  }

  // Scene 3 stand-in: a slow camera pull-back across a real finished mural photo
  function finalePlaceholder() {
    const img = $('.finale__photo img');
    img.loading = 'eager';
    return p => {
      const t = easeOut(p);
      img.style.transform = `scale(${lerp(1.55, 1.04, t)}) translateY(${lerp(4, 0, t)}%)`;
      img.style.filter = `saturate(${lerp(0.75, 1.05, t)})`;
    };
  }

  /* ------------------------------------------------------------------------
     Preloader + hero intro
     ------------------------------------------------------------------------ */
  function initPreloader(onDone) {
    const pre = $('.preloader');
    if (!ANIM) { pre.remove(); body.classList.remove('is-loading'); onDone(); return; }
    const path = $('.draw', pre);
    const len = path.getTotalLength();
    gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
    const count = $('.preloader__count', pre);
    const c = { v: 0 };
    const minTime = new Promise(r => setTimeout(r, 1500));
    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    gsap.to(path, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' });
    const counter = gsap.to(c, { v: 90, duration: 1.4, ease: 'power1.out', onUpdate: () => { count.textContent = String(Math.round(c.v)).padStart(3, '0'); } });
    Promise.all([minTime, fonts]).then(() => {
      counter.kill();
      gsap.timeline()
        .to(c, { v: 100, duration: 0.3, onUpdate: () => { count.textContent = String(Math.round(c.v)).padStart(3, '0'); } })
        .to(pre, { clipPath: 'inset(0 0 100% 0)', duration: 1.1, ease: 'expo.inOut' }, '+=0.1')
        .add(() => { pre.remove(); body.classList.remove('is-loading'); lenis && lenis.start(); onDone(); }, '-=0.45');
    });
  }

  // wrap a line's content in an inner span for masked line reveals
  function maskLines(el) {
    return $$('.line', el).map(line => {
      const inner = document.createElement('span');
      inner.className = 'line__inner';
      while (line.firstChild) inner.appendChild(line.firstChild);
      line.appendChild(inner);
      Object.assign(line.style, { overflow: 'hidden', paddingBottom: '.14em', marginBottom: '-.14em' });
      Object.assign(inner.style, { display: 'inline-block', position: 'relative' });
      return inner;
    });
  }

  /* ------------------------------------------------------------------------
     HERO (Scene 1)
     ------------------------------------------------------------------------ */
  const HERO_BASE = 0.16; // how much of the sketch draws on load
  function initHero() {
    const hero = $('.hero');
    const film = new Film(hero, 1, heroPlaceholder());
    const state = { intro: 0, scroll: 0 };
    const apply = () => film.setProgress(HERO_BASE * state.intro + (1 - HERO_BASE) * state.scroll);
    const title = $('.hero__title');
    const inners = maskLines(title);
    const scribble = $('.scribble .draw', title);
    const slen = scribble.getTotalLength();
    scribble.style.strokeDasharray = slen;
    scribble.style.strokeDashoffset = slen;

    if (!ANIM) {
      state.intro = 1; state.scroll = 0.55; apply();
      scribble.style.strokeDashoffset = 0;
      return { intro() {} };
    }

    gsap.set(inners, { yPercent: 115 });
    gsap.set(['.hero__eyebrow', '.hero__sub', '.hero__ctas', '.hero__meta'], { opacity: 0, y: 20 });
    apply();

    const intro = () => {
      gsap.timeline()
        .to(inners, { yPercent: 0, duration: 1.4, stagger: 0.12, ease: 'expo.out' })
        .to(state, { intro: 1, duration: 2.2, ease: 'power2.inOut', onUpdate: apply }, 0.1)
        .to('.hero__eyebrow', { opacity: 1, y: 0, duration: 1, ease: 'expo.out' }, 0.2)
        .to(scribble, { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, 0.9)
        .to(['.hero__sub', '.hero__ctas', '.hero__meta'], { opacity: 1, y: 0, duration: 1, stagger: 0.1, ease: 'expo.out' }, 0.7);
    };

    const tl = gsap.timeline({ defaults: { ease: 'none' } })
      .to('.hero__content', { yPercent: -10, opacity: 0, ease: 'power1.in', duration: 0.5 }, 0)
      .fromTo('.hero__meta', { opacity: 1 }, { opacity: 0, duration: 0.2, immediateRender: false }, 0)
      .to('.hero__vignette', { boxShadow: 'inset 0 0 18vmax 4vmax #F6F1E9', duration: 0.4 }, 0.6);
    ScrollTrigger.create({
      trigger: hero, start: 'top top', end: () => '+=' + innerHeight * (isMobile() ? 1.4 : 2.2),
      pin: true, scrub: 1, animation: tl,
      onUpdate: self => { state.scroll = self.progress; apply(); }
    });
    return { intro };
  }

  /* ------------------------------------------------------------------------
     Kinetic text
     ------------------------------------------------------------------------ */
  function initTextReveals() {
    if (!ANIM || !window.SplitText) return;
    $$('.reveal-lines').forEach(el => {
      const split = SplitText.create(el, { type: 'lines', mask: 'lines', linesClass: 'split-line' });
      gsap.from(split.lines, {
        yPercent: 110, duration: 1.2, stagger: 0.1, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 85%' }
      });
    });

    const manifesto = $('[data-words]');
    const words = SplitText.create(manifesto, { type: 'words' }).words;
    gsap.fromTo(words, { opacity: 0.12 }, {
      opacity: 1, stagger: 0.1, ease: 'none',
      scrollTrigger: { trigger: manifesto, start: 'top 75%', end: 'bottom 45%', scrub: true }
    });

    const sig = $('.mission__sig .draw');
    const len = sig.getTotalLength();
    gsap.fromTo(sig, { strokeDasharray: len, strokeDashoffset: len }, {
      strokeDashoffset: 0, duration: 2, ease: 'power2.inOut',
      scrollTrigger: { trigger: manifesto, start: 'bottom 60%' }
    });
  }

  /* ------------------------------------------------------------------------
     Stats + marquee
     ------------------------------------------------------------------------ */
  function initStats() {
    const track = $('.marquee__track');
    if (!ANIM) return;

    $$('[data-count]').forEach(el => {
      const to = +el.dataset.count, o = { v: 0 };
      el.textContent = '0';
      gsap.to(o, {
        v: to, duration: 1.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
        onUpdate: () => { el.textContent = Math.round(o.v); }
      });
    });

    const glyphs = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $$('[data-scramble]').forEach(el => {
      const final = el.dataset.scramble;
      ScrollTrigger.create({
        trigger: el, start: 'top 88%', once: true,
        onEnter: () => {
          const o = { t: 0 };
          gsap.to(o, {
            t: 1, duration: 1.1, ease: 'none',
            onUpdate: () => {
              el.textContent = [...final].map((ch, i) => o.t > (i + 1) / (final.length + 1) ? ch : glyphs[(Math.random() * 26) | 0]).join('');
            },
            onComplete: () => { el.textContent = final; }
          });
        }
      });
    });

    gsap.from('.stat', { opacity: 0, y: 30, stagger: 0.08, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.stats', start: 'top 85%' } });

    const loop = gsap.to(track, { xPercent: -50, repeat: -1, duration: 30, ease: 'none' });
    loop.totalTime(loop.duration() * 100); // headroom so reverse play never hits 0
    if (lenis) {
      let dir = 1;
      lenis.on('scroll', ({ velocity, direction }) => {
        if (direction) dir = direction;
        const boost = dir * (1 + Math.min(Math.abs(velocity) * 0.35, 5));
        gsap.to(loop, { timeScale: boost, duration: 0.3, overwrite: true, onComplete: () => gsap.to(loop, { timeScale: dir, duration: 1.2 }) });
      });
    }
  }

  /* ------------------------------------------------------------------------
     Pillars (stacking cards) + Story
     ------------------------------------------------------------------------ */
  function initPillars() {
    if (!ANIM) return;
    const cards = $$('.pillar');
    gsap.matchMedia().add('(min-width: 768px)', () => {
      cards.slice(0, -1).forEach((card, i) => {
        gsap.to(card, {
          scale: 0.94, ease: 'none',
          scrollTrigger: { trigger: cards[i + 1], start: 'top bottom', end: 'top 20%', scrub: true }
        });
      });
    });
    cards.forEach(card => {
      gsap.from($$('.pillar__title, .pillar__copy, .pillar__thumbs, .pillar__more', card), {
        y: 40, opacity: 0, stagger: 0.08, duration: 1.1, ease: 'expo.out',
        scrollTrigger: { trigger: card, start: 'top 75%' }
      });
    });
  }

  function initStory() {
    const tl = $('.timeline');
    if (!ANIM) { tl.style.setProperty('--line', 1); return; }
    gsap.from('.story__copy p', { y: 30, opacity: 0, stagger: 0.1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.story__copy', start: 'top 80%' } });
    gsap.fromTo(tl, { '--line': 0 }, { '--line': 1, ease: 'none', scrollTrigger: { trigger: tl, start: 'top 75%', end: 'bottom 55%', scrub: true } });
    gsap.from('.timeline li', { x: -20, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'expo.out', scrollTrigger: { trigger: tl, start: 'top 75%' } });
  }

  /* ------------------------------------------------------------------------
     WEB STUDIO — glass browser with rigid-body physics cards
     ------------------------------------------------------------------------ */
  class Desk {
    constructor(root) {
      this.root = root;
      this.vp = $('[data-desk]', root);
      this.layer = $('[data-cards]', root);
      this.tabs = $('[data-tabs]', root);
      this.urlEl = $('[data-url]', root);
      this.preview = $('[data-preview]', root);
      this.bodies = [];
      this.gravity = 2400;
      this.zeroG = false;
      this.inView = false;
      this.gate = !ANIM; // opened by the Scene 2 handoff
      this.running = false;
      this.dropped = false;
      this.held = null;
      this.openIndex = -1;
      this.z = 1;
      this.build();
      this.bind();
      this.measure();
      new IntersectionObserver(([e]) => { this.inView = e.isIntersecting; this.update(); }, { threshold: 0.15 }).observe(this.vp);
      addEventListener('resize', () => { this.measure(); this.render(); });
    }

    build() {
      WEBSITES.forEach((site, i) => {
        const [bg, fg, ac] = site.palette;
        const card = document.createElement('button');
        card.className = 'site-card';
        card.setAttribute('aria-label', `Open ${site.title} preview`);
        card.dataset.cursor = 'Throw';
        card.innerHTML = `
          <span class="site-card__bar"><i></i><i></i><i></i></span>
          <span class="site-card__shot">${site.thumb ? `<img src="${site.thumb}" alt="" draggable="false">` : mockThumb(site, i)}</span>
          <span class="site-card__label"><b>${site.title}</b><span>${site.url ? site.year : 'Coming soon'}</span></span>
          <span class="site-card__sheen" aria-hidden="true"></span>`;
        this.layer.appendChild(card);
        this.bodies.push({ el: card, i, x: 0, y: -400, a: 0, vx: 0, vy: 0, av: 0, w: 1, h: 1, invM: 1, invI: 1, entered: false, tilt: { x: 0, y: 0, tx: 0, ty: 0 } });

        const tab = document.createElement('button');
        tab.className = 'tab';
        tab.setAttribute('role', 'tab');
        tab.setAttribute('aria-selected', 'false');
        tab.style.setProperty('--c', ac);
        tab.innerHTML = `<i></i><span>${site.title}</span>`;
        tab.addEventListener('click', () => this.open(i));
        this.tabs.appendChild(tab);
      });
      $('[data-count-sites]', this.root).textContent = WEBSITES.length;
    }

    measure() {
      this.W = this.vp.clientWidth;
      this.H = this.vp.clientHeight;
      const cw = clamp(this.W * (isMobile() ? 0.42 : 0.2), 140, 280);
      const ch = Math.round(cw * 0.74);
      this.layer.style.setProperty('--cw', cw + 'px');
      this.layer.style.setProperty('--ch', ch + 'px');
      this.bodies.forEach(b => {
        b.w = cw; b.h = ch;
        const m = (cw * ch) / 10000;
        b.invM = 1 / m;
        b.invI = 1 / (m * (cw * cw + ch * ch) / 12);
        if (b.entered) { b.x = clamp(b.x, cw / 2, this.W - cw / 2); b.y = clamp(b.y, ch / 2, this.H - ch / 2); }
      });
    }

    spawn() {
      this.dropped = true;
      const n = this.bodies.length;
      if (reduced) { // tidy, static grid — no physics motion
        const b0 = this.bodies[0], gap = 20;
        const cols = Math.max(1, Math.min(n, Math.floor((this.W - gap) / (b0.w + gap))));
        const rows = Math.ceil(n / cols);
        const x0 = (this.W - (cols * b0.w + (cols - 1) * gap)) / 2 + b0.w / 2;
        const y0 = (this.H - (rows * b0.h + (rows - 1) * gap)) / 2 + b0.h / 2 + 12;
        this.bodies.forEach((b, k) => {
          Object.assign(b, { x: x0 + (k % cols) * (b.w + gap), y: y0 + Math.floor(k / cols) * (b.h + gap), a: 0, vx: 0, vy: 0, av: 0, entered: true });
        });
        return;
      }
      this.bodies.forEach((b, k) => {
        b.x = (this.W / (n + 1)) * (k + 1) + (Math.random() - 0.5) * 40;
        b.y = -b.h * (0.8 + k * 0.9);
        b.a = (Math.random() - 0.5) * 0.5;
        b.vx = (Math.random() - 0.5) * 300;
        b.vy = 200;
        b.av = (Math.random() - 0.5) * 3;
        b.entered = false;
      });
    }

    setGate(on) { this.gate = on; this.update(); }

    update() {
      const should = this.inView && this.gate;
      if (should && !this.dropped) this.spawn();
      if (reduced) { this.render(); return; }
      if (should && !this.running) {
        this.running = true;
        this.last = performance.now();
        requestAnimationFrame(this.tick = this.tick || (t => this.frame(t)));
      } else if (!should) this.running = false;
    }

    frame(t) {
      if (!this.running) return;
      const dt = Math.min((t - this.last) / 1000, 1 / 30);
      this.last = t;
      if (this.openIndex < 0) {
        const steps = 4;
        if (!this.tidying) for (let s = 0; s < steps; s++) this.step(dt / steps);
        this.render();
      }
      requestAnimationFrame(this.tick);
    }

    step(h) {
      const g = this.zeroG ? 0 : this.gravity;
      const lin = this.zeroG ? 0.9995 : 0.998, ang = 0.995;
      for (const b of this.bodies) {
        b.vy += g * h;
        if (this.held && this.held.b === b) this.drag(b, h);
        b.x += b.vx * h; b.y += b.vy * h; b.a += b.av * h;
        b.vx *= lin; b.vy *= lin; b.av *= ang;
        if (!b.entered && b.y - b.h / 2 > 0) b.entered = true;
      }
      for (let it = 0; it < 3; it++) {
        for (let i = 0; i < this.bodies.length; i++)
          for (let j = i + 1; j < this.bodies.length; j++) this.collide(this.bodies[i], this.bodies[j]);
        for (const b of this.bodies) this.walls(b);
      }
    }

    // soft mouse-joint: pulls the grabbed point towards the pointer, so off-centre grabs swing
    drag(b, h) {
      const { lx, ly, tx, ty } = this.held;
      const c = Math.cos(b.a), s = Math.sin(b.a);
      const rx = lx * c - ly * s, ry = lx * s + ly * c;
      const px = b.x + rx, py = b.y + ry;
      const vpx = b.vx - b.av * ry, vpy = b.vy + b.av * rx;
      const k = 22;
      const dvx = (tx - px) * k - vpx, dvy = (ty - py) * k - vpy;
      const kx = b.invM + ry * ry * b.invI, ky = b.invM + rx * rx * b.invI;
      const jx = (dvx / kx) * 0.5, jy = (dvy / ky) * 0.5;
      b.vx += jx * b.invM; b.vy += jy * b.invM;
      b.av += (rx * jy - ry * jx) * b.invI;
      b.av *= 0.97;
    }

    corners(b) {
      const c = Math.cos(b.a), s = Math.sin(b.a), hw = b.w / 2, hh = b.h / 2;
      return [[-hw, -hh], [hw, -hh], [hw, hh], [-hw, hh]].map(([x, y]) => ({ x: b.x + x * c - y * s, y: b.y + x * s + y * c }));
    }

    inside(p, b) {
      const c = Math.cos(b.a), s = Math.sin(b.a), dx = p.x - b.x, dy = p.y - b.y;
      return Math.abs(dx * c + dy * s) <= b.w / 2 + 0.5 && Math.abs(-dx * s + dy * c) <= b.h / 2 + 0.5;
    }

    // impulse between A and B (A may be null = static wall) at contact c with normal n (A → B)
    impulse(A, B, c, n, e, mu) {
      const rBx = c.x - B.x, rBy = c.y - B.y;
      let vx = B.vx - B.av * rBy, vy = B.vy + B.av * rBx;
      let rAx = 0, rAy = 0, iMA = 0, iIA = 0;
      if (A) {
        rAx = c.x - A.x; rAy = c.y - A.y; iMA = A.invM; iIA = A.invI;
        vx -= A.vx - A.av * rAy; vy -= A.vy + A.av * rAx;
      }
      const vn = vx * n.x + vy * n.y;
      if (vn > 0) return;
      const rAn = rAx * n.y - rAy * n.x, rBn = rBx * n.y - rBy * n.x;
      const restitution = Math.abs(vn) < 40 ? 0 : e;
      const j = -(1 + restitution) * vn / (iMA + B.invM + rAn * rAn * iIA + rBn * rBn * B.invI);
      const apply = (jx, jy) => {
        B.vx += jx * B.invM; B.vy += jy * B.invM; B.av += (rBx * jy - rBy * jx) * B.invI;
        if (A) { A.vx -= jx * iMA; A.vy -= jy * iMA; A.av -= (rAx * jy - rAy * jx) * iIA; }
      };
      apply(j * n.x, j * n.y);
      // friction
      let tx = vx - vn * n.x, ty = vy - vn * n.y;
      const tl = Math.hypot(tx, ty);
      if (tl < 1e-4) return;
      tx /= tl; ty /= tl;
      const rAt = rAx * ty - rAy * tx, rBt = rBx * ty - rBy * tx;
      let jt = -(vx * tx + vy * ty) / (iMA + B.invM + rAt * rAt * iIA + rBt * rBt * B.invI);
      jt = clamp(jt, -j * mu, j * mu);
      apply(jt * tx, jt * ty);
    }

    collide(A, B) {
      const ca = this.corners(A), cb = this.corners(B);
      const axes = [A.a, B.a].flatMap(a => [{ x: Math.cos(a), y: Math.sin(a) }, { x: -Math.sin(a), y: Math.cos(a) }]);
      let min = Infinity, n = null;
      for (const ax of axes) {
        let a0 = Infinity, a1 = -Infinity, b0 = Infinity, b1 = -Infinity;
        for (const p of ca) { const d = p.x * ax.x + p.y * ax.y; a0 = Math.min(a0, d); a1 = Math.max(a1, d); }
        for (const p of cb) { const d = p.x * ax.x + p.y * ax.y; b0 = Math.min(b0, d); b1 = Math.max(b1, d); }
        const o = Math.min(a1, b1) - Math.max(a0, b0);
        if (o <= 0) return;
        if (o < min) { min = o; n = { x: ax.x, y: ax.y }; }
      }
      if ((B.x - A.x) * n.x + (B.y - A.y) * n.y < 0) { n.x = -n.x; n.y = -n.y; }
      const pts = [...cb.filter(p => this.inside(p, A)), ...ca.filter(p => this.inside(p, B))];
      const c = pts.length
        ? { x: pts.reduce((s, p) => s + p.x, 0) / pts.length, y: pts.reduce((s, p) => s + p.y, 0) / pts.length }
        : { x: (A.x + B.x) / 2, y: (A.y + B.y) / 2 };
      const corr = Math.max(min - 0.5, 0) * 0.6 / (A.invM + B.invM);
      A.x -= n.x * corr * A.invM; A.y -= n.y * corr * A.invM;
      B.x += n.x * corr * B.invM; B.y += n.y * corr * B.invM;
      this.impulse(A, B, c, n, 0.2, 0.35);
    }

    walls(b) {
      const W = this.W, H = this.H;
      const cs = this.corners(b);
      const sides = [
        { n: { x: 1, y: 0 }, pen: p => -p.x },
        { n: { x: -1, y: 0 }, pen: p => p.x - W },
        { n: { x: 0, y: -1 }, pen: p => p.y - H },
        ...(b.entered ? [{ n: { x: 0, y: 1 }, pen: p => -p.y }] : [])
      ];
      for (const side of sides) {
        let deepest = 0;
        const hits = cs.filter(p => { const d = side.pen(p); if (d > deepest) deepest = d; return d > 0; });
        if (!hits.length) continue;
        b.x += side.n.x * deepest; b.y += side.n.y * deepest;
        hits.forEach(p => this.impulse(null, b, { x: p.x + side.n.x * deepest, y: p.y + side.n.y * deepest }, side.n, 0.4, 0.45));
      }
    }

    render() {
      for (const b of this.bodies) {
        const t = b.tilt; // eased 3D tilt toward the cursor
        t.x += (t.tx - t.x) * 0.16; t.y += (t.ty - t.y) * 0.16;
        b.el.style.transform = `translate3d(${b.x - b.w / 2}px, ${b.y - b.h / 2}px, 0) rotate(${b.a}rad) perspective(900px) rotateX(${t.x.toFixed(2)}deg) rotateY(${t.y.toFixed(2)}deg)`;
      }
    }

    // slide every card into a neat row (bottom-aligned so gravity keeps them there)
    tidy() {
      this.zeroG = false;
      $('[data-tool="zerog"]', this.root).setAttribute('aria-pressed', 'false');
      const n = this.bodies.length, b0 = this.bodies[0], gap = Math.max(14, this.W * 0.02);
      const cols = Math.max(1, Math.min(n, Math.floor((this.W - gap) / (b0.w + gap))));
      const rows = Math.ceil(n / cols);
      const yFloor = this.H - b0.h / 2 - 1;
      // row 0 sits on the floor; full rows at the bottom, a partial row centred on top
      // (so every card is supported), rows stacked flush so nothing drops or tips
      const target = k => {
        const row = Math.floor(k / cols), inRow = row === rows - 1 ? n - row * cols : cols;
        const x0 = (this.W - (inRow * b0.w + (inRow - 1) * gap)) / 2 + b0.w / 2;
        return { x: x0 + (k % cols) * (b0.w + gap), y: yFloor - row * (b0.h + 1) };
      };
      this.bodies.forEach(b => { b.a = Math.atan2(Math.sin(b.a), Math.cos(b.a)); b.vx = b.vy = b.av = 0; b.entered = true; });
      if (!ANIM) { this.bodies.forEach((b, k) => Object.assign(b, target(k), { a: 0 })); this.render(); return; }
      this.tidying = true;
      this.bodies.forEach((b, k) => gsap.to(b, {
        ...target(k), a: 0, duration: 0.9, delay: k * 0.06, ease: 'expo.inOut',
        onComplete: k === n - 1 ? () => { this.tidying = false; this.bodies.forEach(q => { q.vx = q.vy = q.av = 0; }); } : undefined
      }));
    }

    hideCoach() {
      const coach = $('[data-coach]', this.root);
      if (coach) coach.classList.add('is-gone');
    }

    local(e) {
      const r = this.vp.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    }

    bind() {
      const hx = $('[data-hx]', this.root), hy = $('[data-hy]', this.root);
      this.vp.addEventListener('pointermove', e => {
        const p = this.local(e);
        hx.textContent = String(Math.max(0, Math.round(p.x))).padStart(4, '0');
        hy.textContent = String(Math.max(0, Math.round(p.y))).padStart(4, '0');
      });

      this.bodies.forEach(b => {
        const el = b.el;
        el.addEventListener('pointerdown', e => {
          if (this.openIndex >= 0 || reduced) return;
          e.preventDefault();
          el.setPointerCapture(e.pointerId);
          const p = this.local(e);
          const dx = p.x - b.x, dy = p.y - b.y, c = Math.cos(-b.a), s = Math.sin(-b.a);
          this.held = { b, lx: dx * c - dy * s, ly: dx * s + dy * c, tx: p.x, ty: p.y, sx: e.clientX, sy: e.clientY, t0: performance.now(), moved: false };
          el.classList.add('is-held');
          el.style.zIndex = ++this.z;
          b.tilt.tx = b.tilt.ty = 0;
          this.hideCoach();
          if (!this.running) this.update();
        });
        el.addEventListener('pointermove', e => {
          if (!this.held && finePointer && !reduced) { // hover: tilt toward the cursor + move the light sheen
            const r = el.getBoundingClientRect();
            const nx = clamp((e.clientX - r.left) / r.width, 0, 1) - 0.5, ny = clamp((e.clientY - r.top) / r.height, 0, 1) - 0.5;
            b.tilt.tx = -ny * 14; b.tilt.ty = nx * 16;
            el.style.setProperty('--gx', `${(nx + 0.5) * 100}%`);
            el.style.setProperty('--gy', `${(ny + 0.5) * 100}%`);
          }
          if (!this.held || this.held.b !== b) return;
          const p = this.local(e);
          this.held.tx = p.x; this.held.ty = p.y;
          if (Math.hypot(e.clientX - this.held.sx, e.clientY - this.held.sy) > 6) this.held.moved = true;
        });
        const release = e => {
          if (!this.held || this.held.b !== b) return;
          const { moved, t0 } = this.held;
          this.held = null;
          el.classList.remove('is-held');
          const sp = Math.hypot(b.vx, b.vy), max = 3200;
          if (sp > max) { b.vx *= max / sp; b.vy *= max / sp; }
          if (e.type === 'pointerup' && !moved && performance.now() - t0 < 300) this.open(b.i);
        };
        el.addEventListener('pointerup', release);
        el.addEventListener('pointercancel', release);
        el.addEventListener('pointerleave', () => { b.tilt.tx = b.tilt.ty = 0; });
        // keyboard: Enter/Space opens (click with detail 0), arrows nudge
        el.addEventListener('click', e => { if (e.detail === 0 || reduced) this.open(b.i); });
        el.addEventListener('keydown', e => {
          const step = e.shiftKey ? 96 : 24;
          const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key];
          if (!d) return;
          e.preventDefault();
          b.x = clamp(b.x + d[0], b.w / 2, this.W - b.w / 2);
          b.y = clamp(b.y + d[1], b.h / 2, this.H - b.h / 2);
          b.vx = b.vy = 0;
          this.render();
        });
      });

      $$('[data-tool]', this.root).forEach(btn => btn.addEventListener('click', () => {
        const tool = btn.dataset.tool;
        if (tool === 'zerog') {
          this.zeroG = !this.zeroG;
          btn.setAttribute('aria-pressed', this.zeroG);
          if (this.zeroG) this.bodies.forEach(b => { b.vy -= 500 + Math.random() * 500; b.vx += (Math.random() - 0.5) * 400; b.av += (Math.random() - 0.5) * 2; });
        } else if (tool === 'shuffle') {
          this.bodies.forEach(b => { b.vx = (Math.random() - 0.5) * 2600; b.vy = -600 - Math.random() * 1400; b.av = (Math.random() - 0.5) * 14; });
        } else if (tool === 'tidy') {
          this.close(true);
          this.tidy();
        }
        this.hideCoach();
        this.close(true);
      }));

      // preview
      const pBody = $('[data-preview-body]', this.root);
      const pProg = $('[data-preview-progress]', this.root);
      pBody.addEventListener('scroll', () => {
        const max = pBody.scrollHeight - pBody.clientHeight;
        pProg.textContent = (max > 0 ? Math.round((pBody.scrollTop / max) * 100) : 0) + '%';
      });
      $('[data-preview-close]', this.root).addEventListener('click', () => this.close());
      this.vp.addEventListener('pointerdown', e => {
        if (this.openIndex >= 0 && !this.preview.contains(e.target)) this.close();
      });
      document.addEventListener('keydown', e => { if (e.key === 'Escape' && this.openIndex >= 0) this.close(); });
    }

    typeUrl(el, text) {
      clearInterval(el._typer);
      let i = 0;
      el.textContent = '';
      el._typer = setInterval(() => {
        el.textContent = text.slice(0, ++i);
        if (i >= text.length) clearInterval(el._typer);
      }, 26);
    }

    loadBar() {
      if (!ANIM) return;
      gsap.fromTo($('.browser__load i', this.root), { scaleX: 0, opacity: 1 }, { scaleX: 1, duration: 0.9, ease: 'power2.out', onComplete() { gsap.to(this.targets(), { opacity: 0, duration: 0.4 }); } });
    }

    open(i) {
      const site = WEBSITES[i];
      const b = this.bodies[i];
      const pv = this.preview;
      const was = this.openIndex;
      this.openIndex = i;
      if (this.held) { this.held.b.el.classList.remove('is-held'); this.held = null; }

      $('[data-preview-title]', pv).textContent = site.title;
      $('[data-preview-meta]', pv).textContent = site.url ? `${site.role} · ${site.year}` : 'Coming soon';
      const pBody = $('[data-preview-body]', pv);
      pBody.innerHTML = site.full ? `<img src="${site.full}" alt="Full-page screenshot of ${site.title}">` : mockFull(site, i);
      pBody.scrollTop = 0;
      $('[data-preview-progress]', pv).textContent = '0%';
      const visit = $('[data-preview-visit]', pv);
      if (site.url) { visit.href = site.url; visit.removeAttribute('aria-disabled'); visit.firstElementChild.textContent = 'Visit this site ↗'; }
      else { visit.removeAttribute('href'); visit.setAttribute('aria-disabled', 'true'); visit.firstElementChild.textContent = 'Launching soon'; }

      $$('.tab', this.root).forEach((t, k) => { t.classList.toggle('is-active', k === i); t.setAttribute('aria-selected', k === i); });
      const host = site.url ? site.url.replace(/^https?:\/\//, '') : site.host;
      this.typeUrl($('[data-preview-url]', pv), host);
      this.typeUrl(this.urlEl, host);
      this.loadBar();
      this.vp.classList.add('desk-blur');

      pv.hidden = false;
      if (ANIM && was < 0) {
        const vr = this.vp.getBoundingClientRect(), cr = b.el.getBoundingClientRect();
        gsap.set(pv, { x: 0, y: 0, scaleX: 1, scaleY: 1 });
        const pr = pv.getBoundingClientRect();
        gsap.fromTo(pv,
          { x: cr.left - pr.left, y: cr.top - pr.top, scaleX: cr.width / pr.width, scaleY: cr.height / pr.height, opacity: 0.3 },
          { x: 0, y: 0, scaleX: 1, scaleY: 1, opacity: 1, duration: 0.9, ease: 'expo.out' });
        void vr;
      } else if (ANIM) {
        gsap.fromTo(pBody, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      }
      pBody.focus({ preventScroll: true });
    }

    close(instant) {
      if (this.openIndex < 0) return;
      const i = this.openIndex;
      const b = this.bodies[i];
      const pv = this.preview;
      const done = () => {
        pv.hidden = true;
        if (hasGSAP) gsap.set(pv, { clearProps: 'transform,opacity' });
        this.openIndex = -1;
        this.vp.classList.remove('desk-blur');
        $$('.tab', this.root).forEach(t => { t.classList.remove('is-active'); t.setAttribute('aria-selected', 'false'); });
        this.typeUrl(this.urlEl, 'prakruti.studio/desk');
        this.last = performance.now();
        if (!instant) b.el.focus({ preventScroll: true });
      };
      if (!ANIM || instant) return done();
      const cr = b.el.getBoundingClientRect(), pr = pv.getBoundingClientRect();
      gsap.to(pv, {
        x: cr.left - pr.left, y: cr.top - pr.top, scaleX: cr.width / pr.width, scaleY: cr.height / pr.height, opacity: 0,
        duration: 0.6, ease: 'expo.inOut', onComplete: done
      });
    }
  }

  /* Placeholder sites are drawn as pencil "blueprint" wireframes on drafting paper:
     five different page layouts, each with one accent element in the project's colour. */
  function blueprint(i) {
    let d = 0; // draw order, used for the stroke-drawing animation in the full preview
    const R = (x, y, w, h) => `<rect class="s" style="--d:${d++}" x="${x}" y="${y}" width="${w}" height="${h}" rx="1.5" pathLength="1"/>`;
    const X = (x, y, w, h) => R(x, y, w, h) + `<path class="s f" style="--d:${d++}" d="M${x} ${y}L${x + w} ${y + h}M${x + w} ${y}L${x} ${y + h}" pathLength="1"/>`;
    const L = (x, y, w, h = 3) => `<rect class="t" style="--d:${d++}" x="${x}" y="${y}" width="${w}" height="${h}" rx="${h / 2}"/>`;
    const P = (x, y, w) => `<rect class="a" style="--d:${d++}" x="${x}" y="${y}" width="${w}" height="9" rx="4.5"/>`;
    const nav = () => L(12, 11, 34, 4) + L(160, 12, 16) + L(182, 12, 16) + L(204, 12, 24);
    const layouts = [
      () => nav() + L(12, 38, 96, 7) + L(12, 50, 74, 7) + L(12, 66, 88) + L(12, 73, 80) + P(12, 86, 38) + X(126, 32, 102, 68) + R(12, 112, 68, 28) + R(86, 112, 68, 28) + R(160, 112, 68, 28),
      () => nav() + L(62, 36, 116, 7) + L(82, 48, 76, 7) + L(78, 63, 84) + P(101, 74, 38) + X(12, 94, 68, 46) + X(86, 94, 68, 46) + X(160, 94, 68, 46),
      () => nav() + L(12, 32, 70, 6) + X(12, 46, 70, 94) + X(88, 46, 70, 44) + X(88, 96, 70, 44) + X(164, 46, 64, 62) + X(164, 114, 64, 26),
      () => X(0, 20, 240, 80) + L(12, 9, 34, 4) + L(204, 10, 24) + L(24, 48, 92, 7) + L(24, 60, 64, 7) + P(24, 75, 38) + L(12, 112, 110) + L(12, 120, 94) + L(12, 128, 104) + R(150, 110, 78, 30),
      () => nav() + L(12, 34, 170, 9) + L(12, 48, 128, 9) + L(12, 72, 60) + L(12, 79, 64) + L(12, 86, 56) + L(12, 93, 62) + L(12, 100, 48) + P(12, 112, 38) + X(86, 68, 142, 72)
    ];
    return `<svg class="bp" viewBox="0 0 240 150" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${layouts[i % 5]()}</svg>`;
  }

  function mockThumb(site, i) {
    return `<span class="bp-sheet" style="--ac:${site.palette[2]}">${blueprint(i)}<span class="bp-chip">Coming soon</span></span>`;
  }

  function mockFull(site, i) {
    return `<div class="bp-page" style="--ac:${site.palette[2]}">
      <div class="bp-page__head label"><span>${site.title}</span><span>Sheet 1 of 2 · In the studio</span></div>
      <div class="bp-page__sheet bp--draw">${blueprint(i)}</div>
      <div class="bp-page__note">
        <h4>On the <em>drawing board.</em></h4>
        <p>This site is being designed in the studio. It will launch here soon, and you'll be able to scroll the real thing right inside this window.</p>
        <span class="bp-chip">Coming soon</span>
      </div>
      <div class="bp-page__head label"><span>Inner pages</span><span>Sheet 2 of 2</span></div>
      <div class="bp-page__sheet bp--draw">${blueprint(i + 2)}</div>
    </div>`;
  }

  /* ------------------------------------------------------------------------
     SCENE 2 (orbit) → Web Studio handoff
     ------------------------------------------------------------------------ */
  function initStudio() {
    const section = $('.studio');
    if (!section) return; // Web Studio is kept in the code but not shown on the public site
    const film = new Film(section, 2, studioPlaceholder());
    const desk = new Desk(section);
    const browser = $('[data-browser]', section);

    if (!ANIM) { film.setProgress(1); return; }

    gsap.set(browser, { xPercent: -50, x: 0 });
    const caps = $$('.studio__captions span', section);
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    // film runs 0 → .72 of the pin, handoff .66 → .84, then a short hold so the desk settles
    const proxy = { p: 0 };
    tl.to(proxy, { p: 1, duration: 0.72, onUpdate: () => film.setProgress(proxy.p) }, 0);
    caps.forEach((c, k) => {
      const at = 0.03 + k * 0.155;
      tl.fromTo(c, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.05, ease: 'power2.out' }, at)
        .to(c, { opacity: 0, y: -40, duration: 0.05, ease: 'power2.in' }, at + 0.11);
    });
    // browser starts as the "monitor" on the desk and scales up to fill the stage
    tl.fromTo(browser,
      { scale: 0.26, yPercent: 8, opacity: () => (film.mode === 'placeholder' ? 0.95 : 0) },
      { scale: 1, yPercent: 0, opacity: 1, duration: 0.18, ease: 'power2.inOut' }, 0.66)
      .to(film.canvas, { opacity: 0.18, duration: 0.12 }, 0.72)
      .to('.studio__ph', { opacity: 0.35, duration: 0.12 }, 0.72)
      .fromTo('.studio__head', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.06 }, 0.82)
      .add(() => {}, 1);

    studioTrigger = ScrollTrigger.create({
      trigger: section, start: 'top top', end: () => '+=' + innerHeight * (isMobile() ? 2 : 2.8),
      pin: true, scrub: 1, animation: tl,
      onUpdate: self => desk.setGate(self.progress > 0.8)
    });
  }

  /* ------------------------------------------------------------------------
     Services
     ------------------------------------------------------------------------ */
  function initServices() {
    const offers = $$('.offer');
    const preview = $('.offer-preview');
    const art = $('img', preview);
    offers.forEach(o => {
      const row = $('.offer__row', o);
      row.addEventListener('click', () => {
        const open = !o.classList.contains('is-open');
        offers.forEach(x => { x.classList.remove('is-open'); $('.offer__row', x).setAttribute('aria-expanded', 'false'); });
        if (open) { o.classList.add('is-open'); row.setAttribute('aria-expanded', 'true'); }
      });
      $('[data-enquire]', o).addEventListener('click', () => setEnquiry(o.dataset.enquiry));
      if (finePointer) {
        o.addEventListener('mouseenter', () => { art.src = o.dataset.img; preview.classList.add('is-on'); });
        o.addEventListener('mouseleave', () => preview.classList.remove('is-on'));
      }
    });
    if (finePointer && hasGSAP) {
      const xTo = gsap.quickTo(preview, 'x', { duration: 0.6, ease: 'power3' });
      const yTo = gsap.quickTo(preview, 'y', { duration: 0.6, ease: 'power3' });
      const rTo = gsap.quickTo(preview, 'rotation', { duration: 0.8, ease: 'power3' });
      let lastX = 0;
      $('.offers').addEventListener('mousemove', e => {
        xTo(e.clientX + 30); yTo(e.clientY - 140);
        rTo(clamp((e.clientX - lastX) * 0.6, -12, 12));
        lastX = e.clientX;
      });
    }
  }

  function setEnquiry(value) {
    const radio = $(`.chips input[value="${value}"]`);
    if (radio) radio.checked = true;
  }

  /* ------------------------------------------------------------------------
     Selected Work gallery + lightbox
     ------------------------------------------------------------------------ */
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
  const metaLine = w => [w.medium, w.year].filter(Boolean).join(', ');

  function mediaMarkup(img, w, big) {
    if (img.video && big) return `<video src="${img.video}" poster="${img.src}" autoplay muted loop playsinline controls></video>`;
    return `<img src="${big ? img.src : img.sm}" alt="${esc(w.title)}, ${esc(w.medium)}" width="${img.w}" height="${img.h}" ${big ? '' : 'loading="lazy"'} decoding="async">`;
  }

  function initGallery() {
    const track = $('[data-track]');
    track.innerHTML = WORKS.map((w, i) => {
      if (HIDDEN_CATEGORIES.includes(w.category)) return ''; // kept in data, not shown in the gallery
      const cover = w.images[0];
      const ar = clamp(cover.w / cover.h, 0.62, 1.6).toFixed(3);
      const n = w.images.length, vids = w.images.some(x => x.video);
      const badge = vids ? 'Video' : n > 1 ? `${n} photos` : '';
      return `
      <button class="art-item" data-cat="${w.category}" data-i="${i}" data-cursor="View" style="--ar:${ar}" aria-label="View ${esc(w.title)}: ${esc(w.medium)}">
        <span class="art-item__frame">${mediaMarkup(cover, w)}${badge ? `<span class="art-item__badge">${badge}</span>` : ''}</span>
        <span class="art-item__cap"><strong>${esc(w.title)}</strong><span>${esc(metaLine(w))}</span></span>
      </button>`;
    }).join('');

    const items = $$('.art-item', track);
    const count = $('[data-work-count]');
    count.textContent = `(${items.length})`;

    $$('[data-filter]').forEach(btn => btn.addEventListener('click', () => {
      $$('[data-filter]').forEach(b => b.classList.toggle('is-active', b === btn));
      const f = btn.dataset.filter;
      const apply = () => {
        items.forEach(it => it.classList.toggle('is-hidden', f !== 'all' && it.dataset.cat !== f));
        count.textContent = `(${items.filter(it => !it.classList.contains('is-hidden')).length})`;
        if (hasGSAP) {
          ScrollTrigger.refresh();
          // the pinned distance changed: stay at the start of the gallery
          if (workTrigger) lenis ? lenis.scrollTo(workTrigger.start, { immediate: true }) : scrollTo(0, workTrigger.start);
        }
      };
      if (!ANIM) return apply();
      gsap.to(items, {
        opacity: 0, y: 20, duration: 0.3, stagger: 0.01, onComplete: () => {
          apply();
          gsap.fromTo(items.filter(it => !it.classList.contains('is-hidden')), { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, stagger: 0.04, ease: 'expo.out' });
        }
      });
    }));

    if (ANIM) {
      gsap.matchMedia().add('(min-width: 768px)', () => {
        const dist = () => Math.max(0, track.scrollWidth - innerWidth);
        const tween = gsap.to(track, {
          x: () => -dist(), ease: 'none',
          scrollTrigger: { trigger: '.work', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 1, invalidateOnRefresh: true }
        });
        workTrigger = tween.scrollTrigger;
        return () => { workTrigger = null; };
      });
      gsap.from('.work__head > *', { y: 40, opacity: 0, stagger: 0.1, duration: 1.1, ease: 'expo.out', scrollTrigger: { trigger: '.work', start: 'top 75%' } });
    }

    // lightbox: one project at a time, with a thumbnail strip for its photos (before → process → finished)
    const lb = $('[data-lightbox]');
    const artEl = $('[data-lb-art]'), cap = $('[data-lb-cap]'), strip = $('[data-lb-strip]');
    let cur = 0, img = 0, lastFocus = null;
    const visible = () => items.filter(it => !it.classList.contains('is-hidden')).map(it => +it.dataset.i);
    const render = (animate = true) => {
      const w = WORKS[cur];
      artEl.innerHTML = mediaMarkup(w.images[img], w, true);
      cap.innerHTML = `<span class="label">${w.category}${w.images.length > 1 ? ` · ${img + 1} / ${w.images.length}` : ''}</span><strong>${esc(w.title)}</strong><span>${esc(metaLine(w))}</span>${w.desc ? `<p>${esc(w.desc)}</p>` : ''}`;
      strip.innerHTML = w.images.length > 1 ? w.images.map((x, k) =>
        `<button class="${k === img ? 'is-active' : ''}" data-k="${k}" aria-label="Image ${k + 1} of ${w.images.length}"><img src="${x.sm}" alt="" loading="lazy">${x.video ? '<i>▶</i>' : ''}</button>`).join('') : '';
      const active = $('.is-active', strip);
      active && active.scrollIntoView({ block: 'nearest', inline: 'center' });
      if (ANIM && animate) gsap.fromTo(artEl, { opacity: 0, scale: 0.98 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'expo.out' });
    };
    const openProject = (i, k = 0) => { cur = i; img = k; render(); };
    const step = d => {
      const n = WORKS[cur].images.length;
      if (img + d >= 0 && img + d < n) { img += d; return render(); }
      const v = visible(), next = v[(v.indexOf(cur) + d + v.length) % v.length];
      openProject(next, d < 0 ? WORKS[next].images.length - 1 : 0);
    };
    const openLb = i => { lastFocus = document.activeElement; openProject(i); lb.hidden = false; lenis && lenis.stop(); $('[data-lb-close]').focus(); };
    const closeLb = () => { lb.hidden = true; artEl.innerHTML = ''; lenis && lenis.start(); lastFocus && lastFocus.focus({ preventScroll: true }); };
    items.forEach(it => it.addEventListener('click', () => openLb(+it.dataset.i)));
    strip.addEventListener('click', e => { const b = e.target.closest('[data-k]'); if (b) { img = +b.dataset.k; render(); } });
    $('[data-lb-close]').addEventListener('click', closeLb);
    $('[data-lb-prev]').addEventListener('click', () => step(-1));
    $('[data-lb-next]').addEventListener('click', () => step(1));
    document.addEventListener('keydown', e => {
      if (lb.hidden) return;
      if (e.key === 'Escape') closeLb();
      if (e.key === 'ArrowLeft') step(-1);
      if (e.key === 'ArrowRight') step(1);
      if (e.key === 'Tab') { // focus trap
        const f = $$('button, video', lb), first = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
    let sx = null;
    artEl.addEventListener('pointerdown', e => { sx = e.clientX; });
    artEl.addEventListener('pointerup', e => { if (sx != null && Math.abs(e.clientX - sx) > 60) step(e.clientX < sx ? 1 : -1); sx = null; });

    // anything on the page can open a project: <a data-open-work="slug-title">
    document.addEventListener('click', e => {
      const a = e.target.closest('[data-open-work]');
      if (!a) return;
      const i = WORKS.findIndex(w => w.title === a.dataset.openWork);
      if (i >= 0) { e.preventDefault(); openLb(i); }
    });
  }

  /* ------------------------------------------------------------------------
     FINALE (Scene 3)
     ------------------------------------------------------------------------ */
  function initFinale() {
    const section = $('.finale');
    const film = new Film(section, 3, finalePlaceholder());
    const title = $('.finale__title');
    const inners = maskLines(title);
    if (!ANIM) { film.setProgress(1); return; }

    gsap.set(inners, { yPercent: 115 });
    gsap.set(['.finale__content .label', '.finale__sub', '.finale__ctas'], { opacity: 0, y: 24 });
    const proxy = { p: 0 };
    const tl = gsap.timeline({ defaults: { ease: 'none' } })
      .to(proxy, { p: 1, duration: 0.85, onUpdate: () => film.setProgress(proxy.p) }, 0)
      .to('.finale__shade', { opacity: 1, duration: 0.2 }, 0.5)
      .to('.finale__content .label', { opacity: 1, y: 0, duration: 0.08, ease: 'power2.out' }, 0.6)
      .to(inners, { yPercent: 0, duration: 0.14, stagger: 0.05, ease: 'power3.out' }, 0.62)
      .to(['.finale__sub', '.finale__ctas'], { opacity: 1, y: 0, duration: 0.1, stagger: 0.04, ease: 'power2.out' }, 0.8)
      .add(() => {}, 1);
    ScrollTrigger.create({
      trigger: section, start: 'top top', end: () => '+=' + innerHeight * (isMobile() ? 1.5 : 2.2),
      pin: true, scrub: 1, animation: tl
    });
  }

  /* ------------------------------------------------------------------------
     Contact form → opens the visitor's email app (mailto)
     ------------------------------------------------------------------------ */
  function initForm() {
    const form = $('[data-form]');
    const status = $('.form__status', form);
    form.addEventListener('submit', e => {
      e.preventDefault();
      const d = new FormData(form);
      const name = (d.get('name') || '').trim();
      const email = (d.get('email') || '').trim();
      const message = (d.get('message') || '').trim();
      const type = d.get('type') || 'Enquiry';
      const budget = (d.get('budget') || '').trim();
      const checks = [['f-name', !!name], ['f-email', /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)], ['f-msg', !!message]];
      checks.forEach(([id, ok]) => $('#' + id).closest('.field').classList.toggle('is-invalid', !ok));
      const bad = checks.find(([, ok]) => !ok);
      if (bad) {
        status.textContent = 'Please add your name, a valid email and a short message.';
        status.classList.add('is-error');
        $('#' + bad[0]).focus();
        return;
      }
      const subject = `[${type} enquiry] from ${name}`;
      const bodyText = [
        `Hi Prakruti,`, ``, message, ``, `—`,
        `Name: ${name}`, `Email: ${email}`, `Interested in: ${type}`,
        budget ? `Budget / timeline: ${budget}` : null
      ].filter(l => l !== null).join('\n');
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
      status.classList.remove('is-error');
      status.innerHTML = `Your email app is opening. Just hit send. Nothing opened? Email <button type="button" class="u-link" data-copy="${EMAIL}">${EMAIL}</button>`;
    });
  }

  /* ------------------------------------------------------------------------
     Canvas Shop (coming soon): "Notify me" opens a pre-filled email to Prakruti
     ------------------------------------------------------------------------ */
  function initShop() {
    const form = $('[data-notify]');
    const field = $('.shop__field', form);
    const status = $('.shop__status', form);
    form.addEventListener('submit', e => {
      e.preventDefault();
      const email = $('#n-email').value.trim();
      const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      field.classList.toggle('is-invalid', !ok);
      if (!ok) {
        status.textContent = 'Please enter a valid email address.';
        status.classList.add('is-error');
        $('#n-email').focus();
        return;
      }
      const subject = 'Canvas Shop: please notify me';
      const body = `Hi Prakruti,\n\nPlease let me know when the Canvas Shop opens.\n\nMy email: ${email}`;
      location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      status.classList.remove('is-error');
      status.innerHTML = `<span class="notify-card">
          <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="17" pathLength="1"/><path d="M12 21l5.5 5.5L29 15" pathLength="1"/></svg>
          <span><strong>Almost there</strong><span>Your email app is opening with a note to Prakruti. Just hit send.</span>
          <span class="notify-card__alt">Nothing opened? Write to <button type="button" class="u-link" data-copy="${EMAIL}">${EMAIL}</button></span></span>
        </span>`;
    });

    // paintings open in the project viewer from the keyboard too
    $$('.shop .canvas').forEach(c => c.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); c.click(); }
    }));

    if (!ANIM) return;
    gsap.from('.shop .canvas', {
      y: 60, opacity: 0, duration: 1.2, stagger: 0.12, ease: 'expo.out', clearProps: 'transform,opacity',
      scrollTrigger: { trigger: '.shop__wall', start: 'top 80%' }
    });
    gsap.from('.shop__stamp', {
      scale: 0.4, opacity: 0, rotate: -90, duration: 1.2, ease: 'back.out(1.6)', clearProps: 'transform,opacity',
      scrollTrigger: { trigger: '.shop__wall', start: 'top 70%' }
    });
    gsap.from('.shop__lead, .shop__notify', {
      y: 24, opacity: 0, stagger: 0.1, duration: 1, ease: 'expo.out',
      scrollTrigger: { trigger: '.shop__lead', start: 'top 85%' }
    });

    // "Coming soon" stamp: slow spin that speeds up while hovered
    const stamp = $('.shop__stamp');
    const spin = gsap.to($('svg', stamp), { rotation: 360, duration: 24, repeat: -1, ease: 'none', transformOrigin: '50% 50%' });
    stamp.addEventListener('mouseenter', () => gsap.to(spin, { timeScale: 6, duration: 0.6 }));
    stamp.addEventListener('mouseleave', () => gsap.to(spin, { timeScale: 1, duration: 1.2 }));

    if (!finePointer) return;
    // the wall: a warm spotlight follows the cursor, and the hanging paintings swing
    // on their wire when the cursor sweeps past (a damped spring per painting)
    const wall = $('.shop__wall');
    const frames = $$('.canvas', wall).map(el => ({ el, a: 0, v: 0 }));
    let lastX = null, running = false;
    const tick = () => {
      let moving = false;
      frames.forEach(f => {
        f.v += -f.a * 0.05; f.v *= 0.92; f.a = clamp(f.a + f.v, -7, 7);
        if (Math.abs(f.a) > 0.02 || Math.abs(f.v) > 0.02) moving = true;
        f.el.style.setProperty('--swing', `${f.a.toFixed(3)}deg`);
      });
      if (moving) requestAnimationFrame(tick); else running = false;
    };
    wall.addEventListener('pointermove', e => {
      const r = wall.getBoundingClientRect();
      wall.style.setProperty('--mx', `${e.clientX - r.left}px`);
      wall.style.setProperty('--my', `${e.clientY - r.top}px`);
      if (lastX != null) {
        const dx = clamp(e.clientX - lastX, -40, 40);
        frames.forEach(f => {
          const fr = f.el.getBoundingClientRect();
          const near = Math.max(0, 1 - Math.abs(e.clientX - (fr.left + fr.width / 2)) / 420);
          f.v += dx * 0.012 * near;
        });
        if (!running) { running = true; requestAnimationFrame(tick); }
      }
      lastX = e.clientX;
    });
    wall.addEventListener('pointerleave', () => { lastX = null; });
  }

  function toast(msg) {
    const t = $('.toast');
    t.textContent = msg;
    t.classList.add('is-on');
    clearTimeout(t._t);
    t._t = setTimeout(() => t.classList.remove('is-on'), 2200);
  }

  function initCopy() {
    document.addEventListener('click', e => {
      const btn = e.target.closest('[data-copy]');
      if (!btn) return;
      const text = btn.dataset.copy;
      const fallback = () => { location.href = `mailto:${text}`; };
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => toast('Email copied ✓'), fallback);
      else fallback();
    });
  }

  /* ------------------------------------------------------------------------
     Nav, menu, cursor, magnetic, clock, progress, footer
     ------------------------------------------------------------------------ */
  const menuBtn = $('.nav__menu');
  const menu = $('#menu');
  function closeMenu() {
    if (!menu.classList.contains('is-open')) return;
    menu.classList.remove('is-open');
    menu.setAttribute('aria-hidden', 'true');
    menuBtn.setAttribute('aria-expanded', 'false');
    menuBtn.textContent = 'Menu';
    body.classList.remove('menu-open');
    lenis && lenis.start();
  }
  function initNav() {
    const nav = $('[data-nav]');
    menuBtn.addEventListener('click', () => {
      if (menu.classList.contains('is-open')) return closeMenu();
      menu.classList.add('is-open');
      menu.setAttribute('aria-hidden', 'false');
      menuBtn.setAttribute('aria-expanded', 'true');
      menuBtn.textContent = 'Close';
      body.classList.add('menu-open');
      lenis && lenis.stop();
      if (ANIM) gsap.from('.menu__links a', { yPercent: 100, opacity: 0, stagger: 0.06, duration: 0.9, ease: 'expo.out', delay: 0.2 });
    });

    let lastY = 0;
    const onScroll = y => {
      nav.classList.toggle('is-scrolled', y > 40);
      if (!menu.classList.contains('is-open')) nav.classList.toggle('is-hidden', y > lastY && y > 300);
      lastY = y;
    };
    if (lenis) lenis.on('scroll', ({ scroll }) => onScroll(scroll));
    else addEventListener('scroll', () => onScroll(scrollY), { passive: true });

  }

  // created after every pinned section so their positions include pin spacing
  function initThemeTriggers() {
    if (!hasGSAP) return;
    $$('[data-theme="dark"]').forEach(sec => ScrollTrigger.create({
      // pinned sections: measure the pin-spacer so the whole pinned scroll counts
      trigger: sec.parentElement.classList.contains('pin-spacer') ? sec.parentElement : sec,
      start: 'top 40px', end: 'bottom 40px',
      onToggle: self => body.classList.toggle('on-dark', self.isActive)
    }));
    const bar = $('.page-progress span');
    ScrollTrigger.create({ start: 0, end: 'max', onUpdate: self => { bar.style.transform = `scaleY(${self.progress})`; } });
  }

  function initCursor() {
    if (!finePointer || !hasGSAP) return;
    const c = $('.cursor'), label = $('.cursor__label');
    const xTo = gsap.quickTo(c, 'x', { duration: 0.18, ease: 'power3' });
    const yTo = gsap.quickTo(c, 'y', { duration: 0.18, ease: 'power3' });
    addEventListener('mousemove', e => { xTo(e.clientX); yTo(e.clientY); c.classList.add('is-visible'); });
    document.addEventListener('mouseleave', () => c.classList.remove('is-visible'));
    document.addEventListener('mouseover', e => {
      const withLabel = e.target.closest('[data-cursor]');
      const link = e.target.closest('a, button, label, input, textarea');
      c.classList.toggle('is-label', !!withLabel);
      c.classList.toggle('is-link', !withLabel && !!link);
      label.textContent = withLabel ? withLabel.dataset.cursor : '';
    });
  }

  function initMagnetic() {
    if (!finePointer || !ANIM) return;
    $$('.magnetic').forEach(el => {
      const xTo = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      const yTo = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      el.addEventListener('mousemove', e => {
        const r = el.getBoundingClientRect();
        xTo(clamp((e.clientX - (r.left + r.width / 2)) * 0.3, -12, 12));
        yTo(clamp((e.clientY - (r.top + r.height / 2)) * 0.3, -12, 12));
      });
      el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    });
  }

  function initClock() {
    const fmt = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Vancouver', hour: '2-digit', minute: '2-digit', hour12: false });
    const tick = () => $$('[data-clock]').forEach(el => { el.textContent = fmt.format(new Date()); });
    tick();
    setInterval(tick, 30000);
  }

  function initFooter() {
    if (!ANIM) return;
    gsap.from('.footer__word span', { yPercent: 100, duration: 1.6, ease: 'expo.out', scrollTrigger: { trigger: '.footer', start: 'top 60%' } });
    gsap.from('.footer__cols > div', { y: 30, opacity: 0, stagger: 0.1, duration: 1, ease: 'expo.out', scrollTrigger: { trigger: '.footer', start: 'top 80%' } });
  }

  function initVisibility() {
    document.addEventListener('visibilitychange', () => html.classList.toggle('is-hidden-tab', document.hidden));
  }

  /* ------------------------------------------------------------------------
     Boot
     ------------------------------------------------------------------------ */
  function boot() {
    initLenis();
    initAnchors();
    initNav();
    initCursor();
    initClock();
    initVisibility();
    initCopy();
    const hero = initHero();
    initStats();
    initPillars();
    initStory();
    initStudio();
    initServices();
    initGallery();
    initFinale();
    initForm();
    initShop();
    initFooter();
    initMagnetic();
    initThemeTriggers();

    const fonts = document.fonts ? document.fonts.ready : Promise.resolve();
    fonts.then(() => { initTextReveals(); hasGSAP && ScrollTrigger.refresh(); });

    initPreloader(() => {
      hero.intro();
      if (location.hash.length > 1) {
        const el = document.getElementById(location.hash.slice(1));
        if (el) setTimeout(() => scrollToTarget(el), 300);
      }
    });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
