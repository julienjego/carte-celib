window.onload = function(){

	var paper = Raphael("canvas", 640, 710);
	
	//variables femme
	var circleF = {};
	var altCircleF = {}; // variable à utiliser pour les cercles qui se chevauchent

	//variables homme
	var circleH = {};
	var altCircleH = {}; // variable à utiliser pour les cercles qui se chevauchent


	circleF.poitiers = paper.circle(243, 371, 13).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.poitiers.node).qtip({content:
			{text:"<b>113</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Poitiers</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });
	
	circleF.lyon = paper.circle(440, 427, 12).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.lyon.node).qtip({content:
			{text:"<b>112</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Lyon</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.bordeaux = paper.circle(199, 457, 10).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.bordeaux.node).qtip({content:
			{text:"<b>110</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Bordeaux</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.stras = paper.circle(577, 229, 8).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.stras.node).qtip({content:
			{text:"<b>106</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Strasbourg</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	circleF.tours = paper.circle(264, 315, 7.5).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.tours.node).qtip({content:
			{text:"<b>105</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Tours</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.aix = paper.circle(481, 556, 7).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.aix.node).qtip({content:
			{text:"<b>104</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Aix-en-Provence</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleF.montpel = paper.circle(408, 568, 7).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.montpel.node).qtip({content:
			{text:"<b>104</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Montpellier</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });


	circleF.avignon = paper.circle(444, 559, 5.5).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleF.avignon.node).qtip({content:
			{text:"<b>101</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Avignon</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });


	circleH.auber = paper.circle(345, 197, 48).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.auber.node).qtip({content:
			{text:"<b>148</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Aubervilliers</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.antibes = paper.circle(580, 550, 42).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.antibes.node).qtip({content:
			{text:"<b>142</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Antibes</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	circleH.stnaz = paper.circle(140, 319, 38).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.stnaz.node).qtip({content:
			{text:"<b>138</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Saint-Nazaire</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.brest = paper.circle(41, 232, 34).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.brest.node).qtip({content:
			{text:"<b>134</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Brest</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom left',
	        		at: 'top middle',
	    			}
	        });

	circleH.colmar = paper.circle(569, 267, 33).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.colmar.node).qtip({content:
			{text:"<b>133</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Colmar</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	circleH.bourges = paper.circle(348, 335, 31).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.bourges.node).qtip({content:
			{text:"<b>131</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Bourges</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.metz = paper.circle(505, 205, 30).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.metz.node).qtip({content:
			{text:"<b>130</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Metz</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.lorient = paper.circle(81, 272, 29).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.lorient.node).qtip({content:
			{text:"<b>129</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Lorient</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom left',
	        		at: 'top middle',
	    			}
	        });

	circleH.valence = paper.circle(440, 477, 28).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.valence.node).qtip({content:
			{text:"<b>128</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Valence</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.nanterre = paper.circle(308, 194, 28).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.nanterre.node).qtip({content:
			{text:"<b>128</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Nanterre</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	circleH.dunk = paper.circle(340, 80, 27).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(circleH.dunk.node).qtip({content:
			{text:"<b>127</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Dunkerque</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'top middle',
	        		at: 'bottom middle',
	    			}
	        });

	altCircleH.laseyne = paper.circle(499, 590, 27).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.laseyne.node).qtip({content:
			{text:"<b>127</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>La Seyne-sur-Mer</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.villeneuve = paper.circle(402, 101, 27).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.villeneuve.node).qtip({content:
			{text:"<b>127</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: "<b>Villeneuve d'Ascq</b>"}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'top middle',
	        		at: 'bottom middle',
	    			}
	        });

	altCircleH.toulon = paper.circle(519, 590, 26).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.toulon.node).qtip({content:
			{text:"<b>126</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Toulon</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom right',
	        		at: 'top middle',
	    			}
	        });

	altCircleH.aulnay = paper.circle(368, 194, 25).attr({fill: "#5F9F9F", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleH.aulnay.node).qtip({content:
			{text:"<b>125</b> hommes ne vivant pas en couple pour <b>100</b> femmes", title: '<b>Aulnay-sous-Bois</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

// banlieue

	altCircleF.levallois = paper.circle(308, 234, 6.5).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleF.levallois.node).qtip({content:
			{text:"<b>103</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Levallois-Perret</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleF.boulogne = paper.circle(335, 250, 7).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleF.boulogne.node).qtip({content:
			{text:"<b>104</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Boulogne-Billancourt</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleF.neuilly = paper.circle(328, 214, 9).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleF.neuilly.node).qtip({content:
			{text:"<b>108</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Neuilly-sur-Seine</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleF.paris = paper.circle(348, 214, 10).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleF.paris.node).qtip({content:
			{text:"<b>110</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Paris</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'bottom middle',
	        		at: 'top middle',
	    			}
	        });

	altCircleF.lille = paper.circle(372, 101, 6).attr({fill: "#FF7256", stroke: "#fff", 'stroke-width': 2, opacity: "0.8"});
		$(altCircleF.lille.node).qtip({content:
			{text:"<b>102</b> femmes ne vivant pas en couple pour <b>100</b> hommes", title: '<b>Lille</b>'}, 
			style: {
					classes: 'qtip-bootstrap',
	            	},
	    	position: {
	        		my: 'top middle',
	        		at: 'bottom middle',
	    			}
	        });


//fonction de stroke au survol homme//

	var current = null;
	for (state in circleH) {
	circleH[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", 'stroke-width': 2}, 100);
		paper.safari();
	};

	})(circleH[state], state);
}

//survol des ronds qui en chevauchent d'autres//

	for (state in altCircleH) {
	altCircleH[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	st.toFront();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", "stroke-width":2}, 100);
		paper.safari();
	};

	})(altCircleH[state], state);
}

//fonction de stroke au survol femme//

	var current = null;
	for (state in circleF) {
	circleF[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", 'stroke-width': 2}, 100);
		paper.safari();
	};

	})(circleF[state], state);
}

//survol des ronds qui en chevauchent d'autres//

	for (state in altCircleF) {
	altCircleF[state].color = "#000"; /* Couleur de la stroke au rollover */
	(function (st, state) {
	st[0].style.cursor = "pointer";
	
	st[0].onmouseover = function () {
	st.animate({stroke: st.color, "stroke-width":3, x: 50}, 100);
	paper.safari();
	st.toFront();
	};
	
	st[0].onmouseout = function () {
		st.animate({stroke: "#fff", "stroke-width":2}, 100);
		paper.safari();
	};

	})(altCircleF[state], state);
}

}