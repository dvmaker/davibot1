const help = (prefix) => {
	return `
βββπ¦γ INFO γπ¦ββ
β
βData: %day_of_month_short%/%month_short%/%year%
βDia: %day_of_week%
βHorΓ‘rio: %hour_of_day%:%minute%
βNΓ­vel de bateria: %battery%%
β
β£ββπ¦γ NOVIDADES γπ¦ββ
β
βπ€¬ ${prefix}reportar
β
β£ββπ¦γ MENU γπ¦ββ
β
βπ€¬ ${prefix}figu
βπ€¬ ${prefix}animecry
βπ€¬ ${prefix}toimg
βπ€¬ ${prefix}darkjokes (memes aleatΓ³rios)
βπ€¬ ${prefix}memeindo
βπ€¬ ${prefix}tts
βπ€¬ ${prefix}lolih [ on ]
βπ€¬ ${prefix}nsfwloli [ off ]
βπ€¬ ${prefix}url2img
βπ€¬ ${prefix}play [ nome da msc ]
βπ€¬ ${prefix}leens [ na legenda ]
βπ€¬ ${prefix}wait [ na legenda ]
βπ€¬ ${prefix}setprefix
β
β£ββπ¦γ OUTROS γπ¦ββ
β
βπ€¬ ${prefix}wame
βπ€¬ ${prefix}spamcall
βπ€¬ ${prefix}play (nome da msc)
βπ€¬ ${prefix}simih [ 1/0 ]
βπ€¬ ${prefix}tm [ texto ]
βπ€¬ ${prefix}bloqueados
βπ€¬ ${prefix}bloquear [ @ ]
βπ€¬ ${prefix}desbloquear [ @ ]
βπ€¬ ${prefix}limpar
βπ€¬ ${prefix}help1
βπ€¬ ${prefix}dono
βπ€¬ ${prefix}owner
βπ€¬ ${prefix}tts [ texto ]
βπ€¬ ${prefix}termux
βπ€¬ ${prefix}ytmp4
β
β£ββπ¦γ IMAGENS γπ¦ββ
β
βπ€¬ ${prefix}loli [ off ]
βπ€¬ ${prefix}loli1
βπ€¬ ${prefix}dono
βπ€¬ ${prefix}boanoite
βπ€¬ ${prefix}bomdia
βπ€¬ ${prefix}boatarde
βπ€¬ ${prefix}rize
βπ€¬ ${prefix}minato
βπ€¬ ${prefix}boruto
βπ€¬ ${prefix}hinata
βπ€¬ ${prefix}sasuke
βπ€¬ ${prefix}sakura
βπ€¬ ${prefix}naruto
βπ€¬ ${prefix}meme   
βπ€¬ ${prefix}lofi
βπ€¬ ${prefix}canal
β
β£ββπ¦γ INTELIGΓNCIA IA γπ¦ββ
β
βπ€¬ ${prefix}simih 1 (para ativar)
βπ€¬ ${prefix}simih 0 (para desativar)
βπ€¬ ${prefix}simi (sua mensagem)
β
β£ββπ¦γ PREMIUM γπ¦ββ
β
βπ€¬ ${prefix}dado
βπ€¬ ${prefix}destrava
βπ€¬ ${prefix}gpessoa
βπ€¬ ${prefix}pack
βπ€¬ ${prefix}chentai
βπ€¬ ${prefix}cekvip
βπ€¬ ${prefix}premiumlist
βπ€¬ ${prefix}delete
βπ€¬ ${prefix}modapk
βπ€¬ ${prefix}indo10
βπ€¬ ${prefix}daftarvip
βπ€¬ ${prefix}qrcode
βπ€¬ ${prefix}chentai
βπ€¬ ${prefix}gcpf
βπ€¬ ${prefix}gbin
βπ€¬ ${prefix}pack
βπ€¬ ${prefix}destrava
βπ€¬ ${prefix}gpessoa
βπ€¬ ${prefix}gbin
βπ€¬ ${prefix}gcpf
β
β£ββπ¦γ GRUPO γπ¦ββ
β
βπ€¬ ${prefix}attp [ texto ]
βπ€¬ ${prefix}banir usuΓ‘rio [ @ ]
βπ€¬ ${prefix}desbanir usuΓ‘rio [ @ ]
βπ€¬ ${prefix}tm [ texto ]
βπ€¬ ${prefix}sair
βπ€¬ ${prefix}play (nome da msc)
βπ€¬ ${prefix}setnome
βπ€¬ ${prefix}bemvindo [ 1/0 ]
βπ€¬ ${prefix}bomdia
βπ€¬ ${prefix}boanoite
βπ€¬ ${prefix}marcar
βπ€¬ ${prefix}marcar2
βπ€¬ ${prefix}marcar3
βπ€¬ ${prefix}clonar [ @ ]
βπ€¬ ${prefix}setfoto
βπ€¬ ${prefix}grupoinfo
βπ€¬ ${prefix}promover [ @ ]
βπ€¬ ${prefix}rebaixar
βπ€¬ ${prefix}admins
βπ€¬ ${prefix}linkgp
βπ€¬ ${prefix}banirdogp [ @ ]
βπ€¬ ${prefix}add [ @ ]
βπ€¬ ${prefix}gay [ @ ]
βπ€¬ ${prefix}tmgp
βπ€¬ ${prefix}tmgp2
βπ€¬ ${prefix}notify
βπ€¬ ${prefix}fechargp
βπ€¬ ${prefix}abrirgp
βπ€¬ ${prefix}leveling [ on/off ]
βπ€¬ ${prefix}level
βπ€¬ ${prefix}add
βπ€¬ ${prefix}promover
βπ€¬ ${prefix}setfoto [ na legenda ]
βπ€¬ ${prefix}setname [ texto ]
βπ€¬ ${prefix}rebaixar
βπ€¬ ${prefix}admins
βπ€¬ ${prefix}marcar
βπ€¬ ${prefix}marcar2
βπ€¬ ${prefix}marcar3
βπ€¬ ${prefix}bemvindo [ 1/0 ]
βπ€¬ ${prefix}grupoinfo
βπ€¬ ${prefix}bomdia
βπ€¬ ${prefix}boatarde
βπ€¬ ${prefix}boanoite
βπ€¬ ${prefix}setdesc
β
β£ββπ¦γ ESPECIFICO DO BOT γπ¦ββ
β
βπ€¬ ${prefix}clonar [ @ ]
βπ€¬ ${prefix}dono
βπ€¬ ${prefix}ping
βπ€¬ ${prefix}termux
βπ€¬ ${prefix}gay [ @ ]
βπ€¬ ${prefix}wame
βπ€¬ ${prefix}map [ cidade ]
βπ€¬ ${prefix}setppbot [ marque a img ]
βπ€¬ ${prefix}pinterest
βπ€¬ ${prefix}timer
β
β£ββπ¦γ MAIS ALGUNS γπ¦ββ
β
βπ€¬ ${prefix}neko
βπ€¬ ${prefix}ttp [ texto ]
βπ€¬ ${prefix}spamcall
βπ€¬ ${prefix}testime
βπ€¬ ${prefix}tomp3
βπ€¬ ${prefix}happymod [ jogo/app ]
βπ€¬ ${prefix}rize
βπ€¬ ${prefix}ytsearch
βπ€¬ ${prefix}moddroid [ jogo/app ]
βπ€¬ ${prefix}nomegp
βπ€¬ ${prefix}darkjokes (memes aleatΓ³rios)
βπ€¬ ${prefix}animecry
βπ€¬ ${prefix}gay1
βπ€¬ ${prefix}next
βπ€¬ ${prefix}alerta
βπ€¬ ${prefix}pronomeneu [ texto ]
βπ€¬ ${prefix}hobby
β
β£ββπ¦γ COMANDOS DE MUSICA γπ¦ββ
β
βSUGESTΓES DE MUSICA CHAME O CRIADOR
β
βπ€¬ CASA DO LUAN
βπ€¬ ${prefix}msc1
βπ€¬ PISCA A XERECA QUANDO VER O PARAFAL(Remix)
βπ€¬ ${prefix}msc2
βπ€¬ RAP DO SOLITΓRIO
βπ€¬ ${prefix}msc3
βπ€¬ UNIΓO FLASCO
βπ€¬ ${prefix}msc4
βπ€¬ UNIΓO FLASCO(Clipe oficial)
βπ€¬ ${prefix}msc5
βπ€¬ CAVALGADA SALIENTE
βπ€¬ ${prefix}msc6
βπ€¬ TETO - FAZER DINHEIRO
βπ€¬ ${prefix}msc7
β
β£ββπ¦γ OUTROS /2 γπ¦ββ
β
βπ€¬ ${prefix}antilink [  1/0  ]
βπ€¬ ${prefix}brainly [ pergunta ]
βπ€¬ ${prefix}antiracismo [ on/off ]
βπ€¬ ${prefix}setnomebot
βπ€¬ ${prefix}meme
β
β
β£ββπ¦γ ππ’π‘π’ γπ¦ββ
β
β NOME: DAVI
β INSTA: @davi_mendes_11
β WPP: wa.me/+553188514445
β YOUTUBE: https://youtube.com/channel/UCn96kGGSpgN6pSNm21qapJw
β
β  "Peita ou respeita ππ©
β  "kibadores, vΓ£o se fuder"
β
βBOT FEITO EM BASE DARK
β
ββγ DAVI BOT γ`
}

exports.help = help

