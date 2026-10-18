import{s as ga,v as va,c as xa,a as wa}from"./environment-contract-TGGH_Mcj.js";import{ShaderChunk as Sa,WebGLRenderer as Da,PMREMGenerator as Fa}from"./three.module-3SIJWF1t.js";import{G as Pa,m as ka}from"./GLTFLoader-TokDD4sh.js";import{M as Ue,O as Ma,B as $e,F as Qe,S as I,U as se,V as $,W as ye,H as je,N as ce,T as Ea,C as K,a as V,b as He,D as la,R as Xe,c as Ta,A as Ne,Z as Oe,d as ea,e as aa,f as ya,g as ja,h as Ra,i as Aa,j as ta,k as Ca,l as _a,m as ca,n as za,o as La,p as Ga,q as qa,L as Ua,r as Na,s as Oa,t as ba,u as Wa,v as Va,w as Ba,x as da,y as Ka,z as Ja,E as ha,P as fa,G as Ha,I as ia,J as Ia,K as Qa,Q as oa,X as Xa,Y as Za,_ as Ya,$ as $a,a0 as et,a1 as at,a2 as tt,a3 as it}from"./three.core-JwXrd0pP.js";var ot=(function(){var r="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",i=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),o=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var a=WebAssembly.validate(i)?n(e):n(r),t,s=WebAssembly.instantiate(a,{}).then(function(d){t=d.instance,t.exports.__wasm_call_ctors()});function n(d){for(var c=new Uint8Array(d.length),b=0;b<d.length;++b){var f=d.charCodeAt(b);c[b]=f>96?f-97:f>64?f-39:f+4}for(var x=0,b=0;b<d.length;++b)c[x++]=c[b]<60?o[c[b]]:(c[b]-60)*64+c[++b];return c.buffer.slice(0,x)}function p(d,c,b,f,x,k,A){var C=d.exports.sbrk,v=f+3&-4,S=C(v*x),F=C(k.length),M=new Uint8Array(d.exports.memory.buffer);M.set(k,F);var E=c(S,f,x,F,k.length);if(E==0&&A&&A(S,v,x),b.set(M.subarray(S,S+f*x)),C(S-C(0)),E!=0)throw new Error("Malformed buffer data: "+E)}var h={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},w=[],T=0;function j(d){var c={object:new Worker(d),pending:0,requests:{}};return c.object.onmessage=function(b){var f=b.data;c.pending-=f.count,c.requests[f.id][f.action](f.value),delete c.requests[f.id]},c}function y(d){for(var c="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(a)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+P.name+";"+p.toString()+P.toString(),b=new Blob([c],{type:"text/javascript"}),f=URL.createObjectURL(b),x=w.length;x<d;++x)w[x]=j(f);for(var x=d;x<w.length;++x)w[x].object.postMessage({});w.length=d,URL.revokeObjectURL(f)}function R(d,c,b,f,x){for(var k=w[0],A=1;A<w.length;++A)w[A].pending<k.pending&&(k=w[A]);return new Promise(function(C,v){var S=new Uint8Array(b),F=++T;k.pending+=d,k.requests[F]={resolve:C,reject:v},k.object.postMessage({id:F,count:d,size:c,source:S,mode:f,filter:x},[S.buffer])})}function P(d){var c=d.data;self.ready.then(function(b){if(!c.id)return self.close();try{var f=new Uint8Array(c.count*c.size);p(b,b.exports[c.mode],f,c.count,c.size,c.source,b.exports[c.filter]),self.postMessage({id:c.id,count:c.count,action:"resolve",value:f},[f.buffer])}catch(x){self.postMessage({id:c.id,count:c.count,action:"reject",value:x})}})}return{ready:s,supported:!0,useWorkers:function(d){y(d)},decodeVertexBuffer:function(d,c,b,f,x){p(t,t.exports.meshopt_decodeVertexBuffer,d,c,b,f,t.exports[h[x]])},decodeIndexBuffer:function(d,c,b,f){p(t,t.exports.meshopt_decodeIndexBuffer,d,c,b,f)},decodeIndexSequence:function(d,c,b,f){p(t,t.exports.meshopt_decodeIndexSequence,d,c,b,f)},decodeGltfBuffer:function(d,c,b,f,x,k){p(t,t.exports[u[x]],d,c,b,f,t.exports[h[k]])},decodeGltfBufferAsync:function(d,c,b,f,x){return w.length>0?R(d,c,b,u[f],h[x]):s.then(function(){var k=new Uint8Array(d*c);return p(t,t.exports[u[f]],k,d,c,b,t.exports[h[x]]),k})}}})();const Te=Object.freeze({terrace:Object.freeze({geometry:new URL("/home/demo/assets/terrace-live-04-DV_bu1R0.glb",import.meta.url),metadata:new URL("/home/demo/assets/terrace-live-04-gGODQ2FI.json",import.meta.url)}),meadow:Object.freeze({geometry:new URL("/home/demo/assets/meadow-meshopt-20260907-CTKxt-Zk.glb",import.meta.url),metadata:new URL("/home/demo/assets/meadow-meshopt-20260907-KhwfiCsS.json",import.meta.url),edition:"meadow-meshopt-20260907.1"}),woods:Object.freeze({geometry:new URL("/home/demo/assets/woods-live-04-DfPM-Arz.glb",import.meta.url),metadata:new URL("/home/demo/assets/woods-live-04-BnGsnS8Z.json",import.meta.url)})});async function st(r,e,i,{decoder:o=ot}={}){const a=Object.hasOwn(Te,r)&&Te[r];if(!a)throw new TypeError("Unknown geometry scene");if(!(e instanceof ArrayBuffer)||(i==null?void 0:i.place)!==r||i.revision!=="live-world-04"||i.bytes!==e.byteLength||!Array.isArray(i.lights))throw new Error("Scene metadata does not match its geometry");if(a.edition&&i.assetEdition!==a.edition)throw new Error("Scene asset edition does not match its geometry");if(a.edition&&(!(o!=null&&o.supported)||typeof o.decodeGltfBufferAsync!="function"))throw new Error("The local scene geometry decoder is unavailable");return new Pa().setMeshoptDecoder(o).parseAsync(e,"")}const we={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Se{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const rt=new Ma(-1,1,1,-1,0,1);class nt extends $e{constructor(){super(),this.setAttribute("position",new Qe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Qe([0,2,0,0,2,0],2))}}const lt=new nt;class Ze{constructor(e){this._mesh=new Ue(lt,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,rt)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class pa extends Se{constructor(e,i="tDiffuse"){super(),this.textureID=i,this.uniforms=null,this.material=null,e instanceof I?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=se.clone(e.uniforms),this.material=new I({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Ze(this.material)}render(e,i,o){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=o.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class sa extends Se{constructor(e,i){super(),this.scene=e,this.camera=i,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,i,o){const a=e.getContext(),t=e.state;t.buffers.color.setMask(!1),t.buffers.depth.setMask(!1),t.buffers.color.setLocked(!0),t.buffers.depth.setLocked(!0);let s,n;this.inverse?(s=0,n=1):(s=1,n=0),t.buffers.stencil.setTest(!0),t.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),t.buffers.stencil.setFunc(a.ALWAYS,s,4294967295),t.buffers.stencil.setClear(n),t.buffers.stencil.setLocked(!0),e.setRenderTarget(o),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),t.buffers.color.setLocked(!1),t.buffers.depth.setLocked(!1),t.buffers.color.setMask(!0),t.buffers.depth.setMask(!0),t.buffers.stencil.setLocked(!1),t.buffers.stencil.setFunc(a.EQUAL,1,4294967295),t.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),t.buffers.stencil.setLocked(!0)}}class ct extends Se{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class bt{constructor(e,i){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),i===void 0){const o=e.getSize(new $);this._width=o.width,this._height=o.height,i=new ye(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:je}),i.texture.name="EffectComposer.rt1"}else this._width=i.width,this._height=i.height;this.renderTarget1=i,this.renderTarget2=i.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pa(we),this.copyPass.material.blending=ce,this.timer=new Ea}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,i){this.passes.splice(i,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const i=this.passes.indexOf(e);i!==-1&&this.passes.splice(i,1)}isLastEnabledPass(e){for(let i=e+1;i<this.passes.length;i++)if(this.passes[i].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const i=this.renderer.getRenderTarget();let o=!1;for(let a=0,t=this.passes.length;a<t;a++){const s=this.passes[a];if(s.enabled!==!1){if(s.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),s.render(this.renderer,this.writeBuffer,this.readBuffer,e,o),s.needsSwap){if(o){const n=this.renderer.getContext(),p=this.renderer.state.buffers.stencil;p.setFunc(n.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),p.setFunc(n.EQUAL,1,4294967295)}this.swapBuffers()}sa!==void 0&&(s instanceof sa?o=!0:s instanceof ct&&(o=!1))}}this.renderer.setRenderTarget(i)}reset(e){if(e===void 0){const i=this.renderer.getSize(new $);this._pixelRatio=this.renderer.getPixelRatio(),this._width=i.width,this._height=i.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,i){this._width=e,this._height=i;const o=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(o,a),this.renderTarget2.setSize(o,a);for(let t=0;t<this.passes.length;t++)this.passes[t].setSize(o,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class dt extends Se{constructor(e,i,o=null,a=null,t=null){super(),this.scene=e,this.camera=i,this.overrideMaterial=o,this.clearColor=a,this.clearAlpha=t,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new K}render(e,i,o){const a=e.autoClear;e.autoClear=!1;let t,s;this.overrideMaterial!==null&&(s=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(t=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:o),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(t),this.overrideMaterial!==null&&(this.scene.overrideMaterial=s),e.autoClear=a}}const We={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new He},cameraProjectionMatrixInverse:{value:new He},cameraWorldMatrix:{value:new He},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new V(-1,-1,-1)},sceneBoxMax:{value:new V(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif

		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}

		void main() {
			float depth = getDepth(vUv.xy);

			#ifdef USE_REVERSED_DEPTH_BUFFER
				if (depth <= 0.0) {
					discard;
					return;
				}
			#else
				if (depth >= 1.0) {
					discard;
					return;
				}
			#endif
			
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {

				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w);
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));

				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));

				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},Ve={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Ye={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function ht(r=5){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),i=ft(e),o=i.length,a=new Uint8Array(o*4);for(let s=0;s<o;++s){const n=i[s],p=2*Math.PI*n/o,h=new V(Math.cos(p),Math.sin(p),0).normalize();a[s*4]=(h.x*.5+.5)*255,a[s*4+1]=(h.y*.5+.5)*255,a[s*4+2]=127,a[s*4+3]=255}const t=new la(a,e,e);return t.wrapS=Xe,t.wrapT=Xe,t.needsUpdate=!0,t}function ft(r){const e=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),i=e*e,o=Array(i).fill(0);let a=Math.floor(e/2),t=e-1;for(let s=1;s<=i;){if(a===-1&&t===e?(t=e-2,a=0):(t===e&&(t=0),a<0&&(a=e-1)),o[a*e+t]!==0){t-=2,a++;continue}else o[a*e+t]=s++;t++,a--}return o}const Be={defines:{SAMPLES:16,SAMPLE_VECTORS:ua(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new $},cameraProjectionMatrixInverse:{value:new He},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;

		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition( const in vec2 screenPosition, const in float depth ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				vec4 clipSpacePosition = vec4( vec2( screenPosition ) * 2.0 - 1.0, depth, 1.0 );
			#else
				vec4 clipSpacePosition = vec4( vec3( screenPosition, depth ) * 2.0 - 1.0, 1.0 );
			#endif
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);

			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;

			denoised += w * neighborColor;
			totalWeight += w;
		}

		void main() {
			float depth = getDepth(vUv.xy);
			vec3 viewNormal = getViewNormal(vUv);
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);

			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}

			if (totalWeight > 0.) {
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function ua(r,e,i){const o=pt(r,e,i);let a="vec3[SAMPLES](";for(let t=0;t<r;t++){const s=o[t];a+=`vec3(${s.x}, ${s.y}, ${s.z})${t<r-1?",":")"}`}return a}function pt(r,e,i){const o=[];for(let a=0;a<r;a++){const t=2*Math.PI*e*a/r,s=Math.pow(a/(r-1),i);o.push(new V(Math.cos(t),Math.sin(t),s))}return o}class ut{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let i=0;i<256;i++)this.p[i]=Math.floor(e.random()*256);this.perm=[];for(let i=0;i<512;i++)this.perm[i]=this.p[i&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}noise(e,i){let o,a,t;const s=.5*(Math.sqrt(3)-1),n=(e+i)*s,p=Math.floor(e+n),h=Math.floor(i+n),u=(3-Math.sqrt(3))/6,w=(p+h)*u,T=p-w,j=h-w,y=e-T,R=i-j;let P,d;y>R?(P=1,d=0):(P=0,d=1);const c=y-P+u,b=R-d+u,f=y-1+2*u,x=R-1+2*u,k=p&255,A=h&255,C=this.perm[k+this.perm[A]]%12,v=this.perm[k+P+this.perm[A+d]]%12,S=this.perm[k+1+this.perm[A+1]]%12;let F=.5-y*y-R*R;F<0?o=0:(F*=F,o=F*F*this._dot(this.grad3[C],y,R));let M=.5-c*c-b*b;M<0?a=0:(M*=M,a=M*M*this._dot(this.grad3[v],c,b));let E=.5-f*f-x*x;return E<0?t=0:(E*=E,t=E*E*this._dot(this.grad3[S],f,x)),70*(o+a+t)}noise3d(e,i,o){let a,t,s,n;const h=(e+i+o)*.3333333333333333,u=Math.floor(e+h),w=Math.floor(i+h),T=Math.floor(o+h),j=1/6,y=(u+w+T)*j,R=u-y,P=w-y,d=T-y,c=e-R,b=i-P,f=o-d;let x,k,A,C,v,S;c>=b?b>=f?(x=1,k=0,A=0,C=1,v=1,S=0):c>=f?(x=1,k=0,A=0,C=1,v=0,S=1):(x=0,k=0,A=1,C=1,v=0,S=1):b<f?(x=0,k=0,A=1,C=0,v=1,S=1):c<f?(x=0,k=1,A=0,C=0,v=1,S=1):(x=0,k=1,A=0,C=1,v=1,S=0);const F=c-x+j,M=b-k+j,E=f-A+j,q=c-C+2*j,ee=b-v+2*j,Q=f-S+2*j,L=c-1+3*j,X=b-1+3*j,z=f-1+3*j,Z=u&255,ae=w&255,te=T&255,ue=this.perm[Z+this.perm[ae+this.perm[te]]]%12,be=this.perm[Z+x+this.perm[ae+k+this.perm[te+A]]]%12,de=this.perm[Z+C+this.perm[ae+v+this.perm[te+S]]]%12,O=this.perm[Z+1+this.perm[ae+1+this.perm[te+1]]]%12;let J=.6-c*c-b*b-f*f;J<0?a=0:(J*=J,a=J*J*this._dot3(this.grad3[ue],c,b,f));let W=.6-F*F-M*M-E*E;W<0?t=0:(W*=W,t=W*W*this._dot3(this.grad3[be],F,M,E));let ie=.6-q*q-ee*ee-Q*Q;ie<0?s=0:(ie*=ie,s=ie*ie*this._dot3(this.grad3[de],q,ee,Q));let H=.6-L*L-X*X-z*z;return H<0?n=0:(H*=H,n=H*H*this._dot3(this.grad3[O],L,X,z)),32*(a+t+s+n)}noise4d(e,i,o,a){const t=this.grad4,s=this.simplex,n=this.perm,p=(Math.sqrt(5)-1)/4,h=(5-Math.sqrt(5))/20;let u,w,T,j,y;const R=(e+i+o+a)*p,P=Math.floor(e+R),d=Math.floor(i+R),c=Math.floor(o+R),b=Math.floor(a+R),f=(P+d+c+b)*h,x=P-f,k=d-f,A=c-f,C=b-f,v=e-x,S=i-k,F=o-A,M=a-C,E=v>S?32:0,q=v>F?16:0,ee=S>F?8:0,Q=v>M?4:0,L=S>M?2:0,X=F>M?1:0,z=E+q+ee+Q+L+X,Z=s[z][0]>=3?1:0,ae=s[z][1]>=3?1:0,te=s[z][2]>=3?1:0,ue=s[z][3]>=3?1:0,be=s[z][0]>=2?1:0,de=s[z][1]>=2?1:0,O=s[z][2]>=2?1:0,J=s[z][3]>=2?1:0,W=s[z][0]>=1?1:0,ie=s[z][1]>=1?1:0,H=s[z][2]>=1?1:0,Ce=s[z][3]>=1?1:0,ne=v-Z+h,_e=S-ae+h,ze=F-te+h,me=M-ue+h,De=v-be+2*h,Le=S-de+2*h,ge=F-O+2*h,Fe=M-J+2*h,Pe=v-W+3*h,ve=S-ie+3*h,oe=F-H+3*h,xe=M-Ce+3*h,ke=v-1+4*h,he=S-1+4*h,Me=F-1+4*h,Ee=M-1+4*h,l=P&255,g=d&255,m=c&255,D=b&255,_=n[l+n[g+n[m+n[D]]]]%32,U=n[l+Z+n[g+ae+n[m+te+n[D+ue]]]]%32,N=n[l+be+n[g+de+n[m+O+n[D+J]]]]%32,B=n[l+W+n[g+ie+n[m+H+n[D+Ce]]]]%32,Ge=n[l+1+n[g+1+n[m+1+n[D+1]]]]%32;let fe=.6-v*v-S*S-F*F-M*M;fe<0?u=0:(fe*=fe,u=fe*fe*this._dot4(t[_],v,S,F,M));let G=.6-ne*ne-_e*_e-ze*ze-me*me;G<0?w=0:(G*=G,w=G*G*this._dot4(t[U],ne,_e,ze,me));let pe=.6-De*De-Le*Le-ge*ge-Fe*Fe;pe<0?T=0:(pe*=pe,T=pe*pe*this._dot4(t[N],De,Le,ge,Fe));let le=.6-Pe*Pe-ve*ve-oe*oe-xe*xe;le<0?j=0:(le*=le,j=le*le*this._dot4(t[B],Pe,ve,oe,xe));let qe=.6-ke*ke-he*he-Me*Me-Ee*Ee;return qe<0?y=0:(qe*=qe,y=qe*qe*this._dot4(t[Ge],ke,he,Me,Ee)),27*(u+w+T+j+y)}_dot(e,i,o){return e[0]*i+e[1]*o}_dot3(e,i,o,a){return e[0]*i+e[1]*o+e[2]*a}_dot4(e,i,o,a,t){return e[0]*i+e[1]*o+e[2]*a+e[3]*t}}class re extends Se{constructor(e,i,o=512,a=512,t,s,n){super(),this.width=o,this.height=a,this.clear=!0,this.camera=i,this.scene=e,this.output=0,this._renderGBuffer=!0,this._visibilityCache=[],this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=ht(),this.pdNoiseTexture=this._generateNoise(),this.gtaoRenderTarget=new ye(this.width,this.height,{type:je}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new I({defines:Object.assign({},We.defines),uniforms:se.clone(We.uniforms),vertexShader:We.vertexShader,fragmentShader:We.fragmentShader,blending:ce,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new Ta,this.normalMaterial.blending=ce,this.pdMaterial=new I({defines:Object.assign({},Be.defines),uniforms:se.clone(Be.uniforms),vertexShader:Be.vertexShader,fragmentShader:Be.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new I({defines:Object.assign({},Ve.defines),uniforms:se.clone(Ve.uniforms),vertexShader:Ve.vertexShader,fragmentShader:Ve.fragmentShader,blending:ce}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new I({uniforms:se.clone(we.uniforms),vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:aa,blendDst:Oe,blendEquation:Ne,blendSrcAlpha:ea,blendDstAlpha:Oe,blendEquationAlpha:Ne}),this.blendMaterial=new I({uniforms:se.clone(Ye.uniforms),vertexShader:Ye.vertexShader,fragmentShader:Ye.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:ya,blendSrc:aa,blendDst:Oe,blendEquation:Ne,blendSrcAlpha:ea,blendDstAlpha:Oe,blendEquationAlpha:Ne}),this._fsQuad=new Ze(null),this._originalClearColor=new K,this.setGBuffer(t?t.depthTexture:void 0,t?t.normalTexture:void 0),s!==void 0&&this.updateGtaoMaterial(s),n!==void 0&&this.updatePdMaterial(n)}setSize(e,i){this.width=e,this.height=i,this.gtaoRenderTarget.setSize(e,i),this.normalRenderTarget.setSize(e,i),this.pdRenderTarget.setSize(e,i),this.gtaoMaterial.uniforms.resolution.value.set(e,i),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(e,i),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this._fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(e,i){e!==void 0?(this.depthTexture=e,this.normalTexture=i,this._renderGBuffer=!1):(this.depthTexture=new ja,this.depthTexture.format=Ra,this.depthTexture.type=Aa,this.normalRenderTarget=new ye(this.width,this.height,{minFilter:ta,magFilter:ta,type:je,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const o=this.normalTexture?1:0,a=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=o,this.gtaoMaterial.defines.DEPTH_SWIZZLING=a,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=o,this.pdMaterial.defines.DEPTH_SWIZZLING=a,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(e){e?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(e.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(e.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(e){e.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=e.radius),e.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=e.distanceExponent),e.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=e.thickness),e.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=e.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),e.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=e.scale),e.samples!==void 0&&e.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=e.samples,this.gtaoMaterial.needsUpdate=!0),e.screenSpaceRadius!==void 0&&(e.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=e.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(e){let i=!1;e.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=e.lumaPhi),e.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=e.depthPhi),e.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=e.normalPhi),e.radius!==void 0&&e.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=e.radius),e.radiusExponent!==void 0&&e.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=e.radiusExponent,i=!0),e.rings!==void 0&&e.rings!==this.pdRings&&(this.pdRings=e.rings,i=!0),e.samples!==void 0&&e.samples!==this.pdSamples&&(this.pdSamples=e.samples,i=!0),i&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=ua(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(e,i,o){switch(this._renderGBuffer&&(this._overrideVisibility(),this._renderOverride(e,this.normalMaterial,this.normalRenderTarget,7829503,1),this._restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this._renderPass(e,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this._renderPass(e,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case re.OUTPUT.Off:break;case re.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=o.texture,this.copyMaterial.blending=ce,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case re.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=ce,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case re.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=ce,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case re.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this._renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:i);break;case re.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=ce,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i);break;case re.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=o.texture,this.copyMaterial.blending=ce,this._renderPass(e,this.copyMaterial,this.renderToScreen?null:i),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this._renderPass(e,this.blendMaterial,this.renderToScreen?null:i);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}_renderPass(e,i,o,a,t){e.getClearColor(this._originalClearColor);const s=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(o),e.autoClear=!1,a!=null&&(e.setClearColor(a),e.setClearAlpha(t||0),e.clear()),this._fsQuad.material=i,this._fsQuad.render(e),e.autoClear=n,e.setClearColor(this._originalClearColor),e.setClearAlpha(s)}_renderOverride(e,i,o,a,t){e.getClearColor(this._originalClearColor);const s=e.getClearAlpha(),n=e.autoClear;e.setRenderTarget(o),e.autoClear=!1,a=i.clearColor||a,t=i.clearAlpha||t,a!=null&&(e.setClearColor(a),e.setClearAlpha(t||0),e.clear()),this.scene.overrideMaterial=i,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=n,e.setClearColor(this._originalClearColor),e.setClearAlpha(s)}_overrideVisibility(){const e=this.scene,i=this._visibilityCache;e.traverse(function(o){(o.isPoints||o.isLine||o.isLine2)&&o.visible&&(o.visible=!1,i.push(o))})}_restoreVisibility(){const e=this._visibilityCache;for(let i=0;i<e.length;i++)e[i].visible=!0;e.length=0}_generateNoise(e=64){const i=new ut,o=e*e*4,a=new Uint8Array(o);for(let s=0;s<e;s++)for(let n=0;n<e;n++){const p=s,h=n;a[(s*e+n)*4]=(i.noise(p,h)*.5+.5)*255,a[(s*e+n)*4+1]=(i.noise(p+e,h)*.5+.5)*255,a[(s*e+n)*4+2]=(i.noise(p,h+e)*.5+.5)*255,a[(s*e+n)*4+3]=(i.noise(p+e,h+e)*.5+.5)*255}const t=new la(a,e,e,Ca,_a);return t.wrapS=Xe,t.wrapT=Xe,t.needsUpdate=!0,t}}re.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const mt={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new K(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ae extends Se{constructor(e,i=1,o,a){super(),this.strength=i,this.radius=o,this.threshold=a,this.resolution=e!==void 0?new $(e.x,e.y):new $(256,256),this.clearColor=new K(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let t=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);this.renderTargetBright=new ye(t,s,{type:je}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const w=new ye(t,s,{type:je});w.texture.name="UnrealBloomPass.h"+u,w.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(w);const T=new ye(t,s,{type:je});T.texture.name="UnrealBloomPass.v"+u,T.texture.generateMipmaps=!1,this.renderTargetsVertical.push(T),t=Math.round(t/2),s=Math.round(s/2)}const n=mt;this.highPassUniforms=se.clone(n.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new I({uniforms:this.highPassUniforms,vertexShader:n.vertexShader,fragmentShader:n.fragmentShader}),this.separableBlurMaterials=[];const p=[6,10,14,18,22];t=Math.round(this.resolution.x/2),s=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(p[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new $(1/t,1/s),t=Math.round(t/2),s=Math.round(s/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=i,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1),new V(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=se.clone(we.uniforms),this.blendMaterial=new I({uniforms:this.copyUniforms,vertexShader:we.vertexShader,fragmentShader:we.fragmentShader,premultipliedAlpha:!0,blending:ca,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new K,this._oldClearAlpha=1,this._basic=new za,this._fsQuad=new Ze(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,i){let o=Math.round(e/2),a=Math.round(i/2);this.renderTargetBright.setSize(o,a);for(let t=0;t<this.nMips;t++)this.renderTargetsHorizontal[t].setSize(o,a),this.renderTargetsVertical[t].setSize(o,a),this.separableBlurMaterials[t].uniforms.invSize.value=new $(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2)}render(e,i,o,a,t){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const s=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),t&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=o.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=o.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let n=this.renderTargetBright;for(let p=0;p<this.nMips;p++)this._fsQuad.material=this.separableBlurMaterials[p],this.separableBlurMaterials[p].uniforms.colorTexture.value=n.texture,this.separableBlurMaterials[p].uniforms.direction.value=Ae.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[p]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[p].uniforms.colorTexture.value=this.renderTargetsHorizontal[p].texture,this.separableBlurMaterials[p].uniforms.direction.value=Ae.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[p]),e.clear(),this._fsQuad.render(e),n=this.renderTargetsVertical[p];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,t&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(o),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=s}_getSeparableBlurMaterial(e){const i=[],o=e/3;for(let a=0;a<e;a++)i.push(.39894*Math.exp(-.5*a*a/(o*o))/o);return new I({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new $(.5,.5)},direction:{value:new $(.5,.5)},gaussianCoefficients:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new I({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Ae.BlurDirectionX=new $(1,0);Ae.BlurDirectionY=new $(0,1);const gt={name:"FXAAShader",uniforms:{tDiffuse:{value:null},resolution:{value:new $(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;

		#define EDGE_STEP_COUNT 6
		#define EDGE_GUESS 8.0
		#define EDGE_STEPS 1.0, 1.5, 2.0, 2.0, 2.0, 4.0
		const float edgeSteps[EDGE_STEP_COUNT] = float[EDGE_STEP_COUNT]( EDGE_STEPS );

		float _ContrastThreshold = 0.0312;
		float _RelativeThreshold = 0.063;
		float _SubpixelBlending = 1.0;

		vec4 Sample( sampler2D  tex2D, vec2 uv ) {

			return texture( tex2D, uv );

		}

		float SampleLuminance( sampler2D tex2D, vec2 uv ) {

			return dot( Sample( tex2D, uv ).rgb, vec3( 0.3, 0.59, 0.11 ) );

		}

		float SampleLuminance( sampler2D tex2D, vec2 texSize, vec2 uv, float uOffset, float vOffset ) {

			uv += texSize * vec2(uOffset, vOffset);
			return SampleLuminance(tex2D, uv);

		}

		struct LuminanceData {

			float m, n, e, s, w;
			float ne, nw, se, sw;
			float highest, lowest, contrast;

		};

		LuminanceData SampleLuminanceNeighborhood( sampler2D tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData l;
			l.m = SampleLuminance( tex2D, uv );
			l.n = SampleLuminance( tex2D, texSize, uv,  0.0,  1.0 );
			l.e = SampleLuminance( tex2D, texSize, uv,  1.0,  0.0 );
			l.s = SampleLuminance( tex2D, texSize, uv,  0.0, -1.0 );
			l.w = SampleLuminance( tex2D, texSize, uv, -1.0,  0.0 );

			l.ne = SampleLuminance( tex2D, texSize, uv,  1.0,  1.0 );
			l.nw = SampleLuminance( tex2D, texSize, uv, -1.0,  1.0 );
			l.se = SampleLuminance( tex2D, texSize, uv,  1.0, -1.0 );
			l.sw = SampleLuminance( tex2D, texSize, uv, -1.0, -1.0 );

			l.highest = max( max( max( max( l.n, l.e ), l.s ), l.w ), l.m );
			l.lowest = min( min( min( min( l.n, l.e ), l.s ), l.w ), l.m );
			l.contrast = l.highest - l.lowest;
			return l;

		}

		bool ShouldSkipPixel( LuminanceData l ) {

			float threshold = max( _ContrastThreshold, _RelativeThreshold * l.highest );
			return l.contrast < threshold;

		}

		float DeterminePixelBlendFactor( LuminanceData l ) {

			float f = 2.0 * ( l.n + l.e + l.s + l.w );
			f += l.ne + l.nw + l.se + l.sw;
			f *= 1.0 / 12.0;
			f = abs( f - l.m );
			f = clamp( f / l.contrast, 0.0, 1.0 );

			float blendFactor = smoothstep( 0.0, 1.0, f );
			return blendFactor * blendFactor * _SubpixelBlending;

		}

		struct EdgeData {

			bool isHorizontal;
			float pixelStep;
			float oppositeLuminance, gradient;

		};

		EdgeData DetermineEdge( vec2 texSize, LuminanceData l ) {

			EdgeData e;
			float horizontal =
				abs( l.n + l.s - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.se - 2.0 * l.e ) +
				abs( l.nw + l.sw - 2.0 * l.w );
			float vertical =
				abs( l.e + l.w - 2.0 * l.m ) * 2.0 +
				abs( l.ne + l.nw - 2.0 * l.n ) +
				abs( l.se + l.sw - 2.0 * l.s );
			e.isHorizontal = horizontal >= vertical;

			float pLuminance = e.isHorizontal ? l.n : l.e;
			float nLuminance = e.isHorizontal ? l.s : l.w;
			float pGradient = abs( pLuminance - l.m );
			float nGradient = abs( nLuminance - l.m );

			e.pixelStep = e.isHorizontal ? texSize.y : texSize.x;

			if (pGradient < nGradient) {

				e.pixelStep = -e.pixelStep;
				e.oppositeLuminance = nLuminance;
				e.gradient = nGradient;

			} else {

				e.oppositeLuminance = pLuminance;
				e.gradient = pGradient;

			}

			return e;

		}

		float DetermineEdgeBlendFactor( sampler2D  tex2D, vec2 texSize, LuminanceData l, EdgeData e, vec2 uv ) {

			vec2 uvEdge = uv;
			vec2 edgeStep;
			if (e.isHorizontal) {

				uvEdge.y += e.pixelStep * 0.5;
				edgeStep = vec2( texSize.x, 0.0 );

			} else {

				uvEdge.x += e.pixelStep * 0.5;
				edgeStep = vec2( 0.0, texSize.y );

			}

			float edgeLuminance = ( l.m + e.oppositeLuminance ) * 0.5;
			float gradientThreshold = e.gradient * 0.25;

			vec2 puv = uvEdge + edgeStep * edgeSteps[0];
			float pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
			bool pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !pAtEnd; i++ ) {

				puv += edgeStep * edgeSteps[i];
				pLuminanceDelta = SampleLuminance( tex2D, puv ) - edgeLuminance;
				pAtEnd = abs( pLuminanceDelta ) >= gradientThreshold;

			}

			if ( !pAtEnd ) {

				puv += edgeStep * EDGE_GUESS;

			}

			vec2 nuv = uvEdge - edgeStep * edgeSteps[0];
			float nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
			bool nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			for ( int i = 1; i < EDGE_STEP_COUNT && !nAtEnd; i++ ) {

				nuv -= edgeStep * edgeSteps[i];
				nLuminanceDelta = SampleLuminance( tex2D, nuv ) - edgeLuminance;
				nAtEnd = abs( nLuminanceDelta ) >= gradientThreshold;

			}

			if ( !nAtEnd ) {

				nuv -= edgeStep * EDGE_GUESS;

			}

			float pDistance, nDistance;
			if ( e.isHorizontal ) {

				pDistance = puv.x - uv.x;
				nDistance = uv.x - nuv.x;

			} else {

				pDistance = puv.y - uv.y;
				nDistance = uv.y - nuv.y;

			}

			float shortestDistance;
			bool deltaSign;
			if ( pDistance <= nDistance ) {

				shortestDistance = pDistance;
				deltaSign = pLuminanceDelta >= 0.0;

			} else {

				shortestDistance = nDistance;
				deltaSign = nLuminanceDelta >= 0.0;

			}

			if ( deltaSign == ( l.m - edgeLuminance >= 0.0 ) ) {

				return 0.0;

			}

			return 0.5 - shortestDistance / ( pDistance + nDistance );

		}

		vec4 ApplyFXAA( sampler2D  tex2D, vec2 texSize, vec2 uv ) {

			LuminanceData luminance = SampleLuminanceNeighborhood( tex2D, texSize, uv );
			if ( ShouldSkipPixel( luminance ) ) {

				return Sample( tex2D, uv );

			}

			float pixelBlend = DeterminePixelBlendFactor( luminance );
			EdgeData edge = DetermineEdge( texSize, luminance );
			float edgeBlend = DetermineEdgeBlendFactor( tex2D, texSize, luminance, edge, uv );
			float finalBlend = max( pixelBlend, edgeBlend );

			if (edge.isHorizontal) {

				uv.y += edge.pixelStep * finalBlend;

			} else {

				uv.x += edge.pixelStep * finalBlend;

			}

			return Sample( tex2D, uv );

		}

		void main() {

			gl_FragColor = ApplyFXAA( tDiffuse, resolution.xy, vUv );

		}`},Ke={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class vt extends Se{constructor(){super(),this.isOutputPass=!0,this.uniforms=se.clone(Ke.uniforms),this.material=new La({name:Ke.name,uniforms:this.uniforms,vertexShader:Ke.vertexShader,fragmentShader:Ke.fragmentShader}),this._fsQuad=new Ze(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,i,o){this.uniforms.tDiffuse.value=o.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ga.getTransfer(this._outputColorSpace)===qa&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ua?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Na?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Oa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ba?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Ba&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Re extends Ue{constructor(){const e=Re.SkyShader,i=new I({name:e.name,uniforms:se.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:da,depthWrite:!1});super(new Ka(1,1,1),i),this.isSky=!0}}Re.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new V},up:{value:new V(0,1,0)},cloudScale:{value:2e-4},cloudSpeed:{value:1e-4},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;
		uniform vec3 up;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( dot( vSunDirection, up ) );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform vec3 up;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// Cloud noise functions
		float hash( vec2 p ) {
			return fract( sin( dot( p, vec2( 127.1, 311.7 ) ) ) * 43758.5453123 );
		}

		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			f = f * f * ( 3.0 - 2.0 * f );
			float a = hash( i );
			float b = hash( i + vec2( 1.0, 0.0 ) );
			float c = hash( i + vec2( 0.0, 1.0 ) );
			float d = hash( i + vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, f.x ), mix( c, d, f.x ), f.y );
		}

		float fbm( vec2 p ) {
			float value = 0.0;
			float amplitude = 0.5;
			for ( int i = 0; i < 5; i ++ ) {
				value += amplitude * noise( p );
				p *= 2.0;
				amplitude *= 0.5;
			}
			return value;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, dot( up, direction ) ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - dot( up, vSunDirection ), 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = smoothstep( sunAngularDiameterCos, sunAngularDiameterCos + 0.00002, cosTheta ) * showSunDisc;
			L0 += ( vSunE * 19000.0 * Fex ) * sundisc;

			vec3 texColor = ( Lin + L0 ) * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Multi-octave noise for fluffy clouds
				float cloudNoise = fbm( cloudUV * 1000.0 );
				cloudNoise += 0.5 * fbm( cloudUV * 2000.0 + 3.7 );
				cloudNoise = cloudNoise * 0.5 + 0.5;

				// Apply coverage threshold
				float cloudMask = smoothstep( 1.0 - cloudCoverage, 1.0 - cloudCoverage + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.1 + 0.2 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting based on sun position
				float sunInfluence = dot( direction, vSunDirection ) * 0.5 + 0.5;
				float daylight = max( 0.0, vSunDirection.y * 2.0 );

				// Base cloud color affected by atmosphere
				vec3 atmosphereColor = Lin * 0.04;
				vec3 cloudColor = mix( vec3( 0.3 ), vec3( 1.0 ), daylight );
				cloudColor = mix( cloudColor, atmosphereColor + vec3( 1.0 ), sunInfluence * 0.5 );
				cloudColor *= vSunE * 0.00002;

				// Blend clouds with sky
				texColor = mix( texColor, cloudColor, cloudMask * cloudDensity );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const Y=(r,e=0,i=1)=>Math.min(i,Math.max(e,r));function xt(r){var R,P,d,c,b;const e=r.atmosphere,i=r.sun.altitude,o=Number(new Intl.DateTimeFormat("en",{month:"numeric",timeZone:r.region.zone}).format(new Date(r.instant))),a=Number(new Intl.DateTimeFormat("en",{day:"numeric",timeZone:r.region.zone}).format(new Date(r.instant))),t=(o-1+(r.region.lat<0?6:0))%12+a/31,s=t>8.65&&t<11?Math.sin((t-8.65)/2.35*Math.PI):0,n=t<2.7||t>10.8?1:0,p=n?.2:t<4?.25+.75*Y((t-2.7)/1.3):t>10?1-.8*Y((t-10)/.8):1,h=Y(((R=r.surface)==null?void 0:R.snowCover)??(((P=r.weather)==null?void 0:P.snowDepth)||0)/.075+e.snow*.45),u=Y(((d=r.surface)==null?void 0:d.wetness)??e.rain*.85+e.snow*.2),w=Y(Number.isFinite(e.daylight)?e.daylight:(i+8)/12),T=Y(Number.isFinite(e.warmth)?e.warmth:Math.exp(-Math.pow((i-5)/11,2))),j=Y(e.cloud),y=Y((r.moon.altitude+2)/14);return{flowering:n||t<3.5?0:1,solar:w,warm:T,cloud:j,wind:Y(e.wind),rain:Y(e.rain),snowfall:Y(e.snow),wet:u,snow:h,autumn:s,leafRetention:p,spring:Y(1-Math.abs(t-4)/2),sunPower:Math.max(0,Math.sin(i*Math.PI/180))**.22*6.8*(1-j*.82),moonPower:r.moon.altitude>0?y*(r.moon.fraction||0)*.23:0,air:7e-4+j*.0011+u*.005+(((c=r.weather)==null?void 0:c.code)>=45&&((b=r.weather)==null?void 0:b.code)<=48?.025:0)}}function Ie(r){const e=Math.PI*.75,i=Math.cos(e),o=Math.sin(e);return[r[0]*i-r[2]*o,r[1],r[0]*o+r[2]*i]}const ma=`
float vhHash(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}
float vhNoise(vec3 p){vec3 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(mix(vhHash(i),vhHash(i+vec3(1,0,0)),f.x),mix(vhHash(i+vec3(0,1,0)),vhHash(i+vec3(1,1,0)),f.x),f.y),mix(mix(vhHash(i+vec3(0,0,1)),vhHash(i+vec3(1,0,1)),f.x),mix(vhHash(i+vec3(0,1,1)),vhHash(i+vec3(1,1,1)),f.x),f.y),f.z);}
float vhFbm(vec3 p){return vhNoise(p)*.57+vhNoise(p*2.04+13.)*.28+vhNoise(p*4.13+37.)*.15;}
`;function wt(r=()=>{}){const e=new AbortController;let i=!1;const o={vhSun:{value:new V},vhMoon:{value:new V},vhZenith:{value:new K},vhHorizon:{value:new K},vhDay:{value:1},vhWarm:{value:0},vhCloud:{value:.3},vhTime:{value:0},vhMoonLight:{value:0},vhWind:{value:.3},vhCamera:{value:new V}};Object.assign(o,se.clone(Re.SkyShader.uniforms)),o.showSunDisc.value=0,o.cloudCoverage.value=0;const a=Re.SkyShader.fragmentShader.replace("void main() {","vec3 physicalAtmosphere(vec3 direction) {").replace("vec3 direction = normalize( vWorldPosition - cameraPosition );","").replace("gl_FragColor = vec4( texColor, 1.0 );","return texColor;").replace("#include <tonemapping_fragment>","").replace("#include <colorspace_fragment>",""),t="varying vec3 skyRay;"+Re.SkyShader.vertexShader.replace("vWorldPosition = worldPosition.xyz;","vWorldPosition = worldPosition.xyz;skyRay=worldPosition.xyz-cameraPosition;"),s=new I({uniforms:o,side:da,depthWrite:!1,vertexShader:t,fragmentShader:`${a}
 varying vec3 skyRay;uniform vec3 vhSun,vhMoon,vhZenith,vhHorizon;uniform float vhDay,vhWarm,vhCloud,vhTime,vhMoonLight,vhWind;${ma}
void main(){vec3 rd=normalize(skyRay);float h=max(rd.y,0.);vec3 physical=physicalAtmosphere(rd)*.35;physical/=1.+max(max(physical.r,physical.g),physical.b)/2.;vec3 c=mix(mix(vhHorizon,vhZenith,pow(h,.38)),physical,vhDay);float sd=max(0.,dot(rd,vhSun));
c+=vec3(1.,.40,.13)*pow(sd,24.)*.42*vhWarm*(1.-vhCloud*.7);
if(vhSun.y>-.012)c+=vec3(1.,.79,.47)*smoothstep(.999979,.999994,sd)*22.*(1.-vhCloud*.78);
float cloud=0.,trans=1.;if(rd.y>.018){
 for(int i=0;i<7;i++){float height=180.+float(i)*29.;vec3 p=rd*(height/max(.025,rd.y));p.x+=vhTime*(1.2+vhWind*3.);p.z+=vhTime*.25;
 float base=vhFbm(p*.0019+vec3(0,0,float(i)*.13));float detail=vhNoise(p*.012+vec3(0,float(i),0));float cover=smoothstep(.74-vhCloud*.40,.86-vhCloud*.34,base-detail*.07);float layer=sin((float(i)+1.)/8.*3.14159);float alpha=cover*layer*.19;cloud+=trans*alpha;trans*=1.-alpha;}
 vec3 shade=mix(vec3(.11,.16,.24),vec3(.47,.53,.59),vhDay);vec3 edge=mix(vec3(.85,.95,1.),vec3(1.25,.66,.32),vhWarm);vec3 cv=mix(shade,edge,pow(sd,6.)*.75+.15)*(.13+vhDay*.87);c=mix(c,cv,clamp(cloud*2.3,0.,.98));}
float md=dot(rd,vhMoon);if(md>.99998&&vhMoon.y>0.){vec3 right=normalize(cross(abs(vhMoon.y)>.97?vec3(1,0,0):vec3(0,1,0),vhMoon));vec3 up=cross(vhMoon,right);vec2 q=vec2(dot(rd,right),dot(rd,up))/.0045;float r=dot(q,q);if(r<1.){vec3 n=right*q.x+up*q.y-vhMoon*sqrt(1.-r);float lit=smoothstep(-.03,.08,dot(n,vhSun));c=mix(c,mix(vec3(.008,.014,.023),vec3(.63,.69,.73),lit)*(1.-cloud*.8),1.-smoothstep(.94,1.,r));}}
gl_FragColor=vec4(max(c,vec3(.0001)),1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),n=new Ue(new Ja(1400,24,16),s);n.renderOrder=100,n.frustumCulled=!1,n.userData.noAO=!0;const p=new ha,h=new Ue(n.geometry,s);p.add(h);const u=new $e,w=new I({uniforms:{visibility:{value:0},pointRatio:{value:1}},transparent:!0,depthWrite:!1,blending:ca,vertexShader:"attribute float magnitude;uniform float pointRatio;varying float strength;void main(){vec4 mv=modelViewMatrix*vec4(position,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp((2.5-magnitude*.27)*pointRatio,.65,2.5);strength=pow(10.,-.19*(magnitude+1.));}",fragmentShader:"uniform float visibility;varying float strength;void main(){float d=length(gl_PointCoord-.5);float a=exp(-d*d*19.)*visibility*strength;if(a<.004)discard;gl_FragColor=vec4(.64,.76,1.,a);}"}),T=new fa(u,w);T.frustumCulled=!1,T.renderOrder=101,T.userData.noAO=!0;let j=null,y=null;fetch(new URL("/home/demo/assets/stars-hyg-IHqtqHPv.json",import.meta.url),{signal:e.signal}).then(P=>{if(!P.ok)throw new Error("Stellar catalogue unavailable");return P.json()}).then(P=>{i||(j=P.stars,y&&R(y),r())}).catch(()=>{});function R(P){if(i)return null;y=P;const d=xt(P);o.vhSun.value.fromArray(Ie(P.sun.direction)),o.vhMoon.value.fromArray(Ie(P.moon.direction)),o.vhDay.value=d.solar,o.vhWarm.value=d.warm,o.vhCloud.value=d.cloud,o.sunPosition.value.copy(o.vhSun.value).multiplyScalar(45e4),o.rayleigh.value=2.1,o.turbidity.value=2.4+d.cloud*4,o.mieCoefficient.value=.004,o.vhMoonLight.value=P.moon.fraction,o.vhWind.value=d.wind;const c=new K("#609ec8").lerp(new K("#ab8fa5"),d.warm*.24).lerp(new K("#909f9e"),d.cloud*.45),b=new K("#bed7da").lerp(new K("#ffbe87"),d.warm*.83).lerp(new K("#afb9b2"),d.cloud*.64);if(o.vhZenith.value.set("#030915").lerp(c,d.solar),o.vhHorizon.value.set("#0d2034").lerp(b,d.solar),w.uniforms.visibility.value=Number.isFinite(P.atmosphere.starVisibility)?Y(P.atmosphere.starVisibility):(1-Y(d.solar*5))*(1-d.cloud*.95),j){u.dispose();const f=[],x=[];for(const[k,A,C,v]of j){const S=ga(A,C,new Date(P.instant),P.region.lat,P.region.lng);if(S.altitude<0)continue;const F=S.azimuth*Math.PI/180,M=S.altitude*Math.PI/180,E=Ie([Math.sin(F)*Math.cos(M),Math.sin(M),Math.cos(F)*Math.cos(M)]);f.push(...E.map(q=>q*1150)),x.push(v)}u.setAttribute("position",new Qe(f,3)),u.setAttribute("magnitude",new Qe(x,1)),u.computeBoundingSphere()}return d}return{dome:n,stars:T,reflectionScene:p,uniforms:o,setEnvironment:R,setTime(P){o.vhTime.value=P},moveCamera(P){n.position.copy(P.position),T.position.copy(P.position)},dispose(){i||(i=!0,e.abort(),n.geometry.dispose(),s.dispose(),u.dispose(),w.dispose())}}}const Je="uniform float vhSeconds,vhBreeze,vhWet,vhSnow,vhAutumn,vhRetention,vhDay,vhFlower;uniform vec3 vhFog,vhSun;uniform float vhAir;varying vec3 vhWorld,vhNormal;",ra=`vec4 vhPos=vec4(transformed,1.);
#ifdef USE_INSTANCING
vhPos=instanceMatrix*vhPos;
#endif
vhWorld=(modelMatrix*vhPos).xyz;vhNormal=inverseTransformDirection(transformedNormal,viewMatrix);`,na="float vhRand(vec3 p){p=fract(p*.1031);p+=dot(p,p.yzx+33.33);return fract((p.x+p.y)*p.z);}",St="vec3 vhBump(vec3 n,vec3 p,float h){vec3 dx=dFdx(p),dy=dFdy(p);vec3 rx=cross(dy,n),ry=cross(n,dx);float det=dot(dx,rx);return normalize(abs(det)*n-sign(det)*(dFdx(h)*rx+dFdy(h)*ry));}";function Dt(){const r={vhSeconds:{value:0},vhBreeze:{value:.3},vhWet:{value:0},vhSnow:{value:0},vhAutumn:{value:0},vhRetention:{value:1},vhDay:{value:1},vhFlower:{value:1},vhFog:{value:new K},vhSun:{value:new V},vhAir:{value:.001}},e=[];let i=0;function o(a,t){const s=a.color.clone(),n=a.name||"",p=/fissured bark/.test(n),h=/limestone|stones|mineral edges/.test(n),u=/Laurel|Oak body|Sunlit leaf|Silver green|Fern green|Young growth|Bougainvillea|Petal edges/.test(n),w=/Meadow blade|Meadow seedheads|Meadow ivory|Meadow mauve/.test(n),T=/Clear low-iron|glass|coloured pane/i.test(n),j=/Ash soffit|ash|timber/i.test(n),y=/Great Lake water/.test(n),R=/moss|soil|earth|humus/i.test(n),P=/Laurel|Fern|Silver green/.test(n),d=!!t.getAttribute("_bend"),c=!!t.getAttribute("_flex"),b=u&&!!t.getAttribute("uv");if(a.userData.vhPrepared)return a;a.userData.vhPrepared=!0,a.side=u||w?Ha:ia,T&&(a.side=ia,a.transparent=!0,a.opacity=.15,a.color.set("#8dab9e"),a.metalness=.5,a.isMeshPhysicalMaterial&&(a.transmission=0,a.thickness=.045,a.ior=1.45,a.attenuationColor=new K("#d4dfc6"),a.attenuationDistance=25,a.roughness=.13,a.envMapIntensity=1.7,a.clearcoat=.35),a.depthWrite=!1),u||w?(a.roughness=w?.94:.86,a.envMapIntensity=.35,a.isMeshPhysicalMaterial&&(a.specularIntensity=.2)):R?a.roughness=.96:a.envMapIntensity=T?1.7:1,/Warm plaster/.test(n)&&a.color.multiplyScalar(.65),/reflected room light/.test(n)&&(a.emissive.set("#ff984e"),a.emissiveIntensity=/Amber/.test(n)?1.6:.45),/fine rose seam/.test(n)&&(a.emissive.set("#e846af"),a.emissiveIntensity=3);const f=a.emissiveIntensity||0;e.push({m:a,baseEmission:f,glass:T,water:y,baseColor:s,climateEmission:f,scoreResponsive:/fine rose seam|Amber lamps|Quiet honey/.test(n)});const x=(b?"varying vec2 vhLeafUV;":"")+(d?"attribute float _bend;attribute float _phase;":"")+(c?"attribute float _flex;":""),k=d?"float vhField=sin(vhSeconds*.9+_phase)+.38*sin(vhSeconds*.37+_phase*.41);transformed.x+=.28*_bend*vhField*(.45+vhBreeze);transformed.z-=.105*_bend*vhField*(.45+vhBreeze);":c?"float vhField=sin(vhSeconds*1.15+position.x*.53+position.z*.37);transformed.x+=_flex*vhField*(.4+vhBreeze);transformed.z+=_flex*sin(vhSeconds*.81+position.y)*(.2+vhBreeze*.4);":"",A=(b?"float leafWidth=.47*pow(max(0.,sin(vhLeafUV.x*3.14159)),.65)-.012*sin(vhLeafUV.x*90.);if(abs(vhLeafUV.y-.5)>leafWidth)discard;":"")+(/Bougainvillea|Petal edges|Meadow ivory|Meadow mauve/.test(n)?"if(vhFlower<.5)discard;":"")+(u&&!P?"if(vhRand(floor(vhWorld*4.))>vhRetention)discard;":"");a.onBeforeCompile=v=>{Object.assign(v.uniforms,r),v.vertexShader=Je+x+`
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+k+(b?"vhLeafUV=uv;":"")).replace("#include <project_vertex>",`#include <project_vertex>
`+ra),v.fragmentShader=Je+(b?"varying vec2 vhLeafUV;":"")+ma+na+St+`
`+v.fragmentShader;let S=A;if(b&&(S+="float rib=exp(-abs(vhLeafUV.y-.5)*140.);float veins=pow(.5+.5*cos((abs(vhLeafUV.y-.5)-vhLeafUV.x*.44)*165.),20.);diffuseColor.rgb*=.86+.12*sin(vhLeafUV.x*3.14159)+rib*.16+veins*.055;"),u&&!P&&(S+="diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.42,.12,.025)*( .8+vhNoise(vhWorld*.18)*.4),vhAutumn*.88);"),w&&(S+="diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.25,.22,.12),vhAutumn*.4);"),j&&(S+="float grain=vhNoise(vec3(vhWorld.x*4.,vhWorld.y*6.,vhWorld.z*130.));diffuseColor.rgb*=mix(.68,1.24,grain);"),p&&(S+="float ridges=vhFbm(vec3(vhWorld.x*18.,vhWorld.y*1.5,vhWorld.z*18.));diffuseColor.rgb*=mix(.35,1.30,ridges);"),R&&(S+="diffuseColor.rgb*=.62+vhFbm(vhWorld*.8)*.75;"),h&&(S+="diffuseColor.rgb*=.89+vhNoise(vhWorld*1.4)*.19;"),!T&&!y&&(S+="float up=smoothstep(.38,.82,normalize(vhNormal).y);float snow=vhSnow*up*(.65+.35*vhNoise(vhWorld*3.));diffuseColor.rgb*=1.-vhWet*.19;diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.72,.82,.86),snow);"),v.fragmentShader=v.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+S).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
roughnessFactor=mix(roughnessFactor,max(.08,roughnessFactor*.35),vhWet);`),(u||w)&&(v.fragmentShader=v.fragmentShader.replace("#include <lights_physical_pars_fragment>",Sa.lights_physical_pars_fragment.replace("reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );","reflectedLight.directDiffuse += directLight.color * saturate( (dot( geometryNormal, directLight.direction )+.32)/1.32 ) * BRDF_Lambert( material.diffuseContribution );"))),p||j||R||h){const F=p?"vhFbm(vec3(vhWorld.x*25.,vhWorld.y*2.,vhWorld.z*25.))*.055":j?"vhNoise(vec3(vhWorld.x*8.,vhWorld.y*8.,vhWorld.z*90.))*.005":R?"vhFbm(vhWorld*5.)*.07":"vhNoise(vhWorld*95.)*.002";v.fragmentShader=v.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=vhBump(normal,-vViewPosition,`+F+");")}y&&(v.fragmentShader=v.fragmentShader.replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
normal=normalize(normal+vec3(sin(vhWorld.x*1.4+vhSeconds*.6)*.07,sin(vhWorld.z*2.1-vhSeconds*.48)*.05,0.));`)),T&&(v.fragmentShader=v.fragmentShader.replace("#include <opaque_fragment>",`diffuseColor.a=.32+pow(1.-abs(dot(normal,normalize(vViewPosition))),3.)*.50;
#include <opaque_fragment>`)),v.fragmentShader=v.fragmentShader.replace("#include <opaque_fragment>",`float dist=length(cameraPosition-vhWorld);float mist=1.-exp(-max(0.,dist-(vhAir>.01?0.:45.))*vhAir);vec3 ray=normalize(vhWorld-cameraPosition);vec3 air=vhFog+vec3(.24,.12,.055)*pow(max(dot(ray,vhSun),0.),18.)*vhDay;outgoingLight=mix(outgoingLight,air,clamp(mist,0.,.985));
#include <opaque_fragment>`)},a.customProgramCacheKey=()=>[n,d,c,b,"live-world-04"].join(":");const C=new Ia({depthPacking:Qa,side:a.side});return C.onBeforeCompile=v=>{Object.assign(v.uniforms,r),v.vertexShader=Je+x+`
`+v.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
`+k+(b?"vhLeafUV=uv;":"")).replace("#include <project_vertex>",`#include <project_vertex>
`+ra.replace("vhNormal=inverseTransformDirection(transformedNormal,viewMatrix);","vhNormal=vec3(0.,1.,0.);")),v.fragmentShader=Je+(b?"varying vec2 vhLeafUV;":"")+na+`
`+v.fragmentShader.replace("#include <alphatest_fragment>",`#include <alphatest_fragment>
`+A)},C.customProgramCacheKey=()=>[n,d,c,b,"live-depth-04"].join(":"),a.userData.vhDepth=C,a.userData.vhKind={leaf:u,grass:w,glass:T,water:y},a}return{uniforms:r,prepare:o,setQuality(a){for(const t of e)t.water&&t.m.isMeshPhysicalMaterial&&(t.m.transmission=a==="full"?.24:0,t.m.needsUpdate=!0),t.glass&&t.m.isMeshPhysicalMaterial&&(t.m.transmission=a==="full"?.94:0,t.m.transparent=a!=="full",t.m.opacity=a==="full"?1:.15,t.m.depthWrite=a==="full",t.m.metalness=a==="full"?0:.5,/Clear low-iron/.test(t.m.name)?t.m.color.set(a==="full"?"#d4e4d7":"#8dab9e"):t.m.color.copy(t.baseColor),t.m.needsUpdate=!0)},setClimate(a,t){r.vhBreeze.value=a.wind,r.vhWet.value=a.wet,r.vhSnow.value=a.snow,r.vhAutumn.value=a.autumn,r.vhRetention.value=a.leafRetention,r.vhFlower.value=a.flowering,r.vhDay.value=a.solar,r.vhAir.value=a.air,r.vhFog.value.copy(t.vhHorizon.value),r.vhSun.value.copy(t.vhSun.value);for(const s of e)s.baseEmission&&(s.climateEmission=s.baseEmission*(/Amber lamps|Quiet honey/.test(s.m.name)?.08+(1-a.solar)*.92:.65+(1-a.solar)*.55),s.m.emissiveIntensity=s.climateEmission*(1+(s.scoreResponsive?i*.08:0)))},setScoreLevel(a){i=Math.max(0,Math.min(1,a));for(const t of e)t.scoreResponsive&&(t.m.emissiveIntensity=t.climateEmission*(1+i*.08))},setTime(a){r.vhSeconds.value=a},dispose(){var a;for(const t of e)(a=t.m.userData.vhDepth)==null||a.dispose()}}}function Ft(){const e=new Float32Array(5400),i=new Float32Array(1800);let o=62471;const a=()=>(o=Math.imul(o,1664525)+1013904223>>>0,o/4294967296);for(let h=0;h<1800;h++)e[h*3]=(a()-.5)*44,e[h*3+1]=a()*26,e[h*3+2]=(a()-.5)*44,i[h]=a();const t=new $e;t.setAttribute("position",new oa(e,3)),t.setAttribute("seed",new oa(i,1));const s={time:{value:0},snow:{value:0},amount:{value:0},wind:{value:.3},light:{value:1}},n=new I({uniforms:s,transparent:!0,depthWrite:!1,depthTest:!0,vertexShader:`attribute float seed;uniform float time,snow,amount,wind;varying float alpha;
 void main(){vec3 p=position;p.y=mod(p.y-time*mix(14.,.7+seed,snow),26.)-6.;
 p.x=mod(p.x+22.+time*wind*2.,44.)-22.;p.x+=sin(time+seed*50.)*snow*.45;
 vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=clamp(mix(1.2,3.4,snow)*20./max(3.,-mv.z),.8,6.);alpha=step(seed,amount)*smoothstep(3.,8.,-mv.z);}`,fragmentShader:"uniform float snow,light;varying float alpha;void main(){vec2 p=gl_PointCoord-.5;float a=mix(.35,smoothstep(.5,.12,length(p)),snow)*alpha;gl_FragColor=vec4(vec3(.55,.68,.75)*(.3+light*.7),a);}"}),p=new fa(t,n);return p.frustumCulled=!1,p.userData.noAO=!0,p.renderOrder=4,{points:p,setClimate(h){s.snow.value=h.snowfall>0?1:0,s.amount.value=Math.max(h.rain,h.snowfall),s.wind.value=h.wind,s.light.value=h.solar,p.visible=s.amount.value>.01},setTime(h){s.time.value=h},moveCamera(h){p.position.copy(h.position)},dispose(){t.dispose(),n.dispose()}}}function Tt(r,e=()=>{},i={}){const o=new Da({canvas:r,antialias:!1,powerPreference:"high-performance"});o.outputColorSpace=Xa,o.toneMapping=ba,o.toneMappingExposure=1.1,o.shadowMap.enabled=!0,o.shadowMap.type=Za,o.shadowMap.autoUpdate=!1;const a=new ha,t=new Ya(40,1,.18,2400);a.environmentIntensity=.68;const s=wt(()=>{E&&q&&!L&&!document.hidden&&(Pe(),oe())}),n=Ft(),p=Dt();a.add(s.dome,s.stars,n.points);const h=new $a("#bdd4de","#222a19",.5),u=new et("#ffd2a0",3);u.castShadow=!0,u.shadow.mapSize.set(2048,2048),u.shadow.bias=-15e-5,u.shadow.normalBias=.075,u.shadow.radius=2,a.add(h,u,u.target);const w=new bt(o),T=new dt(a,t);class j extends re{_overrideVisibility(){super._overrideVisibility(),this.scene.traverse(g=>{var m;g.visible&&(g.userData.noAO||((m=g.material)==null?void 0:m.transmission)>0)&&(g.visible=!1,this._visibilityCache.push(g))})}}const y=new j(a,t,640,400);y.blendIntensity=.46,y.updateGtaoMaterial({radius:1.25,distanceExponent:1.4,thickness:1,distanceFallOff:1}),y.updatePdMaterial({lumaPhi:10,depthPhi:2,normalPhi:3,radius:3});const R=new Ae(new $(640,400),.06,.22,3),P=new vt;R.materialHighPassFilter.fragmentShader=R.materialHighPassFilter.fragmentShader.replace("float v = luminance( texel.xyz );","texel.rgb /= max(1.,max(max(texel.r,texel.g),texel.b)/8.); float v = luminance( texel.xyz );"),w.addPass(T),w.addPass(y),w.addPass(R),w.addPass(P);const d=new pa(gt);w.addPass(d);const c=new Fa(o);let b=null;const f=new Map,x=new Map,k=new Set,A=new Set,C=new Set,v=new Set,S=new Set;let F=null,M=null,E=null,q=!1,ee=!1,Q="balanced",L=!1,X=0,z=0,Z=0,ae=0,te=0,ue="",be=performance.now(),de=0,O=!1,J=null,W=0,ie=0;const H=xa(),Ce=wa(),ne=new at;a.add(ne);function _e(l){l.updateMatrixWorld(!0);const g=new Map;l.traverse(m=>{if(!m.isMesh||m.geometry.getAttribute("_bend")||Array.isArray(m.material))return;const D=m.geometry.uuid+"|"+m.material.uuid;g.has(D)||g.set(D,[]),g.get(D).push(m)});for(const m of g.values()){if(m.length<3)continue;const D=m[0],_=new it(D.geometry,D.material,m.length);_.name=D.name+" · instances",m.forEach((U,N)=>{_.setMatrixAt(N,U.matrixWorld),U.removeFromParent()}),_.instanceMatrix.needsUpdate=!0,_.computeBoundingSphere(),_.castShadow=D.castShadow,_.receiveShadow=!0,_.customDepthMaterial=D.customDepthMaterial,l.add(_)}}function ze(l){l.updateMatrixWorld(!0);const g=new Map;l.traverse(m=>{if(!m.isMesh||m.isInstancedMesh||m.geometry.getAttribute("_bend")||m.geometry.getAttribute("_flex")||Array.isArray(m.material))return;const D=m.material.uuid+"|"+Object.keys(m.geometry.attributes).sort().join(",");g.has(D)||g.set(D,[]),g.get(D).push(m)});for(const m of g.values()){if(m.length<3)continue;const D=m.map(N=>N.geometry.clone().applyMatrix4(N.matrixWorld)),_=ka(D,!1);if(D.forEach(N=>N.dispose()),!_)continue;const U=new Ue(_,m[0].material);U.name=m[0].material.name+" · architecture",U.castShadow=m[0].castShadow,U.receiveShadow=!0,U.customDepthMaterial=m[0].customDepthMaterial,m.forEach(N=>N.removeFromParent()),l.add(U)}}function me(l){l.traverse(g=>{g.isInstancedMesh&&S.add(g),g.geometry&&A.add(g.geometry);for(const m of Array.isArray(g.material)?g.material:[g.material])if(m){C.add(m);for(const D of Object.values(m))D!=null&&D.isTexture&&v.add(D)}})}function De(){var l,g,m;for(const D of S)D.dispose();S.clear();for(const D of A)D.dispose();for(const D of C)D.dispose();for(const D of v)D.dispose(),(m=(g=(l=D.source)==null?void 0:l.data)==null?void 0:g.close)==null||m.call(g);A.clear(),C.clear(),v.clear()}async function Le(l){if(!Object.hasOwn(Te,l))throw new TypeError("Unknown geometry scene");if(f.has(l))return f.get(l);if(x.has(l))return x.get(l);const g=new AbortController;k.add(g);const m=setTimeout(()=>g.abort(new Error("Terrace loading exceeded two minutes")),12e4),D=async(U,N)=>{const B=await fetch(U,{signal:g.signal});if(!B.ok)throw new Error("Terrace asset unavailable ("+B.status+")");return N?B.arrayBuffer():B.json()},_=Promise.all([D(Te[l].geometry,!0),D(Te[l].metadata,!1)]).then(async([U,N])=>{if(L)throw new DOMException("World was disposed","AbortError");const B=await st(l,U,N);if(me(B.scene),L)throw De(),new DOMException("World was disposed","AbortError");const Ge=new Map;B.scene.traverse(G=>{if(!G.isMesh)return;const pe=G.material,le=pe.uuid+":"+!!G.geometry.getAttribute("_bend")+":"+!!G.geometry.getAttribute("_flex");Ge.has(le)||Ge.set(le,p.prepare(pe.clone(),G.geometry)),G.material=Ge.get(le),G.customDepthMaterial=G.material.userData.vhDepth,G.castShadow=!G.material.userData.vhKind.glass&&!G.material.userData.vhKind.water,G.receiveShadow=!0,G.geometry.getAttribute("_bend")&&(G.frustumCulled=!1)}),me(B.scene),p.setQuality(Q),_e(B.scene),ze(B.scene),me(B.scene),B.scene.updateMatrixWorld(!0);const fe={root:B.scene,camera:B.cameras[0],meta:N};return f.set(l,fe),fe}).finally(()=>{clearTimeout(m),x.delete(l),k.delete(g)});return x.set(l,_),_}async function ge(l){if(!Object.hasOwn(Te,l))throw new TypeError("Unknown geometry scene");if(M=l,!q||!E||L||O||document.hidden)return;const g=++te;e({place:M,status:"loading"}),r.dataset.status="loading";try{const m=await Le(l);if(L||g!==te)return;F&&F.root.removeFromParent(),F=m,a.add(F.root),F.camera&&(F.camera.getWorldPosition(t.position),F.camera.getWorldQuaternion(t.quaternion),t.fov=F.camera.fov),t.aspect=Math.max(1,r.clientWidth)/Math.max(1,r.clientHeight),t.updateProjectionMatrix(),s.moveCamera(t),n.moveCamera(t),ne.clear();for(const U of m.meta.lights){const N=new tt(new K(...U.color),U.energy,24,2);N.position.fromArray(U.position),N.userData.base=U.energy,ne.add(N)}const D=new V;t.getWorldDirection(D),D.multiplyScalar(l==="terrace"?42:18).add(t.position),u.target.position.copy(D);const _=l==="terrace"?75:l==="meadow"?40:32;Object.assign(u.shadow.camera,{left:-_,right:_,top:_,bottom:-_,near:1,far:300}),u.shadow.camera.updateProjectionMatrix(),H.invalidate(),r.dataset.status="loaded",r.dataset.renderer="blender-live-geometry",r.dataset.place=l,e({place:l,status:"loaded"}),ve(),oe(),he()}catch(m){if(L||g!==te)return;Fe(m)}}function Fe(l){var g;L||O||(O=!0,q=!1,cancelAnimationFrame(X),X=0,r.dataset.status="failed",e({place:M,status:"failed",message:(l==null?void 0:l.message)||String(l)}),(g=i.onError)==null||g.call(i,l))}function Pe(){if(!E||L||!q||document.hidden||O)return;const l=c.fromScene(s.reflectionScene,.03,.1,2e3,{size:128});a.environment=l.texture,b==null||b.dispose(),b=l}function ve(){if(!E)return;H.invalidate();const l=s.setEnvironment(E);p.setClimate(l,s.uniforms),n.setClimate(l);const g=E.sun.altitude<-.8,m=new V().fromArray(Ie(g?E.moon.direction:E.sun.direction));u.position.copy(u.target.position).addScaledVector(m,150),u.intensity=g?l.moonPower:l.sunPower,u.color.set(g?"#b8cafa":l.warm>.5?"#ffbd83":"#fff1d6"),h.color.set(l.solar<.1?"#567b9c":"#a1cde3"),h.groundColor.set("#243c32"),h.intensity=.18+l.solar*.8,ne.children.forEach(_=>{_.userData.climate=_.userData.base*(.05+(1-l.solar)*1.2),_.intensity=_.userData.climate*(1+W*.08)}),o.toneMappingExposure=l.solar<.1?1.65:1.12;const D=[E.region.lat,E.region.lng,E.region.zone,E.instant.slice(0,16),l.cloud.toFixed(2),l.solar.toFixed(3),l.warm.toFixed(3)].join(":");q&&D!==ue&&(ue=D,Pe()),r.dataset.light=JSON.stringify({sunPower:u.intensity,sky:s.uniforms.vhHorizon.value.toArray(),sun:s.uniforms.vhSun.value.toArray()}),r.dataset.sunAltitude=E.sun.altitude.toFixed(3),r.dataset.moonAltitude=E.moon.altitude.toFixed(3),r.dataset.wetness=l.wet.toFixed(3),r.dataset.snow=l.snow.toFixed(3),r.dataset.autumn=l.autumn.toFixed(3),r.dataset.instant=E.instant,oe()}function oe(){var l,g;if(!(!F||!E||L||O||!q||document.hidden||!r.clientWidth||!r.clientHeight))try{const m=performance.now();if(o.info.reset(),o.shadowMap.needsUpdate=H.next(m,{quality:Q,still:ee}),w.render(),(l=o.info.programs)!=null&&l.some(D=>{var _;return((_=D.diagnostics)==null?void 0:_.runnable)===!1}))throw new Error("A live terrace shader could not compile");ae=ae*.9+(performance.now()-m)*.1,Z++,de++,J=performance.now(),J-be>=1e3&&(r.dataset.fps=(de*1e3/(J-be)).toFixed(1),de=0,be=J),r.dataset.status="ready",r.dataset.frames=String(Z),r.dataset.sceneTime=z.toFixed(3),(Z===1||Z%12===0)&&(r.dataset.drawCalls=String(o.info.render.calls),r.dataset.triangles=String(o.info.render.triangles),r.dataset.frameMs=ae.toFixed(1),r.dataset.shadowUpdates=String(H.diagnostics().shadowUpdates)),(g=i.onPaint)==null||g.call(i,{frame:Z,lastPaint:J,sceneTime:z,drawCalls:o.info.render.calls,triangles:o.info.render.triangles})}catch(m){Fe(m)}}function xe(){p.setScoreLevel(W),ne.children.forEach(l=>{l.intensity=(l.userData.climate??l.userData.base)*(1+W*.08)})}function ke(l){if(X=0,!q||L||O||document.hidden)return;if(ee){oe();return}X=requestAnimationFrame(ke);const g=Q==="full"?1e3/30:50,m=Ce.step(l,g);m!==null&&(z+=m,W+=(ie-W)*(1-Math.exp(-m*3)),xe(),p.setTime(z),s.setTime(z),n.setTime(z),oe())}function he(){cancelAnimationFrame(X),X=0,Ce.reset(),q&&F&&!O&&(X=requestAnimationFrame(ke))}function Me(){const l=r.getBoundingClientRect();if(!l.width)return;const g=Math.min(globalThis.devicePixelRatio||1,Q==="full"?1.5:1);o.setPixelRatio(g),o.setSize(l.width,l.height,!1),w.setPixelRatio(g),w.setSize(l.width,l.height),d.material.uniforms.resolution.value.set(1/(l.width*g),1/(l.height*g)),t.aspect=l.width/l.height,t.updateProjectionMatrix(),oe()}const Ee=new ResizeObserver(Me);return Ee.observe(r),o.info.autoReset=!1,{setPlace:ge,setEnvironment(l){L||O||(E=va(l),ve(),q&&M&&!F&&!x.has(M)&&ge(M))},setActive(l){L||O||(q=!!l,l&&E&&(ve(),M&&!F&&!x.has(M)&&ge(M)),he())},setStill(l){L||O||(ee=!!l,ee&&(W=0,xe()),he())},setQuality(l){L||O||(Q=l==="full"?"full":"balanced",H.invalidate(),p.setQuality(Q),y.enabled=Q==="full",Me(),he())},setLevel(l){L||O||(ie=Number.isFinite(l)?Math.min(1,Math.max(0,l)):0,ee&&(W=0,xe()))},renderOnce(){oe()},diagnostics(){return{loaded:!!F,frame:Z,lastPaint:J,active:q,still:ee,failed:O,quality:Q,scoreLevel:W,sceneTime:z,place:M,drawCalls:o.info.render.calls,triangles:o.info.render.triangles,frameMs:ae,...H.diagnostics()}},dispose(){var l;L||(L=!0,te++,cancelAnimationFrame(X),k.forEach(g=>g.abort()),k.clear(),Ee.disconnect(),De(),f.clear(),x.clear(),p.dispose(),s.dispose(),n.dispose(),b==null||b.dispose(),c.dispose(),w.dispose(),y.dispose(),R.dispose(),(l=T.dispose)==null||l.call(T),P.dispose(),d.dispose(),u.shadow.dispose(),o.dispose(),o.forceContextLoss())}}}export{Tt as createLivingWorld};
