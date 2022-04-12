function get_origem(marca_){
	for(var i_mar = 0; i_mar < marcas.length; i_mar++){		
		if (marcas[i_mar][0] == marca_.toUpperCase()) {
			return marcas[i_mar][1];
		}
	}
	return '';
}

function dados_marcas() {
	marcas = [
		['',						'0'],
		['ABALUX',					'0'],
		['ACCORD',					'0'],
		['ACEND',					'0'],
		['ALTENA',					'0'],
		['ALUMENS',					'2'],
		['ARQUITETIZZE',			'2'],
		['BELLA ILUMINAÇÃO', 		'2'],
		['BELLA ITALIA',			'0'],
		['BIANCOLUCE',				'2'],
		['BLUMENAU ILUMINAÇÃO', 	'2'],
		['BRILIA',					'2'],
		['CAISMA',					'0'],
		['CARAMBOLA',				'0'],
		['CASUAL LIGHT',			'2'],
		['CASUAL LIGHT QUALITY',	'2'],
		['CASUAL LIGHT STUDIOLUCE',	'2'],
		['CLASSIC LAR',				'0'],
		['DM LUMI',					'0'],
		['DUE LUCI', 				'0'],
		['ECOFORCE', 				'0'],
		['FEMARTE', 				'0'],
		['FLAVO', 					'2'],
		['FLC', 					'2'],
		['FOCO METALLO', 			'0'],
		['FURLIGHT', 				'1'],
		['GAYA',					'2'],
		['GERMANY', 				'0'],
		['GMH TRADE', 				'2'],
		['GOLDEN ART', 				'0'],
		['HANSA', 					'0'],
		['HUNTER FAN', 				'2'],
		['IMPORTADOS', 				'1'],
		['INCOLUSTRE', 				'0'],
		['INITIAL', 				'2'],
		['INTERLIGHT', 				'0'],
		['ITAMONTE IMPORTADOS', 	'2'],
		['ITAMONTE NACIONAL', 		'0'],
		['JLR', 					'2'],
		['KIN', 					'2'],
		['KLAXON', 					'0'],
		['LAMPLUZ', 				'0'],
		['LEDOS', 					'2'],
		['LLUM', 					'2'],
		['LUCIIN', 					'2'],
		['LUMICENTER', 				'0'],
		['LUMINATTI', 				'2'],
		['MADELUSTRE', 				'0'],
		['MAIS LUZ', 				'2'],
		['MANTRA', 					'2'],
		['MART', 					'2'],
		['MBLED', 					'2'],
		['METALDOMADO', 			'0'],
		['METAL TÉCNICA', 			'0'],
		['MISTERLED', 				'0'],
		['MUNCLAIR', 				'0'],
		['MUNDIAL LUX', 			'0'],
		['NEWLINE', 				'0'],
		['NORDECOR', 				'2'],
		['OLD ARTISAN', 			'0'],
		['ORLUCE', 	         		'0'],
		['OPUS', 					'2'],
		['PIX ILUMINAÇÃO', 			'2'],
		['POWER LUME', 				'0'],
		['ROMALUX', 				'2'],
		['SAVE ENERGY', 			'0'],
		['SINDORA', 				'2'],
		['SKYLIGHT', 				'2'],
		['SPOTLINE', 				'0'],
		['STARLUX', 				'2'],
		['STELLA', 					'2'],
		['STILO CLEAN', 			'0'],
		['STUDIOLUCE', 				'2'],
		['TOM LUZ', 				'0'],
		['TRAMONTINA', 				'2'],
		['TUPIARA', 				'2'],
		['USINA DESIGN', 			'0'],
	];
}