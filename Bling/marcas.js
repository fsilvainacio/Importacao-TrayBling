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
		['ACCORD',					'0'],
		['ACEND',					'0'],
		['ATTIMO',					'0'],
		['ARQUITETIZZE',			'2'],
		['BELLA ILUMINAÇÃO', 		'2'],
		['BELLA ITALIA',			'0'],
		['BIANCOLUCE',				'2'],
		['BIASÁ',					'2'],
		['BRILIA',					'2'],
		['BLUMENAU ILUMINAÇÃO', 	'2'],
		['CARAMBOLA',				'0'],
		['CAISMA',					'0'],
		['CASUAL LIGHT',			'2'],
		['CASUAL LIGHT QUALITY',	'2'],
		['CASUAL LIGHT STUDIOLUCE',	'2'],
		['CASUAL STUDIOLUCE',		'2'],
		['CINDERELLA', 				'2'],
		['CLASSIC LAR',				'0'],
		['DM LUMI',					'0'],
		['DUE LUCI', 				'0'],
		['ECOFORCE', 				'0'],
		['EKAZA',	 				'2'],
		['FLAVO', 					'2'],
		['FLC', 					'2'],
		['FOCO METALLO', 			'0'],
		['FORMA DA LUZ', 			'0'],
		['FURLIGHT', 				'1'],
		['GAYA',					'2'],
		['GERMANY', 				'0'],
		['GMH TRADE', 				'2'],
		['HANSA', 					'0'],
		['IMPORTADOS', 				'1'],
		['INCOLUSTRE', 				'0'],
		['INITIAL', 				'2'],
		['INTERLIGHT', 				'0'],
		['INTERPAM', 				'0'],
		['ITAMONTE IMPORTADOS', 	'2'],
		['ITAMONTE NACIONAL', 		'0'],
		['JLR', 					'2'],
		['KIN', 					'2'],
		['LAMPLUZ', 				'0'],
		['LEDOS', 					'2'],
		['LLUM', 					'2'],
		['LUMICENTER', 				'0'],
		['LUMINATTI', 				'2'],
		['LUSTRELUX', 				'0'],
		['MADELUSTRE', 				'0'],
		['MAIS LUZ', 				'2'],
		['MANTRA', 					'2'],
		['MART', 					'2'],
		['MBLED', 					'2'],
		['METALDOMADO', 			'0'],
		['MISTERLED', 				'0'],
		['MUNCLAIR', 				'0'],
		['MUNDIAL LUX', 			'0'],
		['NEWLINE', 				'0'],
		['NORDECOR', 				'2'],
		['OLD ARTISAN', 			'0'],
		['OPUS', 					'2'],
		['ORLUCE', 	         		'0'],
		['PHILIPS', 	       		'2'],
		['PIULUCE', 	       		'0'],
		['PIX ILUMINAÇÃO', 			'2'],
		['POSITIVO',	 			'2'],
		['ROMALUX', 				'2'],
		['SAVE ENERGY', 			'0'],
		['SINDORA', 				'2'],
		['SKYLIGHT', 				'2'],
		['SPOTLINE', 				'0'],
		['STARLUX', 				'2'],
		['STARTEC', 				'2'],
		['STELLA', 					'2'],
		['STUDIOLUCE', 				'2'],
		['TOM LUZ', 				'0'],
		['TRAMONTINA', 				'2'],
		['TUPIARA', 				'2'],
		['USINA DESIGN', 			'0'],
		
		['',						'0'],
		['ABALUX',					'0'],
		['ALTENA',					'0'],
		['ALUMENS',					'2'],
		['FEMARTE', 				'0'],
		['GOLDEN ART', 				'0'],
		['HUNTER FAN', 				'2'],
		['KLAXON', 					'0'],
		['LUCIIN', 					'2'],
		['METAL TÉCNICA', 			'0'],
		['POWER LUME', 				'0'],
		['STILO CLEAN', 			'0'],
	];
}