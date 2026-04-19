let correctCount = 0;
let answeredCount = 0;


const answeredQuestions = new Set();

const questions = [
  {
    question: "Relvade kollektsioneerimiseks",
    answers: [
      { text: "loa saamiseks tuleb sooritada relvaeksam", correct: true },
      { text: "ei ole vaja luba ega eksamit sooritada kui kollektsioneerival isikul on relvaluba", correct: false },
      { text: "on õigus luba taotleda juriidilisel isikul", correct: true },
      { text: "on õigus luba taotleda vähemalt 16-aastasel füüsilisel isikul", correct: false }
    ]
  },
  {
    question: "21-aastane ja vanem eesti kodanik võib soetada",
    answers: [
      { text: "jahitulirelva jahipidamiseks", correct: true },
      { text: "kumminuia enese ja vara kaitseks", correct: false },
      { text: "püstolit enese ja vara kaitseks", correct: true },
      { text: "revolvrit enese ja vara kaitseks", correct: true }
    ]
  },
  {
    question: "Relva registreerimise kohustus Eestisse saabumise päevast selle soetamisel välismaalt",
    answers: [
      { text: "viie tööpäeva jooksul", correct: false },
      { text: "seitsme tööpäeva jooksul", correct: true },
      { text: "kümne tööpäeva jooksul", correct: false },
      { text: "mitte hiljem kui ühe kuu jooksul", correct: false }
    ]
  },
  {
    question: "Relvaluba vahetatakse",
    answers: [
      { text: "relvahoidla asukoha muutumisel", correct: true },
      { text: "relvaloa omaja andmete muutumisel", correct: true },
      { text: "relva kaotsiminekul või hävimisel", correct: true },
      { text: "relvaloa kehtivuse lõppemisel", correct: true }
    ]
  },
  {
    question: "Füüsiline isik võib hoida laskemoona",
    answers: [
      { text: "kuni 100 padrunit enesekaitserelvadele", correct: false },
      { text: "kuni 200 padrunit enesekaitserelvadele", correct: true },
      { text: "kuni 300 padrunit iga vintraudse jahirelva kohta", correct: true },
      { text: "kuni 1 kg püssirohtu iga tulirelva kohta, kuid kokku mitte üle 5 kg", correct: true }
    ]
  },
  {
    question: "Relvakandmine on",
    answers: [
      { text: "relva omamine relvaloa alusel", correct: false },
      { text: "relva kaasaskandmine väljaspool hoiukohta", correct: true },
      { text: "relva kaasaskandmine avalikus kohas", correct: true },
      { text: "relva soetamine", correct: false }
    ]
  },
  {
    question: "Relva võib muuta laskekõlbmatuks",
    answers: [
      { text: "relvaomanik ise", correct: false },
      { text: "mistahes sellekohaste oskustega isik", correct: false },
      { text: "vastavat tegevusluba omav isik", correct: true },
      { text: "relva müügi tegevusluba omav isik", correct: false }
    ]
  },
  {
    question: "Hädakaitseseisundis võib tekitada kahju isikule",
    answers: [
      { text: "kes vahetult rünnet teostab", correct: true },
      { text: "kes on ründe lõpetanud, kuid püüab põgeneda", correct: false },
      { text: "kelle läbi võib ründajat mõjutada", correct: false },
      { text: "kelle kohta on teada, et ta kavandab rünnet", correct: false }
    ]
  },
  {
    question: "Tulirelva oluline osa on",
    answers: [
      { text: "relvaraud", correct: true },
      { text: "lasersihik", correct: false },
      { text: "lukk", correct: true },
      { text: "adapter", correct: true }
    ]
  },
  {
    question: "Kollektsioneerida on lubatud",
    answers: [
      { text: "kasteeti ja kasteetnuga", correct: false },
      { text: "tulirelvi", correct: true },
      { text: "helisummutit, lasersihikut, öösihikut", correct: true },
      { text: "süütelaskemoona", correct: false }
    ]
  },
  {
    question: "Füüsiline isik (kes ei ole FIE) võib tulirelvi soetada, omada ja vallata",
    answers: [
      { text: "teiste isikute kaitseks", correct: false },
      { text: "metsloomadele jahipidamiseks", correct: true },
      { text: "kollektsioneerimiseks", correct: true },
      { text: "kasutamiseks teenistusrelvana ametikohal, kus on teenistusrelv lubatud", correct: false }
    ]
  },
  {
    question: "Tsiviilkäibes on keelatud",
    answers: [
      { text: "tulirelv, millel puudub valmistaja markeering", correct: true },
      { text: "automaattulirelv (päästikule vajutamisele järgneb valang)", correct: true },
      { text: "tulirelv, mis imiteerib muud eset", correct: true },
      { text: "siledaraudne püss üldpikkusega alla 840mm", correct: false }
    ]
  },
  {
    question: "Soetamisluba on kehtiv selle väljastamisest",
    answers: [
      { text: "kolm kuud", correct: true },
      { text: "kuus kuud", correct: false },
      { text: "1 aasta", correct: false },
      { text: "kuni relva soetamiseni mistahes ajal", correct: false }
    ]
  },
  {
    question: "Relva edasitoimetamine on",
    answers: [
      { text: "selle kaasaskandmine toimetamiseks jalgsi ühest kohast teise", correct: true },
      { text: "selle kaasaskandmine toimetamiseks sõidukiga ühest kohast teise", correct: true },
      { text: "selle saatmine posti teel iseendale ühest kohast teise", correct: false },
      { text: "selle saatmine posti teel teisele isikule", correct: false }
    ]
  },
  {
    question: "Nõuded relvakapile",
    answers: [
      { text: "ei ole sätestatud ning omanik soetab selle omal valikul", correct: false },
      { text: "nõuded relvakapile on kehtestatud siseministri määrusega", correct: true },
      { text: "relvad peavad sellesse ära mahtuma ja muid nõudeid ei ole", correct: false },
      { text: "relvakapp peab olema kas relvaomaniku või omaniku poolt usaldatud isiku valduses", correct: false }
    ]
  },
  {
    question: "Tsiviilkäibes on lubatud:",
    answers: [
      { text: "tulirelv, mis imiteerib mõne muu eseme kuju", correct: false },
      { text: "allveenuga", correct: true },
      { text: "ajaloolise kultuuri-, võitlus- või sporditraditsiooniga seonduv külmrelv (mõõk, pistoda, rapiir jt) või selle koopia", correct: true },
      { text: "elektrišokirelv", correct: false }
    ]
  },
  {
    question: "Filmivõtetel on tulirelva kasutamine lubatud, kui",
    answers: [
      { text: "kasutatakse paukpadruneid", correct: true },
      { text: "selleks on Politsei-ja Piirivalveamet andnud ühekordse loa", correct: true },
      { text: "kui selleks on andnud loa Päästeamet ja filmivõtete koha järgne kohalik omavalitsus", correct: false },
      { text: "kui tulirelvas kasutatakse ainult sellele tulirelvale ettenähtud laskemoona ja sihitakse õhku", correct: false }
    ]
  },
  {
    question: "Relva soetamisel tuleb see registreerida",
    answers: [
      { text: "elukohajärgses kohalikus omavalitsuses", correct: false },
      { text: "Maksu- ja Tolliametis", correct: false },
      { text: "elu- või asukohajärgses prefektuuris", correct: true },
      { text: "Siseministeeriumis", correct: false }
    ]
  },
  {
    question: "Relva ja laskemoona võõrandamine on",
    answers: [
      { text: "üleandmine ajutisele hoidmisele vastavat teenust osutavale isikule", correct: false },
      { text: "relvaloa peatamisel üleandmine politseile", correct: false },
      { text: "müümine", correct: true },
      { text: "kinkimine", correct: true }
    ]
  },
  {
    question: "Tulirelva hoidmisel",
    answers: [
      { text: "peab see olema alati tühjaks laetud", correct: true },
      { text: "ei pea olema tühjaks laetud, kui seda hoitakse relvakapis", correct: false },
      { text: "ei pea olema tühjaks laetud, kui seda hoitakse relvakapis, mis asub eraldi ruumis", correct: false },
      { text: "tühjaks laadimise või mittelaadimisel otsustab selle omanik", correct: false }
    ]
  },
  {
    question: "Isik, kelle valduses on pärandvaras olev relv ja laskemoon",
    answers: [
      { text: "peab need viivitamatult viima notari juurde, kes teostab pärandvara menetlust", correct: false },
      { text: "peab need viivitamatult üle andma politseile", correct: true },
      { text: "võib neid hoida enda valduses kuni notari otsuseni pärandvara jagamise kohta", correct: false },
      { text: "peab need viivitamatult üle andma Päästeametile", correct: false }
    ]
  },
  {
    question: "Järelevalvet tsiviilkäibes lubatud relvade",
    answers: [
      { text: "käitlemise üle teostab politsei", correct: true },
      { text: "käitlemise üle teostab Tarbijakaitseamet", correct: false },
      { text: "sisseveo ja väljaveo üle Maksu- ja Tolliamet", correct: true },
      { text: "sisseveo ja väljaveo üle Kaitseministeerium", correct: false }
    ]
  },
  {
    question: "Hädakaitse tunnuseks on",
    answers: [
      { text: "vahetu õigusvastase ründe tõrjumine, kui on ohus enda või teise isiku õigushüved", correct: true },
      { text: "vahetu eesseisva õigusvastase ründe tõrjumine, kui on ohus enda või teise isiku õigushüved", correct: true },
      { text: "vahetult õigusvastase ründe toimepannud isiku kinnipidamine", correct: false },
      { text: "õigusvastase ründe toimepannud ja põgeneva isiku kinnipidamine", correct: false }
    ]
  },
  {
    question: "Alla 18-aastane isik võib",
    answers: [
      { text: "vallata gaasipihustit kui ta on vähemalt 16-aastane", correct: false },
      { text: "omada kuni 4,5-millimeetrise kaliibriga pneumorelva kui ta harrastab vastavat sporti ja ta on vähemalt 10-aastane", correct: true },
      { text: "omada löögirelva, mis imiteerib mõne muu eseme kuju ja ta on vähemalt 14-aastane", correct: false },
      { text: "kanda tulirelva, kui ta on teinud relvaeksami ja omab relvaluba", correct: false }
    ]
  },
  {
    question: "Relvaloa ja/või soetamiseloa kehtivust",
    answers: [
      { text: "ei saa peatada", correct: false },
      { text: "saab peatada, kui loa omajal ei ole relvaseaduses ettenähtud tingimusi relva ja laskemoona hoidmiseks", correct: true },
      { text: "saab peatada, kui loa omajat on väärteomenetluse korras karistatud mootorsõiduki juhtimise eest lubatud alkoholipiirmäära ületades või õhusõiduki, veesõiduki või raudteeveeremi juhtimise eest alkoholijoobes", correct: true },
      { text: "saab peatada põhjendatud kahtluse korral, et loa omanik võib oma eluviisi või käitumisega ohustada enda või teise isiku turvalisust", correct: true }
    ]
  },
  {
    question: "Relvakapp ei ole nõutav",
    answers: [
      { text: "kahe püstoli või revolvri korral kui isikul on võimalik neid turvaliselt hoida", correct: false },
      { text: "ühe jahirelva korral", correct: true },
      { text: "ühe tulirelva ja selle relva laskemoona korral", correct: true },
      { text: "ühe jahirelva ja ühe püstoli korral", correct: false }
    ]
  },
  {
    question: "Relva võib parandada",
    answers: [
      { text: "relvaomanik ise", correct: true },
      { text: "mistahes sellekohaste oskustega isik", correct: false },
      { text: "vastavat tegevusluba omav isik", correct: true },
      { text: "relva müügi tegevusluba omav isik", correct: false }
    ]
  },
  {
    question: "Avaldus relvaloa vahetamiseks seoses kehtivuse lõppemisega tuleb politseile esitada",
    answers: [
      { text: "vähemalt 2 kuud enne kehtivuse lõppu", correct: true },
      { text: "vähemalt 15 päeva enne kehtivuse lõppu", correct: false },
      { text: "vähemalt 10 päeva enne kehtivuse lõppu", correct: false },
      { text: "vähemalt 30 tööpäeva enne kehtivuse lõppu", correct: false }
    ]
  },
  {
    question: "Füüsilist isikut karistatakse väärteokorras",
    answers: [
      { text: "elektrišokirelva omamise eest", correct: true },
      { text: "relva kandmise eest avalikul üritusel", correct: true },
      { text: "relva joobes kandmise eest", correct: true },
      { text: "avaliku korra rikkumise eest kui see rikkumine oli toimepandud relvaga", correct: false },
      { text: "(Tähelepanu : allolevalt on toodud eelmise küsimuse üks tihti esitatavaid variante, mis on välimuselt äravahetamiseni sarnane, aga sisult pisiasjas erinev, mistõttu võib kergesti viia vale vastuseni. Ülal küsimuses küsitakse, mille eest karistatakse väärteokorras, allpool aga mis puhul karistatakse üldiselt, s.t. nii väärteo kui kriminaalkorras.)"}
    ]
  },
    {
    question: "Füüsilisele isikule on ette nähtud karistus",
    answers: [
      { text: "elektrišokirelva omamise eest", correct: true },
      { text: "tulirelva kandmise eest avalikul üritusel", correct: true },
      { text: "relva kandmise eest joobeseisundis", correct: true },
      { text: "relvaga toime pandud avaliku korra rikkumise eest", correct: true }
    ]
  },
    {
    question: "Helisummutit võib omada",
    answers: [
      { text: "visik, kellel on relvaluba, millele on kantud mistahes tulirelv", correct: true },
      { text: "isik, kellel on relvaluba, millele on kantud sporditulirelv", correct: true },
      { text: "isik, kellel on relvaluba, millele on kantud jahirelv ", correct: true },
      { text: "relva kasutamise eesmärgil lasketiirus või jahil", correct: true }
    ]
  },
    {
    question: "Tsiviilkäibes lubatud laskemoon on",
    answers: [
      { text: "tulirelva padrun, mille kuulil on soomustläbistav kõvasüdamik", correct: false },
      { text: "õõnsaotsalise kuuliga püstoli- ja revolvripadrun;", correct: false },
      { text: "kesktulepadrun ", correct: true },
      { text: "ääretulepadrun", correct: true }
    ]
  },
    {
    question: "Paralleelrelvaloa korral võib relvaomanik anda relva ja laskemoona üle",
    answers: [
      { text: "paralleelrelvaloas märgitud isikule ilma mingeid lisadokumente koostamata", correct: true },
      { text: "paralleelrelvaloas märgitud isikule üleandmise-vastuvõtmise akti alusel", correct: false },
      { text: "--------", correct: false },
      { text: "--------", correct: false }
    ]
  },
    {
    question: "Relvakapi nõuded",
    answers: [
      { text: "ei sõltu üldse relvade arvust", correct: false },
      { text: "ei sõltu relvade arvust, vaid relvade liikidest ja suurusest", correct: false },
      { text: "erinevad kuni 5 relva hoidmiseks ning 6 ja enam relva hoidmiseks", correct: false },
      { text: "erinevad kuni 8 relva hoidmiseks ning  9 ja enama relva hoidmiseks", correct: true }
    ]
  },
    {
    question: "Relva kandmisel ",
    answers: [
      { text: "peab kaasas olema relvaluba ", correct: false },
      { text: "peab kaasas olema isikut tõendav dokument", correct: true },
      { text: "revolvri padrunipesas võib olla padrun ", correct: true },
      { text: "püstoli padrunipesas võib olla padrun", correct: false }
    ]
  },
    {
    question: "Hädakaitse piire ei ületata kui isik ",
    answers: [
      { text: "vAsub kaitsma ennast ründe eest vahenditega, mis vastavad ründe ohtlikkusele", correct: true },
      { text: "tekitab ründajale tahtlikult suurema kahju ", correct: false },
      { text: "kasutab vahendeid, mis ületavad ründe ohtlikkuse", correct: false },
      { text: "Asub kaitsma teist isikut ründe eest vahenditega, mis vastavad ründe ohtlikkusele.", correct: true }
    ]
  },
    {
    question: "Relvade kollektsioneerimiseks ",
    answers: [
      { text: "ei ole vaja mingit luba kui kollektsioonis olevaid relvi ei kanta ega kasutata", correct: false },
      { text: "on vajalik saada politseilt kollektsioneerimisluba", correct: true },
      { text: "ei ole vaja kollektsioneerimisluba, kui kollektsioneeritakse ainult padruneid ", correct: false },
      { text: "on vajalik saada politseilt kollektsioneerimisluba,  kui kollektsioneeritakse kasteeti, kasteetnuga, teraspiitsa või muud spetsiaalselt kehavigastuse tekitamiseks valmistatud eset", correct: false }
    ]
  },
    {
    question: "Relva ja laskemoona võib võõrandada",
    answers: [
      { text: "relvade käitlemise tegevusluba omavale isikule", correct: true },
      { text: "vastavat soetamisluba omavale isikule", correct: true },
      { text: "mistahes isikule sõltumata relvaloa või soetamisloa omamisest", correct: false },
      { text: "isikule, kes on esitanud soetamisloa saamise taotluse  ", correct: false }
    ]
  },
    {
    question: "Relvakapp kuni 8 relva hoidmiseks peab olema",
    answers: [
      { text: "valmistatud tootja poolt tulirelvade hoiustamiseks", correct: false },
      { text: "valmistatud vähemalt 3 mm paksusest terasplekist", correct: true },
      { text: "varustatud vähemalt ühe turvalukuga", correct: true },
      { text: "varustatud vähemalt kahe turvalukuga", correct: true }
    ]
  },
    {
    question: "Relvaloa vahetamiseks seoses kehtivuse lõppemisega tuleb prefektuurile esitada",
    answers: [
      { text: "vastav avaldus", correct: true },
      { text: "tõend maksuvõlgnevuste puudumise kohta", correct: false },
      { text: "tervisetõend", correct: true },
      { text: "relv, et tõendada selle olemasolu", correct: true }
    ]
  },
    {
    question: "Relva kaotamisest  tuleb politseile teatada",
    answers: [
      { text: "24 tunni jooksul", correct: false },
      { text: "7 tööpäeva jooksul", correct: false },
      { text: "7 päeva jooksul ", correct: false },
      { text: "Viivitamata", correct: true }
    ]
  },
    {
    question: "Relva võib laskekõlbmatuks muuta",
    answers: [
      { text: "ulirelva omaniku enda loal", correct: false },
      { text: "Politsei- ja Piirivalveameti loal", correct: true },
      { text: "Maksu- ja Tolliameti loal", correct: false },
      { text: "Siseministri loal ", correct: false }
    ]
  },
    {
    question: "Hädakaitse tunnuseks on",
    answers: [
      { text: "vahetu  õigusvastase ründe tõrjumine, kui on ohus enda või teise isiku õigushüved ", correct: true },
      { text: "vahetu eesseisva õigusvastase ründe tõrjumine, kui on ohus enda või teise isiku õigushüved ", correct: true },
      { text: "ahetult õigusvastase ründe toimepannud isiku kinnipidamine", correct: false },
      { text: "õigusvastase ründe toimepannud ja põgeneva isiku kinnipidamine", correct: false }
    ]
  },
    {
    question: "18-aastane ja vanem eesti kodanik võib soetada",
    answers: [
      { text: "siledaraudset püssi enese ja vara kaitseks", correct: true },
      { text: "kumminuia enese ja vara kaitseks", correct: false },
      { text: "sporditulirelva vastava spordialaga tegelemiseks", correct: true },
      { text: "elektrišokirelva enese ja vara kaitseks", correct: false }
    ]
  },
    {
    question: "Relvaseadusega on relva ja laskemoona keelatud kanda",
    answers: [
      { text: "ühistranspordis", correct: false },
      { text: "avalikul üritusel (v.a. teenistusrelva teenistuslikul eesmärgil)", correct: true },
      { text: "lasteasutuses ", correct: false },
      { text: "haigusseisundis", correct: false }
    ]
  },
    {
    question: "Relvaomanik või –valdaja peab taotlema luba Politsei- ja Piirivalveametilt relva",
    answers: [
      { text: "ümbertegemiseks", correct: true },
      { text: "lammutamiseks", correct: true },
      { text: "laskekõlbmatuks muutmiseks", correct: true },
      { text: "müügiks", correct: true }
    ]
  },
    {
    question: "Relvakapp 9 ja enama  relva hoidmiseks ",
    answers: [
      { text: "peab olema valmistatud vähemalt 4 mm paksusest terasplekist ", correct: true },
      { text: "peab olema valmistatud tööstuslikult tootja poolt spetsiaalselt relvade hoidmiseks", correct: true },
      { text: "võib olla isevalmistatud, kui töö on tehtud kvaliteetselt", correct: false },
      { text: "peab olema varustatud vähemalt ühe turvalukuga ", correct: true }
    ]
  },
    {
    question: "Relva soetamisluba annab õiguse",
    answers: [
      { text: "loal märgitud relvaliigi hulka kuuluva relva soetamiseks", correct: true },
      { text: "loal märgitud relvaliigi hulka kuuluva relva laskemoona soetamiseks", correct: true },
      { text: "mistahes tsiviilkäibes keelatud relva soetamiseks", correct: false },
      { text: "mistahes tsiviilkäibes keelatud relva laskemoona soetamiseks", correct: false }
    ]
  },
    {
    question: "Riigisiseselt võib teostada relvavedu",
    answers: [
      { text: "füüsiline või juriidiline isik, kellel on relvaluba või soetamisluba ", correct: true },
      { text: "füüsiline või juriidiline isik, kellel on tegevusluba relvade valmistamiseks või müügiks.", correct: true },
      { text: "kui relvad ja laskemoon on valmistaja pakendis", correct: true },
      { text: "kui relvad ja laskemoon ei ole valmistajapakendis, kuid on pakitud viisil, mis ei võimalda kohest kasutuselevõttu", correct: true }
    ]
  },
    {
    question: "Relvaomanik peab järelevalvet teostavale ametnikule",
    answers: [
      { text: "võimaldama relva hoidmise koha üle vaatamist", correct: true },
      { text: "esitama järelevalveks vajalikke dokumente", correct: true },
      { text: "alluma joobe tuvastamise protseduurile kui teda kahtlustatakse joobes relva kandmises", correct: true },
      { text: "andma selgitusi", correct: true }
    ]
  },
    {
    question: "Soetamisloa alusel võib soetada",
    answers: [
      { text: "loal märgitud relvaliigi hulka kuuluvat relva", correct: true },
      { text: "mistahes relvaliigi hulka kuuluvat relva", correct: false },
      { text: "mistahes relvaliigi hulka kuuluva relva laskemoona", correct: false },
      { text: "mistahes tsiviilkäibes keelatud relva", correct: false }
    ]
  },
    {
    question: "Füüsiline isik võib teostada enda nimele registreeritud relva ja laskemoona väljavedu",
    answers: [
      { text: "osalemiseks spordivõistlusel Politsei- ja Piirivalveameti eriloaga", correct: true },
      { text: "osalemiseks õppusel Kaitseministeeriumi eriloaga", correct: false },
      { text: "jahipidamiseks mistahes jahindusseltsi eriloaga", correct: false },
      { text: "enese ja vara kaitseks reisi korraldava reisibüroo eriloaga", correct: false }
    ]
  },
    {
    question: "Tulirelva võib laskekõlbmatuks muuta",
    answers: [
      { text: "tulirelva omanik", correct: false },
      { text: "relvaluba omav füüsiline isik", correct: false },
      { text: "relva parandamise või ümbertegemise tegevusluba omav isik", correct: true },
      { text: "mistahes relva tegevusluba omav isik", correct: false }
    ]
  },
    {
    question: "Relva ja laskemoona võib hoida isik, kellel on",
    answers: [
      { text: "relvaluba või paralleelrelvaluba", correct: true },
      { text: "tegevusluba relvade ümbertegemiseks", correct: true },
      { text: "relvaluba peatatud või kehtetuks tunnistatud, kuid tal on relv vajalik enesekaitseks", correct: false },
      { text: "tegevusluba relvade hoidmiseks teenusena", correct: true }
    ]
  },
    {
    question: "Avaldus relvaloa vahetamiseks seoses relva, relvaloa või relvakandmisloa omaja andmete või relvahoidla asukoha muutumisega tuleb politseile esitada ",
    answers: [
      { text: "1 kuu jooksul andmete või asukoha muutumisest arvates", correct: false },
      { text: "15 päeva jooksul andmete või asukoha muutumisest arvates", correct: false },
      { text: "10 päeva jooksul andmete või asukoha muutumisest arvates", correct: false },
      { text: "seitsme tööpäeva jooksul andmete või asukoha muutumisest arvates", correct: true }
    ]
  },
    {
    question: "Tulirelva laskekõlbmatuks muutmine on ",
    answers: [
      { text: "tulirelva olulise osa mehaaniline töötlemine, mille tulemusena relv kaotab ajutiselt või jäädavalt lasu sooritamise võime", correct: false },
      { text: "tulirelva olulise osa mehaaniline töötlemine, mille tulemusena relv kaotab jäädavalt lasu sooritamise võime", correct: true },
      { text: "tulirelva töötlemine vedelikes, mille tagajärjel kaob võimalus täpsuslaskmiseks", correct: false },
      { text: "kui relv on roostes ja tehniliselt laskekõlbmatu, ei ole selle täiendav laskekõlbmatuks muutmine vajalik", correct: false }
    ]
  },
    {
    question: "Mis relvad kantakse Euroopa tulirelva passi",
    answers: [
      { text: "Vara ja enese kaitse relvad", correct: false },
      { text: "Jahirelvad", correct: true },
      { text: "Spordialaga seonduvad relvad", correct: true },
      { text: "Kutsealaga seonduvad relvad", correct: false }
    ]
  },
    {
    question: "Mis juhul peab politseile teatama andmete muutumisest",
    answers: [
      { text: "relvaomaniku nime muutumisel", correct: true },
      { text: "relva hoiukoha muutumisel", correct: true },
      { text: "relvaomaniku andmete muutumise puhul", correct: true },
      { text: "kui relva omanik läheb kolmeks kuuks tööga seoses välislähetusse", correct: false }
    ]
  },
    {
    question: "Relva hoiustamine",
    answers: [
      { text: "Peab hoiustama alati tühjaks laetuna", correct: true },
      { text: "Hoiukapi korral ei pea olema tühjaks laetud", correct: false },
      { text: "Relvakapi korral ei pea olema tühjaks laetud", correct: false },
      { text: "Relvaomanik otsustab ise, kui tal on relvaruum, kas on tühjaks laetud või mitte", correct: false }
    ]
  },
      {
    question: "Mis puhul relvaluba/soetamisluba tühistatakse?",
    answers: [
      { text: "Relvaomaniku surma puhul", correct: true },
      { text: "Relva kaotsiminemisel või hävimisel", correct: true },
      { text: "Relva asukoha muutumisel", correct: false },
      { text: "Omaniku andmete muutumisel", correct: false }
    ]
  },
      {
    question: "Paralleelrelvaluba väljastatakse:",
    answers: [
      { text: "Kuni 5-le inimesele", correct: false },
      { text: "Kuni 2-le inimesele", correct: true },
      { text: "Kuni 10-le inimesele", correct: false },
      { text: "Piiramatule arvule inimestele", correct: false }
    ]
  },
      {
    question: "Mis puhul karistatakse väärteokorras",
    answers: [
      { text: "Relva kandmise korral avalikul üritusel", correct: true },
      { text: "Relva kandmise korral alkoholijoobes", correct: true },
      { text: "Avaliku korra rikkumise korral relvaga, kui on põhjustatud kellelegi kahju ", correct: false },
      { text: "Relva kandmise eest rongis ", correct: false }
    ]
  },
      {
    question: "Relvaloa kehtivuse lõppemisel tuleb relv ja laskemoon politseile üle anda:",
    answers: [
      { text: "Relvaloa kehtivuse viimasel tööpäeval", correct: true },
      { text: "Relvaloa kehtivuse lõppemisest 1 nädal enne", correct: false },
      { text: "Relvaloa kehtivusest 1 kuu enne", correct: false },
      { text: "Peale Relvaloa kehtivuse lõppu", correct: false }
    ]
  },
      {
    question: "Relvade kollektsioneerimiseks",
    answers: [
      { text: "Loa saamiseks tuleb sooritada relvaeksam", correct: true },
      { text: "Ei ole vaja luba kui kollektsioneerival isikul on relvaluba", correct: false },
      { text: "On õigus luba taotleda juriidilisel isikul", correct: true },
      { text: "On õigus luba taotleda vähemalt 16-aastasel füüsilisel isikul", correct: false }
    ]
  },
      {
    question: "Soetamisluba ja/või relvaluba ei väljastata isikule, kes",
    answers: [
      { text: "Ei oma töökohta", correct: false },
      { text: "On raskekujulise psüühikahäirega", correct: true },
      { text: "On aasta jooksul mitmel korral vahetanud elukohta", correct: false },
      { text: "Kellele tulenevalt piiratud teovõimest on määratud eestkoste", correct: true }
    ]
  },
      {
    question: "Tulirelv on",
    answers: [
      { text: "Relv, mis on ette nähtud laskma plahvatusgaaside mõjul välja lendkeha", correct: true },
      { text: "Seade, mis on kohandatud põlemisgaaside survel laskma välja lendkeha", correct: true },
      { text: "Relv, milles lendkeha väljalaskmiseks kasutatakse püssirohtu", correct: true },
      { text: "Relv, mille lendkeha väljalaskmiseks kasutatakse surugaasi", correct: false }
    ]
  },
      {
    question: "Tegu ei ole õigusvastane, kui see pandi toime",
    answers: [
      { text: "hädaseisundis", correct: true },
      { text: "hädakaitse piire ettevaatamatusest ületades", correct: true },
      { text: "hädakaitse piire tahtlikult ületades", correct: false },
      { text: "vihahoos", correct: false }
    ]
  },
      {
    question: "Relva võib anda hoiule",
    answers: [
      { text: "üleandmise-vastuvõtmise akti alusel relvaluba omavale isikule üheks ööpäevaks", correct: true },
      { text: "relvaluba omavale isikule viieks ööpäevaks", correct: false },
      { text: "relvaluba mitteomavale isikule üleandmise-vastuvõtmise akti alusel", correct: false },
      { text: "isikule, kes pakub relvade või laskemoona hoidmist teenusena", correct: true }
    ]
  },
      {
    question: "Mis on relva olulised osad:",
    answers: [
      { text: "Helisummuti", correct: false },
      { text: "Lasersihik", correct: false },
      { text: "Lukk", correct: true },
      { text: "Adapter", correct: true }
    ]
  },
      {
    question: "Hädakaitseseisundis võib tekitada kahju isikule:",
    answers: [
      { text: "kes vahetult rünnet teostab", correct: true },
      { text: "kes on ründe lõpetanud, kuid põgeneb", correct: false },
      { text: "kelle läbi võib ründajat mõjutada", correct: false },
      { text: "Kes teostab vahetut rünnet kolmandatele isikutele", correct: true }
    ]
  },
      {
    question: "Relvaluba annab omanikule õiguse:",
    answers: [
      { text: "viia relv tegevusluba omavale isikule laskekõlbmatuks muutmiseks", correct: false },
      { text: "viia relv komisjonimüüki", correct: false },
      { text: "osta seaduslikult soetatud relvale padruneid", correct: true },
      { text: "osta relv", correct: false }
    ]
  },
      {
    question: "Padruni komponendid on",
    answers: [
      { text: "püssirohi", correct: true },
      { text: "sütik", correct: true },
      { text: "padrunikest", correct: true },
      { text: "kuul/haavlid", correct: true }
    ]
  },
      {
    question: "Püssirohu hoidmine",
    answers: [
      { text: "Peab asuma vähemalt 1 m kaugusel kütteseadmest", correct: true },
      { text: "Peab asuma vähemalt 10 cm kaugusel kütteseadmest", correct: false },
      { text: "Võib hoiustada koos sütikutega", correct: true },
      { text: "Peab hoiustama ainult tehasepakendis või suletud metallpurkides ", correct: true }
    ]
  },
      {
    question: "Reeglid lasketiirus",
    answers: [
      { text: "Relva võib laenutada ja kasutada vaid instruktori juuresolekul/juhendamisel", correct: true },
      { text: "Relva võib laenutada ja kasutada iseseisvalt", correct: false },
      { text: "Relvaluba omav isik võib relva laenutada ja kasutada vaid instruktori juuresolekul/juhendamisel", correct: false },
      { text: "Relvaluba omav inimene võib relva laenutada ja kasutada iseseisvalt", correct: true }
    ]
  },
      {
    question: "Relva võõrandamine",
    answers: [
      { text: "Luba võõrandamiseks kehtib 1 kuu", correct: true },
      { text: "Luba võõrandamiseks kehtib 3 kuud", correct: false },
      { text: "Võib võõrandada vaid relvaluba omavale isikule", correct: false },
      { text: "Võib võõrandada soetamisloa alusel PPA pädeva ametniku juuresolekul PPA-s või relva asukohas", correct: true }
    ]
  },
      {
    question: "Kriminaalkorras karistatakse",
    answers: [
      { text: "tulirelva lohaka hoidmise eest, kui selle tagajärjel pandi selle relvaga toime kuritegu", correct: true },
      { text: "tulirelva kaotamise eest, kui relvaloa omanik sellest ei teatanud politseile", correct: false },
      { text: "tsiviilkäibes keelatud tulirelva ebaseadusliku käitlemise eest", correct: true },
      { text: "tsiviilkäibes keelatud laskemoona ebaseadusliku käitlemise eest juhul, kui pole ebaolulises koguses (/ebaolulises koguses tulirelva laskemoona ebaseaduslik käitlemine on väärtegu – RelS §89¹³ - Tõnu/)", correct: true }
    ]
  },
      {
    question: "Nõuetekohaselt laskekõlbmatuks muudetud relva",
    answers: [
      { text: "Võib omada iga isik, kui tal on laskekõlbmatust tunnistav dokument", correct: true },
      { text: "Peab registreerima PPAs", correct: true },
      { text: "Võib muuta laskekõlblikuks", correct: false },
      { text: "Tohib kasutada inimeste ähvardamiseks", correct: false }
    ]
  },
      {
    question: "Tsiviilkäibes on keelatud",
    answers: [
      { text: "Tulirelv, mille päästikule ühekordselt vajutades järgneb valang", correct: true },
      { text: "Tulirelv, mis imiteerib muu eseme kuju", correct: true },
      { text: "Poolautomaatne püss, mida saab ilma tööriistadeta kohandada alla 60cm pikkuseks ilma, et see kaotaks oma funktsionaalsust", correct: true },
      { text: "Tulirelv millel puudub valmistaja markeering", correct: true }
    ]
  },
      {
    question: "Relva kandmisel",
    answers: [
      { text: "peab kaasas olema relvaluba", correct: false },
      { text: "isikut tõendav dokument", correct: true },
      { text: "revolvri padrunipesas võib olla padrun", correct: true },
      { text: "relva võib kanda avalikult", correct: false }
    ]
  },
      {
    question: "Isetehtud padruneid võib",
    answers: [
      { text: "Kõigile võõrandada", correct: false },
      { text: "Võõrandada ainult PPA pädeva ametniku juuresolekul", correct: false },
      { text: "Ei tohi võõrandada", correct: true },
      { text: "Võib kinkida", correct: false }
    ]
  },
      {
    question: "Lasersihikut võib:",
    answers: [
      { text: "Soetada ja kodus hoida vähemalt 16 aastane isik.", correct: false },
      { text: "avalikel üritustel varjatult kanda.", correct: false },
      { text: "Kasutada enesekaitsel sihtimise hõlbustamiseks, kuid ei tohi ületada hädakaitse piiri.", correct: false },
      { text: "Soetada, omada ja vallata ainult vastava spordialaga tegelemise eesmärgil.", correct: true }
    ]
  },
      {
    question: "Mis juhtudel on relva kandmine keelatud:",
    answers: [
      { text: "avalikes kohtades", correct: false },
      { text: "alkoholi- või narkojoobes", correct: true },
      { text: "miitingutel, pidustustel ja demonstratsioonidel", correct: true },
      { text: "avalikus kohas relva varjamata", correct: true }
    ]
  },
      {
    question: "Millistel juhtudel on tegemist hädakaitsega:",
    answers: [
      { text: "isik tõrjub vahetut õigusvastast rünnet iseenda või teise isiku õigushüvedele tekitades kahju ründaja õigushüvedele", correct: true },
      { text: "isik kaitseb end või teist isikut ründava looma eest", correct: false },
      { text: "isik peab kinni isiku, kes teostas õigusvastast rünnet", correct: false },
      { text: "isik tõrjub vahetult eesseisvat õigusvastast rünnet iseenda või teise isiku õigushüvedele tekitades kahju ründaja õigushüvedele", correct: true }
    ]
  },
      {
    question: "Helisummutit võib:",
    answers: [
      { text: "kasutada relvaluba omav füüsiline isik jahti pidades", correct: true },
      { text: "kasutada relvaluba omav isik lasketiirus või laskepaigas", correct: true },
      { text: "summutit võib avalikult kanda koos relvaga", correct: false },
      { text: "summutit võib omada enese ja vara kaitseks relvaluba omav isik", correct: true }
    ]
  },
      {
    question: "Mis on relva ümbertegmine",
    answers: [
      { text: "relva nõuetekohane muutmine laskekõlbmatuks", correct: false },
      { text: "relva parandamine", correct: false },
      { text: "relva oluliste omaduste muutmine", correct: true },
      { text: "relva ümbertegemine on keelatud", correct: false }
    ]
  },
      {
    question: "Mida võib soetada ja kodus hoida 19 aastane isik:",
    answers: [
      { text: "Lasersihikut", correct: false },
      { text: "Vintraudset püssi", correct: false },
      { text: "Revolvrit", correct: false },
      { text: "Sileraudset püssi enese ja vara kaitseks", correct: true }
    ]
  },
      {
    question: "19-aastane Eesti kodanik võib soetada",
    answers: [
      { text: "Vintraudset püssi enese ja vara kaitseks", correct: false },
      { text: "Elektrišokirelva enese ja vara kaitseks", correct: false },
      { text: "Gaasirelva enese ja vara kaitseks", correct: true },
      { text: "Kumminuia enese ja vara kaitseks", correct: false }
    ]
  },
      {
    question: "Relvahoidla asukoha muutumise korral tuleb politseid teavitada",
    answers: [
      { text: "7 päeva jooksul", correct: false },
      { text: "7  tööpäeva jooksul", correct: true },
      { text: "14 päeva jooksul", correct: false },
      { text: "14 tööpäeva jooksul", correct: false }
    ]
  },
      {
    question: "Kes korraldab Eestis relvade ja laskemoona hävitamist ?",
    answers: [
      { text: "Politsei- ja Piirivalveamet", correct: true },
      { text: "kohalik omavalitsus", correct: false },
      { text: "ajaloolisi relvi ei hävitata", correct: true },
      { text: "kultuuriväärtusega relvi ei hävitata", correct: true }
    ]
  },
      {
    question: "Politsei- ja Piirivalveamet võib relvaloa tühistada",
    answers: [
      { text: "kui on selgunud, et loa omajal ei ole relva hoiuks vastavaid hoiutingimusi", correct: true },
      { text: "relvaomaniku enda taotlusel", correct: true },
      { text: "loa omaja on enda või teise isiku turvalisust ohustava eluviisi või käitumise tõttu sobimatu seda liiki relva soetama või omama", correct: true },
      { text: "kui loa omajat on karistatud kriminaalkorras", correct: true }
    ]
  },
      {
    question: "Alates leitud relvale või laskemoonale omandiõiguse tekkimisest kolme kuu jooksul on omanikul õigus",
    answers: [
      { text: "Esitada taotlus omandatud relva kohta relvaloa saamiseks", correct: true },
      { text: "Esitada taotlus omandatud relva laskekõlbmatuks muutmiseks või selle laskekõlbmatusnõuetele vastavuse tuvastamiseks", correct: true },
      { text: "Võõrandada relv ja laskemoon relvaseadusega kehtestatud korras", correct: true },
      { text: "Teha eelnimetatud (vastusevariantides a, b ja c) toimingud taotlust esitamata", correct: false }
    ]
  },
      {
    question: "Tegu ei ole õigusvastane, kui see pannakse toime",
    answers: [
      { text: "Hädaseisundis", correct: true },
      { text: "Hädakaitseseisundis, kui ei ole ületatud hädakaitse piiri", correct: true },
      { text: "Hädakaitsepiiri ületades otsese tahtlusega", correct: false },
      { text: "Äkkviha seisundis", correct: false }
    ]
  },
      {
    question: "Relvaloa omanik, kellel on relv(ad) ainult enese ja vara kaitse otstarbel",
    answers: [
      { text: "Võib omandada helisummutit", correct: true },
      { text: "Võib kasutada lasketiirus lasersihikut", correct: false },
      { text: "SEi või laskeharjutusel kasutada öösihikut", correct: true },
      { text: "Peab relvaloa pikendamisel sooritama laskekatse", correct: true }
    ]
  },
      {
    question: "Tulirelva võib muuta laskekõlbmatuks",
    answers: [
      { text: "Vastavat tegevusluba omav isik", correct: true },
      { text: "Maksu- ja Tolliameti loal", correct: false },
      { text: "Politsei- ja Piirivalveameti loal", correct: true },
      { text: "Siseministri loal", correct: false }
    ]
  },
      {
    question: "Kollektsioneerimisloa alusel on lubatud kollektsioneerida",
    answers: [
      { text: "Kasteeti ja kasteetnuga", correct: false },
      { text: "Sõjarelvade hulka arvatud tulirelvi", correct: true },
      { text: "Helisummutit, lasersihikut ja öösihikut", correct: true },
      { text: "Süütelaskemoona", correct: false }
    ]
  },
      {
    question: "Relva võib anda ajutiselt hoiule",
    answers: [
      { text: "Üleandmise-vastuvõtmise akti alusel teisele relvaloaga isikule kuni üheks ööpäevaks", correct: true },
      { text: "Teisele relvaloaga isikule kuni viieks ööpäevaks", correct: false },
      { text: "Isikule, kellel puudub relvaluba, kui vormistada notariaalne üleandmise-vastuvõtmise akt", correct: false },
      { text: "Isikule, kellel on tegevusluba relvade hoidmiseks teenusena", correct: true }
    ]
  },
      {
    question: "Tulirelva laskekõlbmatuks muutmine on",
    answers: [
      { text: "Tulirelva korrosiooniga kahjustamine", correct: false },
      { text: "Tulirelva olulise osa mehaaniline töötlemine, mille tulemusena relva kaotab lasu sooritamise võime", correct: true },
      { text: "Tulirelva töötlemine vedelikes, mille tagajärjel kaob võimalus täpsuslaskmiseks", correct: false },
      { text: "Tulirelva ümberehitamine ainult paukpadruneid kasutavaks relvaks", correct: false }
    ]
  },
      {
    question: "Mida on vaja teisest ELi riigist relvakollektsiooni padrunite ja relvade ostmiseks",
    answers: [
      { text: "kollektsioneerimisluba", correct: false },
      { text: "kollektsioneerimisluba, soetusluba, eriluba või eelluba ja luba", correct: true },
      { text: "Maksu- ja Tolliameti eriluba ", correct: false },
      { text: "relvaluba", correct: false }
    ]
  },
      {
    question: "Hädakaitses võib kahjustada ründaja õigushüvesid, kui ründaja: ",
    answers: [
      { text: "teostab vahetut õigusvastast rünnet kaitsja või teise isiku õigushüve vastu;", correct: true },
      { text: "on ründe lõpetanud ja püüab põgeneda;", correct: false },
      { text: "mõtleb isiku õigushüvede kahjustamisele ja isik on sellest soovist teadlik;", correct: false },
      { text: "on vahetult alustamas õigusvastast rünnet kellegi õigushüve vastu.", correct: true }
    ]
  },
        {
    question: "Tsiviilkäibes keelatud relvi võib käidelda",
    answers: [
      { text: "Relvaloaga isik", correct: false },
      { text: "Sõjarelvade käitlemisloaga isik", correct: true },
      { text: "Relvaloata isik", correct: false },
      { text: "Kollektsioneerimisloa alusel", correct: true }
    ]
  },
        {
    question: "Kus võib füüsiline isik relva hoiustada?",
    answers: [
      { text: "hoiukohas, mis asub relvaomaniku elukohas", correct: true },
      { text: "politseiga kooskõlastatult mujal kui oma elukohas", correct: true },
      { text: "politseiga kooskõlastatud kuni kahes ajutises hoiukohas", correct: true },
      { text: "Omanik otsustab relva hoiustamise koha ise", correct: false }
    ]
  },
        {
    question: "Tulirelva kandes: ",
    answers: [
      { text: "võib püstoli padrunipesas olla padrun", correct: false },
      { text: "peab olema kaasas isikut tõendav dokument", correct: true },
      { text: "tohib minna perega laulupeole, kui teised relva ei näe", correct: false },
      { text: "võib selle vajadusel hoiustada jõusaali lukustatavas kapis", correct: false }
    ]
  },
        {
    question: "Nõuded kahe relva hoidmiseks: ",
    answers: [
      { text: "peab olema välistatud kõrvaliste isikute ligipääs", correct: true },
      { text: "peab olema lukustatud nõuetekohases relvakapis", correct: true },
      { text: "peab olema lukustatud kapis", correct: false }
    ]
  },
        {
    question: "Laskekõlbmatu relv:",
    answers: [
      { text: "tuleb selle soetamisel registreerida PPAs", correct: true },
      { text: "võõrandatakse ilma PPA loata", correct: true },
      { text: "võib hävitada relvaomanik ise", correct: false },
      { text: "Laskekõlbmatu relva võõrandamiseks pole vaja taotleda eraldi PPA luba – nagu see on kohustuslik tulirelva võõrandamisel – tulirelva ostul-müügil võtab Müüja RelS § 80 nimetatud relva võõrandamise loa, ja Ostjal peab olema soetamisluba. Laskekõlbmatu relva võõrandamise protsess tuleb vastavalt RelS  läbi viia PPAs (nagu ka tulirelvade puhul), aga selles protsessis eraldi lube ei Ostjalt (soetajalt) ega Müüjalt (võõrandajalt) ei nõuta – Tõnu"}
    ]
  },
        {
    question: "Mis puhul on tegemist süüteoga:",
    answers: [
      { text: "tulirelva laskemoona ebaseaduslik käitlemine", correct: true },
      { text: "tulirelva olulise osa ebaseaduslik käitlemine", correct: true },
      { text: "avaliku korra rikkumine relvaga", correct: true },
      { text: "relva kaotsiminekust teatamata jätmine", correct: true },
      { text: "siin on kõik õiged vastused, sest süüteoks loetakse nii väärteod kui ka kriminaalasjad; esimesed 3 varianti on kriminaalasjad, neljas on väärtegu – Tõnu" }
    ]
  },
        {
    question: "Euroopa Liidus relva edasitoimetamiseks on vajalik:",
    answers: [
      { text: "Eestis väljastatud relvaluba", correct: false },
      { text: "Eestis väljastatud relvasoetusluba", correct: false },
      { text: "Euroopa Tulirelvapass", correct: true },
      { text: "ükskõik millises Euroopa Liidu riigis väljastatud relvaluba", correct: false }
    ]
  },
        {
    question: "Füüsilisele isiku lubatud relva otstarbed:",
    answers: [
      { text: "kollektsioneerimine", correct: true },
      { text: "enese ja vara kaitse", correct: true },
      { text: "lasketiirus relvade laenutamine", correct: false },
      { text: "ajaloosündmuse taasetendamine", correct: true }
    ]
  },
        {
    question: "Füüsilisel isikul on lubatud laskemoona omada:",
    answers: [
      { text: "200 padrunit iga enesekaitserelva kohta", correct: false },
      { text: "300 padrunit iga jahirelva kohta", correct: true },
      { text: "5500 padrunit enese ja vara kaitse, spordi ja jahirelvadele kokku", correct: false },
      { text: "mitme otstarbega relva puhul ei tohi ületada suurima lubatud kogusega otstarbe laskemoona kogust", correct: true }
    ]
  },
        {
    question: "Relvaloa pikendamisel:",
    answers: [
      { text: "tuleb maksta riigilõiv", correct: true },
      { text: "tuleb esitada avaldus", correct: true },
      { text: "kui relva otstarve on ainult enese ja vara kaitse, tuleb sooritada laskekatse", correct: true },
      { text: "paralleelrelvaloa pikendamisel ei ole vaja esitada uut relva omaniku nõusuolekut relva kasutamiseks", correct: false }
    ]
  },
        {
    question: "Füüsiline isik võib relva omandada:",
    answers: [
      { text: "ebameeldiva inimese ähvardamiseks", correct: false },
      { text: "spordiks", correct: true },
      { text: "jahiks", correct: true },
      { text: "kutsealal tegutsemiseks", correct: true }
    ]
  },
        {
    question: "Piiramata tsiviilkäibega relvad on:",
    answers: [
      { text: "pneumorelv kaliibriga kuni 4,5 mm (kaasa arvatud)", correct: true },
      { text: "gaasipüstol", correct: false },
      { text: "pneumorelv kaliibriga kuni 6,5 mm (kaasa arvatud)", correct: false },
      { text: "gaasipihusti", correct: true }
    ]
  },
        {
    question: "Relva kandmisel avalikus kohas:",
    answers: [
      { text: "ei pea kaasas kandma isikut tõendavat dokumenti", correct: false },
      { text: "peab relv olema varjatud", correct: true },
      { text: "võib olla kerges joobes", correct: false },
      { text: "relvolvri padrunipesas võib olla padrun", correct: true }
    ]
  },
        {
    question: "Öösihikut on lubatud omada relvaloaga, millele on kantud:",
    answers: [
      { text: "enese ja vara kaitseks registreeritud vintraudne püstol", correct: false },
      { text: "jahipidamise otstarbel registreeritud püss", correct: true },
      { text: "spordialaga tegelmiseks registreeritud püss", correct: false },
      { text: "jahipidamise otstarbel registreeritud revolver", correct: false }
    ]
  },
        {
    question: "Laskmist võib harjutada:",
    answers: [
      { text: "oma krundil kui võõrastele isikutele on ligipääs piiratud", correct: false },
      { text: "liivakarjääris kui valli kõrgus on vähemalt 5 meetrit", correct: false },
      { text: "vastavate lubadega lasketiirus või laskepaigas", correct: true },
      { text: "riigimetsas", correct: false }
    ]
  },
        {
    question: "Tulirelva ja laskemoona võib ajutiselt Eestist välja toimetada:",
    answers: [
      { text: "laskespordivõistlusel osalemiseks", correct: true },
      { text: "relva remontimiseks tootja juures", correct: true },
      { text: "turvalisuse tagamiseks puhkusereisil, kui on sihtriigi luba", correct: false },
      { text: "riigikaitseks osalemise harjutamiseks", correct: true }
    ]
  },
        {
    question: "Politsei- ja Piirivalveamet keeldub relvaloa pikendamisest:",
    answers: [
      { text: "isikule, kes enda või teise isiku turvalisust ohustava käitumise tõttu on sobimatu antud liiki relva soetama ja omama", correct: true },
      { text: "isikule, kelle suhtes on põhjendatud kahtlus, et ta võib ohustada Eesti Vabariigi julgeolekut", correct: true },
      { text: "isikule, kellel puudub juhiluba", correct: false },
      { text: "isikule, kes ei esitanud mõjuva põhjuseta õigeaegselt relvaloa pikendamise taotlust", correct: true }
    ]
  },
        {
    question: "Hädakaitse piire ei ületa isik:",
    answers: [
      { text: "kaitsetegevus vastab ründe ohtlikkusele ega tekita ründajale liigset kahju", correct: true },
      { text: "hädakaitset teostatakse kavatsetult või otsese tahtlusega vahendiga, mis ilmselt ei vasta ründe ohtlikkusele", correct: false },
      { text: "asutakse rünnatavat isikut kaitsma vahendiga, mis vastab ründe ohtlikkusele", correct: true },
      { text: "tekitatakse kavatsetult või otsese tahtlusega ründajale ilmselt liigset kahju", correct: false }
    ]
  },
        {
    question: "Politsei- ja Piirivalveamet tunnistab relvaloa kehtetuks kui:",
    answers: [
      { text: "loa omaja on surnud või teadmata kadunuks tunnistatud", correct: true },
      { text: "loa omaja taotleb seda", correct: true },
      { text: "loa omaja on viimase kolme aasta jooksul vähemalt kaks korda rikkunud Relvaseaduse või selle alusel antud õigusakti nõudeid", correct: true },
      { text: "loa omajal on kehtiv kriminaalkaristus relvaga toime pandud kuriteo eest", correct: true }
    ]
  },
        {
    question: "Relvaluba, millele on kantud vaid relva liik, annab õiguse:",
    answers: [
      { text: "omandada öösihikut", correct: false },
      { text: "kasutusse võetud relva võõrandamiseks", correct: false },
      { text: "soetada seaduslikult kasutusse võetud relvale laskemoona", correct: true },
      { text: "osta tulirelv", correct: false }
    ]
  },
        {
    question: "Tulirelvast laskmist võib harjutada:",
    answers: [
      { text: "oma kinnistul, kui ohutus ümbrusele on tagatud", correct: false },
      { text: "ettenähtud nõusolekutega lasketiirus või laskepaigas", correct: true },
      { text: "riigimetsas", correct: false },
      { text: "liivakarjääris suunaga üle 5 meetrisesse valli", correct: false }
    ]
  },
          {
    question: "Tulirelva ja laskemoona tuleb hoiukohas hoida:",
    answers: [
      { text: "relv tühjaks laetuna", correct: true },
      { text: "1 relva ja selle laskemoona peidetult ühes kohas", correct: false },
      { text: "nii, et see oleks vajadusel kättesaadav teisele täisealisele pereliikmele", correct: false },
      { text: "2 kuni 8 tulirelva tuleb hoida relvakapis, mis on kinnitatud põranda, seina või ehituskonstruktsiooni külge", correct: true }
    ]
  },
          {
    question: "Füüsilisele isikule lubatud relva omamise otstarve on:",
    answers: [
      { text: "Jahipidamine", correct: true },
      { text: "Turvalisuse tagamine", correct: true },
      { text: "Kollektsioneerimine", correct: true },
      { text: "Lasketiirus laenutamine", correct: false },
      { text: "Kultuurilise sündmuse etendamine", correct: true }
    ]
  },
          {
    question: "Tulirelva olulised osad on:",
    answers: [
      { text: "Padrunisalv", correct: true },
      { text: "Lukk", correct: true },
      { text: "Kaitseriiv", correct: false },
      { text: "Relvaraam ", correct: true },
      { text: "Püstolikelk ", correct: true }
    ]
  },
          {
    question: "Füüsiline isik võib hoida laskemoona järgmistes kogustes:",
    answers: [
      { text: "Kuni 200 padrunit isiku omanduses või valduses olevate turvalisuse tagamise otstarbega tulirelvade kohta", correct: true },
      { text: "kasutusse võetud relva võõrandamiseks", correct: true },
      { text: "Kuni 200 gaasirelva padrunit", correct: false },
      { text: "Kuni 500 sütikut", correct: false }
    ]
  },
          {
    question: "Relva võib anda ajutiselt hoiule:",
    answers: [
      { text: "Üleandmise-vastuvõtmise akti alusel teisele relvaloaga isikule kuni 1 ööpäevaks", correct: true },
      { text: "Teisele relvaloaga isikule kuni 10 ööpäevaks", correct: false },
      { text: "Isikule, kellel puudub relvaluba, kui vormistada notariaalne üleandmise-vastuvõtmise akt", correct: false },
      { text: "Relvade hoidmise teenuse tegevusloaga isikule", correct: true }
    ]
  },
          {
    question: "Tulirelva müümisel (võõrandamisel) teisele füüsilisele isikule:",
    answers: [
      { text: "Piisab, kui ostjal on vastav relvaluba", correct: false },
      { text: "Vormistatakse see Politsei- ja Piirivalveameti pädeva ametniku juuresolekul", correct: true },
      { text: "Võib tehing toimuda kodus, kui on teavitatud Politsei- ja Piirivalveametit", correct: false },
      { text: "Peab ostjal olema soetamisluba", correct: true }
    ]
  },
          {
    question: "Süüteona on karistatav:",
    answers: [
      { text: "Tulirelva mittenõuetekohane hoidmine", correct: true },
      { text: "Tulirelva lohakas hoidmine, kui see on kaasa toonud kellegi tervisekahjustuse", correct: true },
      { text: "Tsiviilkäibes keelatud tulirelva ebaseaduslik käitlemine", correct: true },
      { text: "Tsiviilkäibes keelatud laskemoona ebaseaduslik käitlemine", correct: true }
    ]
  },
  {
    question: "Tulirelva müümisel (võõrandamisel) teisele füüsilisele isikule:",
    answers: [
      { text: "Piisab, kui ostjal on vastav relvaluba", correct: false },
      { text: "Vormistatakse see Politsei- ja Piirivalveameti pädeva ametniku juuresolekul", correct: true },
      { text: "Võib tehing toimuda kodus, kui on teavitatud Politsei- ja Piirivalveametit", correct: false },
      { text: "Peab ostjal olema soetamisluba", correct: true }
    ]
  },
  

];

const quizContainer = document.getElementById("quiz");

questions.forEach((q, index) => {
  const div = document.createElement("div");
  div.classList.add("question");

  let html = `<h3>${index + 1}. ${q.question}</h3>`;

  q.answers.forEach((a, i) => {
    html += `
      <label>
        <input type="checkbox" name="q${index}" value="${i}">
        ${a.text}
      </label><br>
    `;
  });

  html += `<button onclick="checkAnswer(${index})">Vasta</button>`;
  html += `<p id="result${index}"></p>`;

  div.innerHTML = html;
  quizContainer.appendChild(div);
});

function checkAnswer(qIndex) {
  const selected = document.querySelectorAll(`input[name="q${qIndex}"]:checked`);
  const result = document.getElementById(`result${qIndex}`);

  let correctAnswers = questions[qIndex].answers
    .map((a, i) => a.correct ? i : null)
    .filter(i => i !== null);

  let selectedValues = Array.from(selected).map(el => parseInt(el.value));

  const isCorrect =
    selectedValues.length === correctAnswers.length &&
    selectedValues.every(v => correctAnswers.includes(v));


  if (!answeredQuestions.has(qIndex)) {
    answeredQuestions.add(qIndex);
    answeredCount++;

    if (isCorrect) {
      correctCount++;
    }
  } else {

    const wasCorrect = result.classList.contains("correct");

    if (wasCorrect && !isCorrect) {
      correctCount--;
    } else if (!wasCorrect && isCorrect) {
      correctCount++;
    }
  }

  // Update UI
  if (isCorrect) {
    result.textContent = "Õige!";
    result.className = "correct";
  } else {
    result.textContent = "Vale!";
    result.className = "wrong";
  }

  updateCounter();
}

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: "smooth"
  });
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function updateCounter() {
  const counter = document.getElementById("scoreCounter");
  counter.textContent = `${correctCount} / ${answeredCount} õigesti vastatud (128)`;
}


function clearAll() {

  document.querySelectorAll("input[type='checkbox']").forEach(cb => {
    cb.checked = false;
  });


  document.querySelectorAll("p[id^='result']").forEach(p => {
    p.textContent = "";
    p.className = "";
  });

  correctCount = 0;
  answeredCount = 0;
  answeredQuestions.clear();

  updateCounter();
  scrollToTop();
}